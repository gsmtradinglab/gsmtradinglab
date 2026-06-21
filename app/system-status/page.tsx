"use client";

import Link from "next/link";
import { auth, db, firebaseConfigured, storage } from "@/lib/firebase";
import { useAuth } from "@/lib/auth";

export default function SystemStatusPage() {
  const { user, profile, loading } = useAuth();
  const checks = [
    { name: "Firebase environment variables", ok: firebaseConfigured, note: firebaseConfigured ? "Detected" : "Missing NEXT_PUBLIC_FIREBASE_* variables" },
    { name: "Firebase Auth client", ok: Boolean(auth), note: auth ? "Ready" : "Not initialized" },
    { name: "Firestore client", ok: Boolean(db), note: db ? "Ready" : "Not initialized" },
    { name: "Firebase Storage client", ok: Boolean(storage), note: storage ? "Ready" : "Not initialized" },
    { name: "Current user session", ok: Boolean(user), note: user ? user.email || "Logged in" : "Not logged in" },
    { name: "Firestore profile", ok: Boolean(profile), note: profile ? `${profile.role || "user"} / ${profile.courseAccess || "none"}` : loading ? "Loading" : "No profile loaded" },
  ];

  return (
    <main className="mx-auto max-w-5xl px-4 py-14">
      <h1 className="text-4xl font-black">System Status</h1>
      <p className="mt-3 text-slate-300">Use this page after every deployment to quickly confirm Firebase, login, profile loading, and admin access.</p>
      <div className="mt-8 grid gap-4">
        {checks.map((c) => (
          <div key={c.name} className="card flex flex-wrap items-center justify-between gap-3">
            <div><b>{c.name}</b><p className="text-sm text-slate-400">{c.note}</p></div>
            <span className={c.ok ? "rounded-full bg-green-500/15 px-3 py-1 text-sm text-green-300" : "rounded-full bg-red-500/15 px-3 py-1 text-sm text-red-300"}>{c.ok ? "OK" : "Check"}</span>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link className="btn-green" href="/dashboard">Dashboard</Link>
        <Link className="btn-dark" href="/admin">Admin Panel</Link>
        <Link className="btn-dark" href="/launch-checklist">Launch Checklist</Link>
      </div>
      <p className="mt-8 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-100">Never expose private Firebase Admin credentials in the browser. Only NEXT_PUBLIC Firebase web config belongs in Vercel public env variables.</p>
    </main>
  );
}
