import Link from "next/link";

export const metadata = {
  title: "Start Here",
  description: "Begin your GSM Trading Lab learning journey with registration, demo practice, tools, and risk management steps.",
};

const steps = [
  ["Create account", "/signup", "Register your free GSM Trading Lab account."],
  ["Register course", "/register", "Choose online or physical learning mode."],
  ["Check tools", "/tools", "Use calculators before planning any trade."],
  ["Practice demo", "/demo-trading", "Record practice trades with a $10,000 virtual balance."],
  ["Use journal", "/journal", "Write mistakes, lessons, screenshots, and trade reviews."],
  ["Read risk disclaimer", "/legal/risk-disclaimer", "Understand that profit is never guaranteed."],
];

export default function StartHerePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-4xl font-black">Start Here</h1>
      <p className="mt-4 max-w-3xl text-slate-300">Follow these steps to use GSM Trading Lab properly. Learn first, practice on demo, manage risk, then decide for yourself.</p>
      <section className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {steps.map(([title, href, desc], i) => (
          <Link href={href} className="card hover:border-green-400" key={href}>
            <p className="text-sm text-green-400">Step {i + 1}</p>
            <h2 className="mt-2 text-xl font-bold">{title}</h2>
            <p className="mt-3 text-slate-300">{desc}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
