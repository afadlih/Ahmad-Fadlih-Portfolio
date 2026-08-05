# Responsive deck audit V17

## Root cause

The implementation links were placed in a full-width grid row while the pipeline still determined the visual height of the preceding row. At some viewport sizes this made the link controls look as if they crossed into the pipeline panel.

## Fix

- summary and source references now share a bounded left column;
- the core flow occupies a dedicated right column;
- source paths use a grid row with a flexible code cell and fixed arrow cell;
- source paths truncate on desktop and wrap on mobile;
- sticky behavior is disabled below 920 px and on viewports shorter than 760 px;
- the main case-study CTA uses the primary action style;
- badges have maximum widths and safe truncation.

## Next.js 16 fix

The theme initializer was moved out of the localized layout. A static `/theme-init.js` file is loaded with `beforeInteractive` from `src/app/layout.tsx`. The localized layout now renders content only and synchronizes the document language with a client effect.
