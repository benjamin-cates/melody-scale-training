import { NOTE_NAMES } from "./music";
import type { WorkletSynthesizer } from "spessasynth_lib";

export const TIMBRES = [
  "sine",
  "triangle",
  "piano",
  "marimba",
  "piano-synthetic",
  "marimba-synthetic",
] as const;
export type Timbre = (typeof TIMBRES)[number];
export const TIMBRE_LABELS: Record<Timbre, string> = {
  sine: "sine",
  triangle: "triangle",
  piano: "piano",
  marimba: "marimba",
  "piano-synthetic": "piano (synthetic)",
  "marimba-synthetic": "marimba (synthetic)",
};
type SoundFontTimbre = Extract<Timbre, "piano" | "marimba">;
const PIANO_DEFAULT_VELOCITY = 100;
const PIANO_SYNTHETIC_DEFAULT_VELOCITY = 120;

export type AudioVoice = {
  stop(): void;
  disconnect(): void;
};

let sharedContext: AudioContext | null = null;
let sharedBus: GainNode | null = null;
const periodicWaves = new WeakMap<AudioContext, Partial<Record<Timbre, PeriodicWave>>>();
let synthesizerPromise: Promise<WorkletSynthesizer> | null = null;
const soundFontPromises = new Map<SoundFontTimbre, Promise<WorkletSynthesizer>>();

const soundFontSettings: Record<
  SoundFontTimbre,
  { url: string; program: number; channel: number; noteOffDelay: number }
> = {
  piano: { url: "/soundfonts/grand-piano-mono-simple.sf2pack", program: 0, channel: 0, noteOffDelay: 0 },
  marimba: { url: "/soundfonts/marimba.sf3", program: 12, channel: 1, noteOffDelay: 0.15 },
};

export function getTimbre(): Timbre {
  const search = new URLSearchParams(window.location.search);
  const hashQuery = window.location.hash.split("?")[1];
  const value = search.get("timbre") ?? (hashQuery ? new URLSearchParams(hashQuery).get("timbre") : null);
  return TIMBRES.find((timbre) => timbre === value) ?? "triangle";
}

export async function setTimbre(timbre: Timbre) {
  if (isSoundFontTimbre(timbre)) await loadSoundFont(timbre);
  const url = new URL(window.location.href);
  url.searchParams.set("timbre", timbre);
  window.history.replaceState(null, "", url);
}

export async function preloadTimbre(timbre: Timbre) {
  if (isSoundFontTimbre(timbre)) await loadSoundFont(timbre);
}

function isSoundFontTimbre(timbre: Timbre): timbre is SoundFontTimbre {
  return timbre === "piano" || timbre === "marimba";
}

async function getSoundFontSynthesizer() {
  if (!synthesizerPromise) {
    const context = getAudioContext();
    const pending = (async () => {
      await context.audioWorklet.addModule("/spessasynth_processor.min.js");
      const { WorkletSynthesizer } = await import("spessasynth_lib");
      const synthesizer = new WorkletSynthesizer(context);
      const compressor = context.createDynamicsCompressor();
      compressor.threshold.value = -6;
      compressor.knee.value = 3;
      compressor.ratio.value = 12;
      compressor.attack.value = 0.003;
      compressor.release.value = 0.12;
      synthesizer.connect(compressor);
      compressor.connect(getAudioBus());
      await synthesizer.isReady;
      return synthesizer;
    })();
    synthesizerPromise = pending;
    void pending.catch(() => {
      if (synthesizerPromise === pending) synthesizerPromise = null;
    });
  }
  if (!synthesizerPromise) throw new Error("The SoundFont synthesizer could not be initialized.");
  return synthesizerPromise;
}

function loadSoundFont(timbre: SoundFontTimbre): Promise<WorkletSynthesizer> {
  const cached = soundFontPromises.get(timbre);
  if (cached) return cached;

  const pending = (async () => {
    const synthesizer = await getSoundFontSynthesizer();
    const settings = soundFontSettings[timbre];
    const response = await fetch(settings.url);
    if (!response.ok) {
      throw new Error(`Unable to load ${timbre} SoundFont (${response.status} ${response.statusText})`);
    }
    await synthesizer.soundBankManager.addSoundBank(await response.arrayBuffer(), `timbre-${timbre}`);
    synthesizer.programChange(settings.channel, settings.program);
    synthesizer.controllerChange(settings.channel, 10, 64);
    return synthesizer;
  })();
  soundFontPromises.set(timbre, pending);
  void pending.catch(() => {
    if (soundFontPromises.get(timbre) === pending) soundFontPromises.delete(timbre);
  });
  return pending;
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
  const syntheticTimbre = timbre === "piano" || timbre === "piano-synthetic"
    ? "piano-synthetic"
    : "marimba-synthetic";
  let wave = waves[syntheticTimbre];
  if (!wave) {
    const harmonics = syntheticTimbre === "piano-synthetic"
      ? [1, 0.62, 0.38, 0.25, 0.17, 0.11, 0.07, 0.045]
      : [1, 0.84, 0.48, 0.2, 0.08, 0.035];
    const real = new Float32Array(harmonics.length + 1);
    const imaginary = new Float32Array(harmonics.length + 1);
    harmonics.forEach((amplitude, index) => {
      imaginary[index + 1] = amplitude;
    });
    wave = context.createPeriodicWave(real, imaginary);
    waves[syntheticTimbre] = wave;
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


function createOscillatorVoice(
  note: number,
  start: number,
  peakGain: number,
  duration: number | undefined,
  timbre: Timbre,
): AudioVoice {
  const context = getAudioContext();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  configureOscillatorTimbre(context, oscillator, timbre);
  oscillator.frequency.value = 440 * Math.pow(2, (note + 21 - 69) / 12);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(peakGain, start + 0.02);
  if (duration !== undefined) {
    gain.gain.exponentialRampToValueAtTime(0.0001, start + Math.max(duration - 0.02, 0.04));
  }
  oscillator.connect(gain).connect(getAudioBus());
  oscillator.start(start);
  if (duration !== undefined) oscillator.stop(start + duration);
  oscillator.onended = () => {
    oscillator.disconnect();
    gain.disconnect();
  };
  let stopped = false;
  return {
    stop() {
      if (stopped) return;
      stopped = true;
      const now = context.currentTime;
      gain.gain.cancelScheduledValues(now);
      gain.gain.setValueAtTime(Math.max(gain.gain.value, 0.0001), now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);
      try {
        oscillator.stop(now + 0.06);
      } catch {
        // The oscillator may already have stopped.
      }
    },
    disconnect() {
      oscillator.disconnect();
      gain.disconnect();
    },
  };
}

function createSoundFontVoice(
  note: number,
  start: number,
  duration: number | undefined,
  velocity: number,
  timbre: SoundFontTimbre,
): AudioVoice {
  const settings = soundFontSettings[timbre];
  const midiNote = Math.max(0, Math.min(127, note + 21));
  let synthesizer: WorkletSynthesizer | null = null;
  let noteStart = 0;
  let stopped = false;
  let noteOnScheduled = false;

  void loadSoundFont(timbre)
    .then((loadedSynthesizer) => {
      if (stopped) return;
      synthesizer = loadedSynthesizer;
      noteStart = Math.max(start, synthesizer.currentTime + 0.005);
      synthesizer.noteOn(settings.channel, midiNote, velocity, { time: noteStart });
      noteOnScheduled = true;
      if (duration !== undefined) {
        synthesizer.noteOff(settings.channel, midiNote, {
          time: noteStart + duration + settings.noteOffDelay,
        });
      }
    })
    .catch((error: unknown) => {
      console.error(`Unable to play ${timbre} SoundFont note`, error);
    });

  const stop = () => {
    if (stopped) return;
    stopped = true;
    if (synthesizer && noteOnScheduled) {
      synthesizer.noteOff(settings.channel, midiNote, {
        time: Math.max(synthesizer.currentTime, noteStart) + settings.noteOffDelay,
      });
    }
  };

  return { stop, disconnect: stop };
}

export function startTone(note: number, start = getAudioContext().currentTime, velocity?: number): AudioVoice {
  const timbre = getTimbre();
  const noteVelocity = velocity ?? (
    timbre === "piano"
      ? PIANO_DEFAULT_VELOCITY
      : timbre === "piano-synthetic"
        ? PIANO_SYNTHETIC_DEFAULT_VELOCITY
        : 100
  );
  if (isSoundFontTimbre(timbre)) return createSoundFontVoice(note, start, undefined, noteVelocity, timbre);
  return createOscillatorVoice(note, start, 0.5 * (noteVelocity / 127), undefined, timbre);
}

export function playTone(note: number, start: number, duration: number): AudioVoice {
  const timbre = getTimbre();
  if (isSoundFontTimbre(timbre)) {
    return createSoundFontVoice(
      note,
      start,
      duration,
      timbre === "piano" ? PIANO_DEFAULT_VELOCITY : 100,
      timbre,
    );
  }
  return createOscillatorVoice(note, start, 0.3, duration, timbre);
}
export function noteLabel(noteIndex: number) {
  const pitchClass = (((noteIndex + 21) % 12) + 12) % 12;
  const octave = Math.floor((noteIndex + 21) / 12) - 1;
  return `${NOTE_NAMES[pitchClass]}${octave}`;
}
