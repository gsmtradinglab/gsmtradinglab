export const metadata = { title: "Trading Plan Builder | GSM Trading Lab", description: "Build a simple risk-first trading plan." };

const plan = [
  ["Market", "Which market will you trade? Crypto spot, crypto futures, gold, forex, or watchlist only."],
  ["Timeframe", "Define whether the setup is scalping, intraday, swing, or position style."],
  ["Entry Model", "Write your setup conditions before entry. No FOMO entries."],
  ["Risk Per Trade", "Maximum 1% risk per trade is recommended for survival-focused trading."],
  ["Stop Loss", "Every trade must have invalidation. No stop loss means no disciplined setup."],
  ["Targets", "Define TP1, TP2, TP3, and when to move stop to breakeven."],
  ["News Filter", "Avoid high-impact events if you do not understand volatility risk."],
  ["Journal Review", "Record every trade result, mistake, emotion, and lesson learned."],
];

export default function TradingPlanPage() {
  return (
    <main className="page-shell">
      <span className="badge">Student Tool</span>
      <h1 className="mt-5 section-title">Trading Plan Builder</h1>
      <p className="mt-4 max-w-3xl text-slate-300">Use this page as a simple framework before entering trades. A plan protects your capital from emotions, overtrading, and random entries.</p>
      <section className="mt-10 grid gap-4 md:grid-cols-2">
        {plan.map(([title, text], i) => <div className="metric-card" key={title}><p className="text-sm font-black text-green-300">0{i + 1}</p><h2 className="mt-2 text-xl font-black">{title}</h2><p className="mt-2 leading-7 text-slate-400">{text}</p></div>)}
      </section>
    </main>
  );
}
