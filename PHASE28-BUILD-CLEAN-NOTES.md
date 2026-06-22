# Phase 28 — Build Clean & Deployment QA

This phase is focused on deployment stability and pre-launch cleanup.

## Checked/Fix Areas
- Confirmed demo trading Firestore query uses `where(...), orderBy(...)` correctly.
- Confirmed journal page imports and uses `orderBy` correctly.
- Added final deployment QA checklist.
- Kept Phase 19–27 UI/nav improvements included.

## Before Uploading to GitHub
1. Extract ZIP.
2. Upload/replace all files in GitHub main branch.
3. Commit changes.
4. Redeploy on Vercel with build cache disabled.

## Vercel Redeploy
- Deployments → Latest deployment → Redeploy
- Keep **Use existing Build Cache** OFF.

## Firebase Reminder
After deployment, publish latest Firestore/Storage rules if changed.

## Test URLs
- /
- /dashboard
- /admin
- /signals
- /demo-trading
- /journal
- /market-dashboard
- /command-center
