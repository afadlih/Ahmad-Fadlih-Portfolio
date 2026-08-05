import { existsSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const projects = JSON.parse(readFileSync(join(root, "src/content/projects.json"), "utf8"));
const errors = [];
let sourceCount = 0;

for (const project of projects.filter((item) => item.featured)) {
  for (const deepDive of project.deepDives ?? []) {
    const sources = deepDive.sourcePoints ?? [];
    if (sources.length === 0) {
      errors.push(`${project.slug}/${deepDive.id}: missing source points`);
      continue;
    }

    for (const source of sources) {
      sourceCount += 1;
      const prefix = `${project.slug}/${deepDive.id}/${source.path}`;
      const excerptLines = source.code?.split("\n") ?? [];
      if (excerptLines.length < 4) errors.push(`${prefix}: code excerpt must contain at least 4 lines`);
      if (
        Number.isInteger(source.lineStart) &&
        Number.isInteger(source.lineEnd) &&
        excerptLines.length !== source.lineEnd - source.lineStart + 1
      ) {
        errors.push(`${prefix}: excerpt line count must match the GitHub range`);
      }
      if (!source.language) errors.push(`${prefix}: language is required`);
      if (!Number.isInteger(source.lineStart) || !Number.isInteger(source.lineEnd)) {
        errors.push(`${prefix}: lineStart and lineEnd must be integers`);
      } else if (source.lineStart < 1 || source.lineEnd < source.lineStart) {
        errors.push(`${prefix}: invalid source line range`);
      }
      if (project.visibility === "public") {
        if (!source.href?.startsWith("https://github.com/afadlih/")) {
          errors.push(`${prefix}: public source href must point to the owner's GitHub repository`);
        }
        if (!source.href?.includes("/blob/main/")) {
          errors.push(`${prefix}: public source href must target a file on the main branch`);
        }
        if (source.linkAccess && source.linkAccess !== "public") {
          errors.push(`${prefix}: public source must not use owner-only access`);
        }
      } else {
        if (source.href) errors.push(`${prefix}: private source href must not be published`);
        if (source.linkAccess !== "owner-only") {
          errors.push(`${prefix}: private source must declare owner-only access`);
        }
      }
      if (!source.verifiedAt) errors.push(`${prefix}: verifiedAt is required`);
    }
  }
}

for (const requiredFile of [
  "src/components/portfolio/SourceCodeExcerpt.tsx",
  "src/styles/v36/pages.css",
]) {
  if (!existsSync(join(root, requiredFile))) errors.push(`missing source-code UI file: ${requiredFile}`);
}

const component = readFileSync(join(root, "src/components/portfolio/SourceCodeExcerpt.tsx"), "utf8");
const css = readFileSync(join(root, "src/styles/v36/pages.css"), "utf8");
for (const token of ["source-code-excerpt", "noopener noreferrer", "lineStart", "visibility"]) {
  if (!component.includes(token)) errors.push(`SourceCodeExcerpt missing token: ${token}`);
}
if (!css.includes("source-code-excerpt__viewport")) {
  errors.push("V36 pages stylesheet is missing the source-code viewport rule");
}

if (errors.length > 0) {
  console.error("Source snippet validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Source snippet validation passed for ${sourceCount} excerpts.`);
