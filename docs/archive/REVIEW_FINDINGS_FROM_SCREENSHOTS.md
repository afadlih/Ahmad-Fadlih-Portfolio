# Review Findings from the Previous Website Screenshots

## Problems observed

- Project cards used large black placeholder images that looked like broken or unfinished proof.
- Important text competed with oversized visual panels.
- The project index required too much vertical scrolling.
- Cards explained technologies before clearly stating the problem and contribution.
- The homepage contained several sections with similar card patterns and weak information priority.
- Evidence status was not separated from visual decoration.
- The website did not provide a full technical deep dive for featured projects.
- Organization, certificate, and experience input did not share one consistent media schema.

## V3 changes

- Generated project covers are no longer used as evidence.
- Project cards lead with the problem, core flow, and case study depth.
- Featured project pages contain contribution, architecture, deep dives, validation, evidence, limitations, and next improvements.
- Deep dives are interactive tabs with clear technical decision and trade-off blocks.
- Evidence uses planned, documented, ready, and verified states.
- Real media is displayed only when a safe file exists.
- Organization and experience photos use the same `MediaPhoto` object schema.
- The local Content Studio creates JSON drafts without exposing a public admin system.
- Mobile navigation, sticky case study navigation, and responsive grids reduce long and confusing layouts.
