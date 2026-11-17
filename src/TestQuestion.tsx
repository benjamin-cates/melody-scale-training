import { useEffect, useRef, useState } from "react";
import { getAudioContext, playTone, type AudioVoice } from "./audio/audio";
import { CHORD_SEQUENCE_DURATION, CHORD_SEQUENCE_GAP, getChordPlaybackEvents, type ChordPlaybackEvent } from "./audio/chord-playback";
import { Chromatone } from "./audio/Chromatone";
import { MusicSymbol, type MusicSymbolType } from "./audio/MusicSymbol";
import { decodeSongNotes, getSongNotes, NOTE_NAMES, SONGS, type Song, type SongNote } from "./audio/music";
import { useSongClassification } from "./audio/useSongClassification";

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
    presentation?: "note-note-chord";
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

async function getPlaybackEvents(question: Question, melodySong?: Song): Promise<ChordPlaybackEvent[]> {
    if (question.type === "pitch") {
        return [
            { noteIndices: [question.rootNote!], onset: 0, duration: 0.7 },
            { noteIndices: [question.secondNote!], onset: 0.6, duration: 0.7 },
        ];
    }
    if (question.type === "chord") {
        const root = question.rootNote!;
        const first: [number, number] = [root, root + 4];
        const second: [number, number] = [root, root + question.secondInterval!];
        return [
            ...getChordPlaybackEvents(first),
            ...getChordPlaybackEvents(second, CHORD_SEQUENCE_DURATION + CHORD_SEQUENCE_GAP),
        ];
    }
    let notes = await getSongNotes(melodySong!);
    let curOnset = 0;
    return notes.flatMap((note) => {
        const onset = note.onset ?? curOnset;
        if (onset >= 15) return [];
        curOnset = onset + (note.duration ?? 0);
        return [{
            noteIndices: note.noteIndices,
            onset: onset * 0.5,
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
    const oscillators = useRef<AudioVoice[]>([]);
    const animationFrame = useRef<number | null>(null);
    const activeNotesSignature = useRef("");
    const previousActiveEventIndices = useRef<number[]>([]);
    const [activeNotes, setActiveNotes] = useState<SongNote[]>([]);
    const [noteAttack, setNoteAttack] = useState<{ id: number; noteIndices: number[] } | null>(null);

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
        previousActiveEventIndices.current = [];
        setActiveNotes([]);
    };

    const playQuestion = async () => {
        stopPlayback();
        const context = getAudioContext();
        void context.resume();
        const start = context.currentTime + 0.05;
        const melodySong = question.type === "melody"
            ? SONGS.find((song) => song.title === question.songTitle)
            : undefined;
        const events = await getPlaybackEvents(question, melodySong);
        console.log(events);
        events.forEach((event) => {
            event.noteIndices.forEach((noteIndex) => {
                oscillators.current.push(
                    playTone(noteIndex, start + event.onset, event.duration),
                );
            });
        });

        const updateActiveNotes = () => {
            const elapsed = context.currentTime - start;
            const activeEventIndices: number[] = [];
            const nextActiveNotes: SongNote[] = [];
            events.forEach((event, index) => {
                if (elapsed < event.onset || elapsed >= event.onset + event.duration) return;
                activeEventIndices.push(index);
                nextActiveNotes.push({ noteIndices: event.noteIndices, duration: event.duration });
            });
            const signature = activeEventIndices.join("|");
            if (signature !== activeNotesSignature.current) {
                const newlyActiveEvents = activeEventIndices.filter((index) => !previousActiveEventIndices.current.includes(index));
                activeNotesSignature.current = signature;
                previousActiveEventIndices.current = activeEventIndices;
                setActiveNotes(nextActiveNotes);
                if (newlyActiveEvents.length > 0) {
                    setNoteAttack((attack) => ({
                        id: (attack?.id ?? 0) + 1,
                        noteIndices: newlyActiveEvents.flatMap((index) => events[index].noteIndices),
                    }));
                }
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
    const melodyKey = useSongClassification(melodySong ?? null);
    const showVisual = question.guidance === "visual" || question.guidance === "visual-enhanced";
    const showEnhancedVisual = question.guidance === "visual-enhanced";
    const questionTonic = melodySong
        ? melodyKey.status === "ready" ? melodyKey.classification?.tonic : undefined
        : (
        question.rootNote === undefined
            ? undefined
            : ((question.rootNote + 21) % 12 + 12) % 12
    );
    const questionKeyLabel = melodySong
        ? melodyKey.status === "ready" ? melodyKey.label : undefined
        : (
        questionTonic === undefined ? undefined : `${NOTE_NAMES[questionTonic]} major`
    );
    const questionSymbol: MusicSymbolType | undefined = question.type === "chord"
        ? "chord"
        : question.type === "melody" ? "melody"
            : "note";
    const visualFeedback = showVisual ? (
        <Chromatone
            keyLabel={showEnhancedVisual ? questionKeyLabel : undefined}
            tonic={showEnhancedVisual ? questionTonic : undefined}
            activeNotes={activeNotes}
            noteAttack={noteAttack}
            showKey={showEnhancedVisual && question.type === "melody"}
            showNotes
            showNoteDirection={showEnhancedVisual && question.type === "pitch"}
            showChordLines={
                showEnhancedVisual
                    && (question.type !== "chord" || activeNotes.some((note) => note.noteIndices.length > 1))
                    ? "tonic-only"
                    : "none"
            }
            emphasizeTonic={showEnhancedVisual}
            symbol={questionSymbol}
        />
    ) : null;

    return (
        <>
            {visualFeedback ?? (
                <div className="test-art" aria-hidden="true">
                    <span className="test-orbit" />

                    <MusicSymbol className="test-music-symbol" type={questionSymbol} />

                </div>
            )}
            {melodyKey.status === "error" && (
                <p className="melody-analyzer-status" role="alert">
                    Could not analyze melody key: {melodyKey.message}
                </p>
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