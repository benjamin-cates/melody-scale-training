import { useEffect, useRef, useState } from "react";
import { downloadJson } from "./AppRoutes";
import { getAudioBus, getAudioContext } from "./audio/audio";
import { Chromatone } from "./audio/Chromatone";
import { PianoView } from "./audio/PianoView";
import { SONGS, type Scale, type Song, type SongNote } from "./audio/music";

type GuidanceMode = "visual" | "auditory";

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

const TEMPO = 104;

function shuffle<T>(values: T[]) {
  const shuffled = [...values];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

type MelodySongPair = {
  id: string;
  label: string;
  songs: Song[];
};

function getLessonSongPairs(): MelodySongPair[] {
  let songNumber = 0;
  return (["Sad", "Peaceful"] as const).flatMap((category) => {
    const originals = SONGS
      .filter((song) => song.category === category && !song.title.endsWith(" (modified)"))
      .slice(0, 2);
    return originals.flatMap((song) => {
      const sourceId = song.title.split(" (")[0];
      const modifiedSong = SONGS.find(
        (candidate) => candidate.category === category && candidate.title === `${sourceId} (modified)`,
      );
      if (!modifiedSong) return [];
      songNumber += 1;
      return [{
        id: `song-${songNumber}`,
        label: `Song ${songNumber}`,
        songs: [song, modifiedSong],
      }];
    });
  });
}

const LESSON_SONG_PAIRS = getLessonSongPairs();
const LESSON_SONGS = LESSON_SONG_PAIRS.flatMap((pair) => pair.songs);

function createExampleTrials(songs: Song[]): MelodyTrial[] {
  return shuffle(songs).map((song, index) => ({
    id: `example-${Date.now()}-${index}-${song.title}`,
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
    setActiveNotes([]);
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

function MelodyVisual({
  guidance,
  song,
  activeNotes,
}: {
  guidance: GuidanceMode;
  song: Song;
  activeNotes: SongNote[];
}) {
  if (guidance === "auditory") {
    return <PianoView tonic={song.tonic} mode={song.scale} />;
  }
  return (
    <Chromatone
      keyLabel={song.key}
      tonic={song.tonic}
      activeNotes={activeNotes}
      showKey
      showNotes
      showChordLines="tonic-only"
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
  const [guidance, setGuidance] = useState<GuidanceMode>(guidanceMode ?? "visual");
  const [exampleTrials] = useState(() => createExampleTrials(LESSON_SONGS));
  const [exampleIndex, setExampleIndex] = useState(0);
  const [exampleGuess, setExampleGuess] = useState<Scale | null>(null);
  const [exampleFinished, setExampleFinished] = useState(false);
  const [exampleResults, setExampleResults] = useState<MelodyResult[]>([]);
  const [visualizerSong, setVisualizerSong] = useState(LESSON_SONGS[0]);
  const [playbackSource, setPlaybackSource] = useState<"example" | "playground" | "stopped">("stopped");
  const questionStartedAt = useRef(new Date());
  const replayEvents = useRef<number[]>([]);

  const player = useMelodyPlayer();
  const exampleTrial = exampleTrials[exampleIndex];

  useEffect(() => {
    if (instructionOnly || !exampleTrial) return;
    setExampleGuess(null);
    setExampleFinished(false);
    questionStartedAt.current = new Date();
    replayEvents.current = [0];
    setVisualizerSong(exampleTrial.song);
    setPlaybackSource("example");
    player.play(exampleTrial.song, () => setExampleFinished(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [instructionOnly, exampleTrial]);

  function playPlaygroundSong(song: Song) {
    setVisualizerSong(song);
    setPlaybackSource("playground");
    setExampleFinished(false);
    player.play(song, () => { });
  }

  function answerExample(answer: Scale) {
    if (!exampleTrial || !exampleFinished || exampleGuess === exampleTrial.correctAnswer) return;
    setExampleGuess(answer);
    const submittedAt = new Date();
    setExampleResults((previous) => [
      ...previous,
      {
        trialId: exampleTrial.id,
        songTitle: exampleTrial.song.title,
        correctAnswer: exampleTrial.correctAnswer,
        answer,
        isCorrect: answer === exampleTrial.correctAnswer,
        startedAt: questionStartedAt.current.toISOString(),
        timeElapsedMs: submittedAt.getTime() - questionStartedAt.current.getTime(),
        replayEvents: [...replayEvents.current],
      },
    ]);
    if (answer === exampleTrial.correctAnswer) {
      window.setTimeout(() => setExampleIndex((index) => index + 1), 500);
    }
  }

  function completeExamples() {
    const results = {
      completedAt: new Date().toISOString(),
      guidance,
      songs: LESSON_SONGS.map((song) => song.title),
      examples: exampleResults,
    };
    if (showDownloadResults) {
      downloadJson("melodies-lesson-results.json", results);
    } else {
      onResults?.(results);
    }
  }

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
            ? "The key is shown by notes outlined in gold, and the tonic is outlined in white."
            : "Listen to melodies in both major and minor keys, then identify each mode."}
        </p>
      </>
    );
  }

  function renderPlayground() {
    return (
      <>
        <p className="lesson-body">Play each song here, or answer the shuffled examples below.</p>
        <div className="melody-playground-layout">
          <div className="note-practice-picker-panel">
            <h3 className="note-practice-picker-title">Playground</h3>
            {LESSON_SONG_PAIRS.map(({ id, label, songs }) => (
              <div className="explorer-picker-group melody-song-group" key={id}>
                <span className="explorer-picker-label">{label}</span>
                <div className="explorer-button-row melody-song-options" aria-label={`${label} songs`}>
                  {songs.map((song) => (
                    <button
                      aria-pressed={playbackSource === "playground" && player.isPlaying && visualizerSong.title === song.title}
                      className={`explorer-picker-button${playbackSource === "playground" && player.isPlaying && visualizerSong.title === song.title ? " is-selected" : ""}`}
                      key={song.title}
                      onClick={() => playPlaygroundSong(song)}
                      type="button"
                    >
                      {label} {song.scale === "major" ? "Major" : "Minor"}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="melody-playground-visualizer">
            <button
              className="secondary-button melody-stop-button"
              disabled={!player.isPlaying}
              onClick={() => {
                player.stop();
                setPlaybackSource("stopped");
                if (playbackSource === "example") setExampleFinished(true);
              }}
              type="button"
            >
              Stop
            </button>
            <MelodyVisual
              guidance={guidance}
              song={visualizerSong}
              activeNotes={player.activeNotes}
            />
          </div>
        </div>
      </>
    );
  }

  function renderExamples() {
    if (!exampleTrial) {
      const correctCount = exampleResults.filter((result) => result.isCorrect).length;
      return (
        <>
          <h2>Examples complete</h2>
          <p className="lesson-body">You answered {correctCount} of {exampleResults.length} attempts correctly.</p>
          <button className="primary-button" onClick={completeExamples} type="button">
            {showDownloadResults ? "Download results (JSON)" : "Continue"}
          </button>
        </>
      );
    }

    const correctLabel = exampleTrial.correctAnswer === "major" ? "Major" : "Minor";
    return (
      <>
        <p className="lesson-body">
          Listen to the song, then decide whether it is major or minor.
        </p>
        <div className="example-prompt-row">
          <p className="sequence-status" aria-live="polite">
            {!exampleFinished
              ? "Listen to the melody"
              : exampleGuess === null
                ? "Choose Major or Minor"
                : exampleGuess === exampleTrial.correctAnswer
                  ? `Correct: ${correctLabel}.`
                  : "Not quite. Listen again or try the other answer."}
          </p>
          <div className="test-actions">
            <button
              className="secondary-button"
              type="button"
              onClick={() => {
                replayEvents.current = [
                  ...replayEvents.current,
                  Date.now() - questionStartedAt.current.getTime(),
                ];
                setVisualizerSong(exampleTrial.song);
                setPlaybackSource("example");
                setExampleGuess(null);
                setExampleFinished(false);
                player.play(exampleTrial.song, () => setExampleFinished(true));
              }}
            >
              Hear again
            </button>
          </div>
        </div>
        <div className="choice-row test-answer-options" role="radiogroup" aria-label="Major or minor">
          {(["major", "minor"] as const).map((scale) => (
            <label className={`${exampleGuess === scale ? "selected" : ""}${exampleGuess === exampleTrial.correctAnswer ? " locked" : ""}`} key={scale}>
              <input
                type="radio"
                name="example-answer"
                checked={exampleGuess === scale}
                disabled={!exampleFinished || exampleGuess === exampleTrial.correctAnswer}
                onChange={() => answerExample(scale)}
              />
              {scale === "major" ? "Major" : "Minor"}
            </label>
          ))}
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
