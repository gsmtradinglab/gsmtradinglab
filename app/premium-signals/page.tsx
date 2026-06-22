import Link from "next/link";

const tiers = [
  ["Free Signals", "Public educational setups for visitors", "Entry zone, SL/TP, risk note, status tracking"],
  ["Member Signals", "For logged-in GSM members", "Detailed setup context, watchlist notes, follow-up status"],
  ["Premium Signals", "For approved premium/course students", "Priority setups, history, psychology note, strict risk rules"],
];

const rules = [
  "Never risk more than 1% on one setup.",
  "Stop loss is mandatory before entry.",
  "Avoid revenge trading after SL hit.",
  "News events can invalidate technical setups.",
  "Signals are educational analysis, not guaranteed profit.",
];

export default function PremiumSignalsPage() {
  return (
    <main className="page-shell">
      <section className="rounded-[2rem] border border-green-400/20 bg-gradient-to-br from-green-400/10 to-slate-950 p-8 md:p-12">
        <span className="badge">Phase 24</span>
        <h1 className="mt-5 max-w-4xl text-4xl font-black md:text-6xl">Premium Signal Center</h1>
        <p className="mt-5 max-w-3xl leading-8 text-slate-300">A clean member-facing signal hub for free, logged-in, and premium educational trading setups with transparent risk notes and no fake profit claims.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/signals" className="btn-green">Open Signals</Link>
          <Link href="/signal-performance" className="btn-dark">View Performance</Link>
        </div>
      </section>

      <section className="mt-10 grid gap-5 md:grid-cols-3">
        {tiers.map(([title, desc, detail]) => (
          <div className="card" key={title}>
            <h2 className="text-2xl font-black">{title}</h2>
            <p className="mt-3 text-slate-400">{desc}</p>
            <p className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-slate-300">{detail}</p>
          </div>
        ))}
      </section>

      <section className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
        <h2 className="text-3xl font-black">Signal Discipline Rules</h2>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {rules.map((rule) => <div className="metric-card" key={rule}>✓ {rule}</div>)}
        </div>
      </section>
    </main>
  );
}
