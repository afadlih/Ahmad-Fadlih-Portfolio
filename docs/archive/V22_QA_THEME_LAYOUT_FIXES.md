# V22 QA, Theme, Layout, and Copy Fixes

## Fixed QA blockers

- `validate-portfolio-content.mjs` now normalizes Windows paths before ignoring its own checker files.
- `check-portfolio-copy.mjs` uses the same Windows-safe path handling.
- `package.json` and `package-lock.json` are synchronized at version `22.0.0`.
- `globals.css` stays under the modular import limit expected by the clean-code guard.

## Fixed lint issues reported from Windows

- `public/theme-init.js` no longer declares an unused catch variable.
- `SystemMapExperience.tsx` no longer imports an unused helper.
- `ThemeToggle.tsx` no longer calls `setState` inside an effect. The theme is initialized lazily and updated only from the user action.

## Theme and layout audit

- Light mode text contrast was strengthened through darker muted text, stronger borders, and clearer surfaces.
- Dark mode keeps the same cobalt, teal, and amber identity without changing the information architecture.
- Header, language toggle, theme toggle, cards, resume panels, project tags, system map surfaces, and source-code panels now share one token family.

## Copy polish

- Hero copy now explains the portfolio as a product story.
- Featured cards emphasize problem, visible flow, and proof instead of reading like placeholders.
- Project descriptions for InternLog AI, AquaSense, FormAI, Polinema Adaptive TOEIC, Machine Learning Lab, and Mobile Programming Lab were tightened.
