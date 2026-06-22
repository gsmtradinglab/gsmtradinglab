"use client";

import Link from "next/link";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useAuth } from "@/lib/auth";

const tools = [
  { href: "/market-tools", label: "Market Tools" },
  { href: "/signals", label: "Free Signals" },
  { href: "/payments", label: "Payments" },
  { href: "/register", label: "Register Course" }
];

const company = [
  { href: "/about", label: "About" },
  { href: "/founder", label: "Mr. GSM" },
  { href: "/contact", label: "Contact" }
];

function Dropdown({ title, items }: { title: string; items: { href: string; label: string }[] }) {
  return (
    <div className="group relative">
      <button className="nav-link inline-flex items-center gap-1">
        {title}
        <span className="text-[10px] text-emerald-300 transition group-hover:rotate-180">▼</span>
      </button>
      <div className="pointer-events-none absolute left-0 top-9 w-56 translate-y-2 rounded-2xl border border-white/10 bg-slate-950/95 p-2 opacity-0 shadow-2xl shadow-emerald-500/10 backdrop-blur-xl transition group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="block rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-emerald-400/10 hover:text-emerald-300">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Nav() {
  const { user, profile } = useAuth();
  const [open, setOpen] = useState(false);

  const mainLinks = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/signals", label: "Signals" },
    { href: "/market-tools", label: "Tools" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6">
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl border border-emerald-400/30 bg-emerald-400/10 text-lg font-black text-emerald-300 shadow-lg shadow-emerald-500/10">G</span>
          <span className="leading-tight">
            <span className="block text-lg font-black tracking-tight"><span className="text-emerald-400">GSM</span> Trading Lab</span>
            <span className="hidden text-[11px] uppercase tracking-[0.25em] text-slate-500 sm:block">Risk First</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 text-sm font-semibold lg:flex">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/courses" className="nav-link">Courses</Link>
          <Link href="/signals" className="nav-link">Signals</Link>
          <Dropdown title="Tools" items={tools} />
          <Dropdown title="Company" items={company} />
        </div>

        <div className="hidden items-center gap-2 lg:flex">
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

        <button onClick={() => setOpen((v) => !v)} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-bold lg:hidden">
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 py-4 backdrop-blur-xl lg:hidden">
          <div className="grid gap-2">
            {mainLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-slate-200">
                {link.label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              {user ? (
                <>
                  <Link className="btn-dark text-center" href="/dashboard" onClick={() => setOpen(false)}>Dashboard</Link>
                  <button className="btn-green" onClick={() => auth && signOut(auth)}>Logout</button>
                </>
              ) : (
                <>
                  <Link className="btn-dark text-center" href="/login" onClick={() => setOpen(false)}>Login</Link>
                  <Link className="btn-green text-center" href="/signup" onClick={() => setOpen(false)}>Signup</Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
