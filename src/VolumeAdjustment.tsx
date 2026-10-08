import { useState, useEffect } from "react";
import { getAudioContext, playTone } from "./audio/audio";

export function VolumeAdjustment() {
    const [oscillator, setOscillator] = useState<OscillatorNode | null>(null);

    // End oscillator when unmounted
    useEffect(() => {
        return () => {
            if (oscillator) {
                oscillator.stop();
                oscillator.disconnect();
            }
        };
    }, [oscillator]);
    return (
        <div className="volume-adjustment">
            <p className="lesson-body">Press this button to toggle a steady tone. <strong>Adjust volume</strong> to a comfortable level.</p>
            <button
                aria-pressed={!!oscillator}
                className="secondary-button"
                onClick={() => {
                    if (oscillator) {
                        oscillator.stop();
                        oscillator.disconnect();
                        setOscillator(null);
                    }
                    else {
                        setOscillator(playTone(39, getAudioContext().currentTime, 10000));
                    }
                }}
                type="button"
            >
                {oscillator ? "Stop C4 tone" : "Play C4 tone"}
            </button>
        </div>
    );
}