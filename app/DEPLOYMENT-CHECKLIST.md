# GSM Trading Lab Deployment Checklist

1. Extract ZIP.
2. Upload/replace all files in GitHub main branch.
3. Commit changes.
4. Vercel redeploy with build cache OFF.
5. Publish latest Firestore rules from `firebase/firestore.rules`.
6. Test: home, signup, login, dashboard, admin, signals, payments, demo trading, journal.

If Vercel still shows an old error, check the commit ID in Vercel and confirm it matches the latest GitHub commit.
