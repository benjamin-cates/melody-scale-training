import "./style/index.css";
import "./style/survey.css";
import "./style/vocoder.css"
import { useEffect, useState, type ReactNode } from "react";
import { Survey } from "./Survey";
import { Learner } from "./Learner";
import { Test } from "./Test";
import { NoteTest } from "./NoteTest";
import { Explorer } from "./Explorer";
import { Vocoder } from "./audio/VocoderSpectrum";

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

type Route = "explorer" | "survey" | "learner" | "test" | "note-test";

const ROUTES: { id: Route; label: string }[] = [
  { id: "explorer", label: "Explorer" },
  { id: "survey", label: "Survey" },
  { id: "learner", label: "Learner" },
  { id: "test", label: "Test" },
  { id: "note-test", label: "Note test" },
];

function getRoute(): Route {
  const value = window.location.hash.replace(/^#\/?/, "") as Route;
  return ROUTES.some((route) => route.id === value) ? value : "explorer";
}

export function downloadFormJson(filename: string, form: HTMLFormElement) {
  const data = Object.fromEntries(new FormData(form).entries());
  downloadJson(filename, { exportedAt: new Date().toISOString(), ...data });
}

function Layout({ route, children }: { route: Route; children: ReactNode }) {
  return (
    <main className="app-shell">
      <header className="topbar">
        <a className="brand-link" href="#/explorer">
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
      {children}
      {route !== "survey" && <Vocoder />}
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
    route === "survey" ? (
      <Survey />
    ) : route === "learner" ? (
      <Learner />
    ) : route === "test" ? (
      <Test />
    ) : route === "note-test" ? (
      <NoteTest />
    ) : (
      <Explorer />
    );
  return <Layout route={route}>{page}</Layout>;
}
