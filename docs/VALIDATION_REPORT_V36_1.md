# Validation Report V36.1

Validation date: 2026-08-05

## Passed in the delivery environment

```text
npm run qa:light                           PASS
content and privacy validation             PASS
site structure validation                  PASS
project configuration validation           PASS with expected missing-domain warning
homepage hierarchy validation              PASS
source snippet privacy validation          PASS, 19 excerpts
responsive and visual QA validation        PASS
security preflight                         PASS, 206 source files
release-readiness validation               PASS
copy quality check                         PASS
Node test suite                            PASS, 32/32 tests
JavaScript module syntax checks             PASS, 23 files
JSON parsing                               PASS, 14 files
YAML parsing                               PASS, 3 files
git diff whitespace check                  PASS
release environment negative tests         PASS
apply handoff script test                  PASS
```

The missing-domain warning is expected. The repository intentionally remains a release candidate until a real production origin is configured.

## Release environment behavior

The validator was tested with three conditions:

```text
missing URL                  correctly rejected
example.com URL              correctly rejected
real-format HTTPS origin     accepted
```

This validates configuration syntax only. It does not claim that the sample hostname is deployed.

## Full dependency verification status

A clean `npm ci` could not finish inside the delivery sandbox because its configured npm mirror returned `404` for `zod-validation-error@4.0.2`. This is an external package-mirror limitation, not a passing build result.

Therefore these checks must still run in the user's normal development environment and GitHub Actions:

```bash
npm ci
npm run lint
npm run typecheck
npm run build
npm run verify
npm run quality:full
```

The updated `Portfolio Quality` workflow performs the full install, verification, build, and structural analysis after the package is pushed to `develop`.

## Acceptance rule

Do not merge to `main` unless the full GitHub Actions workflow is green. Do not call the site production-ready until `Production Route Check` passes against the real public domain.
