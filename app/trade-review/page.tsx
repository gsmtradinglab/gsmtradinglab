export const metadata = { title: "AI Trade Review" };

export default function TradeReviewPage() {
  const checks = ["Is stop loss defined before entry?", "Is risk 1% or less?", "Is entry based on structure, not FOMO?", "Is there major news nearby?", "Is reward at least 2R?", "Is invalidation clear?"];
  return (
    <main className="page-shell">
      <span className="badge">Trade Discipline</span>
      <h1 className="section-title mt-5">AI Trade Review</h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">Use this checklist before posting or taking a trade. This is educational guidance, not financial advice.</p>
      <section className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {checks.map((check) => <div className="card" key={check}><p className="text-lg font-black">{check}</p><p className="mt-3 text-sm text-slate-400">Answer honestly before entering.</p></div>)}
      </section>
      <section className="mt-8 card">
        <h2 className="text-2xl font-black">Trade Grade Template</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-4">
          {[["A+", "Clean setup"], ["B", "Acceptable"], ["C", "Needs confirmation"], ["D", "Avoid"]].map(([grade, text]) => <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center" key={grade}><p className="text-4xl font-black text-green-300">{grade}</p><p className="mt-2 text-slate-400">{text}</p></div>)}
        </div>
      </section>
    </main>
  );
}
