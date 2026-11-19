import { useCallback, useState } from "react";
import {
  getActiveEssenExplorerFilterCount,
  getExplorerSongs,
  hasActiveEssenExplorerFilter,
  SONG_CATEGORIES,
  type Song,
  type SongCategory,
} from "./audio/music";
import { Chromatone } from "./audio/Chromatone";
import { Player } from "./audio/Player";
import { useSongClassification } from "./audio/useSongClassification";

export function Explorer() {
  const [category, setCategory] = useState<SongCategory>(
    () => hasActiveEssenExplorerFilter() ? "Essen" : SONG_CATEGORIES[0],
  );
  const explorerSongs = getExplorerSongs();
  const categoryOptions = SONG_CATEGORIES.filter((item) =>
    item === "Custom" || explorerSongs.some((song) => song.category === item),
  );
  const songsInCategory = explorerSongs.filter((song) => song.category === category);
  const subcategories = [...new Set(songsInCategory.map((song) => song.subcategory ?? "Other"))];
  const [subcategory, setSubcategory] = useState(subcategories[0] ?? "Other");
  const [analyzerEnabled, setAnalyzerEnabled] = useState(false);
  const hasSubcategories = songsInCategory.some((song) => song.subcategory !== undefined);
  const songsInSubcategory = hasSubcategories
    ? songsInCategory.filter((song) => (song.subcategory ?? "Other") === subcategory)
    : songsInCategory;
  const [songTitle, setSongTitle] = useState(songsInSubcategory[0]?.title ?? "");
  const song = songsInSubcategory.find((item) => item.title === songTitle)
    ?? songsInSubcategory[0]
    ?? songsInCategory[0]
    ?? explorerSongs[0];
  const songKey = useSongClassification(song);
  const [playerModification, setPlayerModification] = useState<{
    song: Song;
    description: string;
  } | null>(null);
  const [playerKey, setPlayerKey] = useState<{ song: Song; label: string } | null>(null);
  const activeEssenFilter = hasActiveEssenExplorerFilter();
  const reportModification = useCallback((modifiedSong: Song, description: string) => {
    setPlayerModification({ song: modifiedSong, description });
  }, []);
  const reportKey = useCallback((modifiedSong: Song, label: string) => {
    setPlayerKey({ song: modifiedSong, label });
  }, []);
  function selectCategory(nextCategory: SongCategory) {
    const nextSongs = explorerSongs.filter((songItem) => songItem.category === nextCategory);
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
      {activeEssenFilter && (
        <p className="muted explorer-filter-notice">
          Showing {getActiveEssenExplorerFilterCount().toLocaleString()} filtered Essen songs.
          Reload the page to restore the full list.
        </p>
      )}
      <section className="practice-panel" aria-label="Melody explorer">
        <div className="explorer-picker">
          <div className="explorer-picker-group">
            <span className="explorer-picker-label">Category</span>
            <div className="explorer-button-row" aria-label="Song category">
              {categoryOptions.map((item) => (
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
              <h2>
                {song.title}
                {playerModification?.song === song && playerModification.description
                  ? ` (${playerModification.description})`
                  : ""}
              </h2>
              <p className="muted">{song.subtitle}</p>
            </div>
            <div className="key-readout">
              <span>Key</span>
              <strong>
                {playerKey?.song === song
                  ? playerKey.label
                  : songKey.status === "ready"
                    ? songKey.label
                    : songKey.status === "error"
                      ? "Key analysis failed"
                      : "Analyzing key..."}
              </strong>
            </div>
          </div>
        )}
        {category === "Custom" ? (
          <Chromatone isInteractive />
        ) : (
          <Player
            key={`${song.category}:${song.subcategory ?? ""}:${song.title}`}
            song={song}
            showKey
            showNotes
            analyzerEnabled={analyzerEnabled}
            onModificationChange={reportModification}
            onKeyChange={reportKey}
            onToggleAnalyzer={() => setAnalyzerEnabled((enabled) => !enabled)}
          />
        )}
      </section>
    </section>
  );
}
