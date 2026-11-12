import { cp, mkdir, readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const publicPath = fileURLToPath(new URL("../public", import.meta.url));
const outputPath = fileURLToPath(new URL("../dist", import.meta.url));
const processorPath = fileURLToPath(
  new URL("../node_modules/spessasynth_lib/dist/spessasynth_processor.min.js", import.meta.url),
);

await mkdir(outputPath, { recursive: true });

for (const entry of await readdir(publicPath)) {
  await cp(join(publicPath, entry), join(outputPath, entry), { recursive: true });
}

await cp(processorPath, join(outputPath, "spessasynth_processor.min.js"));

console.log(`Copied public assets from ${publicPath} to ${outputPath}`);
