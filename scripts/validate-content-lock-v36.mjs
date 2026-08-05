import { readFileSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const readJson = (path) => JSON.parse(readFileSync(join(root, path), "utf8"));
const read = (path) => readFileSync(join(root, path), "utf8");
const errors = [];
const projects = readJson("src/content/projects.json");
const profile = readJson("src/content/profile.json");
const contentDoc = read("docs/CONTENT_LOCK_V36.md");

for (const field of ["heroTitle", "heroSummary", "headline", "intro", "currentFocus"]) {
  if (!profile[field]?.id || !profile[field]?.en) errors.push(`profile.${field} is not bilingual`);
}

const featured = projects.filter((project) => project.featured);
if (featured.length !== 3) errors.push("there must be exactly three featured projects");
for (const project of projects) {
  if (!project.contentReview) errors.push(`${project.slug}: contentReview status is required`);
  if (!project.limitations?.length) errors.push(`${project.slug}: limitations are required`);
  if (!project.nextImprovements?.length) errors.push(`${project.slug}: nextImprovements are required`);
}

const orthobreath = projects.find((project) => project.slug === "orthobreath");
if (!orthobreath) {
  errors.push("OrthoBreath project is missing");
} else {
  if (!orthobreath.category.id.includes("PKM-KC 2026")) errors.push("OrthoBreath must be framed as PKM-KC 2026");
  if (!orthobreath.stage || orthobreath.stage === "production") errors.push("OrthoBreath cannot be framed as production");
  if (!orthobreath.limitations.some((item) => item.id.includes("belum menghasilkan klaim medis"))) {
    errors.push("OrthoBreath must keep a medical-claim limitation");
  }
}

for (const slug of [
  "internlog-ai",
  "aquasense",
  "formai",
  "polinema-adaptive-toeic",
  "orthobreath",
  "jti-intern-testing",
]) {
  if (!contentDoc.includes(slug)) errors.push(`content lock doc missing ${slug}`);
}

if (errors.length) {
  console.error("V36 content lock validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("V36 content lock validation passed.");
