export const metadata = {
  title: "Live Market Tools",
  description: "TradingView charts, crypto market watch, risk notes, and live market tools for GSM Trading Lab students.",
};

export default function MarketTools() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-14">
      <h1 className="text-4xl font-black">Live Market Tools</h1>
      <p className="mt-4 max-w-3xl text-slate-300">
        Use this page for chart reading, technical analysis, market observation, and demo practice. These tools are for education only and do not place real trades.
      </p>

      <section className="mt-8 grid gap-5 lg:grid-cols-[1.8fr_1fr]">
        <div className="card p-2">
          <iframe
            title="TradingView BTCUSDT Chart"
            src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_gsm&symbol=BINANCE%3ABTCUSDT&interval=60&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=0f172a&studies=%5B%5D&theme=dark&style=1&timezone=Etc%2FUTC&withdateranges=1&hideideas=1"
            className="h-[620px] w-full rounded-xl border-0"
            loading="lazy"
          />
        </div>
        <div className="grid gap-5">
          <div className="card">
            <h2 className="text-xl font-bold">Risk Reminder</h2>
            <p className="mt-3 text-slate-300">Never risk more than 1% of your portfolio on a single trade. Always define entry, SL, TP, and invalidation before entering.</p>
          </div>
          <div className="card">
            <h2 className="text-xl font-bold">Useful Pairs</h2>
            <ul className="mt-3 space-y-2 text-slate-300">
              <li>BTCUSDT</li>
              <li>ETHUSDT</li>
              <li>SOLUSDT</li>
              <li>XAUUSD</li>
              <li>EURUSD</li>
            </ul>
          </div>
          <div className="card border-amber-500/30 bg-amber-500/5">
            <h2 className="text-xl font-bold text-amber-200">TradingView Limitation</h2>
            <p className="mt-3 text-slate-300">Embedded charts may not save drawings inside this app. Save screenshots in your trading journal for record keeping.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
