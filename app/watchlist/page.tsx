export const metadata = { title: "Watchlist" };

const groups = {
  Crypto: ["BTCUSDT", "ETHUSDT", "SOLUSDT", "BNBUSDT", "LINKUSDT"],
  Forex: ["EURUSD", "GBPUSD", "USDJPY", "DXY", "USDCAD"],
  Commodities: ["XAUUSD", "XAGUSD", "USOIL", "NASDAQ", "S&P 500"],
};

export default function WatchlistPage() {
  return (
    <main className="page-shell">
      <span className="badge">Market Focus</span>
      <h1 className="section-title mt-5">Watchlist</h1>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {Object.entries(groups).map(([group, symbols]) => (
          <div className="card" key={group}>
            <h2 className="text-2xl font-black">{group}</h2>
            <div className="mt-5 space-y-3">
              {symbols.map((s) => <div className="terminal-row" key={s}><span className="font-black">{s}</span><span className="text-sm text-green-300">Watch</span></div>)}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
