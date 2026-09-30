import { NOTE_NAMES } from "./music";

let sharedContext: AudioContext | null = null;
let sharedBus: GainNode | null = null;

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


export function playTone(note: number, start: number, duration: number, oscillators: OscillatorNode[]): OscillatorNode {
  const context = getAudioContext();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = "triangle";
  oscillator.frequency.value = 440 * Math.pow(2, (note + 21 - 69) / 12);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(0.3, start + 0.02);
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
