import { useState } from "react";
import { SONGS, type Song } from "./music";
import { Player } from "./Player";

type LearningEvent = {
  type: "text" | "song";
  title: string;
  body?: string;
  song?: Song;
};
const LEARNING_EVENTS: LearningEvent[] = [
  {
    type: "text",
    title: "First, find the home note.",
    body: "A major key often feels bright and settled. Listen for the note that the melody seems to want to return to.",
  },
  { type: "song", title: "Listen to C major.", song: SONGS[0] },
  {
    type: "text",
    title: "Now notice the third.",
    body: "The third note changes the color of a chord. In a minor key it sits one semitone lower, making the sound feel darker or more inward.",
  },
  {
    type: "song",
    title: "Listen to the same shape in C minor.",
    song: SONGS[1],
  },
  {
    type: "text",
    title: "You are ready to compare.",
    body: "Use the Explorer to linger on any note, then use Test when you are ready to classify melodies on your own.",
  },
];

export function Learner() {
  const [eventIndex, setEventIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const event = LEARNING_EVENTS[eventIndex];
  const isSong = event.type === "song" && event.song;
  return (
    <section className="page-section learner-page">
      <div className="lesson-track">
        <div className="lesson-progress">
          <span>
            Step {eventIndex + 1} of {LEARNING_EVENTS.length}
          </span>
          <div>
            {LEARNING_EVENTS.map((_, index) => (
              <button
                className={
                  index === eventIndex
                    ? "current"
                    : index < eventIndex
                      ? "done"
                      : ""
                }
                onClick={() => setEventIndex(index)}
                aria-label={`Go to step ${index + 1}`}
                key={index}
              />
            ))}
          </div>
        </div>
        <article
          className={`lesson-card ${isSong ? "song-step" : "text-step"}`}
        >
          <p className="eyebrow">
            {isSong ? "Listening moment" : "A thought to carry"}
          </p>
          <h2>{event.title}</h2>
          {event.body && <p className="lesson-body">{event.body}</p>}
          {isSong && (
            <>
              <div className="lesson-key">{event.song?.key}</div>
              <Player song={event.song!} showKey showNotes />
            </>
          )}
        </article>
        <div className="lesson-actions">
          <button
            className="secondary-button"
            onClick={() => setPaused((value) => !value)}
          >
            {paused ? "Resume lesson" : "Pause lesson"}
          </button>
          <button
            className="primary-button"
            disabled={eventIndex === LEARNING_EVENTS.length - 1}
            onClick={() =>
              setEventIndex((value) =>
                Math.min(value + 1, LEARNING_EVENTS.length - 1),
              )
            }
          >
            {eventIndex === LEARNING_EVENTS.length - 1
              ? "Lesson complete"
              : "Next step"}
          </button>
        </div>
      </div>
    </section>
  );
}
