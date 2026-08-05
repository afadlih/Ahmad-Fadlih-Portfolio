# V36 UI System

V36 keeps the portfolio simple, evidence-first, and calm. The visual system is intentionally restrained so the project stories and code evidence remain the focus.

## Active style modules

```text
src/styles/v36/tokens.css
src/styles/v36/layout.css
src/styles/v36/home.css
src/styles/v36/pages.css
src/styles/v36/polish.css
src/styles/v36/responsive.css
```

## Palette

The active palette uses calm blue and navy tokens. Yellow, gold, purple, and pink accents are not part of the active system.

```text
background
foreground
surface
surface-soft
muted-foreground
border
primary
primary-hover
code-bg
code-fg
```

## Layout rules

```text
Hero uses a bounded two-column layout
Featured work uses a three-card grid only on desktop
Project detail code panels are bounded and scroll internally
Supporting projects use compact lists
System map stays optional and does not replace the homepage
```

## Typography rules

```text
Hero headings use a bounded clamp size
Section headings stay readable and do not dominate the page
Badges and stack labels do not break per character
Source code keeps monospace formatting and scrolls horizontally
Case headings have visible gap between eyebrow and title
```

## Anti-slop rules

```text
No sticky project deck
No device mockup UI
No large decorative gradient surfaces
No nested cards without purpose
No source code block that widens the page
No placeholder copy that sounds like a generic template
```
