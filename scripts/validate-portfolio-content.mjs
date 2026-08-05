import {
  existsSync,
  readFileSync,
  readdirSync,
  statSync,
} from "node:fs";
import { join, relative, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const errors = [];
const warnings = [];
const readJson = (path) =>
  JSON.parse(readFileSync(join(root, path), "utf8"));
const hasLocalized = (value) =>
  Boolean(
    value &&
      typeof value.id === "string" &&
      value.id.trim() &&
      typeof value.en === "string" &&
      value.en.trim(),
  );
const checkLocalized = (value, label) => {
  if (!hasLocalized(value)) {
    errors.push(`${label}: Indonesian and English text are required`);
  }
};
const publicFileExists = (pathname) =>
  !pathname || existsSync(join(root, "public", pathname.replace(/^\//, "")));
const isPlaceholderPath = (pathname = "") =>
  pathname.includes("/media/placeholders/");
const isIsoDate = (value) => /^\d{4}-\d{2}-\d{2}$/.test(value ?? "");

const profile = readJson("src/content/profile.json");
for (const field of [
  "availability",
  "role",
  "headline",
  "intro",
  "principle",
  "heroTitle",
  "heroSummary",
  "education",
  "currentFocus",
]) {
  checkLocalized(profile[field], `profile.${field}`);
}
for (const field of ["email", "github", "linkedin", "resumeIdUrl", "resumeEnUrl"]) {
  if (!profile[field]) errors.push(`profile.${field}: required`);
}
if (profile.photo) {
  if (!publicFileExists(profile.photo)) {
    errors.push(`profile.photo: missing public file ${profile.photo}`);
  }
  if (![
    "owner-approved-photo",
    "owner-approved-generated-portrait",
  ].includes(profile.photoStatus)) {
    errors.push(
      "profile.photoStatus: approved public portraits must use an owner-approved status",
    );
  }
} else if (profile.photoStatus !== "pending-owner-photo") {
  errors.push(
    "profile.photoStatus: empty public portrait must use pending-owner-photo",
  );
}
for (const file of [profile.resumeIdUrl, profile.resumeEnUrl, profile.resumeEditableUrl]) {
  if (file && !publicFileExists(file)) errors.push(`profile: missing public file ${file}`);
}

const projects = readJson("src/content/projects.json");
const projectSlugs = new Set();
const featured = projects.filter((project) => project.featured);
if (featured.length !== 3) errors.push("Exactly 3 featured projects are required");

for (const project of projects) {
  const prefix = `project/${project.slug ?? "unknown"}`;
  if (!project.slug || projectSlugs.has(project.slug)) {
    errors.push(`${prefix}: invalid or duplicate slug`);
  }
  projectSlugs.add(project.slug);

  if (!project.repository?.startsWith("https://github.com/")) {
    errors.push(`${prefix}: repository must use a GitHub HTTPS URL`);
  }

  for (const field of ["category", "summary", "problem", "outcome"]) {
    checkLocalized(project[field], `${prefix}.${field}`);
  }


  if (!Array.isArray(project.flow) || project.flow.length < 3) {
    errors.push(`${prefix}: needs at least 3 flow steps`);
  } else {
    project.flow.forEach((item, index) =>
      checkLocalized(item, `${prefix}.flow[${index}]`),
    );
  }

  if (!Array.isArray(project.highlights) || project.highlights.length < 3) {
    errors.push(`${prefix}: needs at least 3 highlights`);
  } else {
    project.highlights.forEach((item, index) =>
      checkLocalized(item, `${prefix}.highlights[${index}]`),
    );
  }

  if (!Array.isArray(project.stack) || project.stack.length < 3) {
    errors.push(`${prefix}: needs at least 3 technologies`);
  }

  const contribution = project.contribution;
  if (!contribution) {
    errors.push(`${prefix}: contribution is required`);
  } else {
    for (const field of ["role", "teamContext", "scope"]) {
      checkLocalized(contribution[field], `${prefix}.contribution.${field}`);
    }
    if (!Array.isArray(contribution.responsibilities) || contribution.responsibilities.length < 2) {
      errors.push(`${prefix}: needs at least 2 responsibilities`);
    } else {
      contribution.responsibilities.forEach((item, index) =>
        checkLocalized(item, `${prefix}.responsibilities[${index}]`),
      );
    }
    if (!Array.isArray(contribution.ownership) || contribution.ownership.length < 1) {
      errors.push(`${prefix}: needs at least 1 ownership item`);
    } else {
      contribution.ownership.forEach((item, index) =>
        checkLocalized(item, `${prefix}.ownership[${index}]`),
      );
    }
  }

  const architecture = project.architecture;
  if (!architecture) {
    errors.push(`${prefix}: architecture is required`);
  } else {
    checkLocalized(architecture.summary, `${prefix}.architecture.summary`);
    if (!Array.isArray(architecture.components) || architecture.components.length < 2) {
      errors.push(`${prefix}: needs at least 2 architecture components`);
    } else {
      architecture.components.forEach((item, index) => {
        if (!item.name) errors.push(`${prefix}.architecture.components[${index}]: name required`);
        checkLocalized(
          item.responsibility,
          `${prefix}.architecture.components[${index}].responsibility`,
        );
      });
    }
    if (!Array.isArray(architecture.dataFlow) || architecture.dataFlow.length < 3) {
      errors.push(`${prefix}: needs at least 3 data flow steps`);
    } else {
      architecture.dataFlow.forEach((item, index) =>
        checkLocalized(item, `${prefix}.architecture.dataFlow[${index}]`),
      );
    }
    if (!Array.isArray(architecture.deployment) || architecture.deployment.length < 1) {
      errors.push(`${prefix}: deployment notes are required`);
    } else {
      architecture.deployment.forEach((item, index) =>
        checkLocalized(item, `${prefix}.architecture.deployment[${index}]`),
      );
    }
  }

  if (project.featured && project.caseStudyDepth !== "full") {
    errors.push(`${prefix}: featured projects must use full case study depth`);
  }
  if (
    project.caseStudyDepth === "full" &&
    (!Array.isArray(project.deepDives) || project.deepDives.length !== 3)
  ) {
    errors.push(`${prefix}: full case studies require exactly 3 deep dives`);
  }

  const deepDiveIds = new Set();
  for (const feature of project.deepDives ?? []) {
    const featurePrefix = `${prefix}/feature/${feature.id ?? "unknown"}`;
    if (!feature.id || deepDiveIds.has(feature.id)) {
      errors.push(`${featurePrefix}: invalid or duplicate id`);
    }
    deepDiveIds.add(feature.id);

    for (const field of ["title", "summary", "userNeed", "why"]) {
      checkLocalized(feature[field], `${featurePrefix}.${field}`);
    }
    if (!Array.isArray(feature.approach) || feature.approach.length < 3) {
      errors.push(`${featurePrefix}: needs at least 3 approach steps`);
    } else {
      feature.approach.forEach((item, index) =>
        checkLocalized(item, `${featurePrefix}.approach[${index}]`),
      );
    }
    for (const field of ["firstAttempt", "limitation", "iteration"]) {
      checkLocalized(feature.journey?.[field], `${featurePrefix}.journey.${field}`);
    }
    if (!Array.isArray(feature.technicalDecisions) || feature.technicalDecisions.length < 1) {
      errors.push(`${featurePrefix}: needs at least 1 technical decision`);
    } else {
      feature.technicalDecisions.forEach((item, index) => {
        checkLocalized(item.decision, `${featurePrefix}.decision[${index}]`);
        checkLocalized(item.reason, `${featurePrefix}.reason[${index}]`);
        checkLocalized(item.tradeoff, `${featurePrefix}.tradeoff[${index}]`);
      });
    }
    if (!Array.isArray(feature.validation) || feature.validation.length < 2) {
      errors.push(`${featurePrefix}: needs at least 2 validation items`);
    } else {
      feature.validation.forEach((item, index) =>
        checkLocalized(item, `${featurePrefix}.validation[${index}]`),
      );
    }
    if (!Array.isArray(feature.outcomes) || feature.outcomes.length < 1) {
      errors.push(`${featurePrefix}: needs at least 1 outcome`);
    } else {
      feature.outcomes.forEach((item, index) =>
        checkLocalized(item, `${featurePrefix}.outcomes[${index}]`),
      );
    }

    if (project.featured && (feature.sourcePoints?.length ?? 0) < 2) {
      errors.push(`${featurePrefix}: featured deep dives need at least 2 implementation references`);
    }
    for (const [index, source] of (feature.sourcePoints ?? []).entries()) {
      const sourcePrefix = `${featurePrefix}.sourcePoints[${index}]`;
      checkLocalized(source.label, `${sourcePrefix}.label`);
      checkLocalized(source.note, `${sourcePrefix}.note`);
      if (!source.path || source.path.endsWith("/") || source.path.includes(" or ")) {
        errors.push(`${sourcePrefix}: use one concrete repository file path`);
      }
      if (!isIsoDate(source.verifiedAt)) {
        errors.push(`${sourcePrefix}: verifiedAt must use YYYY-MM-DD`);
      }
      if (
        project.visibility === "private" &&
        source.href &&
        source.linkAccess !== "owner-only"
      ) {
        errors.push(
          `${sourcePrefix}: private file links must declare linkAccess=owner-only`,
        );
      }
      if (
        project.visibility === "public" &&
        source.href &&
        source.linkAccess !== "public"
      ) {
        errors.push(`${sourcePrefix}: public file links must declare linkAccess=public`);
      }
      if (source.href && !source.href.startsWith("https://github.com/")) {
        errors.push(`${sourcePrefix}: href must use a GitHub HTTPS URL`);
      }
    }
  }

  const evidenceIds = new Set();
  for (const item of project.evidence ?? []) {
    const evidencePrefix = `${prefix}/evidence/${item.id ?? "unknown"}`;
    if (!item.id || evidenceIds.has(item.id)) {
      errors.push(`${evidencePrefix}: invalid or duplicate evidence id`);
    }
    evidenceIds.add(item.id);
    checkLocalized(item.title, `${evidencePrefix}.title`);
    checkLocalized(item.description, `${evidencePrefix}.description`);
    if (
      ["ready", "verified"].includes(item.status) &&
      item.safeToPublish &&
      !item.src &&
      !item.href
    ) {
      errors.push(`${evidencePrefix}: ready public evidence needs src or href`);
    }
    if (item.src && item.safeToPublish && !publicFileExists(item.src)) {
      errors.push(`${evidencePrefix}: missing public file ${item.src}`);
    }
    if (item.src && !item.alt) {
      errors.push(`${evidencePrefix}: media evidence requires bilingual alt text`);
    }
    if (item.alt) checkLocalized(item.alt, `${evidencePrefix}.alt`);
    for (const featureId of item.featureIds ?? []) {
      if (!deepDiveIds.has(featureId) && project.caseStudyDepth === "full") {
        errors.push(`${evidencePrefix}: unknown feature id ${featureId}`);
      }
    }
  }
  for (const feature of project.deepDives ?? []) {
    for (const evidenceId of feature.evidenceIds ?? []) {
      if (!evidenceIds.has(evidenceId)) {
        errors.push(`${prefix}/feature/${feature.id}: unknown evidence id ${evidenceId}`);
      }
    }
  }

  if (!Array.isArray(project.limitations) || project.limitations.length < 1) {
    errors.push(`${prefix}: limitations are required`);
  } else {
    project.limitations.forEach((item, index) =>
      checkLocalized(item, `${prefix}.limitations[${index}]`),
    );
  }
  if (!Array.isArray(project.nextImprovements) || project.nextImprovements.length < 1) {
    errors.push(`${prefix}: next improvements are required`);
  } else {
    project.nextImprovements.forEach((item, index) =>
      checkLocalized(item, `${prefix}.nextImprovements[${index}]`),
    );
  }
  if (project.contentReview === "needs-owner-review") {
    warnings.push(`${prefix}: contribution and wording still need owner confirmation`);
  }
}

function validateMediaPhoto(photo, prefix) {
  if (!photo?.src) errors.push(`${prefix}: photo src required`);
  else if (!publicFileExists(photo.src)) errors.push(`${prefix}: missing public photo ${photo.src}`);
  checkLocalized(photo?.alt, `${prefix}.alt`);
  if (photo?.caption) checkLocalized(photo.caption, `${prefix}.caption`);
}

function validateProofPoints(items, prefix) {
  for (const [index, proof] of (items ?? []).entries()) {
    checkLocalized(proof.title, `${prefix}.proofPoints[${index}].title`);
    if (proof.note) checkLocalized(proof.note, `${prefix}.proofPoints[${index}].note`);
    if (proof.href && !proof.href.startsWith("https://")) {
      errors.push(`${prefix}.proofPoints[${index}]: href must use HTTPS`);
    }
  }
}

for (const name of ["organizations", "credentials", "experiences"]) {
  const items = readJson(`src/content/${name}.json`);
  const ids = new Set();
  for (const item of items) {
    const prefix = `${name}/${item.id ?? "unknown"}`;
    if (!item.id || ids.has(item.id)) errors.push(`${prefix}: invalid or duplicate id`);
    ids.add(item.id);
    if (!item.published) errors.push(`${prefix}: unpublished items belong in src/content/drafts`);
    if (!["documented", "ready", "verified"].includes(item.evidenceStatus)) {
      errors.push(`${prefix}: published evidenceStatus must be documented, ready, or verified`);
    }
    validateProofPoints(item.proofPoints, prefix);

    if (name === "organizations") {
      if (!item.name || !item.period) errors.push(`${prefix}: name and period required`);
      checkLocalized(item.role, `${prefix}.role`);
      checkLocalized(item.description, `${prefix}.description`);
      if (!Array.isArray(item.achievements) || !item.achievements.length) {
        errors.push(`${prefix}: achievements required`);
      } else {
        item.achievements.forEach((entry, index) =>
          checkLocalized(entry, `${prefix}.achievements[${index}]`),
        );
      }
      if (item.logo && !publicFileExists(item.logo)) errors.push(`${prefix}: missing logo ${item.logo}`);
      (item.photos ?? []).forEach((photo, index) =>
        validateMediaPhoto(photo, `${prefix}.photos[${index}]`),
      );
    }

    if (name === "credentials") {
      checkLocalized(item.title, `${prefix}.title`);
      if (!item.issuer || !item.issuedAt) errors.push(`${prefix}: issuer and issuedAt required`);
      if (["ready", "verified"].includes(item.evidenceStatus) && !item.image && !item.credentialUrl) {
        errors.push(`${prefix}: ready credential requires an image or verification URL`);
      }
      if (item.image && !publicFileExists(item.image)) {
        errors.push(`${prefix}: missing credential image ${item.image}`);
      }
      if (
        ["ready", "verified"].includes(item.evidenceStatus) &&
        (item.issuedAt === "pending" || isPlaceholderPath(item.image))
      ) {
        errors.push(`${prefix}: placeholder credential evidence cannot be ready or verified`);
      }
      if (item.issuedAt === "pending") {
        warnings.push(`${prefix}: certificate date still needs owner confirmation`);
      }
      if (item.description) checkLocalized(item.description, `${prefix}.description`);
    }

    if (name === "experiences") {
      checkLocalized(item.title, `${prefix}.title`);
      checkLocalized(item.description, `${prefix}.description`);
      if (!item.period) errors.push(`${prefix}: period required`);
      if (item.role) checkLocalized(item.role, `${prefix}.role`);
      (item.contributions ?? []).forEach((entry, index) =>
        checkLocalized(entry, `${prefix}.contributions[${index}]`),
      );
      (item.photos ?? []).forEach((photo, index) =>
        validateMediaPhoto(photo, `${prefix}.photos[${index}]`),
      );
      if (
        ["ready", "verified"].includes(item.evidenceStatus) &&
        (item.photos ?? []).some((photo) => isPlaceholderPath(photo.src))
      ) {
        errors.push(`${prefix}: placeholder photos cannot be ready or verified evidence`);
      }
    }
  }
}

for (const name of ["organizations", "credentials", "experiences"]) {
  const drafts = readJson(`src/content/drafts/${name}.json`);
  for (const item of drafts) {
    if (item.published !== false) {
      errors.push(`drafts/${name}/${item.id}: published must remain false`);
    }
  }
}

const banned = [
  String.fromCharCode(8212),
  "seam" + "lessly",
  ["cutting", "edge"].join("-"),
  ["game", "changing"].join("-"),
  "revo" + "lutionary",
  ["leveraging", "the", "power", "of"].join(" "),
  ["robust", "and", "scalable"].join(" "),
];
const extensions = new Set([".tsx", ".ts", ".json", ".md", ".mjs", ".css"]);
const ignored = new Set(["node_modules", ".next", ".git"]);
function ext(pathname) {
  const match = pathname.match(/\.[^.]+$/);
  return match?.[0] ?? "";
}
function walk(directory) {
  for (const entry of readdirSync(directory)) {
    if (ignored.has(entry)) continue;
    const absolute = join(directory, entry);
    if (statSync(absolute).isDirectory()) walk(absolute);
    else if (extensions.has(ext(absolute))) {
      const rel = relative(root, absolute).replaceAll("\\", "/");
      if (["scripts/validate-portfolio-content.mjs", "scripts/check-portfolio-copy.mjs"].includes(rel)) continue;
      const value = readFileSync(absolute, "utf8").toLowerCase();
      for (const phrase of banned) {
        if (value.includes(phrase.toLowerCase())) {
          errors.push(`${rel}: banned phrase or character detected`);
        }
      }
    }
  }
}
walk(root);

const styleFiles = [
  "src/app/globals.css",
  "src/styles/v36/tokens.css",
  "src/styles/v36/layout.css",
  "src/styles/v36/home.css",
  "src/styles/v36/pages.css",
  "src/styles/v36/polish.css",
  "src/styles/v36/responsive.css",
];
const css = styleFiles
  .filter((file) => existsSync(join(root, file)))
  .map((file) => readFileSync(join(root, file), "utf8"))
  .join("\n");
for (const required of [
  "@media (max-width: 760px)",
  "@media (prefers-reduced-motion: reduce)",
  "@media print",
  "overflow-wrap",
  ".deep-dive-shell",
  ".studio-shell",
]) {
  if (!css.includes(required)) {
    errors.push(`styles: missing responsive or feature rule ${required}`);
  }
}

if (warnings.length) {
  console.warn("Portfolio validation warnings:");
  warnings.forEach((warning) => console.warn(`- ${warning}`));
}
if (errors.length) {
  console.error("Portfolio content validation failed:");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}
console.log(
  `Portfolio content validation passed for ${projects.length} projects and ${featured.length} featured deep dives.`,
);
