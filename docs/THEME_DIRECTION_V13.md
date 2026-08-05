# Theme Direction V13: Signal Lab

## Why the previous theme failed

The earlier system map used absolute-positioned cards around a rotated platform. The source panel occupied the same visual area as the lower nodes. At common laptop widths, labels and code references overlapped. The large thin heading and pale violet surfaces also reduced reading comfort.

## Final direction

The chosen direction is **Signal Lab**, a technical field-notes theme.

It combines:

- warm paper surfaces;
- dark ink borders;
- cobalt for digital systems;
- teal for operations and IoT;
- coral for validation and outcomes;
- acid-lime for important actions and implementation signals;
- compact mono labels;
- strong sans-serif headings;
- flat grid-based system diagrams.

The result is deliberately less generic than a white and blue SaaS dashboard, but every information block still has a clear reading order.

## Layout rules

- No absolutely positioned information cards.
- No node may share the same physical space as source-code references.
- System nodes use CSS Grid and remain in document flow.
- Desktop uses three columns, tablet uses two, mobile uses one.
- Source paths appear in a separate terminal strip.
- One active stop is visible at a time.
- Main heading is limited to about 50px in the interactive panel.

## Typography

- Display: Trebuchet MS, Aptos Display, Segoe UI fallback.
- Body: Aptos, Segoe UI Variable, system UI fallback.
- Technical labels: system monospace stack.

No external font download is required, so the build remains portable and the first render is not blocked by font fetching.

## Button hierarchy

- Primary: dark ink with cobalt offset shadow.
- Secondary: cobalt with dark offset shadow.
- Signal: acid-lime with dark text for System Map actions.
- Outline: paper surface with dark border.
- Ghost: low-emphasis navigation.

## Accessibility

Normal text color pairs are designed for at least WCAG AA contrast. Important actions do not rely on hue alone because they also differ through borders, fill, labels, and shadow treatment.
