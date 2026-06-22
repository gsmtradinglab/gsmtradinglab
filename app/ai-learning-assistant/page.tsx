import Link from "next/link";

export default function Page() {
  return (
    <main className="page-shell">
      <section className="rounded-[2rem] border border-green-400/20 bg-gradient-to-br from-green-400/10 via-slate-950 to-slate-900 p-8 md:p-12">
        <span className="badge">Phase 26</span>
        <h1 className="mt-5 max-w-4xl text-4xl font-black md:text-6xl">AI Learning Assistant</h1>
        <p className="mt-5 max-w-3xl leading-8 text-slate-300">A guided learning interface for students to understand trading concepts, risk rules, journaling mistakes, and market structure in a safer education-first way.</p>
        <div className="mt-8 flex flex-wrap gap-3"><a href="/dashboard" className="btn-green">Open Dashboard</a><a href="/contact" className="btn-dark">Get Support</a></div>
      </section>
      <section className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div className="card"><h2 className="text-2xl font-black">Ask learning questions</h2><p className="mt-3 text-slate-400">Students can ask about technical analysis, risk management, futures basics, and trading psychology.</p><p className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-green-300">Education-only assistant</p></div>
        <div className="card"><h2 className="text-2xl font-black">Trade checklist guidance</h2><p className="mt-3 text-slate-400">The assistant reminds students to check entry, SL, risk %, invalidation, and news risk.</p><p className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-green-300">Risk-first flow</p></div>
        <div className="card"><h2 className="text-2xl font-black">Beginner explanations</h2><p className="mt-3 text-slate-400">Complex market terms are explained in simple language for new traders.</p><p className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-green-300">Beginner friendly</p></div>
        <div className="card"><h2 className="text-2xl font-black">No profit guarantees</h2><p className="mt-3 text-slate-400">The assistant must avoid guaranteed profit, recovery, or fixed-return language.</p><p className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-green-300">Compliance safe</p></div>
      </section>
    </main>
  );
}
