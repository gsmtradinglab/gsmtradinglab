# GSM Trading Lab - Phase 2

This is the working Next.js + Firebase project for GSM Trading Lab.

## Included in Phase 2
- Live Next.js 15 website
- Firebase Auth login/signup/Google login
- User dashboard
- Course registration form
- Manual payment proof upload
- Admin panel with tabs
- User management
- Registration management
- Payment verification and course access grant
- Free/member/premium signals
- Admin signal posting and status updates
- CSV export for users, payments, registrations
- Updated Firestore security rules
- Updated Firebase Storage rules

## First Admin Setup
1. Signup on the live website with your email.
2. Open Firebase Console → Firestore → users → your user document.
3. Change `role` from `user` to `admin`.
4. Refresh `/dashboard` and click Admin.

For production, Firebase Custom Claims are recommended for stronger admin security.

## Required Vercel Environment Variables
```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

## Firebase Setup
1. Authentication → enable Email/Password and Google.
2. Authentication → Settings → Authorized domains → add:
   - gsmtradinglab.com
   - www.gsmtradinglab.com
   - gsmtradinglab.vercel.app
3. Firestore → Rules → paste `firebase/firestore.rules`.
4. Storage → Rules → paste `firebase/storage.rules`.
5. Redeploy from Vercel after uploading this code to GitHub.

## Important Disclaimer
Trading and investing involve high risk. This app is education-focused only and does not guarantee profit, fixed returns, or loss recovery.
