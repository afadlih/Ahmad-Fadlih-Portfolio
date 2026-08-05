# V36 Final Release Candidate

V36 is the deployment candidate for the portfolio. The goal is not another redesign. The goal is to lock the interface, content order, evidence model, and release checks so the site can move toward public deployment.

## Version path

```text
V31 Stability Fix Release
V32 Visual Regression Release
V33 Content Accuracy Release
V34 Portfolio Narrative Final
V35 Performance, SEO, and Accessibility Release
V36 Deployment Candidate
```

## V31 Stability Fix Release

Focus:

```text
lint readiness
typecheck readiness
qa light readiness
build readiness
script names and lockfile version alignment
```

Result in V36:

```text
package version locked to 36.0.0
package lock root version locked to 36.0.0
active style modules moved to src/styles/v36
old v29 imports removed from globals.css
final validation scripts added to qa:light
```

## V32 Visual Regression Release

Focus:

```text
no horizontal page overflow
no character-level word breaks
stable code scrollers
bounded project detail layout
mobile and tablet fallback
```

Result in V36:

```text
SourceCodeExcerpt has its own horizontal viewport
project detail hero uses bounded grid columns
case headings are rendered as a grid to prevent labels touching titles
long code lines scroll inside the code panel
normal labels and stack tags do not break per character
```

## V33 Content Accuracy Release

Focus:

```text
project status is honest
prototype projects are not framed as production products
private source links remain owner-only
medical claims are avoided for OrthoBreath
pending evidence remains visible as planned evidence, not proof
```

Result in V36:

```text
OrthoBreath stays framed as PKM-KC 2026 health-tech prototype
owner review warnings remain visible until the owner confirms exact contribution wording
BNSP certificate date remains pending until confirmed
content lock documentation lists what still needs owner confirmation
```

## V34 Portfolio Narrative Final

Focus:

```text
clear hero statement
three strongest project stories
compact supporting project list
case study depth kept in detail pages
CV route kept available
```

Result in V36:

```text
homepage order remains Hero, Featured, Major, Approach, Supporting Projects, Contact
project detail pages keep overview, contribution, architecture, AI journey, feature deep dive, evidence, and limitations
supporting projects are grouped by purpose instead of shown as equal featured work
```

## V35 Performance, SEO, and Accessibility Release

Focus:

```text
semantic metadata
sitemap and robots
Open Graph image
security headers
reduced motion
keyboard focus
touch target size
no unnecessary heavy visual dependency
```

Result in V36:

```text
metadata and sitemap routes are present
security headers are configured in next.config.ts
local shadcn-style primitives remain dependency-light
reduced motion rule remains in responsive styles
primary buttons keep minimum touch target sizing
```

## V36 Deployment Candidate

V36 is ready for local final verification using:

```bash
npm ci
npm run qa:light
npm run verify
npm run release:candidate
npm run dev
```

The final public release should be tagged only after the owner confirms:

```text
final domain
project contribution wording
BNSP certificate date
public links for private or unpublished work
final screenshots or demo videos
```
