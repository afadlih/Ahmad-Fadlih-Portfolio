# Final Experience Architecture V12

## Default experience

The homepage remains a classic, fast, SEO-friendly portfolio.

Order:

1. identity and positioning;
2. work areas;
3. three selected projects;
4. working approach;
5. supporting projects, organizations, experience, credentials, and resume;
6. contact.

No long sticky scroll section is used on the homepage.

## Optional immersive experience

Routes:

```text
/id/system-map
/en/system-map
```

The system map contains three stops:

1. Input and Automation;
2. Operations and IoT;
3. Validation and Outcomes.

Each stop provides project links, system nodes, and source-code references. It uses semantic HTML and CSS-based isometric composition rather than large video or WebGL assets.

## AI journey scope

AI journey appears only on:

```text
InternLog AI
FormAI
OrthoBreath
```

It does not appear on non-AI projects. The visual explicitly separates deterministic rules, AI assistance, user review, and final output.

## Button hierarchy

```text
Primary blue   selected work and primary case-study action
Secondary teal system map and exploratory actions
Outline        resume, repository, and secondary navigation
Ghost          back, skip, and low-priority controls
```

All button variants use visible focus states and minimum touch targets.
