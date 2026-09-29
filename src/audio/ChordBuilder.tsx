import { useState } from "react";
import type { SavedChord } from "./chords";
import { NOTE_NAMES } from "./music";

type ChordBuilderProps = {
  selectedChordNotes: Set<number>;
  savedChords: SavedChord[];
  onStartPlay: () => void;
  onStopPlay: () => void;
  onSaveChord: (name: string) => void;
  onClearSelection: () => void;
  onStartPlaySavedChord: (chord: SavedChord) => void;
  onStopPlaySavedChord: (chord: SavedChord) => void;
  onDeleteSavedChord: (id: string) => void;
};

export function ChordBuilder({
  selectedChordNotes,
  savedChords,
  onStartPlay,
  onStopPlay,
  onSaveChord,
  onClearSelection,
  onStartPlaySavedChord,
  onStopPlaySavedChord,
  onDeleteSavedChord,
}: ChordBuilderProps) {
  const [chordNameInput, setChordNameInput] = useState("");

  const handleSave = () => {
    onSaveChord(chordNameInput);
    setChordNameInput("");
  };

  return (
    <div className="custom-chord-builder-panel">
      <div className="chord-builder-controls">
        <span className="chord-builder-summary">
          Selected:{" "}
          {selectedChordNotes.size === 0 ? (
            <em>none</em>
          ) : (
            <strong>
              {[...selectedChordNotes]
                .sort((a, b) => a - b)
                .map((idx) => {
                  const pc = ((idx + 21) % 12 + 12) % 12;
                  const oct = Math.floor((idx + 21) / 12);
                  return `${NOTE_NAMES[pc]}${oct}`;
                })
                .join(", ")}
            </strong>
          )}
        </span>
        <div className="chord-builder-actions">
          <button
            type="button"
            className="chord-action-btn"
            disabled={selectedChordNotes.size === 0}
            onPointerDown={(e) => {
              if (e.button !== 0) return;
              onStartPlay();
            }}
            onPointerUp={onStopPlay}
            onPointerCancel={onStopPlay}
            onPointerLeave={onStopPlay}
            onKeyDown={(e) => {
              if (e.repeat) return;
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onStartPlay();
              }
            }}
            onKeyUp={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onStopPlay();
              }
            }}
          >
            ▶ Play
          </button>
          <input
            type="text"
            placeholder="Chord name (optional)"
            value={chordNameInput}
            onChange={(e) => setChordNameInput(e.target.value)}
            className="chord-name-input"
          />
          <button
            type="button"
            className="chord-action-btn primary"
            disabled={selectedChordNotes.size === 0}
            onClick={handleSave}
          >
            Save
          </button>
          <button
            type="button"
            className="chord-action-btn clear"
            disabled={selectedChordNotes.size === 0}
            onClick={onClearSelection}
          >
            Clear Selection
          </button>
        </div>
      </div>
      {savedChords.length > 0 && (
        <div className="saved-chords-section">
          <span className="saved-chords-heading">Chords (Octave 4 & Custom):</span>
          <div className="saved-chords-grid">
            {savedChords.map((chord) => (
              <div key={chord.id} className="saved-chord-chip">
                <button
                  type="button"
                  className="saved-chord-play"
                  onPointerDown={(e) => {
                    if (e.button !== 0) return;
                    onStartPlaySavedChord(chord);
                  }}
                  onPointerUp={() => onStopPlaySavedChord(chord)}
                  onPointerCancel={() => onStopPlaySavedChord(chord)}
                  onPointerLeave={() => onStopPlaySavedChord(chord)}
                  onKeyDown={(e) => {
                    if (e.repeat) return;
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      onStartPlaySavedChord(chord);
                    }
                  }}
                  onKeyUp={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      onStopPlaySavedChord(chord);
                    }
                  }}
                  title={`Hold to play ${chord.name}`}
                >
                  <span className="saved-chord-name">▶ {chord.name}</span>
                </button>
                {!chord.isDefault && (
                  <button
                    type="button"
                    className="saved-chord-delete"
                    onClick={() => onDeleteSavedChord(chord.id)}
                    title="Delete custom chord"
                  >
                    ×
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
