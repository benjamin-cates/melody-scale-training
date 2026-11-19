import { useEffect, useMemo, useState } from "react";
import { Chromatone } from "./Chromatone";
import { MelodyAnalyzer } from "./MelodyAnalyzer";
import { useSongPlayback } from "./useSongPlayback";
import {
  convertSongModeNotes,
  getSongNotes,
  type Scale,
  type Song,
} from "./music";
import { useSongClassification } from "./useSongClassification";

export function Player({
  song,
  tempo = 84,
  className = "",
  showKey = true,
  showNotes = true,
  analyzerEnabled = false,
  onToggleAnalyzer,
  onModificationChange,
  onKeyChange,
}: {
  song: Song;
  tempo?: number;
  className?: string;
  showKey?: boolean;
  showNotes?: boolean;
  analyzerEnabled?: boolean;
  onToggleAnalyzer?: () => void;
  onModificationChange?: (song: Song, description: string) => void;
  onKeyChange?: (song: Song, label: string) => void;
}) {
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(tempo);
  const [pitchPreference, setPitchPreference] = useState({ song, semitones: 0 });
  const pitchShift = pitchPreference.song === song ? pitchPreference.semitones : 0;
  const [modePreference, setModePreference] = useState({ song, flipped: false });
  const modeFlipped = modePreference.song === song && modePreference.flipped;
  const keyState = useSongClassification(song);
  const sourceClassification = keyState.status === "ready" ? keyState.classification : null;
  const activeClassification: { tonic: number; scale: Scale } | null = sourceClassification
    ? {
      tonic: (sourceClassification.tonic + pitchShift + 12) % 12,
      scale: modeFlipped
        ? sourceClassification.scale === "major" ? "minor" : "major"
        : sourceClassification.scale,
    }
    : null;
  const activeScale = activeClassification?.scale;
  const transformedSong = useMemo<Song>(() => {
    if (pitchShift === 0 && !modeFlipped) return song;
    return {
      ...song,
      tonic: undefined,
      scale: undefined,
      notes: undefined,
      loadNotes: async () => {
        const sourceNotes = await getSongNotes(song);
        const modeNotes = sourceClassification && activeScale !== sourceClassification.scale
          ? convertSongModeNotes(
            sourceNotes,
            sourceClassification.tonic,
            sourceClassification.scale,
          )
          : sourceNotes;
        return modeNotes.map((note) => ({
          ...note,
          noteIndices: note.noteIndices.map((noteIndex) => noteIndex + pitchShift),
        }));
      },
    };
  }, [song, sourceClassification, activeScale, pitchShift, modeFlipped]);
  const transformedKeyState = useSongClassification(transformedSong);
  const playback = useSongPlayback(transformedSong, speed, playing);
  const modeButtonLabel = activeClassification
    ? `Switch to ${activeClassification.scale === "major" ? "minor" : "major"}`
    : keyState.status === "loading" ? "Loading mode..." : "Mode unavailable";

  const transformedKeyLabel = transformedKeyState.status === "ready"
    ? transformedKeyState.label
    : transformedKeyState.status === "error" ? "Key analysis failed" : "Analyzing key...";

  useEffect(() => {
    const changes: string[] = [];
    if (pitchShift !== 0) changes.push(`${pitchShift > 0 ? "+" : ""}${pitchShift} semitones`);
    if (modeFlipped && activeScale) changes.push(`${activeScale} mode`);
    onModificationChange?.(song, changes.join(", "));
  }, [song, pitchShift, modeFlipped, activeScale, onModificationChange]);

  useEffect(() => {
    onKeyChange?.(song, transformedKeyLabel);
  }, [song, transformedKeyLabel, onKeyChange]);

  return (
    <div className={`song-player ${className}`}>
      {showNotes && (
        analyzerEnabled
          ? <MelodyAnalyzer song={transformedSong} tempo={speed} />
          : (
            <Chromatone
              keyLabel={transformedKeyState.status === "ready"
                ? transformedKeyState.label
                : undefined}
              tonic={transformedKeyState.status === "ready"
                ? transformedKeyState.classification?.tonic
                : undefined}
              activeNotes={playback.activeNotes}
              noteAttack={playback.noteAttack}
              showKey={showKey
                && transformedKeyState.status === "ready"
                && transformedKeyState.classification !== null}
              showNotes={showNotes}
            />
          )
      )}
      {transformedKeyState.status === "error" && (
        <p className="melody-analyzer-status" role="alert">
          Could not analyze song key: {transformedKeyState.message}
        </p>
      )}
      {onToggleAnalyzer && (
        <div className="analyzer-toggle-row">
          <button
            className="secondary-button analyzer-toggle"
            type="button"
            aria-pressed={analyzerEnabled}
            aria-controls="melody-analyzer"
            onClick={onToggleAnalyzer}
          >
            {analyzerEnabled ? "Show Chromatone" : "Analyze Melody"}
          </button>
        </div>
      )}
      <div className="player-controls">
        <button
          className="play-button"
          onClick={() => setPlaying((value) => !value)}
        >
          {playing ? "Ⅱ Pause" : "▶ Play"}
        </button>
        <div className="playback-adjustments">
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
          <div className="pitch-control">
            <label htmlFor={`pitch-shift-${song.title}`}>Pitch shift</label>
            <input
              id={`pitch-shift-${song.title}`}
              type="range"
              min="-12"
              max="12"
              step="1"
              value={pitchShift}
              onChange={(event) => setPitchPreference({
                song,
                semitones: Number(event.target.value),
              })}
            />
            <output>
              {pitchShift > 0 ? "+" : ""}{pitchShift} <small>semitones</small>
            </output>
            <button
              className="secondary-button mode-toggle-button"
              type="button"
              disabled={activeClassification === null}
              aria-pressed={modeFlipped}
              onClick={() => setModePreference({ song, flipped: !modeFlipped })}
            >
              {modeButtonLabel}
            </button>
          </div>
        </div>
        <div className="progress-text">
          <span>{playing ? "Playing" : "Ready"}</span>
          <b>
            {String(playback.position < playback.notes.length ? playback.position + 1 : 1).padStart(2, "0")} / {String(playback.notes.length).padStart(2, "0")}
          </b>
        </div>
      </div>
    </div>
  );
}
