"use client";

import Link from "next/link";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useAuth } from "@/lib/auth";

const groups = [
  {
    label: "Learn",
    items: [
      ["Start Here", "/start-here"],
      ["Courses", "/courses"],
      ["Admissions", "/admissions"],
      ["Mentorship", "/mentorship"],
      ["Class Schedule", "/class-schedule"],
      ["Resources", "/resources"],
    ],
  },
  {
    label: "Trading",
    items: [
      ["Signals", "/signals"],
      ["Performance", "/signal-performance"],
      ["Market Tools", "/market-tools"],
      ["Calculators", "/tools"],
      ["Demo Trading", "/demo-trading"],
      ["Journal", "/journal"],
      ["Market Analysis", "/market-analysis"],
    ],
  },
  {
    label: "Community",
    items: [
      ["Reviews", "/testimonials"],
      ["Referral", "/referral-program"],
      ["Community Rules", "/community"],
      ["Blog", "/blog"],
      ["Glossary", "/glossary"],
      ["Roadmap", "/roadmap"],
    ],
  },
  {
    label: "Student",
    items: [
      ["Progress", "/student-progress"],
      ["Downloads", "/downloads"],
      ["Certificates", "/certificates"],
      ["Onboarding", "/onboarding"],
      ["Notifications", "/notifications"],
      ["Profile", "/profile"],
    ],
  },
  {
    label: "Company",
    items: [
      ["Pricing", "/pricing"],
      ["About", "/about"],
      ["Founder", "/founder"],
      ["FAQ", "/faq"],
      ["Status", "/system-status"],
      ["Help Center", "/help-center"],
      ["Contact", "/contact"],
    ],
  },
];

function Dropdown({ label, items }: { label: string; items: string[][] }) {
  return (
    <div className="group relative">
      <button className="nav-pill">{label}</button>
      <div className="pointer-events-none absolute left-0 top-full z-50 mt-3 w-64 translate-y-2 rounded-2xl border border-emerald-400/20 bg-slate-950/95 p-3 opacity-0 shadow-2xl shadow-emerald-950/30 backdrop-blur-xl transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
        <div className="grid gap-1">
          {items.map(([name, href]) => (
            <Link key={href} href={href} className="rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-emerald-400/10 hover:text-emerald-300">
              {name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Nav() {
  const { user, profile } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-400 text-lg font-black text-slate-950 shadow-lg shadow-emerald-500/20">G</span>
          <span className="leading-tight">
            <span className="block text-lg font-black tracking-tight"><span className="text-emerald-400">GSM</span> Trading Lab</span>
            <span className="hidden text-xs text-slate-400 sm:block">Risk-first crypto education</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          <Link href="/" className="nav-pill">Home</Link>
          {groups.map((g) => <Dropdown key={g.label} label={g.label} items={g.items} />)}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          {user ? (
            <>
              <Link className="btn-dark px-4 py-2" href="/dashboard">Dashboard</Link>
              {profile?.role !== "user" && <Link className="btn-dark px-4 py-2" href="/admin">Admin</Link>}
              <button className="btn-green px-4 py-2" onClick={() => auth && signOut(auth)}>Logout</button>
            </>
          ) : (
            <>
              <Link className="btn-dark px-4 py-2" href="/login">Login</Link>
              <Link className="btn-green px-4 py-2" href="/signup">Signup</Link>
            </>
          )}
        </div>

        <button onClick={() => setOpen((v) => !v)} className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 lg:hidden" aria-label="Open menu">
          <span className="text-2xl">☰</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2">
            {groups.map((g) => (
              <div key={g.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                <div className="mb-2 text-sm font-bold text-emerald-300">{g.label}</div>
                <div className="grid grid-cols-2 gap-1">
                  {g.items.map(([name, href]) => (
                    <Link onClick={() => setOpen(false)} key={href} href={href} className="rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/10">{name}</Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="flex gap-2 sm:col-span-2">
              {user ? <><Link className="btn-dark flex-1 text-center" href="/dashboard">Dashboard</Link><button className="btn-green flex-1" onClick={() => auth && signOut(auth)}>Logout</button></> : <><Link className="btn-dark flex-1 text-center" href="/login">Login</Link><Link className="btn-green flex-1 text-center" href="/signup">Signup</Link></>}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
