#!/usr/bin/env bun

import { NOTE_NAMES } from "@/audio/music";

type SongNote = {
  noteIndices: number[];
  duration: number;
  onset: number;
};

type DetectedKey = {
  key: string;
  tonic: number;
  scale: "major" | "minor";
};

type TsvClip = DetectedKey & {
  notes: SongNote[];
  category: "Peaceful" | "Happy" | "Scary" | "Sad";
};

type TsvRow = {
  noteNumber: number;
  durationSeconds: number;
  onset: number;
  beatPosition: number;
};

const TEMPO_SAMPLE_SIZE = 8;
const TICKS_PER_BEAT = 192;
export const MAJOR_INTERVALS = [0, 2, 4, 5, 7, 9, 11];
export const MINOR_INTERVALS = [0, 2, 3, 5, 7, 8, 10];
const MAJOR_PROFILE = [
  1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1,
];
const MINOR_PROFILE = [
  1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0,
];
const inputDirectory = process.argv[2] ?? "clips-csv";
const outputPath = process.argv[3] ?? "src/audio/generated-tsv.ts";

function parseNumber(value: string, label: string) {
  const number = Number(value.replace(",", "."));
  if (!Number.isFinite(number)) throw new Error(`invalid ${label}: ${value}`);
  return number;
}

function parseBarBeatTick(value: string, label: string) {
  const parts = value.split(":");
  if (parts.length !== 3) throw new Error(`invalid ${label}: ${value}`);

  const bar = parseNumber(parts[0], `${label} bar`);
  const beat = parseNumber(parts[1], `${label} beat`);
  const tick = parseNumber(parts[2], `${label} tick`);
  return (bar - 1) * 4 + (beat - 1) + tick / TICKS_PER_BEAT;
}

function getSecondsPerBeat(rows: TsvRow[]) {
  const firstRowsByOnset = new Map<number, TsvRow>();
  for (const row of rows) {
    if (!firstRowsByOnset.has(row.onset)) firstRowsByOnset.set(row.onset, row);
  }
  const firstRows = [...firstRowsByOnset.values()]
    .sort((left, right) => left.onset - right.onset)
    .slice(0, TEMPO_SAMPLE_SIZE + 1);
  const ratios = firstRows
    .slice(1)
    .map((row, index) => {
      const previous = firstRows[index];
      const beatDelta = row.beatPosition - previous.beatPosition;
      return beatDelta > 0 && beatDelta <= 1
        ? (row.onset - previous.onset) / beatDelta
        : 0;
    })
    .filter((ratio) => ratio > 0);
  if (ratios.length === 0) return 1;
  return ratios.reduce((total, ratio) => total + ratio, 0) / ratios.length;
}

function parseTsv(text: string): SongNote[] {
  const lines = text.split(/\r?\n/).filter((line) => line.trim());
  if (lines.length < 2) return [];

  const headers = lines[0].split("\t");
  const column = (name: string) => {
    const index = headers.indexOf(name);
    if (index < 0) throw new Error(`missing TSV column: ${name}`);
    return index;
  };
  const timeColumn = column("Time (s)");
  const positionColumn = column("Bar:Beat:Tick");
  const noteColumn = column("Note #");
  const durationColumn = column("Duration (s)");

  const rows: TsvRow[] = lines.slice(1).map((line, index) => {
    const fields = line.split("\t");
    return {
      noteNumber: parseNumber(fields[noteColumn], `Note # on row ${index + 2}`),
      durationSeconds: parseNumber(
        fields[durationColumn],
        `Duration (s) on row ${index + 2}`,
      ),
      onset: parseNumber(
        fields[timeColumn],
        `Time (s) on row ${index + 2}`,
      ),
      beatPosition: parseBarBeatTick(
        fields[positionColumn],
        `Bar:Beat:Tick on row ${index + 2}`,
      ),
    };
  });
  const secondsPerBeat = getSecondsPerBeat(rows);
  const firstOnset = rows.length > 0 ? Math.min(...rows.map((row) => row.onset)) : 0;

  const rowsByOnset = new Map<number, TsvRow[]>();
  for (const row of rows) {
    const onsetRows = rowsByOnset.get(row.onset) ?? [];
    onsetRows.push(row);
    rowsByOnset.set(row.onset, onsetRows);
  }

  const notes = [...rowsByOnset.entries()]
    .sort(([left], [right]) => left - right)
    .map(([onset, onsetRows]) => ({
      noteIndices: [...new Set(onsetRows.map((row) => row.noteNumber - 21))].sort(
        (left, right) => left - right,
      ),
      duration: Math.max(...onsetRows.map((row) => row.durationSeconds)) / secondsPerBeat,
      onset: (onset - firstOnset) / secondsPerBeat,
    }));

  return notes;
}

function detectKey(notes: SongNote[], fileName: string): DetectedKey {
  const scale = fileName[0]?.toUpperCase() === "P" || fileName[0]?.toUpperCase() === "T"
    ? "minor"
    : "major";
  const profile = scale === "major" ? MAJOR_PROFILE : MINOR_PROFILE;
  const distribution = Array.from({ length: 12 }, () => 0);

  for (const note of notes) {
    for (const noteIndex of note.noteIndices) {
      distribution[(noteIndex + 21) % 12] += note.duration;
    }
  }

  const best = [...Array(12).keys()]
    .map((tonic) => {
      const score = profile.reduce(
        (total, weight, interval) =>
          total + weight * distribution[(tonic + interval) % 12],
        0,
      );
      return { tonic, score };
    })
    .sort((left, right) => right.score - left.score)[0];

  return {
    key: `${NOTE_NAMES[best.tonic]} ${scale}`,
    tonic: best.tonic,
    scale,
  };
}

function convertMode(notes: SongNote[], key: DetectedKey) {
  const nextScale = key.scale === "major" ? "minor" : "major";
  const alteredDegrees = key.scale === "major"
    ? new Map([[4, 3], [9, 8], [11, 10]])
    : new Map([[3, 4], [8, 9], [10, 11]]);

  return notes.map((note) => ({
    ...note,
    noteIndices: note.noteIndices.map((noteIndex) => {
      const pitchClass = (noteIndex + 21) % 12;
      const degree = (pitchClass - key.tonic + 12) % 12;
      const convertedDegree = alteredDegrees.get(degree);
      if (convertedDegree === undefined) return noteIndex;
      return noteIndex + (convertedDegree - degree);
    }),
  }));
}

function clipName(fileName: string) {
  return fileName.replace(/\.[^.]+$/, "").replace(/[^a-zA-Z0-9_$]/g, "_");
}

function categoryFromFileName(fileName: string): TsvClip["category"] {
  switch (fileName[0]?.toUpperCase()) {
    case "A":
      return "Peaceful";
    case "G":
      return "Happy";
    case "P":
      return "Scary";
    case "T":
      return "Sad";
    default:
      throw new Error(`unknown TSV category: ${fileName}`);
  }
}

async function convertDirectory(directory: string) {
  const files = (await Array.fromAsync(new Bun.Glob("*.tsv").scan(directory))).sort();
  if (files.length === 0) throw new Error(`no TSV files found in ${directory}`);

  const clips: Record<string, TsvClip> = {};
  for (const file of files) {
    const name = clipName(file);
    const notes = parseTsv(await Bun.file(`${directory}/${file}`).text());
    const stats = detectKey(notes, file);
    const category = categoryFromFileName(file);
    clips[name + " (" + stats.key + ")"] = { notes, category, ...stats };

    const modifiedScale = stats.scale === "major" ? "minor" : "major";
    clips[name + " (modified)"] = {
      notes: convertMode(notes, stats),
      key: `${NOTE_NAMES[stats.tonic]} ${modifiedScale}`,
      tonic: stats.tonic,
      scale: modifiedScale,
      category,
    };
  }
  return clips;
}

const clips = await convertDirectory(inputDirectory);
const output = `import type { SongNote } from "./music";\n\ntype TsvClip = {\n  notes: SongNote[];\n  key: string;\n  tonic: number;\n  scale: "major" | "minor";\n  category: "Peaceful" | "Happy" | "Scary" | "Sad" | "Tests";\n};\n\nexport const TSV_CLIPS: Record<string, TsvClip> = ${JSON.stringify(clips, null, 2)} as const;\n`;
if (outputPath) await Bun.write(outputPath, output);
else process.stdout.write(output);