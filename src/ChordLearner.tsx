import { useEffect, useRef, useState } from "react";
import { downloadJson } from "./AppRoutes";
import { getAudioContext, noteLabel, playTone } from "./audio/audio";
import { Chromatone } from "./audio/Chromatone";
import { NOTE_NAMES } from "./audio/music";

type GuidanceMode = "visual" | "auditory";
type ChordType = "major3" | "minor3" | "perfect5";
type PlaybackMode = "arpeggio" | "block";
type Answer = "same" | "different";

type LessonStep =
  | "intro"
  | "examples-arpeggio"
  | "examples-melodic"
  | "playground"
  | "test-arpeggio"
  | "test-melodic"
  | "complete";

type ChordTrial = {
  id: string;
  root: number;
  chordType: ChordType;
};

type DiscriminationTrial = {
  id: string;
  root: number;
  comparisonType: ChordType;
  correctAnswer: Answer;
};

type DiscriminationResult = {
  trialId: string;
  root: number;
  comparisonType: ChordType;
  correctAnswer: Answer;
  answer: Answer;
  isCorrect: boolean;
};

const STEPS: { id: LessonStep; label: string }[] = [
  { id: "intro", label: "Introduction" },
  { id: "examples-arpeggio", label: "Arpeggio examples" },
  { id: "examples-melodic", label: "Melodic examples" },
  { id: "playground", label: "Playground" },
  { id: "test-arpeggio", label: "Arpeggio test" },
  { id: "test-melodic", label: "Melodic test" },
  { id: "complete", label: "Complete" },
];

const MIDDLE_C = 39;

const CHORD_TYPES: ChordType[] = ["major3", "minor3", "perfect5"];

const CHORD_DEFS: Record<ChordType, { label: string; interval: number; mood: string }> = {
  major3: { label: "Major third", interval: 4, mood: "bright, cheerful, or peaceful" },
  minor3: { label: "Minor third", interval: 3, mood: "somber, tense, or sad" },
  perfect5: { label: "Perfect fifth", interval: 7, mood: "open and neutral" },
};

function shuffle<T>(values: T[]) {
  const shuffled = [...values];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function chordNotes(root: number, chordType: ChordType) {
  const rootNote = MIDDLE_C + root;
  return [rootNote, rootNote + CHORD_DEFS[chordType].interval];
}

function createExampleTrials(): ChordTrial[] {
  return shuffle(
    CHORD_TYPES.flatMap((chordType) => [0, 1].map((repetition) => ({
      id: `${chordType}-${repetition}`,
      root: Math.floor(Math.random() * 12),
      chordType,
    }))),
  );
}

function createDiscriminationTrials(): DiscriminationTrial[] {
  return shuffle(
    CHORD_TYPES.flatMap((comparisonType) => [0, 1, 2].map((repetition) => ({
      id: `${comparisonType}-${repetition}`,
      root: Math.floor(Math.random() * 12),
      comparisonType,
      correctAnswer: (comparisonType === "major3" ? "same" : "different") as Answer,
    }))),
  );
}

function useChordPlayer() {
  const oscillators = useRef<OscillatorNode[]>([]);
  const timers = useRef<number[]>([]);
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
    setIsPlaying(false);
  };

  const scheduleChord = (notes: number[], chordStart: number, mode: PlaybackMode) => {
    const noteDuration = mode === "arpeggio" ? 0.45 : 1.1;
    const step = mode === "arpeggio" ? noteDuration - 0.05 : 0;
    notes.forEach((note, index) => {
      const noteStart = chordStart + index * step;
      oscillators.current.push(playTone(note, noteStart, noteDuration, oscillators.current));
    });
    return (notes.length - 1) * step + noteDuration;
  };

  const playChord = (notes: number[], mode: PlaybackMode) => {
    stop();
    const context = getAudioContext();
    void context.resume();
    const start = context.currentTime + 0.05;
    setIsPlaying(true);
    const span = scheduleChord(notes, start, mode);
    timers.current.push(window.setTimeout(() => setIsPlaying(false), span * 1000 + 150));
  };

  const playPair = (firstNotes: number[], secondNotes: number[], mode: PlaybackMode) => {
    stop();
    const context = getAudioContext();
    void context.resume();
    const start = context.currentTime + 0.05;
    setIsPlaying(true);
    const firstSpan = scheduleChord(firstNotes, start, mode);
    const secondStart = start + firstSpan + 0.4;
    const secondSpan = scheduleChord(secondNotes, secondStart, mode);
    const totalMs = (secondStart - context.currentTime + secondSpan) * 1000 + 150;
    timers.current.push(window.setTimeout(() => setIsPlaying(false), totalMs));
  };

  useEffect(() => stop, []);

  return { playChord, playPair, isPlaying, stop };
}

function useDiscriminationTest(trials: DiscriminationTrial[]) {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState<Answer | null>(null);
  const [results, setResults] = useState<DiscriminationResult[]>([]);
  const trial = trials[index];

  const submit = () => {
    if (!trial || answer === null) return;
    setResults((previous) => [
      ...previous,
      {
        trialId: trial.id,
        root: trial.root,
        comparisonType: trial.comparisonType,
        correctAnswer: trial.correctAnswer,
        answer,
        isCorrect: answer === trial.correctAnswer,
      },
    ]);
    setAnswer(null);
    setIndex((value) => value + 1);
  };

  return { trial, index, answer, setAnswer, results, submit, isDone: !trial };
}

function ChordVisual({
  guidance,
  root,
  chordType,
}: {
  guidance: GuidanceMode;
  root: number;
  chordType: ChordType | null;
}) {
  const notes = chordType ? chordNotes(root, chordType) : [MIDDLE_C + root];
  if (guidance === "auditory") {
    const def = chordType ? CHORD_DEFS[chordType] : null;
    return (
      <div className="lesson-body" aria-live="polite">
        <p>Root note: {noteLabel(MIDDLE_C + root)}</p>
        {def && (
          <p>
            Chord: {def.label} ({noteLabel(notes[0])} to {noteLabel(notes[1])}, {def.interval} semitones)
          </p>
        )}
      </div>
    );
  }
  return (
    <Chromatone
      activeNotes={[{ noteIndices: notes, duration: 1 }]}
      song={chordType ? { title: "", subtitle: "", category: "Custom", key: "", tonic: root, scale: "major", notes: [] } : undefined}
      showKey={false}
      showNotes
      emphasizeTonic
      showChordLines="tonic-only"
    />
  );
}

export function ChordLearner() {
  const isDebug = new URLSearchParams(window.location.search).get("debug") === "true";
  const [stepIndex, setStepIndex] = useState(0);
  const [guidance, setGuidance] = useState<GuidanceMode>("visual");
  const [playgroundRoot, setPlaygroundRoot] = useState(0);
  const [playgroundType, setPlaygroundType] = useState<ChordType>("major3");
  const [exampleArpeggioTrials] = useState(createExampleTrials);
  const [exampleMelodicTrials] = useState(createExampleTrials);
  const [exampleArpeggioIndex, setExampleArpeggioIndex] = useState(0);
  const [exampleMelodicIndex, setExampleMelodicIndex] = useState(0);
  const [exampleArpeggioGuess, setExampleArpeggioGuess] = useState<ChordType | null>(null);
  const [exampleMelodicGuess, setExampleMelodicGuess] = useState<ChordType | null>(null);
  const [testArpeggioTrials] = useState(createDiscriminationTrials);
  const [testMelodicTrials] = useState(createDiscriminationTrials);

  const player = useChordPlayer();
  const testArpeggio = useDiscriminationTest(testArpeggioTrials);
  const testMelodic = useDiscriminationTest(testMelodicTrials);

  const step = STEPS[stepIndex].id;
  const exampleArpeggioTrial = exampleArpeggioTrials[exampleArpeggioIndex];
  const exampleMelodicTrial = exampleMelodicTrials[exampleMelodicIndex];

  const goBack = () => setStepIndex((value) => Math.max(value - 1, 0));
  const goNext = () => setStepIndex((value) => Math.min(value + 1, STEPS.length - 1));

  useEffect(() => {
    if (step !== "examples-arpeggio" || !exampleArpeggioTrial) return;
    player.playChord(chordNotes(exampleArpeggioTrial.root, exampleArpeggioTrial.chordType), "arpeggio");
    setExampleArpeggioGuess(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, exampleArpeggioIndex]);

  useEffect(() => {
    if (step !== "examples-melodic" || !exampleMelodicTrial) return;
    player.playChord(chordNotes(exampleMelodicTrial.root, exampleMelodicTrial.chordType), "block");
    setExampleMelodicGuess(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, exampleMelodicIndex]);

  useEffect(() => {
    if (step !== "test-arpeggio" || !testArpeggio.trial) return;
    const { root, comparisonType } = testArpeggio.trial;
    player.playPair(chordNotes(root, "major3"), chordNotes(root, comparisonType), "arpeggio");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, testArpeggio.index]);

  useEffect(() => {
    if (step !== "test-melodic" || !testMelodic.trial) return;
    const { root, comparisonType } = testMelodic.trial;
    player.playPair(chordNotes(root, "major3"), chordNotes(root, comparisonType), "block");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, testMelodic.index]);

  useEffect(() => {
    if (isDebug) return;
    if (step === "examples-arpeggio" && !exampleArpeggioTrial) {
      setStepIndex((value) => Math.min(value + 1, STEPS.length - 1));
      return;
    }
    if (step === "examples-melodic" && !exampleMelodicTrial) {
      setStepIndex((value) => Math.min(value + 1, STEPS.length - 1));
      return;
    }
    if ((step === "test-arpeggio" && testArpeggio.isDone) || (step === "test-melodic" && testMelodic.isDone)) {
      setStepIndex((value) => Math.min(value + 1, STEPS.length - 1));
    }
  }, [
    isDebug,
    step,
    exampleArpeggioIndex,
    exampleMelodicIndex,
    testArpeggio.isDone,
    testMelodic.isDone,
    exampleArpeggioTrial,
    exampleMelodicTrial,
  ]);

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
          interval size of 4 steps above the root and sounds {CHORD_DEFS.major3.mood}. The minor
          third has an interval size of 3 steps and sounds {CHORD_DEFS.minor3.mood}. The perfect
          fifth has a gap of 7 steps and sounds {CHORD_DEFS.perfect5.mood}. The root note, Middle
          C for now, is highlighted below.
        </p>
        {guidanceToggle}
        <p className="lesson-body">
          {guidance === "visual"
            ? "Chords are shown as connected notes on the spiral. The white outline marks the root note. The perfect fifth line is purple, the major third line is yellow (representing happiness), and the minor third line is blue (representing sadness). Classify each chord correctly."
            : "The names of the notes, the name of the chord, and the separation distance will be shown on the screen. Classify each chord correctly."}
        </p>
        <ChordVisual guidance={guidance} root={0} chordType={null} />
        <div className="test-actions">
          {CHORD_TYPES.map((chordType) => (
            <button
              className="secondary-button"
              key={chordType}
              type="button"
              onClick={() => player.playChord(chordNotes(0, chordType), "block")}
            >
              ▶ Hear a {CHORD_DEFS[chordType].label.toLowerCase()}
            </button>
          ))}
        </div>
      </>
    );
  }

  function renderExamples(
    mode: PlaybackMode,
    trial: ChordTrial | undefined,
    guess: ChordType | null,
    setGuess: (value: ChordType | null) => void,
    index: number,
    total: number,
    onAdvance: () => void,
  ) {
    if (!trial) {
      return (
        <>
          <h2>Examples complete</h2>
          <p className="lesson-body">You are ready to try the playground and the tests.</p>
        </>
      );
    }
    const correctDef = CHORD_DEFS[trial.chordType];
    return (
      <>
        <p className="lesson-body">
          Listen to the {mode === "arpeggio" ? "arpeggiated" : "melodic"} chord and identify it.
        </p>
        <ChordVisual guidance={guidance} root={trial.root} chordType={trial.chordType} />
        <p className="sequence-status" aria-live="polite">
          Answer: this is a {correctDef.label}. Click the matching button below.
        </p>
        <div className="choice-row">
          {CHORD_TYPES.map((chordType) => (
            <label className={guess === chordType ? "selected" : ""} key={chordType}>
              <input
                type="radio"
                name={`example-${mode}-answer`}
                checked={guess === chordType}
                onChange={() => {
                  setGuess(chordType);
                  if (chordType === trial.chordType) {
                    window.setTimeout(onAdvance, 500);
                  }
                }}
              />
              {CHORD_DEFS[chordType].label}
            </label>
          ))}
        </div>
        {guess && guess !== trial.chordType && (
          <p className="sequence-status">Try clicking {correctDef.label} instead.</p>
        )}
        <div className="test-actions">
          <button
            className="secondary-button"
            type="button"
            onClick={() => player.playChord(chordNotes(trial.root, trial.chordType), mode)}
          >
            Hear again
          </button>
          <span className="test-progress" aria-label="Example progress">
            {index + 1} / {total}
          </span>
        </div>
      </>
    );
  }

  function renderPlayground() {
    const notes = chordNotes(playgroundRoot, playgroundType);
    return (
      <>
        <h2>Playground</h2>
        <p className="lesson-body">
          Choose a root note and a chord type, then play it as a block chord to explore how each
          of the 36 chords sounds and looks.
        </p>
        <div className="explorer-picker-group">
          <span className="explorer-picker-label">Root note</span>
          <div className="explorer-button-row" aria-label="Root note">
            {NOTE_NAMES.map((name, pitchClass) => (
              <button
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
        <div className="explorer-picker-group">
          <span className="explorer-picker-label">Chord type</span>
          <div className="explorer-button-row" aria-label="Chord type">
            {CHORD_TYPES.map((chordType) => (
              <button
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
        <ChordVisual guidance={guidance} root={playgroundRoot} chordType={playgroundType} />
        <div className="test-actions">
          <button className="primary-button" type="button" onClick={() => player.playChord(notes, "block")}>
            ▶ Play block chord
          </button>
        </div>
      </>
    );
  }

  function renderTest(
    mode: PlaybackMode,
    test: ReturnType<typeof useDiscriminationTest>,
    sectionLabel: string,
    trialCount: number,
  ) {
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
    const isAnswerCorrect = test.answer === trial.correctAnswer;
    return (
      <>
        <p className="lesson-body">
          A major third plays first, followed by a second chord with the same root note. Decide
          whether the second chord is the Same as a major third or Different.
        </p>
        <div className="test-art" aria-hidden="true">
          <span className="test-orbit" />
          <span>♪</span>
        </div>
        <p
          className={`sequence-status${test.answer === null ? "" : isAnswerCorrect ? " is-correct" : " is-incorrect"}`}
          aria-live="polite"
        >
          {test.answer === null
            ? "Listen, then choose Same or Different"
            : isAnswerCorrect
              ? "Correct"
              : `Not quite. The correct answer is ${trial.correctAnswer === "same" ? "Same" : "Different"}.`}
        </p>
        <div className="choice-row test-answer-options" role="radiogroup" aria-label="Same or different">
          {(["same", "different"] as const).map((answer) => (
            <label
              className={`${test.answer === answer ? "selected" : ""}${test.answer !== null ? " locked" : ""}`}
              key={answer}
            >
              <input
                type="radio"
                name={`test-${mode}-${test.index}`}
                checked={test.answer === answer}
                disabled={test.answer !== null}
                onChange={() => test.setAnswer(answer)}
              />
              {answer === "same" ? "Same" : "Different"}
            </label>
          ))}
        </div>
        <div className="test-actions">
          <button
            className="secondary-button"
            type="button"
            onClick={() => player.playPair(chordNotes(trial.root, "major3"), chordNotes(trial.root, trial.comparisonType), mode)}
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
      testArpeggio.results.filter((r) => r.isCorrect).length +
      testMelodic.results.filter((r) => r.isCorrect).length;
    const totalTrials = testArpeggio.results.length + testMelodic.results.length;
    return (
      <>
        <h2>Lesson complete</h2>
        <p className="lesson-body">
          You answered {totalCorrect} of {totalTrials} chord discrimination questions correctly
          across both tests.
        </p>
        <ul className="lesson-body">
          <li>Arpeggio test: {testArpeggio.results.filter((r) => r.isCorrect).length} / {testArpeggio.results.length}</li>
          <li>Melodic test: {testMelodic.results.filter((r) => r.isCorrect).length} / {testMelodic.results.length}</li>
        </ul>
        <button
          className="primary-button"
          type="button"
          onClick={() =>
            downloadJson("chords-lesson-results.json", {
              exportedAt: new Date().toISOString(),
              guidance,
              testArpeggio: testArpeggio.results,
              testMelodic: testMelodic.results,
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
    step !== "complete" && (isDebug || step === "intro" || step === "playground");
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
          {step === "examples-arpeggio" &&
            renderExamples(
              "arpeggio",
              exampleArpeggioTrial,
              exampleArpeggioGuess,
              setExampleArpeggioGuess,
              exampleArpeggioIndex,
              exampleArpeggioTrials.length,
              () => setExampleArpeggioIndex((value) => value + 1),
            )}
          {step === "examples-melodic" &&
            renderExamples(
              "block",
              exampleMelodicTrial,
              exampleMelodicGuess,
              setExampleMelodicGuess,
              exampleMelodicIndex,
              exampleMelodicTrials.length,
              () => setExampleMelodicIndex((value) => value + 1),
            )}
          {step === "playground" && renderPlayground()}
          {step === "test-arpeggio" && renderTest("arpeggio", testArpeggio, "Arpeggio test", testArpeggioTrials.length)}
          {step === "test-melodic" && renderTest("block", testMelodic, "Melodic test", testMelodicTrials.length)}
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
