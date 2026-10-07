import { useState } from "react";
import { Chromatone } from "./Chromatone";
import { useSongPlayback } from "./useSongPlayback";
import type { Song } from "./music";

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
          keyLabel={song.key}
          tonic={song.tonic}
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
            {String(playback.position < song.notes.length ? playback.position + 1 : 1).padStart(2, "0")} / {String(song.notes.length).padStart(2, "0")}
          </b>
        </div>
      </div>
    </div>
  );
}
