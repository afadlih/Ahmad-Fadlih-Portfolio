# V24 Interface Deck Release

V24 adapts the supplied futuristic portfolio reference into an original developer portfolio system. It does not reproduce the referenced person, text, or exact layout. The release uses the reference for visual rhythm: a rounded device shell, control rails, dark glass panels, metallic blue-gray surfaces, clear status indicators, and modular information blocks.

## Design decisions

- Semantic tokens control background, foreground, surface, border, primary, secondary, and focus colors.
- Light mode uses frost and steel surfaces with deep navy text.
- Dark mode uses obsidian and blue-gray surfaces with soft white text.
- Accent colors are limited to blue, teal, and amber so project content remains the focus.
- Translucency is used only where it helps show hierarchy. Text always sits on a controlled surface.
- The homepage hero is responsive and becomes a stacked interface on small screens.
- Existing project deep dives, source evidence, resume routes, and system map remain available.

## Main files

- `src/components/portfolio/HomeHero.tsx`
- `src/styles/interface-deck-v24.css`
- `src/i18n/config.ts`
- `src/content/profile.json`
