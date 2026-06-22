export const metadata = { title: "Revenue Hub | GSM Trading Lab Admin", description: "Admin revenue and operations dashboard UI." };

export default function RevenueHubPage() {
  return (
    <main className="page-shell">
      <span className="badge">Admin Pro</span>
      <h1 className="mt-4 section-title">Revenue & operations hub.</h1>
      <p className="mt-4 max-w-3xl text-slate-300">Track paid students, pending payments, premium access, leads, and conversion targets from one admin-style screen.</p>
      <section className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {[["Revenue", "$0"],["Pending Leads", "0"],["Premium Students", "0"],["Conversion", "0%"]].map(([a,b]) => <div className="metric-card" key={a}><p className="text-sm text-slate-400">{a}</p><h2 className="mt-2 text-3xl font-black text-green-300">{b}</h2></div>)}
      </section>
      <section className="mt-8 grid gap-5 lg:grid-cols-2">
        <div className="card"><h2 className="text-2xl font-black">Payment Pipeline</h2><div className="mt-5 space-y-3">{["New registration", "Payment pending", "Proof uploaded", "Admin verified", "Access granted"].map((x,i)=><div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4" key={x}><span className="mr-3 text-green-300">0{i+1}</span>{x}</div>)}</div></div>
        <div className="card"><h2 className="text-2xl font-black">Admin Actions</h2><div className="mt-5 grid gap-3">{[["Users","/admin"],["Signals","/admin"],["Analytics Pro","/admin/analytics-pro"],["Quality Check","/admin/quality-check"]].map(([a,h])=><a className="btn-dark" href={h} key={a}>{a}</a>)}</div></div>
      </section>
    </main>
  );
}
