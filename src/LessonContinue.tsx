import { useEffect, useRef, useState, type ReactNode } from "react";

export function useLessonTimer(timer?: number, pauseTimer = false) {
    const initialMilliseconds = timer === undefined ? 0 : Math.max(0, timer * 1000);
    const [remainingMilliseconds, setRemainingMilliseconds] = useState(initialMilliseconds);
    const remainingMillisecondsRef = useRef(initialMilliseconds);
    const deadlineRef = useRef<number | null>(null);

    useEffect(() => {
        if (timer === undefined) return;

        if (pauseTimer) {
            if (deadlineRef.current !== null) {
                remainingMillisecondsRef.current = Math.max(0, deadlineRef.current - Date.now());
                deadlineRef.current = null;
            }
            setRemainingMilliseconds(remainingMillisecondsRef.current);
            return;
        }

        if (remainingMillisecondsRef.current <= 0) return;

        const deadline = Date.now() + remainingMillisecondsRef.current;
        deadlineRef.current = deadline;
        let interval: number | null = null;
        const updateRemaining = () => {
            const remaining = Math.max(0, deadline - Date.now());
            remainingMillisecondsRef.current = remaining;
            setRemainingMilliseconds(remaining);
            if (remaining === 0) {
                if (interval !== null) window.clearInterval(interval);
                deadlineRef.current = null;
            }
        };
        updateRemaining();
        interval = window.setInterval(updateRemaining, 250);
        return () => {
            if (interval !== null) window.clearInterval(interval);
            if (deadlineRef.current === deadline) {
                remainingMillisecondsRef.current = Math.max(0, deadline - Date.now());
                deadlineRef.current = null;
            }
        };
    }, [timer, pauseTimer]);

    return Math.ceil(remainingMilliseconds / 1000);
}

export function LessonContinue({
    timer,
    remainingSeconds,
    onContinue,
    children,
}: {
    timer?: number;
    remainingSeconds: number;
    onContinue: () => void;
    children: ReactNode;
}) {
    const isDebug = new URLSearchParams(window.location.search).get("debug") === "true";
    const isDisabled = timer !== undefined && remainingSeconds > 0 && !isDebug;
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = String(remainingSeconds % 60).padStart(2, "0");

    return (
        <div className="lesson-continue-control">
            {timer !== undefined && (
                <p className="lesson-continue-message">
                    You must stay on this page until the timer is up. Press pause if you need a break
                    <time className="lesson-continue-time" aria-label={`${remainingSeconds} seconds remaining`}>
                        {minutes}:{seconds}
                    </time>
                </p>
            )}
            <button
                className="primary-button"
                type="button"
                disabled={isDisabled}
                onClick={onContinue}
            >
                {children}
            </button>
        </div>
    );
}