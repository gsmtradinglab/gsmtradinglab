"use client";

import Link from "next/link";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useAuth } from "@/lib/auth";
import BrandLogo from "@/components/BrandLogo";

const menuGroups = [
  {
    label: "Markets",
    links: [
      ["Market Dashboard", "/market-dashboard"],
      ["Command Center", "/command-center"],
      ["News Terminal", "/news-terminal"],
      ["Watchlist", "/watchlist"],
      ["Technical Analysis", "/technical-analysis"],
    ],
  },
  {
    label: "Tools",
    links: [
      ["Demo Trading", "/demo-trading"],
      ["Trading Journal", "/journal"],
      ["Portfolio Tracker", "/portfolio-tracker"],
      ["Risk Engine", "/risk-engine"],
      ["Calculators", "/tools"],
    ],
  },
];

function Dropdown({ label, links }: { label: string; links: string[][] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="nav-group" onMouseLeave={() => setOpen(false)}>
      <button className="nav-link" type="button" onClick={() => setOpen((x) => !x)} onMouseEnter={() => setOpen(true)}>
        {label} <span className="text-slate-500">⌄</span>
      </button>
      <div className={`nav-menu ${open ? "nav-menu-open" : ""}`}>
        {links.map(([name, href]) => (
          <Link key={href} href={href} className="nav-item" onClick={() => setOpen(false)}>
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

  const mainLinks = [
    ["Home", "/"],
    ["Courses", "/courses"],
    ["Signals", "/signals"],
    ["Pricing", "/pricing"],
    ["Contact", "/contact"],
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-emerald-400/10 bg-slate-950/86 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <BrandLogo variant="nav" priority />

        <div className="hidden items-center gap-1 lg:flex">
          {mainLinks.map(([label, href]) => <Link key={href} className="nav-link" href={href}>{label}</Link>)}
          {menuGroups.map((group) => <Dropdown key={group.label} label={group.label} links={group.links} />)}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          {user ? (
            <>
              <Link className="btn-dark px-4 py-2" href="/dashboard">Dashboard</Link>
              {isAdmin && <Link className="btn-dark px-4 py-2 border-emerald-400/30" href="/admin">Admin</Link>}
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
        <div className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-white/10 bg-slate-950/98 px-4 py-5 lg:hidden">
          <div className="grid gap-3 sm:grid-cols-2">
            {mainLinks.map(([label, href]) => <Link key={href} onClick={() => setOpen(false)} className="mobile-item" href={href}>{label}</Link>)}
            <Link onClick={() => setOpen(false)} className="mobile-item" href="/market-dashboard">Market Dashboard</Link>
            <Link onClick={() => setOpen(false)} className="mobile-item" href="/demo-trading">Demo Trading</Link>
            <Link onClick={() => setOpen(false)} className="mobile-item" href="/journal">Journal</Link>
            <Link onClick={() => setOpen(false)} className="mobile-item" href="/resources">Resources</Link>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {user ? (
              <>
                <Link onClick={() => setOpen(false)} className="btn-dark" href="/dashboard">Dashboard</Link>
                {isAdmin && <Link onClick={() => setOpen(false)} className="btn-dark" href="/admin">Admin</Link>}
                <button className="btn-green" onClick={() => auth && signOut(auth)}>Logout</button>
              </>
            ) : (
              <>
                <Link onClick={() => setOpen(false)} className="btn-dark" href="/login">Login</Link>
                <Link onClick={() => setOpen(false)} className="btn-green" href="/signup">Join Now</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
