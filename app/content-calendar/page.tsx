export const metadata = { title: "Content Calendar" };

const plan = [
  ["Monday", "Market Outlook", "BTC, ETH, Gold, DXY, and key levels for the week."],
  ["Tuesday", "Risk Management", "One practical rule: position size, SL discipline, or overtrading control."],
  ["Wednesday", "Technical Analysis", "Chart pattern, support/resistance, liquidity, or FVG education."],
  ["Thursday", "Psychology", "Emotions, patience, revenge trading, and discipline."],
  ["Friday", "Signal Review", "Educational recap of closed setups. No fake stats."],
  ["Saturday", "Beginner Lesson", "Simple crypto/futures concept for new traders."],
  ["Sunday", "Weekly Recap", "What moved, what to watch, and learning notes."],
];

export default function ContentCalendarPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <section className="card p-8">
        <p className="text-sm font-semibold text-green-400">Marketing System</p>
        <h1 className="mt-3 text-4xl font-black">Weekly Content Calendar</h1>
        <p className="mt-4 max-w-3xl text-slate-300">A simple content plan for Facebook, Instagram, TikTok, X, LinkedIn, and WhatsApp Channel.</p>
      </section>
      <section className="mt-8 grid gap-4">
        {plan.map(([day, topic, note]) => (
          <div key={day} className="card grid gap-2 p-5 md:grid-cols-[140px_220px_1fr]">
            <h2 className="text-xl font-black text-green-400">{day}</h2>
            <p className="font-semibold text-white">{topic}</p>
            <p className="text-slate-300">{note}</p>
          </div>
        ))}
      </section>
      <section className="mt-8 card p-6">
        <h2 className="text-2xl font-bold">Posting Rule</h2>
        <p className="mt-3 text-slate-300">Every market post should include: educational purpose, risk disclaimer, stop-loss reminder, and no guaranteed profit claims.</p>
      </section>
    </main>
  );
}
