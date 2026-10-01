import { useEffect, useRef, useState } from "react";
import { downloadJson } from "./AppRoutes";
import { getAudioBus, getAudioContext, playTone } from "./audio/audio";
import { SONGS, type Song } from "./audio/music";

type TestSection = "pitch" | "chords" | "melodies";
type PitchAnswer = "increasing" | "decreasing";
type ChordAnswer = "same" | "different";
type MelodyAnswer = "major" | "minor";
type Answer = PitchAnswer | ChordAnswer | MelodyAnswer;

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
	secondInterval: 3 | 4 | 7;
	presentation: "arpeggio" | "melodic";
	correctAnswer: ChordAnswer;
};

type MelodyQuestion = {
	id: string;
	section: "melodies";
	songTitle: string;
	correctAnswer: MelodyAnswer;
};

type Question = PitchQuestion | ChordQuestion | MelodyQuestion;

export type UserResponse = {
	question: Question;
	answer: Answer;
	startedAt: string;
	timeElapsedMs: number;
	replayEvents: number[];
};

export type TestProps = {
	onNext?: (results: UserResponse[]) => void;
	showDownloadResults?: boolean;
	onResults?: (results: UserResponse[]) => void;
	completionTitle?: string;
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
				correctAnswer: rising ? "increasing" : "decreasing",
			};
		})),
	);
}

function createChordQuestions(): ChordQuestion[] {
	const intervals: (3 | 4 | 7)[] = [
		...Array.from({ length: 12 }, (): 3 | 4 | 7 => 4),
		...Array.from({ length: 12 }, (): 3 | 4 | 7 => 3),
		...Array.from({ length: 12 }, (): 3 | 4 | 7 => 7),
	];
	return shuffle(intervals).map((secondInterval, index) => ({
		id: `chord-${index + 1}`,
		section: "chords",
		rootNote: 39 + Math.floor(Math.random() * 12),
		secondInterval,
		presentation: index % 2 === 0 ? "arpeggio" : "melodic",
		correctAnswer: secondInterval === 4 ? "same" : "different",
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
			songTitle: song.title,
			correctAnswer: song.scale === "major" ? "major" : "minor",
		} satisfies MelodyQuestion;
	});
}

function createQuestions() {
	return [...createPitchQuestions(), ...createChordQuestions(), ...createMelodyQuestions()];
}

function optionsFor(question: Question): { value: Answer; label: string }[] {
	if (question.section === "pitch") {
		return [
			{ value: "decreasing", label: "Decreasing pitch" },
			{ value: "increasing", label: "Increasing pitch" },
		];
	}
	if (question.section === "chords") {
		return [
			{ value: "same", label: "Same" },
			{ value: "different", label: "Different" },
		];
	}
	return [
		{ value: "major", label: "Major (positive affect)" },
		{ value: "minor", label: "Minor (negative affect)" },
	];
}

function sectionLabel(section: TestSection) {
	if (section === "pitch") return "Pitch resolution";
	if (section === "chords") return "Simple chords";
	return "Full melodies";
}

export function Test({ onNext, showDownloadResults = true, onResults, completionTitle }: TestProps) {
	const isDebug = new URLSearchParams(window.location.search).get("debug") === "true";
	const [questions] = useState(createQuestions);
	const [questionIndex, setQuestionIndex] = useState(0);
	const [answer, setAnswer] = useState<Answer | null>(null);
	const [trials, setTrials] = useState<UserResponse[]>([]);
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
				currentQuestion.rootNote + currentQuestion.secondInterval
			];
			const noteOffset = currentQuestion.presentation === "arpeggio" ? 0.2 : 0;
			first.forEach((note, index) => oscillators.current.push(playTone(note, start + index * noteOffset, 0.55, oscillators.current)));
			second.forEach((note, index) => oscillators.current.push(playTone(note, start + 0.6 + index * noteOffset, 0.55, oscillators.current)));
			return;
		}
		let song = SONGS.find((s) => s.title === currentQuestion.songTitle);
		song?.notes.forEach((note) => {
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
		const trial: UserResponse = {
			question: question,
			answer,
			startedAt: questionStartedAt.current.toISOString(),
			timeElapsedMs: nextAt.getTime() - taskStartedAt.current.getTime(),
			replayEvents: replayEvents.current,
		};
		const allTrials = [...trials, trial];
		const completed = questionIndex === questions.length - 1;
		console.log(allTrials);
		onNext?.(allTrials);
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
					<p className="eyebrow">{completionTitle ?? "Baseline complete"}</p>
					<h2>Thank you.</h2>
					<p className="muted">{trials.length} responses have been recorded.</p>
					<button
						className="primary-button"
						type="button"
						onClick={() => {
							if (showDownloadResults) {
								downloadJson("test-results.json", {
									exportedAt: new Date().toISOString(),
									results: trials,
								});
							} else {
								onResults?.(trials);
							}
						}}
					>
						{showDownloadResults ? "Download results (JSON)" : "Continue"}
					</button>
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
