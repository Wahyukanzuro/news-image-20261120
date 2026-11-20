// v3: the front page is pre-rendered; copy it to the output directory.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
const out = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(out, { recursive: true });
copyFileSync(join(dir, "entry.png"), join(out, "entry.png"));
console.log("wrote entry.png");
