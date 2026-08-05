# Clean Code Toolchain

This repository uses four complementary static-analysis tools. They are intentionally not treated as interchangeable.

## Commands

```bash
npm run quality:ast-grep
npm run quality:ast-grep:test
npm run quality:knip
npm run quality:jscpd
npm run quality:fallow
npm run quality:full
```

The commands use pinned `npx` versions so `package-lock.json` remains stable and `npm ci` does not need platform-specific analysis binaries.

## ast-grep

Purpose: structural rules on TypeScript and TSX syntax.

Current rules block:

- `console.log` in production source;
- explicit `any`;
- raw `<img>` elements instead of `next/image`;
- empty `catch` blocks;
- non-null assertions as warnings.

Configuration:

```text
sgconfig.yml
tools/ast-grep/rules/
tools/ast-grep/tests/
```

Add a rule only when it represents a project-specific invariant. Keep a valid and invalid fixture for every rule.

## Knip

Purpose: module-graph cleanup.

It checks:

- unused files;
- unused and unlisted dependencies;
- unresolved imports;
- unused exports and types;
- circular dependencies.

Configuration:

```text
knip.jsonc
```

Do not solve a Knip warning by adding broad ignore patterns. First verify the route or configuration entry point.

## jscpd

Purpose: token-based duplication detection across TypeScript, TSX, JavaScript, and CSS.

Configuration:

```text
.jscpd.json
```

The quality gate allows up to 4% duplication and ignores content JSON, media, generated output, and the large test fixture file. A clone should only be extracted when the duplicated code represents the same concept, not merely similar markup.

## Fallow

Purpose: codebase health and changed-code regression checks.

It complements Knip and jscpd with:

- dead-code intelligence;
- architecture and circular-dependency checks;
- duplication analysis;
- cyclomatic and cognitive-complexity hotspots;
- changed-file audit in pull requests.

Configuration:

```text
.fallowrc.jsonc
```

The local command runs the full static layer. CI uses `fallow audit` with a `new-only` gate so existing warnings do not block unrelated work while newly introduced error-level findings do.

## Refactoring policy

1. Confirm the finding is real.
2. Remove dead code before reorganizing it.
3. Extract shared code only when the behavior and reason for change are the same.
4. Prefer small orchestration components over large page components.
5. Keep content data separate from rendering logic.
6. Avoid suppressions unless the framework entry point cannot be modeled correctly.
7. Run `npm run qa:light` before the external quality tools.
8. Run `npm run quality:full` before a release or major refactor.

## Current clean-code changes

- `ProjectDetail.tsx` now coordinates focused section components.
- organization, credential, and experience rendering are separated into focused modules;
- evidence status and proof-list rendering are shared components;
- project-specific ast-grep rules are tested as code;
- static-analysis configuration is versioned and documented.
