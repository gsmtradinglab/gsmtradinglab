export default function CommunityPage(){
  return <main className="mx-auto max-w-6xl px-4 py-12 space-y-8">
    <section className="card p-8">
      <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-400">Community Rules</p>
      <h1 className="mt-3 text-4xl font-black">GSM Trading Lab Community Code</h1>
      <p className="mt-4 text-slate-300">A clean, disciplined trading community works only when members respect risk, learning, and professional behavior.</p>
    </section>
    <section className="grid gap-4 md:grid-cols-2">
      {[
        ["Risk First", "Never take any signal or idea without your own risk plan. Use stop loss and avoid over-leverage."],
        ["No Profit Guarantees", "No member, admin, or mentor is allowed to promise guaranteed profit, fixed returns, or loss recovery."],
        ["Respect Everyone", "No abuse, spam, fake screenshots, or misleading claims. Keep discussion practical and educational."],
        ["Learning Mindset", "Ask questions, journal your mistakes, and focus on consistency instead of gambling behavior."],
        ["News Risk", "Avoid blind trading during major economic news. High volatility can hit SL or liquidate positions quickly."],
        ["Capital Protection", "Survival comes before profit. A trader who protects capital can learn and improve long term."]
      ].map(([title, text]) => <div key={title} className="card p-6"><h2 className="text-xl font-black">{title}</h2><p className="mt-2 text-slate-300">{text}</p></div>)}
    </section>
  </main>
}
