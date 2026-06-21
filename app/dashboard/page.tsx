"use client";
import Link from "next/link";
import { useAuth } from "@/lib/auth";

export default function Dashboard() {
  const { user, profile, loading } = useAuth();

  if (loading) return <main className="p-8">Loading...</main>;

  if (!user) {
    return <main className="mx-auto max-w-xl px-4 py-14">
      <h1 className="text-3xl font-bold">Please login first</h1>
      <Link className="btn-green mt-6 inline-block" href="/login">Login</Link>
    </main>;
  }

  return <main className="mx-auto max-w-6xl px-4 py-14">
    <h1 className="text-4xl font-black">Welcome, {profile?.fullName}</h1>
    <div className="mt-8 grid gap-5 md:grid-cols-3">
      <div className="card"><b>Course Access</b><p className="mt-2 text-green-300">{profile?.courseAccess}</p></div>
      <div className="card"><b>Payment Status</b><p className="mt-2 text-green-300">{profile?.paymentStatus}</p></div>
      <div className="card"><b>Role</b><p className="mt-2 text-green-300">{profile?.role}</p></div>
    </div>

    <div className="mt-8 grid gap-4 md:grid-cols-6">
      <Link className="btn-dark" href="/register">Register Course</Link>
      <Link className="btn-dark" href="/payments">Payment Proof</Link>
      <Link className="btn-dark" href="/signals">My Signals</Link>
      <Link className="btn-dark" href="/signal-performance">Performance</Link>
      <Link className="btn-dark" href="/market-tools">Market Tools</Link>
      <Link className="btn-dark" href="/tools">Calculators</Link>
      <Link className="btn-dark" href="/demo-trading">Demo Trading</Link>
      <Link className="btn-dark" href="/journal">Journal</Link>
      <Link className="btn-dark" href="/resources">Resources</Link>
      <Link className="btn-dark" href="/market-analysis">Analysis</Link>
      <Link className="btn-dark" href="/notifications">Notifications</Link>
      <Link className="btn-dark" href="/student-progress">Progress</Link>
      <Link className="btn-dark" href="/downloads">Downloads</Link>
      <Link className="btn-dark" href="/certificates">Certificates</Link>
      <Link className="btn-dark" href="/contact">Support</Link>
      <Link className="btn-dark" href="/system-status">System Status</Link>
      <Link className="btn-dark" href="/onboarding">Onboarding</Link>
      <Link className="btn-dark" href="/help-center">Help Center</Link>
    </div>

    {profile?.role !== "user" && <div className="mt-6 flex flex-wrap gap-3">
      <Link className="btn-green inline-block" href="/admin">Open Admin Panel</Link>
      <Link className="btn-dark inline-block" href="/admin/courses">Course CMS</Link>
      <Link className="btn-dark inline-block" href="/admin/market-analysis">Analysis CMS</Link>
      <Link className="btn-dark inline-block" href="/admin/content">Content CMS</Link>
      <Link className="btn-dark inline-block" href="/admin/quick-setup">Admin Setup</Link>
      <Link className="btn-dark inline-block" href="/admin/quality-check">Quality Check</Link>
      <Link className="btn-dark inline-block" href="/admin/user-sop">User SOP</Link>
      <Link className="btn-dark inline-block" href="/admin/payment-sop">Payment SOP</Link>
      <Link className="btn-dark inline-block" href="/admin/signal-sop">Signal SOP</Link>
    </div>}

    <section className="mt-8 grid gap-4 md:grid-cols-3">
      <Link className="card" href="/student-progress"><h3 className="font-bold">Student Progress</h3><p className="mt-2 text-sm text-slate-400">Track learning, demo practice, journal discipline, and risk checklist.</p></Link>
      <Link className="card" href="/downloads"><h3 className="font-bold">Downloads</h3><p className="mt-2 text-sm text-slate-400">Open templates, checklists, and student resources.</p></Link>
      <Link className="card" href="/certificates"><h3 className="font-bold">Certificates</h3><p className="mt-2 text-sm text-slate-400">Read certificate policy and completion requirements.</p></Link>
    </section>

    <p className="mt-10 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-200">Trading involves high risk. GSM Trading Lab provides education, analysis, support, and consultation only. No profit is guaranteed.</p>
  </main>;
}
