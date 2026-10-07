import { useEffect, useRef, useState } from "react";
import { getAudioContext, playTone } from "./audio/audio";
import { Chromatone } from "./audio/Chromatone";
import { NOTE_NAMES, SONGS, type Song, type SongNote } from "./audio/music";

type PitchAnswer = "increasing" | "decreasing";
type ChordAnswer = "same" | "different";
type MelodyAnswer = "major" | "minor";
type Answer = PitchAnswer | ChordAnswer | MelodyAnswer;

export interface Question {
    id: string;
    guidance?: "visual" | "visual-enhanced" | "answer" | "none";
    type: "pitch" | "chord" | "melody";
    rootNote?: number;
    secondNote?: number;
    secondInterval?: 3 | 4 | 7;
    presentation?: "arpeggio" | "melodic";
    songTitle?: string;
    correctAnswer: Answer;
}

export type UserResponse = {
    question: Question;
    answer: Answer;
    startedAt: string;
    timeElapsedMs: number;
    replayEvents: number[];
};

type TestQuestionProps = {
    question: Question;
    giveAnswerFeedback: boolean;
    isDebug: boolean;
    onResponse: (response: UserResponse) => void;
    onSkip: () => void;
};

function optionsFor(question: Question): { value: Answer; label: string }[] {
    if (question.type === "pitch") {
        return [
            { value: "decreasing", label: "Decreasing pitch" },
            { value: "increasing", label: "Increasing pitch" },
        ];
    }
    if (question.type === "chord") {
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

type PlaybackEvent = {
    noteIndices: number[];
    onset: number;
    duration: number;
};

function getPlaybackEvents(question: Question, melodySong?: Song): PlaybackEvent[] {
    if (question.type === "pitch") {
        return [
            { noteIndices: [question.rootNote!], onset: 0, duration: 0.7 },
            { noteIndices: [question.secondNote!], onset: 0.6, duration: 0.7 },
        ];
    }
    if (question.type === "chord") {
        const root = question.rootNote!;
        const first = [root, root + 4];
        const second = [root, root + question.secondInterval!];
        const noteOffset = question.presentation === "arpeggio" ? 0.2 : 0;
        return [
            ...first.map((note, index) => ({ noteIndices: [note], onset: index * noteOffset, duration: 0.55 })),
            ...second.map((note, index) => ({ noteIndices: [note], onset: 0.6 + index * noteOffset, duration: 0.55 })),
        ];
    }
    return (melodySong?.notes ?? []).flatMap((note) => {
        const onset = Math.min(note.onset ?? 0, 14.5) * 0.5;
        if (onset >= 15) return [];
        return [{
            noteIndices: note.noteIndices,
            onset,
            duration: Math.min(note.duration * 0.5, 1),
        }];
    });
}

export function TestQuestion({
    question,
    giveAnswerFeedback,
    isDebug,
    onResponse,
    onSkip,
}: TestQuestionProps) {
    const [answer, setAnswer] = useState<Answer | null>(null);
    const startedAt = useRef(new Date());
    const replayEvents = useRef<number[]>([]);
    const oscillators = useRef<OscillatorNode[]>([]);
    const animationFrame = useRef<number | null>(null);
    const activeNotesSignature = useRef("");
    const [activeNotes, setActiveNotes] = useState<SongNote[]>([]);

    const stopPlayback = () => {
        if (animationFrame.current !== null) {
            cancelAnimationFrame(animationFrame.current);
            animationFrame.current = null;
        }
        oscillators.current.forEach((oscillator) => {
            try {
                oscillator.stop();
            } catch {
            }
            oscillator.disconnect();
        });
        oscillators.current = [];
        activeNotesSignature.current = "";
        setActiveNotes([]);
    };

    const playQuestion = () => {
        stopPlayback();
        const context = getAudioContext();
        void context.resume();
        const start = context.currentTime + 0.05;
        const melodySong = question.type === "melody"
            ? SONGS.find((song) => song.title === question.songTitle)
            : undefined;
        const events = getPlaybackEvents(question, melodySong);
        events.forEach((event) => {
            event.noteIndices.forEach((noteIndex) => {
                oscillators.current.push(
                    playTone(noteIndex, start + event.onset, event.duration, oscillators.current),
                );
            });
        });

        const updateActiveNotes = () => {
            const elapsed = context.currentTime - start;
            const nextActiveNotes = events
                .filter((event) => elapsed >= event.onset && elapsed < event.onset + event.duration)
                .map(({ noteIndices, duration }) => ({ noteIndices, duration }));
            const signature = nextActiveNotes.map((note) => note.noteIndices.join(",")).join("|");
            if (signature !== activeNotesSignature.current) {
                activeNotesSignature.current = signature;
                setActiveNotes(nextActiveNotes);
            }
            if (elapsed < Math.max(0, ...events.map((event) => event.onset + event.duration))) {
                animationFrame.current = requestAnimationFrame(updateActiveNotes);
            } else {
                animationFrame.current = null;
            }
        };
        animationFrame.current = requestAnimationFrame(updateActiveNotes);
    };

    useEffect(() => {
        startedAt.current = new Date();
        replayEvents.current = [0];
        playQuestion();
        return stopPlayback;
    }, [question]);

    const hearAgain = () => {
        replayEvents.current = [...replayEvents.current, Date.now() - startedAt.current.getTime()];
        playQuestion();
    };

    const submitAnswer = () => {
        if (answer === null) return;
        const submittedAt = new Date();
        onResponse({
            question,
            answer,
            startedAt: startedAt.current.toISOString(),
            timeElapsedMs: submittedAt.getTime() - startedAt.current.getTime(),
            replayEvents: replayEvents.current,
        });
    };

    const feedbackClass = answer === null
        ? ""
        : answer === question.correctAnswer
            ? "is-correct"
            : "is-incorrect";
    const melodySong = question.type === "melody"
        ? SONGS.find((song) => song.title === question.songTitle)
        : undefined;
    const showVisual = question.guidance === "visual" || question.guidance === "visual-enhanced";
    const showEnhancedVisual = question.guidance === "visual-enhanced";
    const questionTonic = melodySong?.tonic ?? (
        question.rootNote === undefined
            ? undefined
            : ((question.rootNote + 21) % 12 + 12) % 12
    );
    const questionKeyLabel = melodySong?.key ?? (
        questionTonic === undefined ? undefined : `${NOTE_NAMES[questionTonic]} major`
    );
    const visualFeedback = showVisual ? (
        <Chromatone
            keyLabel={showEnhancedVisual ? questionKeyLabel : undefined}
            tonic={showEnhancedVisual ? questionTonic : undefined}
            activeNotes={activeNotes}
            showKey={showEnhancedVisual && question.type === "melody"}
            showNotes
            showNoteDirection={showEnhancedVisual && question.type === "pitch"}
            showChordLines={showEnhancedVisual ? "tonic-only" : "none"}
            emphasizeTonic={showEnhancedVisual}
        />
    ) : null;

    return (
        <>
            {visualFeedback ?? (
                <div className="test-art" aria-hidden="true">
                    <span className="test-orbit" />
                    <span>♪</span>
                </div>
            )}
            <p className={`sequence-status ${giveAnswerFeedback ? feedbackClass : ""}`} aria-live="polite">
                {giveAnswerFeedback && answer !== null
                    ? answer === question.correctAnswer ? "Correct" : "Not quite"
                    : "Listen, then choose an answer"}
            </p>
            <form className="test-form" onSubmit={(event) => { event.preventDefault(); submitAnswer(); }}>
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
                        <button className="secondary-button" type="button" onClick={onSkip}>
                            Skip 10 questions
                        </button>
                    )}
                    <button className="primary-button" type="submit" disabled={answer === null}>
                        Next
                    </button>
                </div>
            </form>
        </>
    );
}