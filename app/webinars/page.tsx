import Link from "next/link";

const sessions = [
  ["Beginner Crypto Bootcamp", "Foundation class for new traders", "Weekly live session"],
  ["Risk Management Masterclass", "Position sizing, SL discipline, and psychology", "Premium members"],
  ["Market Breakdown Live", "BTC, ETH, Gold, DXY and macro watchlist", "Public preview + member replay"],
  ["Futures Safety Workshop", "Leverage control and liquidation awareness", "Approved students"],
];

export default function WebinarsPage() {
  return (
    <main className="page-shell">
      <section className="rounded-[2rem] border border-green-400/20 bg-gradient-to-br from-green-400/10 via-slate-950 to-slate-900 p-8 md:p-12">
        <span className="badge">Phase 25</span>
        <h1 className="mt-5 max-w-4xl text-4xl font-black md:text-6xl">Live Webinars & Training Rooms</h1>
        <p className="mt-5 max-w-3xl leading-8 text-slate-300">A structured live-learning area for public previews, premium workshops, and student-only market sessions under GSM Trading Lab.</p>
        <div className="mt-8 flex flex-wrap gap-3"><Link href="/register" className="btn-green">Register for Course</Link><Link href="/membership" className="btn-dark">View Membership</Link></div>
      </section>
      <section className="mt-10 grid gap-5 md:grid-cols-2">
        {sessions.map(([title, desc, access]) => <div className="card" key={title}><h2 className="text-2xl font-black">{title}</h2><p className="mt-3 text-slate-400">{desc}</p><p className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-green-300">{access}</p></div>)}
      </section>
      <section className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8"><h2 className="text-3xl font-black">Student Rules</h2><div className="mt-6 grid gap-3 md:grid-cols-3"><div className="metric-card">Join on time</div><div className="metric-card">No guaranteed profit claims</div><div className="metric-card">Ask risk-first questions</div></div></section>
    </main>
  );
}
