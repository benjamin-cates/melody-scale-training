import type { SongNote } from "./music";

const SONG_NOTES_FORMAT_PREFIX = "sn1:";

function toBase64Url(bytes: Uint8Array) {
    let binary = "";
    const chunkSize = 0x8000;
    for (let offset = 0; offset < bytes.length; offset += chunkSize) {
        binary += String.fromCharCode(...bytes.subarray(offset, offset + chunkSize));
    }
    return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromBase64Url(value: string) {
    if (!/^[A-Za-z0-9_-]*$/.test(value)) throw new Error("Invalid compressed song notes");
    const base64 = value.replace(/-/g, "+").replace(/_/g, "/");
    const binary = atob(base64 + "=".repeat((4 - base64.length % 4) % 4));
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index++) {
        bytes[index] = binary.charCodeAt(index);
    }
    return bytes;
}

export async function encodeSongNotes(notes: SongNote[]): Promise<string> {
    const compactNotes = notes.map(({ noteIndices, duration, onset }) => [
        noteIndices,
        duration,
        onset ?? null,
    ]);
    const compressedStream = new Blob([JSON.stringify(compactNotes)])
        .stream()
        .pipeThrough(new CompressionStream("gzip"));
    const compressedBytes = new Uint8Array(await new Response(compressedStream).arrayBuffer());
    return SONG_NOTES_FORMAT_PREFIX + toBase64Url(compressedBytes);
}

export async function decodeSongNotes(encoded: string): Promise<SongNote[]> {
    if (!encoded.startsWith(SONG_NOTES_FORMAT_PREFIX)) {
        throw new Error("Unsupported compressed song notes version");
    }

    const compressedBytes = fromBase64Url(encoded.slice(SONG_NOTES_FORMAT_PREFIX.length));
    const decompressedStream = new Blob([compressedBytes])
        .stream()
        .pipeThrough(new DecompressionStream("gzip"));
    const decoded: unknown = JSON.parse(await new Response(decompressedStream).text());
    if (!Array.isArray(decoded)) throw new Error("Invalid compressed song notes payload");

    return decoded.map((entry): SongNote => {
        if (
            !Array.isArray(entry) ||
            !Array.isArray(entry[0]) ||
            !entry[0].every((noteIndex: unknown) => Number.isInteger(noteIndex)) ||
            typeof entry[1] !== "number" ||
            !Number.isFinite(entry[1]) ||
            (entry[2] !== null && (typeof entry[2] !== "number" || !Number.isFinite(entry[2])))
        ) {
            throw new Error("Invalid compressed song note");
        }

        return {
            noteIndices: entry[0],
            duration: entry[1],
            ...(entry[2] === null ? {} : { onset: entry[2] }),
        };
    });
}