import Link from "next/link";

const watch = [
  ["BTCUSDT", "Crypto", "Trend watch", "Wait for clean confirmation before entry."],
  ["ETHUSDT", "Crypto", "Structure", "Track liquidity sweep and reclaim zones."],
  ["XAUUSD", "Gold", "High impact", "Avoid blind entries during news volatility."],
  ["DXY", "Macro", "Risk filter", "Use dollar strength as market context."],
];

export default function MarketTerminalPage() {
  return (
    <main className="page-shell">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
        <div>
          <span className="badge">GSM Terminal</span>
          <h1 className="section-title mt-4">Market Command Center</h1>
          <p className="mt-4 max-w-3xl text-slate-300">A clean daily operating screen for market awareness, watchlists, risk filters, and trading discipline. This page is educational and does not provide guaranteed trade outcomes.</p>
        </div>
        <Link className="btn-green" href="/market-tools">Open Live Charts</Link>
      </div>

      <section className="grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
        <div className="card overflow-hidden">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-black">Priority Watchlist</h2>
            <span className="rounded-full bg-green-400/10 px-3 py-1 text-xs font-black text-green-300">Education Mode</span>
          </div>
          <div className="grid gap-3">
            {watch.map(([symbol, market, tag, note]) => (
              <div key={symbol} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-green-400/30 hover:bg-green-400/5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xl font-black">{symbol}</p>
                    <p className="text-sm text-slate-400">{market}</p>
                  </div>
                  <span className="badge">{tag}</span>
                </div>
                <p className="mt-4 text-slate-300">{note}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="grid gap-5">
          <div className="metric-card">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-300">Risk Filter</p>
            <h3 className="mt-3 text-3xl font-black">No SL = No Trade</h3>
            <p className="mt-3 text-slate-400">Every setup must include invalidation, risk size, and journal note before execution.</p>
          </div>
          <div className="metric-card">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-300">News Warning</p>
            <h3 className="mt-3 text-3xl font-black">Avoid Major News</h3>
            <p className="mt-3 text-slate-400">High impact news can create spreads, slippage, and fake breakouts.</p>
          </div>
        </aside>
      </section>
    </main>
  );
}
