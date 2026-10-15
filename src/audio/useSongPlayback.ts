import { useEffect, useRef, useState } from "react";
import { getAudioBus, getAudioContext, playTone } from "./audio";
import { getNoteOnset, getSongDuration, getSongNotes, type Song, type SongNote } from "./music";

const EMPTY_NOTES: SongNote[] = [];

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
  const [decoded, setDecoded] = useState<{ song: Song; notes: SongNote[] } | null>(null);
  const notes = song.notes ?? (decoded?.song === song ? decoded.notes : EMPTY_NOTES);
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
    if (song.notes || !song.compressedNotes) return;
    let cancelled = false;
    void getSongNotes(song)
      .then((resolvedNotes) => {
        if (!cancelled) setDecoded({ song, notes: resolvedNotes });
      })
      .catch((error: unknown) => {
        if (!cancelled) console.error(`Unable to decode notes for ${song.title}`, error);
      });
    return () => {
      cancelled = true;
    };
  }, [song]);

  useEffect(() => {
    if (!enabled) {
      stop();
      setActiveNotes([]);
      if (!loop) setPosition(0);
      return;
    }
    const currentNote = notes[position];
    if (!currentNote) {
      return;
    }
    const playableSong: Song = { ...song, notes };
    const beatDuration = 60000 / tempo;
    const context = audioContext.current ?? getAudioContext();
    audioContext.current = context;
    void context.resume();
    const duration = (currentNote.duration * beatDuration) / 1000;
    const currentOscillators = currentNote.noteIndices.map((noteIndex) => {
      return playTone(noteIndex, context.currentTime, duration);
    });
    oscillators.current.push(...currentOscillators);
    const currentOnset = getNoteOnset(playableSong, position);
    setActiveNotes(
      notes.filter((note, notePosition) => {
        const onset = getNoteOnset(playableSong, notePosition);
        return onset <= currentOnset && onset + note.duration > currentOnset;
      }),
    );
    const isLastNote = position === notes.length - 1;
    const nextPosition = isLastNote ? 0 : position + 1;
    const nextOnset = getNoteOnset(playableSong, nextPosition);
    const onsetDelta = isLastNote && loop
      ? getSongDuration(playableSong) - currentOnset
      : isLastNote
        ? getSongDuration(playableSong) - currentOnset
        : nextOnset - currentOnset;
    const timer = window.setTimeout(() => {
      if (isLastNote && !loop) {
        setPosition(notes.length);
        setActiveNotes([]);
        onCompleteRef.current?.();
      } else {
        setPosition(nextPosition);
      }
    }, onsetDelta * beatDuration);
    return () => window.clearTimeout(timer);
  }, [enabled, loop, notes, playbackRun, position, song, tempo]);

  const restart = () => {
    setPosition(0);
    setPlaybackRun((run) => run + 1);
  };

  return { position, activeNotes, notes, stop, restart };
}
