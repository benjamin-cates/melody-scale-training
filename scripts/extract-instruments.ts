import { BasicSoundBank, SoundBankLoader } from "spessasynth_core";
import { fileURLToPath } from "node:url";

const soundFontPath = fileURLToPath(new URL("../MuseScore_General.sf3", import.meta.url));
const outputPath = fileURLToPath(new URL("../src/audio/soundfont-instruments.json", import.meta.url));

await BasicSoundBank.ready;

const soundFontBuffer = await Bun.file(soundFontPath).arrayBuffer();
const soundBank = SoundBankLoader.fromArrayBuffer(soundFontBuffer, {
  sampleData: false,
  copySampleData: false,
});

const instruments = soundBank.presets.map(({ name, program, bankMSB, bankLSB, isGMGSDrum }) => ({
  name,
  program,
  bankMSB,
  bankLSB,
  isGMGSDrum,
}));

if (instruments.length === 0) {
  throw new Error(`No presets were found in ${soundFontPath}`);
}

await Bun.write(outputPath, `${JSON.stringify(instruments, null, 2)}\n`);
console.log(`Extracted ${instruments.length} presets to ${outputPath}`);
