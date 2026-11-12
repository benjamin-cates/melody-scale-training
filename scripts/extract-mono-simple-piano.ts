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

const sourcePath = fileURLToPath(new URL("../public/soundfonts/grand-piano.sf3", import.meta.url));
const outputPath = fileURLToPath(new URL("../public/soundfonts/grand-piano-mono-simple.sf2pack", import.meta.url));
const sourceLayers = ["Piano MF-low", "Piano MF-high"] as const;
const outputVelocityRange = { min: 1, max: 127 };
const maxDurationSeconds = 4;
const fadeStartSeconds = 3;

function encodeText(value: string): Uint8Array {
  return new TextEncoder().encode(value);
}

function concatenate(parts: Uint8Array[]): Uint8Array {
  const output = new Uint8Array(parts.reduce((length, part) => length + part.length, 0));
  let offset = 0;
  for (const part of parts) {
    output.set(part, offset);
    offset += part.length;
  }
  return output;
}

function writeRiffChunk(id: string, data: Uint8Array): Uint8Array {
  const paddedLength = data.length + (data.length % 2);
  const chunk = new Uint8Array(8 + paddedLength);
  chunk.set(encodeText(id), 0);
  new DataView(chunk.buffer).setUint32(4, data.length, true);
  chunk.set(data, 8);
  return chunk;
}

async function writeSF2Pack(pcmSoundFont: ArrayBuffer, sampleRate: number): Promise<Uint8Array> {
  const source = new Uint8Array(pcmSoundFont);
  const sourceView = new DataView(source.buffer, source.byteOffset, source.byteLength);
  const riff = new TextDecoder().decode(source.subarray(0, 4));
  const formType = new TextDecoder().decode(source.subarray(8, 12));
  if (riff !== "RIFF" || formType !== "sfbk") {
    throw new Error("Expected an uncompressed RIFF SF2 bank");
  }

  const encoder = await createOggEncoder();
  const chunks: Uint8Array[] = [];
  let offset = 12;
  let packedSampleData = false;
  while (offset + 8 <= source.length) {
    const chunkId = new TextDecoder().decode(source.subarray(offset, offset + 4));
    const chunkSize = sourceView.getUint32(offset + 4, true);
    const chunkEnd = offset + 8 + chunkSize + (chunkSize % 2);
    if (chunkEnd > source.length) throw new Error(`Invalid ${chunkId} chunk in SF2 bank`);

    if (chunkId === "LIST" && new TextDecoder().decode(source.subarray(offset + 8, offset + 12)) === "sdta") {
      if (packedSampleData) throw new Error("SF2 bank contains multiple sample-data lists");
      const sampleChunkOffset = offset + 12;
      const sampleChunkId = new TextDecoder().decode(source.subarray(sampleChunkOffset, sampleChunkOffset + 4));
      const sampleDataLength = sourceView.getUint32(sampleChunkOffset + 4, true);
      const sampleDataOffset = sampleChunkOffset + 8;
      const sampleDataEnd = sampleDataOffset + sampleDataLength;
      if (sampleChunkId !== "smpl" || sampleDataEnd > chunkEnd) {
        throw new Error("SF2 sample-data list does not contain a valid smpl chunk");
      }
      if (sampleDataLength % 2 !== 0) throw new Error("SF2 PCM sample data must contain whole 16-bit samples");

      const pcmSamples = new Float32Array(sampleDataLength / 2);
      for (let index = 0; index < pcmSamples.length; index += 1) {
        pcmSamples[index] = sourceView.getInt16(sampleDataOffset + index * 2, true) / 32768;
      }

      encoder.configure({ channels: 1, sampleRate, vbrQuality: 5 });
      const encodedParts = [encoder.encode([pcmSamples]).slice(), encoder.finalize().slice()];
      const encodedSamples = concatenate(encodedParts);
      const sampleChunk = writeRiffChunk("smpl", encodedSamples);
      const packedSampleList = writeRiffChunk(
        "LIST",
        concatenate([encodeText("sdta"), sampleChunk]),
      );
      chunks.push(packedSampleList);
      packedSampleData = true;
    } else {
      chunks.push(source.subarray(offset, chunkEnd));
    }

    offset = chunkEnd;
  }
  if (!packedSampleData) throw new Error("SF2 sample-data list was not found");
  if (offset !== source.length) throw new Error("Unexpected trailing data after SF2 chunks");

  const body = concatenate([encodeText("sfpk"), ...chunks]);
  const output = new Uint8Array(8 + body.length);
  output.set(encodeText("RIFF"), 0);
  new DataView(output.buffer).setUint32(4, body.length, true);
  output.set(body, 8);
  return output;
}

function trimAndFadeSample(sourceSample: BasicSample): Float32Array {
  const sourceAudio = sourceSample.getAudioData();
  const outputLength = Math.min(sourceAudio.length, Math.floor(sourceSample.sampleRate * maxDurationSeconds));
  const output = sourceAudio.slice(0, outputLength);
  const fadeLength = Math.min(Math.floor(sourceSample.sampleRate), outputLength);
  const fadeStart = Math.min(
    Math.floor(sourceSample.sampleRate * fadeStartSeconds),
    outputLength - fadeLength,
  );
  const fadeFrames = outputLength - fadeStart;
  for (let index = fadeStart; index < outputLength; index += 1) {
    const progress = fadeFrames <= 1 ? 1 : (index - fadeStart) / (fadeFrames - 1);
    output[index] = (output[index] ?? 0) * Math.cos(progress * Math.PI / 2);
  }
  return output;
}

await BasicSoundBank.ready;

const sourceData = await Bun.file(sourcePath).arrayBuffer();
const sourceBank = SoundBankLoader.fromArrayBuffer(sourceData, { copySampleData: false });
const sourcePreset = sourceBank.presets.find((preset) =>
  preset.name === "Grand Piano"
  && preset.program === 0
  && preset.bankMSB === 0
  && preset.bankLSB === 0
);
if (!sourcePreset) throw new Error(`Grand Piano preset not found in ${sourcePath}`);

const outputBank = new BasicSoundBank("sf2");
outputBank.soundBankInfo = { ...sourceBank.soundBankInfo };
outputBank.defaultModulators = sourceBank.defaultModulators.map((modulator) => Modulator.copyFrom(modulator));
outputBank.customDefaultModulators = sourceBank.customDefaultModulators;

const outputPreset = new BasicPreset(outputBank);
outputPreset.name = "Grand Piano Mono Simple";
outputPreset.program = sourcePreset.program;
outputPreset.bankMSB = sourcePreset.bankMSB;
outputPreset.bankLSB = sourcePreset.bankLSB;
outputPreset.isGMGSDrum = sourcePreset.isGMGSDrum;
outputPreset.library = sourcePreset.library;
outputPreset.genre = sourcePreset.genre;
outputPreset.morphology = sourcePreset.morphology;
outputPreset.globalZone.copyFrom(sourcePreset.globalZone);
outputPreset.globalZone.setGenerator(GeneratorTypes.pan, 0);

let expectedSampleCount = 0;
const outputInstruments: BasicInstrument[] = [];

for (const sourceLayerName of sourceLayers) {
  const sourceInstrument = sourceBank.instruments.find((instrument) => instrument.name === sourceLayerName);
  if (!sourceInstrument) throw new Error(`${sourceLayerName} instrument not found in ${sourcePath}`);

  const sourcePresetZone = sourcePreset.zones.find((zone) =>
    zone.instrument === sourceInstrument
    && zone.velRange.min === 75
    && zone.velRange.max === 107
  );
  if (!sourcePresetZone) {
    throw new Error(`The velocity-100 preset zone for ${sourceLayerName} was not found`);
  }

  const outputInstrument = new BasicInstrument();
  outputInstrument.name = `${sourceLayerName} Mono`;
  outputInstrument.globalZone.copyFrom(sourceInstrument.globalZone);
  outputInstrument.globalZone.setGenerator(GeneratorTypes.pan, 0);
  outputInstrument.globalZone.setGenerator(GeneratorTypes.sampleModes, 0);

  const sourceZones = sourceInstrument.zones.filter((zone) => zone.sample?.name.endsWith("(L)"));
  if (sourceZones.length === 0) throw new Error(`No left-channel samples found in ${sourceLayerName}`);
  expectedSampleCount += sourceZones.length;

  for (const sourceZone of sourceZones) {
    const sourceSample = sourceZone.sample;
    if (!sourceSample) throw new Error(`Missing sample in ${sourceLayerName}`);

    const outputSample = new BasicSample(
      sourceSample.name.replace(/\(L\)$/, "(Mono)"),
      sourceSample.sampleRate,
      sourceSample.originalKey,
      sourceSample.pitchCorrection,
      SampleTypes.monoSample,
      0,
      0,
    );
    outputSample.setAudioData(trimAndFadeSample(sourceSample), sourceSample.sampleRate);
    outputBank.addSamples(outputSample);

    const outputZone = outputInstrument.createZone(outputSample);
    outputZone.copyFrom(sourceZone);
    outputZone.sample = outputSample;
    outputZone.setGenerator(GeneratorTypes.pan, 0);
    outputZone.setGenerator(GeneratorTypes.sampleModes, 0);
    outputZone.velRange = outputVelocityRange;
  }

  outputBank.addInstruments(outputInstrument);
  outputInstruments.push(outputInstrument);

  const outputPresetZone = outputPreset.createZone(outputInstrument);
  outputPresetZone.copyFrom(sourcePresetZone);
  outputPresetZone.instrument = outputInstrument;
  outputPresetZone.velRange = outputVelocityRange;
}

outputBank.addPresets(outputPreset);
outputBank.flush();

const sampleRates = [...new Set(outputBank.samples.map((sample) => sample.sampleRate))];
if (sampleRates.length !== 1) throw new Error("SF2Pack requires all output samples to use the same sample rate");
await outputBank.setSampleFormat({ format: "pcm" });
const pcmSoundFont = outputBank.writeSF2();
const outputData = await writeSF2Pack(pcmSoundFont, sampleRates[0]!);

const verificationBank = SoundBankLoader.fromArrayBuffer(outputData);
const verificationPreset = verificationBank.presets[0];
const verificationZones = verificationBank.instruments.flatMap((instrument) => instrument.zones);
if (
  new TextDecoder().decode(outputData.subarray(8, 12)) !== "sfpk"
  ||
  verificationBank.presets.length !== 1
  || verificationPreset?.name !== "Grand Piano Mono Simple"
  || verificationPreset.program !== 0
  || verificationBank.instruments.length !== sourceLayers.length
  || verificationBank.samples.length !== expectedSampleCount
  || verificationBank.samples.some((sample) =>
    sample.sampleType !== SampleTypes.monoSample
    || sample.isLinked
    || !sample.isDecoded
    || !sample.name.startsWith("Piano MF")
    || sample.sampleLength > sample.sampleRate * maxDurationSeconds
  )
  || verificationZones.length !== expectedSampleCount
  || verificationZones.some((zone) =>
    zone.velRange.min !== outputVelocityRange.min
    || zone.velRange.max !== outputVelocityRange.max
    || zone.getGenerator(GeneratorTypes.sampleModes, NaN) !== 0
  )
  || verificationPreset.zones.length !== sourceLayers.length
  || verificationPreset.zones.some((zone) =>
    zone.velRange.min !== outputVelocityRange.min || zone.velRange.max !== outputVelocityRange.max
  )
) {
  throw new Error("The mono-simple Grand Piano SoundFont did not pass validation");
}
if (verificationBank.instruments.some((instrument) =>
  instrument.globalZone.getGenerator(GeneratorTypes.sampleModes, NaN) !== 0
)) {
  throw new Error("The mono-simple Grand Piano SoundFont still has sample looping enabled");
}

await Bun.write(outputPath, outputData);
console.log(
  `Created ${outputPath} (${outputData.byteLength} bytes, ${verificationBank.samples.length} MF mono samples, ${verificationZones.length} zones, maximum ${maxDurationSeconds}s with a ${maxDurationSeconds - fadeStartSeconds}s fade, decoded once as SF2Pack)`,
);
