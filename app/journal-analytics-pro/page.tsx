export const metadata = { title: "Journal Analytics Pro | GSM Trading Lab", description: "Trading journal analytics UI for win rate, mistakes, lessons, equity curve, and risk discipline." };

const mistakes = ["Entered before confirmation", "Moved stop loss", "Overtraded after loss", "Ignored news risk"];

export default function JournalAnalyticsProPage() {
  return (
    <main className="page-shell">
      <span className="badge">Journal Pro</span>
      <h1 className="mt-4 section-title">Turn every trade into data.</h1>
      <p className="mt-4 max-w-3xl text-slate-300">This page is designed for trader review: win rate, loss patterns, emotional mistakes, equity curve, and weekly discipline scoring.</p>

      <section className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {[["Win Rate", "62%"],["Avg R:R", "1:2.4"],["Total Trades", "48"],["Discipline Score", "82/100"]].map(([a,b]) => <div className="metric-card" key={a}><p className="text-sm text-slate-400">{a}</p><h2 className="mt-2 text-3xl font-black text-green-300">{b}</h2></div>)}
      </section>

      <section className="mt-8 grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
        <div className="card">
          <h2 className="text-2xl font-black">Equity Curve</h2>
          <div className="mt-6 h-72 rounded-3xl border border-white/10 bg-gradient-to-br from-green-400/10 to-slate-950 p-5">
            <svg viewBox="0 0 800 260" className="h-full w-full">
              <path d="M20 220 C120 200 140 180 210 190 C280 205 310 140 380 150 C470 170 510 90 590 110 C680 130 700 60 780 70" fill="none" stroke="rgb(74 222 128)" strokeWidth="8" strokeLinecap="round" />
              <path d="M20 220 C120 200 140 180 210 190 C280 205 310 140 380 150 C470 170 510 90 590 110 C680 130 700 60 780 70 L780 260 L20 260 Z" fill="rgba(34,197,94,.12)" />
            </svg>
          </div>
        </div>
        <div className="card">
          <h2 className="text-2xl font-black">Mistake Heatmap</h2>
          <div className="mt-5 space-y-3">
            {mistakes.map((m, i) => <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4" key={m}><span>{m}</span><span className="font-black text-red-300">{[7,5,4,3][i]}</span></div>)}
          </div>
        </div>
      </section>
    </main>
  );
}
