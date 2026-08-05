# Resume

Place the current resume PDF here:

```text
public/resume/ahmad-fadlih-resume.pdf
```

Then enable the link in `src/data/profile.ts`:

```ts
resume: {
  href: "/resume/ahmad-fadlih-resume.pdf",
  label: "Resume",
  isAvailable: true,
}
```

Run `npm run check` after enabling it.
