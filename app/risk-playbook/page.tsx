export const metadata = { title: "Risk Playbook | GSM Trading Lab", description: "Risk management playbook for responsible trading." };

const rules = [
  ["1% Rule", "Do not risk more than 1% of account equity on one trade."],
  ["No SL, No Trade", "If the setup has no stop loss, it is not a professional setup."],
  ["Leverage Control", "High leverage increases liquidation risk. Use low leverage until you are experienced."],
  ["News Protection", "High-impact news can destroy technical setups. Check calendar before trading."],
  ["Loss Limit", "Define maximum daily loss and stop trading after hitting it."],
  ["Review Before Repeat", "After a loss, journal the mistake before entering another position."],
];

export default function RiskPlaybookPage() {
  return (
    <main className="page-shell">
      <span className="badge">Risk First</span>
      <h1 className="mt-5 section-title">GSM Risk Management Playbook</h1>
      <p className="mt-4 max-w-3xl text-slate-300">This playbook is designed to keep students focused on survival, discipline, and controlled execution.</p>
      <section className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {rules.map(([title, text]) => <div className="card" key={title}><h2 className="text-2xl font-black">{title}</h2><p className="mt-3 leading-7 text-slate-300">{text}</p></div>)}
      </section>
      <section className="mt-10 rounded-[2rem] border border-red-400/20 bg-red-500/10 p-6 text-red-100">
        <h2 className="text-2xl font-black">Capital protection comes first</h2>
        <p className="mt-3">A trader who survives can improve. A trader who ignores risk eventually loses control.</p>
      </section>
    </main>
  );
}
