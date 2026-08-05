# Project Evidence Capture Guide

## General rules

- Use dummy data.
- Remove API keys, tokens, cookies, private URLs, and personal data.
- Capture the state that proves a behavior.
- Keep text readable at 100 percent browser zoom.
- Prefer 1600 by 1000 or 1920 by 1080.
- Do not publish an image only because it looks polished.

## InternLog AI

Required first batch:

```text
internlog-ai/period-week-validation.png
internlog-ai/activity-checker.png
internlog-ai/docx-preview.png
internlog-ai/print-preview.png
internlog-ai/final-recap.png
```

The screenshots should prove:

- official period validation;
- week calculation;
- AI refinement without new facts;
- DOCX and print consistency;
- long activity text and correct total hours.

## AquaSense

Required first batch:

```text
aquasense/dashboard.png
aquasense/telemetry-stale-state.png
aquasense/manual-control.png
aquasense/audit-log.png
aquasense/edge-health.png
```

Use simulator data until real hardware commissioning is complete.

## FormAI

Required first batch:

```text
formai/analyzer-result.png
formai/csv-source-trace.png
formai/dry-run-preview.png
formai/row-diagnostics.png
```

The screenshots should show:

- mapped and unresolved fields;
- CSV values remaining authoritative;
- preview with no submission;
- blockers, warnings, skipped rows, and failure reasons.

## Updating project data

After copying an image into `public/media/projects`, update the relevant evidence item:

```json
{
  "status": "ready",
  "safeToPublish": true,
  "src": "/media/projects/formai/analyzer-result.png",
  "alt": {
    "id": "Hasil Form Analyzer dengan field mapped dan unresolved",
    "en": "Form Analyzer result with mapped and unresolved fields"
  }
}
```

Run:

```bash
npm run validate:portfolio
npm test
```
