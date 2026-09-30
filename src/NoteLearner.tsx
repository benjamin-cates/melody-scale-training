import { useEffect, useRef, useState } from "react";
import { downloadJson } from "./AppRoutes";
import { getAudioBus, getAudioContext, noteLabel, playTone } from "./audio/audio";
import { Chromatone } from "./audio/Chromatone";
import { NOTE_NAMES } from "./audio/music";

type GuidanceMode = "visual" | "auditory";
type Direction = "up" | "down";

type LessonStep =
  | "intro"
  | "task-intro"
  | "examples"
  | "playground"
  | "test-4"
  | "test-2"
  | "test-1"
  | "complete";

type PitchTrial = {
  id: string;
  gap: number;
  startNote: number;
  secondNote: number;
  direction: Direction;
};

type TrialResult = {
  trialId: string;
  gap: number;
  startNote: number;
  secondNote: number;
  correctAnswer: Direction;
  answer: Direction;
  isCorrect: boolean;
};

const STEPS: { id: LessonStep; label: string }[] = [
  { id: "intro", label: "Introduction" },
  { id: "task-intro", label: "The task" },
  { id: "examples", label: "Examples" },
  { id: "playground", label: "Playground" },
  { id: "test-4", label: "4-semitone test" },
  { id: "test-2", label: "2-semitone test" },
  { id: "test-1", label: "1-semitone test" },
  { id: "complete", label: "Complete" },
];

const MIDDLE_C = 39;
const PLAYGROUND_INTERVALS = [-4, -2, -1, 1, 2, 4];

function shuffle<T>(values: T[]) {
  const shuffled = [...values];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function createPitchTrials(gap: number): PitchTrial[] {
  return shuffle(
    NOTE_NAMES.flatMap((_, pitchClass) => {
      const startNote = MIDDLE_C + pitchClass;
      return (["up", "down"] as const).map((direction) => ({
        id: `${gap}-${pitchClass}-${direction}`,
        gap,
        startNote,
        secondNote: startNote + (direction === "up" ? gap : -gap),
        direction,
      }));
    }),
  ).slice(0,12);
}

function createExampleTrials(): PitchTrial[] {
  return shuffle(
    ([4, 2, 1] as const).flatMap((gap) =>
      (["up", "down"] as const).map((direction) => {
        const startNote = MIDDLE_C + Math.floor(Math.random() * 12);
        return {
          id: `example-${gap}-${direction}`,
          gap,
          startNote,
          secondNote: startNote + (direction === "up" ? gap : -gap),
          direction,
        };
      }),
    ),
  );
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

function useSemitoneTest(trials: PitchTrial[]) {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState<Direction | null>(null);
  const [results, setResults] = useState<TrialResult[]>([]);
  const trial = trials[index];

  const submit = () => {
    if (!trial || answer === null) return;
    setResults((previous) => [
      ...previous,
      {
        trialId: trial.id,
        gap: trial.gap,
        startNote: trial.startNote,
        secondNote: trial.secondNote,
        correctAnswer: trial.direction,
        answer,
        isCorrect: answer === trial.direction,
      },
    ]);
    setAnswer(null);
    setIndex((value) => value + 1);
  };

  return { trial, index, answer, setAnswer, results, submit, isDone: !trial };
}

function NoteVisual({ guidance, activeNote, notes }: { guidance: GuidanceMode; activeNote: number | null; notes: number[] }) {
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

export function NoteLearner() {
  const isDebug = new URLSearchParams(window.location.search).get("debug") === "true";
  const [stepIndex, setStepIndex] = useState(0);
  const [guidance, setGuidance] = useState<GuidanceMode>("visual");
  const [playgroundStart, setPlaygroundStart] = useState(0);
  const [playgroundInterval, setPlaygroundInterval] = useState(4);
  const [exampleTrials] = useState(createExampleTrials);
  const [exampleIndex, setExampleIndex] = useState(0);
  const [exampleGuess, setExampleGuess] = useState<Direction | null>(null);
  const [test4Trials] = useState(() => createPitchTrials(4));
  const [test2Trials] = useState(() => createPitchTrials(2));
  const [test1Trials] = useState(() => createPitchTrials(1));

  const player = usePitchPlayer();
  const test4 = useSemitoneTest(test4Trials);
  const test2 = useSemitoneTest(test2Trials);
  const test1 = useSemitoneTest(test1Trials);

  const step = STEPS[stepIndex].id;
  const exampleTrial = exampleTrials[exampleIndex];
  const activeTest = step === "test-4" ? test4 : step === "test-2" ? test2 : step === "test-1" ? test1 : null;

  const goBack = () => setStepIndex((value) => Math.max(value - 1, 0));
  const goNext = () => setStepIndex((value) => Math.min(value + 1, STEPS.length - 1));

  useEffect(() => {
    if (step !== "examples" || !exampleTrial) return;
    player.play([exampleTrial.startNote, exampleTrial.secondNote]);
    setExampleGuess(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, exampleIndex]);

  useEffect(() => {
    if (!activeTest?.trial) return;
    player.play([activeTest.trial.startNote, activeTest.trial.secondNote]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, test4.index, test2.index, test1.index]);

  useEffect(() => {
    if (isDebug) return;
    if (step === "examples" && !exampleTrial) {
      setStepIndex((value) => Math.min(value + 1, STEPS.length - 1));
      return;
    }
    const activeTestIsDone =
      (step === "test-4" && test4.isDone) ||
      (step === "test-2" && test2.isDone) ||
      (step === "test-1" && test1.isDone);
    if (activeTestIsDone) {
      setStepIndex((value) => Math.min(value + 1, STEPS.length - 1));
    }
  }, [isDebug, step, exampleIndex, test4.isDone, test2.isDone, test1.isDone]);

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

  function renderIntro() {
    return (
      <>
        <h2>Rising and falling tones</h2>
        <p className="lesson-body">
          This lesson will teach you to recognize rising and falling tones through practice. An
          octave is a step meaning to double or half the frequency. In the western music system,
          the octave is split equally into twelve equal steps. A sharp moves one step higher. A
          flat moves one step lower. The Middle C serves as a reference pitch.
        </p>
        {guidanceToggle}
        <p className="lesson-body">
          {guidance === "visual"
            ? "Pitches are arranged on a continuous spiral. Each full turn represents one octave. Moving clockwise indicates a higher pitch; moving counter-clockwise indicates a lower pitch. Outermost layers represent lower octaves, spiraling inward to higher octaves."
            : "Notes use octave numbers (e.g. C4 for Middle C, C5 for one octave higher). Higher numbers indicate higher frequencies."}
        </p>
        <NoteVisual guidance={guidance} activeNote={MIDDLE_C} notes={[MIDDLE_C]} />
      </>
    );
  }

  function renderTaskIntro() {
    return (
      <>
        <h2>The task</h2>
        <p className="lesson-body">
          This task will ask you to identify if a sequence of two notes is increasing or
          decreasing in pitch.
        </p>
        <NoteVisual guidance={guidance} activeNote={player.activeNote} notes={[MIDDLE_C, MIDDLE_C + 4]} />
        <div className="test-actions">
          <button
            className="secondary-button"
            type="button"
            onClick={() => player.play([MIDDLE_C, MIDDLE_C + 4])}
          >
            ▲ Hear an increasing pitch
          </button>
          <button
            className="secondary-button"
            type="button"
            onClick={() => player.play([MIDDLE_C, MIDDLE_C - 4])}
          >
            ▼ Hear a decreasing pitch
          </button>
        </div>
      </>
    );
  }

  function renderExamples() {
    if (!exampleTrial) {
      return (
        <>
          <h2>Examples complete</h2>
          <p className="lesson-body">You are ready to try the playground and the tests.</p>
        </>
      );
    }
    const correctLabel = exampleTrial.direction === "up" ? "Increasing" : "Decreasing";
    return (
      <>
        <p>
          Listen to example note sequences. Identify whether the pitch goes Increasing or Decreasing.
        </p>
        <NoteVisual
          guidance={guidance}
          activeNote={player.activeNote}
          notes={[exampleTrial.startNote, exampleTrial.secondNote]}
        />
        <p className="sequence-status" aria-live="polite">
          Answer: this sequence goes {correctLabel}. Click the matching button below.
        </p>
        <div className="choice-row">
          {(["up", "down"] as const).map((direction) => (
            <label
              className={exampleGuess === direction ? "selected" : ""}
              key={direction}
            >
              <input
                type="radio"
                name="example-answer"
                checked={exampleGuess === direction}
                onChange={() => {
                  setExampleGuess(direction);
                  if (direction === exampleTrial.direction) {
                    window.setTimeout(() => setExampleIndex((value) => value + 1), 500);
                  }
                }}
              />
              {direction === "up" ? "Increasing" : "Decreasing"}
            </label>
          ))}
        </div>
        {exampleGuess && exampleGuess !== exampleTrial.direction && (
          <p className="sequence-status">Try clicking {correctLabel} instead.</p>
        )}
        <div className="test-actions">
          <button
            className="secondary-button"
            type="button"
            onClick={() => player.play([exampleTrial.startNote, exampleTrial.secondNote])}
          >
            Hear again
          </button>
          <span className="test-progress" aria-label="Example progress">
            {exampleIndex + 1} / {exampleTrials.length}
          </span>
        </div>
      </>
    );
  }

  function renderPlayground() {
    return (
      <>
        <h2>Playground</h2>
        <p className="lesson-body">
          Choose a starting note and an interval, then play the sequence to explore how each step
          sounds and looks.
        </p>
        <div className="explorer-picker-group">
          <span className="explorer-picker-label">Starting note</span>
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
                className={playgroundInterval === interval ? "explorer-picker-button is-selected" : "explorer-picker-button"}
                key={interval}
                type="button"
                onClick={() => setPlaygroundInterval(interval)}
              >
                {interval > 0 ? `Up ${interval}` : `Down ${Math.abs(interval)}`}
              </button>
            ))}
          </div>
        </div>
        <NoteVisual
          guidance={guidance}
          activeNote={player.activeNote}
          notes={[MIDDLE_C + playgroundStart, MIDDLE_C + playgroundStart + playgroundInterval]}
        />
        <div className="test-actions">
          <button
            className="primary-button"
            type="button"
            onClick={() => player.play([MIDDLE_C + playgroundStart, MIDDLE_C + playgroundStart + playgroundInterval])}
          >
            ▶ Play sequence
          </button>
        </div>
      </>
    );
  }

  function renderTest(gap: number, test: ReturnType<typeof useSemitoneTest>, sectionLabel: string, trialCount: number) {
    if (test.isDone) {
      const correctCount = test.results.filter((result) => result.isCorrect).length;
      return (
        <>
          <h2>{sectionLabel} complete</h2>
          <p className="lesson-body">
            You answered {correctCount} of {test.results.length} correctly.
          </p>
        </>
      );
    }
    const { trial } = test;
    if (!trial) return null;
    const isAnswerCorrect = test.answer === trial.direction;
    return (
      <>
				<div className="test-art" aria-hidden="true">
					<span className="test-orbit" />
					<span>♪</span>
				</div>
        <p
          className={`sequence-status${test.answer === null ? "" : isAnswerCorrect ? " is-correct" : " is-incorrect"}`}
          aria-live="polite"
        >
          {test.answer === null
            ? "Listen, then choose Up or Down"
            : isAnswerCorrect
              ? "Correct"
              : `Not quite. The correct answer is ${trial.direction === "up" ? "Increasing" : "Decreasing"}.`}
        </p>
        <div className="choice-row test-answer-options" role="radiogroup" aria-label="Direction">
          {(["up", "down"] as const).map((direction) => (
            <label
              className={`${test.answer === direction ? "selected" : ""}${test.answer !== null ? " locked" : ""}`}
              key={direction}
            >
              <input
                type="radio"
                name={`test-${gap}-${test.index}`}
                checked={test.answer === direction}
                disabled={test.answer !== null}
                onChange={() => test.setAnswer(direction)}
              />
              {direction === "up" ? "Increasing" : "Decreasing"}
            </label>
          ))}
        </div>
        <div className="test-actions">
          <button
            className="secondary-button"
            type="button"
            onClick={() => player.play([trial.startNote, trial.secondNote])}
          >
            Hear again
          </button>
          <div className="test-progress" aria-label="Test progress">
            <span>{test.index + 1} / {trialCount}</span>
            <span className="test-progress-track">
              <span style={{ width: `${((test.index + 1) / trialCount) * 100}%` }} />
            </span>
          </div>
          <button className="primary-button" type="button" disabled={test.answer === null} onClick={test.submit}>
            Next
          </button>
        </div>
      </>
    );
  }

  function renderComplete() {
    const totalCorrect =
      test4.results.filter((r) => r.isCorrect).length +
      test2.results.filter((r) => r.isCorrect).length +
      test1.results.filter((r) => r.isCorrect).length;
    const totalTrials = test4.results.length + test2.results.length + test1.results.length;
    return (
      <>
        <h2>Lesson complete</h2>
        <p className="lesson-body">
          You answered {totalCorrect} of {totalTrials} pitch direction questions correctly across
          all three tests.
        </p>
        <ul className="lesson-body">
          <li>4-semitone test: {test4.results.filter((r) => r.isCorrect).length} / {test4.results.length}</li>
          <li>2-semitone test: {test2.results.filter((r) => r.isCorrect).length} / {test2.results.length}</li>
          <li>1-semitone test: {test1.results.filter((r) => r.isCorrect).length} / {test1.results.length}</li>
        </ul>
        <button
          className="primary-button"
          type="button"
          onClick={() =>
            downloadJson("notes-lesson-results.json", {
              exportedAt: new Date().toISOString(),
              guidance,
              test4: test4.results,
              test2: test2.results,
              test1: test1.results,
            })
          }
        >
          Download results (JSON)
        </button>
      </>
    );
  }

  const canGoBack = step !== "complete";
  const showContinue =
    step !== "complete" &&
    (isDebug || step === "intro" || step === "task-intro" || step === "playground");
  return (
    <section className="page-section learner-page">
      <div className="lesson-track">
        <div className="lesson-progress">
          <span>{STEPS[stepIndex].label} • Step {stepIndex + 1} of {STEPS.length}</span>
          <div>
            {STEPS.map((item, index) => (
              <button
                aria-label={item.label}
                className={index < stepIndex ? "done" : index === stepIndex ? "current" : ""}
                disabled={index > stepIndex}
                key={item.id}
                onClick={() => index <= stepIndex && setStepIndex(index)}
                type="button"
              />
            ))}
          </div>
        </div>
        <article className="lesson-card">
          {step === "intro" && renderIntro()}
          {step === "task-intro" && renderTaskIntro()}
          {step === "examples" && renderExamples()}
          {step === "playground" && renderPlayground()}
          {step === "test-4" && renderTest(4, test4, "4-semitone test", test4Trials.length)}
          {step === "test-2" && renderTest(2, test2, "2-semitone test", test2Trials.length)}
          {step === "test-1" && renderTest(1, test1, "1-semitone test", test1Trials.length)}
          {step === "complete" && renderComplete()}
          {(isDebug || showContinue) && (
            <div className={showContinue && !isDebug ? "lesson-actions continue-only" : "lesson-actions"}>
              {isDebug && (
                <button className="secondary-button" type="button" disabled={!canGoBack} onClick={goBack}>
                  Back
                </button>
              )}
              {showContinue && (
                <button className="primary-button" type="button" onClick={goNext}>
                  Continue
                </button>
              )}
            </div>
          )}
        </article>
      </div>
    </section>
  );
}
