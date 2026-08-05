# Design System V11

## Direction

V11 adopts an open-code component approach inspired by shadcn/ui and the compact block composition used by Efferd.

The goal is not to copy a complete template. The implementation keeps the portfolio's own content model and uses local primitives that can be inspected and edited directly.

## Primitives

```text
Button
Badge
Card
Tabs
Separator
```

Location:

```text
src/components/ui/
```

## Composition rules

- Cards have a clear header, content, and action area.
- Tabs display one secondary content group at a time.
- Aspect ratios are bounded by CSS instead of arbitrary minimum heights.
- Borders and spacing provide hierarchy before shadows or gradients.
- Interactive controls use keyboard focus states and semantic roles.
- Colors use slate neutrals with blue and teal accents.

## Homepage blocks

```text
HomeHero
QuickIntro
SelectedWork and optional System Map
Approach
PortfolioHub
Contact
```

No homepage block uses sticky scroll tracking or a height measured in multiple viewports.

## Future shadcn additions

`components.json` is included so new components can be added through the shadcn CLI when package registry access is available.
