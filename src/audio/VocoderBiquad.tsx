import { useEffect, useMemo, useRef, useState } from "react";
import { getAudioBus, getAudioContext } from "./audio";

type FilterSlope = -12 | -24;

type VocoderSettings = {
  channels: number;
  slope: FilterSlope;
};

const DEFAULT_SETTINGS: VocoderSettings = {
  channels: 8,
  slope: -12,
};
const FILTER_RESPONSE_SAMPLES = 4096;
const NOISE_SOURCE_POWER = 1 / 3;

function greenwoodPosition(frequency: number) {
  return Math.log10(frequency / 165.4 + 0.88) / 2.1;
}

function greenwoodFrequency(position: number) {
  return 165.4 * (10 ** (2.1 * position) - 0.88);
}

function getCenterFrequencies(settings: VocoderSettings): number[] {
  const minimum = 100;
  const maximum = 6000;
  const start = greenwoodPosition(minimum);
  const end = greenwoodPosition(maximum);
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

function makeBandPass(
  context: AudioContext,
  center: number,
  low: number,
  high: number,
  slope: FilterSlope,
): BiquadFilterNode[] {
  const bandwidth = Math.max(1, high - low);
  const stages = slope === -24 ? 2 : 1;
  return Array.from({ length: stages }, () => {
    const filter = context.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = center;
    filter.Q.value = center / bandwidth;
    return filter;
  });
}

function makeFourthOrderLowPass(context: AudioContext, frequency: number): BiquadFilterNode[] {
  return [0.5411961, 1.306563].map((q) => {
    const filter = context.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = frequency;
    filter.Q.value = q;
    return filter;
  });
}

function connectFilters(input: AudioNode, filters: BiquadFilterNode[]) {
  let previous: AudioNode = input;
  filters.forEach((filter) => {
    previous.connect(filter);
    previous = filter;
  });
}

function getCascadePower(filters: BiquadFilterNode[], sampleRate: number): number {
  const nyquist = sampleRate / 2;
  const frequencies = Float32Array.from({ length: FILTER_RESPONSE_SAMPLES }, (_, index) =>
    ((index + 0.5) * nyquist) / FILTER_RESPONSE_SAMPLES);
  const magnitudes = new Float32Array(FILTER_RESPONSE_SAMPLES).fill(1);
  const phase = new Float32Array(FILTER_RESPONSE_SAMPLES);

  filters.forEach((filter) => {
    const response = new Float32Array(FILTER_RESPONSE_SAMPLES);
    filter.getFrequencyResponse(frequencies, response, phase);
    for (let index = 0; index < response.length; index += 1) {
      magnitudes[index] *= response[index];
    }
  });

  return magnitudes.reduce((power, magnitude) => power + magnitude * magnitude, 0) / magnitudes.length;
}

function createNoiseCarrier(context: AudioContext): AudioBufferSourceNode {
  const buffer = context.createBuffer(1, context.sampleRate * 2, context.sampleRate);
  const samples = buffer.getChannelData(0);
  for (let index = 0; index < samples.length; index += 1) {
    samples[index] = Math.random() * 2 - 1;
  }
  const source = context.createBufferSource();
  source.buffer = buffer;
  source.loop = true;
  return source;
}

function getIntensityColor(intensity: number): { background: string; shadow: string } {
  if (intensity <= 0.02) {
    return {
      background: "#1c282e",
      shadow: "none",
    };
  }
  const clamped = Math.min(1, Math.max(0, intensity));
  const hue = Math.round(135 - clamped * 120);
  const lightness = Math.round(35 + clamped * 25);
  const saturation = Math.round(75 + clamped * 20);
  return {
    background: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
    shadow: clamped > 0.08 ? `0 0 ${Math.round(clamped * 6)}px hsla(${hue}, ${saturation}%, ${lightness}%, 0.6)` : "none",
  };
}

export function Vocoder() {
  const [open, setOpen] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  const [error, setError] = useState("");
  const audioRef = useRef<{ context: AudioContext; bus: GainNode; nodes: AudioNode[] } | null>(null);
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);

  const centers = useMemo(() => getCenterFrequencies(settings), [settings]);

  useEffect(() => {
    if (!enabled) return;
    let cancelled = false;
    let graph: typeof audioRef.current = null;
    let animationFrameId: number | null = null;

    async function start() {
      try {
        const context = getAudioContext();
        const bus = getAudioBus();
        const source = context.createGain();
        const preEmphasis = context.createBiquadFilter();
        preEmphasis.type = "highpass";
        preEmphasis.frequency.value = 1200;
        preEmphasis.Q.value = Math.SQRT1_2;
        if (cancelled) return;
        const edges = getBandEdges(centers, 100, 6000);
        const sum = context.createGain();
        const channelAnalysers: AnalyserNode[] = [];
        const analysisPowers: number[] = [];
        const nodes: AudioNode[] = [source, preEmphasis, sum];
        bus.disconnect();
        bus.connect(source);
        source.connect(preEmphasis);
        edges.forEach(({ center, low, high }) => {
          const analysisFilters = makeBandPass(context, center, low, high, settings.slope);
          const rectifier = context.createWaveShaper();
          rectifier.curve = Float32Array.from({ length: 1025 }, (_, index) =>
            Math.max(0, (index * 2) / 1024 - 1));
          const envelopeFilters = makeFourthOrderLowPass(context, 500);
          const channelAnalyser = context.createAnalyser();
          channelAnalyser.fftSize = 128;
          channelAnalyser.smoothingTimeConstant = 0.3;
          const carrier = createNoiseCarrier(context);
          const carrierFilters = makeBandPass(context, center, low, high, settings.slope);
          const carrierLevel = context.createGain();
          carrierLevel.gain.value = 1 / Math.sqrt(NOISE_SOURCE_POWER * getCascadePower(carrierFilters, context.sampleRate));
          const modulator = context.createGain();
          modulator.gain.value = 0;
          analysisPowers.push(getCascadePower([preEmphasis, ...analysisFilters], context.sampleRate));

          connectFilters(preEmphasis, analysisFilters);
          analysisFilters.at(-1)?.connect(rectifier);
          connectFilters(rectifier, envelopeFilters);
          envelopeFilters.at(-1)?.connect(modulator.gain);
          envelopeFilters.at(-1)?.connect(channelAnalyser);
          carrier.connect(modulator);
          modulator.connect(carrierLevel);
          connectFilters(carrierLevel, carrierFilters);
          carrierFilters.at(-1)?.connect(sum);
          carrier.start();
          nodes.push(...analysisFilters, rectifier, ...envelopeFilters, carrier, modulator, carrierLevel, ...carrierFilters, channelAnalyser);
          channelAnalysers.push(channelAnalyser);
        });
        sum.gain.value = 1 / Math.sqrt(0.5 * analysisPowers.reduce((total, power) => total + power, 0));
        sum.connect(context.destination);
        graph = { context, bus, nodes };
        audioRef.current = graph;
        await context.resume();

        const channelSampleData = new Float32Array(128);
        const levels = new Float32Array(channelAnalysers.length);
        const updateMeter = () => {
          if (cancelled || audioRef.current !== graph) return;
          for (let index = 0; index < channelAnalysers.length; index += 1) {
            const analyser = channelAnalysers[index];
            analyser.getFloatTimeDomainData(channelSampleData);
            let sumSquares = 0;
            for (let sampleIndex = 0; sampleIndex < channelSampleData.length; sampleIndex += 1) {
              const sample = channelSampleData[sampleIndex];
              sumSquares += sample * sample;
            }
            const rms = Math.sqrt(sumSquares / channelSampleData.length);
            const instantIntensity = Math.min(1, rms * 5.5);
            if (instantIntensity > levels[index]) {
              levels[index] = instantIntensity;
            } else {
              levels[index] = Math.max(0, levels[index] * 0.84 - 0.004);
            }
            const box = boxRefs.current[index];
            if (box) {
              const { background, shadow } = getIntensityColor(levels[index]);
              box.style.backgroundColor = background;
              box.style.boxShadow = shadow;
              box.textContent = `${Math.floor(rms*10000)/10000}`;
            }
          }
          animationFrameId = window.requestAnimationFrame(updateMeter);
        };
        animationFrameId = window.requestAnimationFrame(updateMeter);
      } catch (reason) {
        if (!cancelled) {
          setError(reason instanceof Error ? reason.message : "The audio output could not be processed.");
          setEnabled(false);
        }
      }
    }

    void start();
    return () => {
      cancelled = true;
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
      boxRefs.current.forEach((box) => {
        if (box) {
          box.style.backgroundColor = "";
          box.style.boxShadow = "";
          box.textContent = "";
        }
      });
      const current = graph ?? audioRef.current;
      if (current) {
        current.nodes.forEach((node) => {
          try {
            if (node instanceof OscillatorNode) node.stop();
            node.disconnect();
          } catch {
            // A node may already be disconnected during a settings rebuild.
          }
        });
        if (audioRef.current === current) {
          current.bus.disconnect();
          current.bus.connect(current.context.destination);
        }
      }
      if (audioRef.current === current) audioRef.current = null;
    };
  }, [centers, enabled, settings.slope]);

  function updateSettings(patch: Partial<VocoderSettings>) {
    setSettings((current) => ({ ...current, ...patch }));
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
            <p className="vocoder-intro">Live four- or eight-channel noise vocoder</p>
            <button
              className={`vocoder-power ${enabled ? "is-on" : ""}`}
              onClick={() => {
                setError("");
                setEnabled((value) => !value);
              }}
            >
              {enabled ? "Stop vocoder" : "Start vocoder"}
            </button>
            <label className="vocoder-field">
              <span>Channels <output>{settings.channels}</output></span>
              <input type="range" min="4" max="8" step="4" value={settings.channels} onChange={(event) => updateSettings({ channels: Number(event.target.value) })} />
            </label>
            <label className="vocoder-field">
              <span>Filter slope <output>{settings.slope} dB/oct</output></span>
              <input type="range" min="-24" max="-12" step="12" value={settings.slope} onChange={(event) => updateSettings({ slope: Number(event.target.value) as FilterSlope })} />
            </label>
            {error && <p className="vocoder-error">{error}</p>}
            <p className="vocoder-note">100-6000 Hz Greenwood-spaced bands with 1200 Hz pre-emphasis and 500 Hz envelopes.</p>
          </div>
          <div className="vocoder-channel-meter" aria-label="Channel activity meter">
            {centers.map((center, index) => (
              <div
                className="vocoder-channel-box"
                key={`${index}-${Math.round(center)}`}
                ref={(element) => {
                  boxRefs.current[index] = element;
                }}
                title={`Channel ${index + 1}: ${Math.round(center)} Hz`}
              />
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}