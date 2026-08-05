import { readFileSync } from "node:fs";
import { join, resolve } from "node:path";
const root = resolve(import.meta.dirname, "..");
const read = (path) => JSON.parse(readFileSync(join(root, path), "utf8"));
const projects = read("src/content/projects.json");
const rows = projects.map((project) => ({
  project: project.slug,
  depth: project.caseStudyDepth,
  review: project.contentReview,
  deepDives: project.deepDives.length,
  evidenceReady: project.evidence.filter((item) => ["ready", "verified"].includes(item.status)).length,
  evidencePlanned: project.evidence.filter((item) => item.status === "planned").length,
}));
console.table(rows);
for (const name of ["organizations", "credentials", "experiences"]) {
  const published = read(`src/content/${name}.json`).length;
  const drafts = read(`src/content/drafts/${name}.json`).length;
  console.log(`${name}: ${published} published, ${drafts} draft`);
}
