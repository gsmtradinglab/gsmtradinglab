"use client";

import Link from "next/link";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useAuth } from "@/lib/auth";

const menu = [
  {
    label: "Learn",
    links: [
      ["Start Here", "/start-here"],
      ["Courses", "/courses"],
      ["Admissions", "/admissions"],
      ["Membership", "/membership"],
      ["Mentorship", "/mentorship"],
      ["Class Schedule", "/class-schedule"],
      ["Exchange Guide", "/exchange-guide"],
      ["Binance Guide", "/binance-guide"],
      ["Trading Plan", "/trading-plan"],
      ["Resources", "/resources"],
    ],
  },
  {
    label: "Trading",
    links: [
      ["Signals", "/signals"],
      ["Premium Signals", "/premium-signals"],
      ["Signal Lab", "/signal-lab"],
      ["Trade Setups", "/trade-setups"],
      ["Performance", "/signal-performance"],
      ["Market Tools", "/market-tools"],
      ["Market Dashboard", "/market-dashboard"],
      ["Market Terminal", "/market-terminal"],
      ["Command Center", "/command-center"],
      ["Portfolio Tracker", "/portfolio-tracker"],
      ["Journal Analytics Pro", "/journal-analytics-pro"],
      ["Liquidation Heatmap", "/liquidation-heatmap"],
      ["AI Terminal", "/ai-terminal"],
      ["AI Coach", "/ai-coach"],
      ["Risk Engine", "/risk-engine"],
      ["Risk Playbook", "/risk-playbook"],
      ["Watchlist", "/watchlist"],
      ["News Terminal", "/news-terminal"],
      ["Strategy Library", "/strategy-library"],
      ["Calculators", "/tools"],
      ["Demo Trading", "/demo-trading"],
      ["Journal", "/journal"],
      ["Analysis", "/market-analysis"],
      ["Market Summary", "/market-summary"],
      ["Trade Review", "/trade-review"],
      ["Risk Analysis", "/risk-analysis"],
    ],
  },
  {
    label: "Community",
    links: [
      ["Reviews", "/testimonials"],
      ["Referral", "/referral-program"],
      ["Community Rules", "/community"],
      ["Blog", "/blog"],
      ["Glossary", "/glossary"],
      ["Roadmap", "/roadmap"],
      ["Lead Funnel", "/lead-funnel"],
    ],
  },
  {
    label: "Student",
    links: [
      ["Dashboard", "/dashboard"],
      ["Progress", "/student-progress"],
      ["Downloads", "/downloads"],
      ["Certificates", "/certificates"],
      ["Calendar", "/content-calendar"],
      ["Onboarding", "/onboarding"],
      ["Help Center", "/help-center"],
      ["Mobile App", "/mobile-app"],
    ],
  },
];

export default function Nav() {
  const { user, profile } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="group flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl border border-green-400/30 bg-green-400/10 shadow-[0_0_35px_rgba(34,197,94,.2)]">
            <span className="text-sm font-black text-green-300">GSM</span>
          </div>
          <div className="leading-tight">
            <p className="text-base font-black tracking-tight"><span className="text-green-400">GSM</span> Trading Lab</p>
            <p className="hidden text-[11px] uppercase tracking-[0.25em] text-slate-500 sm:block">Risk first trading</p>
          </div>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          <Link className="nav-link" href="/pricing">Pricing</Link>
          {menu.map((item) => (
            <div className="nav-group" key={item.label}>
              <button className="nav-link">{item.label} <span className="text-slate-500">⌄</span></button>
              <div className="nav-menu">
                {item.links.map(([label, href]) => (
                  <Link key={href} href={href} className="nav-item">{label}</Link>
                ))}
              </div>
            </div>
          ))}
          <Link className="nav-link" href="/risk-management">Risk</Link>
          <Link className="nav-link" href="/mobile-app">App</Link>
          <Link className="nav-link" href="/contact">Contact</Link>
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          {user ? (
            <>
              <Link className="btn-dark px-4 py-2" href="/dashboard">Dashboard</Link>
              {profile?.role !== "user" && <><Link className="btn-dark px-4 py-2" href="/admin">Admin</Link><Link className="btn-dark px-4 py-2" href="/admin/analytics-pro">Analytics</Link><Link className="btn-dark px-4 py-2" href="/admin/revenue-hub">Revenue</Link><Link className="btn-dark px-4 py-2" href="/admin/lead-crm">CRM</Link><Link className="btn-dark px-4 py-2" href="/admin/student-success">Students</Link><Link className="btn-dark px-4 py-2" href="/admin/signal-desk">Signal Desk</Link></>}
              <button className="btn-green px-4 py-2" onClick={() => auth && signOut(auth)}>Logout</button>
            </>
          ) : (
            <>
              <Link className="btn-dark px-4 py-2" href="/login">Login</Link>
              <Link className="btn-green px-4 py-2" href="/signup">Join Now</Link>
            </>
          )}
        </div>

        <button onClick={() => setOpen(!open)} className="btn-dark px-3 py-2 lg:hidden" aria-label="Open menu">
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 py-5 lg:hidden">
          <div className="grid gap-4 sm:grid-cols-2">
            <Link className="mobile-item" href="/pricing">Pricing</Link>
            <Link className="mobile-item" href="/risk-management">Risk Management</Link>
            {menu.map((item) => (
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4" key={item.label}>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-green-300">{item.label}</p>
                <div className="grid gap-2">
                  {item.links.map(([label, href]) => <Link className="mobile-sub" key={href} href={href}>{label}</Link>)}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {user ? <><Link className="btn-dark" href="/dashboard">Dashboard</Link><button className="btn-green" onClick={() => auth && signOut(auth)}>Logout</button></> : <><Link className="btn-dark" href="/login">Login</Link><Link className="btn-green" href="/signup">Signup</Link></>}
          </div>
        </div>
      )}
    </nav>
  );
}
