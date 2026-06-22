const blocks = [
  ["Setup Builder", "Create an educational setup checklist before posting a signal."],
  ["Risk Audit", "Check entry, stop loss, leverage, invalidation, and news risk."],
  ["Follow-up Tracker", "Track TP1, TP2, break-even, SL, cancelled, or manual close."],
  ["Post Review", "Review wording to avoid guaranteed profit or unrealistic claims."],
];

export default function SignalLabPage() {
  return (
    <main className="page-shell">
      <span className="badge">Signal Desk</span>
      <h1 className="mt-5 text-4xl font-black md:text-6xl">Signal Lab</h1>
      <p className="mt-5 max-w-3xl leading-8 text-slate-400">A workflow page for preparing clean, compliant, risk-first signal ideas before publishing them to members.</p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {blocks.map(([title, desc]) => (
          <div className="card" key={title}>
            <h2 className="text-2xl font-black">{title}</h2>
            <p className="mt-3 leading-7 text-slate-400">{desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 rounded-3xl border border-red-400/20 bg-red-400/10 p-6 text-sm leading-7 text-red-50">
        <b>Compliance Reminder:</b> Every setup must include risk warning, stop-loss discipline, and no guarantee of profit, recovery, or fixed return.
      </div>
    </main>
  );
}
