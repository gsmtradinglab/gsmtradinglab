import Link from "next/link";

const rules = [
  "No guaranteed profit claim is allowed.",
  "No fixed monthly return claim is allowed.",
  "No guaranteed loss recovery claim is allowed.",
  "Signals are educational and analysis-based only.",
  "Users are responsible for their own trades and financial decisions.",
  "Account management or investment discussions require written agreement and risk disclosure.",
];

export default function CompliancePage() {
  return <main className="mx-auto max-w-5xl px-4 py-14">
    <p className="text-sm font-bold uppercase tracking-widest text-green-400">Compliance</p>
    <h1 className="mt-3 text-4xl font-black">Trading Risk & Communication Policy</h1>
    <p className="mt-4 text-slate-300">This page keeps GSM Trading Lab messaging legally safer and education-focused. It should be followed on the website, ads, social media, course material, and signal posts.</p>
    <div className="mt-8 grid gap-4">
      {rules.map(r => <div className="card" key={r}><p className="font-semibold text-slate-100">{r}</p></div>)}
    </div>
    <div className="mt-8 rounded-2xl border border-red-500/30 bg-red-500/10 p-6 text-red-100">
      <b>Main disclaimer:</b> Trading and investing involve high risk. GSM Trading Lab provides education, analysis, support, signals, and consultation only. We do not guarantee profit, fixed monthly returns, or loss recovery.
    </div>
    <Link href="/legal/risk-disclaimer" className="btn-green mt-8 inline-block">Read Full Risk Disclaimer</Link>
  </main>;
}
