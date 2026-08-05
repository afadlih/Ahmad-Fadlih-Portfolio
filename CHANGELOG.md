# Changelog


## V36 Final Deployment Candidate

- Promoted the active design system to `src/styles/v36`.
- Added final release candidate documentation, visual QA checklist, content lock, and deployment candidate notes.
- Added `validate:visual-qa`, `validate:content-lock`, and `validate:final-release` gates.
- Added `release:candidate` command for final pre-deploy checks.
- Strengthened project detail code scrollers so long source lines scroll inside their own panels.
- Bounded project detail hero grids to prevent code preview panels from clipping or widening the page.
- Locked OrthoBreath framing as a PKM-KC 2026 health-tech prototype.
- Kept owner-review warnings for contribution wording and BNSP certificate date until the owner confirms the final public text.


## 29.0.0

- Rebalanced homepage hero typography, portrait sizing, and spacing.
- Fixed project preview labels that wrapped one character per line.
- Added resilient auto-fit grids for deep dives, evidence, and architecture cards.
- Polished system map tabs, copy, nodes, and implementation paths.
- Updated OrthoBreath to accurately describe its PKM-KC 2026 prototype status.
- Replaced generic architecture descriptions across supporting projects.
- Added a dedicated V36 polish stylesheet and validation gate.

## 28.0.0

- Rebuilt the home page around a direct evidence-first information hierarchy.
- Removed sticky project cards, nested project panels, and the special third-card layout.
- Consolidated active styling into five V28 CSS modules.
- Replaced legacy simple and purpose class names with semantic component names.
- Kept all active accents inside a calm blue palette and removed decorative gradients.
- Added UI system, featured layout, responsive layout, and release preflight validators.
- Updated README, tests, project version, and release documentation.

## 24.0.0

- Rebuilt the homepage hero as a responsive interface deck inspired by the supplied futuristic portfolio reference.
- Kept the visual direction original by using the owner portrait, project evidence, and portfolio-specific copy.
- Consolidated light and dark theme colors into higher-contrast semantic tokens.
- Improved navigation, cards, project decks, tabs, resume surfaces, project detail pages, and contact controls.
- Rewrote the main Indonesian and English homepage copy for clearer, more natural reading.
- Added mobile layouts for the interface rail, portrait panel, capability cards, project sections, and career tabs.

## 15.0.0

- added 19 real source-code excerpts to featured deep dives;
- made source filenames clickable with exact GitHub line anchors;
- added explicit owner-only access metadata for private repository links;
- added line-numbered, keyboard-scrollable code excerpt UI;
- made sticky-deck implementation paths clickable;
- added source snippet validation and two automated tests.

## 14.0.0 - Deep Signal Deck

- added a CSS-only sticky project-card deck for the three featured projects;
- added mobile and reduced-motion static fallbacks;
- replaced Signal Lab colors with the Deep Signal engineering palette;
- added semantic local card primitives;
- added verified implementation paths to featured cards;
- added Superdesign canvas brief and replica seed;
- added sticky-deck validation and automated tests.

## 13.0.0

- Rebuilt System Map using responsive CSS Grid.
- Removed overlapping absolute-positioned nodes and the decorative platform.
- Added the Signal Lab visual theme.
- Added semantic shadcn-style theme tokens.
- Reworked button, tab, badge, typography, and navigation styling.
- Added `validate:system-map-layout`.
- Shortened and polished bilingual System Map copy.

## 12.0.0

### Added

- localized optional System Map routes;
- three compact system stops for automation, operations, and validation;
- AI Journey sections limited to InternLog AI, FormAI, and OrthoBreath;
- selected-work cards for the classic homepage;
- consistent blue, teal, outline, and ghost button hierarchy;
- system-map and AI-journey validation coverage.

### Changed

- restored the classic portfolio as the default homepage;
- removed Project Atlas from the homepage;
- kept immersive exploration separate from recruiter-facing content;
- updated navigation, sitemap, redirects, resume actions, contact actions, and error-state actions;
- shortened the homepage while preserving organizations, experience, credentials, and CV in tabs.

### Removed

- obsolete ProjectAtlas component and stylesheet.

### Validation

- `npm run qa:light` passes;
- 24 automated tests pass.

## 11.0.0

- Replaced the broken long scroll-world section with a compact Project Atlas.
- Added open-code Button, Badge, Card, Tabs, and Separator primitives.
- Added Portfolio Hub tabs to reduce homepage length.
- Removed generated project cover diagrams from data and public assets.
- Replaced project card and hero visuals with source-oriented code previews.
- Updated the palette to neutral slate, blue, teal, and white.
- Added homepage validation and updated automated tests.


## 9.0.0 - Clean-code toolchain and modular refactor

### Added

- ast-grep project configuration, repository-specific rules, and rule fixtures;
- Knip configuration for unused files, exports, dependencies, unresolved imports, and cycles;
- jscpd duplication configuration with a 4% threshold and report output;
- Fallow configuration for dead code, duplication, complexity, and changed-code audit;
- static-analysis GitHub Actions workflow;
- clean-code tooling validator and documentation.

### Refactored

- split `ProjectDetail.tsx` into focused project-detail section components;
- split organization, credential, and experience rendering into focused evidence components;
- extracted shared evidence status and proof-list UI;
- split the former monolithic global stylesheet into modular style files;
- removed unused content helper exports and unnecessary public type exports.

### Validation

- `npm run qa:light` passes;
- 20 automated tests pass;
- YAML, JSON, and JSONC quality-tool configuration files parse successfully;
- source scan found no `console.log`, raw `<img>`, explicit `any`, or empty `catch` in application source.

## 8.0.0 - Project-specific visuals

### Added

- owner-approved professional portrait;
- seven project-specific cover illustrations;
- tailored visual placeholders for every evidence item;
- visual metadata and bilingual disclaimers;
- project visual capture plan;
- validation and tests for visual assets.

### Changed

- project cards now include project-specific visual context;
- project detail heroes now include the project cover;
- evidence cards use feature-specific placeholders before real screenshots are available.


## 7.0.0 - 2026-07-27

### Added

- security headers and CSP;
- multiple root layouts with correct server-rendered HTML language;
- global and localized error, loading, and not-found states;
- health and security.txt endpoints;
- application icons and manifest entries;
- configuration and content-link validators;
- Docker health check;
- Dependabot configuration;
- documented evidence status;
- privacy-safe implementation reference metadata.

### Changed

- removed the generated professional portrait from public identity;
- changed the hero to a monogram-based profile summary;
- converted language controls into accessible links;
- removed legacy duplicate route files and replaced them with redirects;
- sanitized package-lock registry URLs;
- upgraded package version and runtime conventions;
- revised CI and live monitoring workflows;
- updated AquaSense and FormAI implementation paths to concrete source files.

### Fixed

- incorrect HTML language on English routes;
- hardcoded structured-data email;
- misleading ready status on placeholder evidence;
- stale README environment variables;
- Docker script and Node.js version mismatch;
- package and package-lock version mismatch.

## 10.0.0

### Added

- Scroll World homepage project journey.
- Config-driven scene manifest and validation.
- Original intro and finale vector scenes.
- Reduced-motion static fallback.
- Third-party attribution for `oso95/scroll-world`.

### Changed

- Homepage featured work now uses an immersive scroll-scrubbed presentation while full project pages remain unchanged.

## 17.0.0

- moved the critical theme initializer to the top-level Next.js root layout;
- removed `beforeInteractive` script rendering from the localized layout;
- rebuilt the sticky selected-work grid to prevent source links from crossing the core-flow panel;
- added responsive fallbacks for tablets, phones, and short desktop viewports;
- improved source-path wrapping, badge truncation, CTA hierarchy, and mobile card flow;
- added responsive deck and root-layout regression validation.

## 27.0.0

- Replaced warm and yellow accents with a calm blue semantic palette.
- Reduced excessive empty spacing across the home page and inner pages.
- Rebalanced the hero, introduction, featured work, approach, portfolio hub, contact, resume, project detail, and system map layouts.
- Disabled sticky featured cards for more predictable scrolling.
- Rewrote key Indonesian and English copy for clearer, more natural reading.
- Added `validate:theme` to prevent warm-color and layout regressions.
- Removed obsolete V16, V21, V23, V24, V25, and V26 theme bundles so the active visual architecture has one source of truth.
