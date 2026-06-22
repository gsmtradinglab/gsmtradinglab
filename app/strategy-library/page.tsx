const strategies = [
  ["Liquidity Sweep + Reclaim", "Wait for sweep, reclaim, confirmation close, defined SL, and minimum 1:2 planning."],
  ["Breakout Retest", "Avoid chasing. Mark range, wait for retest, confirm volume/structure, then journal the reason."],
  ["Trend Pullback", "Trade with structure, use invalidation below/above swing, and reduce risk during news."],
  ["Support/Resistance Flip", "Focus on clean flip zones, not random lines. Confirm close and reaction."],
];

export default function StrategyLibraryPage() {
  return (
    <main className="page-shell">
      <span className="badge">Student Playbook</span>
      <h1 className="section-title mt-4">Strategy Library</h1>
      <p className="mt-4 max-w-3xl text-slate-300">A practical framework library for students. These are educational models only, not guaranteed profit systems.</p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {strategies.map(([title, desc], i) => (
          <div className="card" key={title}>
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-green-400/10 text-xl font-black text-green-300 ring-1 ring-green-400/20">{i + 1}</div>
            <h2 className="text-2xl font-black">{title}</h2>
            <p className="mt-4 leading-7 text-slate-400">{desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
