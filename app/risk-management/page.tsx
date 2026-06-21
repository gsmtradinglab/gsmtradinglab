import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Risk Management",
  description: "GSM Trading Lab risk management rules for responsible crypto and futures trading education.",
};

const rules = [
  "Never risk money you cannot afford to lose.",
  "Use stop loss on every trade setup.",
  "Risk a small fixed percentage per trade; 1% or less is recommended for beginners.",
  "Do not revenge trade after a loss.",
  "Avoid oversized leverage, especially during news and high volatility.",
  "Journal every trade before increasing real capital.",
  "Treat signals as educational analysis, not guaranteed profit calls.",
];

export default function RiskManagementPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <p className="text-green-400">GSM Trading Lab</p>
      <h1 className="mt-2 text-4xl font-black">Risk Management First</h1>
      <p className="mt-4 max-w-3xl text-slate-300">The first goal of every trader is survival. Profit comes only after discipline, position sizing, emotional control, and risk awareness.</p>
      <section className="mt-10 grid gap-4 md:grid-cols-2">
        {rules.map((rule, index) => (
          <div key={rule} className="card">
            <div className="text-sm text-green-400">Rule {index + 1}</div>
            <p className="mt-2 font-semibold text-slate-100">{rule}</p>
          </div>
        ))}
      </section>
      <section className="card mt-10 border-red-500/30 bg-red-500/10">
        <h2 className="text-2xl font-bold text-red-200">Important Disclaimer</h2>
        <p className="mt-3 text-slate-300">Trading crypto, futures, forex, commodities, and financial markets involves high risk. GSM Trading Lab provides education, analysis, support, and signals only. We do not guarantee profit, fixed monthly returns, or loss recovery. You are fully responsible for your own trades and financial decisions.</p>
      </section>
    </main>
  );
}
