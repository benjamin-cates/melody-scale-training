export type ChordPlaybackEvent = {
  noteIndices: number[];
  onset: number;
  duration: number;
};

const CHORD_NOTE_DURATION = 0.4;
const CHORD_NOTE_STEP = 0.5;
const CHORD_TOGETHER_DURATION = 0.6;

export const CHORD_SEQUENCE_DURATION = CHORD_NOTE_STEP * 2 + CHORD_TOGETHER_DURATION;
export const CHORD_SEQUENCE_GAP = 0.25;

export function getChordPlaybackEvents(
  notes: readonly [number, number],
  onset = 0,
): ChordPlaybackEvent[] {
  return [
    { noteIndices: [notes[0]], onset, duration: CHORD_NOTE_DURATION },
    { noteIndices: [notes[1]], onset: onset + CHORD_NOTE_STEP, duration: CHORD_NOTE_DURATION },
    { noteIndices: [...notes], onset: onset + CHORD_NOTE_STEP * 2, duration: CHORD_TOGETHER_DURATION },
  ];
}
