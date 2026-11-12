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

The resulting files are served from `/soundfonts/grand-piano.sf3` and `/soundfonts/marimba.sf3`. The timbre selector loads only the selected SoundFont. `piano (synthetic)` and `marimba (synthetic)` retain the previous oscillator-based sounds without loading SoundFont files. The build script copies the contents of `public/` and the SpessaSynth audio worklet into `dist/` so the files can be loaded on demand from a static deployment. Marimba notes are held 150 ms longer before note-off so they have more time to ring.

To create the mono-simple piano SoundFont:

```bash
bun run extract-mono-simple-piano
```

This writes `public/soundfonts/grand-piano-mono-simple.sf2pack`, served from `/soundfonts/grand-piano-mono-simple.sf2pack` and used by the piano timbre. It keeps the MF samples selected by the app's usual velocity 100, removes the FF layer and right-channel samples, and uses the left-channel recordings as centered mono samples across velocities 1-127. The script trims each sample to at most 4 seconds, fades it to silence over its final second (from 3 to 4 seconds for longer samples), disables sample looping, stores all PCM sample data in one Ogg Vorbis SF2Pack stream, and decodes that stream once when the bank loads.

To create a smaller Grand Piano variant with half as many sample zones:

```bash
bun run extract-mono-piano
```

This reads the 12-zone `public/soundfonts/grand-piano-mono-compact.sf3` bank and writes `public/soundfonts/grand-piano-mono-ultra-compact.sf3`, served from `/soundfonts/grand-piano-mono-ultra-compact.sf3`. It blends neighboring mono samples into 6 composites and assigns each to a wider key range, increasing pitch interpolation between the recorded notes. The script uses `wasm-media-encoders` to write the blended samples as Ogg Vorbis. This optional 6-zone variant is available alongside the full, mono-simple, and 12-zone compact banks.
The app applies a dynamics compressor to SoundFont output to reduce clipping from overlapping notes.

This project was created using `bun init` in bun v1.4.2. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
