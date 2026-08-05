# Superdesign Canvas Brief

## Setup answer

When Superdesign asks **what would you like to design?**, use this answer:

> Redesign an existing bilingual Next.js developer portfolio around a sticky project-card deck. As the user scrolls through the selected-work section, each project card should become sticky below the site header, and the next card should slide over it like a controlled deck of cards. Keep the homepage fast, readable, and recruiter-friendly. Use only three sticky cards: InternLog AI, AquaSense, and FormAI. Disable the sticky behavior on mobile and for reduced-motion users. Do not use long scroll-world scenes, absolute-positioned diagrams, generated dashboard screenshots, or decorative 3D assets that do not prove the project.

## Visual direction

Theme name: **Deep Signal Deck**

Personality:

- reliable engineering;
- AI and automation with guardrails;
- operational and IoT awareness;
- evidence over hype;
- technical, calm, and distinctive.

Palette:

```text
Background       #06111F
Surface          #0C1A2A
Raised surface   #12243A
Text             #F7F9FC
Muted text       #9FB0C3
Border           #20364D
Software cobalt  #5B7CFA
Telemetry teal   #22C7B8
Evidence amber   #F2B84B
AI violet        #A78BFA
```

The palette deliberately avoids the Bitcoin-orange identity from the reference prompt. Cobalt represents software and automation, teal represents monitoring and IoT, amber represents proof and outcomes, and violet is reserved for AI-heavy flows.

## Layout rules

- Keep the standard 2D portfolio as the default route.
- Use a sticky responsive header with restrained blur.
- Hero must remain under one viewport on common laptop sizes.
- The sticky deck may use at most three cards.
- Each card must fit within the usable viewport below the header.
- Use normal document flow inside cards. No absolute positioning for information blocks.
- Use a grid-based feature composition with subtle corner accents.
- Contact uses a bordered CTA composition with two clear primary actions.
- Supporting content stays behind tabs.
- Mobile and reduced-motion layouts use ordinary static cards.

## Card content

Each sticky card contains:

1. project number, category, and stage;
2. project name and short summary;
3. problem and outcome;
4. five-step flow;
5. two verified source-code paths;
6. technology tags;
7. one clear case-study CTA.

## Avoid

- generic SaaS blue-on-white cards;
- crypto, Bitcoin, or trading symbolism;
- excessive orange glow;
- oversized glassmorphism;
- animated orbits and bouncing badges;
- generated screenshots presented as evidence;
- scroll hijacking;
- cards taller than the usable viewport;
- horizontal overflow on mobile.
