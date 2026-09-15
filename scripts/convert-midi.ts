#!/usr/bin/env bun

type SongNote = {
  noteIndices: number[];
  duration: number;
  onset: number;
};

type MidiEvent = {
  tick: number;
  note: number;
  duration: number;
};

const inputDirectory = process.argv[2] ?? "Clips-MIDI";
const outputPath = process.argv[3];

function readUint16(data: Uint8Array, offset: number) {
  return (data[offset] << 8) | data[offset + 1];
}

function readUint32(data: Uint8Array, offset: number) {
  return (
    data[offset] * 0x1000000 +
    (data[offset + 1] << 16) +
    (data[offset + 2] << 8) +
    data[offset + 3]
  );
}

function readVariableLength(data: Uint8Array, state: { offset: number }) {
  let value = 0;
  let byte: number;
  do {
    byte = data[state.offset++];
    value = (value << 7) | (byte & 0x7f);
  } while (byte & 0x80);
  return value;
}

function parseMidi(data: Uint8Array): SongNote[] {
  if (String.fromCharCode(...data.subarray(0, 4)) !== "MThd") {
    throw new Error("missing MIDI header");
  }

  const headerLength = readUint32(data, 4);
  const format = readUint16(data, 8);
  const trackCount = readUint16(data, 10);
  const division = readUint16(data, 12);
  if (division & 0x8000) {
    throw new Error("SMPTE timing is not supported");
  }

  const events: MidiEvent[] = [];
  const state = { offset: 8 + headerLength };
  for (let trackIndex = 0; trackIndex < trackCount; trackIndex += 1) {
    if (String.fromCharCode(...data.subarray(state.offset, state.offset + 4)) !== "MTrk") {
      throw new Error(`missing track header at track ${trackIndex + 1}`);
    }
    const trackLength = readUint32(data, state.offset + 4);
    state.offset += 8;
    const trackEnd = state.offset + trackLength;
    let tick = 0;
    let runningStatus = 0;
    const activeNotes = new Map<number, number[]>();

    // Format-1 files use track 0 for tempo and other conductor metadata.
    const isConductorTrack = format === 1 && trackIndex === 0;

    while (state.offset < trackEnd) {
      tick += readVariableLength(data, state);
      let status = data[state.offset++];
      if (status < 0x80) {
        state.offset -= 1;
        status = runningStatus;
      } else if (status < 0xf0) {
        runningStatus = status;
      }

      if (status === 0xff) {
        state.offset += 1;
        state.offset += readVariableLength(data, state);
        continue;
      }
      if (status === 0xf0 || status === 0xf7) {
        state.offset += readVariableLength(data, state);
        continue;
      }

      const message = status >> 4;
      const note = data[state.offset++];
      const velocity = message === 0xc || message === 0xd ? 0 : data[state.offset++];
      const isNoteOn = message === 0x9 && velocity > 0;
      const isNoteOff = message === 0x8 || (message === 0x9 && velocity === 0);
      if (!isConductorTrack && note >= 21 && (isNoteOn || isNoteOff)) {
        if (isNoteOn) {
          const starts = activeNotes.get(note) ?? [];
          starts.push(tick);
          activeNotes.set(note, starts);
        } else {
          const starts = activeNotes.get(note);
          const start = starts?.shift();
          if (start !== undefined) {
            events.push({ tick: start, note, duration: tick - start });
          }
          if (starts?.length === 0) activeNotes.delete(note);
        }
      }
    }
    state.offset = trackEnd;
  }

  const notesByTick = new Map<number, MidiEvent[]>();
  for (const event of events) {
    const notes = notesByTick.get(event.tick) ?? [];
    notes.push(event);
    notesByTick.set(event.tick, notes);
  }

  const ticks = [...notesByTick.keys()].sort((left, right) => left - right);
  return ticks.map((tick, index) => {
    const eventsAtTick = notesByTick.get(tick) ?? [];
    return {
      noteIndices: [...new Set(eventsAtTick.map((event) => event.note - 21))].sort(
        (left, right) => left - right,
      ),
      duration: Math.max(
        ...eventsAtTick.map((event) => event.duration / division),
        1 / division,
      ),
      onset: tick / division,
    };
  });
}

function clipName(fileName: string) {
  return fileName.replace(/\.[^.]+$/, "").replace(/[^a-zA-Z0-9_$]/g, "_");
}

async function convertDirectory(directory: string) {
  const files = (
    await Array.fromAsync(new Bun.Glob("*.{mid,MID}").scan(directory))
  ).sort();
  if (files.length === 0) {
    throw new Error(`no MIDI files found in ${directory}`);
  }

  const clips: Record<string, SongNote[]> = {};
  for (const file of files) {
    const data = new Uint8Array(await Bun.file(`${directory}/${file}`).arrayBuffer());
    clips[clipName(file)] = parseMidi(data);
  }
  return clips;
}

const clips = await convertDirectory(inputDirectory);
const output = `export const MIDI_CLIPS = ${JSON.stringify(clips, null, 2)} as const;\n`;
if (outputPath) {
  await Bun.write(outputPath, output);
} else {
  process.stdout.write(output);
}