import { NOTE_NAMES } from "./music";

export type SavedChord = {
  id: string;
  name: string;
  noteIndices: number[];
  keyLabel?: string;
  isDefault?: boolean;
};

export const DEFAULT_OCTAVE_4_CHORDS: SavedChord[] = NOTE_NAMES.flatMap((rootName, index) => {
  const rootIndex = 4 * 12 + index - 21;
  return [
    {
      id: `default-${rootName}-maj3`,
      name: `${rootName} Maj 3rd`,
      noteIndices: [rootIndex, rootIndex + 4],
      keyLabel: `${rootName} major`,
      isDefault: true,
    },
    {
      id: `default-${rootName}-min3`,
      name: `${rootName} Min 3rd`,
      noteIndices: [rootIndex, rootIndex + 3],
      keyLabel: `${rootName} minor`,
      isDefault: true,
    },
    {
      id: `default-${rootName}-p5`,
      name: `${rootName} 5th`,
      noteIndices: [rootIndex, rootIndex + 7],
      keyLabel: `${rootName} major`,
      isDefault: true,
    },
    {
      id: `default-${rootName}-maj-triad`,
      name: `${rootName} Major`,
      noteIndices: [rootIndex, rootIndex + 4, rootIndex + 7],
      keyLabel: `${rootName} major`,
      isDefault: true,
    },
    {
      id: `default-${rootName}-min-triad`,
      name: `${rootName} Minor`,
      noteIndices: [rootIndex, rootIndex + 3, rootIndex + 7],
      keyLabel: `${rootName} minor`,
      isDefault: true,
    },
  ];
});
