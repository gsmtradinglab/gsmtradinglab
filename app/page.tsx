import Link from "next/link";

const stats = [
  ["Lifetime", "Learning Access"],
  ["$10K", "Demo Practice Wallet"],
  ["100%", "Risk-first Education"],
  ["24/7", "Community Support"],
];

const features = [
  ["Live Market Education", "Technical analysis, fundamentals, futures basics, and structured chart practice."],
  ["Premium Signal Workflow", "Free, member, and premium signals with TP/SL status and transparent performance."],
  ["Demo Trading Lab", "Practice without real capital using demo trades, journal notes, and analytics."],
  ["Manual Payment System", "Cash, bank, JazzCash, Easypaisa, and USDT proof upload with admin approval."],
  ["Learning Resources", "Guides, PDFs, blogs, glossary, compliance, and risk-management pages."],
  ["Admin Control Room", "Users, payments, registrations, signals, courses, analysis, and CMS workflows."],
];

const steps = ["Create your account", "Register for course", "Upload payment proof", "Get access approved", "Practice and learn safely"];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="hero-grid absolute inset-0 -z-20" />
      <div className="glow glow-one" />
      <div className="glow glow-two" />

      <section className="mx-auto grid min-h-[86vh] max-w-7xl items-center gap-10 px-4 py-16 lg:grid-cols-[1.05fr_.95fr]">
        <div className="animate-rise">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200 shadow-lg shadow-emerald-500/10">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" /> @gsmtradinglab • Crypto Education Platform
          </div>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Learn Crypto Trading with <span className="gradient-text">Mr. GSM</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Practical trading education, technical analysis, futures learning, premium market analysis, demo trading practice, journal discipline, and lifetime learning support under GSM Trading Lab.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/start-here" className="btn-green btn-shine">Start Learning</Link>
            <Link href="/signals" className="btn-dark">View Free Signals</Link>
            <Link href="/market-tools" className="btn-dark">Open Market Tools</Link>
          </div>
          <div className="mt-10 grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-4">
            {stats.map(([a, b]) => (
              <div key={a} className="glass-card p-4">
                <div className="text-2xl font-black text-white">{a}</div>
                <div className="mt-1 text-xs text-slate-400">{b}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-float">
          <div className="terminal-card">
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <div className="text-sm text-slate-400">GSM Risk Engine</div>
                <div className="text-2xl font-black">Risk First. Profit Later.</div>
              </div>
              <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">LIVE</div>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-emerald-100">
                No guaranteed profit. No fake returns. Only education, analysis, practice, and responsible risk management.
              </div>
              {steps.map((x, i) => (
                <div key={x} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-400 text-sm font-black text-slate-950">{i + 1}</span>
                  <span className="text-slate-200">{x}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold text-emerald-400">PLATFORM MODULES</p>
            <h2 className="mt-2 text-3xl font-black md:text-5xl">One platform for learning, practice, and discipline.</h2>
          </div>
          <Link href="/pricing" className="btn-dark w-fit">View Pricing</Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map(([title, desc], i) => (
            <div key={title} className="feature-card animate-rise" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-2xl">{["📊", "🎯", "🧪", "💳", "📚", "🛡️"][i]}</div>
              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="rounded-[2rem] border border-emerald-400/20 bg-gradient-to-br from-emerald-400/15 via-slate-900 to-cyan-400/10 p-8 shadow-2xl shadow-emerald-950/40 md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-3xl font-black md:text-5xl">Ready to build discipline before risking real money?</h2>
              <p className="mt-4 max-w-2xl text-slate-300">Start with demo practice, learn risk management, track every trade, and join the GSM Trading Lab community.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/register" className="btn-green btn-shine">Register Now</Link>
              <Link href="/demo-trading" className="btn-dark">Try Demo Lab</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
