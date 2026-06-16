# GSM Trading Lab Full-Stack Website

Production-style starter for GSM Trading Lab based on your final prompt. Includes Next.js, Firebase Auth, Firestore, Storage, admin panel, user dashboard, course registration, manual payments, signals, signal performance, demo simulator, journal, calculators, resources, support, investment inquiry, market tools, security rules, and deployment notes.

## Setup
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Firebase
Enable Authentication (Email/Password + Google), Firestore, and Storage. Paste `firebase/firestore.rules` and `firebase/storage.rules` into Firebase Console.

## First Super Admin
For production use Firebase Custom Claims / server script. For quick dev: signup with `gsmtradinglab@gmail.com`, open Firestore `users/{uid}` and set `role` to `superAdmin` and `permissions` to `["*"]`.

## Deploy
Push to GitHub, import into Vercel/Netlify, add environment variables, deploy, then connect `gsmtradinglab.com`.

## Risk
No guaranteed profit, fixed return, loss recovery, or fake stats are implemented. All signal stats are calculated from Firestore signal records.
