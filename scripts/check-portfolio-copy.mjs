import { readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join, relative, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const errors = [];
const warnings = [];
const ignoredDirectories = new Set(["node_modules", ".next", ".git"]);
const extensions = new Set([".ts", ".tsx", ".json", ".md", ".mjs", ".css"]);

const bannedCharacter = String.fromCharCode(8212);
const bannedPhrases = [
  ["cutting", "edge"].join("-"),
  ["game", "changing"].join("-"),
  "seam" + "lessly",
  ["leveraging", "the", "power", "of"].join(" "),
  ["robust", "and", "scalable"].join(" "),
  "revo" + "lutionary",
];

function walk(directory) {
  for (const entry of readdirSync(directory)) {
    if (ignoredDirectories.has(entry)) continue;

    const absolute = join(directory, entry);
    const stats = statSync(absolute);

    if (stats.isDirectory()) {
      walk(absolute);
      continue;
    }

    if (!extensions.has(extname(absolute))) continue;

    const rel = relative(root, absolute).replaceAll("\\", "/");
    if (rel === "scripts/check-portfolio-copy.mjs" || rel === "scripts/validate-portfolio-content.mjs") continue;

    const text = readFileSync(absolute, "utf8");
    const lower = text.toLowerCase();

    if (text.includes(bannedCharacter)) {
      errors.push(`${rel}: contains U+2014 em dash`);
    }

    for (const phrase of bannedPhrases) {
      if (lower.includes(phrase)) {
        errors.push(`${rel}: contains banned phrase "${phrase}"`);
      }
    }

    if (rel.startsWith("src/") && lower.includes("lorem ipsum")) {
      errors.push(`${rel}: contains placeholder text`);
    }

    const sourceOfTruthCount = lower.split("source of truth").length - 1;
    if (sourceOfTruthCount > 3) {
      warnings.push(`${rel}: phrase "source of truth" appears ${sourceOfTruthCount} times`);
    }
  }
}

walk(root);

if (warnings.length > 0) {
  console.warn("Copy quality warnings:");
  for (const warning of warnings) console.warn(`- ${warning}`);
}

if (errors.length > 0) {
  console.error("Copy quality check failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("Copy quality check passed.");
