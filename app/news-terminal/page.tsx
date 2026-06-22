export const metadata = { title: "News Terminal" };

const news = [
  ["Macro", "Watch USD news before leverage trades."],
  ["Crypto", "BTC dominance remains key for altcoin risk."],
  ["Gold", "Gold reacts strongly to DXY and yields."],
  ["Risk", "Avoid trading during uncertain high impact events."],
];

export default function NewsTerminalPage() {
  return (
    <main className="page-shell">
      <span className="badge">Market Awareness</span>
      <h1 className="section-title mt-5">News Terminal</h1>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {news.map(([tag, text]) => <div className="card" key={tag}><span className="badge">{tag}</span><p className="mt-5 text-xl font-black">{text}</p><p className="mt-3 text-slate-400">Use news as context, not as gambling trigger.</p></div>)}
      </div>
    </main>
  );
}
