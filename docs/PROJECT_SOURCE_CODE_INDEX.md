# Project Source Code Index

Source references were reviewed against the connected GitHub repositories on 2026-07-28.

The three featured repositories are currently private. File names in the portfolio are clickable, but visitors need GitHub permission to open those private file URLs. Every private link declares `linkAccess: owner-only` so the restriction is explicit in the content model and validation rules.

Each source point now contains:

```text
repository path
GitHub file URL with line range
language
lineStart and lineEnd
curated code excerpt
verification date
localized explanation
```

## InternLog AI

### Official period and internship weeks

- [`src/utils/polinema-logbook.ts`](https://github.com/afadlih/Internlog-ai/blob/main/src/utils/polinema-logbook.ts#L22-L50)
- [`src/components/weekly-report/logbook-workflow-card.tsx`](https://github.com/afadlih/Internlog-ai/blob/main/src/components/weekly-report/logbook-workflow-card.tsx#L6-L27)

### AI Activity Checker

- [`src/ai/prompts/activity.ts`](https://github.com/afadlih/Internlog-ai/blob/main/src/ai/prompts/activity.ts#L54-L75)
- [`src/constants/ai-usage.ts`](https://github.com/afadlih/Internlog-ai/blob/main/src/constants/ai-usage.ts#L3-L10)

### Documents and final recap

- [`src/utils/polinema-logbook.ts`](https://github.com/afadlih/Internlog-ai/blob/main/src/utils/polinema-logbook.ts#L52-L68)
- [`src/ai/prompts/final-recap.ts`](https://github.com/afadlih/Internlog-ai/blob/main/src/ai/prompts/final-recap.ts#L115-L132)

## AquaSense

### Telemetry and monitoring

- [`backend/internal/service/telemetry_service.go`](https://github.com/afadlih/AquaSense/blob/main/backend/internal/service/telemetry_service.go#L12-L24)
- [`src/app/(app)/telemetry/page.tsx`](https://github.com/afadlih/AquaSense/blob/main/src/app/%28app%29/telemetry/page.tsx#L16-L27)

### RBAC and audit

- [`src/lib/auth/access.ts`](https://github.com/afadlih/AquaSense/blob/main/src/lib/auth/access.ts#L5-L19)
- [`backend/internal/service/audit_service.go`](https://github.com/afadlih/AquaSense/blob/main/backend/internal/service/audit_service.go#L14-L24)

### On-premise application and edge health

- [`backend/internal/app/app.go`](https://github.com/afadlih/AquaSense/blob/main/backend/internal/app/app.go#L22-L56)
- [`src/app/(app)/edge-health/page.tsx`](https://github.com/afadlih/AquaSense/blob/main/src/app/%28app%29/edge-health/page.tsx#L39-L58)

## FormAI

### Form analysis

- [`backend/services/form_analyzer.py`](https://github.com/afadlih/AI-Form-Automation-System/blob/main/backend/services/form_analyzer.py#L126-L155)
- [`backend/models/schemas.py`](https://github.com/afadlih/AI-Form-Automation-System/blob/main/backend/models/schemas.py#L69-L122)

### CSV mapping and controlled fallback

- [`backend/services/csv_row_processor.py`](https://github.com/afadlih/AI-Form-Automation-System/blob/main/backend/services/csv_row_processor.py#L126-L184)
- [`backend/services/data_generator.py`](https://github.com/afadlih/AI-Form-Automation-System/blob/main/backend/services/data_generator.py#L52-L115)

### Execution readiness and diagnostics

- [`backend/services/orchestrator.py`](https://github.com/afadlih/AI-Form-Automation-System/blob/main/backend/services/orchestrator.py#L130-L159)
- [`frontend/src/lib/run-readiness.ts`](https://github.com/afadlih/AI-Form-Automation-System/blob/main/frontend/src/lib/run-readiness.ts#L53-L93)
- [`frontend/src/components/ResultDashboard.tsx`](https://github.com/afadlih/AI-Form-Automation-System/blob/main/frontend/src/components/ResultDashboard.tsx#L57-L80)

## Review workflow

Before changing a reference:

1. confirm the file still exists on the repository default branch;
2. select a small excerpt that directly supports the deep-dive explanation;
3. keep the excerpt concise enough to scan in the portfolio;
4. update the GitHub line anchor and `verifiedAt` date;
5. declare `linkAccess: owner-only` for private repositories;
6. run `npm run validate:source-snippets` and `npm run qa:light`.
