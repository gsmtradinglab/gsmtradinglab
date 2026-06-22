import Link from "next/link";

export default function Page() {
  return (
    <main className="page-shell">
      <section className="rounded-[2rem] border border-green-400/20 bg-gradient-to-br from-green-400/10 via-slate-950 to-slate-900 p-8 md:p-12">
        <span className="badge">Phase 26 Admin</span>
        <h1 className="mt-5 max-w-4xl text-4xl font-black md:text-6xl">Admin Badge Manager</h1>
        <p className="mt-5 max-w-3xl leading-8 text-slate-300">Control badge categories, requirements, visibility, and student award status.</p>
        <div className="mt-8 flex flex-wrap gap-3"><a href="/dashboard" className="btn-green">Open Dashboard</a><a href="/contact" className="btn-dark">Get Support</a></div>
      </section>
      <section className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div className="card"><h2 className="text-2xl font-black">Badge library</h2><p className="mt-3 text-slate-400">Create badges for risk, journal, charts, mentorship, and community.</p><p className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-green-300">Badge ops</p></div>
        <div className="card"><h2 className="text-2xl font-black">Award control</h2><p className="mt-3 text-slate-400">Manually award or remove badges when needed.</p><p className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-green-300">Admin control</p></div>
        <div className="card"><h2 className="text-2xl font-black">Student motivation</h2><p className="mt-3 text-slate-400">Use badges to improve retention and completion.</p><p className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-green-300">Engagement</p></div>
      </section>
    </main>
  );
}
