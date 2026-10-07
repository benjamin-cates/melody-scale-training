import { useEffect, useRef, useState } from "react";
import { getAudioContext, noteLabel, playTone } from "./audio/audio";
import { Chromatone } from "./audio/Chromatone";
import { NOTE_NAMES } from "./audio/music";

type GuidanceMode = "visual" | "auditory";
type PlaybackMode = "arpeggio" | "melody";

type ChordTrial = {
  id: string;
  root: number;
  chordType: 3 | 4 | 7;
  mode: PlaybackMode;
};

type ChordTrialResult = {
  trialId: string;
  root: number;
  mode: PlaybackMode;
  correctAnswer: 3 | 4 | 7;
  answer: 3 | 4 | 7;
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

function createExampleTrial(): ChordTrial {
  const chordType = CHORD_TYPES[Math.floor(Math.random() * CHORD_TYPES.length)];
  const mode = Math.random() < 0.5 ? "arpeggio" : "melody";
  return {
    id: `chord-${Date.now()}-${Math.random().toString(36).slice(2)}`,
    root: Math.floor(Math.random() * 12),
    chordType,
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
      oscillators.current.push(playTone(note, noteStart, noteDuration, oscillators.current));
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

  useEffect(() => stop, []);

  return { playChord, isPlaying, activeNotes, stop };
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
  const [exampleGuess, setExampleGuess] = useState<3 | 4 | 7 | null>(null);
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
    setVisualChord({ root: exampleTrial.root, chordType: exampleTrial.chordType, revealChordType: false });
    player.playChord(chordNotes(exampleTrial.root, exampleTrial.chordType), exampleTrial.mode);
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
          will focus on three core intervals built from a root note. The major third has an
          interval size of 4 steps above the root and sounds {CHORD_DEFS[4].mood}. The minor
          third has an interval size of 3 steps and sounds {CHORD_DEFS[3].mood}. The perfect
          fifth has a gap of 7 steps and sounds {CHORD_DEFS[7].mood}.
        </p>
        {!guidanceMode && guidanceToggle}
        <p className="lesson-body">
          {guidance === "visual"
            ? "Chords are shown as connected notes on the spiral. The white outline marks the root note. The perfect fifth line is purple, the major third line is yellow, and the minor third line is blue."
            : "The names of the notes, the chord type, and the separation distance are shown on the screen."}
        </p>
      </>
    );
  }

  function renderExamples() {
    const correctDef = CHORD_DEFS[exampleTrial.chordType];
    return (
      <>
        <div className="example-prompt-row">
          <p className="sequence-status" aria-live="polite">
            {exampleGuess === null
              ? "Listen, then choose an interval."
              : exampleGuess === exampleTrial.chordType
                ? `Correct: ${correctDef.label}.`
                : "Not quite. Try another interval."}
          </p>
          <button
            className="secondary-button"
            type="button"
            onClick={() => {
              exampleReplayEvents.current = [
                ...exampleReplayEvents.current,
                Date.now() - exampleStartedAt.current,
              ];
              setVisualChord({ root: exampleTrial.root, chordType: exampleTrial.chordType, revealChordType: false });
              player.playChord(chordNotes(exampleTrial.root, exampleTrial.chordType), exampleTrial.mode);
            }}
          >
            Hear example again
          </button>
        </div>
        <div className="choice-row" role="radiogroup" aria-label="Chord interval">
          {CHORD_TYPES.map((chordType) => (
            <label
              className={`${exampleGuess === chordType ? "selected" : ""}${exampleGuess === exampleTrial.chordType ? " locked" : ""}`}
              key={chordType}
            >
              <input
                type="radio"
                name="chord-example-answer"
                checked={exampleGuess === chordType}
                disabled={exampleGuess === exampleTrial.chordType}
                onChange={() => {
                  setExampleGuess(chordType);
                  setExampleResults((previous) => [
                    ...previous,
                    {
                      trialId: exampleTrial.id,
                      root: exampleTrial.root,
                      mode: exampleTrial.mode,
                      correctAnswer: exampleTrial.chordType,
                      answer: chordType,
                      replayEvents: [...exampleReplayEvents.current],
                    },
                  ]);
                  if (chordType === exampleTrial.chordType) {
                    window.setTimeout(() => setExampleTrial(createExampleTrial()), 500);
                  }
                }}
              />
              {CHORD_DEFS[chordType].label}
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
          Choose a root note and a chord. Play each chord as a melody or an arpeggio.
        </p>
        <div className={`note-practice-layout chord-practice-layout${guidance === "visual" ? " has-visualizer" : ""}`}>
          <div className="note-practice-picker-panel">
            <h3 className="note-practice-picker-title">Playground</h3>
            <div className={`note-practice-pickers chord-playground-pickers${guidance === "visual" ? " has-visualizer" : ""}`}>
              <div className="explorer-picker-group">
                <span className="explorer-picker-label">Root</span>
                <div className="explorer-button-row chord-root-row" aria-label="Root note">
                  {NOTE_NAMES.map((name, pitchClass) => (
                    <button
                      className={playgroundRoot === pitchClass ? "explorer-picker-button is-selected" : "explorer-picker-button"}
                      key={name}
                      type="button"
                      onClick={() => {
                        setPlaygroundRoot(pitchClass);
                        setVisualChord({ root: pitchClass, chordType: playgroundType, revealChordType: true });
                      }}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              </div>
              <div className="chord-mode-categories">
                {(["melody", "arpeggio"] as const).map((mode) => (
                  <section className="chord-mode-category" key={mode}>
                    <span className="explorer-picker-label">
                      {mode === "melody" ? "Chord" : "Arpeggio"}
                    </span>
                    <div className="explorer-button-row chord-mode-button-row" aria-label={`${mode} chord types`}>
                      {CHORD_TYPES.map((chordType) => (
                        <button
                          className={"explorer-picker-button"}
                          key={chordType}
                          type="button"
                          onClick={() => {
                            setPlaygroundType(chordType);
                            setPlaygroundMode(mode);
                            setVisualChord({ root: playgroundRoot, chordType, revealChordType: true });
                            player.playChord(chordNotes(playgroundRoot, chordType), mode);
                          }}
                        >
                          {CHORD_DEFS[chordType].label}
                        </button>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
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
