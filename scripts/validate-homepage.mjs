import { existsSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const errors = [];
const home = readFileSync(join(root, "src/app/[lang]/page.tsx"), "utf8");
const expectedOrder = [
  "HomeHero",
  "EducationExperience",
  "SelectedWork",
  "CurrentlyBuilding",
  "Approach",
  "PortfolioHub",
  "Contact",
];

let previous = -1;
for (const component of expectedOrder) {
  const current = home.indexOf(`<${component}`);
  if (current < 0) errors.push(`homepage is missing ${component}`);
  if (current <= previous) errors.push(`homepage order is invalid at ${component}`);
  previous = current;
}

for (const obsolete of [
  "QuickIntro",
  "ScrollWorldShowcase",
  "ProjectAtlas",
  "Journey",
  "SupportingProjects",
  "OptionalSections",
]) {
  if (home.includes(obsolete)) errors.push(`homepage still includes ${obsolete}`);
}

for (const file of [
  "src/components/portfolio/HomeHero.tsx",
  "src/components/portfolio/EducationExperience.tsx",
  "src/components/portfolio/SelectedWork.tsx",
  "src/components/portfolio/CurrentlyBuilding.tsx",
  "src/components/portfolio/Approach.tsx",
  "src/components/portfolio/PortfolioHub.tsx",
  "src/components/portfolio/SystemMapExperience.tsx",
  "src/components/portfolio/ProjectCodePreview.tsx",
  "src/components/portfolio/project-detail/AiJourneySection.tsx",
  "src/app/[lang]/system-map/page.tsx",
  "src/components/ui/button.tsx",
  "src/components/ui/card.tsx",
  "src/components/ui/badge.tsx",
  "src/components/ui/tabs.tsx",
  "src/styles/v36/tokens.css",
  "src/styles/v36/layout.css",
  "src/styles/v36/home.css",
  "src/styles/v36/pages.css",
  "src/styles/v36/polish.css",
  "src/styles/v36/responsive.css",
]) {
  if (!existsSync(join(root, file))) errors.push(`missing ${file}`);
}

for (const obsoletePath of [
  "src/components/portfolio/QuickIntro.tsx",
  "src/components/portfolio/ProjectAtlas.tsx",
  "src/styles/project-atlas.css",
  "src/styles/scroll-world.css",
  "src/content/scroll-world.json",
]) {
  if (existsSync(join(root, obsoletePath))) errors.push(`obsolete file remains: ${obsoletePath}`);
}

const selectedWork = readFileSync(join(root, "src/components/portfolio/SelectedWork.tsx"), "utf8");
const portfolioHub = readFileSync(join(root, "src/components/portfolio/PortfolioHub.tsx"), "utf8");
const homeCss = readFileSync(join(root, "src/styles/v36/home.css"), "utf8");
for (const token of ["featured-project-grid", "MajorCaseStudy"]) {
  if (!selectedWork.includes(token)) errors.push(`selected work is missing ${token}`);
}
for (const token of ["supporting-project-list", "ProjectGroup"]) {
  if (!portfolioHub.includes(token)) errors.push(`portfolio hub is missing ${token}`);
}
for (const forbidden of ["position: sticky", "implementationSources", "sticky-project-card__pipeline"]) {
  if (selectedWork.includes(forbidden) || portfolioHub.includes(forbidden) || homeCss.includes(forbidden)) {
    errors.push(`homepage still contains an over-layout pattern: ${forbidden}`);
  }
}

const systemMap = readFileSync(join(root, "src/components/portfolio/SystemMapExperience.tsx"), "utf8");
if (!systemMap.includes("systemMapStops")) errors.push("system map is not config-driven");
if (!systemMap.includes("Tabs")) errors.push("system map must expose compact stop navigation");

const projects = JSON.parse(readFileSync(join(root, "src/content/projects.json"), "utf8"));
for (const project of projects) {
  if ("visual" in project) errors.push(`${project.slug}: obsolete visual cover configuration remains`);
  const cover = join(root, "public/media/projects", project.slug, "cover.svg");
  if (existsSync(cover)) errors.push(`${project.slug}: generated cover.svg remains`);
}

if (errors.length) {
  console.error("Homepage validation failed:");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}
console.log("Homepage validation passed.");
