import { serve } from "bun";
import index from "./index.html";

const server = serve({
  routes: {
    "/spessasynth_processor.min.js": () =>
      new Response(Bun.file(new URL("../node_modules/spessasynth_lib/dist/spessasynth_processor.min.js", import.meta.url))),
    "/soundfonts/grand-piano.sf3": () =>
      new Response(Bun.file(new URL("../public/soundfonts/grand-piano.sf3", import.meta.url))),
    "/soundfonts/grand-piano-mono-simple.sf2pack": () =>
      new Response(Bun.file(new URL("../public/soundfonts/grand-piano-mono-simple.sf2pack", import.meta.url))),
    "/soundfonts/marimba.sf3": () =>
      new Response(Bun.file(new URL("../public/soundfonts/marimba.sf3", import.meta.url))),
    "/soundfonts/grand-piano-mono-compact.sf3": () =>
      new Response(Bun.file(new URL("../public/soundfonts/grand-piano-mono-compact.sf3", import.meta.url))),
    "/soundfonts/grand-piano-mono-ultra-compact.sf3": () =>
      new Response(Bun.file(new URL("../public/soundfonts/grand-piano-mono-ultra-compact.sf3", import.meta.url))),
    // Serve index.html for all unmatched routes.
    "/*": index,
  },

  development: process.env.NODE_ENV !== "production" && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
