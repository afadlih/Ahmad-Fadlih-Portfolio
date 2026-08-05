# V36 Visual QA Checklist

Use this checklist after running the project locally. The goal is to catch layout defects that automated scripts cannot fully see.

## Required viewport checks

```text
375 x 812
768 x 1024
1024 x 768
1366 x 768
1440 x 900
1920 x 1080
```

## Pages to inspect

```text
/id
/en
/id/projects
/id/projects/internlog-ai
/id/projects/aquasense
/id/projects/formai
/id/projects/polinema-adaptive-toeic
/id/projects/orthobreath
/id/system-map
/id/resume
```

## Layout checks

```text
No horizontal page scroll outside intentional code panels
No text broken per character
No badge or stack item covering another element
No code panel wider than the project detail column
No sidebar covering project content
No section with large empty space that does not explain anything
No project card with inconsistent height that leaves a large blank area
No button placed outside its card or section
```

## Code excerpt checks

Each code excerpt must:

```text
show a toolbar with file path and metadata
scroll horizontally inside the code panel
keep line numbers aligned
not widen the entire page
remain keyboard-scrollable through tabIndex
show a short scroll hint below the code area
```

## Light theme checks

```text
text is not pale
secondary text remains readable
borders are visible but not heavy
primary buttons are easy to identify
blue accents are consistent
no yellow, gold, purple, or pink accent returns
```

## Dark theme checks

```text
foreground remains readable
muted text is not too dim
code panel contrast is comfortable
focus ring is visible
no decorative glow dominates the content
```

## Acceptance

V36 passes visual QA when the site can be reviewed without zooming out, without scrolling sideways except inside code blocks, and without guessing which text belongs to which section.
