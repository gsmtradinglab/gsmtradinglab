const setups = [
  ["Breakout Retest", "Wait for clean breakout, retest, confirmation candle, then define invalidation."],
  ["Liquidity Sweep", "Mark prior high/low, wait for sweep and reclaim, then manage risk tightly."],
  ["Trend Continuation", "Trade with higher timeframe trend after pullback and volume confirmation."],
  ["News Avoidance", "Skip setups during high-impact news unless it is clearly marked high-risk education only."],
];

export default function TradeSetupsPage() {
  return (
    <main className="page-shell">
      <span className="badge">Education</span>
      <h1 className="mt-5 text-4xl font-black md:text-6xl">Trade Setup Playbook</h1>
      <p className="mt-5 max-w-3xl leading-8 text-slate-400">A simple playbook for students to understand common market setups without blindly copying trades.</p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {setups.map(([title, desc]) => (
          <div className="card" key={title}>
            <h2 className="text-2xl font-black text-green-300">{title}</h2>
            <p className="mt-3 leading-7 text-slate-400">{desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
