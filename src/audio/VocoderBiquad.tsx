import { useEffect, useMemo, useRef, useState } from "react";
import {
  createVocoder,
  DEFAULT_VOCODER_SETTINGS,
  getVocoderCenterFrequencies,
  type FilterSlope,
  type VocoderSettings,
} from "./vocoder-biquad";
import { createSpectralSmearing, MAX_SPECTRAL_SMEARING_BINS } from "./spectral-smearing";
import { openSpectrogramPopup } from "./SpectrogramPopup";
import { startFinalAudioRecording, type FinalAudioRecording } from "./spectrogram-recording";
import { getTimbre, preloadTimbre, setTimbre, TIMBRES, TIMBRE_LABELS, type Timbre } from "./audio";

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
  const [smearingEnabled, setSmearingEnabled] = useState(false);
  const [smearIntensity, setSmearIntensity] = useState(3);
  const [isRecording, setIsRecording] = useState(false);
  const [timbre, setSelectedTimbre] = useState<Timbre>(getTimbre);
  const [isTimbreLoading, setIsTimbreLoading] = useState(false);
  const [settings, setSettings] = useState(DEFAULT_VOCODER_SETTINGS);
  const [error, setError] = useState("");
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);
  const smearingSessionRef = useRef<ReturnType<typeof createSpectralSmearing> | null>(null);
  const recordingSessionRef = useRef<FinalAudioRecording | null>(null);

  const centers = useMemo(() => getVocoderCenterFrequencies(settings), [settings]);
  const isVocoderEnabled = forceEnabled ?? enabled;
  const isSmearingEnabled = forceEnabled === undefined && smearingEnabled;

  useEffect(() => {
    let cancelled = false;
    setIsTimbreLoading(true);
    void preloadTimbre(timbre)
      .catch((reason: unknown) => {
        if (!cancelled) {
          setError(reason instanceof Error ? reason.message : "The selected timbre could not be loaded.");
        }
      })
      .finally(() => {
        if (!cancelled) setIsTimbreLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [timbre]);

  useEffect(() => {
    if (!isVocoderEnabled) return;
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
  }, [centers, isVocoderEnabled, settings]);

  useEffect(() => {
    if (!isSmearingEnabled) return;
    let cancelled = false;
    let session: ReturnType<typeof createSpectralSmearing>;
    try {
      session = createSpectralSmearing(smearIntensity);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "The audio output could not be processed.");
      setSmearingEnabled(false);
      return;
    }
    smearingSessionRef.current = session;
    void session.ready.catch((reason: unknown) => {
      if (!cancelled) {
        setError(reason instanceof Error ? reason.message : "The audio output could not be processed.");
        setSmearingEnabled(false);
      }
    });
    return () => {
      cancelled = true;
      if (smearingSessionRef.current === session) smearingSessionRef.current = null;
      session.dispose();
    };
  }, [isSmearingEnabled]);

  useEffect(() => {
    smearingSessionRef.current?.setIntensity(smearIntensity);
  }, [smearIntensity]);

  useEffect(() => () => recordingSessionRef.current?.dispose(), []);

  function toggleRecording() {
    const activeRecording = recordingSessionRef.current;
    if (activeRecording) {
      const showSpectrogram = openSpectrogramPopup();
      recordingSessionRef.current = null;
      setIsRecording(false);
      const recording = activeRecording.stop();
      if (showSpectrogram) showSpectrogram(recording);
      else void recording.catch((reason: unknown) => {
        setError(reason instanceof Error ? reason.message : "The recording could not be opened.");
      });
      if (!showSpectrogram) setError("Allow popups to open the recorded spectrogram.");
      return;
    }

    try {
      setError("");
      recordingSessionRef.current = startFinalAudioRecording();
      setIsRecording(true);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Audio recording is not supported in this browser.");
    }
  }

  function updateSettings(patch: Partial<VocoderSettings>) {
    setSettings((current) => ({ ...current, ...patch }));
  }

  if (!showControls) return null;

  return (
    <aside className={`vocoder ${open ? "is-open" : ""}`} aria-label="Audio configuration">
      <button className="vocoder-toggle" onClick={() => setOpen((value) => !value)} aria-expanded={open}>
        <span className={`vocoder-status ${isVocoderEnabled || isSmearingEnabled ? "is-live" : ""}`} />
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
                  disabled={isTimbreLoading}
                  onChange={(event) => {
                    const selected = event.target.value as Timbre;
                    setError("");
                    setIsTimbreLoading(true);
                    void setTimbre(selected)
                      .then(() => setSelectedTimbre(selected))
                      .catch((reason: unknown) => {
                        setError(reason instanceof Error ? reason.message : "The selected timbre could not be loaded.");
                      })
                      .finally(() => setIsTimbreLoading(false));
                  }}
                >
                  {TIMBRES.map((option) => (
                    <option key={option} value={option}>{TIMBRE_LABELS[option]}</option>
                  ))}
                </select>
              </label>
              {isTimbreLoading && <p aria-live="polite">Loading {timbre} audio...</p>}
            </div>
            <div className="vocoder-controls-row">
              <div className="vocoder-controls">
                <div className="vocoder-mode-buttons">
                  {!isSmearingEnabled && (
                    <button
                      className={`vocoder-power ${isVocoderEnabled ? "is-on" : ""}`}
                      onClick={() => {
                        setError("");
                        setSmearingEnabled(false);
                        setEnabled((value) => !value);
                      }}
                    >
                      {isVocoderEnabled ? "Stop vocoder" : "Start vocoder"}
                    </button>
                  )}
                  {!isVocoderEnabled && (
                    <button
                      className={`vocoder-power ${isSmearingEnabled ? "is-on" : ""}`}
                      onClick={() => {
                        setError("");
                        setEnabled(false);
                        setSmearingEnabled((value) => !value);
                      }}
                    >
                      {isSmearingEnabled ? "Stop spectral smearing" : "Start spectral smearing"}
                    </button>
                  )}
                </div>
                {isVocoderEnabled ? (
                  <>
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
                  </>
                ) : isSmearingEnabled ? (
                  <label className="vocoder-field">
                    <span>Spectral smearing <output>{smearIntensity.toFixed(1)} bins</output></span>
                    <input
                      type="range"
                      min="0"
                      max={MAX_SPECTRAL_SMEARING_BINS}
                      step="0.1"
                      value={smearIntensity}
                      aria-label="Spectral smearing intensity in frequency bins"
                      onChange={(event) => setSmearIntensity(Number(event.target.value))}
                    />
                  </label>
                ) : null}
                {error && <p className="vocoder-error">{error}</p>}
                {isVocoderEnabled && (
                  <p className="vocoder-note">
                    100-6000 Hz Greenwood-spaced bands with {settings.envelopeCutoffHz} Hz envelopes. <a href="#vocoder_debug">Vocoder debug</a>
                  </p>
                )}
              </div>
              {isVocoderEnabled && (
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
              )}
            </div>
            <div className="vocoder-recording">
              <button
                type="button"
                className={`vocoder-power ${isRecording ? "is-on" : ""}`}
                aria-pressed={isRecording}
                onClick={toggleRecording}
              >
                {isRecording ? "Stop recording" : "Record spectrogram"}
              </button>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}