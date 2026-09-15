import { useState } from "react";
import { SONGS } from "./music";
import { Player } from "./Player";

export function Explorer() {
  const [songIndex, setSongIndex] = useState(0);
  const song = SONGS[songIndex];
  return (
    <section className="page-section explorer-page">
      <section className="practice-panel" aria-label="Melody explorer">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Now listening</p>
            <h2>{song.title}</h2>
            <p className="muted">{song.subtitle}</p>
          </div>
          <div className="song-picker">
            <label htmlFor="explorer-song">Song</label>
            <select
              id="explorer-song"
              value={songIndex}
              onChange={(event) => setSongIndex(Number(event.target.value))}
            >
              {SONGS.map((item, index) => (
                <option value={index} key={item.title}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
          <div className="key-readout">
            <span>Key</span>
            <strong>{song.key}</strong>
          </div>
        </div>
        <Player song={song} showKey showNotes />
      </section>
    </section>
  );
}
