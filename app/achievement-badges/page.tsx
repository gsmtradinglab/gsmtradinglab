import Link from "next/link";

export default function Page() {
  return (
    <main className="page-shell">
      <section className="rounded-[2rem] border border-green-400/20 bg-gradient-to-br from-green-400/10 via-slate-950 to-slate-900 p-8 md:p-12">
        <span className="badge">Phase 26</span>
        <h1 className="mt-5 max-w-4xl text-4xl font-black md:text-6xl">Achievement Badges</h1>
        <p className="mt-5 max-w-3xl leading-8 text-slate-300">A student motivation layer for progress, discipline, learning milestones, and community participation.</p>
        <div className="mt-8 flex flex-wrap gap-3"><a href="/dashboard" className="btn-green">Open Dashboard</a><a href="/contact" className="btn-dark">Get Support</a></div>
      </section>
      <section className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div className="card"><h2 className="text-2xl font-black">Risk Manager badge</h2><p className="mt-3 text-slate-400">Awarded for following stop loss and risk rules.</p><p className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-green-300">Discipline</p></div>
        <div className="card"><h2 className="text-2xl font-black">Journal Streak badge</h2><p className="mt-3 text-slate-400">Awarded for consistent trading journal entries.</p><p className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-green-300">Habit builder</p></div>
        <div className="card"><h2 className="text-2xl font-black">Chart Analyst badge</h2><p className="mt-3 text-slate-400">Awarded for completing chart practice tasks.</p><p className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-green-300">Learning milestone</p></div>
        <div className="card"><h2 className="text-2xl font-black">Mentorship badge</h2><p className="mt-3 text-slate-400">Awarded after completing guided learning sessions.</p><p className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-green-300">Premium student</p></div>
      </section>
    </main>
  );
}
