import { useEffect, useRef, useState } from "react";
import { getAudioBus, getAudioContext, noteLabel, playTone } from "./audio/audio";
import { Chromatone } from "./audio/Chromatone";
import { NOTE_NAMES } from "./audio/music";

type GuidanceMode = "visual" | "auditory";
type Direction = "increasing" | "decreasing";

type PitchTrial = {
  id: string;
  firstNote: number;
  secondNote: number;
};

type TrialResult = {
  trialId: string;
  gap: number;
  firstNote: number;
  secondNote: number;
  correctAnswer: Direction;
  answer: Direction;
};

const MIDDLE_C = 39;
const PLAYGROUND_INTERVALS = [-4, -2, -1, 1, 2, 4];

function createExampleTrial(): PitchTrial {
  const gap = ([4, 2, 1] as const)[Math.floor(Math.random() * 3)];
  const direction = Math.random() < 0.5 ? "increasing" : "decreasing";
  const firstNote = MIDDLE_C + Math.floor(Math.random() * 12);
  return {
    id: `example-${Date.now()}-${Math.random().toString(36).slice(2)}`,
    firstNote,
    secondNote: firstNote + (direction === "increasing" ? gap : -gap),
  };
}


function usePitchPlayer() {
  const oscillators = useRef<OscillatorNode[]>([]);
  const timers = useRef<number[]>([]);
  const [activeNote, setActiveNote] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
    setActiveNote(null);
    setIsPlaying(false);
  };

  const play = (notes: number[]) => {
    stop();
    const noteDuration = 0.7;
    const gap = -0.1;
    const context = getAudioContext();
    void context.resume();
    const start = context.currentTime + 0.05;
    setIsPlaying(true);
    notes.forEach((note, index) => {
      const noteStart = start + index * (noteDuration + gap);
      oscillators.current.push(playTone(note, noteStart, noteDuration, oscillators.current));
      const delayMs = Math.max((noteStart - context.currentTime) * 1000, 0);
      timers.current.push(window.setTimeout(() => setActiveNote(note), delayMs));
    });
    const totalMs = notes.length * (noteDuration + gap) * 1000;
    timers.current.push(
      window.setTimeout(() => {
        setActiveNote(null);
        setIsPlaying(false);
      }, totalMs),
    );
  };

  useEffect(() => stop, []);

  return { play, stop, activeNote, isPlaying };
}

function NoteVisual({ guidance, activeNote }: { guidance: GuidanceMode; activeNote: number | null }) {
  if (guidance === "auditory") {
    return null;
  }
  return (
    <Chromatone
      activeNotes={activeNote !== null ? [{ noteIndices: [activeNote], duration: 1 }] : []}
      showKey={false}
      showNotes
    />
  );
}

export function LearnerNote({
  guidanceMode,
  instructionOnly = false,
  onResults,
}: {
  guidanceMode?: GuidanceMode;
  instructionOnly?: boolean;
  onResults?: (results: Record<string, unknown>) => void;
} = {}) {
  const [guidance, setGuidance] = useState<GuidanceMode>(guidanceMode ?? "visual");
  const [playgroundStart, setPlaygroundStart] = useState(0);
  const [playgroundInterval, setPlaygroundInterval] = useState(4);
  const [exampleTrial, setExampleTrial] = useState(createExampleTrial);
  const [exampleGuess, setExampleGuess] = useState<Direction | null>(null);
  const [exampleResults, setExampleResults] = useState<TrialResult[]>([]);

  const player = usePitchPlayer();

  useEffect(() => {
    if (instructionOnly) return;
    player.play([exampleTrial.firstNote, exampleTrial.secondNote]);
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
        Auditory (octave numbers)
      </label>
    </div>
  );

  function renderDescription() {
    return (
      <>
        <h2>Rising and falling tones</h2>
        <p className="lesson-body">
          This lesson will teach you to recognize rising and falling tones through practice. An
          octave is a step meaning to double or half the frequency. In the western music system,
          the octave is split equally into twelve equal steps. A sharp moves one step higher. A
          flat moves one step lower. The Middle C serves as a reference pitch.
        </p>
        {!guidanceMode && guidanceToggle}
        <p className="lesson-body">
          {guidance === "visual"
            ? "Pitches are arranged on a continuous spiral. Each full turn represents one octave. Moving clockwise indicates a higher pitch; moving counter-clockwise indicates a lower pitch. Outermost layers represent lower octaves, spiraling inward to higher octaves."
            : "Notes use octave numbers (e.g. C4 for Middle C, C5 for one octave higher). Higher numbers indicate higher frequencies."}
        </p>
        <p className="lesson-body">
          Identify whether each two-note sequence is increasing or decreasing in pitch.
        </p>
      </>
    );
  }

  function renderPractice() {
    return (
      <>
        {renderDescription()}
        <p className="lesson-body">
          Choose a starting note and an interval, then play the sequence to explore how each step
          sounds and looks.
        </p>
        <div className={`note-practice-layout${guidance === "visual" ? " has-visualizer" : ""}`}>
          <div className="note-practice-picker-panel">
            <h3 className="note-practice-picker-title">Playground</h3>
            <div className={`note-practice-pickers${guidance === "visual" ? " has-visualizer" : ""}`}>
              <div className="explorer-picker-group">
                <span className="explorer-picker-label">Note</span>
                <div className="explorer-button-row" aria-label="Starting note">
                  {NOTE_NAMES.map((name, pitchClass) => (
                    <button
                      className={playgroundStart === pitchClass ? "explorer-picker-button is-selected" : "explorer-picker-button"}
                      key={name}
                      type="button"
                      onClick={() => setPlaygroundStart(pitchClass)}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              </div>
              <div className="explorer-picker-group">
                <span className="explorer-picker-label">Interval</span>
                <div className="explorer-button-row" aria-label="Interval">
                  {PLAYGROUND_INTERVALS.map((interval) => (
                    <button
                      className={"explorer-picker-button"}
                      key={interval}
                      type="button"
                      onClick={() => {
                        setPlaygroundInterval(interval);
                        player.play([
                          MIDDLE_C + playgroundStart,
                          MIDDLE_C + playgroundStart + interval,
                        ]);
                      }}
                    >
                      {interval > 0 ? `Up ${interval}` : `Down ${Math.abs(interval)}`}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="note-practice-visualizer">
            <NoteVisual
              guidance={guidance}
              activeNote={player.activeNote}
            />
          </div>
        </div>
        <h2>Example questions</h2>
        <div className="example-prompt-row">
          <p className="sequence-status" aria-live="polite">
            {exampleGuess === null
              ? "Listen, then choose a direction."
              : exampleGuess === (exampleTrial.secondNote > exampleTrial.firstNote ? "increasing" : "decreasing")
                ? "Correct"
                : "Not quite. Listen again and try the other direction."}
          </p>
          <button
            className="secondary-button"
            type="button"
            onClick={() => player.play([exampleTrial.firstNote, exampleTrial.secondNote])}
          >
            Hear example
          </button>
        </div>
        <div className="choice-row" role="radiogroup" aria-label="Example direction">
          {(["increasing", "decreasing"] as const).map((direction) => {
            const correctDirection = exampleTrial.secondNote > exampleTrial.firstNote ? "increasing" : "decreasing";
            return (
              <label
                className={`${exampleGuess === direction ? "selected" : ""}${exampleGuess === correctDirection ? " locked" : ""}`}
                key={direction}
              >
                <input
                  type="radio"
                  name="example-answer"
                  checked={exampleGuess === direction}
                  disabled={exampleGuess === correctDirection}
                  onChange={() => {
                    setExampleGuess(direction);
                    setExampleResults((previous) => [
                      ...previous,
                      {
                        trialId: exampleTrial.id,
                        gap: Math.abs(exampleTrial.secondNote - exampleTrial.firstNote),
                        firstNote: exampleTrial.firstNote,
                        secondNote: exampleTrial.secondNote,
                        correctAnswer: correctDirection,
                        answer: direction,
                      },
                    ]);
                    if (direction === correctDirection) {
                      window.setTimeout(() => setExampleTrial(createExampleTrial()), 1000);
                    }
                  }}
                />
                {direction === "increasing" ? "Increasing" : "Decreasing"}
              </label>
            );
          })}
        </div>
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
      </>
    );
  }

  if (instructionOnly) {
    return (
      <section className="page-section learner-page">
        <div className="lesson-track">
          <article className="lesson-card">
            {renderDescription()}
            <div className="lesson-actions continue-only">
              <button
                className="primary-button"
                type="button"
                onClick={() => onResults?.({ completedAt: new Date().toISOString(), guidance })}
              >
                Continue to interleaved practice
              </button>
            </div>
          </article>
        </div>
      </section>
    );
  }

  return (
    <section className="page-section learner-page">
      <div className="lesson-track">
        <article className="lesson-card">
          {renderPractice()}
        </article>
      </div>
    </section>
  );
}
