import { useEffect, useRef, useState } from "react";
import {
  getKeyPitchClasses,
  getNoteOnset,
  getSongDuration,
  type Song,
  type SongNote,
  NOTE_NAMES,
  RAINBOW_COLORS,
} from "./music";

type ChromatoneProps = {
  song: Song;
  activeNotes?: SongNote[];
  showKey?: boolean;
  showNotes?: boolean;
};

export function Chromatone({
  song,
  activeNotes = [],
  showKey = true,
  showNotes = true,
}: ChromatoneProps) {
  const inKey = getKeyPitchClasses(song);
  const active = new Set(
    activeNotes.flatMap((note) =>
      note.noteIndices.map((noteIndex) => (noteIndex + 21) % 12),
    ),
  );
  return (
    <div className="chromatone" aria-label={`${song.key} chromatic key map`}>
      {NOTE_NAMES.map((noteName, index) => {
        const isFocus = showNotes && active.has(index);
        const isInKey = showKey && inKey.has(index);
        return (
          <div
            className={`chromatone-note ${(song.tonic == index && showKey) ? "is-focus" : ""} ${isInKey ? "in-key" : "out-of-key"}`}
            key={noteName}
          >
            <div
              className="note-light"
              style={{
                backgroundColor: RAINBOW_COLORS[index],
                opacity: isFocus ? 1 : 0.2,
              }}
            />
            <span className="note-letter">{noteName}</span>
          </div>
        );
      })}
    </div>
  );
}

function useSongPlayback(song: Song, tempo: number, enabled = false) {
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
    const beatDuration = 60000 / tempo;
    const context = audioContext.current ?? new AudioContext();
    audioContext.current = context;
    void context.resume();
    const currentOscillators = currentNote.noteIndices.map((noteIndex) => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = "triangle";
      oscillator.frequency.value =
        440 * Math.pow(2, (noteIndex + 21 - 69) / 12);
      const duration = (currentNote.duration * beatDuration) / 1000;
      gain.gain.setValueAtTime(0.0001, context.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.12, context.currentTime + 0.025);
      gain.gain.exponentialRampToValueAtTime(
        0.0001,
        context.currentTime + Math.max(duration - 0.03, 0.04),
      );
      oscillator.connect(gain).connect(context.destination);
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

export function Player({
  song,
  tempo = 84,
  className = "",
  showKey = true,
  showNotes = true,
}: {
  song: Song;
  tempo?: number;
  className?: string;
  showKey?: boolean;
  showNotes?: boolean;
}) {
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(tempo);
  const playback = useSongPlayback(song, speed, playing);
  return (
    <div className={`song-player ${className}`}>
      {showNotes && (
        <Chromatone
          song={song}
          activeNotes={playback.activeNotes}
          showKey={showKey}
          showNotes={showNotes}
        />
      )}
      <div className="player-controls">
        <button
          className="play-button"
          onClick={() => setPlaying((value) => !value)}
        >
          {playing ? "Ⅱ Pause" : "▶ Play"}
        </button>
        <div className="tempo-control">
          <label htmlFor={`tempo-${song.title}`}>Tempo</label>
          <input
            id={`tempo-${song.title}`}
            type="range"
            min="48"
            max="144"
            value={speed}
            onChange={(event) => setSpeed(Number(event.target.value))}
          />
          <output>
            {speed} <small>BPM</small>
          </output>
        </div>
        <div className="progress-text">
          <span>{playing ? "Playing" : "Ready"}</span>
          <b>
            {String(playback.position + 1).padStart(2, "0")} /{" "}
            {String(song.notes.length).padStart(2, "0")}
          </b>
        </div>
      </div>
    </div>
  );
}
