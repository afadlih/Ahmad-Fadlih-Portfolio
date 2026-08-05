import { existsSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const errors = [];
const readJson = (path) => JSON.parse(readFileSync(join(root, path), "utf8"));
const localExists = (pathname) =>
  existsSync(join(root, "public", pathname.replace(/^\//, "")));

function checkUrl(value, label, allowedProtocols = ["https:"]) {
  if (!value) return;
  try {
    const url = new URL(value);
    if (!allowedProtocols.includes(url.protocol)) {
      errors.push(`${label}: protocol ${url.protocol} is not allowed`);
    }
  } catch {
    errors.push(`${label}: invalid URL`);
  }
}

const profile = readJson("src/content/profile.json");
checkUrl(profile.github, "profile.github");
checkUrl(profile.linkedin, "profile.linkedin");
checkUrl(profile.instagram, "profile.instagram");
checkUrl(`mailto:${profile.email}`, "profile.email", ["mailto:"]);
for (const field of ["resumeIdUrl", "resumeEnUrl", "resumeEditableUrl"]) {
  if (profile[field] && !localExists(profile[field])) {
    errors.push(`profile.${field}: missing local file ${profile[field]}`);
  }
}

for (const project of readJson("src/content/projects.json")) {
  checkUrl(project.repository, `project/${project.slug}.repository`);
  for (const feature of project.deepDives ?? []) {
    for (const source of feature.sourcePoints ?? []) {
      if (source.href) {
        checkUrl(source.href, `project/${project.slug}/${feature.id}/${source.path}`);
      }
    }
  }
  for (const evidence of project.evidence ?? []) {
    if (evidence.href) checkUrl(evidence.href, `project/${project.slug}/${evidence.id}.href`);
    if (evidence.src && !localExists(evidence.src)) {
      errors.push(`project/${project.slug}/${evidence.id}: missing ${evidence.src}`);
    }
  }
}

for (const file of ["organizations", "credentials", "experiences"]) {
  for (const item of readJson(`src/content/${file}.json`)) {
    if (item.link) checkUrl(item.link, `${file}/${item.id}.link`);
    if (item.credentialUrl) checkUrl(item.credentialUrl, `${file}/${item.id}.credentialUrl`);
    if (item.image && !localExists(item.image)) errors.push(`${file}/${item.id}: missing ${item.image}`);
    if (item.logo && !localExists(item.logo)) errors.push(`${file}/${item.id}: missing ${item.logo}`);
    for (const photo of item.photos ?? []) {
      if (!localExists(photo.src)) errors.push(`${file}/${item.id}: missing ${photo.src}`);
    }
    for (const proof of item.proofPoints ?? []) {
      if (proof.href) checkUrl(proof.href, `${file}/${item.id}.proofPoint`);
    }
  }
}

if (errors.length) {
  console.error("Content link validation failed:");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}
console.log("Content link validation passed.");
