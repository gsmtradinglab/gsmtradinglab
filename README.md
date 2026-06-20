# GSM Trading Lab - Phase 1

Real runnable Next.js + Firebase foundation for GSM Trading Lab.

## Included
- Home, About, Founder, Courses, Signals, Market Tools, Contact pages
- Signup, Login, Google login, Forgot password
- User dashboard
- Course registration form saved to Firestore
- Support ticket form saved to Firestore
- Basic protected Admin panel
- Firebase Auth, Firestore, Storage setup
- Firestore and Storage security rules
- `.env.example`

## Install locally

```bash
npm install
npm run dev
```

Open: `http://localhost:3000`

## Firebase setup
1. Go to Firebase Console
2. Create project: `gsm-trading-lab`
3. Enable Authentication
4. Enable Email/Password
5. Enable Google provider
6. Create Firestore Database
7. Create Firebase Storage
8. Copy web app config to `.env.local`
9. Paste `firebase/firestore.rules` into Firestore Rules
10. Paste `firebase/storage.rules` into Storage Rules

## Environment file
Create `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_WHATSAPP_NUMBER=
SUPER_ADMIN_EMAIL=gsmtradinglab@gmail.com
```

## First admin setup
For Phase 1, after creating your account, open Firestore > users > your uid and manually set:

```json
role: "superAdmin"
```

Production should use Firebase Custom Claims for stronger admin security.

## Deploy to Netlify
1. Upload this project to GitHub
2. Go to Netlify
3. Add new site > Import from GitHub
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Add all environment variables
7. Deploy

For Next.js on Netlify, Netlify normally installs the Next runtime automatically.

## Deploy to Vercel
1. Upload this project to GitHub
2. Go to Vercel
3. New Project > Import repo
4. Add environment variables
5. Deploy

## Next phases
- Phase 2: Payments + proof upload + user/registration management
- Phase 3: Free/Premium signals + analytics
- Phase 4: Demo trading simulator + journal + calculators
- Phase 5: CMS + blog + resources + legal pages + SEO
