import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const [type, id] = process.argv.slice(2);
const allowed = new Set(["organization", "credential", "experience"]);
if (!allowed.has(type) || !id) {
  console.error("Usage: npm run content:new -- <organization|credential|experience> <id>");
  process.exit(1);
}

const fileName = `${type}s.json`;
const target = join(root, "src", "content", "drafts", fileName);
const items = existsSync(target) ? JSON.parse(readFileSync(target, "utf8")) : [];
if (items.some((item) => item.id === id)) {
  console.error(`Draft already exists: ${type}/${id}`);
  process.exit(1);
}

const localized = { id: "ISI TEKS INDONESIA", en: "ADD ENGLISH TEXT" };
const common = { id, published: false, evidenceStatus: "draft" };
const templates = {
  organization: {
    ...common,
    name: "ISI NAMA ORGANISASI",
    role: localized,
    period: "YYYY - YYYY",
    description: localized,
    achievements: [localized],
    logo: `/media/organizations/${id}/logo.png`,
    photos: [{ src: `/media/organizations/${id}/foto-01.jpg`, alt: localized, caption: localized }],
    link: "",
  },
  credential: {
    ...common,
    title: localized,
    issuer: "ISI PENERBIT",
    issuedAt: "YYYY-MM",
    credentialId: "",
    credentialUrl: "",
    image: `/media/credentials/${id}.jpg`,
    skills: [],
    description: localized,
  },
  experience: {
    ...common,
    title: localized,
    organization: "ISI ORGANISASI",
    role: localized,
    period: "Bulan YYYY",
    description: localized,
    contributions: [localized],
    photos: [{ src: `/media/experience/${id}/foto-01.jpg`, alt: localized, caption: localized }],
    tags: [],
    link: "",
  },
};
items.push(templates[type]);
writeFileSync(target, `${JSON.stringify(items, null, 2)}\n`, "utf8");
console.log(`Created draft ${type}/${id} in ${target.replace(`${root}/`, "")}`);
