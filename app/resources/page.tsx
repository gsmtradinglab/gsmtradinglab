import Link from "next/link";

const resources = [
  { title: "Beginner Crypto Trading Guide", access: "Public", body: "Learn what crypto trading is, how exchanges work, and why risk management matters before real trading." },
  { title: "Technical Analysis Basics", access: "Public", body: "Support, resistance, trendlines, candlesticks, market structure, and basic confirmation rules." },
  { title: "Risk Management Checklist", access: "Public", body: "Use stop loss, avoid over-leverage, risk max 1% per trade, and do not trade revenge setups." },
  { title: "Signal Usage Guide", access: "Members", body: "How to read entries, stop loss, take profits, risk level, and timeframe before using any educational signal." },
  { title: "Futures Trading Notes", access: "Premium", body: "Margin, liquidation, leverage, funding, stop-loss discipline, and position sizing for futures markets." },
  { title: "Trading Psychology", access: "Public", body: "Control greed, fear, revenge trading, overconfidence, and emotional decision-making." }
];

export default function ResourcesPage() {
  return <main className="mx-auto max-w-6xl px-4 py-14">
    <h1 className="text-4xl font-black">Learning Resources</h1>
    <p className="mt-3 text-slate-300">Educational notes for beginners and premium students. More PDFs/videos can be added from future CMS phase.</p>
    <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {resources.map((r) => <article className="card" key={r.title}>
        <span className="rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs text-green-300">{r.access}</span>
        <h2 className="mt-4 text-xl font-bold">{r.title}</h2>
        <p className="mt-3 text-sm text-slate-300">{r.body}</p>
      </article>)}
    </div>
    <div className="card mt-8">
      <h2 className="text-2xl font-bold">Practice First</h2>
      <p className="mt-3 text-slate-300">Before using real capital, use the simulator and journal to build discipline.</p>
      <div className="mt-5 flex flex-wrap gap-3"><Link className="btn-green" href="/demo-trading">Open Demo Simulator</Link><Link className="btn-dark" href="/journal">Open Journal</Link><Link className="btn-dark" href="/tools">Open Calculators</Link></div>
    </div>
  </main>;
}
