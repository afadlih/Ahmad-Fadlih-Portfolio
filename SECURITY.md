# Security Policy

## Reporting

Report a security or privacy issue privately through:

```text
ahmadfadlihwahyusardana@gmail.com
```

Do not open a public GitHub issue containing secrets, private URLs, personal data, or vulnerability details.

## Public content rules

The repository must not contain:

- API keys;
- access tokens;
- cookies;
- private broker credentials;
- private Firebase configuration that grants access;
- personal respondent data;
- internal company URLs;
- unredacted screenshots.

## Content Studio

Content Studio is a local drafting tool. It must remain disabled in production through:

```env
ENABLE_CONTENT_STUDIO=false
```

## Private repositories

Portfolio deep dives may show sanitized file paths. Direct private file links, commit SHAs, secrets, and proprietary logic must not be published.
