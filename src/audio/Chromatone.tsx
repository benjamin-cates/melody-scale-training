import { useEffect, useId, useRef, useState } from "react";
import { getAudioBus, getAudioContext } from "./audio";
import { ChordBuilder } from "./ChordBuilder";
import { DEFAULT_OCTAVE_4_CHORDS, type SavedChord } from "./chords";
import {
  type Scale,
  type SongNote,
  MAJOR_INTERVALS,
  MINOR_INTERVALS,
  NOTE_NAMES,
  RAINBOW_COLORS,
} from "./music";

export type ChromatoneProps = {
  keyLabel?: string;
  tonic?: number;
  activeNotes?: SongNote[];
  showKey?: boolean;
  showNotes?: boolean;
  showNoteDirection?: boolean;
  showChordLines?: "all" | "none" | "tonic-only";
  isInteractive?: boolean;
  /** Outlines the tonic in white without highlighting the full scale. */
  emphasizeTonic?: boolean;
};

export function Chromatone({
  keyLabel,
  tonic,
  activeNotes: propActiveNotes = [],
  showKey = true,
  showNotes = true,
  showNoteDirection = false,
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
  const [noteDirection, setNoteDirection] = useState<{ from: number; to: number } | null>(null);
  const [chordRelationFlash, setChordRelationFlash] = useState<{
    rootNote: number;
    otherNote: number;
    className: string;
  } | null>(null);
  const [savedChords, setSavedChords] = useState<SavedChord[]>(DEFAULT_OCTAVE_4_CHORDS);

  const audioContext = useRef<AudioContext | null>(null);
  const activeVoices = useRef<Map<number, { osc: OscillatorNode; gain: GainNode }>>(new Map());
  const previousActiveNote = useRef<number | null>(null);
  const inactiveSince = useRef<number | null>(null);
  const noteDirectionTimer = useRef<number | null>(null);
  const previousRelationshipNote = useRef<number | null>(null);
  const relationshipInactiveSince = useRef<number | null>(null);
  const chordRelationTimer = useRef<number | null>(null);
  const arrowMarkerId = `chromatone-arrow-${useId().replace(/:/g, "")}`;

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
    if (noteDirectionTimer.current !== null) {
      window.clearTimeout(noteDirectionTimer.current);
    }
    if (chordRelationTimer.current !== null) {
      window.clearTimeout(chordRelationTimer.current);
    }
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

  const keyScale: Scale | null = keyLabel
    ? keyLabel.toLowerCase().includes("minor") ? "minor" : "major"
    : null;
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
    : keyScale && tonic !== undefined && showKey
      ? new Set(
        (keyScale === "major" ? MAJOR_INTERVALS : MINOR_INTERVALS).map(
          (interval) => (tonic + interval) % 12,
        ),
      )
      : new Set<number>();

  const activeIndices = isInteractive
    ? (playingChordNotes.size > 0
      ? new Set([...(chordCreationMode ? selectedChordNotes : interactiveActiveNotes), ...playingChordNotes])
      : (chordCreationMode ? selectedChordNotes : interactiveActiveNotes))
    : new Set(propActiveNotes.flatMap((note) => note.noteIndices));

  const lowestOctave = 3;
  const highestOctave = 6;
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
  const spiralRadiusOffset = (angle: number) => -(angle / (Math.PI * 2)) * ringDepth;
  const getNotePoint = (noteIndex: number, angleOffset: number) => {
    const index = ((noteIndex + 21) % 12 + 12) % 12;
    const octave = Math.floor((noteIndex + 21) / 12);
    const octaveOffset = octave - lowestOctave;
    const inner = innerRadius + (octaveCount - octaveOffset - 1) * (ringDepth + ringGap);
    const angle = -Math.PI / 2 + index * angleStep + angleOffset;
    return point(inner + ringDepth / 2 + spiralRadiusOffset(angle), angle);
  };

  const activeNoteList = isInteractive
    ? [...activeIndices]
    : propActiveNotes.flatMap((note) => note.noteIndices);
  const currentActiveNote = activeNoteList.at(-1);
  const directionStep = noteDirection ? Math.sign(noteDirection.to - noteDirection.from) : 0;
  const directionPoints = noteDirection
    ? Array.from(
      { length: Math.abs(noteDirection.to - noteDirection.from) + 1 },
      (_, index) => noteDirection.from + directionStep * index,
    ).map((noteIndex) => getNotePoint(noteIndex, 0))
    : [];
  const directionCurvePoints = noteDirection
    ? [
      getNotePoint(noteDirection.from - directionStep, 0),
      ...directionPoints,
      getNotePoint(noteDirection.to + directionStep, 0),
    ]
    : [];
  const directionPath = directionCurvePoints.length >= 4
    ? directionCurvePoints.slice(1, -2).reduce((path, point, index) => {
      const pointIndex = index + 1;
      const nextPoint = directionCurvePoints[pointIndex + 1];
      const previousPoint = directionCurvePoints[pointIndex - 1];
      const followingPoint = directionCurvePoints[pointIndex + 2];
      const control1 = {
        x: point.x + (nextPoint.x - previousPoint.x) / 6,
        y: point.y + (nextPoint.y - previousPoint.y) / 6,
      };
      const control2 = {
        x: nextPoint.x - (followingPoint.x - point.x) / 6,
        y: nextPoint.y - (followingPoint.y - point.y) / 6,
      };
      const isLastSegment = index === directionPoints.length - 2;
      const tangentX = followingPoint.x - previousPoint.x;
      const tangentY = followingPoint.y - previousPoint.y;
      const tangentLength = Math.hypot(tangentX, tangentY) || 1;
      const endpointInset = isLastSegment ? 4 : 0;
      const endpointShiftX = -(tangentX / tangentLength) * endpointInset;
      const endpointShiftY = -(tangentY / tangentLength) * endpointInset;
      return `${path} C ${control1.x} ${control1.y} ${control2.x + endpointShiftX} ${control2.y + endpointShiftY} ${nextPoint.x + endpointShiftX} ${nextPoint.y + endpointShiftY}`;
    }, `M ${directionPoints[0].x} ${directionPoints[0].y}`)
    : "";

  useEffect(() => {
    if (!showNoteDirection) {
      previousActiveNote.current = null;
      inactiveSince.current = null;
      setNoteDirection(null);
      if (noteDirectionTimer.current !== null) {
        window.clearTimeout(noteDirectionTimer.current);
        noteDirectionTimer.current = null;
      }
      return;
    }
    if (currentActiveNote === undefined) {
      if (previousActiveNote.current !== null && inactiveSince.current === null) {
        inactiveSince.current = Date.now();
      }
      return;
    }

    const previousNote = previousActiveNote.current;
    const inactiveGap = inactiveSince.current === null ? 0 : Date.now() - inactiveSince.current;
    previousActiveNote.current = currentActiveNote;
    inactiveSince.current = null;
    if (previousNote === null || previousNote === currentActiveNote) return;

    if (inactiveGap > 200) {
      setNoteDirection(null);
      if (noteDirectionTimer.current !== null) {
        window.clearTimeout(noteDirectionTimer.current);
        noteDirectionTimer.current = null;
      }
      return;
    }

    const minVisibleNote = lowestOctave * 12 - 21;
    const maxVisibleNote = (highestOctave + 1) * 12 - 22;
    if (
      previousNote < minVisibleNote || previousNote > maxVisibleNote ||
      currentActiveNote < minVisibleNote || currentActiveNote > maxVisibleNote
    ) {
      setNoteDirection(null);
      return;
    }

    setNoteDirection({ from: previousNote, to: currentActiveNote });
    if (noteDirectionTimer.current !== null) {
      window.clearTimeout(noteDirectionTimer.current);
    }
    noteDirectionTimer.current = window.setTimeout(() => {
      setNoteDirection(null);
      noteDirectionTimer.current = null;
    }, 700);
  }, [currentActiveNote, highestOctave, lowestOctave, showNoteDirection]);

  useEffect(() => {
    const relationshipsEnabled = showChordLines !== "none" && (isInteractive || tonic !== undefined);
    if (!relationshipsEnabled) {
      previousRelationshipNote.current = null;
      relationshipInactiveSince.current = null;
      setChordRelationFlash(null);
      if (chordRelationTimer.current !== null) {
        window.clearTimeout(chordRelationTimer.current);
        chordRelationTimer.current = null;
      }
      return;
    }
    if (currentActiveNote === undefined) {
      if (previousRelationshipNote.current !== null && relationshipInactiveSince.current === null) {
        relationshipInactiveSince.current = Date.now();
      }
      return;
    }

    const previousNote = previousRelationshipNote.current;
    const inactiveGap = relationshipInactiveSince.current === null
      ? 0
      : Date.now() - relationshipInactiveSince.current;
    previousRelationshipNote.current = currentActiveNote;
    relationshipInactiveSince.current = null;
    if (previousNote === null || previousNote === currentActiveNote) return;

    if (chordRelationTimer.current !== null) {
      window.clearTimeout(chordRelationTimer.current);
      chordRelationTimer.current = null;
    }
    setChordRelationFlash(null);
    if (inactiveGap > 200) return;

    const previousPitchClass = ((previousNote + 21) % 12 + 12) % 12;
    const currentPitchClass = ((currentActiveNote + 21) % 12 + 12) % 12;
    const interval = (currentPitchClass - previousPitchClass + 12) % 12;
    const reverseInterval = (previousPitchClass - currentPitchClass + 12) % 12;
    const relationship = interval === 4
      ? { rootNote: previousNote, otherNote: currentActiveNote, rootPitchClass: previousPitchClass, className: "major-third" }
      : interval === 3
        ? { rootNote: previousNote, otherNote: currentActiveNote, rootPitchClass: previousPitchClass, className: "minor-third" }
        : interval === 7
          ? { rootNote: previousNote, otherNote: currentActiveNote, rootPitchClass: previousPitchClass, className: "perfect-fifth" }
          : reverseInterval === 4
            ? { rootNote: currentActiveNote, otherNote: previousNote, rootPitchClass: currentPitchClass, className: "major-third" }
            : reverseInterval === 3
              ? { rootNote: currentActiveNote, otherNote: previousNote, rootPitchClass: currentPitchClass, className: "minor-third" }
              : reverseInterval === 7
                ? { rootNote: currentActiveNote, otherNote: previousNote, rootPitchClass: currentPitchClass, className: "perfect-fifth" }
                : null;
    if (!relationship) return;

    const allowedRoot = isInteractive
      ? activeKeyInfo
        ? relationship.rootPitchClass === activeKeyInfo.tonic
        : selectedTonic === "none" || relationship.rootPitchClass === selectedTonic
      : showChordLines === "all" || relationship.rootPitchClass === tonic;
    if (!allowedRoot) return;

    setChordRelationFlash(relationship);
    chordRelationTimer.current = window.setTimeout(() => {
      setChordRelationFlash(null);
      chordRelationTimer.current = null;
    }, 600);
  }, [
    activeKeyInfo?.tonic,
    currentActiveNote,
    isInteractive,
    selectedTonic,
    showChordLines,
    tonic,
  ]);

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
  const chordLines = (isInteractive ? showChordLinesInInteractive : tonic !== undefined && showChordLines !== "none")
    ? [...activeNoteByPitchClass.entries()]
      .filter(([rootPitchClass]) => {
        if (isInteractive) {
          if (activeKeyInfo) {
            return rootPitchClass === activeKeyInfo.tonic;
          }
          return selectedTonic === "none" || rootPitchClass === selectedTonic;
        }
        return showChordLines === "all" || rootPitchClass === tonic;
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
  if (chordRelationFlash && showChordLines !== "none") {
    const interval = chordRelationFlash.className === "perfect-fifth" ? 7 : chordRelationFlash.className === "major-third" ? 4 : 3;
    const rootOffset = interval === 7 ? -angleStep * 0.18 : angleStep * 0.18;
    const rootPoint = getNotePoint(chordRelationFlash.rootNote, rootOffset);
    const otherPoint = getNotePoint(chordRelationFlash.otherNote, -rootOffset);
    chordLines.push({
      className: `${chordRelationFlash.className} is-flashing`,
      points: `${rootPoint.x},${rootPoint.y} ${center},${centerY} ${otherPoint.x},${otherPoint.y}`,
    });
  }

  const sectorCorners = (inner: number, outer: number, angle: number) => {
    const startRadiusDelta = spiralRadiusOffset(angle - sectorWidth / 2);
    const endRadiusDelta = spiralRadiusOffset(angle + sectorWidth / 2);
    return {
      start: point(inner + startRadiusDelta, angle - sectorWidth / 2),
      end: point(inner + endRadiusDelta, angle + sectorWidth / 2),
      outerStart: point(outer + startRadiusDelta, angle - sectorWidth / 2),
      outerEnd: point(outer + endRadiusDelta, angle + sectorWidth / 2),
    };
  };

  const sectorPath = (inner: number, outer: number, angle: number) => {
    const { start, end, outerStart, outerEnd } = sectorCorners(inner, outer, angle);
    return [
      `M ${start.x} ${start.y}`,
      `A ${inner} ${inner} 0 0 1 ${end.x} ${end.y}`,
      `L ${outerEnd.x} ${outerEnd.y}`,
      `A ${outer} ${outer} 0 0 0 ${outerStart.x} ${outerStart.y}`,
      "Z",
    ].join(" ");
  };

  const chromaStickPath = (index: number) => {
    const rings = Array.from({ length: octaveCount }, (_, octaveOffset) => {
      const inner = innerRadius + (octaveCount - octaveOffset - 1) * (ringDepth + ringGap);
      const outer = inner + ringDepth;
      const angle = -Math.PI / 2 + index * angleStep;
      return { inner, outer, corners: sectorCorners(inner, outer, angle) };
    });
    const path = [];
    const outermost = rings[0];
    const innermost = rings[rings.length - 1];

    path.push(`M ${outermost.corners.outerStart.x} ${outermost.corners.outerStart.y}`);
    path.push(`A ${outermost.outer} ${outermost.outer} 0 0 1 ${outermost.corners.outerEnd.x} ${outermost.corners.outerEnd.y}`);
    rings.forEach((ring, ringIndex) => {
      path.push(`L ${ring.corners.end.x} ${ring.corners.end.y}`);
      if (ringIndex < rings.length - 1) {
        const nextRing = rings[ringIndex + 1];
        path.push(`L ${nextRing.corners.outerEnd.x} ${nextRing.corners.outerEnd.y}`);
      }
    });
    path.push(`A ${innermost.inner} ${innermost.inner} 0 0 0 ${innermost.corners.start.x} ${innermost.corners.start.y}`);
    for (let ringIndex = rings.length - 1; ringIndex >= 0; ringIndex--) {
      const ring = rings[ringIndex];
      path.push(`L ${ring.corners.outerStart.x} ${ring.corners.outerStart.y}`);
      if (ringIndex > 0) {
        const nextRing = rings[ringIndex - 1];
        path.push(`L ${nextRing.corners.start.x} ${nextRing.corners.start.y}`);
      }
    }
    path.push("Z");
    return path.join(" ");
  };

  const highlightedChromaSticks = NOTE_NAMES.flatMap((_, index) => {
    const isFocus = isInteractive
      ? (activeKeyInfo ? activeKeyInfo.tonic === index : selectedTonic === index)
      : (showKey || emphasizeTonic) && tonic === index;
    const isInKey = isInteractive
      ? inKey.has(index)
      : showKey && inKey.has(index);
    if (!isFocus && !isInKey) return [];
    return [{
      index,
      d: chromaStickPath(index),
      stroke: isFocus ? "#ffffff" : "#f2c84b",
      strokeWidth: isFocus ? 2.5 : 1.5,
    }];
  });
  const hasHighlightedChroma = highlightedChromaSticks.length > 0;

  const currentTonic = isInteractive
    ? activeKeyInfo
      ? activeKeyInfo.tonic
      : selectedTonic
    : tonic;
  const ariaLabel = isInteractive
    ? `Custom chromatic key map${activeChordKey
      ? ` (${activeChordKey})`
      : selectedTonic !== "none"
        ? ` (${NOTE_NAMES[selectedTonic]} ${selectedScale})`
        : ""
    }`
    : `${keyLabel ?? ""} chromatic key map`;

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
        aria-label={isInteractive ? "Clickable five-octave chromatic map" : `${keyLabel ?? ""} twelve-prong spiral`}
      >
        <defs>
          <marker
            id={arrowMarkerId}
            markerHeight="8"
            markerWidth="8"
            orient="auto"
            refX="8"
            refY="4"
            viewBox="0 0 12 8"
          >
            <path d="M 4 0 L 12 4 L 4 8 Z" fill="currentColor" />
          </marker>
        </defs>
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
                : (showKey || emphasizeTonic) && tonic === index;
              const fillOpacity = isActive ? 1 : isFocus ? 0.45 : isInKey ? 0.4 : hasHighlightedChroma ? 0.1 : 0.25;
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
                  className={`chromatone-note ${isInteractive ? "custom-note " : ""}${isActive && (isInteractive || showNotes) ? "is-active" : ""
                    }`}
                  d={sectorPath(inner, outer, angle)}
                  fill={RAINBOW_COLORS[index]}
                  fillOpacity={fillOpacity}
                  key={`${octave}-${noteName}`}
                  stroke="none"
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
        <g className="chromatone-stick-outlines" aria-hidden="true" pointerEvents="none">
          {highlightedChromaSticks.map((stick) => (
            <path
              d={stick.d}
              fill="none"
              key={stick.index}
              stroke={stick.stroke}
              strokeLinejoin="round"
              strokeWidth={stick.strokeWidth}
            />
          ))}
        </g>
        {directionPath && (
          <path
            className="chromatone-note-direction"
            d={directionPath}
            fill="none"
            markerEnd={`url(#${arrowMarkerId})`}
            pointerEvents="none"
          />
        )}
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
