import "./style/base.css";
import "./style/layout.css";
import "./style/buttons.css";
import "./style/panel.css";
import "./style/chromatone.css";
import "./style/player.css";
import "./style/lesson.css";
import "./style/quiz.css";
import "./style/note-test.css";
import "./style/survey.css";
import "./style/vocoder.css"
import logoUrl from "./logo.svg";
import { useEffect, useState, type ReactNode } from "react";
import { Survey } from "./Survey";
import { NoteLearner } from "./NoteLearner";
import { ChordLearner } from "./ChordLearner";
import { MelodyLearner } from "./MelodyLearner";
import { Test } from "./Test";
import { Explorer } from "./Explorer";
import { Experiment } from "./Experiment";
import { Vocoder } from "./audio/VocoderBiquad";

export function downloadJson(filename: string, data: unknown) {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

type Route = "explorer" | "survey" | "note_learner" | "chord_learner" | "melody_learner" | "test" | "note-test" | "experiment";

const ROUTES: { id: Exclude<Route, "experiment">; label: string }[] = [
  { id: "explorer", label: "Explorer" },
  { id: "survey", label: "Survey" },
  { id: "note_learner", label: "Note Learner" },
  { id: "chord_learner", label: "Chord Learner" },
  { id: "melody_learner", label: "Melody Learner" },
  { id: "test", label: "Test" },
];

function getRoute(): Route {
  const value = window.location.hash.replace(/^#\/?/, "") as Route;
  if (value === "experiment") return value;
  return ROUTES.some((route) => route.id === value) ? value : "explorer";
}

export function downloadFormJson(filename: string, form: HTMLFormElement) {
  const data = Object.fromEntries(new FormData(form).entries());
  downloadJson(filename, { exportedAt: new Date().toISOString(), ...data });
}

function Layout({ route, children }: { route: Route; children: ReactNode }) {
  return (
    <main className="app-shell">
      {route !== "experiment" && (
        <header className="topbar">
          <a className="brand-link" href="#/explorer">
            <img className="brand-logo" src={logoUrl} alt="Logo" />
            <span>
              <b>Melody scale training</b>
            </span>
          </a>
          <nav className="route-nav" aria-label="Main navigation">
            {ROUTES.map((item) => (
              <a
                className={route === item.id ? "active" : ""}
                href={`#/${item.id}`}
                key={item.id}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </header>
      )}
      {children}
      {route !== "survey" && route !== "experiment" && <Vocoder />}
    </main>
  );
}

export function AppRoutes() {
  const [route, setRoute] = useState<Route>(getRoute);
  useEffect(() => {
    const update = () => setRoute(getRoute());
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);
  const page =
    route === "experiment" ? (
      <Experiment />
    ) : route === "survey" ? (
      <Survey />
    ) : route === "note_learner" ? (
      <NoteLearner />
    ) : route === "chord_learner" ? (
      <ChordLearner />
    ) : route === "melody_learner" ? (
      <MelodyLearner />
    ) : route === "test" ? (
      <Test />
    ) : (
      <Explorer />
    );
  return <Layout route={route}>{page}</Layout>;
}
