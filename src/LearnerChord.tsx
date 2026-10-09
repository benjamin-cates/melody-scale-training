import { useEffect, useRef, useState } from "react";
import { getAudioContext, noteLabel, playTone } from "./audio/audio";
import { Chromatone } from "./audio/Chromatone";
import { NOTE_NAMES } from "./audio/music";

type GuidanceMode = "visual" | "auditory";
type PlaybackMode = "arpeggio" | "melody";

type ChordTrial = {
  id: string;
  root: number;
  firstInterval: 4;
  secondInterval: 3 | 4 | 7;
  mode: PlaybackMode;
};

type ChordTrialResult = {
  trialId: string;
  root: number;
  firstInterval: 4;
  secondInterval: 3 | 4 | 7;
  mode: PlaybackMode;
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

function chordNotes(root: number, chordType: 3 | 4 | 7) {
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
  const mode = Math.random() < 0.5 ? "arpeggio" : "melody";
  return {
    id: `chord-${Date.now()}-${Math.random().toString(36).slice(2)}`,
    root: Math.floor(Math.random() * 12),
    firstInterval: 4,
    secondInterval,
    mode,
  };
}

function useChordPlayer() {
  const oscillators = useRef<OscillatorNode[]>([]);
  const timers = useRef<number[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeNotes, setActiveNotes] = useState<number[]>([]);

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

  const scheduleChord = (notes: number[], chordStart: number, currentTime: number, mode: PlaybackMode) => {
    const noteDuration = mode === "arpeggio" ? 0.45 : 0.7;
    const step = mode === "arpeggio" ? noteDuration - 0.05 : 0;
    notes.forEach((note, index) => {
      const noteStart = chordStart + index * step;
      oscillators.current.push(playTone(note, noteStart, noteDuration));
      const startDelay = Math.max((noteStart - currentTime) * 1000, 0);
      const endDelay = Math.max((noteStart + noteDuration - currentTime) * 1000, 0);
      timers.current.push(window.setTimeout(
        () => setActiveNotes((active) => active.includes(note) ? active : [...active, note]),
        startDelay,
      ));
      timers.current.push(window.setTimeout(
        () => setActiveNotes((active) => active.filter((activeNote) => activeNote !== note)),
        endDelay,
      ));
    });
    return (notes.length - 1) * step + noteDuration;
  };

  const playChord = (notes: number[], mode: PlaybackMode) => {
    stop();
    const context = getAudioContext();
    void context.resume();
    const start = context.currentTime + 0.05;
    setIsPlaying(true);
    const span = scheduleChord(notes, start, context.currentTime, mode);
    timers.current.push(window.setTimeout(() => setIsPlaying(false), span * 1000 + 150));
  };

  const playChordPair = (first: number[], second: number[], mode: PlaybackMode) => {
    stop();
    const context = getAudioContext();
    void context.resume();
    const start = context.currentTime + 0.05;
    setIsPlaying(true);
    const firstSpan = scheduleChord(first, start, context.currentTime, mode);
    const secondStart = start + firstSpan + 0.25;
    const secondSpan = scheduleChord(second, secondStart, context.currentTime, mode);
    timers.current.push(
      window.setTimeout(
        () => setIsPlaying(false),
        Math.max(0, (secondStart + secondSpan - context.currentTime) * 1000) + 150,
      ),
    );
  };

  useEffect(() => stop, []);

  return { playChord, playChordPair, isPlaying, activeNotes, stop };
}

function ChordVisual({
  guidance,
  root,
  chordType,
  activeNotes,
  revealChordType = true,
}: {
  guidance: GuidanceMode;
  root: number;
  chordType: 3 | 4 | 7 | null;
  activeNotes: number[];
  revealChordType?: boolean;
}) {
  if (guidance === "auditory") {
    return null;
  }
  return (
    <Chromatone
      activeNotes={activeNotes.length > 0 ? [{ noteIndices: activeNotes, duration: 1 }] : []}
      tonic={chordType ? root : undefined}
      showKey={false}
      showNotes
      emphasizeTonic
      showChordLines="tonic-only"
    />
  );
}

export function LearnerChord({
  guidanceMode,
  instructionOnly = false,
  onResults,
}: {
  guidanceMode?: GuidanceMode;
  instructionOnly?: boolean;
  onResults?: (results: Record<string, unknown>) => void;
} = {}) {
  const [guidance, setGuidance] = useState<GuidanceMode>(guidanceMode ?? "visual");
  const [playgroundRoot, setPlaygroundRoot] = useState(0);
  const [playgroundType, setPlaygroundType] = useState<3 | 4 | 7>(3);
  const [playgroundMode, setPlaygroundMode] = useState<PlaybackMode>("melody");
  const [exampleTrial, setExampleTrial] = useState(createExampleTrial);
  const [exampleGuess, setExampleGuess] = useState<"same" | "different" | null>(null);
  const [exampleResults, setExampleResults] = useState<ChordTrialResult[]>([]);
  const exampleStartedAt = useRef(Date.now());
  const exampleReplayEvents = useRef<number[]>([0]);
  const [visualChord, setVisualChord] = useState({
    root: 0,
    chordType: 3 as 3 | 4 | 7,
    revealChordType: true,
  });

  const player = useChordPlayer();

  useEffect(() => {
    if (instructionOnly) return;
    exampleStartedAt.current = Date.now();
    exampleReplayEvents.current = [0];
    setVisualChord({ root: exampleTrial.root, chordType: exampleTrial.secondInterval, revealChordType: false });
    player.playChordPair(
      chordNotes(exampleTrial.root, exampleTrial.firstInterval),
      chordNotes(exampleTrial.root, exampleTrial.secondInterval),
      exampleTrial.mode,
    );
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
          A chord is a combination of notes played together or in rapid sequence (an arpeggio). We
          will focus on three core intervals built from a root note and one other note.
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
            {exampleGuess === null
              ? "Listen to both chords, then decide if they are the same or different."
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
                Date.now() - exampleStartedAt.current,
              ];
              setVisualChord({ root: exampleTrial.root, chordType: exampleTrial.secondInterval, revealChordType: false });
              player.playChordPair(
                chordNotes(exampleTrial.root, exampleTrial.firstInterval),
                chordNotes(exampleTrial.root, exampleTrial.secondInterval),
                exampleTrial.mode,
              );
            }}
          >
            Hear example again
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
                disabled={exampleGuess === correctAnswer}
                onChange={() => {
                  setExampleGuess(answer);
                  setExampleResults((previous) => [
                    ...previous,
                    {
                      trialId: exampleTrial.id,
                      root: exampleTrial.root,
                      firstInterval: exampleTrial.firstInterval,
                      secondInterval: exampleTrial.secondInterval,
                      mode: exampleTrial.mode,
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
          Choose a starting note, interval, and presentation, then play the selection before trying the examples.
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
              <div className="note-tone-row">
                <span className="explorer-picker-label">Presentation:</span>
                <div className="explorer-button-row note-tone-options" aria-label="Presentation">
                  {(["melody", "arpeggio"] as const).map((mode) => (
                    <button
                      aria-pressed={playgroundMode === mode}
                      className={playgroundMode === mode ? "explorer-picker-button is-selected" : "explorer-picker-button"}
                      key={mode}
                      type="button"
                      onClick={() => setPlaygroundMode(mode)}
                    >
                      {mode === "melody" ? "Chord" : "Arpeggio"}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <button
              className="primary-button note-play-selection"
              type="button"
              onClick={() => {
                setVisualChord({ root: playgroundRoot, chordType: playgroundType, revealChordType: true });
                player.playChord(chordNotes(playgroundRoot, playgroundType), playgroundMode);
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
              revealChordType={visualChord.revealChordType}
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
          <h2>Examples</h2>
          {renderExamples()}
          {onResults && (
            <div className="lesson-actions continue-only">
              <button
                className="primary-button"
                type="button"
                onClick={() =>
                  onResults({
                    completedAt: new Date().toISOString(),
                    guidance,
                    examples: exampleResults,
                  })
                }
              >
                Continue
              </button>
            </div>
          )}
        </article>
      </div>
    </section>
  );
}
