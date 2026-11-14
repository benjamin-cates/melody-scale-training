import { useEffect, useRef, useState } from "react";
import { getAudioContext, playTone, type AudioVoice } from "./audio/audio";
import { CHORD_SEQUENCE_DURATION, CHORD_SEQUENCE_GAP, getChordPlaybackEvents } from "./audio/chord-playback";
import { Chromatone } from "./audio/Chromatone";
import { NOTE_NAMES } from "./audio/music";
import { LessonContinue, useLessonTimer } from "./LessonContinue.tsx";

type GuidanceMode = "visual" | "auditory";

type ChordTrial = {
  id: string;
  root: number;
  firstInterval: 4;
  secondInterval: 3 | 4 | 7;
  presentation: "note-note-chord";
};

type ChordTrialResult = {
  trialId: string;
  root: number;
  firstInterval: 4;
  secondInterval: 3 | 4 | 7;
  presentation: "note-note-chord";
  correctAnswer: "same" | "different";
  answer: "same" | "different";
  replayEvents: number[];
};

const MIDDLE_C = 39;

const CHORD_TYPES: (3 | 4 | 7)[] = [3, 4, 7];

const CHORD_DEFS: Record<3 | 4 | 7, { label: string; interval: number; mood: string }> = {
  4: { label: "Major third", interval: 4, mood: "bright, cheerful, or peaceful" },
  3: { label: "Minor third", interval: 3, mood: "somber, tense, or sad" },
  7: { label: "Perfect fifth", interval: 7, mood: "open and neutral" },
};

function chordNotes(root: number, chordType: 3 | 4 | 7): [number, number] {
  const rootNote = MIDDLE_C + root;
  return [rootNote, rootNote + chordType];
}

function ChordIntervalSignal({ chordType, angle }: { chordType: 3 | 4 | 7; angle: number }) {
  const center = 18;
  const radius = 14;
  const endpointAngle = (-90 + angle) * Math.PI / 180;
  const endpointX = center + Math.cos(endpointAngle) * radius;
  const endpointY = center + Math.sin(endpointAngle) * radius;
  const relationshipClass = chordType === 3
    ? "minor-third"
    : chordType === 4
      ? "major-third"
      : "perfect-fifth";

  return (
    <svg className="chord-interval-signal" viewBox="0 0 36 36" aria-hidden="true">
      <circle className="chord-interval-ring" cx={center} cy={center} r={radius} />
      <polyline
        className={`chord-interval-line ${relationshipClass}`}
        points={`${center},${center - radius} ${center},${center} ${endpointX},${endpointY}`}
      />
      <circle className="chord-interval-node" cx={center} cy={center - radius} r="2.5" />
      <circle className="chord-interval-node" cx={endpointX} cy={endpointY} r="2.5" />
    </svg>
  );
}

function createExampleTrial(): ChordTrial {
  const secondInterval = CHORD_TYPES[Math.floor(Math.random() * CHORD_TYPES.length)];
  return {
    id: `chord-${Date.now()}-${Math.random().toString(36).slice(2)}`,
    root: Math.floor(Math.random() * 12),
    firstInterval: 4,
    secondInterval,
    presentation: "note-note-chord",
  };
}

function useChordPlayer() {
  const oscillators = useRef<AudioVoice[]>([]);
  const timers = useRef<number[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeNotes, setActiveNotes] = useState<number[]>([]);
  const [noteAttack, setNoteAttack] = useState<{ id: number; noteIndices: number[] } | null>(null);

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
    timers.current.forEach((timer) => window.clearTimeout(timer));
    timers.current = [];
    setIsPlaying(false);
    setActiveNotes([]);
  };

  const scheduleChord = (notes: [number, number], chordStart: number, currentTime: number) => {
    const events = getChordPlaybackEvents(notes);
    events.forEach((event) => {
      const eventStart = chordStart + event.onset;
      oscillators.current.push(...event.noteIndices.map((note) => playTone(note, eventStart, event.duration)));
      const startDelay = Math.max((eventStart - currentTime) * 1000, 0);
      const endDelay = Math.max((eventStart + event.duration - currentTime) * 1000, 0);
      timers.current.push(window.setTimeout(() => {
        setActiveNotes(event.noteIndices);
        setNoteAttack((attack) => ({
          id: (attack?.id ?? 0) + 1,
          noteIndices: [...event.noteIndices],
        }));
      }, startDelay));
      timers.current.push(window.setTimeout(() => setActiveNotes([]), endDelay));
    });
    return CHORD_SEQUENCE_DURATION;
  };

  const playChord = (notes: [number, number]) => {
    stop();
    const context = getAudioContext();
    void context.resume();
    const start = context.currentTime + 0.05;
    setIsPlaying(true);
    const span = scheduleChord(notes, start, context.currentTime);
    timers.current.push(window.setTimeout(() => setIsPlaying(false), span * 1000 + 150));
  };

  const playChordPair = (first: [number, number], second: [number, number]) => {
    stop();
    const context = getAudioContext();
    void context.resume();
    const start = context.currentTime + 0.05;
    setIsPlaying(true);
    const firstSpan = scheduleChord(first, start, context.currentTime);
    const secondStart = start + firstSpan + CHORD_SEQUENCE_GAP;
    const secondSpan = scheduleChord(second, secondStart, context.currentTime);
    timers.current.push(
      window.setTimeout(
        () => setIsPlaying(false),
        Math.max(0, (secondStart + secondSpan - context.currentTime) * 1000) + 150,
      ),
    );
  };

  useEffect(() => stop, []);

  return { playChord, playChordPair, isPlaying, activeNotes, noteAttack, stop };
}

function ChordVisual({
  guidance,
  root,
  chordType,
  activeNotes,
  noteAttack,
}: {
  guidance: GuidanceMode;
  root: number;
  chordType: 3 | 4 | 7 | null;
  activeNotes: number[];
  noteAttack: { id: number; noteIndices: number[] } | null;
}) {
  if (guidance === "auditory") {
    return null;
  }
  return (
    <Chromatone
      activeNotes={activeNotes.length > 0 ? [{ noteIndices: activeNotes, duration: 1 }] : []}
      noteAttack={noteAttack}
      tonic={chordType ? root : undefined}
      showKey={false}
      showNotes
      emphasizeTonic
      showChordLines={activeNotes.length === 2 ? "tonic-only" : "none"}
      symbol={"chord"}
    />
  );
}

export function LearnerChord({
  guidanceMode,
  instructionOnly = false,
  timer,
  pauseTimer = false,
  onResults,
}: {
  guidanceMode?: GuidanceMode;
  instructionOnly?: boolean;
  timer?: number;
  pauseTimer?: boolean;
  onResults?: (results: Record<string, unknown>) => void;
} = {}) {
  const [guidance, setGuidance] = useState<GuidanceMode>(guidanceMode ?? "visual");
  const [playgroundRoot, setPlaygroundRoot] = useState(0);
  const [playgroundType, setPlaygroundType] = useState<3 | 4 | 7>(3);
  const [exampleTrial, setExampleTrial] = useState(createExampleTrial);
  const [examplePlayed, setExamplePlayed] = useState(false);
  const [exampleGuess, setExampleGuess] = useState<"same" | "different" | null>(null);
  const [exampleResults, setExampleResults] = useState<ChordTrialResult[]>([]);
  const exampleStartedAt = useRef(Date.now());
  const exampleReplayEvents = useRef<number[]>([0]);
  const [visualChord, setVisualChord] = useState({
    root: 0,
    chordType: 3 as 3 | 4 | 7,
  });
  const remainingSeconds = useLessonTimer(timer, pauseTimer);

  const player = useChordPlayer();

  useEffect(() => {
    if (instructionOnly) return;
    exampleStartedAt.current = Date.now();
    exampleReplayEvents.current = [0];
    setExamplePlayed(false);
    setVisualChord({ root: exampleTrial.root, chordType: exampleTrial.secondInterval });
    setExampleGuess(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [instructionOnly, exampleTrial]);

  const guidanceToggle = (
    <div className="choice-row" role="radiogroup" aria-label="Guidance style">
      <label className={guidance === "visual" ? "selected" : ""}>
        <input
          type="radio"
          name="guidance"
          checked={guidance === "visual"}
          onChange={() => setGuidance("visual")}
        />
        Visual (spiral)
      </label>
      <label className={guidance === "auditory" ? "selected" : ""}>
        <input
          type="radio"
          name="guidance"
          checked={guidance === "auditory"}
          onChange={() => setGuidance("auditory")}
        />
        Auditory (note names)
      </label>
    </div>
  );

  function renderIntro() {
    return (
      <>
        <h2>Simple chords</h2>
        <p className="lesson-body">
          Each chord is played in three steps: the root note, the other note, then both together.
          Compare the two sequences to identify whether their intervals are the same or different.
          We will focus on three core intervals built from a root note and one other note.
        </p>
        {guidance === "visual" && <p className="lesson-body">Chords are visually represented on the spiral as <b>colored connections</b> between notes.</p>}

        <ul className={guidance === "visual" ? "chord-interval-legend" : ""}>
          <li>
            {guidance === "visual" && <ChordIntervalSignal chordType={3} angle={90} />}
            <span><b>Minor third:</b> gap of 3 steps, sounds {CHORD_DEFS[3].mood}.{guidance === "visual" ? " Colored blue." : ""}</span>
          </li>
          <li>
            {guidance === "visual" && <ChordIntervalSignal chordType={4} angle={120} />}
            <span><b>Major third:</b> gap of 4 steps, sounds {CHORD_DEFS[4].mood}.{guidance === "visual" ? " Colored yellow." : ""}</span>
          </li>
          <li>
            {guidance === "visual" && <ChordIntervalSignal chordType={7} angle={210} />}
            <span><b>Perfect fifth:</b> gap of 7 steps, sounds {CHORD_DEFS[7].mood}.{guidance === "visual" ? " Colored purple." : ""}</span>
          </li>
        </ul>

        {!guidanceMode && guidanceToggle}
      </>
    );
  }

  function renderExamples() {
    const correctAnswer = exampleTrial.firstInterval === exampleTrial.secondInterval ? "same" : "different";
    return (
      <>
        <div className="example-prompt-row">
          <p className="sequence-status" aria-live="polite">
            {!examplePlayed
              ? "Press Hear example to listen to both three-step chord sequences."
              : exampleGuess === null
                ? "Listen to both sequences, then decide if the chords are the same or different."
                : exampleGuess === correctAnswer
                  ? `Correct: ${correctAnswer}.`
                  : "Not quite. Listen again and try the other answer."}
          </p>
          <button
            className="secondary-button"
            type="button"
            onClick={() => {
              exampleReplayEvents.current = [
                ...exampleReplayEvents.current,
                ...(examplePlayed ? [Date.now() - exampleStartedAt.current] : []),
              ];
              setExamplePlayed(true);
              setVisualChord({ root: exampleTrial.root, chordType: exampleTrial.secondInterval });
              player.playChordPair(
                chordNotes(exampleTrial.root, exampleTrial.firstInterval),
                chordNotes(exampleTrial.root, exampleTrial.secondInterval),
              );
            }}
          >
            {examplePlayed ? "Hear again" : "Hear example"}
          </button>
        </div>
        <div className="choice-row" role="radiogroup" aria-label="Same or different chords">
          {(["same", "different"] as const).map((answer) => (
            <label
              className={`${exampleGuess === answer ? "selected" : ""}${exampleGuess === correctAnswer ? " locked" : ""}`}
              key={answer}
            >
              <input
                type="radio"
                name="chord-example-answer"
                checked={exampleGuess === answer}
                disabled={!examplePlayed || exampleGuess === correctAnswer}
                onChange={() => {
                  setExampleGuess(answer);
                  setExampleResults((previous) => [
                    ...previous,
                    {
                      trialId: exampleTrial.id,
                      root: exampleTrial.root,
                      firstInterval: exampleTrial.firstInterval,
                      secondInterval: exampleTrial.secondInterval,
                      presentation: exampleTrial.presentation,
                      correctAnswer,
                      answer,
                      replayEvents: [...exampleReplayEvents.current],
                    },
                  ]);
                  if (answer === correctAnswer) {
                    window.setTimeout(() => setExampleTrial(createExampleTrial()), 500);
                  }
                }}
              />
              {answer === "same" ? "Same" : "Different"}
            </label>
          ))}
        </div>
      </>
    );
  }

  function renderPlayground() {
    return (
      <>
        <p className="lesson-body">
          Choose a starting note and interval, then hear the notes individually and together before trying the examples.
        </p>
        <div className="note-practice-layout chord-practice-layout">
          <div className="note-practice-picker-panel">
            <h3 className="note-practice-picker-title">Playground — Tone configuration</h3>
            <div className="note-tone-configuration">
              <div className="note-tone-row">
                <span className="explorer-picker-label">Starting note:</span>
                <div className="explorer-button-row note-tone-options" aria-label="Root note">
                  {NOTE_NAMES.map((name, pitchClass) => (
                    <button
                      aria-pressed={playgroundRoot === pitchClass}
                      className={playgroundRoot === pitchClass ? "explorer-picker-button is-selected" : "explorer-picker-button"}
                      key={name}
                      type="button"
                      onClick={() => setPlaygroundRoot(pitchClass)}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              </div>
              <div className="note-tone-row">
                <span className="explorer-picker-label">Chord interval:</span>
                <div className="explorer-button-row note-tone-options" aria-label="Chord interval">
                  {CHORD_TYPES.map((chordType) => (
                    <button
                      aria-pressed={playgroundType === chordType}
                      className={playgroundType === chordType ? "explorer-picker-button is-selected" : "explorer-picker-button"}
                      key={chordType}
                      type="button"
                      onClick={() => setPlaygroundType(chordType)}
                    >
                      {CHORD_DEFS[chordType].label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <button
              className="primary-button note-play-selection"
              type="button"
              onClick={() => {
                setVisualChord({ root: playgroundRoot, chordType: playgroundType });
                player.playChord(chordNotes(playgroundRoot, playgroundType));
              }}
            >
              Play selection
            </button>
          </div>
          <div className="note-practice-visualizer">
            <ChordVisual
              guidance={guidance}
              root={visualChord.root}
              chordType={visualChord.chordType}
              activeNotes={player.activeNotes}
              noteAttack={player.noteAttack}
            />
          </div>
        </div>
      </>
    );
  }

  return (
    <section className="page-section learner-page">
      <div className="lesson-track">
        <article className="lesson-card">
          {renderIntro()}
          {renderPlayground()}
          <h2>Example questions</h2>
          {renderExamples()}
          {onResults && (
            <div className="lesson-actions continue-only">
              <LessonContinue
                timer={timer}
                remainingSeconds={remainingSeconds}
                onContinue={() =>
                  onResults({
                    completedAt: new Date().toISOString(),
                    guidance,
                    examples: exampleResults,
                  })
                }
              >
                Continue
              </LessonContinue>
            </div>
          )}
        </article>
      </div>
    </section>
  );
}
