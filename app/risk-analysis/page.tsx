export const metadata = { title: "Risk Analysis" };

export default function RiskAnalysisPage() {
  return (
    <main className="page-shell">
      <span className="badge-red">Capital Protection</span>
      <h1 className="section-title mt-5">Risk Analysis Center</h1>
      <section className="mt-8 grid gap-6 lg:grid-cols-3">
        {["Maximum 1% Risk", "Stop Loss Required", "News Filter Required"].map((title) => <div className="metric-card" key={title}><h2 className="text-2xl font-black">{title}</h2><p className="mt-4 leading-7 text-slate-400">If this condition is not satisfied, the trade should be skipped or reduced.</p></div>)}
      </section>
      <section className="mt-8 terminal-card">
        <h2 className="text-3xl font-black">Risk Decision</h2>
        <p className="mt-4 leading-8 text-slate-300">A professional trader protects downside first. Before every trade, calculate position size, define invalidation, and accept the loss emotionally before entry.</p>
        <a className="btn-green mt-6 inline-block" href="/tools">Open Calculators</a>
      </section>
    </main>
  );
}
