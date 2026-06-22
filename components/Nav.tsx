"use client";

import Link from "next/link";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useAuth } from "@/lib/auth";

const menus = [
  {
    label: "Learn",
    links: [
      ["Start Here", "/start-here"],
      ["Courses", "/courses"],
      ["Pricing", "/pricing"],
      ["Mentorship", "/mentorship"],
      ["Class Schedule", "/class-schedule"],
      ["Resources", "/resources"],
      ["Trading Plan", "/trading-plan"],
      ["Risk Playbook", "/risk-playbook"],
    ],
  },
  {
    label: "Markets",
    links: [
      ["Signals", "/signals"],
      ["Premium Signals", "/premium-signals"],
      ["Performance", "/signal-performance"],
      ["Market Dashboard", "/market-dashboard"],
      ["Command Center", "/command-center"],
      ["Market Tools", "/market-tools"],
      ["News Terminal", "/news-terminal"],
      ["Watchlist", "/watchlist"],
      ["TradingView Charts", "/technical-analysis"],
    ],
  },
  {
    label: "Practice",
    links: [
      ["Demo Trading", "/demo-trading"],
      ["Journal", "/journal"],
      ["Journal Analytics", "/journal-analytics-pro"],
      ["Portfolio Tracker", "/portfolio-tracker"],
      ["Risk Engine", "/risk-engine"],
      ["Tools & Calculators", "/tools"],
      ["AI Coach", "/ai-coach"],
      ["AI Terminal", "/ai-terminal"],
    ],
  },
  {
    label: "Community",
    links: [
      ["Blog", "/blog"],
      ["Reviews", "/testimonials"],
      ["Referral", "/referral-program"],
      ["Webinars", "/webinars"],
      ["Leaderboard", "/leaderboard"],
      ["Challenges", "/trading-challenges"],
      ["Glossary", "/glossary"],
      ["Help Center", "/help-center"],
    ],
  },
];

const studentLinks = [
  ["Dashboard", "/dashboard"],
  ["Progress", "/student-progress"],
  ["Downloads", "/downloads"],
  ["Certificates", "/certificates"],
  ["Mobile App", "/mobile-app"],
  ["Onboarding", "/onboarding"],
];

const adminLinks = [
  ["Admin Home", "/admin"],
  ["Signal Desk", "/admin/signal-desk"],
  ["Users", "/admin/user-sop"],
  ["Payments", "/admin/payment-sop"],
  ["CRM", "/admin/lead-crm"],
  ["Revenue", "/admin/revenue-hub"],
  ["Analytics", "/admin/analytics-pro"],
  ["Content Queue", "/admin/content-queue"],
];

function Dropdown({ label, links }: { label: string; links: string[][] }) {
  return (
    <div className="nav-group">
      <button className="nav-link" type="button">
        {label} <span className="text-slate-500">⌄</span>
      </button>
      <div className="nav-menu grid-cols-1 lg:grid-cols-2">
        {links.map(([name, href]) => (
          <Link key={href} href={href} className="nav-item">
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Nav() {
  const { user, profile } = useAuth();
  const [open, setOpen] = useState(false);
  const isAdmin = profile?.role && profile.role !== "user";

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/82 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="group flex min-w-0 items-center gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-green-400/30 bg-green-400/10 shadow-[0_0_35px_rgba(34,197,94,.18)]">
            <span className="text-xs font-black text-green-300">GSM</span>
          </div>
          <div className="min-w-0 leading-tight">
            <p className="truncate text-sm font-black tracking-tight sm:text-base"><span className="text-green-400">GSM</span> Trading Lab</p>
            <p className="hidden text-[10px] uppercase tracking-[0.22em] text-slate-500 sm:block">Risk first trading</p>
          </div>
        </Link>

        <div className="hidden items-center gap-1 xl:flex">
          <Link className="nav-link" href="/">Home</Link>
          {menus.map((item) => <Dropdown key={item.label} label={item.label} links={item.links} />)}
          {user && <Dropdown label="Student" links={studentLinks} />}
          {isAdmin && <Dropdown label="Admin" links={adminLinks} />}
          <Link className="nav-link" href="/contact">Contact</Link>
        </div>

        <div className="hidden items-center gap-2 xl:flex">
          {user ? (
            <>
              <Link className="btn-dark px-4 py-2" href="/dashboard">Dashboard</Link>
              <button className="btn-green px-4 py-2" onClick={() => auth && signOut(auth)}>Logout</button>
            </>
          ) : (
            <>
              <Link className="btn-dark px-4 py-2" href="/login">Login</Link>
              <Link className="btn-green px-4 py-2" href="/signup">Join Now</Link>
            </>
          )}
        </div>

        <button onClick={() => setOpen(!open)} className="btn-dark px-3 py-2 xl:hidden" aria-label="Open menu">
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-white/10 bg-slate-950/97 px-4 py-5 xl:hidden">
          <div className="grid gap-4 md:grid-cols-2">
            <Link className="mobile-item" href="/">Home</Link>
            <Link className="mobile-item" href="/pricing">Pricing</Link>
            <Link className="mobile-item" href="/signals">Signals</Link>
            <Link className="mobile-item" href="/market-dashboard">Market Dashboard</Link>
            {menus.map((item) => (
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4" key={item.label}>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-green-300">{item.label}</p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {item.links.map(([label, href]) => <Link onClick={() => setOpen(false)} className="mobile-sub" key={href} href={href}>{label}</Link>)}
                </div>
              </div>
            ))}
            {user && (
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-green-300">Student</p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {studentLinks.map(([label, href]) => <Link onClick={() => setOpen(false)} className="mobile-sub" key={href} href={href}>{label}</Link>)}
                </div>
              </div>
            )}
            {isAdmin && (
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-amber-300">Admin</p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {adminLinks.map(([label, href]) => <Link onClick={() => setOpen(false)} className="mobile-sub" key={href} href={href}>{label}</Link>)}
                </div>
              </div>
            )}
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {user ? <><Link className="btn-dark" href="/dashboard">Dashboard</Link><button className="btn-green" onClick={() => auth && signOut(auth)}>Logout</button></> : <><Link className="btn-dark" href="/login">Login</Link><Link className="btn-green" href="/signup">Signup</Link></>}
          </div>
        </div>
      )}
    </nav>
  );
}
