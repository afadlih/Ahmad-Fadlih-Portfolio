# Full Deep Dive Guide

Featured projects use a full case study structure. Supporting projects use a shorter overview.

## Required structure for a featured project

```text
Project context
Role and contribution
Architecture and data flow
Feature deep dive 01
Feature deep dive 02
Feature deep dive 03
Evidence and verification
Current limitations
Next improvements
```

## Required structure for each feature deep dive

```text
Title
Summary
User need
Why the feature matters
Implementation approach
First approach
Limitation of the first approach
Iteration
Technical decisions
Reason for each decision
Trade-off for each decision
Testing and validation
Outcomes
Evidence references
```

## Evidence rule

Do not use generated screenshots as proof. A planned screenshot remains a checklist item until a real file is added.

A public image needs:

```json
{
  "status": "ready",
  "safeToPublish": true,
  "src": "/media/projects/project-slug/screenshot.png",
  "alt": {
    "id": "Deskripsi visual dalam Bahasa Indonesia",
    "en": "Visual description in English"
  }
}
```

## Contribution rule

Contribution text should be checked by the project owner. Do not claim solo ownership if the project was built by a team.

Current project entries use:

```json
"contentReview": "needs-owner-review"
```

Change it to `confirmed` only after role, scope, responsibilities, and ownership statements are accurate.
