import { useEffect, useState } from "react";
import { LearnerChord } from "./LearnerChord";
import { LearnerMelody } from "./LearnerMelody";
import { LearnerNote } from "./LearnerNote";
import { Survey, type SurveyData } from "./Survey";
import { createPracticeQuestions, Test } from "./Test";
import { downloadJson } from "./AppRoutes";
import { Vocoder } from "./audio/VocoderBiquad";

type ExperimentGroup = "audio" | "visual";
type ExperimentStep = "welcome" | "survey" | "listening-instructions" | "baseline" | "notes" | "chords" | "melodies" | "practice" | "post-test" | "complete";
type ResultKey = Exclude<ExperimentStep, "welcome" | "listening-instructions" | "complete">;
type PauseEvent = {
    section: ExperimentStep;
    pausedAt: string;
    resumedAt: string | null;
    durationMs: number | null;
};
type SectionCompletion = {
    section: ResultKey;
    startedAt: string;
    completedAt: string;
    elapsedMs: number;
    pausedDurationMs: number;
    activeDurationMs: number;
};
type ExperimentResults = {
    group: ExperimentGroup | null;
    stages: Partial<Record<ResultKey, unknown>>;
    timing: {
        pauses: PauseEvent[];
        sections: SectionCompletion[];
        currentSectionStartedAt: string | null;
        pausedAt: string | null;
    };
};
type ExperimentSession = {
    results: ExperimentResults;
    stepIndex: number;
};

const RESULT_KEYS: ResultKey[] = ["survey", "baseline", "notes", "chords", "melodies", "practice", "post-test"];
const PAUSE_SECTIONS: ExperimentStep[] = ["welcome", "listening-instructions", ...RESULT_KEYS];

const STEPS: { id: ExperimentStep; label: string }[] = [
    { id: "welcome", label: "Welcome" },
    { id: "survey", label: "Survey" },
    { id: "listening-instructions", label: "Listening setup" },
    { id: "baseline", label: "First test" },
    { id: "notes", label: "Notes lesson" },
    { id: "chords", label: "Chords lesson" },
    { id: "melodies", label: "Melodies lesson" },
    { id: "practice", label: "Interleaved practice" },
    { id: "post-test", label: "Final test" },
    { id: "complete", label: "Complete" },
];

const AGENDA = [
    {
        title: "Survey",
        duration: "3 minutes",
        description: "Establishes current CI factors, demographics, and musical background.",
    },
    {
        title: "Baseline",
        duration: "10 minutes",
        description: "Tests pitch tasks that will be taught in the procedure to establish a baseline.",
    },
    {
        title: "Notes Lesson",
        duration: "10 minutes",
        description: "Teaches different rising and falling note structures.",
    },
    {
        title: "Diatonic Chords Lesson",
        duration: "10 minutes",
        description: "Teaches simple chords: major third, minor third, and perfect fifth.",
    },
    {
        title: "Melodies Lesson",
        duration: "17 minutes",
        description: "A 2AFC task to guess major or minor melodies.",
    },
    {
        title: "Interleaved Practice",
        duration: "After the lessons",
        description: "Mixed pitch, chord, and melody questions for practice across the lesson topics.",
    },
    {
        title: "Post-test",
        duration: "10 minutes",
        description: "Tests how pitch-task performance changed after the lessons.",
    },
    {
        title: "Retention test",
        duration: "10 minutes, a few days later",
        description: "Tests how much pitch understanding was retained compared with baseline.",
    },
];

function emptyResults(group: ExperimentGroup | null): ExperimentResults {
    return {
        group,
        stages: {},
        timing: { pauses: [], sections: [], currentSectionStartedAt: null, pausedAt: null },
    };
}

function isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}

type ListeningInfo = {
    studyCondition: SurveyData["studyCondition"];
    hearingProfile: { studyEar: string };
};

function getListeningInfo(value: unknown): ListeningInfo | null {
    if (!isRecord(value) || !isRecord(value.hearingProfile)) return null;
    const conditions: SurveyData["studyCondition"][] = [
        "cochlear_implant",
        "normal_hearing",
        "ineligible",
        "undetermined",
    ];
    if (
        typeof value.studyCondition !== "string"
        || !conditions.includes(value.studyCondition as SurveyData["studyCondition"])
        || typeof value.hearingProfile.studyEar !== "string"
    ) {
        return null;
    }
    return {
        studyCondition: value.studyCondition as SurveyData["studyCondition"],
        hearingProfile: { studyEar: value.hearingProfile.studyEar },
    };
}

function isPauseEvent(value: unknown): value is PauseEvent {
    return isRecord(value)
        && typeof value.section === "string"
        && PAUSE_SECTIONS.includes(value.section as ExperimentStep)
        && typeof value.pausedAt === "string"
        && (value.resumedAt === null || typeof value.resumedAt === "string")
        && (value.durationMs === null || (typeof value.durationMs === "number" && Number.isFinite(value.durationMs)));
}

function isSectionCompletion(value: unknown): value is SectionCompletion {
    return isRecord(value)
        && typeof value.section === "string"
        && RESULT_KEYS.includes(value.section as ResultKey)
        && typeof value.startedAt === "string"
        && typeof value.completedAt === "string"
        && typeof value.elapsedMs === "number"
        && typeof value.pausedDurationMs === "number"
        && typeof value.activeDurationMs === "number";
}

function storageKey(group: ExperimentGroup) {
    return `melody-scale-experiment:${group}`;
}

function loadResults(group: ExperimentGroup | null): ExperimentResults {
    if (!group) return emptyResults(group);
    try {
        const serialized = window.localStorage.getItem(storageKey(group));
        if (!serialized) return emptyResults(group);

        const parsed: unknown = JSON.parse(serialized);
        if (!isRecord(parsed) || parsed.group !== group || !isRecord(parsed.stages)) {
            return emptyResults(group);
        }

        const parsedStages = parsed.stages;
        const stages = Object.fromEntries(
            RESULT_KEYS
                .filter((key) => Object.prototype.hasOwnProperty.call(parsedStages, key))
                .map((key) => [key, parsedStages[key]]),
        ) as Partial<Record<ResultKey, unknown>>;
        const parsedTiming = isRecord(parsed.timing) ? parsed.timing : {};
        return {
            group,
            stages,
            timing: {
                pauses: Array.isArray(parsedTiming.pauses) ? parsedTiming.pauses.filter(isPauseEvent) : [],
                sections: Array.isArray(parsedTiming.sections) ? parsedTiming.sections.filter(isSectionCompletion) : [],
                currentSectionStartedAt: typeof parsedTiming.currentSectionStartedAt === "string"
                    ? parsedTiming.currentSectionStartedAt
                    : null,
                pausedAt: typeof parsedTiming.pausedAt === "string" ? parsedTiming.pausedAt : null,
            },
        };
    } catch {
        return emptyResults(group);
    }
}

function getResumeIndex(results: ExperimentResults) {
    const firstUnrecorded = RESULT_KEYS.findIndex(
        (key) => !Object.prototype.hasOwnProperty.call(results.stages, key),
    );
    if (firstUnrecorded === -1) return RESULT_KEYS.length + 2;
    if (firstUnrecorded === 0 && RESULT_KEYS.every((key) => !Object.prototype.hasOwnProperty.call(results.stages, key))) {
        return 0;
    }
    if (firstUnrecorded === 0) return 1;
    if (firstUnrecorded === 1) return 2;
    return firstUnrecorded + 2;
}

export function Experiment() {
    const groupValue = new URLSearchParams(window.location.search).get("group");
    const group: ExperimentGroup | null =
        groupValue === "audio" || groupValue === "visual" ? groupValue : null;
    const [session, setSession] = useState<ExperimentSession>(() => {
        let results = loadResults(group);
        const stepIndex = getResumeIndex(results);
        const currentStep = STEPS[stepIndex]?.id;
        if (currentStep === "listening-instructions" && results.timing.currentSectionStartedAt) {
            results = {
                ...results,
                timing: { ...results.timing, currentSectionStartedAt: null },
            };
        }
        if (
            currentStep && RESULT_KEYS.includes(currentStep as ResultKey)
            && !results.timing.currentSectionStartedAt
        ) {
            results = {
                ...results,
                timing: { ...results.timing, currentSectionStartedAt: new Date().toISOString() },
            };
        }
        return { results, stepIndex };
    });
    const { results, stepIndex } = session;
    const step = STEPS[stepIndex].id;
    const isDebug = new URLSearchParams(window.location.search).get("debug") === "true";

    useEffect(() => {
        if (!group || step === "complete") return;

        const warnBeforeLeaving = (event: BeforeUnloadEvent) => {
            event.preventDefault();
            event.returnValue = "";
        };
        window.addEventListener("beforeunload", warnBeforeLeaving);
        return () => window.removeEventListener("beforeunload", warnBeforeLeaving);
    }, [group, step]);

    const clearSavedProgress = () => {
        if (!group || !window.confirm("Clear this group's saved experiment and restart?")) return;
        try {
            window.localStorage.removeItem(storageKey(group));
        } catch {
        }
        setSession({ results: emptyResults(group), stepIndex: 0 });
    };

    const debugResetButton = group && isDebug ? (
        <button className="secondary-button" type="button" onClick={clearSavedProgress}>
            Clear saved experiment
        </button>
    ) : null;

    if (!group) {
        return (
            <section className="page-section narrow">
                <article className="lesson-card">
                    <p className="eyebrow">Study session</p>
                    <h1>Experiment link required</h1>
                    <p className="lesson-body">
                        Open the study link with a group parameter: <code>?group=audio</code> or <code>?group=visual</code>.
                    </p>
                </article>
            </section>
        );
    }

    const guidanceMode = group === "audio" ? "auditory" : "visual";
    const listeningInfo = getListeningInfo(results.stages.survey);
    const vocoderEnabled = step !== "complete" && listeningInfo?.studyCondition === "normal_hearing";
    const hiddenVocoder = <Vocoder forceEnabled={vocoderEnabled} showControls={false} />;

    const persistResults = (nextResults: ExperimentResults) => {
        try {
            window.localStorage.setItem(storageKey(group), JSON.stringify(nextResults));
        } catch {
        }
    };

    const pauseExperiment = () => {
        if (step === "complete" || results.timing.pausedAt) return;
        const pausedAt = new Date().toISOString();
        const nextResults: ExperimentResults = {
            ...results,
            timing: {
                ...results.timing,
                pausedAt,
                pauses: [...results.timing.pauses, {
                    section: step,
                    pausedAt,
                    resumedAt: null,
                    durationMs: null,
                }],
            },
        };
        persistResults(nextResults);
        setSession({ ...session, results: nextResults });
    };

    const resumeExperiment = () => {
        const pausedAt = results.timing.pausedAt;
        if (!pausedAt) return;
        const resumedAt = new Date().toISOString();
        const durationMs = Math.max(0, Date.parse(resumedAt) - Date.parse(pausedAt));
        let matchedPause = false;
        const pauses = results.timing.pauses.map((pause) => {
            if (pause.pausedAt !== pausedAt || pause.resumedAt !== null) return pause;
            matchedPause = true;
            return { ...pause, resumedAt, durationMs };
        });
        if (!matchedPause && step !== "complete") {
            pauses.push({ section: step, pausedAt, resumedAt, durationMs });
        }
        const nextResults: ExperimentResults = {
            ...results,
            timing: { ...results.timing, pausedAt: null, pauses },
        };
        persistResults(nextResults);
        setSession({ ...session, results: nextResults });
    };

    const experimentControls = (
        <div className="experiment-controls">
            {isDebug && step === "survey" && (
                <button
                    className="secondary-button"
                    type="button"
                    onClick={() => recordResults("survey", { skipped: true, skippedAt: new Date().toISOString() })}
                >
                    Skip survey
                </button>
            )}
            {!results.timing.pausedAt && step !== "complete" && (
                <button className="secondary-button" type="button" onClick={pauseExperiment}>
                    Pause experiment
                </button>
            )}
            {debugResetButton}
        </div>
    );

    const pauseOverlay = results.timing.pausedAt ? (
        <div className="experiment-pause-backdrop">
            <section
                className="experiment-pause-dialog"
                role="dialog"
                aria-modal="true"
                aria-labelledby="experiment-pause-title"
            >
                <p className="eyebrow">Experiment paused</p>
                <h2 id="experiment-pause-title">Take a break</h2>
                <p>Your progress is saved. Resume when you are ready.</p>
                <button className="primary-button" type="button" autoFocus onClick={resumeExperiment}>
                    Resume experiment
                </button>
            </section>
        </div>
    ) : null;

    const continueToBaseline = () => {
        const startedAt = new Date().toISOString();
        const nextResults: ExperimentResults = {
            ...results,
            timing: { ...results.timing, currentSectionStartedAt: startedAt },
        };
        persistResults(nextResults);
        setSession({ ...session, results: nextResults, stepIndex: stepIndex + 1 });
    };

    const beginExperiment = () => {
        const startedAt = new Date().toISOString();
        const nextResults: ExperimentResults = {
            ...results,
            timing: { ...results.timing, currentSectionStartedAt: startedAt },
        };
        persistResults(nextResults);
        setSession({ results: nextResults, stepIndex: 1 });
    };

    if (step === "welcome") {
        return (
            <>
                {hiddenVocoder}
                {experimentControls}
                <section className="page-section narrow">
                    <article className="lesson-card">
                        <p className="eyebrow">Study session</p>
                        <h1>Welcome</h1>
                        <p className="lesson-body">
                            This study includes an initial test, three lessons, a post-test, and a delayed retention test.
                        </p>
                        <ol className="lesson-body">
                            {AGENDA.map((item) => (
                                <li key={item.title}>
                                    <strong>{item.title} ({item.duration})</strong> {item.description}
                                </li>
                            ))}
                        </ol>
                        <button
                            className="primary-button"
                            type="button"
                            onClick={beginExperiment}
                        >
                            Begin experiment
                        </button>
                    </article>
                </section>
                {pauseOverlay}
            </>
        );
    }

    if (step === "listening-instructions") {
        return (
            <>
                {hiddenVocoder}
                {experimentControls}
                <section className="page-section narrow">
                    <article className="lesson-card">
                        <p className="eyebrow">Before the baseline</p>
                        <h1>Listening setup</h1>
                        <p className="lesson-body">
                            Please listen using: <strong>{listeningInfo?.hearingProfile.studyEar ?? "the ear assigned by your researcher"}</strong>.
                        </p>
                        {listeningInfo?.studyCondition === "normal_hearing" ? (
                            <p className="lesson-body">
                                You are in the normal-hearing (NH) group. The vocoder is enabled for your session and will make the audio sound strange or unusual. This is expected; continue listening with your assigned ear.
                            </p>
                        ) : listeningInfo?.studyCondition === "cochlear_implant" ? (
                            <p className="lesson-body">
                                You are in the cochlear-implant group. Listen with the indicated ear and use your cochlear implant as you normally do.
                            </p>
                        ) : (
                            <p className="lesson-body">
                                Your listening setup could not be determined from the survey. Please check with the researcher before continuing.
                            </p>
                        )}
                        <button className="primary-button" type="button" onClick={continueToBaseline}>
                            Continue to baseline
                        </button>
                    </article>
                </section>
                {pauseOverlay}
            </>
        );
    }

    const recordResults = (key: ResultKey, value: unknown) => {
        const completedAt = new Date().toISOString();
        const startedAt = results.timing.currentSectionStartedAt ?? completedAt;
        const elapsedMs = Math.max(0, Date.parse(completedAt) - Date.parse(startedAt));
        const pausedDurationMs = results.timing.pauses
            .filter((pause) => pause.section === key && pause.durationMs !== null)
            .reduce((total, pause) => total + (pause.durationMs ?? 0), 0);
        const sectionCompletion: SectionCompletion = {
            section: key,
            startedAt,
            completedAt,
            elapsedMs,
            pausedDurationMs,
            activeDurationMs: Math.max(0, elapsedMs - pausedDurationMs),
        };
        const nextResults: ExperimentResults = {
            group,
            stages: { ...results.stages, [key]: value },
            timing: {
                ...results.timing,
                sections: [
                    ...results.timing.sections.filter((section) => section.section !== key),
                    sectionCompletion,
                ],
                currentSectionStartedAt: RESULT_KEYS.includes(STEPS[stepIndex + 1]?.id as ResultKey)
                    ? completedAt
                    : null,
                pausedAt: null,
            },
        };
        const nextStepIndex = Math.min(stepIndex + 1, STEPS.length - 1);
        persistResults(nextResults);
        setSession({ results: nextResults, stepIndex: nextStepIndex });
    };

    if (step === "complete") {
        return (
            <>
                {hiddenVocoder}
                {experimentControls}
                <section className="page-section narrow">
                    <article className="lesson-card">
                        <p className="eyebrow">Study session complete</p>
                        <h1>Congratulations</h1>
                        <p className="lesson-body">
                            You have finished the survey, lessons, and immediate tests. Please return in a few days
                            for the retention test, and follow the researcher's instructions for what to do next.
                        </p>
                        <button
                            className="primary-button"
                            type="button"
                            onClick={() => downloadJson("experiment-results.json", {
                                exportedAt: new Date().toISOString(),
                                ...results,
                            })}
                        >
                            Download all results (JSON)
                        </button>
                    </article>
                </section>
            </>
        );
    }

    const progressIndex = RESULT_KEYS.indexOf(step as ResultKey) + 1;
    const progress = (
        <p className="eyebrow">
            Experiment - Step {progressIndex} of {RESULT_KEYS.length}: {STEPS[stepIndex].label}
        </p>
    );

    return (
        <>
            {hiddenVocoder}
            {experimentControls}
            {progress}
            {step === "survey" && (
                <Survey
                    showDownloadResults={false}
                    onResults={(value) => recordResults("survey", value)}
                />
            )}
            {step === "baseline" && (
                <Test
                    key="baseline-test"
                    completionTitle="First test complete"
                    showDownloadResults={false}
                    onResults={(value) => recordResults("baseline", value)}
                />
            )}
            {step === "notes" && (
                <LearnerNote
                    guidanceMode={guidanceMode}
                    onResults={(value) => recordResults("notes", value)}
                />
            )}
            {step === "chords" && (
                <LearnerChord
                    guidanceMode={guidanceMode}
                    onResults={(value) => recordResults("chords", value)}
                />
            )}
            {step === "melodies" && (
                <LearnerMelody
                    guidanceMode={guidanceMode}
                    showDownloadResults={false}
                    onResults={(value) => recordResults("melodies", value)}
                />
            )}
            {step === "practice" && (
                <Test
                    key="interleaved-practice"
                    questions={createPracticeQuestions(group)}
                    giveAnswerFeedback
                    completionTitle="Interleaved practice complete"
                    showDownloadResults={false}
                    onResults={(value) => recordResults("practice", value)}
                />
            )}
            {step === "post-test" && (
                <Test
                    key="post-test"
                    completionTitle="Final test complete"
                    showDownloadResults={false}
                    onResults={(value) => recordResults("post-test", value)}
                />
            )}
            {pauseOverlay}
        </>
    );
}
