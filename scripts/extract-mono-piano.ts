import {
  BasicInstrument,
  BasicPreset,
  BasicSample,
  BasicSoundBank,
  GeneratorTypes,
  Modulator,
  SampleTypes,
  SoundBankLoader,
} from "spessasynth_core";
import { createOggEncoder } from "wasm-media-encoders";
import { fileURLToPath } from "node:url";

const sourcePath = fileURLToPath(new URL("../public/soundfonts/grand-piano-mono-compact.sf3", import.meta.url));
const outputPath = fileURLToPath(new URL("../public/soundfonts/grand-piano-mono-ultra-compact.sf3", import.meta.url));
const targetSampleCount = 6;

function resampleToKey(sample: BasicSample, targetKey: number): Float32Array {
  const sourceData = sample.getAudioData();
  let peak = 0;
  for (const value of sourceData) peak = Math.max(peak, Math.abs(value));
  const threshold = Math.max(peak * 0.01, 0.0001);
  let onset = 0;
  while (onset < sourceData.length && Math.abs(sourceData[onset] ?? 0) < threshold) onset += 1;

  const rate = 2 ** ((targetKey - sample.originalKey) / 12);
  const outputLength = Math.max(1, Math.floor((sourceData.length - onset) / rate));
  const output = new Float32Array(outputLength);
  for (let index = 0; index < outputLength; index += 1) {
    const position = onset + index * rate;
    const leftIndex = Math.floor(position);
    const rightIndex = Math.min(leftIndex + 1, sourceData.length - 1);
    const fraction = position - leftIndex;
    const left = sourceData[leftIndex] ?? 0;
    const right = sourceData[rightIndex] ?? left;
    output[index] = left + (right - left) * fraction;
  }
  return output;
}

function blendSamples(samples: BasicSample[], targetKey: number): Float32Array {
  const alignedSamples = samples.map((sample) => resampleToKey(sample, targetKey));
  const output = new Float32Array(Math.max(...alignedSamples.map((sample) => sample.length)));
  const weight = 1 / Math.sqrt(alignedSamples.length);
  for (const sample of alignedSamples) {
    for (let index = 0; index < sample.length; index += 1) {
      output[index] = (output[index] ?? 0) + (sample[index] ?? 0) * weight;
    }
  }

  let peak = 0;
  for (const value of output) peak = Math.max(peak, Math.abs(value));
  if (peak > 0.98) {
    const scale = 0.98 / peak;
    for (let index = 0; index < output.length; index += 1) {
      output[index] = (output[index] ?? 0) * scale;
    }
  }
  return output;
}

await BasicSoundBank.ready;

const sourceData = await Bun.file(sourcePath).arrayBuffer();
const sourceBank = SoundBankLoader.fromArrayBuffer(sourceData, { copySampleData: false });
const sourcePreset = sourceBank.presets.find((preset) =>
  preset.name === "Grand Piano Mono Compact"
  && preset.program === 0
  && preset.bankMSB === 0
  && preset.bankLSB === 0
);
const sourceInstrument = sourceBank.instruments.find((instrument) => instrument.name === "Grand Piano Mono Compact");
if (!sourcePreset || !sourceInstrument) {
  throw new Error(`Grand Piano Mono Compact preset and instrument not found in ${sourcePath}`);
}

const sourceZones = sourceInstrument.zones.flatMap((sourceZone) => {
  const sourceSample = sourceZone.sample;
  return sourceSample ? [{ sourceSample, sourceZone }] : [];
});
const sourceSamples = [...new Set(sourceZones.map(({ sourceSample }) => sourceSample))]
  .sort((left, right) => left.originalKey - right.originalKey);
if (sourceSamples.length < targetSampleCount) {
  throw new Error(`Not enough source samples to create ${targetSampleCount} output samples`);
}

const selectedSamples = Array.from({ length: targetSampleCount }, (_, index) =>
  sourceSamples[Math.round(index * (sourceSamples.length - 1) / (targetSampleCount - 1))]
);
const compactZones = selectedSamples.map((sourceSample) => {
  if (!sourceSample) throw new Error("Could not select a source sample");
  const assignedZones = sourceZones.filter((candidate) => {
    let nearest = selectedSamples[0]!;
    for (const selected of selectedSamples.slice(1)) {
      if (
        selected
        && Math.abs(candidate.sourceSample.originalKey - selected.originalKey)
          < Math.abs(candidate.sourceSample.originalKey - nearest.originalKey)
      ) {
        nearest = selected;
      }
    }
    return nearest === sourceSample;
  });
  const sourceZone = sourceZones.find((candidate) => candidate.sourceSample === sourceSample)?.sourceZone;
  if (!sourceZone || assignedZones.length === 0) {
    throw new Error(`No key range or source zone found for ${sourceSample.name}`);
  }
  return {
    sourceSample,
    sourceZone,
    sourceSamples: [...new Set(assignedZones.map(({ sourceSample: assignedSample }) => assignedSample))],
    keyRange: {
      min: Math.min(...assignedZones.map(({ sourceZone: assignedZone }) => assignedZone.keyRange.min)),
      max: Math.max(...assignedZones.map(({ sourceZone: assignedZone }) => assignedZone.keyRange.max)),
    },
  };
});

const outputBank = new BasicSoundBank("sf2");
outputBank.soundBankInfo = { ...sourceBank.soundBankInfo };
outputBank.defaultModulators = sourceBank.defaultModulators.map((modulator) => Modulator.copyFrom(modulator));
outputBank.customDefaultModulators = sourceBank.customDefaultModulators;

const preset = new BasicPreset(outputBank);
preset.name = "Grand Piano Mono Ultra Compact";
preset.program = sourcePreset.program;
preset.bankMSB = sourcePreset.bankMSB;
preset.bankLSB = sourcePreset.bankLSB;
preset.isGMGSDrum = sourcePreset.isGMGSDrum;
preset.library = sourcePreset.library;
preset.genre = sourcePreset.genre;
preset.morphology = sourcePreset.morphology;
preset.globalZone.copyFrom(sourcePreset.globalZone);

const instrument = new BasicInstrument();
instrument.name = "Grand Piano Mono Ultra Compact";
instrument.globalZone.copyFrom(sourceInstrument.globalZone);

for (const { sourceSample, sourceZone, sourceSamples: blendedSamples, keyRange } of compactZones) {
  const blendedAudio = blendSamples(blendedSamples, sourceSample.originalKey);
  const sample = new BasicSample(
    `Grand Piano Blend ${sourceSample.originalKey}`,
    sourceSample.sampleRate,
    sourceSample.originalKey,
    0,
    SampleTypes.monoSample,
    0,
    0,
  );
  sample.setAudioData(blendedAudio, sourceSample.sampleRate);
  outputBank.addSamples(sample);
  const zone = instrument.createZone(sample);
  zone.copyFrom(sourceZone);
  zone.keyRange = keyRange;
  zone.velRange = { min: 1, max: 127 };
}

outputBank.addInstruments(instrument);
outputBank.addPresets(preset);
preset.createZone(instrument);
outputBank.flush();

const oggEncoder = await createOggEncoder();
await outputBank.setSampleFormat({
  format: "compressed",
  rejectOnFailure: true,
  compressionFunction: async (audioData, sampleRate) => {
    oggEncoder.configure({ channels: 1, sampleRate, vbrQuality: 5 });
    const chunks = [oggEncoder.encode([audioData]).slice(), oggEncoder.finalize().slice()];
    const encoded = new Uint8Array(chunks.reduce((length, chunk) => length + chunk.length, 0));
    let offset = 0;
    for (const chunk of chunks) {
      encoded.set(chunk, offset);
      offset += chunk.length;
    }
    return encoded;
  },
});

const outputData = outputBank.writeSF2();
const verificationBank = SoundBankLoader.fromArrayBuffer(outputData, { sampleData: false });
const extractedPreset = verificationBank.presets[0];
const extractedInstrument = verificationBank.instruments[0];
const extractedInstrumentZones = extractedInstrument?.zones ?? [];
if (
  verificationBank.presets.length !== 1
  || verificationBank.instruments.length !== 1
  || verificationBank.samples.length !== targetSampleCount
  || verificationBank.samples.some((sample) =>
    sample.sampleType !== SampleTypes.monoSample || sample.storedForm !== "vorbis" || sample.isLinked
  )
  || extractedPreset?.name !== "Grand Piano Mono Ultra Compact"
  || extractedInstrumentZones.length !== targetSampleCount
  || extractedInstrumentZones.some((zone, index) => {
    const source = compactZones[index];
    return !source
      || zone.keyRange.min !== source.keyRange.min
      || zone.keyRange.max !== source.keyRange.max
      || zone.velRange.min !== 1
      || zone.velRange.max !== 127;
  })
) {
  throw new Error("The ultra-compact mono Grand Piano SoundFont did not pass validation");
}

await Bun.write(outputPath, outputData);
console.log(
  `Created ${outputPath} (${outputData.byteLength} bytes, ${verificationBank.samples.length} blended mono samples, ${extractedInstrumentZones.length} zones)`,
);
