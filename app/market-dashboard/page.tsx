const marketCards = [
  ["BTC Dominance", "54.2%", "+0.8%", "Bitcoin strength versus altcoin market."],
  ["Fear & Greed", "72", "Greed", "Risk appetite is elevated; avoid over-leverage."],
  ["Funding Bias", "Mixed", "Neutral", "Monitor crowded long positions before entering."],
  ["High Impact News", "3", "Today", "Check calendar before placing futures trades."],
];

const heatmap = ["BTC +2.4%", "ETH +1.7%", "SOL +4.1%", "BNB -0.3%", "XRP +0.9%", "DOGE -1.2%", "AVAX +3.0%", "LINK +1.1%"];

export const metadata = { title: "Market Dashboard" };

export default function MarketDashboardPage() {
  return (
    <main className="page-shell">
      <section className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/70 p-6 shadow-2xl shadow-black/30 md:p-10">
        <div className="matrix-glow" />
        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <span className="badge">Phase 20 Command Center</span>
            <h1 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">Market Dashboard</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              A premium market intelligence workspace for GSM Trading Lab students: BTC dominance, sentiment, funding bias, watchlists, chart widgets, and news risk reminders in one place.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="btn-green" href="/market-tools">Open TradingView Tools</a>
              <a className="btn-dark" href="/risk-analysis">Run Risk Check</a>
            </div>
          </div>
          <div className="terminal-card animate-float">
            <div className="mb-4 flex items-center justify-between">
              <p className="font-black">BTCUSDT Market Pulse</p>
              <span className="rounded-full bg-green-400/10 px-3 py-1 text-sm font-bold text-green-300">Live Layout</span>
            </div>
            {marketCards.slice(0, 3).map(([label, value, tag]) => (
              <div className="terminal-row mb-3" key={label}>
                <div>
                  <p className="text-sm text-slate-400">{label}</p>
                  <p className="text-2xl font-black">{value}</p>
                </div>
                <span className="rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-xs font-bold text-green-300">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8 soft-grid">
        {marketCards.map(([label, value, tag, note]) => (
          <div className="metric-card" key={label}>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">{label}</p>
            <div className="mt-4 flex items-end justify-between gap-4">
              <p className="text-4xl font-black text-green-300">{value}</p>
              <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-bold text-slate-300">{tag}</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-400">{note}</p>
          </div>
        ))}
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="card">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-black">Market Heatmap</h2>
            <span className="badge">Snapshot</span>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {heatmap.map((coin, index) => (
              <div key={coin} className={`rounded-2xl border p-4 text-center font-black ${index === 3 || index === 5 ? "border-red-400/20 bg-red-400/10 text-red-200" : "border-green-400/20 bg-green-400/10 text-green-200"}`}>{coin}</div>
            ))}
          </div>
        </div>
        <div className="card">
          <h2 className="text-2xl font-black">Economic Calendar Risk</h2>
          <div className="mt-5 space-y-3">
            {["USD CPI / Inflation", "FOMC Rate Statement", "NFP Employment Data", "Fed Chair Speech"].map((event) => (
              <div className="terminal-row" key={event}>
                <span>{event}</span>
                <span className="badge-red">High Impact</span>
              </div>
            ))}
          </div>
          <p className="mt-5 rounded-2xl border border-red-400/20 bg-red-400/10 p-4 text-sm leading-6 text-red-100">Avoid oversized leverage during major news. Protect capital first.</p>
        </div>
      </section>

      <section className="mt-8 card">
        <h2 className="text-2xl font-black">TradingView Chart Workspace</h2>
        <p className="mt-2 text-slate-400">Use this layout as a chart placeholder. Full TradingView widgets are available on Market Tools.</p>
        <div className="mt-5 grid min-h-[420px] place-items-center rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 to-slate-900 p-6 text-center">
          <div>
            <p className="text-5xl font-black text-gradient">BTCUSDT • XAUUSD • DXY</p>
            <p className="mt-4 max-w-2xl text-slate-400">Open the Market Tools page for embedded chart widgets and technical analysis workflow.</p>
            <a className="btn-green mt-6 inline-block" href="/market-tools">Open Market Tools</a>
          </div>
        </div>
      </section>
    </main>
  );
}
