export const metadata = { title: "Portfolio Tracker | GSM Trading Lab", description: "A clean portfolio tracker UI for crypto, gold, forex and education account monitoring." };

const holdings = [
  ["BTC", "35%", "$3,500", "+8.4%"],
  ["ETH", "22%", "$2,200", "+3.1%"],
  ["USDT", "28%", "$2,800", "0.0%"],
  ["Gold Watch", "15%", "$1,500", "Manual"],
];

export default function PortfolioTrackerPage() {
  return (
    <main className="page-shell">
      <div className="section-head">
        <span className="badge">Portfolio Discipline</span>
        <h1 className="mt-4 section-title">Track capital before chasing profit.</h1>
        <p className="mt-4 text-slate-300">A premium portfolio layout for students to understand allocation, drawdown, exposure, and cash reserve discipline.</p>
      </div>

      <section className="mt-8 grid gap-5 lg:grid-cols-4">
        {[["Total Equity", "$10,000"],["Open Risk", "0.75%"],["Cash Reserve", "28%"],["Max Drawdown", "-3.2%"]].map(([a,b]) => <div className="metric-card" key={a}><p className="text-sm text-slate-400">{a}</p><h2 className="mt-2 text-3xl font-black text-green-300">{b}</h2></div>)}
      </section>

      <section className="mt-8 grid gap-5 lg:grid-cols-[.75fr_1.25fr]">
        <div className="card">
          <h2 className="text-2xl font-black">Allocation</h2>
          <div className="mt-6 aspect-square rounded-full border-[34px] border-green-400/70 bg-slate-950 shadow-[0_0_70px_rgba(34,197,94,.18)] grid place-items-center">
            <div className="text-center"><p className="text-4xl font-black">72%</p><p className="text-sm text-slate-400">Deployed</p></div>
          </div>
        </div>
        <div className="card overflow-x-auto">
          <h2 className="text-2xl font-black">Portfolio Positions</h2>
          <table className="mt-5 w-full min-w-[560px] text-left text-sm">
            <thead className="text-slate-400"><tr><th className="py-3">Asset</th><th>Allocation</th><th>Value</th><th>Performance</th></tr></thead>
            <tbody>
              {holdings.map(([asset, alloc, value, perf]) => <tr className="border-t border-white/10" key={asset}><td className="py-4 font-black">{asset}</td><td>{alloc}</td><td>{value}</td><td className={perf.startsWith("+") ? "text-green-300" : "text-slate-300"}>{perf}</td></tr>)}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-8 card">
        <h2 className="text-2xl font-black">Capital Rules</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {["Never risk more than 1% on one trade", "Keep a cash reserve for volatility", "Reduce size after emotional losses"].map((x) => <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-slate-300" key={x}>{x}</div>)}
        </div>
      </section>
    </main>
  );
}
