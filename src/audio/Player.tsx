import { useEffect, useRef, useState } from "react";
import { getAudioBus, getAudioContext } from "./audio";
import {
  getKeyPitchClasses,
  getNoteOnset,
  getSongDuration,
  type Song,
  type SongNote,
  NOTE_NAMES,
  RAINBOW_COLORS,
} from "./music";

type ChromatoneProps = {
  song: Song;
  activeNotes?: SongNote[];
  showKey?: boolean;
  showNotes?: boolean;
  showChordLines?: "all" | "none" | "tonic-only";
};

export function Chromatone({
  song,
  activeNotes = [],
  showKey = true,
  showNotes = true,
  showChordLines = "tonic-only",
}: ChromatoneProps) {
  const inKey = getKeyPitchClasses(song);
  const activeIndices = new Set(activeNotes.flatMap((note) => note.noteIndices));
  const noteIndices = song.notes.flatMap((note) => note.noteIndices);
  const lowestOctave = Math.max(
    0,
    Math.floor((Math.min(...noteIndices, 36) + 21) / 12) - 1,
  );
  const highestOctave = Math.ceil((Math.max(...noteIndices, 48) + 21) / 12);
  const octaveCount = highestOctave - lowestOctave + 1;
  const center = 320;
  const centerY = 245;
  const innerRadius = 60;
  const ringDepth = 30;
  const ringGap = 1;
  const outerRadius = innerRadius + octaveCount * (ringDepth + ringGap) - ringGap;
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
  const activeNoteByPitchClass = new Map<number, number>();
  activeNotes.forEach((activeNote) => {
    activeNote.noteIndices.forEach((noteIndex) => {
      const pitchClass = ((noteIndex + 21) % 12 + 12) % 12;
      if (!activeNoteByPitchClass.has(pitchClass)) {
        activeNoteByPitchClass.set(pitchClass, noteIndex);
      }
    });
  });
  const chordLines = showChordLines !== "none"
    ? [...activeNoteByPitchClass.entries()]
      .filter(([rootPitchClass]) => showChordLines === "all" || rootPitchClass === song.tonic)
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
    const start_radius_delta = -(angle - sectorWidth/2) / Math.PI / 2 * ringDepth;
    const end_radius_delta = -(angle + sectorWidth/2) / Math.PI / 2 * ringDepth;
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
  return (
    <div className="chromatone" aria-label={`${song.key} chromatic key map`}>
      <svg
        className="chromatone-spiral"
        viewBox={`0 0 ${center * 2} ${centerY * 2}`}
        role="img"
        aria-label={`${song.key} twelve-prong spiral`}
      >
        <g className="chromatone-chord-lines" aria-hidden="true">
          {chordLines.map((chordLine, index) => (
            <polyline
              className={chordLine.className}
              key={`${chordLine.className}-${index}`}
              points={chordLine.points}
            />
          ))}
        </g>
        <g className="spiral-notes">
          {Array.from({ length: octaveCount }, (_, octaveOffset) => {
            const octave = lowestOctave + octaveOffset;
            const inner = innerRadius + (octaveCount - octaveOffset - 1) * (ringDepth + ringGap);
            const outer = inner + ringDepth;
            return NOTE_NAMES.map((noteName, index) => {
              const noteIndex = octave * 12 + index - 21;
              const angle = -Math.PI / 2 + index * angleStep;
              const isActive = activeIndices.has(noteIndex);
              const isInKey = showKey && inKey.has(index);
              const isFocus = showKey && song.tonic === index;
              const outline = isFocus ? "#ffffff" : isInKey ? "#f2c84b" : "none";
              return (
                <path
                  aria-label={`${noteName}, octave ${octave}`}
                  className={`chromatone-note ${isActive && showNotes ? "is-active" : ""}`}
                  d={sectorPath(inner, outer, angle)}
                  fill={RAINBOW_COLORS[index]}
                  fillOpacity={isActive && showNotes ? 1 : isFocus ? 0.4 : 0.23}
                  key={`${octave}-${noteName}`}
                  stroke={outline}
                  strokeWidth={isFocus ? 2.5 : isInKey ? 1.5 : 0}
                />
              );
            });
          })}
        </g>
        <g className="chromatone-labels" aria-hidden="true">
          {NOTE_NAMES.map((noteName, index) => {
            const label = point(outerRadius + 30, -Math.PI / 2 + index * angleStep);
            return (
              <text
                className={showKey && song.tonic === index ? "is-focus" : ""}
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
}

export function CustomChromatone() {
  const [sustain, setSustain] = useState(false);
  const [activeNotes, setActiveNotes] = useState<Set<number>>(new Set());
  const audioContext = useRef<AudioContext | null>(null);
  const oscillators = useRef(new Map<number, OscillatorNode>());
  const center = 320;
  const centerY = 245;
  const innerRadius = 60;
  const ringDepth = 30;
  const ringGap = 1;
  const octaveCount = 5;
  const outerRadius = innerRadius + octaveCount * (ringDepth + ringGap) - ringGap;
  const angleStep = (Math.PI * 2) / NOTE_NAMES.length;
  const sectorWidth = angleStep;
  const point = (radius: number, angle: number) => ({
    x: center + Math.cos(angle) * radius,
    y: centerY + Math.sin(angle) * radius,
  });
  const sectorPath = (inner: number, outer: number, angle: number) => {
    const startRadiusDelta = -(angle - sectorWidth / 2) / Math.PI / 2 * ringDepth;
    const endRadiusDelta = -(angle + sectorWidth / 2) / Math.PI / 2 * ringDepth;
    const start = point(inner + startRadiusDelta, angle - sectorWidth / 2);
    const end = point(inner + endRadiusDelta, angle + sectorWidth / 2);
    const outerStart = point(outer + startRadiusDelta, angle - sectorWidth / 2);
    const outerEnd = point(outer + endRadiusDelta, angle + sectorWidth / 2);
    return [
      `M ${start.x} ${start.y}`,
      `A ${inner} ${inner} 0 0 1 ${end.x} ${end.y}`,
      `L ${outerEnd.x} ${outerEnd.y}`,
      `A ${outer} ${outer} 0 0 0 ${outerStart.x} ${outerStart.y}`,
      "Z",
    ].join(" ");
  };

  function stopNote(noteIndex: number) {
    const oscillator = oscillators.current.get(noteIndex);
    if (!oscillator) return;
    oscillator.stop();
    oscillator.disconnect();
    oscillators.current.delete(noteIndex);
  }

  function playNote(noteIndex: number) {
    const context = audioContext.current ?? getAudioContext();
    audioContext.current = context;
    const bus = getAudioBus();
    void context.resume();
    if (sustain && oscillators.current.has(noteIndex)) {
      stopNote(noteIndex);
      setActiveNotes((notes) => {
        const next = new Set(notes);
        next.delete(noteIndex);
        return next;
      });
      return;
    }
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = "sine";
    oscillator.frequency.value = 440 * Math.pow(2, (noteIndex + 21 - 69) / 12);
    gain.gain.setValueAtTime(0.0001, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.5, context.currentTime + 0.025);
    oscillator.connect(gain).connect(bus);
    oscillator.start();
    if (sustain) {
      oscillators.current.set(noteIndex, oscillator);
      setActiveNotes((notes) => new Set(notes).add(noteIndex));
    } else {
      gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.55);
      oscillator.stop(context.currentTime + 0.58);
    }
  }

  useEffect(() => () => {
    oscillators.current.forEach((oscillator) => {
      oscillator.stop();
      oscillator.disconnect();
    });
  }, []);

  useEffect(() => {
    if (!sustain) {
      oscillators.current.forEach((_, noteIndex) => stopNote(noteIndex));
      setActiveNotes(new Set());
    }
  }, [sustain]);

  return (
    <div className="custom-chromatone">
      <div className="custom-chromatone-toolbar">
        <button
          className={`sustain-button ${sustain ? "is-active" : ""}`}
          aria-pressed={sustain}
          onClick={() => setSustain((value) => !value)}
        >
          {sustain ? "Sustain on" : "Sustain off"}
        </button>
        <span>{activeNotes.size} sustained {activeNotes.size === 1 ? "note" : "notes"}</span>
      </div>
      <div className="chromatone" aria-label="Custom chromatic key map">
        <svg
          className="chromatone-spiral"
          viewBox={`0 0 ${center * 2} ${centerY * 2}`}
          role="img"
          aria-label="Clickable five-octave chromatic map"
        >
          {Array.from({ length: octaveCount }, (_, octaveOffset) => {
            const octave = octaveOffset + 2;
            const inner = innerRadius + (octaveCount - octaveOffset - 1) * (ringDepth + ringGap);
            const outer = inner + ringDepth;
            return NOTE_NAMES.map((noteName, index) => {
              const noteIndex = octave * 12 + index - 21;
              const angle = -Math.PI / 2 + index * angleStep;
              const isActive = activeNotes.has(noteIndex);
              return (
                <path
                  aria-label={`${noteName}, octave ${octave}`}
                  className={`chromatone-note custom-note ${isActive ? "is-active" : ""}`}
                  d={sectorPath(inner, outer, angle)}
                  fill={RAINBOW_COLORS[index]}
                  fillOpacity={isActive ? 1 : 0.35}
                  key={`${octave}-${noteName}`}
                  onClick={() => playNote(noteIndex)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") playNote(noteIndex);
                  }}
                  role="button"
                  tabIndex={0}
                />
              );
            });
          })}
          <g className="chromatone-labels" aria-hidden="true">
            {NOTE_NAMES.map((noteName, index) => {
              const label = point(outerRadius + 30, -Math.PI / 2 + index * angleStep);
              return <text key={noteName} textAnchor="middle" x={label.x} y={label.y}>{noteName}</text>;
            })}
          </g>
        </svg>
      </div>
    </div>
  );
}

function useSongPlayback(song: Song, tempo: number, enabled = false) {
  const [position, setPosition] = useState(0);
  const [activeNotes, setActiveNotes] = useState<SongNote[]>([]);
  const audioContext = useRef<AudioContext | null>(null);
  const oscillators = useRef<OscillatorNode[]>([]);

  const stop = () => {
    oscillators.current.forEach((oscillator) => {
      try {
        oscillator.stop();
      } catch {
        /* already stopped */
      }
      oscillator.disconnect();
    });
    oscillators.current = [];
  };

  useEffect(() => {
    stop();
    setPosition(0);
    setActiveNotes([]);
  }, [song]);

  useEffect(() => {
    if (!enabled) {
      stop();
      setActiveNotes([]);
      return;
    }
    const currentNote = song.notes[position];
    if (!currentNote) {
      return;
    }
    const beatDuration = 60000 / tempo;
    const context = audioContext.current ?? getAudioContext();
    audioContext.current = context;
    const bus = getAudioBus();
    void context.resume();
    const currentOscillators = currentNote.noteIndices.map((noteIndex) => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = "triangle";
      oscillator.frequency.value = 440 * Math.pow(2, (noteIndex + 21 - 69) / 12);
      const duration = (currentNote.duration * beatDuration) / 1000;
      gain.gain.setValueAtTime(0.0001, context.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.3, context.currentTime + 0.025);
      gain.gain.exponentialRampToValueAtTime(
        0.3,
        context.currentTime + Math.max(duration - 0.03, 0.04) - 0.025,
      );
      gain.gain.exponentialRampToValueAtTime(
        0.0001,
        context.currentTime + Math.max(duration - 0.03, 0.04),
      );
      oscillator.connect(gain).connect(bus);
      oscillator.start();
      oscillator.stop(context.currentTime + duration);
      return oscillator;
    });
    oscillators.current.push(...currentOscillators);
    const currentOnset = getNoteOnset(song, position);
    setActiveNotes(
      song.notes.filter((note, notePosition) => {
        const onset = getNoteOnset(song, notePosition);
        return onset <= currentOnset && onset + note.duration > currentOnset;
      }),
    );
    const nextPosition = (position + 1) % song.notes.length;
    const nextOnset = getNoteOnset(song, nextPosition);
    const onsetDelta = nextPosition === 0
      ? getSongDuration(song) - currentOnset
      : nextOnset - currentOnset;
    const timer = window.setTimeout(
      () => setPosition(nextPosition),
      onsetDelta * beatDuration,
    );
    return () => window.clearTimeout(timer);
  }, [enabled, position, song, tempo]);

  return { position, activeNotes, stop };
}

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
          song={song}
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
