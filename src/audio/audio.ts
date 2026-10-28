import { NOTE_NAMES } from "./music";

export const TIMBRES = ["sine", "triangle", "piano", "marimba"] as const;
export type Timbre = (typeof TIMBRES)[number];

let sharedContext: AudioContext | null = null;
let sharedBus: GainNode | null = null;
const periodicWaves = new WeakMap<AudioContext, Partial<Record<Timbre, PeriodicWave>>>();

export function getTimbre(): Timbre {
  const search = new URLSearchParams(window.location.search);
  const hashQuery = window.location.hash.split("?")[1];
  const value = search.get("timbre") ?? (hashQuery ? new URLSearchParams(hashQuery).get("timbre") : null);
  return TIMBRES.find((timbre) => timbre === value) ?? "triangle";
}

export function setTimbre(timbre: Timbre) {
  const url = new URL(window.location.href);
  url.searchParams.set("timbre", timbre);
  window.history.replaceState(null, "", url);
}

export function configureOscillatorTimbre(
  context: AudioContext,
  oscillator: OscillatorNode,
  timbre = getTimbre(),
) {
  if (timbre === "sine" || timbre === "triangle") {
    oscillator.type = timbre;
    return;
  }

  let waves = periodicWaves.get(context);
  if (!waves) {
    waves = {};
    periodicWaves.set(context, waves);
  }
  let wave = waves[timbre];
  if (!wave) {
    const harmonics = timbre === "piano"
      ? [1, 0.62, 0.38, 0.25, 0.17, 0.11, 0.07, 0.045]
      : [1, 0.84, 0.48, 0.2, 0.08, 0.035];
    const real = new Float32Array(harmonics.length + 1);
    const imaginary = new Float32Array(harmonics.length + 1);
    harmonics.forEach((amplitude, index) => {
      imaginary[index + 1] = amplitude;
    });
    wave = context.createPeriodicWave(real, imaginary);
    waves[timbre] = wave;
  }
  oscillator.setPeriodicWave(wave);
}

export function getAudioContext() {
  if (!sharedContext) sharedContext = new AudioContext();
  return sharedContext;
}

export function getAudioBus() {
  const context = getAudioContext();
  if (!sharedBus) {
    sharedBus = context.createGain();
    sharedBus.connect(context.destination);
  }
  return sharedBus;
}


export function playTone(note: number, start: number, duration: number): OscillatorNode {
  const context = getAudioContext();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  const timbre = getTimbre();
  configureOscillatorTimbre(context, oscillator, timbre);
  oscillator.frequency.value = 440 * Math.pow(2, (note + 21 - 69) / 12);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(0.3, start + 0.02);
  if (timbre === "piano" || timbre === "marimba") {
    const decaySeconds = timbre === "piano" ? 1.8 : 0.65;
    const decayEnd = Math.min(start + decaySeconds, start + Math.max(duration - 0.02, 0.04));
    gain.gain.exponentialRampToValueAtTime(timbre === "piano" ? 0.04 : 0.015, decayEnd);
  }
  gain.gain.exponentialRampToValueAtTime(0.0001, start + Math.max(duration - 0.02, 0.04));
  oscillator.connect(gain).connect(getAudioBus());
  oscillator.start(start);
  oscillator.stop(start + duration);
  return oscillator;
}
export function noteLabel(noteIndex: number) {
  const pitchClass = (((noteIndex + 21) % 12) + 12) % 12;
  const octave = Math.floor((noteIndex + 21) / 12) - 1;
  return `${NOTE_NAMES[pitchClass]}${octave}`;
}
