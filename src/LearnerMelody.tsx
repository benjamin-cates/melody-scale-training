import { useEffect, useRef, useState } from "react";
import { downloadJson } from "./AppRoutes";
import { getAudioBus, getAudioContext } from "./audio/audio";
import { Chromatone } from "./audio/Chromatone";
import { SONGS, type Scale, type Song, type SongNote } from "./audio/music";

type GuidanceMode = "visual" | "auditory";
type LessonStep = "intro" | "examples" | "test" | "complete";

type MelodyTrial = {
  id: string;
  song: Song;
  correctAnswer: "major" | "minor";
};

type MelodyResult = {
  trialId: string;
  songTitle: string;
  correctAnswer: "major" | "minor";
  answer: "major" | "minor";
  isCorrect: boolean;
  startedAt: string;
  timeElapsedMs: number;
  replayEvents: number[];
};

const STEPS: { id: LessonStep; label: string }[] = [
  { id: "intro", label: "Introduction" },
  { id: "examples", label: "Melody examples" },
  { id: "test", label: "Testing" },
  { id: "complete", label: "Complete" },
];

const TEMPO = 104;

function shuffle<T>(values: T[]) {
  const shuffled = [...values];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

// Peaceful/Sad clips include a "(modified)" opposite-mode variant of each melody.
// Half the pool (even alphabetical positions) is reserved for this lesson so it
// mostly avoids overlapping with the songs the baseline/post-test draws from.
function getLessonSongPool() {
  const affectSongs = SONGS.filter((song) => song.category === "Peaceful" || song.category === "Sad");
  const sorted = [...affectSongs].sort((left, right) => left.title.localeCompare(right.title));
  return sorted.filter((_, index) => index % 2 === 0);
}

function createExampleTrials(): MelodyTrial[] {
  const pool = shuffle(getLessonSongPool());
  return pool.slice(0, 8).map((song, index) => ({
    id: `example-${index}-${song.title}`,
    song,
    correctAnswer: song.scale,
  }));
}

function createTestTrials(): MelodyTrial[] {
  const pool = shuffle(getLessonSongPool());
  return pool.slice(8, 24).map((song, index) => ({
    id: `test-${index}-${song.title}`,
    song,
    correctAnswer: song.scale,
  }));
}

function useMelodyPlayer() {
  const audioContext = useRef<AudioContext | null>(null);
  const oscillators = useRef<OscillatorNode[]>([]);
  const timer = useRef<number | null>(null);
  const onCompleteRef = useRef<(() => void) | null>(null);
  const [activeNotes, setActiveNotes] = useState<SongNote[]>([]);
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
    if (timer.current !== null) {
      window.clearTimeout(timer.current);
      timer.current = null;
    }
    setIsPlaying(false);
  };

  const playFrom = (song: Song, position: number) => {
    const note = song.notes[position];
    if (!note) {
      setActiveNotes([]);
      setIsPlaying(false);
      onCompleteRef.current?.();
      return;
    }
    const beatDuration = 60000 / TEMPO;
    const context = audioContext.current ?? getAudioContext();
    audioContext.current = context;
    const bus = getAudioBus();
    void context.resume();
    const duration = Math.max((note.duration * beatDuration) / 1000, 0.04);
    note.noteIndices.forEach((noteIndex) => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = "triangle";
      oscillator.frequency.value = 440 * Math.pow(2, (noteIndex + 21 - 69) / 12);
      gain.gain.setValueAtTime(0.0001, context.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.3, context.currentTime + 0.025);
      gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + duration);
      oscillator.connect(gain).connect(bus);
      oscillator.start();
      oscillator.stop(context.currentTime + duration);
      oscillators.current.push(oscillator);
    });
    setActiveNotes([note]);
    timer.current = window.setTimeout(() => playFrom(song, position + 1), duration * 1000);
  };

  const play = (song: Song, onComplete: () => void) => {
    stop();
    onCompleteRef.current = onComplete;
    setIsPlaying(true);
    playFrom(song, 0);
  };

  useEffect(() => stop, []);

  return { play, stop, activeNotes, isPlaying };
}

function useMelodyTest(trials: MelodyTrial[]) {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState<Scale | null>(null);
  const [results, setResults] = useState<MelodyResult[]>([]);
  const questionStartedAt = useRef(new Date());
  const replayEvents = useRef<number[]>([]);
  const trial = trials[index];

  const beginTrial = () => {
    questionStartedAt.current = new Date();
    replayEvents.current = [0];
  };

  const recordReplay = () => {
    replayEvents.current = [
      ...replayEvents.current,
      Date.now() - questionStartedAt.current.getTime(),
    ];
  };

  const submit = () => {
    if (!trial || answer === null) return;
    const submittedAt = new Date();
    setResults((previous) => [
      ...previous,
      {
        trialId: trial.id,
        songTitle: trial.song.title,
        correctAnswer: trial.correctAnswer,
        answer,
        isCorrect: answer === trial.correctAnswer,
        startedAt: questionStartedAt.current.toISOString(),
        timeElapsedMs: submittedAt.getTime() - questionStartedAt.current.getTime(),
        replayEvents: [...replayEvents.current],
      },
    ]);
    setAnswer(null);
    setIndex((value) => value + 1);
  };

  return { trial, index, answer, setAnswer, results, beginTrial, recordReplay, submit, isDone: !trial };
}

function MelodyVisual({
  guidance,
  song,
  activeNotes,
  revealKey,
}: {
  guidance: GuidanceMode;
  song: Song;
  activeNotes: SongNote[];
  revealKey: boolean;
}) {
  if (guidance === "auditory") {
    return null;
  }
  return (
    <Chromatone
      keyLabel={song.key}
      tonic={song.tonic}
      activeNotes={activeNotes}
      showKey={revealKey}
      showNotes
      showChordLines={revealKey ? "tonic-only" : "none"}
    />
  );
}

export function LearnerMelody({
  guidanceMode,
  instructionOnly = false,
  showDownloadResults = true,
  onResults,
}: {
  guidanceMode?: GuidanceMode;
  instructionOnly?: boolean;
  showDownloadResults?: boolean;
  onResults?: (results: Record<string, unknown>) => void;
} = {}) {
  const isDebug = new URLSearchParams(window.location.search).get("debug") === "true";
  const [stepIndex, setStepIndex] = useState(0);
  const [guidance, setGuidance] = useState<GuidanceMode>(guidanceMode ?? "visual");
  const [exampleTrials] = useState(createExampleTrials);
  const [testTrials] = useState(createTestTrials);
  const [exampleIndex, setExampleIndex] = useState(0);
  const [exampleGuess, setExampleGuess] = useState<Scale | null>(null);
  const [exampleFinished, setExampleFinished] = useState(false);
  const [testFinished, setTestFinished] = useState(false);
  const [previewScale, setPreviewScale] = useState<Scale>("major");

  const player = useMelodyPlayer();
  const previewPlayer = useMelodyPlayer();
  const test = useMelodyTest(testTrials);

  const step = STEPS[stepIndex].id;
  const exampleTrial = exampleTrials[exampleIndex];

  const goBack = () => setStepIndex((value) => Math.max(value - 1, 0));
  const goNext = () => setStepIndex((value) => Math.min(value + 1, STEPS.length - 1));

  useEffect(() => {
    if (step !== "examples" || !exampleTrial) return;
    setExampleGuess(null);
    setExampleFinished(false);
    player.play(exampleTrial.song, () => setExampleFinished(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, exampleIndex]);

  useEffect(() => {
    if (step !== "test" || !test.trial) return;
    setTestFinished(false);
    test.beginTrial();
    player.play(test.trial.song, () => setTestFinished(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, test.index]);

  useEffect(() => {
    if (isDebug) return;
    if (step === "examples" && !exampleTrial) {
      setStepIndex((value) => Math.min(value + 1, STEPS.length - 1));
      return;
    }
    if (step === "test" && test.isDone) {
      setStepIndex((value) => Math.min(value + 1, STEPS.length - 1));
    }
  }, [isDebug, step, exampleTrial, test.isDone]);

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
        Auditory (piano keys)
      </label>
    </div>
  );

  function renderIntro() {
    const previewSong = (scale: Scale) => SONGS.find((song) => song.category === "Scales" && song.key === `C ${scale}`);
    return (
      <>
        <h2>Melodies in major and minor</h2>
        <p className="lesson-body">
          A key is a set of 7 notes that form the foundation of a song. Each key has a central
          "tonic" note and 6 notes that play off of it. Major melodies center around the major
          third, giving music a brighter tone. Minor melodies center around the minor third,
          giving music a darker or more somber tone. Both modes share the perfect fifth as an
          anchor. Some music in this lesson has a modified key: focus on the relationships between
          the notes rather than the tempo when guessing major or minor.
        </p>
        {!guidanceMode && guidanceToggle}
        <p className="lesson-body">
          {guidance === "visual"
            ? "The key is shown by the notes outlined in gold, and the central tonic note is outlined in white. Click below to preview each major and minor key."
            : "This shows which of the notes on the spiral are in each key. Click below to preview each major and minor key."}
        </p>
        <div className="test-actions">
          {(["major", "minor"] as const).map((scale) => (
            <button
              className="secondary-button"
              key={scale}
              type="button"
              disabled={!previewSong(scale)}
              onClick={() => {
                const song = previewSong(scale);
                setPreviewScale(scale);
                if (song) previewPlayer.play(song, () => { });
              }}
            >
              ▶ Preview C {scale}
            </button>
          ))}
        </div>
        {previewSong(previewScale) && (
          <MelodyVisual
            guidance={guidance}
            song={previewSong(previewScale)!}
            activeNotes={previewPlayer.activeNotes}
            revealKey
          />
        )}
      </>
    );
  }

  function renderExamples() {
    if (!exampleTrial) {
      return (
        <>
          <h2>Examples complete</h2>
          <p className="lesson-body">You are ready for the test.</p>
        </>
      );
    }
    const correctLabel = exampleTrial.correctAnswer === "major" ? "Major" : "Minor";
    return (
      <>
        <p className="lesson-body">
          Listen to this melody. This song is in a {correctLabel.toLowerCase()} key. Click the
          matching button once the melody finishes.
        </p>
        <h3>{exampleTrial.song.title}</h3>
        <MelodyVisual guidance={guidance} song={exampleTrial.song} activeNotes={player.activeNotes} revealKey />
        <div className="choice-row">
          {(["major", "minor"] as const).map((scale) => (
            <label className={exampleGuess === scale ? "selected" : ""} key={scale}>
              <input
                type="radio"
                name="example-answer"
                checked={exampleGuess === scale}
                disabled={!exampleFinished}
                onChange={() => {
                  setExampleGuess(scale);
                  if (scale === exampleTrial.correctAnswer) {
                    window.setTimeout(() => setExampleIndex((value) => value + 1), 500);
                  }
                }}
              />
              {scale === "major" ? "Major" : "Minor"}
            </label>
          ))}
        </div>
        {exampleGuess && exampleGuess !== exampleTrial.correctAnswer && (
          <p className="sequence-status">Try clicking {correctLabel} instead.</p>
        )}
        <div className="test-actions">
          <button
            className="secondary-button"
            type="button"
            onClick={() => {
              setExampleFinished(false);
              player.play(exampleTrial.song, () => setExampleFinished(true));
            }}
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

  function renderTest() {
    if (test.isDone) {
      const correctCount = test.results.filter((result) => result.isCorrect).length;
      return (
        <>
          <h2>Testing complete</h2>
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
        <p className="lesson-body">Listen to this melody, then decide whether it is major or minor.</p>
        {guidance === "visual" ? (
          <Chromatone
            keyLabel={trial.song.key}
            tonic={trial.song.tonic}
            activeNotes={player.activeNotes}
            showKey={false}
            showNotes
            showChordLines="none"
          />
        ) : (
          <div className="test-art" aria-hidden="true">
            <span className="test-orbit" />
            <span>♪</span>
          </div>
        )}
        <p
          className={`sequence-status${test.answer === null ? "" : isAnswerCorrect ? " is-correct" : " is-incorrect"}`}
          aria-live="polite"
        >
          {!testFinished
            ? "Listen to the melody"
            : test.answer === null
              ? "Choose Major or Minor"
              : isAnswerCorrect
                ? "Correct"
                : `Not quite. The correct answer is ${trial.correctAnswer === "major" ? "Major" : "Minor"}.`}
        </p>
        <div className="choice-row test-answer-options" role="radiogroup" aria-label="Major or minor">
          {(["major", "minor"] as const).map((scale) => (
            <label
              className={`${test.answer === scale ? "selected" : ""}${test.answer !== null ? " locked" : ""}`}
              key={scale}
            >
              <input
                type="radio"
                name={`test-${test.index}`}
                checked={test.answer === scale}
                disabled={test.answer !== null || !testFinished}
                onChange={() => test.setAnswer(scale)}
              />
              {scale === "major" ? "Major" : "Minor"}
            </label>
          ))}
        </div>
        <div className="test-actions">
          <button
            className="secondary-button"
            type="button"
            onClick={() => {
              test.recordReplay();
              setTestFinished(false);
              player.play(trial.song, () => setTestFinished(true));
            }}
          >
            Hear again
          </button>
          <div className="test-progress" aria-label="Test progress">
            <span>{test.index + 1} / {testTrials.length}</span>
            <span className="test-progress-track">
              <span style={{ width: `${((test.index + 1) / testTrials.length) * 100}%` }} />
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
    const correctCount = test.results.filter((result) => result.isCorrect).length;
    return (
      <>
        <h2>Lesson complete</h2>
        <p className="lesson-body">
          You answered {correctCount} of {test.results.length} melody classification questions
          correctly.
        </p>
        <button
          className="primary-button"
          type="button"
          onClick={() => {
            const results = {
              completedAt: new Date().toISOString(),
              guidance,
              test: test.results,
            };
            if (showDownloadResults) {
              downloadJson("melodies-lesson-results.json", results);
            } else {
              onResults?.(results);
            }
          }}
        >
          {showDownloadResults ? "Download results (JSON)" : "Continue"}
        </button>
      </>
    );
  }

  if (instructionOnly) {
    return (
      <section className="page-section learner-page">
        <div className="lesson-track">
          <article className="lesson-card">
            {renderIntro()}
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

  const canGoBack = step !== "complete";
  const showContinue = step !== "complete" && (isDebug || step === "intro");
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
          {step === "examples" && renderExamples()}
          {step === "test" && renderTest()}
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
