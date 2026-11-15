#!/usr/bin/env bun

// Use case: bun run scripts/convert-essen.ts Clips-Essen src/audio/generated-essen.ts src/audio/essen-key-rankings.csv

// Clips-Essen can be downloaded from here: https://figshare.com/s/03179521a56c88bfac63 
// Extract the directory containing the MIDI files and pass it as the first argument
// It's too big to put in this repository haha

import { readdir } from "node:fs/promises";
import { basename, extname, join, resolve } from "node:path";
import { rankKeyClassifications, type KeyClassification } from "../src/audio/key-analysis";
import { encodeSongNotes } from "../src/audio/song-notes";
import type { SongNote } from "../src/audio/music";

const NOTE_NAMES = [
    "C", "D♭", "D", "E♭", "E", "F", "F♭", "G", "A♭", "A", "B♭", "B",
];

type MidiEvent = {
    tick: number;
    status: number;
    channel: number;
    note: number;
    velocity: number;
};

type EssenClip = {
    title: string;
    tonic: number;
    scale: number;
    compressedNotes: string;
};

function readVariableLength(data: Uint8Array, start: number, end: number) {
    let value = 0;
    let offset = start;

    while (offset < end) {
        const byte = data[offset++];
        value = (value << 7) | (byte & 0x7f);
        if ((byte & 0x80) === 0) return { value, offset };
    }

    throw new Error("Invalid MIDI variable-length value");
}

function getMidiEvents(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
    const tag = (offset: number) =>
        String.fromCharCode(...data.subarray(offset, offset + 4));

    if (data.length < 14 || tag(0) !== "MThd") {
        throw new Error("Input is not a valid Standard MIDI File");
    }

    const headerLength = view.getUint32(4);
    const trackCount = view.getUint16(10);
    const division = view.getUint16(12);
    if (division & 0x8000) {
        throw new Error("SMPTE-timed MIDI files are not supported; expected ticks per beat");
    }
    if (division === 0) throw new Error("MIDI ticks per beat must be greater than zero");

    const events: MidiEvent[] = [];
    let offset = 8 + headerLength;

    for (let track = 0; track < trackCount; track++) {
        if (offset + 8 > data.length || tag(offset) !== "MTrk") {
            throw new Error("Invalid MIDI track header");
        }

        const trackLength = view.getUint32(offset + 4);
        const trackStart = offset + 8;
        const trackEnd = trackStart + trackLength;
        if (trackEnd > data.length) throw new Error("Truncated MIDI track");
        offset = trackStart;

        let tick = 0;
        let runningStatus = 0;
        while (offset < trackEnd) {
            const delta = readVariableLength(data, offset, trackEnd);
            tick += delta.value;
            offset = delta.offset;
            if (offset >= trackEnd) throw new Error("Truncated MIDI event");

            let status = data[offset];
            if (status < 0x80) {
                if (runningStatus < 0x80 || runningStatus >= 0xf0) {
                    throw new Error("Invalid MIDI running status");
                }
                status = runningStatus;
            } else {
                offset++;
            }

            if (status === 0xff) {
                runningStatus = 0;
                if (offset >= trackEnd) throw new Error("Truncated MIDI meta event");
                offset++;
                const length = readVariableLength(data, offset, trackEnd);
                offset = length.offset + length.value;
            } else if (status === 0xf0 || status === 0xf7) {
                runningStatus = 0;
                const length = readVariableLength(data, offset, trackEnd);
                offset = length.offset + length.value;
            } else if (status >= 0xf0) {
                runningStatus = 0;
                offset += status === 0xf2 ? 2 : status === 0xf1 || status === 0xf3 ? 1 : 0;
            } else {
                runningStatus = status;
                const command = status & 0xf0;
                const dataLength = command === 0xc0 || command === 0xd0 ? 1 : 2;
                if (offset + dataLength > trackEnd) {
                    throw new Error("Truncated MIDI channel event");
                }

                if (command === 0x80 || command === 0x90) {
                    events.push({
                        tick,
                        status: command,
                        channel: status & 0x0f,
                        note: data[offset],
                        velocity: command === 0x80 ? 0 : data[offset + 1],
                    });
                }
                offset += dataLength;
            }

            if (offset > trackEnd) throw new Error("MIDI event exceeds track length");
        }
    }

    return { events, ticksPerBeat: division };
}

async function analyzeMidiToSong(filePath: string): Promise<{
    song: EssenClip | null;
    rankedKeys: KeyClassification[];
    title: string;
}> {
    const data = new Uint8Array(await Bun.file(filePath).arrayBuffer());
    const { events, ticksPerBeat } = getMidiEvents(data);
    events.sort((left, right) =>
        left.tick - right.tick || Number(left.status === 0x90 && left.velocity > 0) - Number(right.status === 0x90 && right.velocity > 0),
    );

    const activeNotes = new Map<string, number[]>();
    const completedNotes: { pitch: number; onsetTick: number; durationTick: number }[] = [];
    for (const event of events) {
        const isNoteOn = event.status === 0x90 && event.velocity > 0;
        const key = `${event.channel}:${event.note}`;
        if (isNoteOn) {
            const starts = activeNotes.get(key) ?? [];
            starts.push(event.tick);
            activeNotes.set(key, starts);
        } else {
            const starts = activeNotes.get(key);
            const onsetTick = starts?.shift();
            if (onsetTick !== undefined) {
                completedNotes.push({
                    pitch: event.note,
                    onsetTick,
                    durationTick: event.tick - onsetTick,
                });
                if (starts?.length === 0) activeNotes.delete(key);
            }
        }
    }

    if ([...activeNotes.values()].some((starts) => starts.length > 0)) {
        throw new Error("MIDI file ends before the final note is released");
    }
    if (completedNotes.length === 0) throw new Error("MIDI file contains no notes");

    const groups = new Map<string, { onsetTick: number; durationTick: number; pitches: Set<number> }>();
    for (const note of completedNotes) {
        const key = `${note.onsetTick}:${note.durationTick}`;
        const group = groups.get(key) ?? {
            onsetTick: note.onsetTick,
            durationTick: note.durationTick,
            pitches: new Set<number>(),
        };
        group.pitches.add(note.pitch);
        groups.set(key, group);
    }

    const sortedGroups = [...groups.values()].sort((left, right) =>
        left.onsetTick - right.onsetTick || left.durationTick - right.durationTick,
    );
    const notes: SongNote[] = [];
    let previousEndTick = 0;
    for (const group of sortedGroups) {
        const note: SongNote = {
            noteIndices: [...group.pitches].sort((left, right) => left - right).map((pitch) => pitch - 21),
            duration: group.durationTick / ticksPerBeat,
        };
        if (group.onsetTick !== previousEndTick) note.onset = group.onsetTick / ticksPerBeat;
        notes.push(note);
        previousEndTick = group.onsetTick + group.durationTick;
    }

    const title = basename(filePath).replace(/\.[^.]+$/, "");
    const rankedKeys = rankKeyClassifications(notes);
    const inferredKey = rankedKeys[0];
    if (!inferredKey) return { song: null, rankedKeys, title };
    const song: EssenClip = {
        title,
        tonic: inferredKey.tonic,
        scale: inferredKey.scale === "major" ? 0 : 1,
        compressedNotes: await encodeSongNotes(notes),
    };
    return { song, rankedKeys, title };
}

export async function convertMidiToSong(filePath: string): Promise<EssenClip | null> {
    return (await analyzeMidiToSong(filePath)).song;
}

function csvField(value: string | number) {
    const text = String(value);
    return /[",\r\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

type SongRanking = {
    title: string;
    rankedKeys: KeyClassification[];
    song?: EssenClip;
};

type ConfidentSongRanking = SongRanking & {
    song: EssenClip;
    confidenceGap: number;
};

function getTopConfidentRankings(rows: SongRanking[]): ConfidentSongRanking[] {
    const sortableRows = rows.flatMap((row) => {
        const [first, second] = row.rankedKeys;
        return row.song && first && second
            ? [{ ...row, song: row.song, confidenceGap: first.confidence - second.confidence }]
            : [];
    }).sort((left, right) =>
        right.confidenceGap - left.confidenceGap || left.title.localeCompare(right.title),
    );
    return sortableRows.slice(0, Math.ceil(sortableRows.length * 0.9));
}

async function findMidiFiles(directory: string): Promise<string[]> {
    const files: string[] = [];
    for (const entry of await readdir(directory, { withFileTypes: true })) {
        const path = join(directory, entry.name);
        if (entry.isDirectory()) {
            files.push(...await findMidiFiles(path));
        } else if (entry.isFile() && [".mid", ".midi"].includes(extname(entry.name).toLowerCase())) {
            files.push(path);
        }
    }
    return files;
}

async function convertDirectory(inputDirectory: string) {
    const files = (await findMidiFiles(inputDirectory)).sort();
    if (files.length === 0) throw new Error(`no MIDI files found in ${inputDirectory}`);

    const songs: EssenClip[] = [];
    const excludedSongNames: string[] = [];
    const rankings: SongRanking[] = [];
    for (const file of files) {
        try {
            const result = await analyzeMidiToSong(file);
            rankings.push({
                title: result.title,
                rankedKeys: result.rankedKeys,
                ...(result.song ? { song: result.song } : {}),
            });
            if (result.song) {
                songs.push(result.song);
            } else {
                excludedSongNames.push(result.title);
            }
        } catch (error) {
            const reason = error instanceof Error ? error.message : String(error);
            throw new Error(`failed to convert ${file}: ${reason}`, { cause: error });
        }
    }
    return { songs, excludedSongNames, rankings };
}

const inputDirectory = resolve(process.argv[2] ?? "Clips-Essen");
const outputPath = resolve(process.argv[3] ?? "src/audio/generated-essen.ts");
const { songs, excludedSongNames, rankings } = await convertDirectory(inputDirectory);
const selectedRankings = getTopConfidentRankings(rankings);
const selectedSongs = selectedRankings.map(({ song }) => song);
const records = selectedSongs.map((song) => `  ${JSON.stringify(song)}`).join(",\n");
const output = `export type EssenClip = { title: string; tonic: number; scale: number; compressedNotes: string };\n\nexport const ESSEN_CLIPS: EssenClip[] = [\n${records}\n];\n`;
await Bun.write(outputPath, output);
console.log(`Excluded ${excludedSongNames.length} song(s) that do not fit any major or minor scale.`);
console.log(excludedSongNames.length > 0 ? excludedSongNames.join("\n") : "None");
console.log(`Generated ${selectedSongs.length} Essen song(s); removed ${songs.length - selectedSongs.length} scale-fitting song(s) outside the top 90% by confidence gap.`);
