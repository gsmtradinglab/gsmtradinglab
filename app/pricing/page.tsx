import Link from "next/link";

const plans = [
  {
    name: "Online Crypto Trading Course",
    price: "$100",
    description: "Lifetime online learning access for beginners and struggling traders.",
    features: ["Beginner to advanced lessons", "Technical and fundamental analysis", "Futures trading basics", "Risk management", "Trading psychology", "Premium signals access after approval", "Demo simulator and journal access", "Lifetime support"],
    cta: "Join Online Course",
    href: "/register?course=online"
  },
  {
    name: "Physical Crypto Trading Course",
    price: "$150",
    description: "In-person practical chart training with structured guidance.",
    features: ["Physical classroom learning", "Practical chart training", "One-to-one guidance option", "Batch learning option", "Technical analysis practice", "Risk planning", "Premium signals access after approval", "Lifetime support"],
    cta: "Join Physical Course",
    href: "/register?course=physical"
  }
];

export default function PricingPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-14">
      <section className="mb-10 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">Transparent Pricing</p>
        <h1 className="mt-3 text-4xl font-black md:text-5xl">Choose your learning path</h1>
        <p className="mt-4 text-slate-300">GSM Trading Lab focuses on education, risk management, and responsible market learning. No profit, fixed return, or loss recovery is guaranteed.</p>
      </section>

      <div className="grid gap-6 md:grid-cols-2">
        {plans.map((plan) => (
          <div key={plan.name} className="card flex flex-col justify-between p-7">
            <div>
              <h2 className="text-2xl font-bold">{plan.name}</h2>
              <p className="mt-2 text-slate-400">{plan.description}</p>
              <div className="mt-5 text-5xl font-black text-green-400">{plan.price}</div>
              <p className="mt-2 text-sm text-slate-500">One-time course fee, manually verified by admin.</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                {plan.features.map((feature) => <li key={feature}>✅ {feature}</li>)}
              </ul>
            </div>
            <Link href={plan.href} className="btn-green mt-8 block px-5 py-3 text-center">{plan.cta}</Link>
          </div>
        ))}
      </div>

      <section className="card mt-8 p-6">
        <h2 className="text-xl font-bold">Important Risk Notice</h2>
        <p className="mt-2 text-sm text-slate-300">Trading crypto, futures, forex, commodities, stocks, and indices involves high risk. GSM Trading Lab provides education, analysis, signals, and learning support only. You are fully responsible for your own financial decisions.</p>
      </section>
    </main>
  );
}
