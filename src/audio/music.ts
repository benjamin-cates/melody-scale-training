import { MIDI_CLIPS } from "./generated-midi";
import { TSV_CLIPS } from "./generated-tsv";

export type Scale = "major" | "minor";
export type SongCategory =
  | "Custom"
  | "Peaceful"
  | "Happy"
  | "Scary"
  | "Sad"
  | "Exercises"
  | "Scales"
  | "Tests";

export type SongNote = {
  noteIndices: number[];
  duration: number;
  onset?: number;
};

export type Song = {
  title: string;
  subtitle: string;
  category: SongCategory;
  key: string;
  tonic: number;
  scale: Scale;
  notes: SongNote[];
};

export const NOTE_NAMES = [
  "C",
  "C♯",
  "D",
  "E♭",
  "E",
  "F",
  "F♯",
  "G",
  "A♭",
  "A",
  "B♭",
  "B",
];
export const RAINBOW_COLORS = [
  "#ef5350",
  "#f4774b",
  "#f2b544",
  "#d4d950",
  "#7dc85d",
  "#48c5a2",
  "#45b8d4",
  "#4e8bd0",
  "#666fd0",
  "#9569c6",
  "#c65b9b",
  "#e2607b",
];
export const MAJOR_INTERVALS = [0, 2, 4, 5, 7, 9, 11];
export const MINOR_INTERVALS = [0, 2, 3, 5, 7, 8, 10];

export function getNoteOnset(song: Song, position: number) {
  const note = song.notes[position];
  if (note.onset !== undefined) return note.onset;
  return song.notes
    .slice(0, position)
    .reduce((onset, previousNote) => onset + previousNote.duration, 0);
}

export function getSongDuration(song: Song) {
  const lastPosition = song.notes.length - 1;
  return getNoteOnset(song, lastPosition) + song.notes[lastPosition].duration;
}

const GREENSLEEVES_PHRASE: SongNote[] = [
  { noteIndices: [48], duration: 0.5 },
  { noteIndices: [48], duration: 0.5 },
  { noteIndices: [32, 51], duration: 1 },
  { noteIndices: [36], duration: 0.5 },
  { noteIndices: [48], duration: 0.5 },
  { noteIndices: [39, 48], duration: 1 },
  { noteIndices: [32, 51], duration: 1 },
  { noteIndices: [36], duration: 1 },
  { noteIndices: [39, 48], duration: 0.5 },
  { noteIndices: [51], duration: 0.5 },
  { noteIndices: [32, 56], duration: 1 },
  { noteIndices: [37, 55], duration: 1 },
  { noteIndices: [41], duration: 0.5 },
  { noteIndices: [53], duration: 0.5 },
  { noteIndices: [32, 53], duration: 1 },
  { noteIndices: [36, 51], duration: 1 },
  { noteIndices: [39, 46], duration: 0.5 },
  { noteIndices: [48], duration: 0.5 },
  { noteIndices: [27, 49], duration: 1 },
  { noteIndices: [31, 46], duration: 1 },
  { noteIndices: [34, 46], duration: 0.5 },
  { noteIndices: [48], duration: 0.5 },
  { noteIndices: [27, 49], duration: 1 },
  { noteIndices: [31], duration: 1 },
  { noteIndices: [34, 46], duration: 0.5 },
  { noteIndices: [49], duration: 0.5 },
  { noteIndices: [27, 55], duration: 0.5 },
  { noteIndices: [53], duration: 0.5 },
  { noteIndices: [31, 51], duration: 1 },
  { noteIndices: [34, 55], duration: 1 },
  { noteIndices: [32, 56], duration: 1 },
  { noteIndices: [36], duration: 1 },
  { noteIndices: [39, 44], duration: 0.5 },
  { noteIndices: [44], duration: 0.5 },
  { noteIndices: [32, 56], duration: 1 },
  { noteIndices: [37], duration: 1 },
  { noteIndices: [41, 53], duration: 0.5 },
  { noteIndices: [49], duration: 0.5 },
  { noteIndices: [32, 51], duration: 1 },
  { noteIndices: [36], duration: 1 },
  { noteIndices: [39, 48], duration: 0.5 },
  { noteIndices: [44], duration: 0.5 },
  { noteIndices: [27, 49], duration: 1 },
  { noteIndices: [31, 51], duration: 1 },
  { noteIndices: [34, 53], duration: 1 },
  { noteIndices: [32, 48], duration: 0.5 },
  { noteIndices: [51], duration: 0.5 },
  { noteIndices: [36], duration: 1 },
  { noteIndices: [39, 44], duration: 0.5 },
  { noteIndices: [44], duration: 0.5 },
  { noteIndices: [32, 56], duration: 1 },
  { noteIndices: [37], duration: 1 },
  { noteIndices: [41, 53], duration: 0.5 },
  { noteIndices: [49], duration: 0.5 },
  { noteIndices: [32, 51], duration: 1 },
  { noteIndices: [36], duration: 1 },
  { noteIndices: [39, 48], duration: 0.5 },
  { noteIndices: [44], duration: 0.5 },
  { noteIndices: [27, 49], duration: 0.5 },
  { noteIndices: [51], duration: 0.25 },
  { noteIndices: [49], duration: 0.25 },
  { noteIndices: [31, 48], duration: 1 },
  { noteIndices: [34, 46], duration: 1 },
  { noteIndices: [32, 44], duration: 2 },
];

export const SONGS: Song[] = [
  {
    title: "Test duration",
    subtitle: "A simple test melody",
    category: "Tests",
    key: "C major",
    tonic: 0,
    scale: "major",
    notes: [
      { noteIndices: [39], duration: 2, onset: 0 },
      { noteIndices: [41], duration: 2, onset: 0.5 },
      { noteIndices: [43], duration: 2, onset: 1 },
      { noteIndices: [44], duration: 2, onset: 1.5 },
      { noteIndices: [46], duration: 2, onset: 2 },
      { noteIndices: [48], duration: 2, onset: 2.5 },
      { noteIndices: [50], duration: 2, onset: 3 },
      { noteIndices: [51], duration: 2, onset: 3.5 },
    ],
  },
  {
    title: "Copper Rain",
    subtitle: "A three-note study in C major",
    category: "Exercises",
    key: "C major",
    tonic: 0,
    scale: "major",
    notes: [
      { noteIndices: [39, 43, 46], duration: 1 },
      { noteIndices: [41, 44, 48], duration: 1 },
      { noteIndices: [43, 46, 50], duration: 1 },
      { noteIndices: [44, 48, 51], duration: 1 },
      { noteIndices: [43, 46, 50], duration: 1 },
      { noteIndices: [41, 44, 48], duration: 1 },
      { noteIndices: [39, 43, 46], duration: 2 },
      { noteIndices: [38, 43, 46], duration: 1 },
      { noteIndices: [39, 44, 48], duration: 1 },
      { noteIndices: [41, 46, 50], duration: 2 },
      { noteIndices: [39, 43, 46], duration: 2 },
    ],
  },
  {
    title: "Blank space bayybeee",
    subtitle: "A playful test melody",
    category: "Tests",
    key: "C major",
    tonic: 0,
    scale: "major",
    notes: [
      { noteIndices: [36], duration: 1 },
      { noteIndices: [39], duration: 1, onset: 4 },
      { noteIndices: [43], duration: 1, onset: 5 },
    ],
  },
  {
    title: "Copper Rain (Minor)",
    subtitle: "The same shape, recast in C minor",
    category: "Exercises",
    key: "C minor",
    tonic: 0,
    scale: "minor",
    notes: [
      { noteIndices: [39, 42, 46], duration: 1 },
      { noteIndices: [41, 44, 47], duration: 1 },
      { noteIndices: [42, 46, 49], duration: 1 },
      { noteIndices: [44, 47, 51], duration: 1 },
      { noteIndices: [42, 46, 49], duration: 1 },
      { noteIndices: [41, 44, 47], duration: 1 },
      { noteIndices: [39, 42, 46], duration: 2 },
      { noteIndices: [37, 42, 46], duration: 1 },
      { noteIndices: [39, 44, 47], duration: 1 },
      { noteIndices: [41, 46, 49], duration: 2 },
      { noteIndices: [39, 42, 46], duration: 2 },
    ],
  },
  {
    title: "Notes in order",
    subtitle: "A simple ascending melody",
    category: "Tests",
    key: "C major",
    tonic: 0,
    scale: "major",
    notes: [
      { noteIndices: [36], duration: 1 },
      { noteIndices: [37], duration: 1 },
      { noteIndices: [38], duration: 1 },
      { noteIndices: [39], duration: 1 },
      { noteIndices: [40], duration: 1 },
      { noteIndices: [41], duration: 1 },
      { noteIndices: [42], duration: 1 },
      { noteIndices: [43], duration: 1 },
      { noteIndices: [44], duration: 1 },
      { noteIndices: [45], duration: 1 },
      { noteIndices: [46], duration: 1 },
      { noteIndices: [47], duration: 1 },
      { noteIndices: [48], duration: 1 },
      { noteIndices: [49], duration: 1 },
      { noteIndices: [50], duration: 1 },
      { noteIndices: [51], duration: 1 },
      { noteIndices: [52], duration: 1 },
      { noteIndices: [53], duration: 1 },
      { noteIndices: [54], duration: 1 },
      { noteIndices: [55], duration: 1 },
      { noteIndices: [56], duration: 1 },
      { noteIndices: [57], duration: 1 },
      { noteIndices: [58], duration: 1 },
      { noteIndices: [59], duration: 1 },
      { noteIndices: [60], duration: 1 },
      { noteIndices: [61], duration: 1 },
      { noteIndices: [62], duration: 1 },
      { noteIndices: [63], duration: 1 },
      { noteIndices: [64], duration: 1 },
      { noteIndices: [65], duration: 1 },
      { noteIndices: [66], duration: 1 },
      { noteIndices: [67], duration: 1 },
      { noteIndices: [68], duration: 1 },
      { noteIndices: [69], duration: 1 },
      { noteIndices: [70], duration: 1 },
      { noteIndices: [71], duration: 1 },
    ],
  },
  {
    title: "Feel the octaves",
    subtitle: "A simple melody with octaves",
    category: "Tests",
    key: "C major",
    tonic: 0,
    scale: "major",
    notes: [
      { noteIndices: [36], duration: 1 },
      { noteIndices: [48], duration: 1 },
      { noteIndices: [60], duration: 1 },
      { noteIndices: [37], duration: 1 },
      { noteIndices: [49], duration: 1 },
      { noteIndices: [61], duration: 1 },
      { noteIndices: [38], duration: 1 },
      { noteIndices: [50], duration: 1 },
      { noteIndices: [62], duration: 1 },
      { noteIndices: [39], duration: 1 },
      { noteIndices: [51], duration: 1 },
      { noteIndices: [63], duration: 1 },
      { noteIndices: [40], duration: 1 },
      { noteIndices: [52], duration: 1 },
      { noteIndices: [64], duration: 1 },
      { noteIndices: [41], duration: 1 },
      { noteIndices: [53], duration: 1 },
      { noteIndices: [65], duration: 1 },
      { noteIndices: [42], duration: 1 },
      { noteIndices: [54], duration: 1 },
      { noteIndices: [66], duration: 1 },
      { noteIndices: [43], duration: 1 },
      { noteIndices: [55], duration: 1 },
      { noteIndices: [67], duration: 1 },
      { noteIndices: [44], duration: 1 },
      { noteIndices: [56], duration: 1 },
      { noteIndices: [68], duration: 1 },
      { noteIndices: [45], duration: 1 },
      { noteIndices: [57], duration: 1 },
      { noteIndices: [69], duration: 1 },
      { noteIndices: [46], duration: 1 },
      { noteIndices: [58], duration: 1 },
      { noteIndices: [70], duration: 1 },
      { noteIndices: [47], duration: 1 },
      { noteIndices: [59], duration: 1 },
      { noteIndices: [71], duration: 1 },
    ],
  },
  {
    title: "C Major Chords",
    subtitle: "The key-specific chords in order",
    category: "Exercises",
    key: "C major",
    tonic: 0,
    scale: "major",
    notes: [
      { noteIndices: [39, 46], duration: 1 },
      { noteIndices: [39, 43], duration: 1 },
      { noteIndices: [39, 43, 46], duration: 1 },
      { noteIndices: [44, 48, 51], duration: 1 },
      { noteIndices: [46, 50, 53], duration: 1 },
    ],
  },
  {
    title: "A Minor Chords",
    subtitle: "The key-specific chords",
    category: "Exercises",
    key: "A minor",
    tonic: 9,
    scale: "minor",
    notes: [
      { noteIndices: [48, 53], duration: 1 },
      { noteIndices: [39, 48], duration: 1 },
      { noteIndices: [36, 39, 43], duration: 1 },
      { noteIndices: [41, 44, 48], duration: 1 },
      { noteIndices: [43, 46, 50], duration: 1 },
    ],
  },
  {
    title: "Blue Hour",
    subtitle: "A suspended study in D minor",
    category: "Exercises",
    key: "D minor",
    tonic: 2,
    scale: "minor",
    notes: [
      { noteIndices: [29, 32, 36], duration: 1 },
      { noteIndices: [25, 29, 32], duration: 1 },
      { noteIndices: [27, 31, 34], duration: 1 },
      { noteIndices: [29, 33, 36], duration: 1 },
      { noteIndices: [31, 34, 38], duration: 2 },
      { noteIndices: [29, 32, 36], duration: 1 },
      { noteIndices: [27, 31, 34], duration: 1 },
      { noteIndices: [29, 32, 36], duration: 2 },
    ],
  },
  {
    title: "Violet Current",
    subtitle: "A three-note study in E minor",
    category: "Exercises",
    key: "E minor",
    tonic: 4,
    scale: "minor",
    notes: [
      { noteIndices: [43, 46, 50], duration: 1 },
      { noteIndices: [39, 43, 46], duration: 1 },
      { noteIndices: [41, 45, 48], duration: 1 },
      { noteIndices: [38, 42, 45], duration: 1 },
      { noteIndices: [43, 46, 50], duration: 2 },
      { noteIndices: [41, 45, 48], duration: 1 },
      { noteIndices: [39, 43, 46], duration: 1 },
      { noteIndices: [43, 46, 50], duration: 2 },
    ],
  },
  {
    title: "Greensleeves",
    subtitle: "Traditional melody in F major",
    category: "Exercises",
    key: "F major",
    tonic: 5,
    scale: "major",
    notes: [...GREENSLEEVES_PHRASE, ...GREENSLEEVES_PHRASE],
  },
  ...NOTE_NAMES.map((noteName, tonic) => {
    const notes = [0, 1, 2, 3, 4, 5, 6, 7, 7, 6, 5, 4, 3, 2, 1, 0].map(value => (
      { noteIndices: [tonic + MAJOR_INTERVALS[value % 7] + (value === 7 ? 12 : 0) + 27], duration: 1 }
    ));
    return { 
      title: `${noteName} Major`, 
      subtitle: "Ascending and descending melody", 
      category: "Scales",
      key: `${noteName} major`, 
      tonic, 
      scale: "major",
      notes
    } satisfies Song;
  }),
  ...NOTE_NAMES.map((noteName, tonic) => {
    const notes = [0, 1, 2, 3, 4, 5, 6, 7, 7, 6, 5, 4, 3, 2, 1, 0].map(value => (
      { noteIndices: [tonic + MINOR_INTERVALS[value % 7] + (value === 7 ? 12 : 0) + 27], duration: 1 }
    ));
    return { 
      title: `${noteName} Minor`, 
      subtitle: "Ascending and descending melody", 
      category: "Scales",
      key: `${noteName} minor`, 
      tonic, 
      scale: "minor",
      notes
    } satisfies Song;
  }),
  ...Object.entries(TSV_CLIPS).map(([title, clip]) => ({
    title,
    subtitle: "",
    category: clip.category,
    notes: clip.notes,
    key: clip.key,
    tonic: clip.tonic,
    scale: clip.scale,
  } satisfies Song)),
];

export const SONG_CATEGORIES = [
  "Exercises",
  "Tests",
  "Scales",
  "Peaceful",
  "Happy",
  "Scary",
  "Sad",
  "Custom",
] as const;

export function getKeyPitchClasses(song: Song) {
  return new Set(
    (song.scale === "major" ? MAJOR_INTERVALS : MINOR_INTERVALS).map(
      (interval) => (song.tonic + interval) % 12,
    ),
  );
}
