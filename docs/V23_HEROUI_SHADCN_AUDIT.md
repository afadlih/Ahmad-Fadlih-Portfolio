# V23 HeroUI and shadcn audit

## Goal

This release reshapes the portfolio around two ideas:

1. HeroUI style theme discipline: one token set for foreground, background, card, border, accent, and light or dark mode.
2. shadcn style composition: local UI primitives such as Button, Card, Badge, Tabs, and Separator are used to compose sections without adding heavy runtime dependencies.

## What changed

- Home hero was rebuilt as a product-style landing section.
- The first screen now explains the portfolio promise, the project flow, and the proof model.
- The profile photo is placed inside the hero preview panel so the page feels personal but still product-first.
- Light mode text, muted text, cards, borders, and surfaces were strengthened.
- Portfolio Hub keeps the project lanes from V21 and V22, but now uses cleaner card spacing and tab surfaces.
- Resume, project detail, system map, and contact surfaces inherit the same token layer.

## Decision

No HeroUI package was added. The project already has a small local primitive layer inspired by shadcn. Adding another component library would increase dependencies and visual mismatch. V23 uses HeroUI theming principles and shadcn-style composition while keeping the portfolio lightweight.

## Validation

Run:

```bash
npm run qa:light
```

Expected result:

```text
12 projects validated
3 featured full deep dives
19 source excerpts validated
28 automated tests passed
```
