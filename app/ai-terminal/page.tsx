export const metadata = { title: "AI Market Terminal" };

const modules = [
  ["Daily Market Summary", "/market-summary", "Macro, BTC, ETH, GOLD, DXY and key risk events."],
  ["AI Trade Review", "/trade-review", "Grade a trade idea before risking capital."],
  ["Risk Analysis", "/risk-analysis", "Check risk percentage, SL logic, and position discipline."],
  ["News Terminal", "/news-terminal", "High-impact headlines and session notes."],
];

export default function AITerminalPage() {
  return (
    <main className="page-shell">
      <section className="section-head">
        <span className="badge">AI Workflow</span>
        <h1 className="section-title mt-5">AI Market Terminal</h1>
        <p className="mt-4 text-lg leading-8 text-slate-300">A safe educational assistant hub for market preparation, trade review, and risk-first discipline. It does not guarantee profit and does not replace your own analysis.</p>
      </section>
      <section className="mt-8 grid gap-5 md:grid-cols-2">
        {modules.map(([title, href, text]) => (
          <a href={href} key={title} className="card group">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl font-black group-hover:text-green-300">{title}</h2>
              <span className="text-2xl text-green-300">→</span>
            </div>
            <p className="mt-4 leading-7 text-slate-400">{text}</p>
          </a>
        ))}
      </section>
      <section className="mt-8 terminal-card">
        <p className="badge w-fit">Safety Rule</p>
        <h2 className="mt-4 text-3xl font-black">AI can support thinking, but risk management controls the trade.</h2>
        <p className="mt-4 max-w-3xl leading-8 text-slate-300">Never enter a trade only because an AI summary sounds confident. Confirm chart structure, liquidity, news timing, stop loss, and maximum 1% portfolio risk.</p>
      </section>
    </main>
  );
}
