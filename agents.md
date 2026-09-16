# Agents Guide

## Project purpose

This is a Bun + React hearing-practice app for helping learners distinguish major and minor keys through visual and audio guidance. The main visual is a twelve-prong chromatic spiral, called a Chromatone, that shows pitch classes around a spiral shape.

The app is intentionally practice-oriented:

- `Explorer` lets a learner hear melodies while seeing the detected key, active notes, scale membership, tonic, and chord relationships.
- `Learner` presents a guided comparison of C major and C minor.
- `Test` hides the key and records a major/minor answer plus confidence, then downloads JSON results.
- `NoteTest` provides a smaller higher/lower pitch comparison exercise.
- `Survey` downloads learner context as JSON.

## Important files

- `src/AppRoutes.tsx`: hash-based routes, shared layout, and JSON download helpers.
- `src/music.ts`: `Song`/`SongNote` types, note names, scale intervals, generated clip composition, and key helpers.
- `src/Player.tsx`: audio playback, play controls, and the `Chromatone` / `CustomChromatone` visual guidance components.
- `src/index.css`: the visual language and responsive layout for the app.
- `src/Explorer.tsx`: category/song selection and the main listening view.
- `src/Learner.tsx`: the guided major/minor lesson sequence.
- `src/Test.tsx`: hidden-key classification test and result export.
- `src/NoteTest.tsx`: two-note pitch comparison exercise.
- `scripts/convert-midi.ts`: converts MIDI files into generated note clips.
- `scripts/convert-tsv.ts`: converts TSV note data, detects a mode, and generates original/modified-mode clips.
- `src/generated-midi.ts` and `src/generated-tsv.ts`: generated data; do not hand-edit these files.

## Music and visual model

A `Song` stores a display key, a pitch-class tonic, a `major` or `minor` scale, and note events. A `SongNote` contains MIDI-like `noteIndices`, where index `0` represents MIDI note 21 (A0), plus duration and optionally an onset in beats.

The pitch-class mapping used throughout the app is:

```ts
pitchClass = (noteIndex + 21) % 12
```

Keep this mapping consistent when adding playback, rendering, analysis, or imported data.

The current diatonic intervals are:

```ts
MAJOR_INTERVALS = [0, 2, 4, 5, 7, 9, 11]
MINOR_INTERVALS = [0, 2, 3, 5, 7, 8, 10]
```

`getKeyPitchClasses(song)` derives the pitch classes in the selected key. In `Chromatone`:

- each of the 12 angular sectors represents a pitch class;
- loop around the spiral represents an octave;
- full-opacity sectors are currently sounding notes;
- gold outlines show notes in the selected scale;
- the white or emphasized outline identifies the tonic;
- chord lines show major thirds, minor thirds, and perfect fifths when those notes are active.

When changing the visual guidance system, keep the mapping legible at a glance and retain a non-color cue for the tonic or scale membership. The rainbow note colors are shared by pitch class, so do not repurpose them independently per screen without updating the meaning everywhere.

## Change guidelines

- Follow the existing React function-component style and strict TypeScript settings.
- Prefer small, local changes. Keep route behavior hash-based unless there is a concrete reason to replace it.
- Keep `Song` data and scale math in `src/music.ts`; components should consume helpers rather than duplicate interval calculations.
- Use ASCII for new source and documentation unless the existing content requires another character set.
- Do not add dependencies for basic React, Web Audio, SVG, or routing behavior already covered by the current implementation.
- Do not try to test or build after making changes. I will test and build manually.
