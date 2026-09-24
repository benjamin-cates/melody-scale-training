import { useEffect, useState } from "react";
import { NOTE_NAMES } from "./audio/music";
import { getAudioBus, getAudioContext } from "./audio/audio";

const NOTE_FREQUENCIES = NOTE_NAMES.map((_, index) =>
  261.6256 * Math.pow(2, index / 12),
);
type NoteSequence = {
  first: number;
  second: number;
};

function createSequence(): NoteSequence {
  const lower = Math.floor(Math.random() * 11);
  return Math.random() < 0.5
    ? { first: lower, second: lower + 1 }
    : { first: lower + 1, second: lower };
}

function playNote(note: number, duration = 0.88, delay = 0) {
  const context = getAudioContext();
  const bus = getAudioBus();
  void context.resume();
  const start = context.currentTime + delay;
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = "triangle";
  oscillator.frequency.value = NOTE_FREQUENCIES[note];
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(0.16, start + 0.025);
  gain.gain.exponentialRampToValueAtTime(0.001, start + duration - 0.025);
  oscillator.connect(gain).connect(bus);
  oscillator.start(start);
  oscillator.stop(start + duration);
}

function playSequence(sequence: NoteSequence) {
  playNote(sequence.first, 1.5);
  playNote(sequence.second, 1, 1);
}

export function NoteTest() {
  const [sequence, setSequence] = useState(createSequence);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  useEffect(() => {
    try {
      playSequence(sequence);
    } catch {
    }
  }, []);

  const nextSequence = () => {
    const next = createSequence();
    setFeedback(null);
    setSequence(next);
    playSequence(next);
  };

  const answer = (guess: "higher" | "lower") => {
    if (feedback !== null) return;
    const isCorrect =
      guess === (sequence.first < sequence.second ? "higher" : "lower");
    setFeedback(isCorrect ? "correct" : "wrong");
    setScore((current) => ({
      correct: current.correct + (isCorrect ? 1 : 0),
      total: current.total + 1,
    }));
    window.setTimeout(nextSequence, 950);
  };

  return (
    <section className="page-section note-test-page">
      <div className="note-test-card">
        <div className="test-meta">
          <span>Compare the notes</span>
          <span>{score.correct} / {score.total} correct</span>
        </div>
        <div className={`note-test-orbit ${feedback ?? ""}`}>
          <button
            className="note-test-play"
            onClick={() => playSequence(sequence)}
            aria-label="Play the two-note sequence again"
          >
            <span>♪</span>
            <small>Play again</small>
          </button>
        </div>
        <p className={`note-test-feedback ${feedback ?? ""}`} aria-live="polite">
          {feedback === "correct"
            ? "Correct."
            : feedback === "wrong"
              ? "Not quite."
              : "Was the first note higher or lower?"}
        </p>
        <div className="note-choice-grid" role="group" aria-label="Compare the notes">
          <button
            className="note-choice"
            disabled={feedback !== null}
            onClick={() => answer("lower")}
          >
            Second lower
          </button>
          <button
            className="note-choice"
            disabled={feedback !== null}
            onClick={() => answer("higher")}
          >
            Second higher
          </button>
        </div>
      </div>
    </section>
  );
}
