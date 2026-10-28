import { useEffect, useMemo, useRef, useState } from "react";
import {
  createVocoder,
  DEFAULT_VOCODER_SETTINGS,
  getVocoderCenterFrequencies,
  type FilterSlope,
  type VocoderSettings,
} from "./vocoder-biquad";
import { getTimbre, setTimbre, TIMBRES, type Timbre } from "./audio";

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

type VocoderProps = {
  forceEnabled?: boolean;
  showControls?: boolean;
};

export function Vocoder({ forceEnabled, showControls = true }: VocoderProps = {}) {
  const [open, setOpen] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [timbre, setSelectedTimbre] = useState<Timbre>(getTimbre);
  const [settings, setSettings] = useState(DEFAULT_VOCODER_SETTINGS);
  const [error, setError] = useState("");
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);

  const centers = useMemo(() => getVocoderCenterFrequencies(settings), [settings]);
  const isEnabled = forceEnabled ?? enabled;

  useEffect(() => {
    if (!isEnabled) return;
    let cancelled = false;
    let animationFrameId: number | null = null;
    let session: ReturnType<typeof createVocoder>;
    try {
      session = createVocoder(settings);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "The audio output could not be processed.");
      setEnabled(false);
      return;
    }

    void session.ready.catch((reason: unknown) => {
      if (!cancelled) {
        setError(reason instanceof Error ? reason.message : "The audio output could not be processed.");
        setEnabled(false);
      }
    });

    const channelSampleData = new Float32Array(128);
    const levels = new Float32Array(session.channels.length);
    const updateMeter = () => {
      if (cancelled) return;
      for (let index = 0; index < session.channels.length; index += 1) {
        session.channels[index].getFloatTimeDomainData(channelSampleData);
        let sumSquares = 0;
        for (let sampleIndex = 0; sampleIndex < channelSampleData.length; sampleIndex += 1) {
          const sample = channelSampleData[sampleIndex];
          sumSquares += sample * sample;
        }
        const rms = Math.sqrt(sumSquares / channelSampleData.length);
        const instantIntensity = Math.min(1, rms * 5.5);
        levels[index] = instantIntensity > levels[index]
          ? instantIntensity
          : Math.max(0, levels[index] * 0.84 - 0.004);
        const box = boxRefs.current[index];
        if (box) {
          const { background, shadow } = getIntensityColor(levels[index]);
          box.style.backgroundColor = background;
          box.style.boxShadow = shadow;
          box.textContent = `${Math.floor(rms * 10000) / 10000}`;
        }
      }
      animationFrameId = window.requestAnimationFrame(updateMeter);
    };
    animationFrameId = window.requestAnimationFrame(updateMeter);

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
      session.dispose();
    };
  }, [centers, isEnabled, settings]);

  function updateSettings(patch: Partial<VocoderSettings>) {
    setSettings((current) => ({ ...current, ...patch }));
  }

  if (!showControls) return null;

  return (
    <aside className={`vocoder ${open ? "is-open" : ""}`} aria-label="Audio configuration">
      <button className="vocoder-toggle" onClick={() => setOpen((value) => !value)} aria-expanded={open}>
        <span className={`vocoder-status ${isEnabled ? "is-live" : ""}`} />
        <span className="vocoder-toggle-label">Config</span>
        <b>{open ? "-" : "+"}</b>
      </button>
      {open && (
        <div className="vocoder-panel">
          <div className="vocoder-panel-body">
            <div className="vocoder-timbre">
              <label className="vocoder-field">
                <span>Playback timbre</span>
                <select
                  value={timbre}
                  onChange={(event) => {
                    const selected = event.target.value as Timbre;
                    setTimbre(selected);
                    setSelectedTimbre(selected);
                  }}
                >
                  {TIMBRES.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </label>
            </div>
            <div className="vocoder-controls-row">
              <div className="vocoder-controls">
                <button
                  className={`vocoder-power ${isEnabled ? "is-on" : ""}`}
                  onClick={() => {
                    setError("");
                    setEnabled((value) => !value);
                  }}
                >
                  {isEnabled ? "Stop vocoder" : "Start vocoder"}
                </button>
                <label className="vocoder-field">
                  <span>Channels <output>{settings.channels}</output></span>
                  <input type="range" min="4" max="8" step="4" value={settings.channels} onChange={(event) => updateSettings({ channels: Number(event.target.value) })} />
                </label>
                <label className="vocoder-field">
                  <span>Filter slope <output>{settings.slope} dB/oct</output></span>
                  <input type="range" min="-24" max="-12" step="12" value={settings.slope} onChange={(event) => updateSettings({ slope: Number(event.target.value) as FilterSlope })} />
                </label>
                <label className="vocoder-field">
                  <span>Envelope low-pass <output>{settings.envelopeCutoffHz} Hz</output></span>
                  <input type="range" min="100" max="2000" step="50" value={settings.envelopeCutoffHz} onChange={(event) => updateSettings({ envelopeCutoffHz: Number(event.target.value) })} />
                </label>
                {error && <p className="vocoder-error">{error}</p>}
                <p className="vocoder-note">
                  100-6000 Hz Greenwood-spaced bands with {settings.envelopeCutoffHz} Hz envelopes. <a href="#vocoder_debug">Vocoder debug</a>
                </p>
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
          </div>
        </div>
      )}
    </aside>
  );
}