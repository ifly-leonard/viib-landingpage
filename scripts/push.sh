#!/bin/sh
# Wrapper for `git push` that regenerates + commits OG images first, so the
# new commit is included in the push.
#
# Because a git pre-push hook cannot make its own commit part of the same
# push's ref update (git resolves the ref before the hook runs), this wrapper
# is the reliable way to "generate → commit → push" in one step.
#
# Usage:  npm run push [-- <git push args>]

set -e

echo "push: generating OG images…"
npm run og:build

git add public/og src/lib/og.config.ts

if git diff --cached --quiet; then
  echo "push: no new OG images to commit."
else
  git commit -m "chore: regenerate OG images ($(date +%Y%m%d-%H%M%S))" --no-verify >/dev/null
  echo "push: committed new OG images."
fi

git push "$@"
