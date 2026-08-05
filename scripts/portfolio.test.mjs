import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const read = (path) => JSON.parse(readFileSync(join(root, path), "utf8"));
const source = (path) => readFileSync(join(root, path), "utf8");
const projects = read("src/content/projects.json");
const profile = read("src/content/profile.json");
const localized = (value) => Boolean(value?.id && value?.en);

for (const [name, items] of Object.entries({
  organizations: read("src/content/organizations.json"),
  credentials: read("src/content/credentials.json"),
  experiences: read("src/content/experiences.json"),
})) {
  test(`${name} use honest public evidence states`, () => {
    for (const item of items) {
      assert.equal(item.published, true, item.id);
      assert.ok(
        ["documented", "ready", "verified"].includes(item.evidenceStatus),
        `${item.id}: ${item.evidenceStatus}`,
      );
      if (item.evidenceStatus !== "documented") {
        const serialized = JSON.stringify(item);
        assert.equal(serialized.includes("/media/placeholders/"), false, item.id);
      }
    }
  });
}

test("profile has complete bilingual identity copy", () => {
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
    assert.ok(localized(profile[field]), field);
  }
});

test("public profile uses the owner-approved professional portrait", () => {
  assert.ok(profile.photo);
  assert.equal(profile.photoStatus, "owner-approved-generated-portrait");
  assert.ok(existsSync(join(root, "public", profile.photo.replace(/^\//, ""))));
  assert.equal(
    existsSync(join(root, "public/media/profile/ahmad-fadlih-formal.png")),
    false,
  );
});

test("project slugs and evidence ids are unique", () => {
  assert.equal(new Set(projects.map((item) => item.slug)).size, projects.length);
  for (const project of projects) {
    assert.equal(
      new Set(project.evidence.map((item) => item.id)).size,
      project.evidence.length,
      project.slug,
    );
  }
});

test("exactly three projects are featured full case studies", () => {
  const featured = projects.filter((item) => item.featured);
  assert.equal(featured.length, 3);
  for (const project of featured) {
    assert.equal(project.caseStudyDepth, "full", project.slug);
    assert.equal(project.deepDives.length, 3, project.slug);
  }
});

test("full deep dives contain decisions, trade-offs, validation, and outcomes", () => {
  for (const project of projects.filter((item) => item.caseStudyDepth === "full")) {
    for (const feature of project.deepDives) {
      assert.ok(localized(feature.title), `${project.slug}/${feature.id}/title`);
      assert.ok(localized(feature.userNeed), `${project.slug}/${feature.id}/userNeed`);
      assert.ok(feature.approach.length >= 3, `${project.slug}/${feature.id}/approach`);
      assert.ok(localized(feature.journey.firstAttempt), `${project.slug}/${feature.id}/journey`);
      assert.ok(feature.technicalDecisions.length >= 1, `${project.slug}/${feature.id}/decisions`);
      assert.ok(feature.validation.length >= 2, `${project.slug}/${feature.id}/validation`);
      assert.ok(feature.outcomes.length >= 1, `${project.slug}/${feature.id}/outcome`);
    }
  }
});

test("featured implementation references are concrete and privacy-safe", () => {
  for (const project of projects.filter((item) => item.featured)) {
    for (const feature of project.deepDives) {
      assert.ok(feature.sourcePoints.length >= 2, `${project.slug}/${feature.id}`);
      for (const point of feature.sourcePoints) {
        assert.ok(point.path && !point.path.endsWith("/"), point.path);
        assert.match(point.verifiedAt, /^\d{4}-\d{2}-\d{2}$/);
        if (project.visibility === "private") {
          assert.equal(point.linkAccess, "owner-only");
          assert.ok(point.href?.startsWith("https://github.com/afadlih/"));
        }
      }
    }
  }
});

test("project evidence references known features", () => {
  for (const project of projects) {
    const features = new Set(project.deepDives.map((item) => item.id));
    const evidence = new Set(project.evidence.map((item) => item.id));
    for (const item of project.evidence) {
      for (const featureId of item.featureIds ?? []) {
        if (project.caseStudyDepth === "full") {
          assert.ok(features.has(featureId), `${project.slug}/${item.id}/${featureId}`);
        }
      }
    }
    for (const feature of project.deepDives) {
      for (const evidenceId of feature.evidenceIds) {
        assert.ok(evidence.has(evidenceId), `${project.slug}/${feature.id}/${evidenceId}`);
      }
    }
  }
});

test("ready public media exists", () => {
  for (const project of projects) {
    for (const item of project.evidence) {
      if (
        item.safeToPublish &&
        item.src &&
        ["ready", "verified"].includes(item.status)
      ) {
        assert.ok(
          existsSync(join(root, "public", item.src.replace(/^\//, ""))),
          `${project.slug}: ${item.src}`,
        );
      }
    }
  }
});

test("draft content remains unpublished", () => {
  for (const name of ["organizations", "credentials", "experiences"]) {
    for (const item of read(`src/content/drafts/${name}.json`)) {
      assert.equal(item.published, false, `${name}/${item.id}`);
    }
  }
});

test("root layout owns theme bootstrap while locale layout stays script-free", () => {
  const rootLayout = source("src/app/layout.tsx");
  const localeLayout = source("src/app/[lang]/layout.tsx");
  const themeInit = source("public/theme-init.js");
  assert.ok(rootLayout.includes('src="/theme-init.js"'));
  assert.ok(rootLayout.includes('strategy="beforeInteractive"'));
  assert.equal(localeLayout.includes("next/script"), false);
  assert.equal(localeLayout.includes("<Script"), false);
  assert.ok(localeLayout.includes("DocumentLanguageSync"));
  assert.ok(themeInit.includes("document.documentElement.lang"));
});

test("home page follows a clear information order", () => {
  const page = source("src/app/[lang]/page.tsx");
  const components = [
    "HomeHero",
    "SelectedWork",
    "Approach",
    "PortfolioHub",
    "Contact",
  ];
  let previous = -1;
  for (const component of components) {
    const current = page.indexOf(`<${component}`);
    assert.ok(current > previous, component);
    previous = current;
  }
});

test("project details expose the full case study sequence", () => {
  const detail = source("src/components/portfolio/ProjectDetail.tsx");
  const sequence = [
    "ProjectOverviewSection",
    "ProjectContributionSection",
    "ProjectArchitectureSection",
    "AiJourneySection",
    "ProjectDeepDiveSection",
    "ProjectEvidenceSection",
    "ProjectLimitsSection",
  ];
  let previous = -1;
  for (const component of sequence) {
    const current = detail.indexOf(`<${component}`);
    assert.ok(current > previous, component);
    previous = current;
  }

  const sections = {
    overview: "src/components/portfolio/project-detail/ProjectOverviewSection.tsx",
    contribution: "src/components/portfolio/project-detail/ProjectContributionSection.tsx",
    architecture: "src/components/portfolio/project-detail/ProjectArchitectureSection.tsx",
    "ai-journey": "src/components/portfolio/project-detail/AiJourneySection.tsx",
    "deep-dives": "src/components/portfolio/project-detail/ProjectDeepDiveSection.tsx",
    evidence: "src/components/portfolio/ProjectEvidenceSection.tsx",
    limits: "src/components/portfolio/project-detail/ProjectLimitsSection.tsx",
  };
  for (const [anchor, path] of Object.entries(sections)) {
    assert.ok(source(path).includes(`id="${anchor}"`), anchor);
  }
});

test("resume pages and downloadable files are available", () => {
  for (const path of [
    "src/app/[lang]/resume/page.tsx",
    "src/components/portfolio/ResumePage.tsx",
    "public/documents/Ahmad-Fadlih-CV-ID.pdf",
    "public/documents/Ahmad-Fadlih-CV-EN.pdf",
    "public/documents/Ahmad-Fadlih-CV-Editable.docx",
  ]) {
    assert.ok(existsSync(join(root, path)), path);
  }
});

test("error, loading, health, and security endpoints exist", () => {
  for (const path of [
    "src/app/[lang]/loading.tsx",
    "src/app/[lang]/error.tsx",
    "src/app/global-error.tsx",
    "src/app/global-not-found.tsx",
    "src/app/api/health/route.ts",
    "src/app/.well-known/security.txt/route.ts",
  ]) {
    assert.ok(existsSync(join(root, path)), path);
  }
});

test("security headers and production redirects are configured", () => {
  const config = source("next.config.ts");
  for (const token of [
    "Content-Security-Policy",
    "X-Content-Type-Options",
    "Permissions-Policy",
    "Strict-Transport-Security",
    "async redirects()",
  ]) {
    assert.ok(config.includes(token), token);
  }
});

test("package lock is portable and synchronized", () => {
  const pkg = read("package.json");
  const lock = read("package-lock.json");
  assert.equal(pkg.version, lock.version);
  assert.equal(pkg.version, lock.packages[""].version);
  assert.equal(source("package-lock.json").includes("applied-caas-gateway"), false);
});


test("project cards and detail heroes use code previews instead of generated covers", () => {
  const card = source("src/components/portfolio/ProjectCard.tsx");
  const hero = source("src/components/portfolio/project-detail/ProjectHero.tsx");
  assert.ok(card.includes("ProjectCodePreview"));
  assert.ok(hero.includes("ProjectCodePreview"));
  for (const project of projects) {
    assert.equal("visual" in project, false, project.slug);
    assert.equal(
      existsSync(join(root, "public/media/projects", project.slug, "cover.svg")),
      false,
      project.slug,
    );
  }
});


test("classic homepage and optional system map are separated", () => {
  const home = source("src/app/[lang]/page.tsx");
  const map = source("src/components/portfolio/SystemMapExperience.tsx");
  assert.ok(home.includes("SelectedWork"));
  assert.equal(home.includes("SystemMapExperience"), false);
  assert.ok(map.includes("Tabs"));
  assert.ok(map.includes("systemMapStops"));
  assert.equal(existsSync(join(root, "src/components/portfolio/ProjectAtlas.tsx")), false);
});

test("AI journey is restricted to supported AI projects", () => {
  const journeys = source("src/lib/ai-journey.ts");
  for (const slug of ["internlog-ai", "formai", "orthobreath"]) {
    assert.ok(journeys.includes(slug), slug);
  }
  for (const slug of ["aquasense", "smart-clothesline", "jti-intern-testing"]) {
    assert.equal(journeys.includes(`${slug}: {`), false, slug);
  }
});

test("portfolio hub keeps secondary projects compact", () => {
  const hub = source("src/components/portfolio/PortfolioHub.tsx");
  for (const token of ["supporting-project-list", "ProjectGroup", "productSlugs", "learningSlugs"]) {
    assert.ok(hub.includes(token), token);
  }
  assert.equal(hub.includes("<Tabs"), false);
});

test("local shadcn-style primitives are available", () => {
  for (const path of [
    "src/components/ui/button.tsx",
    "src/components/ui/badge.tsx",
    "src/components/ui/card.tsx",
    "src/components/ui/tabs.tsx",
    "src/components/ui/separator.tsx",
  ]) {
    assert.ok(existsSync(join(root, path)), path);
  }
});


test("featured work uses a bounded non-sticky grid", () => {
  const selectedWork = source("src/components/portfolio/SelectedWork.tsx");
  const featuredCard = source("src/components/portfolio/FeaturedProjectCard.tsx");
  const homeCss = source("src/styles/v36/home.css");
  const responsiveCss = source("src/styles/v36/responsive.css");
  assert.ok(selectedWork.includes("featured-project-grid"));
  assert.ok(featuredCard.includes("featured-project__body"));
  assert.equal(featuredCard.includes("implementationSources"), false);
  assert.equal(homeCss.includes("position: sticky"), false);
  assert.ok(homeCss.includes("grid-template-columns: repeat(3, minmax(0, 1fr))"));
  assert.ok(responsiveCss.includes("@media (max-width: 760px)"));
  assert.ok(responsiveCss.includes("@media (prefers-reduced-motion: reduce)"));
});

test("Superdesign handoff is included", () => {
  assert.ok(existsSync(join(root, "docs/SUPERDESIGN_CANVAS_BRIEF.md")));
  assert.ok(
    existsSync(
      join(root, ".superdesign/replica_html_template/portfolio-home.html"),
    ),
  );
});


test("featured deep dives include real code excerpts and GitHub file links", () => {
  for (const project of projects.filter((item) => item.featured)) {
    for (const deepDive of project.deepDives) {
      assert.ok(deepDive.sourcePoints?.length, `${project.slug}/${deepDive.id}`);
      for (const sourcePoint of deepDive.sourcePoints) {
        assert.ok(sourcePoint.code?.split("\n").length >= 4, sourcePoint.path);
        assert.ok(sourcePoint.language, sourcePoint.path);
        assert.ok(sourcePoint.href?.includes("github.com/afadlih/"), sourcePoint.path);
        assert.ok(Number.isInteger(sourcePoint.lineStart), sourcePoint.path);
        assert.ok(Number.isInteger(sourcePoint.lineEnd), sourcePoint.path);
      }
    }
  }
});

test("code excerpt UI keeps filenames clickable and line-numbered", () => {
  const excerpt = source("src/components/portfolio/SourceCodeExcerpt.tsx");
  const navigator = source("src/components/portfolio/DeepDiveNavigator.tsx");
  const css = source("src/styles/v36/pages.css");
  assert.ok(excerpt.includes("source.href"));
  assert.ok(excerpt.includes("noopener noreferrer"));
  assert.ok(excerpt.includes("lineStart + index"));
  assert.ok(navigator.includes("SourceCodeExcerpt"));
  assert.ok(css.includes("source-code-excerpt__viewport"));
});
