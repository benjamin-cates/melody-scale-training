import { useEffect, useState } from "react";
import { ESSEN_CLIPS } from "./audio/generated-essen";
import { rankKeyClassifications } from "./audio/key-analysis";
import { NOTE_NAMES } from "./audio/note-names";
import { decodeSongNotes } from "./audio/song-notes";
import { applyEssenExplorerFilter, type SongNote } from "./audio/music";

type KeyCount = {
  label: string;
  count: number;
};

type EssenStatistics = {
  songs: EssenAnalysis[];
};

type EssenAnalysis = {
  title: string;
  keyLabel: string;
  averageNotesPerBeat: number;
  durationBeats: number;
  confidenceGap: number | null;
};

type NumericRange = {
  minimum: string;
  maximum: string;
};

type Filters = {
  selectedKeys: string[];
  durationBeats: NumericRange;
  averageNotesPerBeat: NumericRange;
  confidenceGap: NumericRange;
  includeSongsWithoutConfidenceGap: boolean;
};

type NumericExtent = {
  minimum: number;
  maximum: number;
};

type PageState =
  | { status: "loading"; completed: number }
  | { status: "ready"; statistics: EssenStatistics }
  | { status: "error"; message: string };

const HISTOGRAM_BIN_COUNT = 40;
const ANALYSIS_BATCH_SIZE = 8;
const KEY_LABELS = [
  ...NOTE_NAMES.flatMap((noteName) => [`${noteName} major`, `${noteName} minor`]),
  "No matching mode",
];

async function analyzeClip(
  clip: (typeof ESSEN_CLIPS)[number],
): Promise<EssenAnalysis> {
  const notes: SongNote[] = await decodeSongNotes(clip.compressedNotes);
  let onset = 0;
  let durationBeats = 0;
  let noteCount = 0;
  for (let index = 0; index < notes.length; index++) {
    const note = notes[index];
    if (note.onset !== undefined) onset = note.onset;
    else if (index > 0) onset += notes[index - 1].duration;
    durationBeats = Math.max(durationBeats, onset + note.duration);
    noteCount += note.noteIndices.length;
  }
  if (durationBeats <= 0 || noteCount === 0) {
    throw new Error(`Essen song ${clip.title} has no measurable notes or duration`);
  }

  const classifications = rankKeyClassifications(notes);
  const hasMatchingMode = !clip.title.startsWith("X-");
  if (hasMatchingMode && classifications.length === 0) {
    throw new Error(`Essen song ${clip.title} has no matching mode but is not marked as incompatible`);
  }
  const keyLabel = hasMatchingMode
    ? `${NOTE_NAMES[classifications[0].tonic]} ${classifications[0].scale}`
    : "No matching mode";
  return {
    title: clip.title,
    keyLabel,
    averageNotesPerBeat: noteCount / durationBeats,
    durationBeats,
    confidenceGap: classifications.length > 1
      ? classifications[0].confidence - classifications[1].confidence
      : null,
  };
}

async function analyzeEssenDatabase(
  onProgress: (completed: number) => void,
  isActive: () => boolean,
): Promise<EssenStatistics | null> {
  const analyses: EssenAnalysis[] = [];
  for (let start = 0; start < ESSEN_CLIPS.length; start += ANALYSIS_BATCH_SIZE) {
    if (!isActive()) return null;
    const clips = ESSEN_CLIPS.slice(start, start + ANALYSIS_BATCH_SIZE);
    const batch = await Promise.all(clips.map(analyzeClip));
    analyses.push(...batch);
    if (analyses.length % 128 === 0 || analyses.length === ESSEN_CLIPS.length) {
      onProgress(analyses.length);
    }
  }

  if (!isActive()) return null;
  return { songs: analyses };
}

function getNumericExtent(values: number[]): NumericExtent {
  if (values.length === 0) return { minimum: 0, maximum: 0 };
  return values.reduce(
    (extent, value) => ({
      minimum: Math.min(extent.minimum, value),
      maximum: Math.max(extent.maximum, value),
    }),
    { minimum: Infinity, maximum: -Infinity },
  );
}

function matchesRange(value: number, range: NumericRange) {
  const minimum = range.minimum.trim() === "" ? -Infinity : Number(range.minimum);
  const maximum = range.maximum.trim() === "" ? Infinity : Number(range.maximum);
  return Number.isFinite(minimum) || minimum === -Infinity
    ? (Number.isFinite(maximum) || maximum === Infinity) && minimum <= maximum && value >= minimum && value <= maximum
    : false;
}

function matchesFilters(song: EssenAnalysis, filters: Filters) {
  if (!filters.selectedKeys.includes(song.keyLabel)) return false;
  if (!matchesRange(song.durationBeats, filters.durationBeats)) return false;
  if (!matchesRange(song.averageNotesPerBeat, filters.averageNotesPerBeat)) return false;
  if (song.confidenceGap === null) return filters.includeSongsWithoutConfidenceGap;
  return matchesRange(song.confidenceGap, filters.confidenceGap);
}

function NumericRangeFilter({
  id,
  label,
  range,
  extent,
  step,
  onChange,
}: {
  id: string;
  label: string;
  range: NumericRange;
  extent: NumericExtent;
  step: number;
  onChange: (bound: "minimum" | "maximum", value: string) => void;
}) {
  return (
    <fieldset className="essen-debug-range-filter">
      <legend>{label}</legend>
      <label htmlFor={`${id}-minimum`}>
        Min
        <input
          id={`${id}-minimum`}
          type="number"
          step={step}
          value={range.minimum}
          placeholder={extent.minimum.toFixed(2)}
          onChange={(event) => onChange("minimum", event.target.value)}
        />
      </label>
      <label htmlFor={`${id}-maximum`}>
        Max
        <input
          id={`${id}-maximum`}
          type="number"
          step={step}
          value={range.maximum}
          placeholder={extent.maximum.toFixed(2)}
          onChange={(event) => onChange("maximum", event.target.value)}
        />
      </label>
      <small>Available: {extent.minimum.toFixed(2)} - {extent.maximum.toFixed(2)}</small>
    </fieldset>
  );
}

function getCountAxisScale(maximumValue: number) {
  const targetStep = maximumValue / 5;
  const magnitude = 10 ** Math.floor(Math.log10(Math.max(targetStep, 1)));
  const normalizedStep = targetStep / magnitude;
  const stepMultiplier = normalizedStep <= 1 ? 1
    : normalizedStep <= 2 ? 2
      : normalizedStep <= 5 ? 5
        : 10;
  const tickStep = stepMultiplier * magnitude;
  return {
    tickStep,
    maximum: Math.max(tickStep, Math.ceil(maximumValue / tickStep) * tickStep),
  };
}

function KeyDistributionChart({ data }: { data: KeyCount[] }) {
  const width = 760;
  const rowHeight = 23;
  const margin = { top: 16, right: 32, bottom: 42, left: 100 };
  const plotWidth = width - margin.left - margin.right;
  const height = margin.top + data.length * rowHeight + margin.bottom;
  const maximumCount = data.reduce((maximum, item) => Math.max(maximum, item.count), 0);
  const { tickStep, maximum: xMaximum } = getCountAxisScale(maximumCount);
  const ticks = Array.from(
    { length: Math.floor(xMaximum / tickStep) + 1 },
    (_, index) => index * tickStep,
  );

  return (
    <figure className="essen-debug-chart essen-debug-key-chart">
      <figcaption>Key distribution</figcaption>
      <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label="Count of Essen songs in each tonic and mode">
        {ticks.map((tick) => {
          const x = margin.left + (tick / xMaximum) * plotWidth;
          return (
            <g key={tick}>
              <line
                className="essen-debug-grid"
                x1={x}
                x2={x}
                y1={margin.top}
                y2={height - margin.bottom}
              />
              <text className="essen-debug-tick" x={x} y={height - margin.bottom + 16} textAnchor="middle">
                {tick}
              </text>
            </g>
          );
        })}
        {data.map((item, index) => {
          const y = margin.top + index * rowHeight;
          const barWidth = (item.count / xMaximum) * plotWidth;
          return (
            <g key={item.label}>
              <text className="essen-debug-tick" x={margin.left - 8} y={y + 15} textAnchor="end">
                {item.label}
              </text>
              <rect
                className="essen-debug-bar"
                x={margin.left}
                y={y + 3}
                width={barWidth}
                height={rowHeight - 6}
              />
            </g>
          );
        })}
        <text
          className="essen-debug-axis-label"
          x={margin.left + plotWidth / 2}
          y={height - 4}
          textAnchor="middle"
        >
          Songs
        </text>
      </svg>
    </figure>
  );
}

function createHistogram(values: number[]) {
  let minimum = Infinity;
  let maximum = -Infinity;
  for (const value of values) {
    minimum = Math.min(minimum, value);
    maximum = Math.max(maximum, value);
  }
  if (minimum === maximum) maximum = minimum + 1;

  const range = maximum - minimum;
  const counts = Array.from({ length: HISTOGRAM_BIN_COUNT }, () => 0);
  for (const value of values) {
    const bin = Math.min(
      HISTOGRAM_BIN_COUNT - 1,
      Math.floor(((value - minimum) / range) * HISTOGRAM_BIN_COUNT),
    );
    counts[bin]++;
  }
  return { minimum, maximum, counts };
}

function getDescriptiveStatistics(values: number[]) {
  const sortedValues = [...values].sort((a, b) => a - b);
  const mean = values.reduce((sum, value) => sum + value, 0) / values.length;
  const variance = values.reduce((sum, value) => sum + (value - mean) ** 2, 0) / values.length;
  const quantile = (probability: number) => {
    const position = (sortedValues.length - 1) * probability;
    const lowerIndex = Math.floor(position);
    const upperIndex = Math.ceil(position);
    const fraction = position - lowerIndex;
    return sortedValues[lowerIndex]
      + (sortedValues[upperIndex] - sortedValues[lowerIndex]) * fraction;
  };

  return {
    mean,
    standardDeviation: Math.sqrt(variance),
    minimum: sortedValues[0],
    q1: quantile(0.25),
    median: quantile(0.5),
    q3: quantile(0.75),
    maximum: sortedValues[sortedValues.length - 1],
  };
}

function HistogramChart({ title, values, xAxisLabel }: {
  title: string;
  values: number[];
  xAxisLabel: string;
}) {
  if (values.length === 0) {
    return <p className="essen-debug-status">No data is available for {title.toLowerCase()}.</p>;
  }

  const width = 760;
  const height = 300;
  const margin = { top: 18, right: 18, bottom: 48, left: 52 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;
  const histogram = createHistogram(values);
  const statistics = getDescriptiveStatistics(values);
  const maximumCount = histogram.counts.reduce((maximum, count) => Math.max(maximum, count), 0);
  const { tickStep, maximum: yMaximum } = getCountAxisScale(maximumCount);
  const yTicks = Array.from(
    { length: Math.floor(yMaximum / tickStep) + 1 },
    (_, index) => index * tickStep,
  );
  const bandWidth = plotWidth / HISTOGRAM_BIN_COUNT;

  return (
    <figure className="essen-debug-chart">
      <figcaption>{title}</figcaption>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label={`${title}, histogram of ${values.length} Essen songs`}
      >
        {yTicks.map((tick) => {
          const y = margin.top + plotHeight - (tick / yMaximum) * plotHeight;
          return (
            <g key={tick}>
              <line
                className="essen-debug-grid"
                x1={margin.left}
                x2={width - margin.right}
                y1={y}
                y2={y}
              />
              <text className="essen-debug-tick" x={margin.left - 8} y={y + 4} textAnchor="end">
                {tick}
              </text>
            </g>
          );
        })}
        {histogram.counts.map((count, index) => {
          const barHeight = (count / yMaximum) * plotHeight;
          return (
            <rect
              className="essen-debug-bar"
              key={index}
              x={margin.left + index * bandWidth + 1}
              y={margin.top + plotHeight - barHeight}
              width={Math.max(0, bandWidth - 2)}
              height={barHeight}
            />
          );
        })}
        {Array.from({ length: 5 }, (_, index) => {
          const position = (index * HISTOGRAM_BIN_COUNT) / 4;
          const value = histogram.minimum
            + (position / HISTOGRAM_BIN_COUNT) * (histogram.maximum - histogram.minimum);
          const x = margin.left + (position / HISTOGRAM_BIN_COUNT) * plotWidth;
          return (
            <text
              className="essen-debug-tick"
              key={position}
              x={x}
              y={margin.top + plotHeight + 16}
              textAnchor="middle"
            >
              {value.toFixed(2)}
            </text>
          );
        })}
        <text
          className="essen-debug-axis-label"
          x={margin.left + plotWidth / 2}
          y={height - 4}
          textAnchor="middle"
        >
          {xAxisLabel}
        </text>
        <text
          className="essen-debug-axis-label"
          transform={`translate(12 ${margin.top + plotHeight / 2}) rotate(-90)`}
          textAnchor="middle"
        >
          Songs
        </text>
      </svg>
      <p className="essen-debug-statistics">
        Mean: {statistics.mean.toFixed(4)}; standard deviation: {statistics.standardDeviation.toFixed(4)};
      </p>
      <p className="essen-debug-statistics">
        Min: {statistics.minimum.toFixed(4)}; Q1: {statistics.q1.toFixed(4)};
        {" "}<b>Median: {statistics.median.toFixed(4)}</b>; Q3: {statistics.q3.toFixed(4)};
        {" "}Max: {statistics.maximum.toFixed(4)}
      </p>
    </figure>
  );
}

export function EssenDebug() {
  const [state, setState] = useState<PageState>({ status: "loading", completed: 0 });
  const [filters, setFilters] = useState<Filters>({
    selectedKeys: [...KEY_LABELS],
    durationBeats: { minimum: "", maximum: "" },
    averageNotesPerBeat: { minimum: "", maximum: "" },
    confidenceGap: { minimum: "", maximum: "" },
    includeSongsWithoutConfidenceGap: true,
  });

  useEffect(() => {
    let active = true;
    setState({ status: "loading", completed: 0 });
    void analyzeEssenDatabase(
      (completed) => {
        if (active) setState({ status: "loading", completed });
      },
      () => active,
    ).then((statistics) => {
      if (active && statistics) setState({ status: "ready", statistics });
    }).catch((error: unknown) => {
      if (active) {
        setState({
          status: "error",
          message: error instanceof Error ? error.message : String(error),
        });
      }
    });
    return () => {
      active = false;
    };
  }, []);

  const allSongs = state.status === "ready" ? state.statistics.songs : [];
  const matchingSongs = allSongs.filter((song) => matchesFilters(song, filters));
  const keyCounts = new Map<string, number>();
  for (const label of KEY_LABELS) keyCounts.set(label, 0);
  for (const song of matchingSongs) {
    keyCounts.set(song.keyLabel, (keyCounts.get(song.keyLabel) ?? 0) + 1);
  }
  const keyDistribution = KEY_LABELS.map((label) => ({
    label,
    count: keyCounts.get(label) ?? 0,
  }));
  const durationExtent = getNumericExtent(allSongs.map((song) => song.durationBeats));
  const notesPerBeatExtent = getNumericExtent(allSongs.map((song) => song.averageNotesPerBeat));
  const confidenceGapExtent = getNumericExtent(
    allSongs.flatMap((song) => song.confidenceGap === null ? [] : [song.confidenceGap]),
  );
  const confidenceGaps = matchingSongs.flatMap((song) =>
    song.confidenceGap === null ? [] : [song.confidenceGap],
  );

  function openMatchingSongs() {
    applyEssenExplorerFilter(matchingSongs.map((song) => song.title));
    window.location.hash = "#/explorer";
  }

  function updateRange(
    name: "durationBeats" | "averageNotesPerBeat" | "confidenceGap",
    bound: "minimum" | "maximum",
    value: string,
  ) {
    setFilters((current) => {
      if (name === "durationBeats") {
        return { ...current, durationBeats: { ...current.durationBeats, [bound]: value } };
      }
      if (name === "averageNotesPerBeat") {
        return { ...current, averageNotesPerBeat: { ...current.averageNotesPerBeat, [bound]: value } };
      }
      return { ...current, confidenceGap: { ...current.confidenceGap, [bound]: value } };
    });
  }

  return (
    <section className="page-section essen-debug-page">
      <header className="page-heading">
        <h1>Essen database</h1>
        <p className="essen-debug-song-count">
          Essen songs: {ESSEN_CLIPS.length.toLocaleString()}
        </p>
        <a href="#/explorer">Back to Explorer</a>
      </header>
      {state.status === "loading" ? (
        <p className="essen-debug-status" role="status">
          Analyzing Essen clips: {state.completed} / {ESSEN_CLIPS.length}
        </p>
      ) : state.status === "error" ? (
        <p className="essen-debug-status" role="alert">
          Could not analyze the Essen database: {state.message}
        </p>
      ) : (
        <div className="essen-debug-results">
          <section className="essen-debug-filters" aria-label="Filter Essen songs">
            <div className="essen-debug-filter-heading">
              <h2>Filtering</h2>
              <button
                type="button"
                onClick={() => setFilters({
                  selectedKeys: [...KEY_LABELS],
                  durationBeats: { minimum: "", maximum: "" },
                  averageNotesPerBeat: { minimum: "", maximum: "" },
                  confidenceGap: { minimum: "", maximum: "" },
                  includeSongsWithoutConfidenceGap: true,
                })}
              >
                Clear filters
              </button>
            </div>
            <fieldset className="essen-debug-key-filter">
              <legend>Keys</legend>
              <div className="essen-debug-key-actions">
                <button type="button" onClick={() => setFilters((current) => ({
                  ...current,
                  selectedKeys: [...KEY_LABELS],
                }))}>
                  Select all
                </button>
                <button type="button" onClick={() => setFilters((current) => ({
                  ...current,
                  selectedKeys: [],
                }))}>
                  Clear selection
                </button>
              </div>
              <div className="essen-debug-key-options">
                {KEY_LABELS.map((label) => (
                  <label key={label}>
                    <input
                      type="checkbox"
                      checked={filters.selectedKeys.includes(label)}
                      onChange={(event) => setFilters((current) => ({
                        ...current,
                        selectedKeys: event.target.checked
                          ? [...current.selectedKeys, label]
                          : current.selectedKeys.filter((key) => key !== label),
                      }))}
                    />
                    {label}
                  </label>
                ))}
              </div>
            </fieldset>
            <div className="essen-debug-range-filters">
              <NumericRangeFilter
                id="essen-duration"
                label="Duration (beats)"
                range={filters.durationBeats}
                extent={durationExtent}
                step={0.1}
                onChange={(bound, value) => updateRange("durationBeats", bound, value)}
              />
              <NumericRangeFilter
                id="essen-notes-per-beat"
                label="Average notes per beat"
                range={filters.averageNotesPerBeat}
                extent={notesPerBeatExtent}
                step={0.01}
                onChange={(bound, value) => updateRange("averageNotesPerBeat", bound, value)}
              />
              <NumericRangeFilter
                id="essen-confidence-gap"
                label="Confidence (top - second)"
                range={filters.confidenceGap}
                extent={confidenceGapExtent}
                step={0.001}
                onChange={(bound, value) => updateRange("confidenceGap", bound, value)}
              />
            </div>
            <label className="essen-debug-no-gap-filter">
              <input
                type="checkbox"
                checked={filters.includeSongsWithoutConfidenceGap}
                onChange={(event) => setFilters((current) => ({
                  ...current,
                  includeSongsWithoutConfidenceGap: event.target.checked,
                }))}
              />
              Include songs without a confidence gap
            </label>
          </section>
          <p className="essen-debug-match-count" aria-live="polite">
            Songs selected by current filters: <strong>{matchingSongs.length.toLocaleString()}</strong>
          </p>
          <button
            className="primary-button"
            type="button"
            disabled={matchingSongs.length === 0}
            onClick={openMatchingSongs}
          >
            Open filtered songs in Explorer
          </button>
          <div className="essen-debug-charts">
            <KeyDistributionChart data={keyDistribution} />
            <HistogramChart
              title="Average notes per beat"
              values={matchingSongs.map((song) => song.averageNotesPerBeat)}
              xAxisLabel="Notes per beat"
            />
            <HistogramChart
              title="Song duration"
              values={matchingSongs.map((song) => song.durationBeats)}
              xAxisLabel="Duration (beats)"
            />
            <HistogramChart
              title="Top mode confidence minus second confidence"
              values={confidenceGaps}
              xAxisLabel="Confidence difference"
            />
          </div>
        </div>
      )}
    </section>
  );
}
