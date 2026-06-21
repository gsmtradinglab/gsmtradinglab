import Link from "next/link";

const items = [
  ["Account problem", "Use login, password reset, or contact support if your dashboard does not open."],
  ["Payment verification", "Submit payment proof from the Payments page. Admin verifies manually before access is granted."],
  ["Premium signals", "Premium signals unlock only after paymentStatus is approved and courseAccess is premium."],
  ["Demo trading", "Demo trades are only for practice. They never connect to a real exchange."],
  ["Risk management", "Never trade without a stop loss. Keep risk small and avoid over-leverage."],
];

export default function HelpCenterPage() {
  return <main className="mx-auto max-w-6xl px-4 py-14">
    <p className="text-sm font-bold uppercase tracking-widest text-green-400">Help Center</p>
    <h1 className="mt-3 text-4xl font-black">Support and Common Questions</h1>
    <div className="mt-10 grid gap-5 md:grid-cols-2">
      {items.map(([title, text]) => <div className="card" key={title}><h2 className="text-xl font-bold">{title}</h2><p className="mt-2 text-slate-300">{text}</p></div>)}
    </div>
    <div className="mt-10 rounded-2xl border border-green-400/20 bg-green-500/10 p-6">
      <h2 className="text-2xl font-bold">Need direct support?</h2>
      <p className="mt-2 text-slate-300">Send your issue with screenshot and registered email so admin can check your account faster.</p>
      <Link href="/contact" className="btn-green mt-5 inline-block">Contact Support</Link>
    </div>
  </main>;
}
