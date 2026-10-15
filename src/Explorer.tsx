import { useState } from "react";
import { getSongKey, SONG_CATEGORIES, SONGS, type SongCategory } from "./audio/music";
import { Chromatone } from "./audio/Chromatone";
import { Player } from "./audio/Player";

export function Explorer() {
  const [category, setCategory] = useState<SongCategory>(SONG_CATEGORIES[0]);
  const [subcategory, setSubcategory] = useState("Other");
  const songsInCategory = SONGS.filter((song) => song.category === category);
  const hasSubcategories = songsInCategory.some((song) => song.subcategory !== undefined);
  const subcategories = [...new Set(songsInCategory.map((song) => song.subcategory ?? "Other"))];
  const songsInSubcategory = hasSubcategories
    ? songsInCategory.filter((song) => (song.subcategory ?? "Other") === subcategory)
    : songsInCategory;
  const [songTitle, setSongTitle] = useState(songsInSubcategory[0]?.title ?? "");
  const song = songsInSubcategory.find((item) => item.title === songTitle) ?? songsInSubcategory[0] ?? songsInCategory[0] ?? SONGS[0];

  function selectCategory(nextCategory: SongCategory) {
    const nextSongs = SONGS.filter((songItem) => songItem.category === nextCategory);
    const nextSubcategory = [...new Set(nextSongs.map((songItem) => songItem.subcategory ?? "Other"))][0] ?? "Other";
    setCategory(nextCategory);
    setSubcategory(nextSubcategory);
    setSongTitle(nextSongs.find((songItem) => (songItem.subcategory ?? "Other") === nextSubcategory)?.title ?? "");
  }

  function selectSubcategory(nextSubcategory: string) {
    setSubcategory(nextSubcategory);
    setSongTitle(songsInCategory.find((songItem) =>
      (songItem.subcategory ?? "Other") === nextSubcategory
    )?.title ?? "");
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
          {hasSubcategories && (
            <div className="explorer-picker-group">
              <span className="explorer-picker-label">Subcategory</span>
              <div className="explorer-button-row" aria-label="Song subcategory">
                {subcategories.map((item) => (
                  <button
                    className={item === subcategory ? "explorer-picker-button is-selected" : "explorer-picker-button"}
                    key={item}
                    type="button"
                    aria-pressed={item === subcategory}
                    onClick={() => selectSubcategory(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
          {category !== "Custom" && (
            <div className="explorer-picker-group">
              <span className="explorer-picker-label">Song</span>
              <div className="explorer-button-row" aria-label="Song selection">
                {songsInSubcategory.map((item) => (
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
              <strong>{getSongKey(song)}</strong>
            </div>
          </div>
        )}
        {category === "Custom" ? <Chromatone isInteractive /> : <Player song={song} showKey showNotes />}
      </section>
    </section>
  );
}
