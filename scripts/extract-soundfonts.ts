import { BasicSoundBank, Modulator, SoundBankLoader } from "spessasynth_core";
import { mkdir } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const sourcePath = fileURLToPath(new URL("../MuseScore_General.sf3", import.meta.url));
const outputDirectory = fileURLToPath(new URL("../public/soundfonts", import.meta.url));
const presetsToExtract = [
  { name: "Grand Piano", program: 0, bankMSB: 0, bankLSB: 0, fileName: "grand-piano.sf3" },
  { name: "Marimba", program: 12, bankMSB: 0, bankLSB: 0, fileName: "marimba.sf3" },
] as const;

await BasicSoundBank.ready;

const sourceBuffer = await Bun.file(sourcePath).arrayBuffer();
const sourceBank = SoundBankLoader.fromArrayBuffer(sourceBuffer, { copySampleData: false });
await mkdir(outputDirectory, { recursive: true });

for (const target of presetsToExtract) {
  const matches = sourceBank.presets.filter((preset) =>
    preset.name === target.name
    && preset.program === target.program
    && preset.bankMSB === target.bankMSB
    && preset.bankLSB === target.bankLSB
  );
  if (matches.length !== 1) {
    throw new Error(`Expected one ${target.name} preset in ${sourcePath}, found ${matches.length}`);
  }

  const extractedBank = new BasicSoundBank("sf2");
  extractedBank.soundBankInfo = { ...sourceBank.soundBankInfo };
  extractedBank.defaultModulators = sourceBank.defaultModulators.map((modulator) => Modulator.copyFrom(modulator));
  extractedBank.customDefaultModulators = sourceBank.customDefaultModulators;
  extractedBank.clonePreset(matches[0], { reuseByName: false, reuseChildren: "none" });
  extractedBank.flush();

  const soundFontData = extractedBank.writeSF2();
  const verificationBank = SoundBankLoader.fromArrayBuffer(soundFontData, { sampleData: false });
  const extractedPreset = verificationBank.presets[0];
  if (
    verificationBank.presets.length !== 1
    || extractedPreset?.name !== target.name
    || extractedPreset.program !== target.program
    || verificationBank.samples.length === 0
  ) {
    throw new Error(`The extracted ${target.name} SoundFont did not pass validation`);
  }

  const outputPath = join(outputDirectory, target.fileName);
  await Bun.write(outputPath, soundFontData);
  console.log(`Extracted ${target.name} (${soundFontData.byteLength} bytes) to ${outputPath}`);
}
