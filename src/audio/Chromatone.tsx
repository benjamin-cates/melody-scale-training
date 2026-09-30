import { useEffect, useRef, useState } from "react";
import { getAudioBus, getAudioContext } from "./audio";
import { ChordBuilder } from "./ChordBuilder";
import { DEFAULT_OCTAVE_4_CHORDS, type SavedChord } from "./chords";
import {
  getKeyPitchClasses,
  type Scale,
  type Song,
  type SongNote,
  MAJOR_INTERVALS,
  MINOR_INTERVALS,
  NOTE_NAMES,
  RAINBOW_COLORS,
} from "./music";

export type ChromatoneProps = {
  song?: Song;
  activeNotes?: SongNote[];
  showKey?: boolean;
  showNotes?: boolean;
  showChordLines?: "all" | "none" | "tonic-only";
  isInteractive?: boolean;
  /** Outlines the song's tonic in white without highlighting the full scale. */
  emphasizeTonic?: boolean;
};

export function Chromatone({
  song,
  activeNotes: propActiveNotes = [],
  showKey = true,
  showNotes = true,
  showChordLines = "tonic-only",
  isInteractive = false,
  emphasizeTonic = false,
}: ChromatoneProps) {
  const [sustain, setSustain] = useState(false);
  const [interactiveActiveNotes, setInteractiveActiveNotes] = useState<Set<number>>(new Set());
  const [selectedTonic, setSelectedTonic] = useState<number | "none">(0);
  const [selectedScale, setSelectedScale] = useState<Scale>("major");
  const [chordCreationMode, setChordCreationMode] = useState(false);
  const [selectedChordNotes, setSelectedChordNotes] = useState<Set<number>>(new Set());
  const [playingChordNotes, setPlayingChordNotes] = useState<Set<number>>(new Set());
  const [activeChordKey, setActiveChordKey] = useState<string | null>(null);
  const [savedChords, setSavedChords] = useState<SavedChord[]>(DEFAULT_OCTAVE_4_CHORDS);

  const audioContext = useRef<AudioContext | null>(null);
  const activeVoices = useRef<Map<number, { osc: OscillatorNode; gain: GainNode }>>(new Map());

  function stopNote(noteIndex: number) {
    const voice = activeVoices.current.get(noteIndex);
    if (!voice) return;
    const context = audioContext.current;
    if (context) {
      voice.gain.gain.cancelScheduledValues(context.currentTime);
      voice.gain.gain.setValueAtTime(voice.gain.gain.value, context.currentTime);
      voice.gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.05);
      voice.osc.stop(context.currentTime + 0.06);
    } else {
      voice.osc.stop();
    }
    setTimeout(() => {
      voice.osc.disconnect();
      voice.gain.disconnect();
    }, 70);
    activeVoices.current.delete(noteIndex);
    setInteractiveActiveNotes((notes) => {
      if (!notes.has(noteIndex)) return notes;
      const next = new Set(notes);
      next.delete(noteIndex);
      return next;
    });
  }

  function startNote(noteIndex: number) {
    const context = audioContext.current ?? getAudioContext();
    audioContext.current = context;
    const bus = getAudioBus();
    void context.resume();

    if (sustain && activeVoices.current.has(noteIndex)) {
      stopNote(noteIndex);
      return;
    }

    if (activeVoices.current.has(noteIndex)) {
      stopNote(noteIndex);
    }

    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = "sine";
    oscillator.frequency.value = 440 * Math.pow(2, (noteIndex + 21 - 69) / 12);
    gain.gain.setValueAtTime(0.0001, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.5, context.currentTime + 0.025);
    oscillator.connect(gain).connect(bus);
    oscillator.start();

    activeVoices.current.set(noteIndex, { osc: oscillator, gain });
    setInteractiveActiveNotes((notes) => new Set(notes).add(noteIndex));
  }

  function releaseNote(noteIndex: number) {
    if (sustain) return;
    stopNote(noteIndex);
  }

  function startChord(noteIndices: number[], keyLabel?: string) {
    if (noteIndices.length === 0) return;
    const context = audioContext.current ?? getAudioContext();
    audioContext.current = context;
    const bus = getAudioBus();
    void context.resume();

    setPlayingChordNotes(new Set(noteIndices));
    setActiveChordKey(keyLabel ?? null);

    const gainLevel = 0.4 / Math.sqrt(noteIndices.length);
    noteIndices.forEach((noteIndex) => {
      if (activeVoices.current.has(noteIndex)) {
        stopNote(noteIndex);
      }
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = "sine";
      oscillator.frequency.value = 440 * Math.pow(2, (noteIndex + 21 - 69) / 12);
      gain.gain.setValueAtTime(0.0001, context.currentTime);
      gain.gain.exponentialRampToValueAtTime(gainLevel, context.currentTime + 0.025);
      oscillator.connect(gain).connect(bus);
      oscillator.start();
      activeVoices.current.set(noteIndex, { osc: oscillator, gain });
    });
  }

  function stopChord(noteIndices: number[]) {
    noteIndices.forEach((noteIndex) => {
      stopNote(noteIndex);
    });
    setPlayingChordNotes(new Set());
    setActiveChordKey(null);
  }

  function toggleChordNote(noteIndex: number) {
    if (selectedChordNotes.has(noteIndex)) {
      setSelectedChordNotes((prev) => {
        const next = new Set(prev);
        next.delete(noteIndex);
        return next;
      });
      stopNote(noteIndex);
    } else {
      setSelectedChordNotes((prev) => new Set(prev).add(noteIndex));
      startNote(noteIndex);
      if (!sustain) {
        setTimeout(() => stopNote(noteIndex), 400);
      }
    }
  }

  function handleSaveChord(customName: string) {
    if (selectedChordNotes.size === 0) return;
    const sorted = [...selectedChordNotes].sort((a, b) => a - b);
    const defaultName = sorted
      .map((idx) => NOTE_NAMES[((idx + 21) % 12 + 12) % 12])
      .join("-");
    const name = customName.trim() || defaultName;
    const keyLabel =
      selectedTonic === "none" ? undefined : `${NOTE_NAMES[selectedTonic]} ${selectedScale}`;
    const newChord: SavedChord = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      name,
      noteIndices: sorted,
      keyLabel,
    };
    setSavedChords((prev) => [...prev, newChord]);
  }

  function handleDeleteChord(id: string) {
    setSavedChords((prev) => prev.filter((chord) => chord.id !== id));
  }

  useEffect(() => () => {
    activeVoices.current.forEach((voice) => {
      try {
        voice.osc.stop();
      } catch {
        /* already stopped */
      }
      voice.osc.disconnect();
      voice.gain.disconnect();
    });
    activeVoices.current.clear();
  }, []);

  useEffect(() => {
    if (!sustain) {
      activeVoices.current.forEach((_, noteIndex) => stopNote(noteIndex));
      setInteractiveActiveNotes(new Set());
    }
  }, [sustain]);

  const activeKeyInfo = isInteractive && activeChordKey ? (() => {
    const parts = activeChordKey.split(" ");
    if (parts.length >= 2) {
      const tonicIndex = NOTE_NAMES.indexOf(parts[0]);
      const scaleType = parts[1].toLowerCase() as Scale;
      if (tonicIndex !== -1 && (scaleType === "major" || scaleType === "minor")) {
        return {
          tonic: tonicIndex,
          scale: scaleType,
          pitchClasses: new Set(
            (scaleType === "major" ? MAJOR_INTERVALS : MINOR_INTERVALS).map(
              (interval) => (tonicIndex + interval) % 12,
            ),
          ),
          label: activeChordKey,
        };
      }
    }
    return null;
  })() : null;

  const inKey = isInteractive
    ? activeKeyInfo
      ? activeKeyInfo.pitchClasses
      : selectedTonic === "none"
        ? new Set<number>()
        : new Set(
            (selectedScale === "major" ? MAJOR_INTERVALS : MINOR_INTERVALS).map(
              (interval) => (selectedTonic + interval) % 12,
            ),
          )
    : song && showKey
      ? getKeyPitchClasses(song)
      : new Set<number>();

  const activeIndices = isInteractive
    ? (playingChordNotes.size > 0
        ? new Set([...(chordCreationMode ? selectedChordNotes : interactiveActiveNotes), ...playingChordNotes])
        : (chordCreationMode ? selectedChordNotes : interactiveActiveNotes))
    : new Set(propActiveNotes.flatMap((note) => note.noteIndices));

  const noteIndices = song?.notes.flatMap((note) => note.noteIndices) ?? [];
  const lowestOctave = isInteractive
    ? 2
    : Math.max(0, Math.floor((Math.min(...noteIndices, 36) + 21) / 12) - 1);
  const highestOctave = isInteractive
    ? 6
    : Math.ceil((Math.max(...noteIndices, 48) + 21) / 12);
  const octaveCount = highestOctave - lowestOctave + 1;
  const center = 320;
  const centerY = 245;
  const innerRadius = 60;
  const ringDepth = 30;
  const ringGap = 1;
  const outerRadius = innerRadius + octaveCount * (ringDepth + ringGap) - ringGap;
  const svgRadius = outerRadius + 42;
  const svgSize = svgRadius * 2;
  const angleStep = (Math.PI * 2) / NOTE_NAMES.length;
  const sectorWidth = angleStep * 1;
  const point = (radius: number, angle: number) => ({
    x: center + Math.cos(angle) * radius,
    y: centerY + Math.sin(angle) * radius,
  });
  const getNotePoint = (noteIndex: number, angleOffset: number) => {
    const index = ((noteIndex + 21) % 12 + 12) % 12;
    const octave = Math.floor((noteIndex + 21) / 12);
    const octaveOffset = octave - lowestOctave;
    const inner = innerRadius + (octaveCount - octaveOffset - 1) * (ringDepth + ringGap);
    return point(inner + ringDepth / 2, -Math.PI / 2 + index * angleStep + angleOffset);
  };

  const activeNotesList: { noteIndices: number[] }[] = isInteractive
    ? [...activeIndices].map((noteIndex) => ({ noteIndices: [noteIndex] }))
    : propActiveNotes;

  const activeNoteByPitchClass = new Map<number, number>();
  activeNotesList.forEach((activeNote) => {
    activeNote.noteIndices.forEach((noteIndex) => {
      const pitchClass = ((noteIndex + 21) % 12 + 12) % 12;
      if (!activeNoteByPitchClass.has(pitchClass)) {
        activeNoteByPitchClass.set(pitchClass, noteIndex);
      }
    });
  });

  const showChordLinesInInteractive = isInteractive && playingChordNotes.size > 0;
  const chordLines = (isInteractive ? showChordLinesInInteractive : song && showChordLines !== "none")
    ? [...activeNoteByPitchClass.entries()]
      .filter(([rootPitchClass]) => {
        if (isInteractive) {
          if (activeKeyInfo) {
            return rootPitchClass === activeKeyInfo.tonic;
          }
          return selectedTonic === "none" || rootPitchClass === selectedTonic;
        }
        return song ? showChordLines === "all" || rootPitchClass === song.tonic : false;
      })
      .flatMap(([rootPitchClass, rootNote]) =>
        [
          { interval: 4, className: "major-third" },
          { interval: 3, className: "minor-third" },
          { interval: 7, className: "perfect-fifth" },
        ].flatMap(({ interval, className }) => {
          const otherNote = activeNoteByPitchClass.get((rootPitchClass + interval) % 12);
          if (otherNote === undefined) return [];
          const rootOffset = interval === 7 ? -angleStep * 0.18 : angleStep * 0.18;
          const rootPoint = getNotePoint(rootNote, rootOffset);
          const otherPoint = getNotePoint(otherNote, -rootOffset);
          return [{
            className,
            points: `${rootPoint.x},${rootPoint.y} ${center},${centerY} ${otherPoint.x},${otherPoint.y}`,
          }];
        }),
      )
    : [];

  const sectorPath = (inner: number, outer: number, angle: number) => {
    const start_radius_delta = -(angle - sectorWidth / 2) / Math.PI / 2 * ringDepth;
    const end_radius_delta = -(angle + sectorWidth / 2) / Math.PI / 2 * ringDepth;
    const start = point(inner + start_radius_delta, angle - sectorWidth / 2);
    const end = point(inner + end_radius_delta, angle + sectorWidth / 2);
    const outerStart = point(outer + start_radius_delta, angle - sectorWidth / 2);
    const outerEnd = point(outer + end_radius_delta, angle + sectorWidth / 2);
    return [
      `M ${start.x} ${start.y}`,
      `A ${inner} ${inner} 0 0 1 ${end.x} ${end.y}`,
      `L ${outerEnd.x} ${outerEnd.y}`,
      `A ${outer} ${outer} 0 0 0 ${outerStart.x} ${outerStart.y}`,
      "Z",
    ].join(" ");
  };

  const currentTonic = isInteractive
    ? activeKeyInfo
      ? activeKeyInfo.tonic
      : selectedTonic
    : song?.tonic;
  const ariaLabel = isInteractive
    ? `Custom chromatic key map${
        activeChordKey
          ? ` (${activeChordKey})`
          : selectedTonic !== "none"
            ? ` (${NOTE_NAMES[selectedTonic]} ${selectedScale})`
            : ""
      }`
    : `${song?.key ?? ""} chromatic key map`;

  const chromatoneElement = (
    <div
      className="chromatone"
      aria-label={ariaLabel}
    >
      <svg
        className="chromatone-spiral"
        width={svgSize}
        height={svgSize}
        viewBox={`${center - svgRadius} ${centerY - svgRadius} ${svgSize} ${svgSize}`}
        role="img"
        aria-label={isInteractive ? "Clickable five-octave chromatic map" : `${song?.key ?? ""} twelve-prong spiral`}
      >
        {chordLines.length > 0 && (
          <g className="chromatone-chord-lines" aria-hidden="true">
            {chordLines.map((chordLine, index) => (
              <polyline
                className={chordLine.className}
                key={`${chordLine.className}-${index}`}
                points={chordLine.points}
              />
            ))}
          </g>
        )}
        <g className="spiral-notes">
          {Array.from({ length: octaveCount }, (_, octaveOffset) => {
            const octave = lowestOctave + octaveOffset;
            const inner = innerRadius + (octaveCount - octaveOffset - 1) * (ringDepth + ringGap);
            const outer = inner + ringDepth;
            return NOTE_NAMES.map((noteName, index) => {
              const noteIndex = octave * 12 + index - 21;
              const angle = -Math.PI / 2 + index * angleStep;
              const isActive = activeIndices.has(noteIndex);
              const isInKey = isInteractive
                ? inKey.has(index)
                : showKey && inKey.has(index);
              const isFocus = isInteractive
                ? (activeKeyInfo ? activeKeyInfo.tonic === index : selectedTonic === index)
                : (showKey || emphasizeTonic) && song?.tonic === index;
              const outline = isFocus ? "#ffffff" : isInKey ? "#f2c84b" : "none";
              const fillOpacity = isInteractive
                ? (isActive ? 1 : isFocus ? 0.45 : isInKey ? 0.35 : 0.2)
                : (isActive && showNotes ? 1 : isFocus ? 0.4 : 0.23);
              const freq = 440 * Math.pow(2, (noteIndex + 21 - 69) / 12);

              const handlePointerDown = (event: React.PointerEvent) => {
                if (!isInteractive) return;
                if (event.button !== 0) return;
                if (chordCreationMode) {
                  toggleChordNote(noteIndex);
                } else {
                  startNote(noteIndex);
                }
              };

              const handlePointerUp = () => {
                if (!isInteractive || chordCreationMode) return;
                releaseNote(noteIndex);
              };

              const handleKeyDown = (event: React.KeyboardEvent) => {
                if (!isInteractive) return;
                if (event.repeat) return;
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  if (chordCreationMode) {
                    toggleChordNote(noteIndex);
                  } else {
                    startNote(noteIndex);
                  }
                }
              };

              const handleKeyUp = (event: React.KeyboardEvent) => {
                if (!isInteractive || chordCreationMode) return;
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  releaseNote(noteIndex);
                }
              };

              return (
                <path
                  aria-label={`${noteName}${octave}, ${freq.toFixed(1)} Hz`}
                  className={`chromatone-note ${isInteractive ? "custom-note " : ""}${
                    isActive && (isInteractive || showNotes) ? "is-active" : ""
                  }`}
                  d={sectorPath(inner, outer, angle)}
                  fill={RAINBOW_COLORS[index]}
                  fillOpacity={fillOpacity}
                  key={`${octave}-${noteName}`}
                  stroke={outline}
                  strokeWidth={isFocus ? 2.5 : isInKey ? 1.5 : 0}
                  onPointerDown={isInteractive ? handlePointerDown : undefined}
                  onPointerUp={isInteractive ? handlePointerUp : undefined}
                  onPointerCancel={isInteractive ? handlePointerUp : undefined}
                  onPointerLeave={isInteractive ? handlePointerUp : undefined}
                  onKeyDown={isInteractive ? handleKeyDown : undefined}
                  onKeyUp={isInteractive ? handleKeyUp : undefined}
                  role={isInteractive ? "button" : undefined}
                  tabIndex={isInteractive ? 0 : undefined}
                >
                  {isInteractive && (
                    <title>{`${noteName}${octave}: ${freq.toFixed(1)} Hz`}</title>
                  )}
                </path>
              );
            });
          })}
        </g>
        <g className="chromatone-labels" aria-hidden="true">
          {NOTE_NAMES.map((noteName, index) => {
            const label = point(outerRadius + 30, -Math.PI / 2 + index * angleStep);
            const isFocus = currentTonic === index;
            return (
              <text
                className={isFocus ? "is-focus" : ""}
                key={noteName}
                textAnchor="middle"
                x={label.x}
                y={label.y}
              >
                {noteName}
              </text>
            );
          })}
        </g>
      </svg>
    </div>
  );

  if (isInteractive) {
    return (
      <div className="custom-chromatone">
        <div className="custom-chromatone-toolbar">
          <div className="custom-toolbar-left">
            <button
              className={`sustain-button ${sustain && !chordCreationMode ? "is-active" : ""}`}
              aria-pressed={sustain}
              disabled={chordCreationMode}
              onClick={() => setSustain((value) => !value)}
            >
              {sustain ? "Sustain on" : "Sustain off"}
            </button>
            <button
              className={`chord-mode-button ${chordCreationMode ? "is-active" : ""}`}
              aria-pressed={chordCreationMode}
              onClick={() => setChordCreationMode((val) => !val)}
            >
              {chordCreationMode ? "Chord Mode: ON" : "Chord Mode: OFF"}
            </button>
          </div>

          <div className="custom-toolbar-key-selector">
            <label htmlFor="custom-tonic-select">Key:</label>
            <select
              id="custom-tonic-select"
              value={selectedTonic}
              onChange={(e) =>
                setSelectedTonic(e.target.value === "none" ? "none" : Number(e.target.value))
              }
            >
              <option value="none">No Key (All)</option>
              {NOTE_NAMES.map((name, idx) => (
                <option key={name} value={idx}>
                  {name}
                </option>
              ))}
            </select>
            {selectedTonic !== "none" && (
              <select
                id="custom-scale-select"
                aria-label="Scale type"
                value={selectedScale}
                onChange={(e) => setSelectedScale(e.target.value as Scale)}
              >
                <option value="major">Major</option>
                <option value="minor">Minor</option>
              </select>
            )}
          </div>

          <div className="custom-toolbar-info">
            {!chordCreationMode && (
              <span className="sustained-count">
                {interactiveActiveNotes.size} sustained {interactiveActiveNotes.size === 1 ? "note" : "notes"}
              </span>
            )}
          </div>
        </div>

        {chordCreationMode && (
          <ChordBuilder
            selectedChordNotes={selectedChordNotes}
            savedChords={savedChords}
            onStartPlay={() =>
              startChord(
                [...selectedChordNotes],
                selectedTonic === "none"
                  ? undefined
                  : `${NOTE_NAMES[selectedTonic]} ${selectedScale}`,
              )
            }
            onStopPlay={() => stopChord([...selectedChordNotes])}
            onSaveChord={handleSaveChord}
            onClearSelection={() => setSelectedChordNotes(new Set())}
            onStartPlaySavedChord={(chord) => startChord(chord.noteIndices, chord.keyLabel)}
            onStopPlaySavedChord={(chord) => stopChord(chord.noteIndices)}
            onDeleteSavedChord={handleDeleteChord}
          />
        )}

        {chromatoneElement}
      </div>
    );
  }

  return chromatoneElement;
}
