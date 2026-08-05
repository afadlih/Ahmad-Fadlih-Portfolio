# V36.1 Release Candidate Record

V36.1 adalah source candidate setelah perbaikan CI, privacy boundary, content hierarchy, dependency baseline, dan deployment gate.

## Locked baseline

```text
package version: 36.1.0
Node.js: 22
Next.js: 16.2.12
React: 19.2.8
React DOM: 19.2.8
```

## Required checks

```bash
npm ci
npm run verify
npm run validate:release-env
npm run release:candidate
```

## Honest status

Source dapat disebut release candidate setelah `npm run verify` lulus. Source baru dapat disebut production release setelah domain nyata dan route production check lulus.

## Supporting documents

```text
docs/RELEASE_HARDENING_V36_1.md
docs/DEPLOYMENT_CANDIDATE_V36.md
docs/VISUAL_QA_CHECKLIST_V36.md
docs/CONTENT_LOCK_V36.md
docs/UI_SYSTEM_V36.md
docs/REPOSITORY_SETTINGS.md
```
