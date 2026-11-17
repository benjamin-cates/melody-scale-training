import { useState } from "react";
import { Chromatone } from "./Chromatone";
import { MelodyAnalyzer } from "./MelodyAnalyzer";
import { useSongPlayback } from "./useSongPlayback";
import type { Song } from "./music";
import { useSongClassification } from "./useSongClassification";

export function Player({
  song,
  tempo = 84,
  className = "",
  showKey = true,
  showNotes = true,
  analyzerEnabled = false,
  onToggleAnalyzer,
}: {
  song: Song;
  tempo?: number;
  className?: string;
  showKey?: boolean;
  showNotes?: boolean;
  analyzerEnabled?: boolean;
  onToggleAnalyzer?: () => void;
}) {
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(tempo);
  const keyState = useSongClassification(song);
  const playback = useSongPlayback(song, speed, playing);
  return (
    <div className={`song-player ${className}`}>
      {showNotes && (
        analyzerEnabled
          ? <MelodyAnalyzer song={song} tempo={speed} />
          : (
            <Chromatone
              keyLabel={keyState.status === "ready" ? keyState.label : undefined}
              tonic={keyState.status === "ready" ? keyState.classification?.tonic : undefined}
              activeNotes={playback.activeNotes}
              noteAttack={playback.noteAttack}
              showKey={showKey && keyState.status === "ready" && keyState.classification !== null}
              showNotes={showNotes}
            />
          )
      )}
      {keyState.status === "error" && (
        <p className="melody-analyzer-status" role="alert">
          Could not analyze song key: {keyState.message}
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
            {String(playback.position < playback.notes.length ? playback.position + 1 : 1).padStart(2, "0")} / {String(playback.notes.length).padStart(2, "0")}
          </b>
        </div>
      </div>
    </div>
  );
}
