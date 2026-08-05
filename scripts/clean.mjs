import { rmSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
for (const path of [".next", "coverage", "tsconfig.tsbuildinfo"]) {
  rmSync(join(root, path), { recursive: true, force: true });
}
console.log("Removed local build artifacts.");
