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