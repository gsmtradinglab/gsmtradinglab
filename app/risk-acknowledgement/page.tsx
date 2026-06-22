import Link from "next/link";

const rules = ["Trading involves high risk and losses are possible.", "Signals are educational and analysis-based only.", "No fixed return, no guaranteed profit, and no loss recovery promise is made.", "Students must use stop loss and position sizing.", "Demo practice and journaling should be done before real-money trading."];

export default function RiskAcknowledgementPage() {
  return <main className="mx-auto max-w-4xl px-4 py-14">
    <h1 className="text-4xl font-black md:text-6xl">Risk Acknowledgement</h1>
    <p className="mt-4 text-slate-300">Every GSM Trading Lab student should understand these points before using signals, demo tools, or real market analysis.</p>
    <div className="card mt-8">
      <ul className="grid gap-4 text-slate-300">{rules.map(r => <li key={r} className="rounded-xl border border-slate-800 bg-slate-950 p-4">✅ {r}</li>)}</ul>
      <p className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-200">You are fully responsible for your own financial decisions. GSM Trading Lab provides education, analysis, support, and consultation only.</p>
      <div className="mt-6 flex flex-wrap gap-3"><Link href="/risk-management" className="btn-green">Open Risk Management</Link><Link href="/legal/risk-disclaimer" className="btn-dark">Read Full Disclaimer</Link></div>
    </div>
  </main>;
}
