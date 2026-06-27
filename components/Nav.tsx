"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useAuth } from "@/lib/auth";

const marketLinks = [
  ["Signals", "/signals"],
  ["Market Dashboard", "/market-dashboard"],
  ["Command Center", "/command-center"],
  ["News Terminal", "/news-terminal"],
  ["Technical Analysis", "/technical-analysis"],
];

const toolLinks = [
  ["Demo Trading", "/demo-trading"],
  ["Trading Journal", "/journal"],
  ["Risk Calculator", "/tools"],
  ["Portfolio", "/portfolio-tracker"],
  ["AI Terminal", "/ai-terminal"],
];

function Dropdown({ label, links }: { label: string; links: string[][] }) {
  return (
    <div className="nav-group">
      <button type="button" className="nav-link nav-drop-trigger">
        {label} <span>⌄</span>
      </button>
      <div className="nav-menu">
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
  const isAdmin = profile?.role === "admin" || profile?.role === "superAdmin";

  return (
    <nav className="enterprise-nav">
      <div className="enterprise-nav-inner">
        <Link href="/" className="brand-lockup" aria-label="GSM Trading Lab home">
          <Image src="/gsm-logo-dark.png" alt="GSM Trading Lab" width={52} height={52} className="brand-logo" priority />
          <div className="brand-copy">
            <strong>GSM Trading Lab</strong>
            <span>Knowledge first • Discipline always</span>
          </div>
        </Link>

        <div className="desktop-nav">
          <Link className="nav-link" href="/">Home</Link>
          <Link className="nav-link" href="/courses">Courses</Link>
          <Link className="nav-link" href="/pricing">Pricing</Link>
          <Dropdown label="Markets" links={marketLinks} />
          <Dropdown label="Tools" links={toolLinks} />
          <Link className="nav-link" href="/contact">Contact</Link>
        </div>

        <div className="desktop-actions">
          {user ? (
            <>
              <Link href="/dashboard" className="btn-dark px-4 py-2">Dashboard</Link>
              {isAdmin && <Link href="/admin" className="btn-dark px-4 py-2">Admin</Link>}
              <button className="btn-green px-4 py-2" onClick={() => auth && signOut(auth)}>Logout</button>
            </>
          ) : (
            <>
              <Link href="/login" className="btn-dark px-4 py-2">Login</Link>
              <Link href="/signup" className="btn-green px-4 py-2">Join Now</Link>
            </>
          )}
        </div>

        <button className="mobile-menu-button" onClick={() => setOpen((v) => !v)} aria-label="Open menu">
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="mobile-nav-panel">
          <Link onClick={() => setOpen(false)} href="/" className="mobile-item">Home</Link>
          <Link onClick={() => setOpen(false)} href="/courses" className="mobile-item">Courses</Link>
          <Link onClick={() => setOpen(false)} href="/signals" className="mobile-item">Signals</Link>
          <Link onClick={() => setOpen(false)} href="/pricing" className="mobile-item">Pricing</Link>
          <Link onClick={() => setOpen(false)} href="/market-dashboard" className="mobile-item">Markets</Link>
          <Link onClick={() => setOpen(false)} href="/tools" className="mobile-item">Tools</Link>
          <Link onClick={() => setOpen(false)} href="/contact" className="mobile-item">Contact</Link>
          {user ? (
            <>
              <Link onClick={() => setOpen(false)} href="/dashboard" className="mobile-item">Dashboard</Link>
              {isAdmin && <Link onClick={() => setOpen(false)} href="/admin" className="mobile-item">Admin</Link>}
              <button className="btn-green w-full" onClick={() => auth && signOut(auth)}>Logout</button>
            </>
          ) : (
            <>
              <Link onClick={() => setOpen(false)} href="/login" className="btn-dark text-center">Login</Link>
              <Link onClick={() => setOpen(false)} href="/signup" className="btn-green text-center">Join Now</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
