import { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";

type FrequencyScale = "linear" | "mel";
type SpectrogramPopupProps = { recording: Promise<Blob> };

const MIN_FREQUENCY = 50;
const MAX_FREQUENCY = 4000;
const FFT_SIZE = 2048;
const HOP_SIZE = 512;

const POPUP_STYLES = `
  :root { color-scheme: dark; font-family: "Avenir Next", Avenir, sans-serif; background: #11191b; color: #e8eee8; }
  * { box-sizing: border-box; }
  body { min-width: 360px; min-height: 100vh; margin: 0; background: #11191b; }
  button { font: inherit; }
  .spec-app { max-width: 1500px; margin: 0 auto; padding: 28px clamp(16px, 4vw, 52px) 36px; }
  .spec-heading { display: flex; align-items: end; justify-content: space-between; gap: 20px; padding-bottom: 20px; border-bottom: 1px solid #394649; }
  .spec-heading p { margin: 0 0 8px; color: #82b8aa; font-size: 11px; text-transform: uppercase; }
  .spec-heading h1 { margin: 0; font-size: 25px; font-weight: 500; }
  .spec-meta { color: #9eadaa; font-size: 12px; text-align: right; }
  .spec-toolbar { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 18px 0; }
  .spec-toolbar label { color: #c1cbc4; font-size: 12px; }
  .spec-segments { display: inline-flex; margin-left: 12px; border: 1px solid #526266; }
  .spec-segments button { padding: 8px 13px; border: 0; background: transparent; color: #c1cbc4; cursor: pointer; }
  .spec-segments button + button { border-left: 1px solid #526266; }
  .spec-segments button[aria-pressed="true"] { background: #82b8aa; color: #102022; }
  .spec-range { color: #9eadaa; font-size: 12px; }
  .spec-plot { display: grid; grid-template-columns: 58px minmax(0, 1fr); align-items: stretch; min-height: 320px; border: 1px solid #394649; background: #080e10; }
  .spec-frequency-axis { position: relative; border-right: 1px solid #394649; color: #a7b3ae; font-size: 10px; }
  .spec-frequency-tick { position: absolute; right: 0; width: 100%; padding-right: 7px; transform: translateY(-50%); text-align: right; }
  .spec-frequency-tick::after { position: absolute; top: 50%; right: 0; width: 4px; border-top: 1px solid #71817e; content: ""; }
  .spec-canvas-wrap { min-width: 0; height: min(64vh, 620px); min-height: 320px; }
  .spec-canvas { display: block; width: 100%; height: 100%; }
  .spec-time-axis { display: flex; justify-content: space-between; margin: 8px 0 0 58px; color: #8e9b97; font-size: 10px; }
  .spec-status { padding: 50px 0; color: #bdc9c2; text-align: center; }
  .spec-error { color: #ef9b74; }
  @media (max-width: 600px) { .spec-heading { align-items: start; flex-direction: column; } .spec-meta { text-align: left; } .spec-toolbar { align-items: start; flex-direction: column; } .spec-canvas-wrap { height: 58vh; } }
`;

function melFromFrequency(frequency: number) {
  return 2595 * Math.log10(1 + frequency / 700);
}

function frequencyFromMel(mel: number) {
  return 700 * (10 ** (mel / 2595) - 1);
}

function frequencyPosition(frequency: number, scale: FrequencyScale) {
  if (scale === "mel") {
    const minMel = melFromFrequency(MIN_FREQUENCY);
    const maxMel = melFromFrequency(MAX_FREQUENCY);
    return (melFromFrequency(frequency) - minMel) / (maxMel - minMel);
  }
  return (frequency - MIN_FREQUENCY) / (MAX_FREQUENCY - MIN_FREQUENCY);
}

function frequencyAtPosition(position: number, scale: FrequencyScale) {
  if (scale === "mel") {
    const minMel = melFromFrequency(MIN_FREQUENCY);
    const maxMel = melFromFrequency(MAX_FREQUENCY);
    return frequencyFromMel(minMel + position * (maxMel - minMel));
  }
  return MIN_FREQUENCY + position * (MAX_FREQUENCY - MIN_FREQUENCY);
}

function colorForLevel(level: number) {
  const stops = [
    [5, 11, 14],
    [19, 62, 76],
    [35, 139, 131],
    [173, 190, 112],
    [248, 207, 123],
  ];
  const scaled = Math.max(0, Math.min(0.9999, level)) * (stops.length - 1);
  const start = Math.floor(scaled);
  const amount = scaled - start;
  return stops[start].map((channel, index) => Math.round(channel + (stops[start + 1][index] - channel) * amount));
}

function renderSpectrogram(audio: AudioBuffer, canvas: HTMLCanvasElement, scale: FrequencyScale) {
  const width = Math.max(1, canvas.clientWidth);
  const height = Math.max(1, canvas.clientHeight);
  const pixelRatio = window.devicePixelRatio || 1;
  canvas.width = Math.round(width * pixelRatio);
  canvas.height = Math.round(height * pixelRatio);
  const context = canvas.getContext("2d");
  if (!context) return;

  const samples = audio.getChannelData(0);
  const frameCount = Math.max(1, Math.ceil(samples.length / HOP_SIZE));
  const real = new Float32Array(FFT_SIZE);
  const imaginary = new Float32Array(FFT_SIZE);
  const windowValues = Float32Array.from({ length: FFT_SIZE }, (_, index) =>
    0.5 - 0.5 * Math.cos((2 * Math.PI * index) / (FFT_SIZE - 1)));
  const image = context.createImageData(canvas.width, canvas.height);
  const maxBin = Math.min(FFT_SIZE / 2, Math.floor(MAX_FREQUENCY * FFT_SIZE / audio.sampleRate));
  const minBin = Math.max(1, Math.ceil(MIN_FREQUENCY * FFT_SIZE / audio.sampleRate));

  for (let column = 0; column < canvas.width; column += 1) {
    const frame = Math.min(frameCount - 1, Math.floor((column / canvas.width) * frameCount));
    const sampleOffset = frame * HOP_SIZE;
    for (let index = 0; index < FFT_SIZE; index += 1) {
      real[index] = (samples[sampleOffset + index] ?? 0) * windowValues[index];
      imaginary[index] = 0;
    }

    for (let index = 1, bitReversed = 0; index < FFT_SIZE; index += 1) {
      let bit = FFT_SIZE >> 1;
      for (; bitReversed & bit; bit >>= 1) bitReversed ^= bit;
      bitReversed ^= bit;
      if (index < bitReversed) {
        [real[index], real[bitReversed]] = [real[bitReversed], real[index]];
        [imaginary[index], imaginary[bitReversed]] = [imaginary[bitReversed], imaginary[index]];
      }
    }
    for (let length = 2; length <= FFT_SIZE; length <<= 1) {
      const angle = (-2 * Math.PI) / length;
      const stepReal = Math.cos(angle);
      const stepImaginary = Math.sin(angle);
      for (let start = 0; start < FFT_SIZE; start += length) {
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

    for (let row = 0; row < canvas.height; row += 1) {
      const frequency = frequencyAtPosition(1 - row / Math.max(1, canvas.height - 1), scale);
      const bin = Math.max(minBin, Math.min(maxBin, Math.round(frequency * FFT_SIZE / audio.sampleRate)));
      const magnitude = Math.hypot(real[bin], imaginary[bin]) * 2 / FFT_SIZE;
      const decibels = 20 * Math.log10(Math.max(magnitude, 1e-6));
      const [red, green, blue] = colorForLevel((decibels + 90) / 65);
      const pixel = (row * canvas.width + column) * 4;
      image.data[pixel] = red;
      image.data[pixel + 1] = green;
      image.data[pixel + 2] = blue;
      image.data[pixel + 3] = 255;
    }
  }
  context.putImageData(image, 0, 0);
}

function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainder = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${remainder}`;
}

function SpectrogramPopup({ recording }: SpectrogramPopupProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [scale, setScale] = useState<FrequencyScale>("mel");
  const [audio, setAudio] = useState<AudioBuffer | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    let audioContext: AudioContext | null = null;
    void recording.then(async (blob) => {
      audioContext = new AudioContext();
      const decoded = await audioContext.decodeAudioData(await blob.arrayBuffer());
      if (!cancelled) setAudio(decoded);
      await audioContext.close();
      audioContext = null;
      if (!cancelled) setLoading(false);
    }).catch((reason: unknown) => {
      audioContext?.close();
      if (!cancelled) {
        setError(reason instanceof Error ? reason.message : "Unable to decode the recording.");
        setLoading(false);
      }
    });
    return () => {
      cancelled = true;
      if (audioContext?.state !== "closed") void audioContext?.close();
    };
  }, [recording]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !audio) return;
    const draw = () => renderSpectrogram(audio, canvas, scale);
    const observer = new ResizeObserver(draw);
    observer.observe(canvas);
    draw();
    return () => observer.disconnect();
  }, [audio, scale]);

  const ticks = [50, 100, 200, 500, 1000, 2000, 4000];
  return (
    <main className="spec-app">
      <header className="spec-heading">
        <div>
          <p>Audio analysis / channel 1</p>
          <h1>Recorded spectrogram</h1>
        </div>
        <div className="spec-meta">
          {audio ? `${audio.numberOfChannels} channels · ${audio.sampleRate.toLocaleString()} Hz · ${formatTime(audio.duration)}` : ""}
        </div>
      </header>
      <div className="spec-toolbar">
        <label>
          Frequency scale
          <span className="spec-segments" role="group" aria-label="Frequency scale">
            <button type="button" aria-pressed={scale === "linear"} onClick={() => setScale("linear")}>Linear</button>
            <button type="button" aria-pressed={scale === "mel"} onClick={() => setScale("mel")}>Mel</button>
          </span>
        </label>
        <span className="spec-range">50 Hz – 4 kHz</span>
      </div>
      {loading && <p className="spec-status" role="status">Preparing spectrogram…</p>}
      {error && <p className="spec-status spec-error" role="alert">{error}</p>}
      {audio && (
        <>
          <div className="spec-plot">
            <div className="spec-frequency-axis" aria-hidden="true">
              {ticks.map((frequency) => (
                <span
                  className="spec-frequency-tick"
                  key={frequency}
                  style={{ top: `${(1 - frequencyPosition(frequency, scale)) * 100}%` }}
                >
                  {frequency >= 1000 ? `${frequency / 1000}k` : frequency}
                </span>
              ))}
            </div>
            <div className="spec-canvas-wrap">
              <canvas ref={canvasRef} className="spec-canvas" aria-label="Spectrogram of the left audio channel from 50 hertz to 4 kilohertz" />
            </div>
          </div>
          <div className="spec-time-axis"><span>0:00</span><span>{formatTime(audio.duration)}</span></div>
        </>
      )}
    </main>
  );
}

export function openSpectrogramPopup() {
  const popup = window.open("", "spectrogram-recording", "popup,width=1120,height=780,resizable=yes,scrollbars=yes");
  if (!popup) return null;

  popup.document.title = "Recorded spectrogram";
  const style = popup.document.createElement("style");
  style.textContent = POPUP_STYLES;
  popup.document.head.append(style);
  const mount = popup.document.createElement("div");
  popup.document.body.replaceChildren(mount);
  const root = createRoot(mount);
  popup.addEventListener("beforeunload", () => root.unmount(), { once: true });

  return (recording: Promise<Blob>) => {
    if (!popup.closed) root.render(<SpectrogramPopup recording={recording} />);
  };
}