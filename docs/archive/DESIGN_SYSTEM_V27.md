# V27 Calm Blue Design System

## Objective

The portfolio uses a calm blue visual system that supports technical project stories without making the interface feel cold, crowded, or decorative. The home page keeps enough spacing for readability while avoiding large empty sections.

## Palette

### Light

| Role | Value |
| --- | --- |
| Background | `#F3F6FA` |
| Foreground | `#16243A` |
| Card | `#FFFFFF` |
| Muted surface | `#EAF0F7` |
| Muted text | `#4B5F79` |
| Border | `#CBD6E3` |
| Primary | `#315F9F` |
| Secondary | `#5F7FA7` |

### Dark

| Role | Value |
| --- | --- |
| Background | `#0C1522` |
| Foreground | `#EEF4FB` |
| Card | `#121F30` |
| Muted surface | `#101C2B` |
| Muted text | `#AFBED0` |
| Border | `#2C4058` |
| Primary | `#8FB4E5` |
| Secondary | `#7598C3` |

Yellow, amber, and gold are not part of the active visual system.

## Contrast checks

- Main text on light background: `14.38:1`
- Muted text on light background: `6.03:1`
- White text on primary button: `6.43:1`
- Main text on dark background: `16.55:1`
- Muted text on dark background: `9.69:1`

## Layout rules

- Home sections use `56px` to `84px` vertical padding instead of oversized empty blocks.
- Hero uses a balanced copy and portrait split, then becomes one column on smaller screens.
- The introduction uses a compact split layout with three readable process rows.
- Featured project cards no longer use sticky behavior.
- Supporting projects are grouped by context and displayed in a compact two-column grid.
- Resume and project pages use the same semantic tokens and card treatment.

## Typography

- Body and controls use a system sans-serif stack for speed and readability.
- Large headings use a system serif stack to add editorial character without downloading another font.
- Small labels use uppercase text with restrained tracking.
- Body text stays at regular or medium weight; thin text is avoided.

## Validation

Run:

```bash
npm run validate:theme
npm run qa:light
npm run verify
```
