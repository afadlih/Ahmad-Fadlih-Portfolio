# V26 Purpose-First Portfolio

## Direction

V26 keeps the portfolio original while applying general product-design and challenge-based learning principles:

- start from people, context, and a clear challenge;
- explain the product value before implementation detail;
- use calm hierarchy, readable typography, and consistent interaction patterns;
- keep light and dark themes accessible and semantically aligned;
- show iteration, testing, limitations, and technical proof without turning the homepage into documentation.

No Apple assets, logos, fonts, interface screenshots, or proprietary component designs are copied into the website.

## Main changes

- Rewrote the hero as a purpose statement with a short working principle.
- Reframed the introduction around context, focus, building, testing, and reflection.
- Changed featured project language from generic labels to challenge, solution, user flow, and implementation proof.
- Updated the project approach to four focused stages.
- Simplified supporting-project copy and resume language.
- Added a new semantic color system with stronger light-mode contrast.
- Unified typography to one system-oriented family.
- Reduced decorative motion, heavy shadows, and unnecessary card variation.
- Added responsive rules for hero, project stories, approach cards, contact, and resume.

## Validation target

Run:

```bash
npm ci
npm run qa:light
npm run verify
```
