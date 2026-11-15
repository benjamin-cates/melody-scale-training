import type { SongNote, Scale } from "./music";

const MAJOR_PROFILE = [
    6.35, 2.23, 3.48, 2.33, 4.38, 4.09, 2.52, 5.19, 2.39, 3.66, 2.29, 2.88,
];
const MINOR_PROFILE = [
    6.33, 2.68, 3.52, 5.38, 2.6, 3.53, 2.54, 4.75, 3.98, 2.69, 3.34, 3.17,
];
const MAJOR_INTERVALS = [0, 2, 4, 5, 7, 9, 11];
const MINOR_INTERVALS = [0, 2, 3, 5, 7, 8, 10];

export type KeyClassification = {
    tonic: number;
    scale: Scale;
    confidence: number;
};

export function rankKeyClassifications(notes: SongNote[]): KeyClassification[] {
    const pitchDurations = Array.from({ length: 12 }, () => 0);
    const pitchCounts = Array.from({ length: 12 }, () => 0);
    for (const note of notes) {
        for (const noteIndex of note.noteIndices) {
            const pitchClass = (noteIndex + 21) % 12;
            pitchDurations[pitchClass] += note.duration;
            pitchCounts[pitchClass]++;
        }
    }

    const pitchWeights = pitchDurations.some((duration) => duration > 0)
        ? pitchDurations
        : pitchCounts;
    const observedMean = pitchWeights.reduce((total, weight) => total + weight, 0) / 12;
    const observedCentered = pitchWeights.map((weight) => weight - observedMean);
    const observedMagnitude = Math.sqrt(
        observedCentered.reduce((total, weight) => total + weight ** 2, 0),
    );
    if (observedMagnitude === 0) return [];

    const classifications: KeyClassification[] = [];
    for (const [scale, profile, intervals] of [
        ["major", MAJOR_PROFILE, MAJOR_INTERVALS],
        ["minor", MINOR_PROFILE, MINOR_INTERVALS],
    ] as const) {
        for (let tonic = 0; tonic < 12; tonic++) {
            const scalePitchClasses = new Set(intervals.map((interval) => (tonic + interval) % 12));
            if (pitchCounts.some((count, pitchClass) =>
                count > 0 && !scalePitchClasses.has(pitchClass),
            )) {
                continue;
            }

            const rotatedProfile = profile.map((_, pitchClass) =>
                profile[(pitchClass - tonic + 12) % 12],
            );
            const profileMean = rotatedProfile.reduce((total, weight) => total + weight, 0) / 12;
            const profileCentered = rotatedProfile.map((weight) => weight - profileMean);
            const profileMagnitude = Math.sqrt(
                profileCentered.reduce((total, weight) => total + weight ** 2, 0),
            );
            const confidence = observedCentered.reduce(
                (total, weight, pitchClass) =>
                    total + weight * profileCentered[pitchClass],
                0,
            ) / (observedMagnitude * profileMagnitude);

            classifications.push({ tonic, scale, confidence });
        }
    }

    return classifications.sort((left, right) =>
        right.confidence - left.confidence
        || left.tonic - right.tonic
        || (left.scale === "major" ? -1 : 1),
    );
}
