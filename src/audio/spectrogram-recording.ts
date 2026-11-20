import { getAudioContext, getAudioOutput } from "./audio";

export type FinalAudioRecording = {
  stop: () => Promise<Blob>;
  dispose: () => void;
};

export function startFinalAudioRecording(): FinalAudioRecording {
  const context = getAudioContext();
  const destination = context.createMediaStreamDestination();
  destination.channelCount = 2;
  const output = getAudioOutput();
  output.connect(destination);

  const mimeType = ["audio/webm;codecs=opus", "audio/mp4"]
    .find((type) => MediaRecorder.isTypeSupported(type));
  const recorder = new MediaRecorder(destination.stream, mimeType ? { mimeType } : undefined);
  const chunks: BlobPart[] = [];
  let stopPromise: Promise<Blob> | null = null;
  let resolveStop: ((blob: Blob) => void) | null = null;
  let rejectStop: ((reason: Error) => void) | null = null;
  let cleanedUp = false;
  let recordingError: Error | null = null;

  const cleanup = () => {
    if (cleanedUp) return;
    cleanedUp = true;
    output.disconnect(destination);
    destination.stream.getTracks().forEach((track) => track.stop());
  };

  recorder.addEventListener("dataavailable", (event) => {
    if (event.data.size > 0) chunks.push(event.data);
  });
  recorder.addEventListener("stop", () => {
    cleanup();
    const blob = new Blob(chunks, { type: recorder.mimeType || "audio/webm" });
    if (blob.size > 0) resolveStop?.(blob);
    else rejectStop?.(new Error("No audio was captured. Start playback before recording."));
  }, { once: true });
  recorder.addEventListener("error", () => {
    recordingError = new Error("The audio recording could not be completed.");
    cleanup();
    rejectStop?.(recordingError);
  }, { once: true });
  recorder.start();
  void context.resume();

  return {
    stop() {
      if (!stopPromise) {
        stopPromise = new Promise<Blob>((resolve, reject) => {
          resolveStop = resolve;
          rejectStop = reject;
        });
      }
      if (recorder.state !== "inactive") recorder.stop();
      else {
        cleanup();
        if (recordingError) rejectStop?.(recordingError);
      }
      return stopPromise;
    },
    dispose() {
      if (recorder.state !== "inactive") recorder.stop();
      cleanup();
    },
  };
}