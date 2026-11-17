import { useEffect, useState } from "react";
import {
  getSongClassification,
  hasKey,
  type Song,
  type SongClassification,
} from "./music";
import { NOTE_NAMES } from "./note-names";

export type SongClassificationState =
  | { song: Song | null; status: "loading" }
  | {
    song: Song | null;
    status: "ready";
    classification: SongClassification | null;
    label: string;
  }
  | { song: Song | null; status: "error"; message: string };

function readyState(song: Song | null, classification: SongClassification | null): SongClassificationState {
  return {
    song,
    status: "ready",
    classification,
    label: classification
      ? `${NOTE_NAMES[classification.tonic]} ${classification.scale}`
      : "No matching mode",
  };
}

function initialState(song: Song | null): SongClassificationState {
  if (song === null) return readyState(null, null);
  if (hasKey(song)) return readyState(song, { tonic: song.tonic, scale: song.scale });
  if (song.category === "Essen" && song.title.startsWith("X-")) {
    return readyState(song, null);
  }
  return { song, status: "loading" };
}

export function useSongClassification(song: Song | null): SongClassificationState {
  const [state, setState] = useState<SongClassificationState>(() => initialState(song));

  useEffect(() => {
    if (song === null || hasKey(song) || (song.category === "Essen" && song.title.startsWith("X-"))) {
      setState(initialState(song));
      return;
    }

    let active = true;
    setState({ song, status: "loading" });
    void getSongClassification(song).then((classification) => {
      if (active) setState(readyState(song, classification));
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

  return state.song === song ? state : { song, status: "loading" };
}
