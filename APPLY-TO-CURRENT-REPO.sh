#!/usr/bin/env bash
set -euo pipefail

if [[ $# -lt 1 || $# -gt 2 ]]; then
  echo "Usage: $0 /path/to/current/repository [--dry-run]" >&2
  exit 2
fi

SOURCE_REPOSITORY="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TARGET_REPOSITORY="$(cd "$1" && pwd)"
DRY_RUN="${2:-}"

if [[ ! -d "$TARGET_REPOSITORY/.git" ]]; then
  echo "Target must be an existing Git repository: $TARGET_REPOSITORY" >&2
  exit 1
fi
if [[ "$SOURCE_REPOSITORY" == "$TARGET_REPOSITORY" ]]; then
  echo "Source and target directories must be different." >&2
  exit 1
fi
if ! command -v rsync >/dev/null 2>&1; then
  echo "rsync is required for this handoff script." >&2
  exit 1
fi

ARGS=(
  -a
  --delete
  --exclude=.git/
  --exclude=node_modules/
  --exclude=.next/
  --exclude=.quality/
  --exclude=.env
  --exclude=.env.local
  --exclude=.env.development
  --exclude=.env.production
  --exclude='.env.*.local'
  --exclude='*.zip'
  --exclude='*.sha256'
  --exclude=tsconfig.tsbuildinfo
)

if [[ "$DRY_RUN" == "--dry-run" ]]; then
  ARGS+=(--dry-run --itemize-changes)
fi

rsync "${ARGS[@]}" "$SOURCE_REPOSITORY/" "$TARGET_REPOSITORY/"

echo "Handoff complete. Run npm ci and npm run verify in $TARGET_REPOSITORY"
