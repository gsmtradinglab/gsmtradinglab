const checks = [
  ["Stop Loss", "Required", "Every trade must have invalidation."],
  ["Risk Per Trade", "Max 1%", "Avoid account damage from one setup."],
  ["News Filter", "Check", "High-impact events can invalidate TA."],
  ["Emotion State", "Neutral", "No revenge trading, no FOMO."],
];

export default function RiskEnginePage() {
  return (
    <main className="page-shell">
      <div className="section-head">
        <span className="badge">Risk Engine</span>
        <h1 className="mt-5 section-title">Trade Safety Scoring</h1>
        <p className="mt-4 text-slate-300">Use this framework before entering any trade. The goal is survival, consistency, and controlled execution.</p>
      </div>
      <section className="mt-10 grid gap-5 md:grid-cols-2">
        {checks.map(([title, status, note]) => (
          <div className="card" key={title}>
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl font-black">{title}</h2>
              <span className="badge">{status}</span>
            </div>
            <p className="mt-3 text-slate-300">{note}</p>
          </div>
        ))}
      </section>
      <section className="mt-10 rounded-[2rem] border border-green-400/20 bg-green-400/10 p-6">
        <h2 className="text-2xl font-black text-green-200">Recommended Rule</h2>
        <p className="mt-3 text-slate-200">Risk small, journal every trade, and do not use high leverage without a written plan.</p>
      </section>
    </main>
  );
}
