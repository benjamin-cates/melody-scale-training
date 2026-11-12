# bun-react-template

To install dependencies:

```bash
bun install
```

To start a development server:

```bash
bun dev
```

To run for production:

```bash
bun start
```

To regenerate the preset list from `MuseScore_General.sf3`:

```bash
bun run extract-instruments
```

This writes the SoundFont's MIDI-selectable presets to `src/audio/soundfont-instruments.json`.

To extract the Grand Piano and Marimba presets into standalone SoundFonts:

```bash
bun run extract-soundfonts
```

The resulting files are served from `/soundfonts/grand-piano.sf3` and `/soundfonts/marimba.sf3`. The sampled piano uses the full `grand-piano.sf3`; the timbre selector loads only the selected SoundFont. `piano (synthetic)` and `marimba (synthetic)` retain the previous oscillator-based sounds without loading SoundFont files. The build script copies the contents of `public/` and the SpessaSynth audio worklet into `dist/` so the files can be loaded on demand from a static deployment. Marimba notes are held 150 ms longer before note-off so they have more time to ring.

To make a compact, centered-mono Grand Piano SoundFont that preserves the source piano's sample key zones:

```bash
bun run extract-mono-piano
```

This writes `public/soundfonts/grand-piano-mono-compact.sf3`, served from `/soundfonts/grand-piano-mono-compact.sf3`. The bank blends the source MF recordings into 12 mono composite samples, assigns each a key range based on the nearest original sample roots, and uses one velocity layer across velocities 1-127. The script uses `wasm-media-encoders` to write the blended samples as Ogg Vorbis.
The compact preset is centered, has no SoundFont attenuation, and raises the filter cutoff to keep the piano tone clear and present.
The app applies a limiter to SoundFont output to prevent overlapping notes from clipping.

This project was created using `bun init` in bun v1.4.2. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
