const playbook = [
  "Review your last 5 trades before taking the next setup.",
  "Never increase lot size after a loss. Reset emotion first.",
  "Mark entry, invalidation, TP zones, and risk amount before execution.",
  "Avoid news candles unless the plan is pre-defined and risk is reduced.",
];

export default function AICoachPage() {
  return (
    <main className="page-shell">
      <section className="relative overflow-hidden rounded-[2.5rem] border border-green-400/20 bg-slate-950/70 p-8 shadow-[0_0_90px_rgba(34,197,94,.12)] md:p-12">
        <div className="matrix-glow" />
        <div className="relative z-10 max-w-3xl">
          <span className="badge">Phase 22</span>
          <h1 className="mt-6 text-4xl font-black tracking-tight md:text-6xl">AI Trading Coach</h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            A guided coaching workspace for trade planning, discipline checks, risk control, and post-trade review. This is an educational assistant, not financial advice.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn-green" href="/journal">Open Journal</a>
            <a className="btn-dark" href="/risk-engine">Run Risk Check</a>
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-5 lg:grid-cols-3">
        {[
          ["Pre-Trade Checklist", "Bias, entry, invalidation, RR, news risk, emotion state."],
          ["Trade Review", "Mistakes, lessons, screenshot notes, rule violations."],
          ["Discipline Score", "Risk consistency, SL use, overtrade warning, revenge-trade alert."],
        ].map(([title, text]) => (
          <div className="card" key={title}>
            <h2 className="text-2xl font-black">{title}</h2>
            <p className="mt-3 text-slate-300">{text}</p>
          </div>
        ))}
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
        <div className="terminal-card">
          <h2 className="text-2xl font-black">Coach Playbook</h2>
          <div className="mt-6 grid gap-3">
            {playbook.map((item, i) => (
              <div className="terminal-row" key={item}>
                <span className="font-bold text-green-300">0{i + 1}</span>
                <span className="text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="card">
          <h2 className="text-2xl font-black">Risk Reminder</h2>
          <p className="mt-4 text-slate-300">No guaranteed profits. Signals and coaching are educational. Always use stop loss and proper position sizing.</p>
          <div className="mt-6 rounded-3xl border border-red-400/20 bg-red-400/10 p-5 text-red-200">If you cannot define your risk, do not enter the trade.</div>
        </div>
      </section>
    </main>
  );
}
