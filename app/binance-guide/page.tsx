export const metadata = { title: "Binance Guide | GSM Trading Lab", description: "Binance learning checklist for GSM Trading Lab students." };

const cards = [
  ["Spot Trading", "Use spot trading first to understand market orders, limit orders, chart structure, and risk control."],
  ["Futures Trading", "Learn margin, liquidation, leverage, funding fees, and stop loss before opening futures positions."],
  ["Security Settings", "Enable Google Authenticator, withdrawal whitelist, device management, and anti-phishing code."],
  ["Risk Controls", "Keep leverage low, define stop loss before entry, and never risk more than a small fixed percentage."],
  ["Record Keeping", "Save screenshots and add every setup to your GSM Trading Journal for review."],
  ["No Signal Blind Entry", "Signals are educational. Always check your risk, timeframe, market condition, and news risk."],
];

export default function BinanceGuidePage() {
  return (
    <main className="page-shell">
      <span className="badge">Platform Guide</span>
      <h1 className="mt-5 section-title">Binance Beginner Guide</h1>
      <p className="mt-4 max-w-3xl text-slate-300">A practical Binance learning guide for students who want to understand basic platform sections before using real capital.</p>
      <section className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {cards.map(([title, text]) => <div className="card" key={title}><h2 className="text-2xl font-black">{title}</h2><p className="mt-3 leading-7 text-slate-300">{text}</p></div>)}
      </section>
      <div className="mt-10 rounded-[2rem] border border-green-400/20 bg-green-400/10 p-6 text-green-50">
        <b>Learning rule:</b> Understand the exchange first, then practice on demo, then risk small only with a written plan.
      </div>
    </main>
  );
}
