export const metadata = { title: "Liquidation Heatmap | GSM Trading Lab", description: "Educational liquidation heatmap layout for market awareness and risk management." };

export default function LiquidationHeatmapPage() {
  return (
    <main className="page-shell">
      <span className="badge-red">High Risk Area</span>
      <h1 className="mt-4 section-title">Liquidation heatmap awareness.</h1>
      <p className="mt-4 max-w-3xl text-slate-300">A visual training page to understand where crowded leverage may be trapped. This is educational only and should not be used as guaranteed trade direction.</p>
      <section className="mt-8 card">
        <div className="grid h-[420px] grid-cols-12 gap-2 rounded-3xl border border-white/10 bg-slate-950 p-4">
          {Array.from({length: 96}).map((_, i) => {
            const hot = i % 13 === 0 || i % 17 === 0;
            const mid = i % 7 === 0;
            return <div key={i} className={`rounded-xl ${hot ? "bg-red-400/70 shadow-[0_0_22px_rgba(248,113,113,.35)]" : mid ? "bg-yellow-300/45" : "bg-green-400/15"}`} />;
          })}
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-red-400/10 p-4 text-red-200">Red zones = crowded liquidation clusters</div>
          <div className="rounded-2xl bg-yellow-300/10 p-4 text-yellow-100">Yellow zones = moderate liquidity</div>
          <div className="rounded-2xl bg-green-400/10 p-4 text-green-200">Green zones = lower pressure areas</div>
        </div>
      </section>
    </main>
  );
}
