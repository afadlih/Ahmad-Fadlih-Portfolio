# Project Source Code Index

Source excerpts for the three featured projects were reviewed against owner-accessible repositories. The repositories are private, so this public portfolio intentionally stores **no private repository URL, branch, SHA, or commit message**.

Each private source point contains only:

```text
sanitized repository-relative path
language
lineStart and lineEnd
curated owner-reviewed code excerpt
verification date
localized explanation
linkAccess: owner-only
```

The path is rendered as non-clickable code. Public projects may use clickable GitHub file links when the repository and file are publicly accessible.

## InternLog AI

### Official period and internship weeks

```text
src/utils/polinema-logbook.ts
src/components/weekly-report/logbook-workflow-card.tsx
```

### AI Activity Checker

```text
src/ai/prompts/activity.ts
src/constants/ai-usage.ts
```

### Documents and final recap

```text
src/utils/polinema-logbook.ts
src/ai/prompts/final-recap.ts
```

## AquaSense

### Telemetry and monitoring

```text
backend/internal/service/telemetry_service.go
src/app/(app)/telemetry/page.tsx
```

### RBAC and audit

```text
src/lib/auth/access.ts
backend/internal/service/audit_service.go
```

### On-premise application and edge health

```text
backend/internal/app/app.go
src/app/(app)/edge-health/page.tsx
```

## FormAI

### Form analysis

```text
backend/services/form_analyzer.py
backend/models/schemas.py
```

### CSV mapping and controlled fallback

```text
backend/services/csv_row_processor.py
backend/services/data_generator.py
```

### Execution readiness and diagnostics

```text
backend/services/orchestrator.py
frontend/src/lib/run-readiness.ts
frontend/src/components/ResultDashboard.tsx
```

## Review workflow

Before changing a private source excerpt:

1. confirm the file through owner-authorized repository access;
2. select the smallest excerpt that supports the engineering claim;
3. remove credentials, identifiers, operational data, and business-sensitive values;
4. keep `href` absent and `linkAccess` set to `owner-only`;
5. update `verifiedAt` and line metadata;
6. run `npm run validate:source-snippets`, `npm run validate:preflight`, and `npm run qa:light`.

Before adding a public source link:

1. confirm the repository is public;
2. use an owner-controlled HTTPS GitHub URL;
3. link to one file on the default `main` branch;
4. set `linkAccess` to `public`.
