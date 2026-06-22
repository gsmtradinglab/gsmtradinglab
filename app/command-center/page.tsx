export const metadata = { title: "Command Center | GSM Trading Lab", description: "A premium market command center for crypto, gold, forex, signals, risk, and journal workflow." };

const marketRows = [
  ["BTCUSDT", "$104,820", "+2.41%", "Bullish", "4H demand reclaim"],
  ["ETHUSDT", "$3,860", "+1.18%", "Neutral", "Range high watch"],
  ["XAUUSD", "$2,338", "-0.32%", "Watch", "News-sensitive zone"],
  ["DXY", "104.12", "+0.21%", "Risk", "Dollar strength check"],
];

const cards = [
  ["Market Bias", "Bullish Above Key Demand", "BTC holding intraday structure. Wait for confirmation before leverage."],
  ["Risk Engine", "1% Max Per Trade", "Position size must be calculated before every signal execution."],
  ["Signal Desk", "Premium Setups Locked", "Use TP/SL tracking and journal every trade setup."],
  ["Macro Radar", "High Impact News", "Avoid oversized positions during CPI, FOMC, NFP, and war headlines."],
];

export default function CommandCenterPage() {
  return (
    <main className="page-shell">
      <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-2xl md:p-10">
        <div className="matrix-glow" />
        <div className="relative grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <span className="badge">Phase 21 Command Center</span>
            <h1 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">TradingView + Binance style market cockpit.</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">One screen for market bias, watchlist, risk rules, live chart widgets, signal workflow, and trading journal discipline.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="btn-green" href="/signals">Open Signals</a>
              <a className="btn-dark" href="/journal-analytics-pro">Journal Analytics</a>
              <a className="btn-dark" href="/portfolio-tracker">Portfolio Tracker</a>
            </div>
          </div>
          <div className="terminal-card animate-glow">
            <div className="mb-4 flex items-center justify-between">
              <p className="font-black">GSM Market Terminal</p>
              <span className="rounded-full bg-green-400/15 px-3 py-1 text-xs font-bold text-green-300">LIVE STYLE</span>
            </div>
            <div className="space-y-3">
              {marketRows.map(([pair, price, change, bias, note]) => (
                <div className="terminal-row" key={pair}>
                  <div><p className="font-black">{pair}</p><p className="text-xs text-slate-400">{note}</p></div>
                  <div className="text-right"><p className="font-black">{price}</p><p className={change.startsWith("+") ? "text-sm text-green-300" : "text-sm text-red-300"}>{change} · {bias}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {cards.map(([title, value, text]) => <div className="metric-card" key={title}><p className="text-sm text-slate-400">{title}</p><h3 className="mt-3 text-2xl font-black">{value}</h3><p className="mt-3 text-sm leading-6 text-slate-300">{text}</p></div>)}
      </section>

      <section className="mt-8 grid gap-5 lg:grid-cols-[1.25fr_.75fr]">
        <div className="card">
          <h2 className="text-2xl font-black">TradingView Workspace</h2>
          <p className="mt-2 text-slate-400">Use this area as the platform chart workspace. If the TradingView widget is blocked by browser extensions, open Market Tools.</p>
          <div className="mt-5 overflow-hidden rounded-3xl border border-white/10 bg-black/40">
            <iframe title="TradingView BTCUSDT" src="https://www.tradingview.com/widgetembed/?symbol=BINANCE:BTCUSDT&interval=60&theme=dark&style=1&timezone=Etc/UTC" className="h-[520px] w-full" />
          </div>
        </div>
        <div className="card">
          <h2 className="text-2xl font-black">Execution Checklist</h2>
          <div className="mt-5 space-y-3 text-sm text-slate-300">
            {["Trend and structure confirmed", "Entry zone defined", "Stop loss placed before entry", "Position risk is 1% or less", "No major news conflict", "Trade reason added to journal"].map((x, i) => <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4" key={x}><span className="mr-2 text-green-300">0{i+1}</span>{x}</div>)}
          </div>
        </div>
      </section>
    </main>
  );
}
