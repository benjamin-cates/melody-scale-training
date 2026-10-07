import { MAJOR_INTERVALS, MINOR_INTERVALS, NOTE_NAMES, type Scale } from "./music";

const WHITE_KEYS = [0, 2, 4, 5, 7, 9, 11] as const;
const BLACK_KEYS = [1, 3, 6, 8, 10] as const;
const WHITE_KEY_WIDTH = 100;
const BLACK_KEY_WIDTH = 58;

export function PianoView({ tonic, mode }: { tonic: number; mode: Scale }) {
    const intervals = mode === "major" ? MAJOR_INTERVALS : MINOR_INTERVALS;
    const highlightedKeys = new Set(intervals.map((interval) => (tonic + interval) % 12));

    return (
        <div
            className="piano-view"
            role="img"
            aria-label={`${NOTE_NAMES[tonic]} ${mode} piano octave`}
        >
            <div className="piano-keybed">
                <div className="piano-white-keys">
                    {WHITE_KEYS.map((pitchClass, index) => {
                        const isTonic = pitchClass === tonic;
                        const isHighlighted = highlightedKeys.has(pitchClass);
                        return (
                            <div
                                className={`piano-key piano-key-white${isHighlighted ? " is-highlighted" : ""}${isTonic ? " is-tonic" : ""}`}
                                key={pitchClass}
                                style={{
                                    left: `${(index * WHITE_KEY_WIDTH + 1) / 7}%`,
                                    width: `${(WHITE_KEY_WIDTH - 2) / 7}%`,
                                }}
                            >
                                <span className="piano-key-label piano-key-label-white">{NOTE_NAMES[pitchClass]}</span>
                            </div>
                        );
                    })}
                </div>
                <div className="piano-black-keys">
                    {BLACK_KEYS.map((pitchClass) => {
                        const whiteKeyIndex = WHITE_KEYS.findIndex((whitePitch) => whitePitch > pitchClass);
                        const x = whiteKeyIndex * WHITE_KEY_WIDTH - BLACK_KEY_WIDTH / 2;
                        const isTonic = pitchClass === tonic;
                        const isHighlighted = highlightedKeys.has(pitchClass);
                        return (
                            <div
                                className={`piano-key piano-key-black${isHighlighted ? " is-highlighted" : ""}${isTonic ? " is-tonic" : ""}`}
                                key={pitchClass}
                                style={{
                                    left: `${x / 7}%`,
                                    width: `${BLACK_KEY_WIDTH / 7}%`,
                                }}
                            >
                                <span className="piano-key-label piano-key-label-black">{NOTE_NAMES[pitchClass]}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}