"use client";
import Link from "next/link";
import { useAuth } from "@/lib/auth";

const mainLinks = [
  ["Register Course", "/register", "Start online, physical, one-to-one, or batch learning."],
  ["My Signals", "/signals", "View public, member, and premium educational signals."],
  ["Demo Trading", "/demo-trading", "Practice with a virtual account before risking money."],
  ["Trading Journal", "/journal", "Record trades, emotions, mistakes, and lessons."],
  ["Market Tools", "/market-tools", "Open charts, market widgets, and analysis tools."],
  ["Calculators", "/tools", "Position size, PnL, risk/reward, and compounding tools."],
  ["Resources", "/resources", "Guides, templates, checklists, and learning material."],
  ["Payments", "/payments", "Upload proof and track payment approval."],
];

const studentLinks = [
  ["Progress", "/student-progress"], ["Downloads", "/downloads"], ["Certificates", "/certificates"], ["Schedule", "/class-schedule"], ["Notifications", "/notifications"], ["Help", "/help-center"]
];

export default function Dashboard() {
  const { user, profile, loading } = useAuth();

  if (loading) return <main className="page-shell">Loading...</main>;

  if (!user) {
    return <main className="mx-auto max-w-xl px-4 py-14">
      <h1 className="text-3xl font-bold">Please login first</h1>
      <Link className="btn-green mt-6 inline-block" href="/login">Login</Link>
    </main>;
  }

  const isAdmin = profile?.role !== "user";

  return (
    <main className="page-shell">
      <section className="grid gap-8 lg:grid-cols-[280px_1fr]">
        <aside className="glass sticky top-24 h-fit rounded-[2rem] p-5">
          <div className="rounded-3xl bg-gradient-to-br from-green-400/20 to-sky-400/10 p-5">
            <p className="text-xs uppercase tracking-[0.25em] text-green-300">Student Portal</p>
            <h2 className="mt-2 text-2xl font-black">{profile?.fullName || "Trader"}</h2>
            <p className="mt-2 text-sm text-slate-300">{profile?.email}</p>
          </div>
          <div className="mt-5 grid gap-2">
            {studentLinks.map(([label, href]) => <Link className="rounded-2xl px-4 py-3 text-sm font-bold text-slate-300 transition hover:bg-white/[0.06] hover:text-green-300" href={href} key={href}>{label}</Link>)}
            {isAdmin && <Link className="btn-green mt-3 text-center" href="/admin">Open Admin</Link>}
          </div>
        </aside>

        <section>
          <div className="mb-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-950/80 p-7 shadow-2xl shadow-black/25">
            <p className="badge mb-4 inline-flex">Risk first dashboard</p>
            <h1 className="text-4xl font-black md:text-5xl">Welcome back, {profile?.fullName}</h1>
            <p className="mt-3 max-w-3xl text-slate-400">Track learning access, manage your course journey, practice demo trading, and keep your risk discipline clean.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="metric-card"><p className="text-sm text-slate-400">Course Access</p><p className="mt-2 text-3xl font-black text-green-300">{profile?.courseAccess || "none"}</p></div>
            <div className="metric-card"><p className="text-sm text-slate-400">Payment Status</p><p className="mt-2 text-3xl font-black text-green-300">{profile?.paymentStatus || "none"}</p></div>
            <div className="metric-card"><p className="text-sm text-slate-400">Role</p><p className="mt-2 text-3xl font-black text-green-300">{profile?.role || "user"}</p></div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {mainLinks.map(([title, href, desc]) => (
              <Link href={href} className="card group" key={href}>
                <div className="mb-4 h-10 w-10 rounded-2xl bg-green-400/10 ring-1 ring-green-400/20 transition group-hover:bg-green-400/20" />
                <h3 className="text-lg font-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{desc}</p>
              </Link>
            ))}
          </div>

          {isAdmin && <div className="mt-8 rounded-[2rem] border border-green-400/20 bg-green-400/10 p-6">
            <h3 className="text-2xl font-black text-green-200">Admin Shortcuts</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link className="btn-dark" href="/admin/courses">Course CMS</Link>
              <Link className="btn-dark" href="/admin/market-analysis">Analysis CMS</Link>
              <Link className="btn-dark" href="/admin/content">Content CMS</Link>
              <Link className="btn-dark" href="/admin/quick-setup">Admin Setup</Link>
              <Link className="btn-dark" href="/admin/quality-check">Quality Check</Link>
            </div>
          </div>}

          <p className="mt-8 rounded-3xl border border-red-400/20 bg-red-400/10 p-5 leading-7 text-red-100">Trading involves high risk. GSM Trading Lab provides education, analysis, support, and consultation only. No profit is guaranteed.</p>
        </section>
      </section>
    </main>
  );
}
