import { useState } from "react";
import { SONG_CATEGORIES, SONGS, type SongCategory } from "./audio/music";
import { CustomChromatone, Player } from "./audio/Player";

export function Explorer() {
  const [category, setCategory] = useState<SongCategory>(SONG_CATEGORIES[0]);
  const songsInCategory = SONGS.filter((song) => song.category === category);
  const [songTitle, setSongTitle] = useState(songsInCategory[0]?.title ?? "");
  const song = songsInCategory.find((item) => item.title === songTitle) ?? songsInCategory[0];

  function selectCategory(nextCategory: SongCategory) {
    setCategory(nextCategory);
    setSongTitle(SONGS.find((songItem) => songItem.category === nextCategory)?.title ?? "");
  }
  return (
    <section className="page-section explorer-page">
      <section className="practice-panel" aria-label="Melody explorer">
        <div className="explorer-picker">
          <div className="explorer-picker-group">
            <span className="explorer-picker-label">Category</span>
            <div className="explorer-button-row" aria-label="Song category">
              {SONG_CATEGORIES.map((item) => (
                <button
                  className={item === category ? "explorer-picker-button is-selected" : "explorer-picker-button"}
                  key={item}
                  type="button"
                  aria-pressed={item === category}
                  onClick={() => selectCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          {category !== "Custom" && (
            <div className="explorer-picker-group">
              <span className="explorer-picker-label">Song</span>
              <div className="explorer-button-row" aria-label="Song selection">
              {songsInCategory.map((item) => (
                <button
                  className={item.title === song.title ? "explorer-picker-button is-selected" : "explorer-picker-button"}
                  key={item.title}
                  type="button"
                  aria-pressed={item.title === song.title}
                  onClick={() => setSongTitle(item.title)}
                >
                  {item.title}
                </button>
              ))}
              </div>
            </div>
          )}
        </div>
        {category === "Custom" ? (
          <div className="panel-heading explorer-details">
            <div>
              <p className="eyebrow">Custom instrument</p>
              <h2>Play the chromatic scale</h2>
              <p className="muted">Choose notes directly from the map.</p>
            </div>
          </div>
        ) : (
          <div className="panel-heading explorer-details">
            <div>
              <h2>{song.title}</h2>
              <p className="muted">{song.subtitle}</p>
            </div>
            <div className="key-readout">
              <span>Key</span>
              <strong>{song.key}</strong>
            </div>
          </div>
        )}
        {category === "Custom" ? <CustomChromatone /> : <Player song={song} showKey showNotes />}
      </section>
    </section>
  );
}
