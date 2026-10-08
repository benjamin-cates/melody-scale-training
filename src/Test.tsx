import { useState, type ReactNode } from "react";
import { downloadJson } from "./AppRoutes";
import { SONGS } from "./audio/music";
import { TestQuestion, type Question, type UserResponse } from "./TestQuestion";

export type { Question, UserResponse } from "./TestQuestion";

export type TestProps = {
	children?: ReactNode;
	onNext?: (results: UserResponse[]) => void;
	showDownloadResults?: boolean;
	onResults?: (results: UserResponse[]) => void;
	completionTitle?: string;
	questions?: Question[];
	giveAnswerFeedback?: boolean;
};

function shuffle<T>(values: T[]) {
	const shuffled = [...values];
	for (let index = shuffled.length - 1; index > 0; index -= 1) {
		const swapIndex = Math.floor(Math.random() * (index + 1));
		[shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
	}
	return shuffled;
}

export function createPitchQuestions(gap: number, count: number): Question[] {
	const rising_shift = Math.floor(Math.random() * 2);
	return shuffle(Array.from({ length: count }, (_, index) => {
		const firstNote = (index % 12) + 32;
		const rising = (index + Math.floor(index / 12) + rising_shift) % 2 === 0;
		return {
			id: `pitch-${gap}-${index + 1}`,
			type: "pitch",
			rootNote: firstNote,
			secondNote: firstNote + (rising ? gap : -gap),
			correctAnswer: rising ? "increasing" : "decreasing",
		} satisfies Question;
	}));
}

export function createChordQuestions(count: number): Question[] {
	let arpeggio_shift = Math.floor(Math.random() * 4);
	return shuffle(Array.from({ length: count }, (_, index) => {
		const secondInterval = [3, 4, 7, 4][(index + Math.floor(index / 12)) % 4] as any;
		return ({
			id: `chord-${index + 1}`,
			type: "chord",
			rootNote: 39 + index % 12,
			secondInterval,
			presentation: ["arpeggio", "melodic", "melodic", "arpeggio"][(index + Math.floor(index / 12) + arpeggio_shift) % 4] as any,
			correctAnswer: secondInterval === 4 ? "same" : "different",
		} satisfies Question);
	}));
}

export function createMelodyQuestions(count: number): Question[] {
	const affectSongs = SONGS.filter(
		(song) => song.category === "Peaceful" || song.category === "Sad",
	);
	let songs = affectSongs.length > 0 ? affectSongs : SONGS.filter((song) => song.category === "Scales");
	songs = shuffle(songs);
	return Array.from({ length: count }, (_, index) => {
		const song = songs[index % songs.length];
		return {
			id: `melody-${index + 1}-${song.title}`,
			type: "melody",
			songTitle: song.title,
			correctAnswer: song.scale === "major" ? "major" : "minor",
		} satisfies Question;
	});
}

function createBaselineQuestions(): Question[] {
	return [
		...createPitchQuestions(1, 12),
		...createPitchQuestions(2, 12),
		...createPitchQuestions(4, 12),
		...createChordQuestions(36),
		...createMelodyQuestions(12)
	];
}

function createPostTestQuestions(): Question[] {
	return [
		...createPitchQuestions(1, 12),
		...createPitchQuestions(2, 12),
		...createPitchQuestions(4, 12),
		...createChordQuestions(36),
		...createMelodyQuestions(12)
	];
}

export function createPracticeQuestions(group: "audio" | "visual") {
	let questions = shuffle([
		// CHANGE COUNTS LATER
		...createPitchQuestions(1, 12),
		...createPitchQuestions(2, 12),
		...createPitchQuestions(4, 12),
		...createChordQuestions(36),
		...createMelodyQuestions(12)
	]);
	if (group === "audio") {
		questions.forEach(q => (q.guidance = "answer"));
	}
	if (group === "visual") {
		questions.forEach((q, index) => {
			if (index < questions.length / 2) q.guidance = "visual-enhanced";
			else q.guidance = "visual";
		});
	}
	return questions;
}

function sectionLabel(type: Question["type"]) {
	if (type === "pitch") return "Pitch resolution";
	if (type === "chord") return "Simple chords";
	return "Full melodies";
}

export function Test({
	children,
	onNext,
	showDownloadResults = true,
	onResults,
	completionTitle,
	questions: suppliedQuestions,
	giveAnswerFeedback = false,
}: TestProps) {
	const isDebug = new URLSearchParams(window.location.search).get("debug") === "true";
	const [questions] = useState(() => suppliedQuestions ?? createBaselineQuestions());
	const [hasStarted, setHasStarted] = useState(!children);
	const [questionIndex, setQuestionIndex] = useState(0);
	const [trials, setTrials] = useState<UserResponse[]>([]);
	const question = questions[questionIndex];
	const isComplete = !question;

	const skipQuestions = () => {
		if (!question) return;
		const nextIndex = Math.min(questionIndex + 10, questions.length);
		setQuestionIndex(nextIndex);
	};

	const handleResponse = (trial: UserResponse) => {
		console.log(trial);
		const allTrials = [...trials, trial];
		onNext?.(allTrials);
		setTrials(allTrials);
		setQuestionIndex((index) => index + 1);
	};

	if (!hasStarted) {
		return (
			<section className="page-section test-page">
				<article className="test-card">
					{children}
					<button className="primary-button" type="button" onClick={() => setHasStarted(true)}>
						Continue
					</button>
				</article>
			</section>
		);
	}

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

	const typeQuestions = questions.filter((item) => item.type === question.type);
	const typePosition = typeQuestions.findIndex((item) => item.id === question.id) + 1;
	const progress = ((questionIndex + 1) / questions.length) * 100;

	return (
		<section className="page-section test-page">
			<article className="test-card">
				<div className="test-meta">
					<span>{sectionLabel(question.type)} {typePosition} / {typeQuestions.length}</span>
				</div>
				<TestQuestion
					key={question.id}
					question={question}
					giveAnswerFeedback={giveAnswerFeedback}
					isDebug={isDebug}
					onResponse={handleResponse}
					onSkip={skipQuestions}
				/>
				<div className="test-progress" aria-label={`Overall progress: ${questionIndex + 1} of ${questions.length}`}>
					<span>{questionIndex + 1} / {questions.length}</span>
					<span className="test-progress-track"><span style={{ width: `${progress}%` }} /></span>
				</div>
			</article>
		</section>
	);
}
