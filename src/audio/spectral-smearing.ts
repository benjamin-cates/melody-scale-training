import { getAudioBus, getAudioContext, getAudioOutput } from "./audio";

export const SPECTRAL_SMEARING_FFT_SIZE = 2048;
const HOP_SIZE = 512;
export const MAX_SPECTRAL_SMEARING_RADIUS_HZ = 1000;

export function getSpectralSmearingSigmaBins(radiusHz: number, sampleRate: number) {
  return Math.max(0, (radiusHz * SPECTRAL_SMEARING_FFT_SIZE) / (4 * sampleRate));
}

const WORKLET_SOURCE = `
class SpectralSmearingProcessor extends AudioWorkletProcessor {
  constructor(options) {
    super();
    this.size = ${SPECTRAL_SMEARING_FFT_SIZE};
    this.hop = ${HOP_SIZE};
    this.halfSize = this.size / 2;
    this.queueLength = this.size * 4;
    this.clock = 0;
    this.historyIndex = 0;
    this.samplesSinceFrame = 0;
    this.sigma = options.processorOptions.sigma;
    this.maxSigma = (${MAX_SPECTRAL_SMEARING_RADIUS_HZ} * this.size) / (4 * sampleRate);
    this.window = Float32Array.from({ length: this.size }, (_, index) =>
      0.5 - 0.5 * Math.cos((2 * Math.PI * index) / (this.size - 1)));
    this.history = Array.from({ length: 2 }, () => new Float32Array(this.size));
    this.directQueue = Array.from({ length: 2 }, () => new Float32Array(this.queueLength));
    this.smearedQueue = Array.from({ length: 2 }, () => new Float32Array(this.queueLength));
    this.smearedWeights = new Float32Array(this.queueLength);
    this.disposed = false;
    this.expectedWeights = new Float32Array(this.hop);
    for (let phase = 0; phase < this.hop; phase += 1) {
      let weight = 0;
      for (let index = phase; index < this.size; index += this.hop) {
        weight += this.window[index] * this.window[index];
      }
      this.expectedWeights[phase] = weight;
    }
    this.real = new Float32Array(this.size);
    this.imaginary = new Float32Array(this.size);
    this.magnitudes = new Float32Array(this.halfSize + 1);
    this.blurred = new Float32Array(this.halfSize + 1);
    this.kernel = new Float32Array(1);
    this.radius = 0;
    this.setSigma(this.sigma);
    this.port.onmessage = (event) => {
      if (event.data?.type === "sigma") this.setSigma(event.data.sigma);
      if (event.data?.type === "dispose") this.disposed = true;
    };
  }

  setSigma(value) {
    this.sigma = Math.max(0, Math.min(this.maxSigma, Number(value) || 0));
    if (this.sigma <= 1e-6) {
      this.radius = 0;
      this.kernel = new Float32Array([1]);
      return;
    }
    this.radius = Math.min(Math.ceil(4 * this.sigma), this.halfSize);
    this.kernel = new Float32Array(this.radius * 2 + 1);
    let total = 0;
    for (let offset = -this.radius; offset <= this.radius; offset += 1) {
      const weight = Math.exp(-0.5 * (offset / this.sigma) ** 2);
      this.kernel[offset + this.radius] = weight;
      total += weight;
    }
    for (let index = 0; index < this.kernel.length; index += 1) {
      this.kernel[index] /= total;
    }
  }

  fft(inverse) {
    const real = this.real;
    const imaginary = this.imaginary;
    for (let index = 1, bitReversed = 0; index < this.size; index += 1) {
      let bit = this.size >> 1;
      for (; bitReversed & bit; bit >>= 1) bitReversed ^= bit;
      bitReversed ^= bit;
      if (index < bitReversed) {
        const realValue = real[index];
        real[index] = real[bitReversed];
        real[bitReversed] = realValue;
        const imaginaryValue = imaginary[index];
        imaginary[index] = imaginary[bitReversed];
        imaginary[bitReversed] = imaginaryValue;
      }
    }
    for (let length = 2; length <= this.size; length <<= 1) {
      const angle = (inverse ? 2 : -2) * Math.PI / length;
      const stepReal = Math.cos(angle);
      const stepImaginary = Math.sin(angle);
      for (let start = 0; start < this.size; start += length) {
        let factorReal = 1;
        let factorImaginary = 0;
        for (let offset = 0; offset < length / 2; offset += 1) {
          const left = start + offset;
          const right = left + length / 2;
          const productReal = factorReal * real[right] - factorImaginary * imaginary[right];
          const productImaginary = factorReal * imaginary[right] + factorImaginary * real[right];
          real[right] = real[left] - productReal;
          imaginary[right] = imaginary[left] - productImaginary;
          real[left] += productReal;
          imaginary[left] += productImaginary;
          const nextReal = factorReal * stepReal - factorImaginary * stepImaginary;
          factorImaginary = factorReal * stepImaginary + factorImaginary * stepReal;
          factorReal = nextReal;
        }
      }
    }
    if (inverse) {
      for (let index = 0; index < this.size; index += 1) {
        real[index] /= this.size;
        imaginary[index] /= this.size;
      }
    }
  }

  processFrame(channel) {
    const history = this.history[channel];
    for (let index = 0; index < this.size; index += 1) {
      const sample = history[(this.historyIndex + index) % this.size];
      this.real[index] = sample * this.window[index];
      this.imaginary[index] = 0;
    }
    this.fft(false);

    let originalEnergy = 0;
    for (let bin = 0; bin <= this.halfSize; bin += 1) {
      const magnitude = Math.hypot(this.real[bin], this.imaginary[bin]);
      this.magnitudes[bin] = magnitude;
      const energyWeight = bin === 0 || bin === this.halfSize ? 1 : 2;
      originalEnergy += magnitude * magnitude * energyWeight;
    }

    for (let bin = 0; bin <= this.halfSize; bin += 1) {
      let magnitude = 0;
      for (let offset = -this.radius; offset <= this.radius; offset += 1) {
        const sourceBin = Math.max(0, Math.min(this.halfSize, bin + offset));
        magnitude += this.magnitudes[sourceBin] * this.kernel[offset + this.radius];
      }
      this.blurred[bin] = magnitude;
    }

    let blurredEnergy = 0;
    for (let bin = 0; bin <= this.halfSize; bin += 1) {
      const energyWeight = bin === 0 || bin === this.halfSize ? 1 : 2;
      blurredEnergy += this.blurred[bin] * this.blurred[bin] * energyWeight;
    }
    const scale = blurredEnergy > 1e-18 ? Math.sqrt(originalEnergy / blurredEnergy) : 1;
    this.real[0] = this.blurred[0] * scale * (this.real[0] < 0 ? -1 : 1);
    this.imaginary[0] = 0;
    this.real[this.halfSize] = this.blurred[this.halfSize] * scale
      * (this.real[this.halfSize] < 0 ? -1 : 1);
    this.imaginary[this.halfSize] = 0;
    const phaseBlend = Math.min(1, this.sigma / 10);
    for (let bin = 1; bin < this.halfSize; bin += 1) {
      const magnitude = Math.hypot(this.real[bin], this.imaginary[bin]);
      const targetMagnitude = this.blurred[bin] * scale;
      const originalPhase = Math.atan2(this.imaginary[bin], this.real[bin]);
      const randomPhase = (Math.random() * 2 - 1) * Math.PI;
      let phaseReal = 0;
      let phaseImaginary = 0;
      if (magnitude <= 1e-18 || phaseBlend >= 1) {
        phaseReal = Math.cos(randomPhase);
        phaseImaginary = Math.sin(randomPhase);
      } else if (phaseBlend <= 0) {
        phaseReal = Math.cos(originalPhase);
        phaseImaginary = Math.sin(originalPhase);
      } else {
        phaseReal = (1 - phaseBlend) * Math.cos(originalPhase) + phaseBlend * Math.cos(randomPhase);
        phaseImaginary = (1 - phaseBlend) * Math.sin(originalPhase) + phaseBlend * Math.sin(randomPhase);
        const phaseMagnitude = Math.hypot(phaseReal, phaseImaginary);
        if (phaseMagnitude <= 1e-12) {
          phaseReal = Math.cos(randomPhase);
          phaseImaginary = Math.sin(randomPhase);
        } else {
          phaseReal /= phaseMagnitude;
          phaseImaginary /= phaseMagnitude;
        }
      }
      this.real[bin] = targetMagnitude * phaseReal;
      this.imaginary[bin] = targetMagnitude * phaseImaginary;
      this.real[this.size - bin] = this.real[bin];
      this.imaginary[this.size - bin] = -this.imaginary[bin];
    }
    this.fft(true);

    for (let index = 0; index < this.size; index += 1) {
      const queueIndex = (this.clock + 1 + index) % this.queueLength;
      this.smearedQueue[channel][queueIndex] += this.real[index] * this.window[index];
      if (channel === 0) {
        this.smearedWeights[queueIndex] += this.window[index] * this.window[index];
      }
    }
  }

  process(inputs, outputs) {
    if (this.disposed) return false;
    const input = inputs[0];
    const output = outputs[0];
    const outputChannels = output.length;
    const frameCount = output[0]?.length ?? 128;
    for (let sampleIndex = 0; sampleIndex < frameCount; sampleIndex += 1) {
      const queueIndex = this.clock % this.queueLength;
      const weight = this.smearedWeights[queueIndex];
      const expectedWeight = this.expectedWeights[this.clock % this.hop];
      const coverage = Math.min(1, weight / Math.max(expectedWeight, 1e-12));
      for (let channel = 0; channel < outputChannels; channel += 1) {
        const source = input[channel] ?? input[0];
        const sample = source?.[sampleIndex] ?? 0;
        const delayedIndex = (this.clock + this.size) % this.queueLength;
        this.directQueue[channel][delayedIndex] = sample;
        const direct = this.directQueue[channel][queueIndex];
        const smeared = this.smearedQueue[channel][queueIndex] / Math.max(weight, 1e-12);
        output[channel][sampleIndex] = this.sigma <= 1e-6
          ? direct
          : direct * (1 - coverage) + smeared * coverage;
        this.directQueue[channel][queueIndex] = 0;
        this.smearedQueue[channel][queueIndex] = 0;
        this.history[channel][this.historyIndex] = sample;
      }
      this.smearedWeights[queueIndex] = 0;
      this.historyIndex = (this.historyIndex + 1) % this.size;
      this.samplesSinceFrame += 1;
      if (this.samplesSinceFrame === this.hop) {
        if (this.sigma > 1e-6) {
          for (let channel = 0; channel < outputChannels; channel += 1) {
            this.processFrame(channel);
          }
        }
        this.samplesSinceFrame = 0;
      }
      this.clock += 1;
    }
    return true;
  }
}
registerProcessor("spectral-smearing", SpectralSmearingProcessor);
`;

let workletModulePromise: Promise<void> | null = null;
let activeSessionId = 0;

function loadSpectralSmearing(context: AudioContext) {
  if (!workletModulePromise) {
    const workletUrl = URL.createObjectURL(new Blob([WORKLET_SOURCE], { type: "application/javascript" }));
    const pending = context.audioWorklet.addModule(workletUrl).finally(() => URL.revokeObjectURL(workletUrl));
    workletModulePromise = pending;
    pending.catch(() => {
      if (workletModulePromise === pending) workletModulePromise = null;
    });
  }
  return workletModulePromise;
}

export type SpectralSmearingSession = {
  ready: Promise<void>;
  setIntensity: (sigmaBins: number) => void;
  dispose: () => void;
};

export function createSpectralSmearing(initialSigmaBins: number): SpectralSmearingSession {
  const context = getAudioContext();
  const bus = getAudioBus();
  const source = context.createGain();
  const sessionId = activeSessionId + 1;
  activeSessionId = sessionId;
  const maxSigmaBins = getSpectralSmearingSigmaBins(MAX_SPECTRAL_SMEARING_RADIUS_HZ, context.sampleRate);
  let sigmaBins = Math.max(0, Math.min(maxSigmaBins, initialSigmaBins));
  let worklet: AudioWorkletNode | null = null;
  let busRouted = false;
  let disposed = false;

  const ready = loadSpectralSmearing(context).then(async () => {
    if (disposed) return;
    worklet = new AudioWorkletNode(context, "spectral-smearing", {
      numberOfInputs: 1,
      numberOfOutputs: 1,
      outputChannelCount: [2],
      channelCount: 2,
      channelCountMode: "explicit",
      processorOptions: { sigma: sigmaBins },
    });
    source.connect(worklet).connect(getAudioOutput());
    await context.resume();
    if (disposed) return;
    try {
      bus.disconnect();
      bus.connect(source);
      busRouted = true;
    } catch (reason) {
      bus.disconnect();
      bus.connect(getAudioOutput());
      throw reason;
    }
  }).catch((reason: unknown) => {
    worklet?.port.postMessage({ type: "dispose" });
    worklet?.disconnect();
    source.disconnect();
    throw reason;
  });

  return {
    ready,
    setIntensity(nextSigmaBins) {
      sigmaBins = Math.max(0, Math.min(maxSigmaBins, nextSigmaBins));
      worklet?.port.postMessage({ type: "sigma", sigma: sigmaBins });
    },
    dispose() {
      disposed = true;
      worklet?.port.postMessage({ type: "dispose" });
      worklet?.disconnect();
      source.disconnect();
      if (busRouted && activeSessionId === sessionId) {
        bus.disconnect();
        bus.connect(getAudioOutput());
        busRouted = false;
      }
    },
  };
}