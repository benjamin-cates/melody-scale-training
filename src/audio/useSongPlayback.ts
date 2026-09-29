import { useEffect, useRef, useState } from "react";
import { getAudioBus, getAudioContext } from "./audio";
import { getNoteOnset, getSongDuration, type Song, type SongNote } from "./music";

export function useSongPlayback(song: Song, tempo: number, enabled = false) {
  const [position, setPosition] = useState(0);
  const [activeNotes, setActiveNotes] = useState<SongNote[]>([]);
  const audioContext = useRef<AudioContext | null>(null);
  const oscillators = useRef<OscillatorNode[]>([]);

  const stop = () => {
    oscillators.current.forEach((oscillator) => {
      try {
        oscillator.stop();
      } catch {
        /* already stopped */
      }
      oscillator.disconnect();
    });
    oscillators.current = [];
  };

  useEffect(() => {
    stop();
    setPosition(0);
    setActiveNotes([]);
  }, [song]);

  useEffect(() => {
    if (!enabled) {
      stop();
      setActiveNotes([]);
      return;
    }
    const currentNote = song.notes[position];
    if (!currentNote) {
      return;
    }
    const beatDuration = 60000 / tempo;
    const context = audioContext.current ?? getAudioContext();
    audioContext.current = context;
    const bus = getAudioBus();
    void context.resume();
    const currentOscillators = currentNote.noteIndices.map((noteIndex) => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = "triangle";
      oscillator.frequency.value = 440 * Math.pow(2, (noteIndex + 21 - 69) / 12);
      const duration = (currentNote.duration * beatDuration) / 1000;
      gain.gain.setValueAtTime(0.0001, context.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.3, context.currentTime + 0.025);
      gain.gain.exponentialRampToValueAtTime(
        0.3,
        context.currentTime + Math.max(duration - 0.03, 0.04) - 0.025,
      );
      gain.gain.exponentialRampToValueAtTime(
        0.0001,
        context.currentTime + Math.max(duration - 0.03, 0.04),
      );
      oscillator.connect(gain).connect(bus);
      oscillator.start();
      oscillator.stop(context.currentTime + duration);
      return oscillator;
    });
    oscillators.current.push(...currentOscillators);
    const currentOnset = getNoteOnset(song, position);
    setActiveNotes(
      song.notes.filter((note, notePosition) => {
        const onset = getNoteOnset(song, notePosition);
        return onset <= currentOnset && onset + note.duration > currentOnset;
      }),
    );
    const nextPosition = (position + 1) % song.notes.length;
    const nextOnset = getNoteOnset(song, nextPosition);
    const onsetDelta = nextPosition === 0
      ? getSongDuration(song) - currentOnset
      : nextOnset - currentOnset;
    const timer = window.setTimeout(
      () => setPosition(nextPosition),
      onsetDelta * beatDuration,
    );
    return () => window.clearTimeout(timer);
  }, [enabled, position, song, tempo]);

  return { position, activeNotes, stop };
}
