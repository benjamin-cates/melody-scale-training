import { useEffect, useMemo, useRef, useState } from "react";
import { getAudioBus, getAudioContext } from "./audio";

type Spacing = "greenwood" | "linear" | "custom";
type Carrier = "sine" | "noise";

type VocoderSettings = {
  channels: number;
  maxFrequency: number;
  slope: number;
  spacing: Spacing;
  carrier: Carrier;
};

const DEFAULT_SETTINGS: VocoderSettings = {
  channels: 8,
  maxFrequency: 4000,
  slope: -12,
  spacing: "greenwood",
  carrier: "sine",
};

function greenwoodPosition(frequency: number) {
  return Math.log10(frequency / 165.4 + 0.88) / 2.1;
}

function greenwoodFrequency(position: number) {
  return 165.4 * (10 ** (2.1 * position) - 0.88);
}

function getCenterFrequencies(settings: VocoderSettings): number[] {
  const minimum = 200;
  if (settings.spacing === "linear") {
    return Array.from({ length: settings.channels }, (_, index) =>
      minimum + ((settings.maxFrequency - minimum) * index) / Math.max(settings.channels - 1, 1));
  }
  const start = greenwoodPosition(minimum);
  const end = greenwoodPosition(settings.maxFrequency);
  return Array.from({ length: settings.channels }, (_, index) =>
    greenwoodFrequency(start + ((end - start) * index) / Math.max(settings.channels - 1, 1)));
}

function getBandEdges(centers: number[], minimum: number, maximum: number) {
  return centers.map((center, index) => ({
    center,
    low: index === 0 ? minimum : Math.sqrt(centers[index - 1] * center),
    high: index === centers.length - 1 ? maximum : Math.sqrt(center * centers[index + 1]),
  }));
}

function getIntensityColor(intensity: number): { background: string; shadow: string } {
  if (intensity <= 0.02) return { background: "#1c282e", shadow: "none" };
  const clamped = Math.min(1, Math.max(0, intensity));
  const hue = Math.round(135 - clamped * 120);
  const lightness = Math.round(35 + clamped * 25);
  const saturation = Math.round(75 + clamped * 20);
  return {
    background: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
    shadow: clamped > 0.08 ? `0 0 ${Math.round(clamped * 6)}px hsla(${hue}, ${saturation}%, ${lightness}%, 0.6)` : "none",
  };
}

const WORKLET_SOURCE = `
class SpectralFilterbankProcessor extends AudioWorkletProcessor {
  constructor(options) {
    super();
    const bands = options.processorOptions.bands;
    this.size = 2048;
    this.hop = 512;
    this.channels = bands.length;
    this.slope = Math.abs(options.processorOptions.slope);
    this.carrier = options.processorOptions.carrier;
    this.input = new Float32Array(this.size);
    this.inputCount = 0;
    this.output = Array.from({ length: this.channels }, () => new Float32Array(this.size * 4));
    this.readIndex = 0;
    this.window = Float32Array.from({ length: this.size }, (_, index) =>
      0.5 - 0.5 * Math.cos((2 * Math.PI * index) / (this.size - 1)));
    this.bands = bands;
    this.real = new Float32Array(this.size);
    this.imaginary = new Float32Array(this.size);
    this.meterSquares = new Float32Array(this.channels);
    this.envelopes = new Float32Array(this.channels);
    this.synthesisFrame = 0;
    this.noiseFilters = bands.map((band) => {
      const omega = 2 * Math.PI * band.center / sampleRate;
      const bandwidth = Math.max(1, band.high - band.low);
      const alpha = Math.sin(omega) / (2 * Math.max(0.5, band.center / bandwidth));
      const a0 = 1 + alpha;
      return {
        b0: alpha / a0,
        b2: -alpha / a0,
        a1: -2 * Math.cos(omega) / a0,
        a2: (1 - alpha) / a0,
        input1: 0,
        input2: 0,
        output1: 0,
        output2: 0,
        power: 0.01,
      };
    });
    this.disposed = false;
    this.port.onmessage = (event) => {
      if (event.data?.type === "dispose") this.disposed = true;
    };
  }

  fft(inverse) {
    const real = this.real;
    const imaginary = this.imaginary;
    for (let i = 1, j = 0; i < this.size; i += 1) {
      let bit = this.size >> 1;
      for (; j & bit; bit >>= 1) j ^= bit;
      j ^= bit;
      if (i < j) {
        const realValue = real[i]; real[i] = real[j]; real[j] = realValue;
        const imaginaryValue = imaginary[i]; imaginary[i] = imaginary[j]; imaginary[j] = imaginaryValue;
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

  nextNoiseSample(channel) {
    const filter = this.noiseFilters[channel];
    const input = Math.random() * 2 - 1;
    const output = filter.b0 * input + filter.b2 * filter.input2 - filter.a1 * filter.output1 - filter.a2 * filter.output2;
    filter.input2 = filter.input1;
    filter.input1 = input;
    filter.output2 = filter.output1;
    filter.output1 = output;
    filter.power = filter.power * 0.995 + output * output * 0.005;
    return output * Math.SQRT1_2 / Math.sqrt(Math.max(filter.power, 0.000001));
  }

  process(inputs, outputs) {
    if (this.disposed) return false;
    const input = inputs[0];
    const output = outputs[0];
    const inputChannels = input.length;
    for (let sampleIndex = 0; sampleIndex < 128; sampleIndex += 1) {
      let sample = 0;
      for (let inputChannel = 0; inputChannel < inputChannels; inputChannel += 1) {
        sample += input[inputChannel]?.[sampleIndex] ?? 0;
      }
      this.input[this.inputCount] = inputChannels ? sample / inputChannels : 0;
      this.inputCount += 1;
      for (let channel = 0; channel < this.channels; channel += 1) {
        const outputSample = this.output[channel][this.readIndex];
        output[channel][sampleIndex] = outputSample;
        this.meterSquares[channel] += outputSample * outputSample;
        this.output[channel][this.readIndex] = 0;
      }
      this.readIndex = (this.readIndex + 1) % (this.size * 4);
      if (this.inputCount === this.size) {
        for (let index = 0; index < this.size; index += 1) {
          this.real[index] = this.input[index] * this.window[index];
          this.imaginary[index] = 0;
        }
        this.fft(false);
        for (let channel = 0; channel < this.channels; channel += 1) {
          const band = this.bands[channel];
          let energy = 0;
          let weight = 0;
          for (let index = 1; index <= this.size / 2; index += 1) {
            const frequency = index * sampleRate / this.size;
            let multiplier = 0;
            if (frequency >= band.low && frequency <= band.high) multiplier = 1;
            else if (frequency > 0) {
              const boundary = frequency < band.low ? band.low : band.high;
              const octaves = Math.abs(Math.log10(frequency / boundary) / Math.log10(2));
              multiplier = 10 ** (-(octaves * this.slope) / 20);
            }
            const magnitudeSquared = this.real[index] * this.real[index] + this.imaginary[index] * this.imaginary[index];
            energy += magnitudeSquared * multiplier * multiplier;
            weight += multiplier * multiplier;
          }
          const targetEnvelope = Math.min(0.2, (Math.sqrt(energy / Math.max(weight, 1)) * 3) / this.size);
          const previousEnvelope = this.envelopes[channel];
          this.envelopes[channel] = targetEnvelope;
          for (let index = 0; index < this.size; index += 1) {
            const position = (this.readIndex + index) % (this.size * 4);
            const progress = index / (this.size - 1);
            const envelope = previousEnvelope + (targetEnvelope - previousEnvelope) * progress;
            const phase = (2 * Math.PI * band.center * (this.synthesisFrame + index)) / sampleRate;
            const carrier = this.carrier === "noise" ? this.nextNoiseSample(channel) : Math.sin(phase);
            this.output[channel][position] += carrier * envelope * this.window[index] * 2 / 3;
          }
        }
        this.synthesisFrame += this.hop;
        this.input.copyWithin(0, this.hop);
        this.inputCount = this.size - this.hop;
      }
    }
    this.port.postMessage({
      type: "levels",
      levels: Array.from(this.meterSquares, (sum) => Math.sqrt(sum / 128)),
    });
    this.meterSquares.fill(0);
    return true;
  }
}
registerProcessor("spectral-filterbank", SpectralFilterbankProcessor);
`;

let effectInstance = 0;
let workletModulePromise: Promise<void> | null = null;

function loadSpectralFilterbank(context: AudioContext) {
  if (!workletModulePromise) {
    const workletUrl = URL.createObjectURL(new Blob([WORKLET_SOURCE], { type: "application/javascript" }));
    workletModulePromise = context.audioWorklet.addModule(workletUrl).finally(() => {
      URL.revokeObjectURL(workletUrl);
    });
    workletModulePromise.catch(() => {
      workletModulePromise = null;
    });
  }
  return workletModulePromise;
}

export function Vocoder() {
  const [open, setOpen] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  const [error, setError] = useState("");
  const audioRef = useRef<{
    context: AudioContext;
    bus: GainNode;
    worklet: AudioWorkletNode;
    nodes: AudioNode[];
  } | null>(null);
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);
  const testOscillatorRef = useRef<OscillatorNode | null>(null);
  const centers = useMemo(() => getCenterFrequencies(settings), [settings]);
  useEffect(() => {
    if (!enabled) return;
    const effectId = effectInstance += 1;
    console.log("[VocoderSpectrum] effect start", { effectId, centers: centers.length, settings });
    let cancelled = false;
    let graph: typeof audioRef.current = null;
    let animationFrameId: number | null = null;
    let busRouted = false;

    function disposeWorklet(worklet: AudioWorkletNode) {
      worklet.port.onmessage = null;
      worklet.port.postMessage({ type: "dispose" });
    }

    function disconnectNodes(nodes: AudioNode[]) {
      nodes.forEach((node) => {
        try {
          node.disconnect();
        } catch {}
      });
    }

    function restoreBus() {
      if (!busRouted) return;
      if (audioRef.current && audioRef.current !== graph) {
        console.log("[VocoderSpectrum] skipped stale bus restore", {
          effectId,
          activeGraphIsDifferent: true,
        });
        busRouted = false;
        return;
      }
      console.log("[VocoderSpectrum] restoring shared bus", { effectId, cancelled, hasGraph: Boolean(graph) });
      const bus = getAudioBus();
      bus.disconnect();
      bus.connect(getAudioContext().destination);
      busRouted = false;
      console.log("[VocoderSpectrum] shared bus restored", { effectId });
    }

    async function start() {
      let pendingWorklet: AudioWorkletNode | null = null;
      let pendingNodes: AudioNode[] = [];
      try {
        const context = getAudioContext();
        const bus = getAudioBus();
        const edges = getBandEdges(centers, 200, settings.maxFrequency);
        const processorName = "spectral-filterbank";
        console.log("[VocoderSpectrum] loading shared worklet", { effectId, processorName, reused: workletModulePromise !== null });
        await loadSpectralFilterbank(context);
        console.log("[VocoderSpectrum] shared worklet ready", { effectId, processorName, cancelled });
        if (cancelled) {
          console.log("[VocoderSpectrum] setup abandoned after worklet load", { effectId });
          return;
        }
        const source = context.createGain();
        const inputAnalyser = context.createAnalyser();
        inputAnalyser.fftSize = 1024;
        const worklet = new AudioWorkletNode(context, processorName, {
          numberOfInputs: 1,
          numberOfOutputs: 1,
          outputChannelCount: [centers.length],
          processorOptions: { bands: edges, slope: settings.slope, carrier: settings.carrier },
        });
        pendingWorklet = worklet;
        worklet.onprocessorerror = (event) => {
          console.log(`An error occurred in AudioWorklet:`, event);
        };
        const splitter = context.createChannelSplitter(centers.length);
        const sum = context.createGain();
        sum.gain.value = 1 / Math.sqrt(centers.length);
        const outputAnalyser = context.createAnalyser();
        outputAnalyser.fftSize = 1024;
        const normalizer = context.createGain();
        normalizer.gain.value = 2.5;
        source.connect(inputAnalyser).connect(worklet).connect(splitter);
        centers.forEach((_, index) => splitter.connect(sum, index));
        sum.connect(outputAnalyser).connect(normalizer).connect(context.destination);
        const nodes: AudioNode[] = [source, inputAnalyser, worklet, splitter, sum, outputAnalyser, normalizer];
        pendingNodes = nodes;
        await context.resume();
        console.log("[VocoderSpectrum] context resumed", { effectId, state: context.state, cancelled });
        if (cancelled) {
          disposeWorklet(worklet);
          disconnectNodes(nodes);
          return;
        }
        graph = { context, bus, worklet, nodes };
        audioRef.current = graph;
        pendingWorklet = null;
        pendingNodes = [];
        console.log("[VocoderSpectrum] routing shared bus into ready vocoder", { effectId });
        try {
          bus.disconnect();
          bus.connect(source);
          busRouted = true;
        } catch (reason) {
          bus.disconnect();
          bus.connect(context.destination);
          throw reason;
        }
        console.log("[VocoderSpectrum] graph installed", { effectId, processorName });
        const reportedLevels = new Float32Array(centers.length);
        worklet.port.onmessage = (event: MessageEvent<{ type: string; levels?: number[] }>) => {
          if (event.data.type !== "levels" || !event.data.levels) return;
          reportedLevels.set(event.data.levels);
        };
        const levels = new Float32Array(centers.length);
        const updateMeter = () => {
          if (cancelled || audioRef.current !== graph) return;
          reportedLevels.forEach((rms, index) => {
            const intensity = Math.min(1, rms * 5.5);
            levels[index] = intensity > levels[index] ? intensity : Math.max(0, levels[index] * 0.84 - 0.004);
            const box = boxRefs.current[index];
            if (box) {
              const colors = getIntensityColor(levels[index]);
              box.style.backgroundColor = colors.background;
              box.style.boxShadow = colors.shadow;
              box.textContent = `${Math.floor(rms * 10000) / 10000}`;
            }
          });
          animationFrameId = window.requestAnimationFrame(updateMeter);
        };
        animationFrameId = window.requestAnimationFrame(updateMeter);
      } catch (reason) {
        console.log("[VocoderSpectrum] setup failed", { effectId, cancelled, hasGraph: Boolean(graph), reason });
        if (pendingWorklet) disposeWorklet(pendingWorklet);
        disconnectNodes(pendingNodes);
        if (!graph) restoreBus();
        if (!cancelled) {
          setError(reason instanceof Error ? reason.message : "The spectral vocoder could not be started.");
          setEnabled(false);
        }
      }
    }

    void start();
    return () => {
      cancelled = true;
      console.log("[VocoderSpectrum] effect cleanup", { effectId, hasGraph: Boolean(graph), busRouted });
      if (animationFrameId !== null) window.cancelAnimationFrame(animationFrameId);
      boxRefs.current.forEach((box) => {
        if (box) { box.style.backgroundColor = ""; box.style.boxShadow = ""; box.textContent = ""; }
      });
      if (graph) {
        disposeWorklet(graph.worklet);
        disconnectNodes(graph.nodes);
        if (audioRef.current === graph) {
          console.log("[VocoderSpectrum] disconnecting vocoder graph and restoring bus", { effectId });
          graph.bus.disconnect();
          graph.bus.connect(graph.context.destination);
          busRouted = false;
          audioRef.current = null;
          console.log("[VocoderSpectrum] cleanup restored shared bus", { effectId });
        } else {
          console.log("[VocoderSpectrum] cleanup skipped bus restore for stale graph", { effectId });
          busRouted = false;
        }
      } else {
        restoreBus();
      }
    };
  }, [centers, enabled, settings.maxFrequency, settings.slope]);

  function updateSettings(patch: Partial<VocoderSettings>) {
    setSettings((current) => ({ ...current, ...patch }));
  }

  function playTestSweep() {
    const context = getAudioContext();
    const bus = getAudioBus();
    const currentOscillator = testOscillatorRef.current;
    if (currentOscillator) {
      try {
        currentOscillator.stop();
      } catch {}
    }
    const start = context.currentTime + 0.03;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(220, start);
    oscillator.frequency.exponentialRampToValueAtTime(settings.maxFrequency * 0.9, start + 5);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(0.08, start + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.08, start + 4.8);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 4.9);
    oscillator.connect(gain).connect(bus);
    oscillator.onended = () => {
      oscillator.disconnect();
      gain.disconnect();
      if (testOscillatorRef.current === oscillator) testOscillatorRef.current = null;
    };
    testOscillatorRef.current = oscillator;
    oscillator.start(start);
    oscillator.stop(start + 5);
    void context.resume();
  }

  return (
    <aside className={`vocoder ${open ? "is-open" : ""}`} aria-label="Cochlear implant vocoder">
      <button className="vocoder-toggle" onClick={() => setOpen((value) => !value)} aria-expanded={open}>
        <span className={`vocoder-status ${enabled ? "is-live" : ""}`} />
        Cochlear vocoder
        <b>{open ? "-" : "+"}</b>
      </button>
      {open && (
        <div className="vocoder-panel">
          <div className="vocoder-panel-body">
            <p className="vocoder-intro">Live eight-to-thirty-two channel spectral filterbank</p>
            <button className={`vocoder-power ${enabled ? "is-on" : ""}`} onClick={() => { setError(""); setEnabled((value) => !value); }}>
              {enabled ? "Stop vocoder" : "Start vocoder"}
            </button>
            <button className="vocoder-test" onClick={playTestSweep}>
              Play frequency sweep
            </button>
            <label className="vocoder-field">
              <span>Channels <output>{settings.channels}</output></span>
              <input type="range" min="2" max="32" value={settings.channels} onChange={(event) => updateSettings({ channels: Number(event.target.value) })} />
            </label>
            <label className="vocoder-field">
              <span>Maximum frequency <output>{settings.maxFrequency} Hz</output></span>
              <input type="range" min="4000" max="8000" step="500" value={settings.maxFrequency} onChange={(event) => updateSettings({ maxFrequency: Number(event.target.value) })} />
            </label>
            <label className="vocoder-field">
              <span>Attenuation slope <output>{settings.slope} dB/oct</output></span>
              <input type="range" min="-48" max="-6" step="0.1" value={settings.slope} onChange={(event) => updateSettings({ slope: Number(event.target.value) })} />
            </label>
            <label className="vocoder-field">
              <span>Frequency spacing</span>
              <select value={settings.spacing} onChange={(event) => updateSettings({ spacing: event.target.value as Spacing })}>
                <option value="greenwood">Greenwood logarithmic</option>
                <option value="linear">Linear</option>
                <option value="custom">Custom list</option>
              </select>
            </label>
            <label className="vocoder-field">
              <span>Carrier type</span>
              <select value={settings.carrier} onChange={(event) => updateSettings({ carrier: event.target.value as Carrier })}>
                <option value="sine">Sine bands</option>
                <option value="noise">Noise bands</option>
              </select>
            </label>
            {error && <p className="vocoder-error">{error}</p>}
            <p className="vocoder-note">Processes audio from this app before it reaches your speakers.</p>
          </div>
          <div className="vocoder-channel-meter" aria-label="Channel activity meter">
            {centers.map((center, index) => (
              <div className="vocoder-channel-box" key={`${index}-${Math.round(center)}`} ref={(element) => { boxRefs.current[index] = element; }} title={`Channel ${index + 1}: ${Math.round(center)} Hz`} />
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}