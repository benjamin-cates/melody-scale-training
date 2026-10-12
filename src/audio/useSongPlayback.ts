import { useEffect, useRef, useState } from "react";
import { getAudioBus, getAudioContext, playTone } from "./audio";
import { getNoteOnset, getSongDuration, type Song, type SongNote } from "./music";

export function useSongPlayback(
  song: Song,
  tempo: number,
  enabled = false,
  options: { loop?: boolean; onComplete?: () => void } = {},
) {
  const { loop = true, onComplete } = options;
  const [position, setPosition] = useState(0);
  const [playbackRun, setPlaybackRun] = useState(0);
  const [activeNotes, setActiveNotes] = useState<SongNote[]>([]);
  const audioContext = useRef<AudioContext | null>(null);
  const oscillators = useRef<OscillatorNode[]>([]);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

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
      if (!loop) setPosition(0);
      return;
    }
    const currentNote = song.notes[position];
    if (!currentNote) {
      return;
    }
    const beatDuration = 60000 / tempo;
    const context = audioContext.current ?? getAudioContext();
    audioContext.current = context;
    void context.resume();
    const duration = (currentNote.duration * beatDuration) / 1000;
    const currentOscillators = currentNote.noteIndices.map((noteIndex) => {
      return playTone(noteIndex, context.currentTime, duration);
    });
    oscillators.current.push(...currentOscillators);
    const currentOnset = getNoteOnset(song, position);
    setActiveNotes(
      song.notes.filter((note, notePosition) => {
        const onset = getNoteOnset(song, notePosition);
        return onset <= currentOnset && onset + note.duration > currentOnset;
      }),
    );
    const isLastNote = position === song.notes.length - 1;
    const nextPosition = isLastNote ? 0 : position + 1;
    const nextOnset = getNoteOnset(song, nextPosition);
    const onsetDelta = isLastNote && loop
      ? getSongDuration(song) - currentOnset
      : isLastNote
        ? song.notes[position].duration
        : nextOnset - currentOnset;
    const timer = window.setTimeout(() => {
      if (isLastNote && !loop) {
        setPosition(song.notes.length);
        setActiveNotes([]);
        onCompleteRef.current?.();
      } else {
        setPosition(nextPosition);
      }
    }, onsetDelta * beatDuration);
    return () => window.clearTimeout(timer);
  }, [enabled, loop, playbackRun, position, song, tempo]);

  const restart = () => {
    setPosition(0);
    setPlaybackRun((run) => run + 1);
  };

  return { position, activeNotes, stop, restart };
}
