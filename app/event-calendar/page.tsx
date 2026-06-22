import Link from "next/link";

export default function Page() {
  return (
    <main className="page-shell">
      <section className="rounded-[2rem] border border-green-400/20 bg-gradient-to-br from-green-400/10 via-slate-950 to-slate-900 p-8 md:p-12">
        <span className="badge">Phase 26</span>
        <h1 className="mt-5 max-w-4xl text-4xl font-black md:text-6xl">Event Calendar</h1>
        <p className="mt-5 max-w-3xl leading-8 text-slate-300">A calendar-style planning page for webinars, classes, live analysis, and community sessions.</p>
        <div className="mt-8 flex flex-wrap gap-3"><a href="/dashboard" className="btn-green">Open Dashboard</a><a href="/contact" className="btn-dark">Get Support</a></div>
      </section>
      <section className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div className="card"><h2 className="text-2xl font-black">Weekly classes</h2><p className="mt-3 text-slate-400">Plan recurring beginner and premium training sessions.</p><p className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-green-300">Schedule</p></div>
        <div className="card"><h2 className="text-2xl font-black">Market reviews</h2><p className="mt-3 text-slate-400">Live market breakdown sessions for BTC, ETH, Gold, and DXY.</p><p className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-green-300">Analysis</p></div>
        <div className="card"><h2 className="text-2xl font-black">Community events</h2><p className="mt-3 text-slate-400">Q&A, challenges, reviews, and milestone events.</p><p className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-green-300">Engagement</p></div>
      </section>
    </main>
  );
}
