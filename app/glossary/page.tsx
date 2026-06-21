const terms = [
  ["Stop Loss", "A price level where a trade is closed to control loss."],
  ["Take Profit", "A target level where partial or full profit may be booked."],
  ["Risk Reward", "Comparison between possible loss and possible profit."],
  ["Leverage", "Borrowed exposure that increases both profit and loss risk."],
  ["Liquidation", "Forced closure of a leveraged position when margin is insufficient."],
  ["Support", "A price zone where buyers may become active."],
  ["Resistance", "A price zone where sellers may become active."],
  ["Futures", "Derivative contracts used to trade price movement without holding spot asset."],
  ["Psychology", "Emotional discipline required to follow a trading plan."],
  ["Journal", "A record of trades, mistakes, lessons, and performance."]
];
export default function GlossaryPage(){
 return <main className="mx-auto max-w-6xl px-4 py-12">
  <section className="card p-8"><p className="text-sm font-bold uppercase tracking-[0.3em] text-green-400">Learning</p><h1 className="mt-3 text-4xl font-black">Trading Glossary</h1><p className="mt-4 text-slate-300">Simple definitions for beginner traders.</p></section>
  <section className="mt-8 grid gap-4 md:grid-cols-2">{terms.map(([t,d])=><div className="card p-5" key={t}><h2 className="font-black text-green-300">{t}</h2><p className="mt-2 text-slate-300">{d}</p></div>)}</section>
 </main>
}
