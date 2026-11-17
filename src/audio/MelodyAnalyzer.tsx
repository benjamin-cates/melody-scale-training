import { useEffect, useState } from "react";
import { getSongNotes, NOTE_NAMES, type Song, type SongNote } from "./music";
import { rankKeyClassifications, type KeyClassification } from "./key-analysis";

type TimedNote = {
  onset: number;
  end: number;
  noteIndices: number[];
};

type PianoNote = {
  pitch: number;
  pitchClass: number;
  onset: number;
  end: number;
};

type BarDatum = {
  label: string;
  value: number;
};

type AxisTick = {
  position: number;
  label: string;
};

type Analysis = {
  noteDistribution: BarDatum[];
  onsetIntervalDistribution: BarDatum[];
  onsetIntervalRange: number;
  concurrentDistribution: BarDatum[];
  concurrentMax: number;
  predictedKeys: KeyClassification[];
  pianoRollNotes: TimedNote[];
  noteCount: number;
  durationBeats: number;
  uniqueOnsetCount: number;
  maxNotesPerBeatInTenNoteWindow: number | null;
  minNotesPerBeatInTenNoteWindow: number | null;
};

type AnalysisState =
  | { song: Song; status: "loading" }
  | { song: Song; status: "ready"; analysis: Analysis }
  | { song: Song; status: "error"; message: string };

const ONSET_INTERVAL_BIN_COUNT = 20;
const AXIS_SPACING = 5;
const PIANO_ROLL_BEAT_SPACING = 5;

function getTimedNotes(notes: SongNote[]): TimedNote[] {
  let onset = 0;
  return notes.map((note, index) => {
    if (note.onset !== undefined) onset = note.onset;
    else if (index > 0) onset += notes[index - 1].duration;
    return {
      onset,
      end: onset + note.duration,
      noteIndices: note.noteIndices,
    };
  });
}

function getPianoNotes(notes: TimedNote[]): PianoNote[] {
  return notes.flatMap((note) =>
    note.noteIndices.map((noteIndex) => {
      const pitch = noteIndex + 21;
      return {
        pitch,
        pitchClass: pitch % 12,
        onset: note.onset,
        end: note.end,
      };
    }),
  );
}

function getPianoRollTimeMaximum(notes: PianoNote[]) {
  return Math.max(1, ...notes.map((note) => note.end));
}

function getPianoRollBeatTicks(timeMaximum: number) {
  const ticks = Array.from(
    { length: Math.floor(timeMaximum / PIANO_ROLL_BEAT_SPACING) + 1 },
    (_, index) => index * PIANO_ROLL_BEAT_SPACING,
  );
  if (ticks[ticks.length - 1] !== timeMaximum) ticks.push(timeMaximum);
  return ticks;
}

function getPianoRollBarWidth(duration: number, timeMaximum: number, plotWidth: number) {
  const durationWidth = (duration / timeMaximum) * plotWidth;
  return Math.max(0, durationWidth - Math.min(2, durationWidth * 0.1));
}

function analyzeNotes(notes: SongNote[]): Analysis {
  const pitchCounts = Array.from({ length: 12 }, () => 0);
  for (const note of notes) {
    for (const noteIndex of note.noteIndices) {
      pitchCounts[(noteIndex + 21) % 12]++;
    }
  }

  const timedNotes = getTimedNotes(notes);
  const onsetTimes = [...new Set(
    timedNotes.filter((note) => note.noteIndices.length > 0).map((note) => note.onset),
  )].sort((a, b) => a - b);
  const pitchNotes = getPianoNotes(timedNotes).sort((a, b) => a.onset - b.onset || a.end - b.end);
  const noteCount = pitchNotes.length;
  const durationBeats = timedNotes.reduce((maximum, note) => Math.max(maximum, note.end), 0);
  const tenNoteWindowDurations: number[] = [];
  for (let index = 0; index + 10 <= pitchNotes.length; index++) {
    const window = pitchNotes.slice(index, index + 10);
    const windowStart = window[0].onset;
    const windowEnd = window.reduce((maximum, note) => Math.max(maximum, note.end), 0);
    if (windowEnd > windowStart) tenNoteWindowDurations.push(windowEnd - windowStart);
  }
  const shortestTenNoteWindow = tenNoteWindowDurations.length > 0
    ? Math.min(...tenNoteWindowDurations)
    : null;
  const longestTenNoteWindow = tenNoteWindowDurations.length > 0
    ? Math.max(...tenNoteWindowDurations)
    : null;
  const onsetIntervals = onsetTimes.slice(1).map((onset, index) => onset - onsetTimes[index]);
  const onsetIntervalRange = Math.max(4, ...onsetIntervals);
  const onsetIntervalBins = Array.from({ length: ONSET_INTERVAL_BIN_COUNT }, () => 0);
  for (const interval of onsetIntervals) {
    const bin = Math.min(
      ONSET_INTERVAL_BIN_COUNT - 1,
      Math.floor((interval / onsetIntervalRange) * ONSET_INTERVAL_BIN_COUNT),
    );
    onsetIntervalBins[bin]++;
  }

  const concurrentCounts = onsetTimes.map((onset) =>
    timedNotes.reduce((total, note) =>
      note.noteIndices.length > 0 && note.onset <= onset && (note.end > onset || note.onset === onset)
        ? total + note.noteIndices.length
        : total,
    0),
  );
  const concurrentMax = Math.max(0, ...concurrentCounts);
  const concurrentFrequencies = new Map<number, number>();
  for (const count of concurrentCounts) {
    concurrentFrequencies.set(count, (concurrentFrequencies.get(count) ?? 0) + 1);
  }

  return {
    noteDistribution: pitchCounts.map((value, pitchClass) => ({
      label: NOTE_NAMES[pitchClass],
      value,
    })),
    onsetIntervalDistribution: onsetIntervalBins.map((value, bin) => ({
      label: String(bin),
      value,
    })),
    onsetIntervalRange,
    concurrentDistribution: Array.from(
      { length: concurrentMax },
      (_, index) => index + 1,
    ).map((count) => ({
      label: String(count),
      value: concurrentFrequencies.get(count) ?? 0,
    })),
    concurrentMax,
    predictedKeys: rankKeyClassifications(notes),
    pianoRollNotes: timedNotes,
    noteCount,
    durationBeats,
    uniqueOnsetCount: onsetTimes.length,
    maxNotesPerBeatInTenNoteWindow: shortestTenNoteWindow === null
      ? null
      : 10 / shortestTenNoteWindow,
    minNotesPerBeatInTenNoteWindow: longestTenNoteWindow === null
      ? null
      : 10 / longestTenNoteWindow,
  };
}

function getYAxisMaximum(maximumValue: number) {
  return Math.max(AXIS_SPACING, (Math.floor(maximumValue / AXIS_SPACING) + 1) * AXIS_SPACING);
}

function formatBeat(value: number) {
  return Number.isInteger(value) ? String(value) : value.toFixed(1);
}

function formatStatistic(value: number | null) {
  return value === null || !Number.isFinite(value) ? "N/A" : value.toFixed(2);
}

function BarChart({
  title,
  data,
  xAxisLabel,
  yAxisLabel,
  xTicks,
}: {
  title: string;
  data: BarDatum[];
  xAxisLabel: string;
  yAxisLabel: string;
  xTicks?: AxisTick[];
}) {
  const width = 640;
  const height = 250;
  const margin = { top: 16, right: 16, bottom: 46, left: 52 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;
  const yMaximum = getYAxisMaximum(Math.max(0, ...data.map((datum) => datum.value)));
  const bandWidth = data.length > 0 ? plotWidth / data.length : plotWidth;
  const barWidth = Math.max(1, bandWidth * 0.68);
  const ticks = xTicks ?? data.map((datum, index) => ({
    position: index + 0.5,
    label: datum.label,
  }));
  const yTicks = Array.from(
    { length: yMaximum / AXIS_SPACING + 1 },
    (_, index) => index * AXIS_SPACING,
  );

  return (
    <figure className="melody-chart">
      <figcaption>{title}</figcaption>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label={`${title}. ${xAxisLabel} by ${yAxisLabel}.`}
      >
        {yTicks.map((tick) => {
          const y = margin.top + plotHeight - (tick / yMaximum) * plotHeight;
          return (
            <g key={tick}>
              <line
                className="melody-chart-grid"
                x1={margin.left}
                x2={width - margin.right}
                y1={y}
                y2={y}
              />
              <text className="melody-chart-tick" x={margin.left - 8} y={y + 4} textAnchor="end">
                {tick}
              </text>
            </g>
          );
        })}
        {data.map((datum, index) => {
          const barHeight = (datum.value / yMaximum) * plotHeight;
          const x = margin.left + index * bandWidth + (bandWidth - barWidth) / 2;
          const y = margin.top + plotHeight - barHeight;
          return (
            <rect
              className="melody-chart-bar"
              key={`${datum.label}-${index}`}
              x={x}
              y={y}
              width={barWidth}
              height={barHeight}
            />
          );
        })}
        {ticks.map((tick) => {
          const x = margin.left + (tick.position / data.length) * plotWidth;
          return (
            <text
              className="melody-chart-tick"
              key={`${tick.position}-${tick.label}`}
              x={x}
              y={margin.top + plotHeight + 16}
              textAnchor="middle"
            >
              {tick.label}
            </text>
          );
        })}
        <text
          className="melody-chart-axis-label"
          x={margin.left + plotWidth / 2}
          y={height - 4}
          textAnchor="middle"
        >
          {xAxisLabel}
        </text>
        <text
          className="melody-chart-axis-label"
          transform={`translate(12 ${margin.top + plotHeight / 2}) rotate(-90)`}
          textAnchor="middle"
        >
          {yAxisLabel}
        </text>
      </svg>
    </figure>
  );
}

function PianoRoll({ notes }: { notes: TimedNote[] }) {
  const pianoNotes = getPianoNotes(notes);
  if (pianoNotes.length === 0) {
    return <p className="melody-analyzer-status">No notes available for the piano roll.</p>;
  }

  const lowestPitch = Math.min(...pianoNotes.map((note) => note.pitch));
  const highestPitch = Math.max(...pianoNotes.map((note) => note.pitch));
  const rowCount = highestPitch - lowestPitch + 1;
  const rowHeight = 14;
  const width = 1000;
  const margin = { top: 12, right: 16, bottom: 38, left: 68 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = rowCount * rowHeight;
  const height = margin.top + plotHeight + margin.bottom;
  const timeMaximum = getPianoRollTimeMaximum(pianoNotes);
  const beatTicks = getPianoRollBeatTicks(timeMaximum);

  return (
    <figure className="melody-chart piano-roll-chart">
      <figcaption>Piano roll</figcaption>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label={`Piano roll from pitch ${lowestPitch} to ${highestPitch} over ${formatBeat(timeMaximum)} beats.`}
      >
        {Array.from({ length: rowCount + 1 }, (_, index) => {
          const y = margin.top + index * rowHeight;
          return (
            <line
              className="piano-roll-pitch-grid"
              key={`pitch-${index}`}
              x1={margin.left}
              x2={width - margin.right}
              y1={y}
              y2={y}
            />
          );
        })}
        {Array.from({ length: rowCount }, (_, index) => {
          const y = margin.top + (index + 0.5) * rowHeight;
          const pitch = highestPitch - index;
          return (
            <g key={`tick-${index}`}>
              <line
                className="piano-roll-pitch-tick"
                x1={margin.left - 5}
                x2={margin.left}
                y1={y}
                y2={y}
              />
              {index % 3 === 0 && (
                <text
                  className="piano-roll-pitch-label"
                  x={margin.left - 8}
                  y={y + 3}
                  textAnchor="end"
                >
                  {NOTE_NAMES[pitch % 12]}{Math.floor(pitch / 12) - 1}
                </text>
              )}
            </g>
          );
        })}
        {beatTicks.map((beat) => {
          const x = margin.left + (beat / timeMaximum) * plotWidth;
          return (
            <g key={`beat-${beat}`}>
              <line
                className="piano-roll-beat-grid"
                x1={x}
                x2={x}
                y1={margin.top}
                y2={margin.top + plotHeight}
              />
              <text className="melody-chart-tick" x={x} y={height - 20} textAnchor="middle">
                {formatBeat(beat)}
              </text>
            </g>
          );
        })}
        {pianoNotes.map((note, index) => {
          const x = margin.left + (note.onset / timeMaximum) * plotWidth;
          const barWidth = getPianoRollBarWidth(note.end - note.onset, timeMaximum, plotWidth);
          const y = margin.top + (highestPitch - note.pitch) * rowHeight + rowHeight * 0.15;
          return (
            <rect
              className="melody-chart-bar piano-roll-note"
              key={`${note.onset}-${note.pitch}-${index}`}
              x={x}
              y={y}
              width={barWidth}
              height={rowHeight * 0.7}
              aria-label={`Pitch ${note.pitch}, onset ${formatBeat(note.onset)}, duration ${formatBeat(note.end - note.onset)} beats`}
            />
          );
        })}
        <text
          className="melody-chart-axis-label"
          x={margin.left + plotWidth / 2}
          y={height - 4}
          textAnchor="middle"
        >
          Time (beats)
        </text>
      </svg>
    </figure>
  );
}

function getPitchClassColor(pitchClass: number, tonic?: number) {
  if (tonic === undefined) return "is-other";
  if (pitchClass === tonic) return "is-tonic";
  if (pitchClass === (tonic + 4) % 12) return "is-major-third";
  if (pitchClass === (tonic + 3) % 12) return "is-minor-third";
  if (pitchClass === (tonic + 7) % 12) return "is-perfect-fifth";
  return "is-other";
}

function PitchClassPianoRoll({ notes, tonic }: { notes: TimedNote[]; tonic?: number }) {
  const pianoNotes = getPianoNotes(notes);
  if (pianoNotes.length === 0) {
    return <p className="melody-analyzer-status">No notes available for the pitch-class piano roll.</p>;
  }

  const rowCount = 12;
  const rowHeight = 20;
  const width = 1000;
  const margin = { top: 12, right: 16, bottom: 38, left: 68 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = rowCount * rowHeight;
  const height = margin.top + plotHeight + margin.bottom;
  const timeMaximum = getPianoRollTimeMaximum(pianoNotes);
  const beatTicks = getPianoRollBeatTicks(timeMaximum);

  return (
    <figure className="melody-chart piano-roll-chart pitch-class-piano-roll">
      <figcaption>Pitch-class piano roll (all octaves)</figcaption>
      {tonic === undefined ? (
        <div className="pitch-class-legend">No matching mode</div>
      ) : (
        <div className="pitch-class-legend" aria-label="Piano roll note colors">
          <span><i className="is-tonic" />Tonic</span>
          <span><i className="is-major-third" />Major third</span>
          <span><i className="is-minor-third" />Minor third</span>
          <span><i className="is-perfect-fifth" />Perfect fifth</span>
          <span><i className="is-other" />Other notes</span>
        </div>
      )}
      <svg
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label={`Pitch-class piano roll for ${tonic === undefined ? "unclassified mode" : `${NOTE_NAMES[tonic]} tonic`}, over ${formatBeat(timeMaximum)} beats.`}
      >
        {Array.from({ length: rowCount + 1 }, (_, index) => {
          const y = margin.top + index * rowHeight;
          return (
            <line
              className="piano-roll-pitch-grid"
              key={`pitch-${index}`}
              x1={margin.left}
              x2={width - margin.right}
              y1={y}
              y2={y}
            />
          );
        })}
        {Array.from({ length: rowCount }, (_, index) => {
          const pitchClass = 11 - index;
          const y = margin.top + (index + 0.5) * rowHeight;
          return (
            <g key={`pitch-label-${pitchClass}`}>
              <line
                className="piano-roll-pitch-tick"
                x1={margin.left - 5}
                x2={margin.left}
                y1={y}
                y2={y}
              />
              <text
                className="piano-roll-pitch-label"
                x={margin.left - 8}
                y={y + 3}
                textAnchor="end"
              >
                {NOTE_NAMES[pitchClass]}
              </text>
            </g>
          );
        })}
        {beatTicks.map((beat) => {
          const x = margin.left + (beat / timeMaximum) * plotWidth;
          return (
            <g key={`beat-${beat}`}>
              <line
                className="piano-roll-beat-grid"
                x1={x}
                x2={x}
                y1={margin.top}
                y2={margin.top + plotHeight}
              />
              <text className="melody-chart-tick" x={x} y={height - 20} textAnchor="middle">
                {formatBeat(beat)}
              </text>
            </g>
          );
        })}
        {pianoNotes.map((note, index) => {
          const x = margin.left + (note.onset / timeMaximum) * plotWidth;
          const barWidth = getPianoRollBarWidth(note.end - note.onset, timeMaximum, plotWidth);
          const y = margin.top + (11 - note.pitchClass) * rowHeight + rowHeight * 0.15;
          return (
            <rect
              className={`pitch-class-roll-note ${getPitchClassColor(note.pitchClass, tonic)}`}
              key={`${note.onset}-${note.pitch}-${index}`}
              x={x}
              y={y}
              width={barWidth}
              height={rowHeight * 0.7}
              aria-label={`${NOTE_NAMES[note.pitchClass]}, pitch ${note.pitch}, onset ${formatBeat(note.onset)}, duration ${formatBeat(note.end - note.onset)} beats`}
            />
          );
        })}
        <text
          className="melody-chart-axis-label"
          x={margin.left + plotWidth / 2}
          y={height - 4}
          textAnchor="middle"
        >
          Time (beats)
        </text>
      </svg>
    </figure>
  );
}

export function MelodyAnalyzer({ song, tempo = 84 }: { song: Song; tempo?: number }) {
  const [state, setState] = useState<AnalysisState | null>(null);

  useEffect(() => {
    let active = true;
    setState({ song, status: "loading" });
    void getSongNotes(song).then((notes) => {
      if (active) setState({ song, status: "ready", analysis: analyzeNotes(notes) });
    }).catch((error: unknown) => {
      if (active) {
        setState({
          song,
          status: "error",
          message: error instanceof Error ? error.message : String(error),
        });
      }
    });
    return () => {
      active = false;
    };
  }, [song]);

  const currentState = state?.song === song ? state : null;
  if (currentState?.status === "loading" || !currentState) {
    return <p className="melody-analyzer-status" role="status">Analyzing melody...</p>;
  }
  if (currentState.status === "error") {
    return <p className="melody-analyzer-status" role="alert">Could not analyze melody: {currentState.message}</p>;
  }

  const { analysis } = currentState;
  const gapTicks = Array.from({ length: 5 }, (_, index) => ({
    position: (index * ONSET_INTERVAL_BIN_COUNT) / 4,
    label: formatBeat((index * analysis.onsetIntervalRange) / 4),
  }));
  const concurrentTicks = analysis.concurrentDistribution.map((datum, index) => ({
    position: index + 0.5,
    label: datum.label,
  }));
  const durationSeconds = tempo > 0 ? analysis.durationBeats * 60 / tempo : null;
  const averageNotesPerBeat = analysis.durationBeats > 0
    ? analysis.noteCount / analysis.durationBeats
    : null;
  const averageNotesPerSecond = durationSeconds && durationSeconds > 0
    ? analysis.noteCount / durationSeconds
    : null;
  const maxNotesPerSecondInWindow = analysis.maxNotesPerBeatInTenNoteWindow === null
    ? null
    : analysis.maxNotesPerBeatInTenNoteWindow * tempo / 60;
  const minNotesPerSecondInWindow = analysis.minNotesPerBeatInTenNoteWindow === null
    ? null
    : analysis.minNotesPerBeatInTenNoteWindow * tempo / 60;
  const debugEnabled = new URLSearchParams(window.location.search).get("debug") === "true";

  return (
    <section className="melody-analyzer" id="melody-analyzer" aria-label={`Melody analysis for ${song.title}`}>
      {debugEnabled && (
        <a className="melody-debug-link" href="#essen_debug">
          Essen database debug
        </a>
      )}
      <section className="melody-statistics" aria-label="Melody duration and tempo statistics">
        <h3>Duration and tempo statistics</h3>
        <dl>
          <div><dt>Playback tempo</dt><dd>{tempo} BPM</dd></div>
          <div><dt>Average notes per beat</dt><dd>{formatStatistic(averageNotesPerBeat)}</dd></div>
          <div><dt>Average notes per second</dt><dd>{formatStatistic(averageNotesPerSecond)}</dd></div>
          <div><dt>Total duration</dt><dd>{formatStatistic(durationSeconds)} seconds</dd></div>
          <div><dt>Total duration</dt><dd>{formatStatistic(analysis.durationBeats)} beats</dd></div>
          <div><dt>Unique note onsets</dt><dd>{analysis.uniqueOnsetCount}</dd></div>
          <div><dt>Maximum notes per second (10-note window)</dt><dd>{formatStatistic(maxNotesPerSecondInWindow)}</dd></div>
          <div><dt>Minimum notes per second (10-note window)</dt><dd>{formatStatistic(minNotesPerSecondInWindow)}</dd></div>
        </dl>
        <p>Ten-note windows count individual pitches, including chord tones, from the first onset through the last note end.</p>
      </section>
      <BarChart
        title="Note distribution"
        data={analysis.noteDistribution}
        xAxisLabel="Note"
        yAxisLabel="Occurrences"
      />
      <BarChart
        title="Intervals between note onsets"
        data={analysis.onsetIntervalDistribution}
        xAxisLabel="Onset interval (beats)"
        yAxisLabel="Intervals"
        xTicks={gapTicks}
      />
      <BarChart
        title="Concurrent notes at each onset"
        data={analysis.concurrentDistribution}
        xAxisLabel="Concurrent notes"
        yAxisLabel="Onsets"
        xTicks={concurrentTicks}
      />
      <PianoRoll notes={analysis.pianoRollNotes} />
      <PitchClassPianoRoll
        notes={analysis.pianoRollNotes}
        tonic={song.tonic ?? analysis.predictedKeys[0]?.tonic}
      />
      <section className="melody-key-predictions" aria-label="Top predicted keys">
        <h3>Top 5 predicted keys</h3>
        {analysis.predictedKeys.length === 0 ? (
          <p>No major or minor key contains every note in this song.</p>
        ) : (
          <ol>
            {analysis.predictedKeys.slice(0, 5).map((key) => (
              <li key={`${key.tonic}-${key.scale}`}>
                <span>{NOTE_NAMES[key.tonic]} {key.scale}</span>
                <span>r = {key.confidence.toFixed(3)}</span>
              </li>
            ))}
          </ol>
        )}
      </section>
    </section>
  );
}
