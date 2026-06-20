import Link from "next/link";

export default function Home() {
  return <main className="mx-auto max-w-7xl px-4 py-16">
    <section className="grid gap-10 md:grid-cols-2 md:items-center">
      <div>
        <p className="mb-4 text-green-400">@gsmtradinglab</p>
        <h1 className="text-4xl font-black leading-tight md:text-6xl">Learn Crypto Trading with Mr. GSM</h1>
        <p className="mt-6 text-lg text-slate-300">Practical crypto trading education, technical analysis, fundamental analysis, futures trading, premium market analysis, demo trading practice, and lifetime learning support under GSM Trading Lab.</p>
        <div className="mt-8 flex flex-wrap gap-3"><Link href="/register" className="btn-green">Register Now</Link><Link href="/courses" className="btn-dark">View Courses</Link><Link href="/signals" className="btn-dark">View Free Signals</Link></div>
      </div>
      <div className="card bg-gradient-to-br from-slate-900 to-slate-950">
        <div className="mb-6 text-2xl font-bold">Risk First. Profit Later.</div>
        <div className="space-y-4 text-slate-300">
          <p>Learn before risking real money. Practice with demo tools, build a trading journal, and understand market psychology.</p>
          <p className="rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-green-200">No guaranteed profit. No fake returns. Only education, analysis, and responsible risk management.</p>
        </div>
      </div>
    </section>
    <section className="mt-16 grid gap-5 md:grid-cols-3">
      {["Online Course - $100", "Physical Course - $150", "Demo Trading Practice"].map(x => <div className="card" key={x}><h3 className="text-xl font-bold">{x}</h3><p className="mt-3 text-slate-400">Beginner-friendly learning with practical market guidance.</p></div>)}
    </section>
  </main>;
}
