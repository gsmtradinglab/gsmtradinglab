export const metadata = { title: "Daily Market Summary" };

export default function MarketSummaryPage() {
  const points = ["BTC is treated as the primary risk sentiment gauge.", "Gold and DXY should be checked before crypto leverage trades.", "High-impact USD news can invalidate intraday setups.", "Wait for confirmation instead of chasing candles."];
  return (
    <main className="page-shell">
      <span className="badge">Daily Prep</span>
      <h1 className="section-title mt-5">Daily Market Summary</h1>
      <div className="mt-8 grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
        <div className="card">
          <h2 className="text-2xl font-black">Market Bias Checklist</h2>
          <div className="mt-5 space-y-3">
            {points.map((p) => <div key={p} className="terminal-row"><span>{p}</span><span className="text-green-300">✓</span></div>)}
          </div>
        </div>
        <div className="terminal-card">
          <h2 className="text-2xl font-black">Copy-ready Educational Summary</h2>
          <p className="mt-5 leading-8 text-slate-300">Market is risk-sensitive today. Focus on clean levels, avoid emotional entries, and wait for confirmation near liquidity zones. If major news is scheduled, reduce size or stay out. No setup is worth damaging capital.</p>
          <div className="mt-5 rounded-2xl border border-green-400/20 bg-green-400/10 p-4 text-green-100">Risk first. Profit later.</div>
        </div>
      </div>
    </main>
  );
}
