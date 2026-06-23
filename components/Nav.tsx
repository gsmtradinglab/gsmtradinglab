"use client";

import Link from "next/link";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useAuth } from "@/lib/auth";

const marketLinks = [
  ["Market Dashboard", "/market-dashboard"],
  ["Command Center", "/command-center"],
  ["News Terminal", "/news-terminal"],
  ["Watchlist", "/watchlist"],
];

const toolLinks = [
  ["Calculators", "/tools"],
  ["Demo Trading", "/demo-trading"],
  ["Trading Journal", "/journal"],
  ["Risk Engine", "/risk-engine"],
];

function Menu({ label, links }: { label: string; links: string[][] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        className="nav-link"
        aria-expanded={open}
      >
        {label} <span className="text-slate-500">⌄</span>
      </button>
      {open && (
        <div
          onMouseLeave={() => setOpen(false)}
          className="absolute left-0 top-full z-50 mt-3 w-64 rounded-3xl border border-white/10 bg-slate-950/95 p-3 shadow-2xl shadow-black/50 backdrop-blur-2xl"
        >
          {links.map(([name, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-sm font-bold text-slate-300 transition hover:bg-emerald-400/10 hover:text-emerald-300"
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Nav() {
  const { user, profile } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isAdmin = profile?.role && profile.role !== "user";

  async function logout() {
    if (auth) await signOut(auth);
    window.location.href = "/";
  }

  const mobileLinks = [
    ["Home", "/"],
    ["Courses", "/courses"],
    ["Signals", "/signals"],
    ["Pricing", "/pricing"],
    ["Market Dashboard", "/market-dashboard"],
    ["Tools", "/tools"],
    ["Blog", "/blog"],
    ["Contact", "/contact"],
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-emerald-400/30 bg-emerald-400/10 shadow-[0_0_35px_rgba(34,197,94,.18)]">
            <span className="text-xs font-black text-emerald-300">GSM</span>
          </div>
          <div className="leading-tight">
            <p className="text-sm font-black sm:text-base"><span className="text-emerald-400">GSM</span> Trading Lab</p>
            <p className="hidden text-[10px] uppercase tracking-[0.22em] text-slate-500 sm:block">Risk First Trading</p>
          </div>
        </Link>

        <div className="hidden items-center gap-2 lg:flex">
          <Link className="nav-link" href="/">Home</Link>
          <Link className="nav-link" href="/courses">Courses</Link>
          <Link className="nav-link" href="/signals">Signals</Link>
          <Link className="nav-link" href="/pricing">Pricing</Link>
          <Menu label="Markets" links={marketLinks} />
          <Menu label="Tools" links={toolLinks} />
          <Link className="nav-link" href="/contact">Contact</Link>
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          {user ? (
            <>
              <Link className="btn-dark px-5 py-3" href="/dashboard">Dashboard</Link>
              {isAdmin && <Link className="btn-dark px-5 py-3" href="/admin">Admin</Link>}
              <button className="btn-green px-5 py-3" onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <Link className="btn-dark px-5 py-3" href="/login">Login</Link>
              <Link className="btn-green px-5 py-3" href="/signup">Join Now</Link>
            </>
          )}
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-xl lg:hidden"
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-slate-950/98 px-4 py-4 lg:hidden">
          <div className="grid gap-2">
            {mobileLinks.map(([name, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 font-bold text-slate-200"
              >
                {name}
              </Link>
            ))}
            {user ? (
              <>
                <Link onClick={() => setMobileOpen(false)} className="btn-dark text-center" href="/dashboard">Dashboard</Link>
                {isAdmin && <Link onClick={() => setMobileOpen(false)} className="btn-dark text-center" href="/admin">Admin</Link>}
                <button className="btn-green" onClick={logout}>Logout</button>
              </>
            ) : (
              <>
                <Link onClick={() => setMobileOpen(false)} className="btn-dark text-center" href="/login">Login</Link>
                <Link onClick={() => setMobileOpen(false)} className="btn-green text-center" href="/signup">Join Now</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
