import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Resolve the entry relative to this script, never the working directory,
// and copy it byte-for-byte so the output is deterministic.
const src = join(dir, "entry.txt");
const dest = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
copyFileSync(src, dest);
