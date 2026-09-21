import { useEffect, useMemo, useRef, useState } from "react";
import { getAudioBus, getAudioContext } from "./audio";

type Spacing = "greenwood" | "linear" | "custom";

type VocoderSettings = {
  channels: number;
  maxFrequency: number;
  slope: number;
  spacing: Spacing;
  customFrequencies: string;
};

const DEFAULT_SETTINGS: VocoderSettings = {
  channels: 8,
  maxFrequency: 4000,
  slope: -12,
  spacing: "greenwood",
  customFrequencies: "250, 390, 560, 780, 1080, 1500, 2200, 3200",
};

function greenwoodPosition(frequency: number) {
  return Math.log10(frequency / 165.4 + 0.88) / 2.1;
}

function greenwoodFrequency(position: number) {
  return 165.4 * (10 ** (2.1 * position) - 0.88);
}

function parseCustomFrequencies(value: string, channels: number, maxFrequency: number) {
  const values = value
    .split(/[\s,]+/)
    .map(Number)
    .filter((frequency) => Number.isFinite(frequency) && frequency >= 200 && frequency <= maxFrequency);
  return values.length >= channels ? values.sort((left, right) => left - right).slice(0, channels) : null;
}

function getCenterFrequencies(settings: VocoderSettings): number[] {
  const minimum = 200;
  if (settings.spacing === "custom") {
    return parseCustomFrequencies(settings.customFrequencies, settings.channels, settings.maxFrequency) ??
      getCenterFrequencies({ ...settings, spacing: "greenwood" });
  }
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

function makeBandPass(
  context: AudioContext,
  center: number,
  low: number,
  high: number,
  slope: number,
): BiquadFilterNode {
  const filter = context.createBiquadFilter();
  filter.type = "bandpass";
  filter.frequency.value = center;
  const bandwidth = Math.max(40, high - low);
  const slopeBoost = Math.max(0.75, Math.min(2.5, 1 + Math.abs(slope) / 12));
  filter.Q.value = Math.min(12, Math.max(2.5, (center / bandwidth) * slopeBoost));
  return filter;
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
  const customValid = settings.spacing !== "custom" || parseCustomFrequencies(
    settings.customFrequencies,
    settings.channels,
    settings.maxFrequency,
  ) !== null;

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
        const inputAnalyser = context.createAnalyser();
        const outputAnalyser = context.createAnalyser();
        inputAnalyser.fftSize = 1024;
        outputAnalyser.fftSize = 1024;
        const inputData = new Float32Array(inputAnalyser.fftSize);
        const outputData = new Float32Array(outputAnalyser.fftSize);
        const normalizer = context.createGain();
        normalizer.gain.value = 2.5;
        if (cancelled) return;
        const edges = getBandEdges(centers, 200, settings.maxFrequency);
        const sum = context.createGain();
        const channelAnalysers: AnalyserNode[] = [];
        const nodes: AudioNode[] = [source, inputAnalyser, sum, normalizer, outputAnalyser];
        bus.disconnect();
        bus.connect(source);
        source.connect(inputAnalyser);
        edges.forEach(({ center, low, high }) => {
          const bandpassFilter = makeBandPass(context, center, low, high, settings.slope);
          const rectifier = context.createWaveShaper();
          rectifier.curve = Float32Array.from({ length: 1025 }, (_, index) =>
            Math.abs((index * 2) / 1024 - 1));
          const envelope = context.createBiquadFilter();
          envelope.type = "lowpass";
          envelope.frequency.value = 180;
          envelope.Q.value = 0.707;
          const channelAnalyser = context.createAnalyser();
          channelAnalyser.fftSize = 128;
          channelAnalyser.smoothingTimeConstant = 0.3;
          const carrier = context.createOscillator();
          const modulator = context.createGain();
          modulator.gain.value = 0;

          source.connect(bandpassFilter);
          bandpassFilter.connect(rectifier);
          rectifier.connect(envelope);
          envelope.connect(modulator.gain);
          envelope.connect(channelAnalyser);
          carrier.frequency.value = center;
          carrier.type = "sine";
          carrier.connect(modulator);
          modulator.connect(sum);
          carrier.start();
          nodes.push(bandpassFilter, rectifier, envelope, carrier, modulator, channelAnalyser);
          channelAnalysers.push(channelAnalyser);
        });
        sum.gain.value = 1 / Math.sqrt(edges.length);
        sum.connect(outputAnalyser);
        sum.connect(normalizer).connect(context.destination);
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

        const normalize = () => {
          if (cancelled || audioRef.current !== graph) return;
          inputAnalyser.getFloatTimeDomainData(inputData);
          outputAnalyser.getFloatTimeDomainData(outputData);
          const inputRms = Math.sqrt(inputData.reduce((sumValue, sample) => sumValue + sample * sample, 0) / inputData.length);
          const outputRms = Math.sqrt(outputData.reduce((sumValue, sample) => sumValue + sample * sample, 0) / outputData.length);
          if (inputRms > 0.002 && outputRms > 0.0001) {
            normalizer.gain.setTargetAtTime(
              Math.min(8, Math.max(0.25, inputRms / outputRms)),
              context.currentTime,
              0.015,
            );
          }
          window.setTimeout(normalize, 100);
        };
        normalize();
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
  }, [centers, enabled, settings.maxFrequency, settings.slope]);

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
            <p className="vocoder-intro">Live eight-to-thirty-two channel speech simulation</p>
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
              <input type="range" min="8" max="32" value={settings.channels} onChange={(event) => updateSettings({ channels: Number(event.target.value) })} />
            </label>
            <label className="vocoder-field">
              <span>Maximum frequency <output>{settings.maxFrequency} Hz</output></span>
              <input type="range" min="4000" max="8000" step="500" value={settings.maxFrequency} onChange={(event) => updateSettings({ maxFrequency: Number(event.target.value) })} />
            </label>
            <label className="vocoder-field">
              <span>Attenuation slope <output>{settings.slope} dB/oct</output></span>
              <input type="range" min="-30" max="-6" step="0.1" value={settings.slope} onChange={(event) => updateSettings({ slope: Number(event.target.value) })} />
            </label>
            <label className="vocoder-field">
              <span>Frequency spacing</span>
              <select value={settings.spacing} onChange={(event) => updateSettings({ spacing: event.target.value as Spacing })}>
                <option value="greenwood">Greenwood logarithmic</option>
                <option value="linear">Linear</option>
                <option value="custom">Custom list</option>
              </select>
            </label>
            {settings.spacing === "custom" && (
              <label className="vocoder-field">
                <span>Centers, Hz</span>
                <input className={!customValid ? "has-error" : ""} value={settings.customFrequencies} onChange={(event) => updateSettings({ customFrequencies: event.target.value })} placeholder="250, 390, 560 ..." />
                <small>{customValid ? `Using ${centers.length} center frequencies` : `Enter ${settings.channels} values from 200 to ${settings.maxFrequency} Hz`}</small>
              </label>
            )}
            {error && <p className="vocoder-error">{error}</p>}
            <p className="vocoder-note">Processes audio from this app before it reaches your speakers.</p>
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