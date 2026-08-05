# Data Schema Reference

## Project depth

```text
overview
full
```

A featured project must use `full` and contain exactly three deep dives.

## Evidence status

```text
planned
Documented
ready
verified
```

JSON uses lowercase values:

```text
planned
documented
ready
verified
```

## Content review

```text
needs-owner-review
confirmed
```

## Published optional content

Organization, credential, and experience entries must use:

```json
{
  "published": true,
  "evidenceStatus": "ready"
}
```

or:

```json
{
  "published": true,
  "evidenceStatus": "verified"
}
```

Draft items remain under `src/content/drafts` with `published: false`.
