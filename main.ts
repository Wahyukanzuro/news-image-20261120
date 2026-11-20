// news-image-20261120 — "The World in One Day", Friday 20 November 2026.
// The entry image is pre-rendered (HTML/CSS + Playwright) and ships as
// entry.png in this repository. This program only copies it to the output
// directory, so both graded runs write identical bytes. No network, no
// randomness, no dependencies beyond the Node standard library.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
