import { convertSongModeNotes, decodeSongNotes } from "./song-notes";
import { rankKeyClassifications } from "./key-analysis";
import { NOTE_NAMES } from "./note-names.ts";
export {
  convertCompressedSongMode,
  convertSongModeNotes,
  decodeSongNotes,
  encodeSongNotes,
} from "./song-notes";
export { NOTE_NAMES } from "./note-names.ts";

export type Scale = "major" | "minor";
export type SongCategory =
  | "Custom"
  | "Peaceful"
  | "Happy"
  | "Scary"
  | "Sad"
  | "Exercises"
  | "Scales"
  | "Tests"
  | "Essen"
  | "Essen (modified)";

export type SongNote = {
  noteIndices: number[];
  duration: number;
  onset?: number;
};

export type Song = {
  title: string;
  subtitle: string;
  category: SongCategory;
  subcategory?: string;
  tonic?: number;
  scale?: Scale;
  notes?: SongNote[];
  compressedNotes?: string | (() => Promise<string>);
  loadNotes?: () => Promise<SongNote[]>;
};

export type KeyedSong = Song & { tonic: number; scale: Scale };
export type SongClassification = Pick<KeyedSong, "tonic" | "scale">;

export function hasKey(song: Song): song is KeyedSong {
  return song.tonic !== undefined && song.scale !== undefined;
}

const songNotesCache = new WeakMap<Song, Promise<SongNote[]>>();
const songClassificationCache = new WeakMap<Song, Promise<SongClassification | null>>();

export async function getSongNotes(song: Song): Promise<SongNote[]> {
  if (song.notes) return song.notes;
  const cachedNotes = songNotesCache.get(song);
  if (cachedNotes) return cachedNotes;

  const notesRequest = (async () => {
    if (song.loadNotes) return song.loadNotes();
    if (!song.compressedNotes) return [];
    const compressedNotes = typeof song.compressedNotes === "function"
      ? await song.compressedNotes()
      : song.compressedNotes;
    return decodeSongNotes(compressedNotes);
  })();
  songNotesCache.set(song, notesRequest);
  try {
    return await notesRequest;
  } catch (error) {
    songNotesCache.delete(song);
    throw error;
  }
}

export async function getSongClassification(song: Song): Promise<SongClassification | null> {
  if (hasKey(song)) return { tonic: song.tonic, scale: song.scale };
  if (song.category === "Essen" && song.title.startsWith("X-")) return null;
  const cachedClassification = songClassificationCache.get(song);
  if (cachedClassification) return cachedClassification;

  const classificationRequest = getSongNotes(song).then((notes) => {
    const key = rankKeyClassifications(notes)[0];
    return key ? { tonic: key.tonic, scale: key.scale } : null;
  });
  songClassificationCache.set(song, classificationRequest);
  try {
    return await classificationRequest;
  } catch (error) {
    songClassificationCache.delete(song);
    throw error;
  }
}

function getClipNoteStorage(clip: unknown): Pick<Song, "notes" | "compressedNotes"> {
  if (typeof clip !== "object" || clip === null) return { notes: [] };
  const value = clip as { notes?: SongNote[]; compressedNotes?: string };
  if (typeof value.compressedNotes === "string") {
    return { compressedNotes: value.compressedNotes };
  }
  return { notes: value.notes ?? [] };
}

export function getSongKey(song: Pick<Song, "tonic" | "scale">) {
  if (song.tonic === undefined || song.scale === undefined) return "No matching mode";
  return NOTE_NAMES[song.tonic] + " " + song.scale;
}

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
  const notes = song.notes ?? [];
  if (!notes[position]) return 0;
  let onset = 0;
  for (let index = 0; index <= position; index++) {
    const note = notes[index];
    if (note.onset !== undefined) onset = note.onset;
    else if (index > 0) onset += notes[index - 1].duration;
  }
  return onset;
}

export function getSongDuration(song: Song) {
  const notes = song.notes ?? [];
  let onset = 0;
  let duration = 0;
  for (const note of notes) {
    if (note.onset !== undefined) onset = note.onset;
    duration = Math.max(duration, onset + note.duration);
    onset += note.duration;
  }
  return duration;
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
  { noteIndices: [53], duration: 0.5 },
  { noteIndices: [51], duration: 0.25 },
  { noteIndices: [49], duration: 0.25 },
  { noteIndices: [31, 48], duration: 1 },
  { noteIndices: [34, 46], duration: 1 },
  { noteIndices: [32, 44], duration: 2 },
];

import { ESSEN_CLIPS } from "./generated-essen";
import { TSV_CLIPS } from "./generated-tsv";

function getEssenSubcategory(index: number, unclassified = false) {
  const rangeStart = Math.floor(index / 100) * 100 + 1;
  return `${unclassified ? "X " : ""}${rangeStart}-${rangeStart + 99}`;
}

const CLASSIFIED_ESSEN_CLIPS = ESSEN_CLIPS.flatMap((clip) => {
  if (clip.title.startsWith("X-")) return [];
  return [clip];
});

const UNCLASSIFIED_ESSEN_CLIPS = ESSEN_CLIPS.filter(
  (clip) => clip.title.startsWith("X-"),
);

const ESSEN_SONGS: Song[] = CLASSIFIED_ESSEN_CLIPS.map((clip, index) => ({
  title: clip.title,
  subtitle: "Imported from Essen",
  category: "Essen",
  subcategory: getEssenSubcategory(index),
  compressedNotes: clip.compressedNotes,
}));

const ESSEN_MODIFIED_SONGS: Song[] = ESSEN_SONGS.map((sourceSong, index) => ({
  title: "m_" + sourceSong.title,
  subtitle: "Imported from Essen. Modified to the opposite mode.",
  category: "Essen (modified)",
  subcategory: getEssenSubcategory(index),
  loadNotes: async () => {
    const sourceNotes = await getSongNotes(sourceSong);
    const sourceKey = rankKeyClassifications(sourceNotes)[0];
    if (!sourceKey) {
      throw new Error(`Cannot create a modified mode for ${sourceSong.title}: no matching mode was found`);
    }
    return convertSongModeNotes(sourceNotes, sourceKey.tonic, sourceKey.scale);
  },
}));

export const SONGS: Song[] = [
  {
    title: "Test duration",
    subtitle: "A simple test melody",
    category: "Tests",
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
    title: "Simple triads",
    subtitle: "A three-note study in C major",
    category: "Exercises",
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
    tonic: 0,
    scale: "major",
    notes: [
      { noteIndices: [36], duration: 1 },
      { noteIndices: [39], duration: 1, onset: 4 },
      { noteIndices: [43], duration: 1, onset: 5 },
    ],
  },
  {
    title: "Simple Triads (Minor)",
    subtitle: "The same shape, recast in C minor",
    category: "Exercises",
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
      tonic,
      scale: "minor",
      notes
    } satisfies Song;
  }),
  ...ESSEN_MODIFIED_SONGS,
  ...ESSEN_SONGS,
  ...UNCLASSIFIED_ESSEN_CLIPS.map((clip, index) => ({
    title: clip.title,
    subtitle: "Imported from Essen. No matching major or minor mode.",
    category: "Essen",
    subcategory: getEssenSubcategory(index, true),
    compressedNotes: clip.compressedNotes,
  } satisfies Song)),
  ...Object.entries(TSV_CLIPS).map(([title, clip]) => ({
    title,
    subtitle: "",
    category: clip.category,
    ...getClipNoteStorage(clip),
    tonic: clip.tonic,
    scale: clip.scale,
  } satisfies Song)),
];

let activeEssenExplorerTitles: Set<string> | null = null;

export function applyEssenExplorerFilter(titles: string[]) {
  activeEssenExplorerTitles = new Set(titles);
}

export function hasActiveEssenExplorerFilter() {
  return activeEssenExplorerTitles !== null;
}

export function getActiveEssenExplorerFilterCount() {
  return activeEssenExplorerTitles?.size ?? 0;
}

export function getExplorerSongs() {
  const activeTitles = activeEssenExplorerTitles;
  if (activeTitles === null) return SONGS;
  return SONGS.filter((song) => {
    if (song.category === "Essen") return activeTitles.has(song.title);
    if (song.category === "Essen (modified)" && song.title.startsWith("m_")) {
      return activeTitles.has(song.title.slice(2));
    }
    return true;
  });
}

export const SONG_CATEGORIES = [
  "Exercises",
  "Tests",
  "Scales",
  "Peaceful",
  "Happy",
  "Scary",
  "Sad",
  "Essen",
  "Essen (modified)",
  "Custom",
] as const;

export function getKeyPitchClasses(song: Song) {
  if (song.tonic === undefined || song.scale === undefined) return new Set<number>();
  return new Set(
    (song.scale === "major" ? MAJOR_INTERVALS : MINOR_INTERVALS).map(
      (interval) => (song.tonic! + interval) % 12,
    ),
  );
}
