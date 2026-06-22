import Link from "next/link";

const steps = ["Share your referral link", "Lead registers for GSM Trading Lab", "Admin verifies genuine student", "Reward is reviewed manually"];

export default function AffiliatePage() {
  return (
    <main className="page-shell">
      <span className="badge">Growth System</span>
      <h1 className="mt-5 text-4xl font-black md:text-6xl">Affiliate & Referral Growth</h1>
      <p className="mt-5 max-w-3xl leading-8 text-slate-400">A compliance-safe referral workflow for community growth. Rewards are manually reviewed and never linked to fake profit promises.</p>
      <div className="mt-10 grid gap-4 md:grid-cols-4">{steps.map((s,i)=><div className="metric-card" key={s}><b>Step {i+1}</b><p className="mt-3 text-slate-300">{s}</p></div>)}</div>
      <section className="mt-10 rounded-3xl border border-green-400/20 bg-green-400/10 p-6 md:p-8"><h2 className="text-3xl font-black">Referral Compliance</h2><p className="mt-4 text-slate-300">Affiliates must promote education, discipline, and risk management only. No guaranteed profit, fixed return, or loss recovery claims are allowed.</p><Link className="btn-green mt-6 inline-flex" href="/contact">Apply as Partner</Link></section>
    </main>
  );
}
