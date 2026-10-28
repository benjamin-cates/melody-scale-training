import { configureOscillatorTimbre, getAudioBus, getAudioContext } from "./audio";

export type FilterSlope = -12 | -24;

export type VocoderSettings = {
    channels: number;
    slope: FilterSlope;
    envelopeCutoffHz: number;
};

export const DEFAULT_VOCODER_SETTINGS: VocoderSettings = {
    channels: 8,
    slope: -12,
    envelopeCutoffHz: 500,
};

const FILTER_RESPONSE_SAMPLES = 4096;
const NOISE_SOURCE_POWER = 1 / 3;
const MINIMUM_FREQUENCY = 100;
const MAXIMUM_FREQUENCY = 6000;
export const TONE_SWEEP_INPUT_AMPLITUDE = 0.2;

function greenwoodPosition(frequency: number) {
    return Math.log10(frequency / 165.4 + 0.88) / 2.1;
}

function greenwoodFrequency(position: number) {
    return 165.4 * (10 ** (2.1 * position) - 0.88);
}

export function getVocoderCenterFrequencies(settings: VocoderSettings): number[] {
    const start = greenwoodPosition(MINIMUM_FREQUENCY);
    const end = greenwoodPosition(MAXIMUM_FREQUENCY);
    return Array.from({ length: settings.channels }, (_, index) =>
        greenwoodFrequency(start + ((end - start) * index) / Math.max(settings.channels - 1, 1)));
}

function getBandEdges(centers: number[]) {
    return centers.map((center, index) => ({
        center,
        low: index === 0 ? MINIMUM_FREQUENCY : Math.sqrt(centers[index - 1] * center),
        high: index === centers.length - 1 ? MAXIMUM_FREQUENCY : Math.sqrt(center * centers[index + 1]),
    }));
}


function makeBandPass(
    context: BaseAudioContext,
    center: number,
    low: number,
    high: number,
    slope: FilterSlope,
): BiquadFilterNode[] {
    const bandwidth = Math.max(1, high - low);
    const stages = slope === -24 ? 2 : 1;

    // Slightly scale Q (e.g., by multiplying by 0.75) to widen the passband 
    // and increase crossover overlap, smoothing out frequency response ripples.
    const adjustedQ = (center / bandwidth) * 0.75;

    return Array.from({ length: stages }, () => {
        const filter = context.createBiquadFilter();
        filter.type = "bandpass";
        filter.frequency.value = center;
        filter.Q.value = adjustedQ;
        return filter;
    });
}

function makeFourthOrderLowPass(context: BaseAudioContext, frequency: number): BiquadFilterNode[] {
    return [0.5411961, 1.306563].map((q) => {
        const filter = context.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.value = frequency;
        filter.Q.value = q;
        return filter;
    });
}

function connectFilters(input: AudioNode, filters: BiquadFilterNode[]) {
    let previous: AudioNode = input;
    filters.forEach((filter) => {
        previous.connect(filter);
        previous = filter;
    });
}

function getCascadePower(filters: BiquadFilterNode[], sampleRate: number): number {
    const nyquist = sampleRate / 2;
    const frequencies = Float32Array.from({ length: FILTER_RESPONSE_SAMPLES }, (_, index) =>
        ((index + 0.5) * nyquist) / FILTER_RESPONSE_SAMPLES);
    const magnitudes = new Float32Array(FILTER_RESPONSE_SAMPLES).fill(1);
    const phase = new Float32Array(FILTER_RESPONSE_SAMPLES);

    filters.forEach((filter) => {
        const response = new Float32Array(FILTER_RESPONSE_SAMPLES);
        filter.getFrequencyResponse(frequencies, response, phase);
        for (let index = 0; index < response.length; index += 1) {
            magnitudes[index] *= response[index];
        }
    });

    return magnitudes.reduce((power, magnitude) => power + magnitude * magnitude, 0) / magnitudes.length;
}

function createNoiseCarrier(context: BaseAudioContext): AudioBufferSourceNode {
    const buffer = context.createBuffer(1, context.sampleRate * 2, context.sampleRate);
    const samples = buffer.getChannelData(0);
    for (let index = 0; index < samples.length; index += 1) {
        samples[index] = Math.random() * 2 - 1;
    }
    const source = context.createBufferSource();
    source.buffer = buffer;
    source.loop = true;
    return source;
}

export type VocoderSession = {
    channels: AnalyserNode[];
    ready: Promise<void>;
    dispose: () => void;
};

let activeSessionId = 0;

type VocoderGraph = {
    channels: AnalyserNode[];
    nodes: AudioNode[];
    carriers: AudioBufferSourceNode[];
};

function buildVocoderGraph(
    context: BaseAudioContext,
    input: AudioNode,
    destination: AudioNode,
    settings: VocoderSettings,
    separateChannelOutputs = false,
): VocoderGraph {
    const sum = context.createGain();
    const channels: AnalyserNode[] = [];
    const nodes: AudioNode[] = [input, sum];
    const carriers: AudioBufferSourceNode[] = [];
    const channelMerger = separateChannelOutputs ? context.createChannelMerger(settings.channels) : null;
    if (channelMerger) nodes.push(channelMerger);

    try {
        const edges = getBandEdges(getVocoderCenterFrequencies(settings));
        const analysisPowers: number[] = [];

        edges.forEach(({ center, low, high }, channelIndex) => {
            const analysisFilters = makeBandPass(context, center, low, high, settings.slope);
            nodes.push(...analysisFilters);
            const rectifier = context.createWaveShaper();
            nodes.push(rectifier);
            rectifier.curve = Float32Array.from({ length: 1025 }, (_, index) => {
                const x = (index * 2) / 1024 - 1;
                return x * x; // Squaring maps input to true power (amplitude squared)
            });
            const envelopeFilters = makeFourthOrderLowPass(context, settings.envelopeCutoffHz);
            nodes.push(...envelopeFilters);
            const analyser = context.createAnalyser();
            nodes.push(analyser);
            analyser.fftSize = 128;
            analyser.smoothingTimeConstant = 0.3;
            const carrier = createNoiseCarrier(context);
            carriers.push(carrier);
            nodes.push(carrier);
            const carrierFilters = makeBandPass(context, center, low, high, settings.slope);
            nodes.push(...carrierFilters);
            const carrierLevel = context.createGain();
            nodes.push(carrierLevel);
            carrierLevel.gain.value = 1 / Math.sqrt(NOISE_SOURCE_POWER * getCascadePower(carrierFilters, context.sampleRate));
            const modulator = context.createGain();
            nodes.push(modulator);
            modulator.gain.value = 0;
            analysisPowers.push(getCascadePower(analysisFilters, context.sampleRate));

            connectFilters(input, analysisFilters);
            analysisFilters.at(-1)?.connect(rectifier);
            connectFilters(rectifier, envelopeFilters);
            envelopeFilters.at(-1)?.connect(modulator.gain);
            envelopeFilters.at(-1)?.connect(analyser);
            carrier.connect(modulator);
            modulator.connect(carrierLevel);
            connectFilters(carrierLevel, carrierFilters);
            if (channelMerger) {
                carrierFilters.at(-1)?.connect(channelMerger, 0, channelIndex);
            } else {
                carrierFilters.at(-1)?.connect(sum);
            }
            carrier.start();

            channels.push(analyser);
        });

        const outputGain = 1 / Math.sqrt(0.5 * analysisPowers.reduce((total, power) => total + power, 0));
        if (channelMerger) {
            const normalization = context.createGain();
            nodes.push(normalization);
            normalization.gain.value = outputGain;
            channelMerger.connect(normalization).connect(destination);
        } else {
            sum.gain.value = outputGain;
            sum.connect(destination);
        }
        return { channels, nodes, carriers };
    } catch (reason) {
        carriers.forEach((carrier) => {
            try {
                carrier.stop();
            } catch {
                // The carrier may already have stopped.
            }
        });
        nodes.forEach((node) => node.disconnect());
        throw reason;
    }
}

export function createVocoder(settings: VocoderSettings): VocoderSession {
    const context = getAudioContext();
    const bus = getAudioBus();
    const source = context.createGain();
    let graph: VocoderGraph;
    let busRouted = false;
    const sessionId = activeSessionId + 1;
    activeSessionId = sessionId;

    try {
        graph = buildVocoderGraph(context, source, context.destination, settings);
        bus.disconnect();
        bus.connect(source);
        busRouted = true;
        return {
            channels: graph.channels,
            ready: context.resume(),
            dispose() {
                graph.carriers.forEach((carrier) => {
                    try {
                        carrier.stop();
                    } catch {
                        // The carrier may already have stopped.
                    }
                });
                graph.nodes.forEach((node) => node.disconnect());
                if (busRouted && activeSessionId === sessionId) {
                    bus.disconnect();
                    bus.connect(context.destination);
                    busRouted = false;
                }
            },
        };
    } catch (reason) {
        if (busRouted && activeSessionId === sessionId) {
            bus.disconnect();
            bus.connect(context.destination);
        }
        throw reason;
    }
}

export type TonePreview = {
    stop: () => void;
};

const TONE_PREVIEW_DURATION_SECONDS = 1.5;
export const FREQUENCY_SWEEP_DURATION_SECONDS = 5;
const TONE_PREVIEW_FADE_SECONDS = 0.025;
const MAX_SWEEP_COMPENSATION = 4;

type FrequencyPowerPoint = { frequencyHz: number; outputPower: number };

function interpolateFrequencyPower(points: FrequencyPowerPoint[], frequencyHz: number) {
    const upperIndex = points.findIndex((point) => point.frequencyHz >= frequencyHz);
    if (upperIndex < 0) return points.at(-1)?.outputPower ?? 0;
    if (upperIndex === 0) return points[0]?.outputPower ?? 0;

    const lower = points[upperIndex - 1];
    const upper = points[upperIndex];
    const fraction = Math.log(frequencyHz / lower.frequencyHz) / Math.log(upper.frequencyHz / lower.frequencyHz);
    return lower.outputPower + (upper.outputPower - lower.outputPower) * fraction;
}

function makeCompensatedSweepAmplitudeCurve(points: FrequencyPowerPoint[]) {
    const peakPower = Math.max(0, ...points.map(({ outputPower }) => outputPower));
    if (points.length === 0 || peakPower <= 0) return undefined;

    const sampleCount = 1025;
    return Float32Array.from({ length: sampleCount }, (_, index) => {
        const progress = index / (sampleCount - 1);
        const frequencyHz = MINIMUM_FREQUENCY * (MAXIMUM_FREQUENCY / MINIMUM_FREQUENCY) ** progress;
        const outputPower = interpolateFrequencyPower(points, frequencyHz);
        const compensation = Math.min(
            MAX_SWEEP_COMPENSATION,
            (peakPower / Math.max(outputPower, peakPower / (MAX_SWEEP_COMPENSATION ** 4))) ** 0.25,
        );
        const time = progress * FREQUENCY_SWEEP_DURATION_SECONDS;
        const fade = Math.min(1, (FREQUENCY_SWEEP_DURATION_SECONDS - time) / TONE_PREVIEW_FADE_SECONDS);
        return TONE_SWEEP_INPUT_AMPLITUDE * compensation * fade;
    });
}

function createTonePreview(
    frequencyHz: number,
    settings?: VocoderSettings,
    options: { durationSeconds?: number; endFrequencyHz?: number; amplitudeCurve?: Float32Array<ArrayBuffer> } = {},
): TonePreview {
    const context = getAudioContext();
    const input = context.createGain();
    let graph: VocoderGraph | null = null;
    if (settings) {
        graph = buildVocoderGraph(context, input, context.destination, settings);
    } else {
        input.connect(context.destination);
    }

    const oscillator = context.createOscillator();
    configureOscillatorTimbre(context, oscillator);
    oscillator.connect(input);

    const startTime = context.currentTime;
    const stopTime = startTime + (options.durationSeconds ?? TONE_PREVIEW_DURATION_SECONDS);
    oscillator.frequency.setValueAtTime(frequencyHz, startTime);
    if (options.endFrequencyHz !== undefined) {
        oscillator.frequency.exponentialRampToValueAtTime(options.endFrequencyHz, stopTime);
    }
    if (options.amplitudeCurve) {
        input.gain.setValueCurveAtTime(options.amplitudeCurve, startTime, stopTime - startTime);
    } else {
        input.gain.setValueAtTime(TONE_SWEEP_INPUT_AMPLITUDE, startTime);
        input.gain.setValueAtTime(TONE_SWEEP_INPUT_AMPLITUDE, stopTime - TONE_PREVIEW_FADE_SECONDS);
        input.gain.linearRampToValueAtTime(0, stopTime);
    }

    let stopped = false;
    const stop = () => {
        if (stopped) return;
        stopped = true;
        oscillator.onended = null;
        try {
            oscillator.stop();
        } catch {
            // The oscillator may already have stopped.
        }
        oscillator.disconnect();
        if (graph) {
            graph.carriers.forEach((carrier) => {
                try {
                    carrier.stop();
                } catch {
                    // The carrier may already have stopped.
                }
            });
            graph.nodes.forEach((node) => node.disconnect());
        } else {
            input.disconnect();
        }
    };

    oscillator.onended = stop;
    oscillator.start(startTime);
    oscillator.stop(stopTime);
    void context.resume().catch(stop);
    return { stop };
}

export function createInputTonePreview(frequencyHz: number): TonePreview {
    return createTonePreview(frequencyHz);
}

export function createVocoderTonePreview(frequencyHz: number, settings: VocoderSettings): TonePreview {
    return createTonePreview(frequencyHz, settings);
}

export function createVocoderFrequencySweepPreview(settings: VocoderSettings): TonePreview {
    return createTonePreview(MINIMUM_FREQUENCY, settings, {
        durationSeconds: FREQUENCY_SWEEP_DURATION_SECONDS,
        endFrequencyHz: MAXIMUM_FREQUENCY,
    });
}

export function createCompensatedVocoderFrequencySweepPreview(
    settings: VocoderSettings,
    outputPowerCurve: FrequencyPowerPoint[],
): TonePreview {
    return createTonePreview(MINIMUM_FREQUENCY, settings, {
        durationSeconds: FREQUENCY_SWEEP_DURATION_SECONDS,
        endFrequencyHz: MAXIMUM_FREQUENCY,
        amplitudeCurve: makeCompensatedSweepAmplitudeCurve(outputPowerCurve),
    });
}

type BandResponseResult = {
    centerHz: number;
    peakHz: number;
    peakDb: number;
    lowEdgeDb: number;
    highEdgeDb: number;
    passed: boolean;
};

type TonePowerResult = {
    inputFrequencyHz: number;
    outputPower: number;
    outputRms: number;
    relativeToMedianDb: number;
};

type FrequencyResponseConfiguration = {
    channels: number;
    slope: FilterSlope;
    envelopeCutoffHz: number;
    passed: boolean;
    bands: BandResponseResult[];
    curve: { frequencyHz: number; magnitudeDb: number }[];
    tonePowerSpreadDb: number;
    tonePowerToleranceDb: number;
    tonePowerConsistent: boolean;
    tonePower: TonePowerResult[];
};

const TONE_POWER_TOLERANCE_DB = 6;

function toDecibels(magnitude: number) {
    return 20 * Math.log10(Math.max(magnitude, 1e-8));
}

function measureCascade(filters: BiquadFilterNode[], frequencies: Float32Array<ArrayBuffer>) {
    const magnitude = new Float32Array(frequencies.length).fill(1);
    const phase = new Float32Array(frequencies.length);
    filters.forEach((filter) => {
        const response = new Float32Array(frequencies.length);
        filter.getFrequencyResponse(frequencies, response, phase);
        for (let index = 0; index < response.length; index += 1) magnitude[index] *= response[index];
    });
    return magnitude;
}

async function measureToneOutputPower(settings: VocoderSettings, frequencies: number[]): Promise<TonePowerResult[]> {
    const sampleRate = 48000;
    const framesPerTone = Math.round(sampleRate * 0.25);
    const totalFrames = framesPerTone * frequencies.length;
    const context = new OfflineAudioContext(1, totalFrames, sampleRate);
    const inputGain = context.createGain();
    inputGain.gain.value = TONE_SWEEP_INPUT_AMPLITUDE;
    const oscillator = context.createOscillator();
    oscillator.type = "sine";
    oscillator.connect(inputGain);
    const graph = buildVocoderGraph(context, inputGain, context.destination, settings);

    frequencies.forEach((frequency, index) => {
        oscillator.frequency.setValueAtTime(frequency, (index * framesPerTone) / sampleRate);
    });
    oscillator.start(0);
    oscillator.stop(totalFrames / sampleRate);

    const rendered = await context.startRendering();
    const output = rendered.getChannelData(0);
    const settleFrames = Math.round(sampleRate * 0.08);
    const measurements = frequencies.map((inputFrequencyHz, index) => {
        const segmentStart = index * framesPerTone;
        const measurementStart = segmentStart + settleFrames;
        const measurementEnd = segmentStart + framesPerTone;
        let sumSquares = 0;
        for (let frame = measurementStart; frame < measurementEnd; frame += 1) {
            sumSquares += output[frame] * output[frame];
        }
        const outputPower = sumSquares / (measurementEnd - measurementStart);
        return {
            inputFrequencyHz,
            outputPower,
            outputRms: Math.sqrt(outputPower),
            relativeToMedianDb: 0,
        };
    });

    const sortedPowers = measurements.map(({ outputPower }) => outputPower).sort((left, right) => left - right);
    const medianPower = sortedPowers[Math.floor(sortedPowers.length / 2)];
    measurements.forEach((measurement) => {
        measurement.relativeToMedianDb = 10 * Math.log10(Math.max(measurement.outputPower, 1e-12) / Math.max(medianPower, 1e-12));
    });
    graph.carriers.forEach((carrier) => {
        try {
            carrier.stop();
        } catch {
            // Offline rendering may already have stopped the carrier.
        }
    });
    graph.nodes.forEach((node) => node.disconnect());
    oscillator.disconnect();
    return measurements;
}

export type ChannelTonePowerCurve = {
    channel: number;
    centerFrequencyHz: number;
    points: { frequencyHz: number; outputPower: number }[];
};

export async function measureChannelTonePower(settings: VocoderSettings, frequencies: number[]): Promise<ChannelTonePowerCurve[]> {
    const sampleRate = 48000;
    const framesPerTone = Math.round(sampleRate);
    const totalFrames = framesPerTone * frequencies.length;
    const context = new OfflineAudioContext(settings.channels, totalFrames, sampleRate);
    const inputGain = context.createGain();
    inputGain.gain.value = TONE_SWEEP_INPUT_AMPLITUDE;
    const oscillator = context.createOscillator();
    oscillator.type = "sine";
    oscillator.connect(inputGain);
    const graph = buildVocoderGraph(context, inputGain, context.destination, settings, true);

    frequencies.forEach((frequency, index) => {
        oscillator.frequency.setValueAtTime(frequency, (index * framesPerTone) / sampleRate);
    });
    oscillator.start(0);
    oscillator.stop(totalFrames / sampleRate);

    const rendered = await context.startRendering();
    const settleFrames = Math.round(sampleRate * 0.08);
    const centers = getVocoderCenterFrequencies(settings);
    const curves = centers.map((centerFrequencyHz, channelIndex) => {
        const output = rendered.getChannelData(channelIndex);
        const points = frequencies.map((frequencyHz, frequencyIndex) => {
            const segmentStart = frequencyIndex * framesPerTone;
            const measurementStart = segmentStart + settleFrames;
            const measurementEnd = segmentStart + framesPerTone;
            let sumSquares = 0;
            for (let frame = measurementStart; frame < measurementEnd; frame += 1) {
                sumSquares += output[frame] * output[frame];
            }
            return {
                frequencyHz,
                outputPower: sumSquares / (measurementEnd - measurementStart),
            };
        });
        return {
            channel: channelIndex + 1,
            centerFrequencyHz,
            points,
        };
    });

    graph.carriers.forEach((carrier) => {
        try {
            carrier.stop();
        } catch {
            // Offline rendering may already have stopped the carrier.
        }
    });
    graph.nodes.forEach((node) => node.disconnect());
    oscillator.disconnect();
    return curves;
}

export async function debugVocoderChannelTonePower() {
    const frequencies = Array.from({ length: 200 }, (_, index) =>
        MINIMUM_FREQUENCY * (MAXIMUM_FREQUENCY / MINIMUM_FREQUENCY) ** (index / 199));
    const curves: (ChannelTonePowerCurve & {
        channels: number;
        slope: FilterSlope;
        variableName: string;
        desmosExpression: string;
    })[] = [];

    for (const channels of [4, 8] as const) {
        for (const slope of [-12, -24] as const) {
            const settings: VocoderSettings = {
                channels,
                slope,
                envelopeCutoffHz: DEFAULT_VOCODER_SETTINGS.envelopeCutoffHz,
            };
            const channelCurves = await measureChannelTonePower(settings, frequencies);
            channelCurves.forEach((curve) => {
                const variableName = `P_{${curves.length + 1}}`;
                const pointsExpression = curve.points.map(({ frequencyHz, outputPower }) =>
                    `(${frequencyHz.toFixed(3)},${outputPower.toExponential(8)})`).join(",");
                curves.push({
                    ...curve,
                    channels,
                    slope,
                    variableName,
                    desmosExpression: `${variableName}=[${pointsExpression}]`,
                });
            });
        }
    }

    const desmosExpressions = curves.map(({ desmosExpression }) => desmosExpression).join("\n");
    console.table(curves.map(({ variableName, channels, slope, channel, centerFrequencyHz }) => ({
        variableName,
        channels,
        slope,
        channel,
        centerFrequencyHz,
    })));
    console.log(desmosExpressions);
    return { curves, desmosExpressions };
}

export async function testVocoderFrequencyResponse() {
    const context = new OfflineAudioContext(1, 1, 48000);
    const configurations: FrequencyResponseConfiguration[] = [];
    const toneFrequencies = Array.from({ length: 25 }, (_, index) =>
        MINIMUM_FREQUENCY * (MAXIMUM_FREQUENCY / MINIMUM_FREQUENCY) ** (index / 24));

    for (const channels of [4, 8] as const) {
        for (const slope of [-12, -24] as const) {
            const settings: VocoderSettings = {
                channels,
                slope,
                envelopeCutoffHz: DEFAULT_VOCODER_SETTINGS.envelopeCutoffHz,
            };
            const bands = getBandEdges(getVocoderCenterFrequencies(settings));
            const bandResults: BandResponseResult[] = [];
            const sweepFrequencies = Float32Array.from({ length: 129 }, (_, index) =>
                MINIMUM_FREQUENCY * (MAXIMUM_FREQUENCY / MINIMUM_FREQUENCY) ** (index / 128));
            const curvePower = new Float64Array(sweepFrequencies.length);

            bands.forEach(({ center, low, high }) => {
                const filters = [
                    ...makeBandPass(context, center, low, high, slope),
                    ...makeBandPass(context, center, low, high, slope),
                ];
                const testFrequencies = Float32Array.from([low, center, high]);
                const edgeMagnitudes = measureCascade(filters, testFrequencies);
                const responseCurve = measureCascade(filters, sweepFrequencies);
                const peakIndex = responseCurve.reduce((peak, value, index) => value > responseCurve[peak] ? index : peak, 0);
                responseCurve.forEach((magnitude, index) => {
                    curvePower[index] += magnitude * magnitude;
                });
                const centerMagnitude = edgeMagnitudes[1];
                const peakError = Math.abs(sweepFrequencies[peakIndex] - center) / center;
                const passed = Number.isFinite(centerMagnitude)
                    && centerMagnitude >= 0.99
                    && edgeMagnitudes[0] < centerMagnitude
                    && edgeMagnitudes[2] < centerMagnitude
                    && peakError <= 0.05;
                bandResults.push({
                    centerHz: center,
                    peakHz: sweepFrequencies[peakIndex],
                    peakDb: toDecibels(responseCurve[peakIndex]),
                    lowEdgeDb: toDecibels(edgeMagnitudes[0]),
                    highEdgeDb: toDecibels(edgeMagnitudes[2]),
                    passed,
                });
                filters.forEach((filter) => filter.disconnect());
            });

            configurations.push({
                channels,
                slope,
                envelopeCutoffHz: settings.envelopeCutoffHz,
                passed: false,
                bands: bandResults,
                curve: Array.from(curvePower, (power, index) => ({
                    frequencyHz: sweepFrequencies[index],
                    magnitudeDb: toDecibels(Math.sqrt(power / channels)),
                })),
                tonePowerSpreadDb: 0,
                tonePowerToleranceDb: TONE_POWER_TOLERANCE_DB,
                tonePowerConsistent: false,
                tonePower: [],
            });
            const configuration = configurations.at(-1)!;
            configuration.tonePower = await measureToneOutputPower(settings, toneFrequencies);
            const outputPowers = configuration.tonePower.map(({ outputPower }) => outputPower);
            const minimumPower = Math.min(...outputPowers);
            const maximumPower = Math.max(...outputPowers);
            configuration.tonePowerSpreadDb = minimumPower > 0
                ? 10 * Math.log10(maximumPower / minimumPower)
                : Number.POSITIVE_INFINITY;
            configuration.tonePowerConsistent = configuration.tonePowerSpreadDb <= TONE_POWER_TOLERANCE_DB;
            configuration.passed = bandResults.every((band) => band.passed)
                && configuration.tonePowerConsistent;
        }
    }

    const result = {
        passed: configurations.every((configuration) => configuration.passed),
        configurations,
    };
    const tonePowerCsv = [
        "frequency_hz,channels,slope_db_per_octave,output_power,output_rms,relative_to_median_db",
        ...configurations.flatMap(({ channels, slope, tonePower }) =>
            tonePower.map((measurement) => [
                measurement.inputFrequencyHz.toFixed(3),
                channels,
                slope,
                measurement.outputPower.toExponential(8),
                measurement.outputRms.toExponential(8),
                measurement.relativeToMedianDb.toFixed(3),
            ].join(","))),
    ].join("\n");
    console.table(configurations.flatMap(({ channels, slope, bands: bandResults }) =>
        bandResults.map((band) => ({ channels, slope, ...band }))));
    console.log(tonePowerCsv);
    console.info(`Vocoder frequency response and tone power consistency: ${result.passed ? "PASS" : "FAIL"} (maximum allowed spread ${TONE_POWER_TOLERANCE_DB} dB)`);
    return { ...result, tonePowerCsv };
}

declare global {
    interface Window {
        testVocoderFrequencyResponse: typeof testVocoderFrequencyResponse;
        debugVocoderChannelTonePower: typeof debugVocoderChannelTonePower;
    }
}

if (typeof window !== "undefined") {
    window.testVocoderFrequencyResponse = testVocoderFrequencyResponse;
    window.debugVocoderChannelTonePower = debugVocoderChannelTonePower;
}