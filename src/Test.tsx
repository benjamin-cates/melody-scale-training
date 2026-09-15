import { useState } from "react";
import { SONGS } from "./music";
import { downloadJson } from "./AppRoutes";
import { Player } from "./Player";

const TEST_SONGS = [SONGS[0], SONGS[1], SONGS[4], SONGS[5]];
export function Test() {
  const [sequence, setSequence] = useState(0);
  const [answer, setAnswer] = useState("");
  const [confidence, setConfidence] = useState<number | null>(null);
  const [showNewSequence, setShowNewSequence] = useState(false);
  const [responses, setResponses] = useState<
    { sequence: number; answer: string; confidence: number }[]
  >([]);
  const song = TEST_SONGS[sequence];
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!answer || confidence === null) return;
    const next = [
      ...responses.filter((item) => item.sequence !== sequence),
      { sequence, answer, confidence },
    ];
    setResponses(next);
    if (sequence < TEST_SONGS.length - 1) {
      setSequence((value) => value + 1);
      setAnswer("");
      setConfidence(null);
      setShowNewSequence(true);
      window.setTimeout(() => setShowNewSequence(false), 900);
    } else
      downloadJson("chromatone-test.json", {
        exportedAt: new Date().toISOString(),
        responses: next,
      });
  };
  return (
    <section className="page-section test-page">
      <div className={`test-card ${showNewSequence ? "new-sequence" : ""}`}>
        <div className="test-meta">
          <span>
            Sequence {sequence + 1} / {TEST_SONGS.length}
          </span>
          <span>Hidden key</span>
        </div>
        <div className="test-art">
          <div className="test-orbit" />
          <span>♪</span>
        </div>
        <Player song={song} tempo={76} showKey={false} showNotes={false} />
        <form className="test-form" onSubmit={submit}>
          <fieldset>
            <legend>My answer</legend>
            <span className="choice-row">
              <label className={answer === "major" ? "selected" : ""}>
                <input
                  type="radio"
                  name="answer"
                  value="major"
                  checked={answer === "major"}
                  onChange={(event) => setAnswer(event.target.value)}
                  required
                />{" "}
                Major
              </label>
              <label className={answer === "minor" ? "selected" : ""}>
                <input
                  type="radio"
                  name="answer"
                  value="minor"
                  checked={answer === "minor"}
                  onChange={(event) => setAnswer(event.target.value)}
                />{" "}
                Minor
              </label>
            </span>
          </fieldset>
          <fieldset className="confidence-fieldset">
            <legend>Confidence</legend>
            <div className="confidence-options" role="radiogroup" aria-label="Confidence from 1 to 5">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  className={confidence === value ? "selected" : ""}
                  type="button"
                  aria-pressed={confidence === value}
                  aria-label={`${value} out of 5 confidence`}
                  onClick={() => setConfidence(value)}
                  key={value}
                >
                  {value}
                </button>
              ))}
            </div>
            <output className="confidence-output">
              {confidence === null ? "Select your confidence" : `${confidence} / 5`}
            </output>
          </fieldset>
          <div className="test-actions">
            <button
              className="primary-button"
              type="submit"
              disabled={!answer || confidence === null}
            >
              {sequence === TEST_SONGS.length - 1
                ? "Download results"
                : "Save and next"}
            </button>
            <div
              className="test-progress"
              role="progressbar"
              aria-label="Test progress"
              aria-valuemin={0}
              aria-valuemax={TEST_SONGS.length}
              aria-valuenow={responses.length}
            >
              <div className="test-progress-track">
                <span style={{ width: `${(responses.length / TEST_SONGS.length) * 100}%` }} />
              </div>
              <span>{responses.length} / {TEST_SONGS.length} complete</span>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
