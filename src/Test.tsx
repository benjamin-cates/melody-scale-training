import { useEffect, useRef, useState } from "react";
import { getAudioBus, getAudioContext, playTone } from "./audio/audio";
import { SONGS, type Song } from "./audio/music";

type TestSection = "pitch" | "chords" | "melodies";
type PitchAnswer = "higher" | "lower";
type ChordAnswer = "same" | "different";
type MelodyAnswer = "positive-affect-major" | "negative-affect-minor";
type Answer = PitchAnswer | ChordAnswer | MelodyAnswer;
type ChordInterval = "major-third" | "minor-third" | "perfect-fifth";
type ChordPresentation = "arpeggio" | "melodic";

type PitchQuestion = {
	id: string;
	section: "pitch";
	firstNote: number;
	secondNote: number;
	correctAnswer: PitchAnswer;
};

type ChordQuestion = {
	id: string;
	section: "chords";
	rootNote: number;
	secondInterval: ChordInterval;
	presentation: ChordPresentation;
	correctAnswer: ChordAnswer;
};

type MelodyQuestion = {
	id: string;
	section: "melodies";
	song: Song;
	correctAnswer: MelodyAnswer;
};

type Question = PitchQuestion | ChordQuestion | MelodyQuestion;

export type ReplayEvent = {
	type: "automatic" | "hear-again";
	elapsedMs: number;
};

export type BaselineTrial = {
	questionId: string;
	question: Omit<Question, "correctAnswer" | "song"> & { songTitle?: string };
	correctAnswer: Answer;
	answer: Answer;
	isCorrect: boolean;
	questionStartedAt: string;
	timeElapsedMs: number;
	replayEvents: number[];
};

export type BaselineTestResults = {
	startedAt: string;
	completedAt?: string;
	elapsedMs: number;
	completed: boolean;
	trials: BaselineTrial[];
};

export type TestProps = {
	onNext?: (results: BaselineTestResults) => void;
};

const CHORD_INTERVALS: Record<ChordInterval, number> = {
	"major-third": 4,
	"minor-third": 3,
	"perfect-fifth": 7,
};

function shuffle<T>(values: T[]) {
	const shuffled = [...values];
	for (let index = shuffled.length - 1; index > 0; index -= 1) {
		const swapIndex = Math.floor(Math.random() * (index + 1));
		[shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
	}
	return shuffled;
}

function createPitchQuestions(): PitchQuestion[] {
	return ([1, 2, 4] as const).flatMap((semitoneGap) =>
		shuffle(Array.from({ length: 12 }, (_, index) => {
			const firstNote = 39 + Math.floor(Math.random() * 12);
			const rising = Math.random() < 0.5;
			return {
				id: `pitch-${semitoneGap}-${index + 1}`,
				section: "pitch",
				semitoneGap,
				firstNote,
				secondNote: firstNote + (rising ? semitoneGap : -semitoneGap),
				correctAnswer: rising ? "higher" : "lower",
			};
		})),
	);
}

function createChordQuestions(): ChordQuestion[] {
	const intervals: ChordInterval[] = [
		...Array.from({ length: 12 }, (): ChordInterval => "major-third"),
		...Array.from({ length: 12 }, (): ChordInterval => "minor-third"),
		...Array.from({ length: 12 }, (): ChordInterval => "perfect-fifth"),
	];
	return shuffle(intervals).map((secondInterval, index) => ({
		id: `chord-${index + 1}`,
		section: "chords",
		rootNote: 39 + Math.floor(Math.random() * 12),
		secondInterval,
		presentation: index % 2 === 0 ? "arpeggio" : "melodic",
		correctAnswer: secondInterval === "major-third" ? "same" : "different",
	}));
}

function createMelodyQuestions(): MelodyQuestion[] {
	const affectSongs = SONGS.filter(
		(song) => song.category === "Peaceful" || song.category === "Sad",
	);
	let songs = affectSongs.length > 0 ? affectSongs : SONGS.filter((song) => song.category === "Scales");
	songs = shuffle(songs);
	return Array.from({ length: 16 }, (_, index) => {
		const song = songs[index % songs.length];
		return {
			id: `melody-${index + 1}-${song.title}`,
			section: "melodies",
			song,
			correctAnswer: song.scale === "major" ? "positive-affect-major" : "negative-affect-minor",
		};
	});
}

function createQuestions() {
	return [...createPitchQuestions(), ...createChordQuestions(), ...createMelodyQuestions()];
}

function questionPrompt(question: Question) {
	if (question.section === "pitch") return "Was the second note higher or lower?";
	if (question.section === "chords") return "Were the two intervals the same or different?";
	return "Which affect label best fits this melody?";
}

function optionsFor(question: Question): { value: Answer; label: string }[] {
	if (question.section === "pitch") {
		return [
			{ value: "lower", label: "Decreasing pitch" },
			{ value: "higher", label: "Increasing pitch" },
		];
	}
	if (question.section === "chords") {
		return [
			{ value: "same", label: "Same" },
			{ value: "different", label: "Different" },
		];
	}
	return [
		{ value: "positive-affect-major", label: "Positive affect (major)" },
		{ value: "negative-affect-minor", label: "Negative affect (minor)" },
	];
}

function sectionLabel(section: TestSection) {
	if (section === "pitch") return "Pitch resolution";
	if (section === "chords") return "Simple chords";
	return "Full melodies";
}

function telemetryQuestion(question: Question): BaselineTrial["question"] {
	if (question.section === "melodies") {
		const { song, correctAnswer, ...questionData } = question;
		return { ...questionData, songTitle: song.title };
	}
	const { correctAnswer, ...questionData } = question;
	return questionData;
}

export function Test({ onNext }: TestProps) {
	const isDebug = new URLSearchParams(window.location.search).get("debug") === "true";
	const [questions] = useState(createQuestions);
	const [questionIndex, setQuestionIndex] = useState(0);
	const [answer, setAnswer] = useState<Answer | null>(null);
	const [trials, setTrials] = useState<BaselineTrial[]>([]);
	const startedAt = useRef(new Date());
	const questionStartedAt = useRef(new Date());
	const taskStartedAt = useRef(new Date());
	const replayEvents = useRef<number[]>([]);
	const oscillators = useRef<OscillatorNode[]>([]);
	const question = questions[questionIndex];
	const isComplete = !question;

	const stopPlayback = () => {
		oscillators.current.forEach((oscillator) => {
			try {
				oscillator.stop();
			} catch {
			}
			oscillator.disconnect();
		});
		oscillators.current = [];
	};

	const playQuestion = (currentQuestion: Question) => {
		stopPlayback();
		const context = getAudioContext();
		void context.resume();
		const start = context.currentTime + 0.05;
		if (currentQuestion.section === "pitch") {
			oscillators.current.push(playTone(currentQuestion.firstNote, start, 0.7, oscillators.current));
			oscillators.current.push(playTone(currentQuestion.secondNote, start + 0.95, 0.7, oscillators.current));
			return;
		}
		if (currentQuestion.section === "chords") {
			const first = [currentQuestion.rootNote, currentQuestion.rootNote + 4];
			const second = [
				currentQuestion.rootNote,
				currentQuestion.rootNote + CHORD_INTERVALS[currentQuestion.secondInterval],
			];
			const noteOffset = currentQuestion.presentation === "arpeggio" ? 0.2 : 0;
			first.forEach((note, index) => oscillators.current.push(playTone(note, start + index * noteOffset, 0.55, oscillators.current)));
			second.forEach((note, index) => oscillators.current.push(playTone(note, start + 0.6 + index * noteOffset, 0.55, oscillators.current)));
			return;
		}
		currentQuestion.song.notes.forEach((note) => {
			const onset = start + Math.min(note.onset ?? 0, 14.5) * 0.5;
			if (onset < start + 15) {
				note.noteIndices.forEach((noteIndex) =>
					oscillators.current.push(playTone(noteIndex, onset, Math.min(note.duration * 0.5, 1), oscillators.current)),
				);
			}
		});
	};

	useEffect(() => {
		if (!question) return;
		questionStartedAt.current = new Date();
		replayEvents.current = [0];
		playQuestion(question);
		return stopPlayback;
	}, [question]);

	useEffect(() => () => stopPlayback(), []);

	const hearAgain = () => {
		if (!question) return;
		replayEvents.current = [
			...replayEvents.current,
      Date.now() - questionStartedAt.current.getTime(),
		];
		playQuestion(question);
	};

	const skipQuestions = () => {
		if (!question) return;
		const nextIndex = Math.min(questionIndex + 10, questions.length);
		const nextQuestion = questions[nextIndex];
		if (nextQuestion) taskStartedAt.current = new Date();
		setAnswer(null);
		stopPlayback();
		setQuestionIndex(nextIndex);
	};

	const next = () => {
		if (!question || answer === null) return;
		const nextAt = new Date();
		const trial: BaselineTrial = {
			questionId: question.id,
			question: telemetryQuestion(question),
			correctAnswer: question.correctAnswer,
			answer,
			isCorrect: answer === question.correctAnswer,
			questionStartedAt: questionStartedAt.current.toISOString(),
			timeElapsedMs: nextAt.getTime() - taskStartedAt.current.getTime(),
			replayEvents: replayEvents.current,
		};
		const allTrials = [...trials, trial];
		const completed = questionIndex === questions.length - 1;
    console.log(allTrials);
		onNext?.({
			startedAt: startedAt.current.toISOString(),
			completedAt: completed ? nextAt.toISOString() : undefined,
			elapsedMs: nextAt.getTime() - startedAt.current.getTime(),
			completed,
			trials: allTrials,
		});
		setTrials(allTrials);
		stopPlayback();
		if (completed) {
			setQuestionIndex((index) => index + 1);
			return;
		}
		taskStartedAt.current = new Date();
		setAnswer(null);
		setQuestionIndex((index) => index + 1);
	};

	if (isComplete) {
		return (
			<section className="page-section test-page">
				<article className="test-card">
					<p className="eyebrow">Baseline complete</p>
					<h2>Thank you.</h2>
					<p className="muted">{trials.length} responses have been recorded.</p>
				</article>
			</section>
		);
	}

	const sectionQuestions = questions.filter((item) => item.section === question.section);
	const sectionPosition = sectionQuestions.findIndex((item) => item.id === question.id) + 1;
	const progress = ((questionIndex + 1) / questions.length) * 100;

	return (
		<section className="page-section test-page">
			<article className="test-card">
				<div className="test-meta">
					<span>{sectionLabel(question.section)} {sectionPosition} / {sectionQuestions.length}</span>
				</div>
				<div className="test-art" aria-hidden="true">
					<span className="test-orbit" />
					<span>♪</span>
				</div>
				<p className="sequence-status" aria-live="polite">
					{"Listen, then choose an answer"}
				</p>
				<form className="test-form" onSubmit={(event) => { event.preventDefault(); next(); }}>
					<fieldset>
						{/* <legend>{questionPrompt(question)}</legend> */}
						<div className="choice-row">
							{optionsFor(question).map((option) => (
								<label className={answer === option.value ? "selected" : ""} key={option.value}>
									<input
										type="radio"
										name={question.id}
										checked={answer === option.value}
										onChange={() => setAnswer(option.value)}
									/>
									{option.label}
								</label>
							))}
						</div>
					</fieldset>
					<div className="test-actions">
						<button className="secondary-button" type="button" onClick={hearAgain}>
							Hear again
						</button>
						{isDebug && (
							<button className="secondary-button" type="button" onClick={skipQuestions}>
								Skip 10 questions
							</button>
						)}
						<div className="test-progress" aria-label={`Overall progress: ${questionIndex + 1} of ${questions.length}`}>
							<span>{questionIndex + 1} / {questions.length}</span>
							<span className="test-progress-track"><span style={{ width: `${progress}%` }} /></span>
						</div>
						<button className="primary-button" type="submit" disabled={answer === null}>
							{questionIndex === questions.length - 1 ? "Finish" : "Next"}
						</button>
					</div>
				</form>
			</article>
		</section>
	);
}
