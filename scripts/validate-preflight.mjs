import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join, relative, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const errors = [];
const warnings = [];
const sourceExtensions = new Set([".ts", ".tsx", ".js", ".mjs", ".json", ".css", ".md", ".yml", ".yaml"]);
const ignored = new Set(["node_modules", ".next", ".git"]);
const files = [];

function walk(directory) {
  for (const entry of readdirSync(directory)) {
    if (ignored.has(entry)) continue;
    const path = join(directory, entry);
    const stats = statSync(path);
    if (stats.isDirectory()) walk(path);
    else if (sourceExtensions.has(extname(path))) files.push(path);
  }
}

walk(root);

const secretPatterns = [
  [/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/, "private key"],
  [/\bAKIA[0-9A-Z]{16}\b/, "AWS access key"],
  [/\bAIza[0-9A-Za-z_-]{30,}\b/, "Google API key"],
  [/\bsk-(?:live|test|proj)-[0-9A-Za-z_-]{16,}\b/, "provider secret key"],
];

for (const file of files) {
  const rel = relative(root, file);
  const text = readFileSync(file, "utf8");
  for (const [pattern, label] of secretPatterns) {
    if (pattern.test(text)) errors.push(`${rel}: possible ${label}`);
  }
  for (const tag of text.match(/<a\b[^>]*target="_blank"[^>]*>/g) ?? []) {
    if (!/rel="[^"]*(?:noopener|noreferrer)[^"]*"/.test(tag)) {
      errors.push(`${rel}: target=_blank without a safe rel attribute`);
    }
  }
}

for (const forbidden of [".env", ".env.local", ".env.production", ".env.development"]) {
  if (existsSync(join(root, forbidden))) errors.push(`private environment file included: ${forbidden}`);
}

const nextConfig = readFileSync(join(root, "next.config.ts"), "utf8");
for (const header of [
  "Content-Security-Policy",
  "X-Content-Type-Options",
  "Referrer-Policy",
  "Permissions-Policy",
  "Strict-Transport-Security",
]) {
  if (!nextConfig.includes(header)) errors.push(`next.config.ts missing ${header}`);
}

const homeCss = readFileSync(join(root, "src/styles/v36/home.css"), "utf8");
if ((homeCss.match(/box-shadow:/g) ?? []).length > 2) warnings.push("home CSS uses more than two shadow declarations");
if ((homeCss.match(/border-radius:/g) ?? []).length > 10) warnings.push("home CSS uses many rounded surfaces; review visual repetition");

if (warnings.length) {
  console.warn("Preflight warnings:");
  for (const warning of warnings) console.warn(`- ${warning}`);
}
if (errors.length) {
  console.error("Preflight validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Preflight validation passed across ${files.length} source files.`);
