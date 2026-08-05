# V30 Polished Code Scroller Release

V30 fixes the remaining layout regressions on project detail pages.

## Focus

- Code excerpts now keep long code inside their own horizontal scroller.
- Source point cards no longer overflow the project detail container.
- Implementation headings have clear spacing between labels and titles.
- Project code previews stop breaking normal words character by character.
- System map tab labels keep a consistent gap between step number and text.
- OrthoBreath remains framed as a PKM-KC 2026 prototype, not a finished medical product.

## Local checks

```bash
npm run validate:polish
npm run qa:light
npm run verify
```
