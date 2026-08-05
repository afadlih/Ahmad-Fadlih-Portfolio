# Delivery Notes V21

## Scope

This release updates the portfolio after the new GitHub projects were added. The goal is to keep the homepage readable while giving every project a clear role in the portfolio story.

## Updated information architecture

- Featured deck remains focused on InternLog AI, AquaSense, and FormAI.
- Polinema Adaptive TOEIC is now presented as a major case study after the featured deck.
- Portfolio Hub is grouped by purpose instead of one long flat grid:
  - Major
  - Systems
  - QA
  - Learning
  - Career
- Resume page now groups projects by core product stories, major academic product, supporting systems, and QA plus learning proof.

## Visual and layout updates

- Added a V21 theme layer for a calmer cobalt, teal, and amber palette.
- Improved light mode contrast for text, borders, cards, tags, and resume surfaces.
- Dark mode still keeps the deep signal style, but now shares the same semantic tokens as light mode.
- Added a major case study card with bounded layout and responsive behavior.
- Portfolio Hub tabs are shorter, clearer, and better suited for the expanded project set.

## Validation

The following command passed:

```bash
npm run qa:light
```

Result summary:

```text
12 projects validated
3 featured full deep dives
19 source excerpts validated
28 automated tests passed
```

## Remaining owner review

- personal contribution wording for all projects still needs final owner confirmation;
- BNSP certificate date still needs confirmation;
- production domain is not configured yet;
- final screenshots and demo videos are still not included.
