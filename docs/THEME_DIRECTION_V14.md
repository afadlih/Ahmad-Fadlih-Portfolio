# V14 Theme Direction: Deep Signal Deck

## Why this theme

The previous Signal Lab palette was visually unusual but too editorial and rigid. The new direction keeps the technical personality while aligning the visual language with Ahmad's actual work:

- cobalt for software, automation, and interfaces;
- teal for telemetry, IoT, and operational systems;
- amber for evidence, outcomes, and verified progress;
- violet only for AI-heavy flows;
- deep navy instead of generic black or crypto-themed void.

## Sticky deck scope

The deck is used only for the three featured projects. It is not applied to every content card.

```text
InternLog AI
AquaSense
FormAI
```

Each item owns a normal-flow wrapper. The inner card is sticky below the site header. The next wrapper naturally scrolls into view with a higher stacking order, creating the deck effect. On small screens and reduced-motion preferences, cards return to normal flow.

## Efferd-inspired composition

The implementation borrows composition principles rather than copying a block:

- restrained sticky header;
- feature cards with corner accents;
- concise card content;
- one dominant CTA per card;
- bordered final CTA section;
- responsive layouts that remain ordinary document flow on mobile.

## Performance rules

- no scroll listener;
- no GSAP dependency;
- no scroll hijacking;
- no generated 3D assets;
- no full-viewport video;
- CSS sticky only;
- three cards maximum;
- no sticky behavior below 700px;
- no sticky behavior under reduced motion.
