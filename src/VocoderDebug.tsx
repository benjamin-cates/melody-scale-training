import { useEffect, useRef, useState } from "react";
import {
    createCompensatedVocoderFrequencySweepPreview,
    createInputTonePreview,
    createVocoderFrequencySweepPreview,
    createVocoderTonePreview,
    FREQUENCY_SWEEP_DURATION_SECONDS,
    getVocoderCenterFrequencies,
    measureChannelTonePower,
    TONE_SWEEP_INPUT_AMPLITUDE,
    type ChannelTonePowerCurve,
    type FilterSlope,
    type TonePreview,
} from "./audio/vocoder-biquad";

const MINIMUM_FREQUENCY = 100;
const MAXIMUM_FREQUENCY = 6000;
const FREQUENCY_SAMPLE_COUNT = 160;
const FREQUENCY_SLIDER_STEPS = 1000;
const DEFAULT_FREQUENCY_HZ = 500;
const GRAPH_WIDTH = 1000;
const GRAPH_HEIGHT = 560;
const PLOT_LEFT = 82;
const PLOT_RIGHT = 28;
const PLOT_TOP = 28;
const PLOT_BOTTOM = 68;
const PLOT_WIDTH = GRAPH_WIDTH - PLOT_LEFT - PLOT_RIGHT;
const PLOT_HEIGHT = GRAPH_HEIGHT - PLOT_TOP - PLOT_BOTTOM;
const MINIMUM_POWER_DB = -60;
const MAXIMUM_POWER_DB = 20;
const INPUT_SIGNAL_POWER = TONE_SWEEP_INPUT_AMPLITUDE ** 2 / 2;
const CHANNEL_COLORS = ["#c76745", "#317b72", "#3e75a4", "#8d5a45", "#6f8f47", "#c49a42", "#4d8993", "#9d5b6a"];
const X_TICKS = [100, 200, 500, 1000, 2000, 5000];
const Y_TICKS = [-60, -50, -40, -30, -20, -10, 0, 10, 20];

type ChannelCount = 4 | 8;
type LoadState = "loading" | "ready" | "error";

function makeFrequencies() {
    return Array.from({ length: FREQUENCY_SAMPLE_COUNT }, (_, index) =>
        MINIMUM_FREQUENCY * (MAXIMUM_FREQUENCY / MINIMUM_FREQUENCY) ** (index / (FREQUENCY_SAMPLE_COUNT - 1)));
}

function frequencyFromSliderPosition(position: number) {
    return MINIMUM_FREQUENCY * (MAXIMUM_FREQUENCY / MINIMUM_FREQUENCY) ** (position / FREQUENCY_SLIDER_STEPS);
}

function interpolatePower(points: { frequencyHz: number; outputPower: number }[], frequencyHz: number) {
    const upperIndex = points.findIndex((point) => point.frequencyHz >= frequencyHz);
    if (upperIndex <= 0) return points[Math.max(upperIndex, 0)]?.outputPower ?? 0;

    const lower = points[upperIndex - 1];
    const upper = points[upperIndex];
    const fraction = Math.log(frequencyHz / lower.frequencyHz) / Math.log(upper.frequencyHz / lower.frequencyHz);
    return lower.outputPower + (upper.outputPower - lower.outputPower) * fraction;
}

function xPosition(frequency: number) {
    const fraction = Math.log(frequency / MINIMUM_FREQUENCY)
        / Math.log(MAXIMUM_FREQUENCY / MINIMUM_FREQUENCY);
    return PLOT_LEFT + fraction * PLOT_WIDTH;
}
const ROLLING_AVERAGE_RADIUS = 2;

function yPosition(relativePowerDb: number) {
    const clampedPowerDb = Math.max(MINIMUM_POWER_DB, Math.min(MAXIMUM_POWER_DB, relativePowerDb));
    return PLOT_TOP + PLOT_HEIGHT * (1 - (clampedPowerDb - MINIMUM_POWER_DB) / (MAXIMUM_POWER_DB - MINIMUM_POWER_DB));
}

function relativePowerDb(power: number, referencePower: number) {
    return 10 * Math.log10(Math.max(power, 1e-12) / Math.max(referencePower, 1e-12));
}

function getRollingAverage(points: { frequencyHz: number; outputPower: number }[]) {
    return points.map((point, index) => {
        const start = Math.max(0, index - ROLLING_AVERAGE_RADIUS);
        const end = Math.min(points.length, index + ROLLING_AVERAGE_RADIUS + 1);
        const total = points.slice(start, end).reduce((sum, sample) => sum + sample.outputPower, 0);
        return { ...point, smoothedPower: total / (end - start) };
    });
}

function formatFrequency(frequency: number) {
    return frequency >= 1000 ? `${frequency / 1000}k` : `${frequency}`;
}

export function VocoderDebug() {
    const [channels, setChannels] = useState<ChannelCount>(8);
    const [slope, setSlope] = useState<FilterSlope>(-12);
    const [envelopeCutoffHz, setEnvelopeCutoffHz] = useState(500);
    const [frequencySliderPosition, setFrequencySliderPosition] = useState(Math.round(
        Math.log(DEFAULT_FREQUENCY_HZ / MINIMUM_FREQUENCY)
        / Math.log(MAXIMUM_FREQUENCY / MINIMUM_FREQUENCY)
        * FREQUENCY_SLIDER_STEPS,
    ));
    const [curves, setCurves] = useState<ChannelTonePowerCurve[]>([]);
    const [visibleChannels, setVisibleChannels] = useState<number[]>([]);
    const [showSum, setShowSum] = useState(true);
    const [run, setRun] = useState(0);
    const [loadState, setLoadState] = useState<LoadState>("loading");
    const [error, setError] = useState("");
    const [isSweeping, setIsSweeping] = useState(false);
    const [sweepRun, setSweepRun] = useState(0);
    const previewRef = useRef<TonePreview | null>(null);
    const sweepLineRef = useRef<SVGLineElement | null>(null);
    const selectedFrequencyHz = frequencyFromSliderPosition(frequencySliderPosition);

    useEffect(() => {
        let cancelled = false;
        previewRef.current?.stop();
        previewRef.current = null;
        setIsSweeping(false);
        setLoadState("loading");
        setError("");
        void measureChannelTonePower({ channels, slope, envelopeCutoffHz }, makeFrequencies()).then((result) => {
            if (cancelled) return;
            setCurves(result);
            setVisibleChannels(result.map((curve) => curve.channel));
            setLoadState("ready");
        }).catch((reason: unknown) => {
            if (cancelled) return;
            setError(reason instanceof Error ? reason.message : "Unable to render the tone sweep.");
            setLoadState("error");
        });
        return () => {
            cancelled = true;
            previewRef.current?.stop();
            previewRef.current = null;
        };
    }, [channels, slope, envelopeCutoffHz, run]);

    useEffect(() => {
        if (!isSweeping) return;

        const startedAt = performance.now();
        let animationFrameId = 0;
        const updateSweepLine = (timestamp: number) => {
            const progress = Math.min((timestamp - startedAt) / (FREQUENCY_SWEEP_DURATION_SECONDS * 1000), 1);
            const frequency = MINIMUM_FREQUENCY * (MAXIMUM_FREQUENCY / MINIMUM_FREQUENCY) ** progress;
            const x = xPosition(frequency);
            sweepLineRef.current?.setAttribute("x1", `${x}`);
            sweepLineRef.current?.setAttribute("x2", `${x}`);
            if (progress < 1) {
                animationFrameId = window.requestAnimationFrame(updateSweepLine);
            } else {
                setIsSweeping(false);
            }
        };

        animationFrameId = window.requestAnimationFrame(updateSweepLine);
        return () => window.cancelAnimationFrame(animationFrameId);
    }, [isSweeping, sweepRun]);

    const sums = curves.length > 0
        ? curves[0].points.map((point, pointIndex) => ({
            frequencyHz: point.frequencyHz,
            outputPower: curves.reduce((total, curve) => total + curve.points[pointIndex].outputPower, 0),
        }))
        : [];
    const smoothedSums = getRollingAverage(sums);
    const smoothedCurves = curves.map((curve) => ({
        ...curve,
        points: getRollingAverage(curve.points),
    }));
    const toRelativePowerDb = (power: number) => relativePowerDb(power, INPUT_SIGNAL_POWER);
    const centers = getVocoderCenterFrequencies({ channels, slope, envelopeCutoffHz });
    const selectedOutputPower = curves.reduce(
        (total, curve) => total + interpolatePower(curve.points, selectedFrequencyHz),
        0,
    );

    function playPreview(vocoded: boolean) {
        previewRef.current?.stop();
        previewRef.current = null;
        setIsSweeping(false);
        setError("");
        try {
            const settings = { channels, slope, envelopeCutoffHz };
            previewRef.current = vocoded
                ? createVocoderTonePreview(selectedFrequencyHz, settings)
                : createInputTonePreview(selectedFrequencyHz);
        } catch (reason) {
            setError(reason instanceof Error ? reason.message : "Unable to play the preview.");
        }
    }

    function playFrequencySweep() {
        previewRef.current?.stop();
        previewRef.current = null;
        setIsSweeping(false);
        setError("");
        try {
            previewRef.current = createVocoderFrequencySweepPreview({ channels, slope, envelopeCutoffHz });
            setIsSweeping(true);
            setSweepRun((value) => value + 1);
        } catch (reason) {
            setError(reason instanceof Error ? reason.message : "Unable to play the frequency sweep.");
        }
    }

    function playCompensatedFrequencySweep() {
        previewRef.current?.stop();
        previewRef.current = null;
        setIsSweeping(false);
        setError("");
        try {
            const settings = { channels, slope, envelopeCutoffHz };
            const outputPowerCurve = smoothedSums.map(({ frequencyHz, smoothedPower }) => ({
                frequencyHz,
                outputPower: smoothedPower,
            }));
            previewRef.current = createCompensatedVocoderFrequencySweepPreview(settings, outputPowerCurve);
            setIsSweeping(true);
            setSweepRun((value) => value + 1);
        } catch (reason) {
            setError(reason instanceof Error ? reason.message : "Unable to play the compensated frequency sweep.");
        }
    }

    function toggleChannel(channel: number) {
        setVisibleChannels((current) => current.includes(channel)
            ? current.filter((value) => value !== channel)
            : [...current, channel]);
    }

    return (
        <section className="vocoder-debug-page page-section">
            <header className="vocoder-debug-heading">
                <p className="eyebrow">Audio diagnostics</p>
                <h1>Vocoder <em>debug</em></h1>
                <p className="intro-copy">Tone-by-tone output power for each noise-carrier channel.</p>
            </header>

            <div className="vocoder-debug-toolbar" aria-label="Graph settings">
                <fieldset className="vocoder-debug-control">
                    <legend>Channels</legend>
                    <div className="vocoder-debug-segmented">
                        {([4, 8] as const).map((count) => (
                            <button key={count} type="button" aria-pressed={channels === count} onClick={() => setChannels(count)}>
                                {count}
                            </button>
                        ))}
                    </div>
                </fieldset>
                <fieldset className="vocoder-debug-control">
                    <legend>Filter slope</legend>
                    <div className="vocoder-debug-segmented">
                        {([-12, -24] as const).map((value) => (
                            <button key={value} type="button" aria-pressed={slope === value} onClick={() => setSlope(value)}>
                                {value} dB/oct
                            </button>
                        ))}
                    </div>
                </fieldset>
                <label className="vocoder-debug-cutoff">
                    <span>Envelope low-pass <output>{envelopeCutoffHz} Hz</output></span>
                    <input
                        type="range"
                        min="100"
                        max="2000"
                        step="50"
                        value={envelopeCutoffHz}
                        onChange={(event) => setEnvelopeCutoffHz(Number(event.target.value))}
                    />
                </label>
                <button className="secondary-button vocoder-debug-rerun" type="button" disabled={loadState === "loading"} onClick={() => setRun((value) => value + 1)}>
                    Rerun sweep
                </button>
            </div>

            <div className="vocoder-debug-frequency-panel">
                <label className="vocoder-debug-frequency-control">
                    <span>Test frequency <output>{Math.round(selectedFrequencyHz)} Hz</output></span>
                    <input
                        type="range"
                        min="0"
                        max={FREQUENCY_SLIDER_STEPS}
                        step="1"
                        value={frequencySliderPosition}
                        aria-label="Selected tone frequency"
                        aria-valuetext={`${Math.round(selectedFrequencyHz)} Hz`}
                        onChange={(event) => setFrequencySliderPosition(Number(event.target.value))}
                    />
                    <span className="vocoder-debug-frequency-endpoints"><small>100 Hz</small><small>6 kHz</small></span>
                </label>
                <div className="vocoder-debug-power-readouts" aria-live="polite">
                    <div>
                        <span>Input power</span>
                        <strong>{INPUT_SIGNAL_POWER.toExponential(3)}</strong>
                        <small>mean-square</small>
                    </div>
                    <div>
                        <span>Output power</span>
                        <strong>{loadState === "ready" ? selectedOutputPower.toExponential(3) : "--"}</strong>
                        <small>{loadState === "ready" ? `${toRelativePowerDb(selectedOutputPower).toFixed(1)} dB relative to input` : "awaiting sweep"}</small>
                    </div>
                </div>
                <div className="vocoder-debug-play-controls">
                    <button className="secondary-button" type="button" disabled={loadState !== "ready"} onClick={() => playPreview(false)}>
                        Play input tone
                    </button>
                    <button className="secondary-button" type="button" disabled={loadState !== "ready"} onClick={() => playPreview(true)}>
                        Play vocoder output
                    </button>
                    <button className="secondary-button" type="button" disabled={loadState !== "ready"} onClick={playFrequencySweep}>
                        Play frequency sweep
                    </button>
                    <button
                        className="secondary-button"
                        type="button"
                        disabled={loadState !== "ready"}
                        onClick={playCompensatedFrequencySweep}
                        title="Boosts quieter regions by the inverse output response, capped at 4x input amplitude"
                    >
                        Play compensated sweep
                    </button>
                </div>
            </div>

            <div className="vocoder-debug-legend" aria-label="Visible graph series">
                {curves.map((curve, index) => (
                    <label className="vocoder-debug-legend-item" key={curve.channel}>
                        <input
                            type="checkbox"
                            checked={visibleChannels.includes(curve.channel)}
                            onChange={() => toggleChannel(curve.channel)}
                        />
                        <span className="vocoder-debug-swatch" style={{ backgroundColor: CHANNEL_COLORS[index] }} />
                        Channel {curve.channel} <small>{Math.round(curve.centerFrequencyHz)} Hz</small>
                    </label>
                ))}
                <label className="vocoder-debug-legend-item">
                    <input type="checkbox" checked={showSum} onChange={(event) => setShowSum(event.target.checked)} />
                    <span className="vocoder-debug-swatch is-sum" />
                    Channel sum
                </label>
            </div>

            {loadState === "loading" && <p className="vocoder-debug-status" role="status">Rendering tone sweep...</p>}
            {error && <p className="vocoder-debug-error" role="alert">{error}</p>}

            {loadState === "ready" && (
                <div className="vocoder-debug-plot-wrap">
                    <svg className="vocoder-debug-plot" viewBox={`0 0 ${GRAPH_WIDTH} ${GRAPH_HEIGHT}`} role="img" aria-labelledby="vocoder-debug-chart-title vocoder-debug-chart-description">
                        <title id="vocoder-debug-chart-title">Vocoder tone power by frequency</title>
                        <desc id="vocoder-debug-chart-description">Rolling-averaged channel power curves on a logarithmic frequency axis. Zero decibels represents the input sine wave's mean-square power.</desc>
                        {Y_TICKS.map((tick) => (
                            <g key={`y-${tick}`}>
                                <line className={tick === 0 ? "vocoder-debug-gridline vocoder-debug-zero-line" : "vocoder-debug-gridline"} x1={PLOT_LEFT} x2={GRAPH_WIDTH - PLOT_RIGHT} y1={yPosition(tick)} y2={yPosition(tick)} />
                                <text className="vocoder-debug-tick" x={PLOT_LEFT - 13} y={yPosition(tick) + 5} textAnchor="end">{tick}</text>
                            </g>
                        ))}
                        {X_TICKS.map((tick) => (
                            <g key={`x-${tick}`}>
                                <line className="vocoder-debug-gridline" x1={xPosition(tick)} x2={xPosition(tick)} y1={PLOT_TOP} y2={GRAPH_HEIGHT - PLOT_BOTTOM} />
                                <text className="vocoder-debug-tick" x={xPosition(tick)} y={GRAPH_HEIGHT - PLOT_BOTTOM + 25} textAnchor="middle">{formatFrequency(tick)}</text>
                            </g>
                        ))}
                        <line className="vocoder-debug-axis" x1={PLOT_LEFT} x2={PLOT_LEFT} y1={PLOT_TOP} y2={GRAPH_HEIGHT - PLOT_BOTTOM} />
                        <line className="vocoder-debug-axis" x1={PLOT_LEFT} x2={GRAPH_WIDTH - PLOT_RIGHT} y1={GRAPH_HEIGHT - PLOT_BOTTOM} y2={GRAPH_HEIGHT - PLOT_BOTTOM} />
                        <text className="vocoder-debug-axis-label" x={PLOT_LEFT + PLOT_WIDTH / 2} y={GRAPH_HEIGHT - 15} textAnchor="middle">Frequency (Hz, logarithmic)</text>
                        <text className="vocoder-debug-axis-label" transform={`translate(23 ${PLOT_TOP + PLOT_HEIGHT / 2}) rotate(-90)`} textAnchor="middle">Output power relative to input (dB)</text>
                        <text className="vocoder-debug-zero-label" x={GRAPH_WIDTH - PLOT_RIGHT - 8} y={yPosition(0) - 8} textAnchor="end">Input power (0 dB)</text>
                        {smoothedCurves.map((curve, index) => visibleChannels.includes(curve.channel) && (
                            <g key={`channel-${curve.channel}`} fill={CHANNEL_COLORS[index]} color={CHANNEL_COLORS[index]}>
                                <path
                                    className="vocoder-debug-line"
                                    d={curve.points.map((point, pointIndex) =>
                                        `${pointIndex === 0 ? "M" : "L"}${xPosition(point.frequencyHz)},${yPosition(toRelativePowerDb(point.smoothedPower))}`
                                    ).join(" ")}
                                />
                                {curve.points.map(({ frequencyHz, outputPower, smoothedPower }, pointIndex) => (
                                    <circle key={pointIndex} cx={xPosition(frequencyHz)} cy={yPosition(toRelativePowerDb(smoothedPower))} r="2.5">
                                        <title>{`Channel ${curve.channel}, ${frequencyHz.toFixed(1)} Hz: raw ${outputPower.toExponential(3)}, smoothed ${smoothedPower.toExponential(3)} power`}</title>
                                    </circle>
                                ))}
                            </g>
                        ))}
                        {showSum && (
                            <g fill="#26353c" color="#26353c">
                                <path
                                    className="vocoder-debug-line is-sum"
                                    d={smoothedSums.map((point, index) =>
                                        `${index === 0 ? "M" : "L"}${xPosition(point.frequencyHz)},${yPosition(toRelativePowerDb(point.smoothedPower))}`
                                    ).join(" ")}
                                />
                                {smoothedSums.map(({ frequencyHz, outputPower, smoothedPower }, index) => (
                                    <circle key={index} cx={xPosition(frequencyHz)} cy={yPosition(toRelativePowerDb(smoothedPower))} r="3.2">
                                        <title>{`Channel sum, ${frequencyHz.toFixed(1)} Hz: raw ${outputPower.toExponential(3)}, smoothed ${smoothedPower.toExponential(3)} power`}</title>
                                    </circle>
                                ))}
                            </g>
                        )}
                        <line
                            className="vocoder-debug-selection-line"
                            x1={xPosition(selectedFrequencyHz)}
                            x2={xPosition(selectedFrequencyHz)}
                            y1={PLOT_TOP}
                            y2={GRAPH_HEIGHT - PLOT_BOTTOM}
                            visibility={isSweeping ? "hidden" : "visible"}
                        />
                        <line
                            ref={sweepLineRef}
                            className="vocoder-debug-sweep-line"
                            x1={xPosition(MINIMUM_FREQUENCY)}
                            x2={xPosition(MINIMUM_FREQUENCY)}
                            y1={PLOT_TOP}
                            y2={GRAPH_HEIGHT - PLOT_BOTTOM}
                            visibility={isSweeping ? "visible" : "hidden"}
                            aria-hidden="true"
                        />
                        {!isSweeping && (
                            <circle
                                className="vocoder-debug-selection-point"
                                cx={xPosition(selectedFrequencyHz)}
                                cy={yPosition(toRelativePowerDb(selectedOutputPower))}
                                r="5"
                            >
                                <title>{`Selected ${Math.round(selectedFrequencyHz)} Hz; output power ${selectedOutputPower.toExponential(3)}`}</title>
                            </circle>
                        )}
                    </svg>
                    <p className="vocoder-debug-caption">0 dB equals the input sine's mean-square power ({INPUT_SIGNAL_POWER.toFixed(3)}); display range is -60 to +20 dB. Centered five-sample rolling average; tooltips include raw and smoothed power.</p>
                </div>
            )}
        </section>
    );
}