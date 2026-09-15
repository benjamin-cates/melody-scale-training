import { useState } from "react";
import { SONG_CATEGORIES, SONGS, type SongCategory } from "./music";
import { Player } from "./Player";

export function Explorer() {
  const [category, setCategory] = useState<SongCategory>(SONG_CATEGORIES[0]);
  const songsInCategory = SONGS.filter((song) => song.category === category);
  const [songTitle, setSongTitle] = useState(songsInCategory[0].title);
  const song = songsInCategory.find((item) => item.title === songTitle) ?? songsInCategory[0];

  function selectCategory(nextCategory: SongCategory) {
    setCategory(nextCategory);
    setSongTitle(SONGS.find((songItem) => songItem.category === nextCategory)!.title);
  }
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
            <label htmlFor="explorer-category">Category</label>
            <select
              id="explorer-category"
              value={category}
              onChange={(event) => selectCategory(event.target.value as SongCategory)}
            >
              {SONG_CATEGORIES.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
            <label htmlFor="explorer-song">Song</label>
            <select
              id="explorer-song"
              value={song.title}
              onChange={(event) => setSongTitle(event.target.value)}
            >
              {songsInCategory.map((item) => (
                <option value={item.title} key={item.title}>
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
