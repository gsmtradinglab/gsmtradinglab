import Link from "next/link";

const stats = [
  ["5+", "Years practical market experience"],
  ["$10K", "Virtual demo trading wallet"],
  ["24/7", "Learning and community support"],
  ["1%", "Risk per trade discipline"],
];

const services = [
  ["Premium Signals", "Educational market setups with entry zone, stop loss, targets, visibility levels, and transparent status tracking.", "/signals"],
  ["Crypto Courses", "Beginner to advanced learning path covering TA, FA, futures basics, psychology, and risk management.", "/courses"],
  ["1-on-1 Mentorship", "Personal guidance for strategy correction, mistake review, risk planning, and chart practice with Mr. GSM.", "/mentorship"],
  ["Demo Practice", "Practice trading with virtual balance, track PnL, and build discipline before risking real capital.", "/demo-trading"],
];

const tools = [
  ["Risk Calculator", "Define your risk before entry"],
  ["Position Size", "Control loss before trade"],
  ["Trading Journal", "Track mistakes and lessons"],
  ["Market Terminal", "Charts, widgets and data"],
  ["Signal Performance", "Transparent signal stats"],
  ["Strategy Library", "Structured playbooks"],
];

const reasons = [
  "No guaranteed profit claims",
  "Risk-first learning culture",
  "Practical market examples",
  "Beginner-friendly roadmap",
  "Premium support ecosystem",
  "Transparent signal tracking",
];

const faqs = [
  ["Is profit guaranteed?", "No. Trading involves high risk. GSM Trading Lab provides education, analysis and support only."],
  ["Is this for beginners?", "Yes. The learning path starts from basics and moves toward practical analysis, futures concepts and risk management."],
  ["Is the fee monthly?", "The core premium offer is positioned as lifetime access with one-time payment, subject to admin approval."],
  ["Do I get signals?", "Free signals are public. Premium signals unlock after course or premium access approval."],
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="hero-bg" />
      <div className="matrix-glow" />

      <section className="page-shell grid min-h-[86vh] gap-10 pt-16 md:grid-cols-[1.05fr_.95fr] md:items-center lg:pt-20">
        <div className="animate-slide-up">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="badge">@gsmtradinglab</span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold text-slate-300 shadow-xl shadow-black/20">
              Crypto • Futures • Signals • Risk Management
            </span>
          </div>

          <h1 className="max-w-5xl text-5xl font-black leading-[0.92] tracking-tight md:text-7xl xl:text-8xl">
            Learn Crypto Trading with <span className="text-gradient">Mr. GSM</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            A premium trading education platform built for practical learning, market analysis, demo trading, transparent signals, and responsible risk management.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/register" className="btn-green">Start Learning</Link>
            <Link href="/signals" className="btn-dark">View Free Signals</Link>
            <Link href="/market-terminal" className="btn-dark">Open Market Terminal</Link>
          </div>

          <div className="mt-9 rounded-3xl border border-green-400/20 bg-green-400/10 p-4 text-sm leading-6 text-green-50 shadow-[0_0_40px_rgba(34,197,94,.08)]">
            <b>Risk First. Profit Later.</b> No fake returns, no guaranteed monthly income, no guaranteed recovery. Learn the market before risking real money.
          </div>
        </div>

        <div className="animate-float">
          <div className="terminal-card">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-300">GSM Command Center</p>
                <h2 className="mt-2 text-3xl font-black">Live Learning Terminal</h2>
              </div>
              <span className="rounded-2xl bg-green-400 px-4 py-2 text-xs font-black text-slate-950">ONLINE</span>
            </div>

            <div className="mt-8 space-y-3">
              {[
                ["BTCUSDT", "+2.48%", "Educational watchlist"],
                ["ETHUSDT", "Premium setup", "Use strict stop loss"],
                ["XAUUSD", "High volatility", "News risk warning"],
              ].map(([pair, status, note]) => (
                <div className="terminal-row" key={pair}>
                  <div>
                    <b>{pair}</b>
                    <p className="text-sm text-slate-400">{note}</p>
                  </div>
                  <span className="text-sm font-black text-green-300">{status}</span>
                </div>
              ))}
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3">
              {stats.map(([value, label]) => (
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4" key={label}>
                  <p className="text-3xl font-black text-green-300">{value}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell pt-0">
        <div className="section-head">
          <span className="badge">Platform</span>
          <h2 className="section-title mt-4">Everything a serious beginner needs</h2>
          <p className="mt-4 max-w-2xl text-slate-400">Education, signals, demo practice, journal discipline, market tools, resources, and admin-controlled premium access in one platform.</p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map(([title, desc, href]) => (
            <Link href={href} className="card group" key={title}>
              <div className="mb-5 h-12 w-12 rounded-2xl bg-green-400/10 ring-1 ring-green-400/20 transition group-hover:scale-110 group-hover:bg-green-400/20" />
              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="page-shell">
        <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <span className="badge">Market Tools</span>
            <h2 className="section-title mt-4">Practice like a trader before trading like one</h2>
            <p className="mt-5 leading-8 text-slate-400">Use calculators, terminal pages, demo trading, journal entries, and signal performance dashboards to build process-first habits.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/tools" className="btn-green">Explore Tools</Link>
              <Link href="/journal" className="btn-dark">Open Journal</Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {tools.map(([title, desc]) => (
              <div className="metric-card" key={title}>
                <p className="text-lg font-black text-white">{title}</p>
                <p className="mt-2 text-sm text-slate-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-950/90 p-6 shadow-2xl shadow-black/30 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div>
              <span className="badge">Why GSM</span>
              <h2 className="section-title mt-4">Built around survival, discipline and long-term growth</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {reasons.map((reason) => (
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 font-bold text-slate-200" key={reason}>✓ {reason}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell">
        <div className="section-head text-center">
          <span className="badge">Plans</span>
          <h2 className="section-title mt-4">Simple pricing. Serious learning.</h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="card">
            <p className="badge w-fit">Free</p>
            <h3 className="mt-5 text-3xl font-black">Community Access</h3>
            <p className="mt-3 text-slate-400">Free signals, basic resources, market tools, and learning previews.</p>
            <Link href="/signup" className="btn-dark mt-7 inline-block">Join Free</Link>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-green-400/30 bg-green-400/10 p-6 shadow-[0_0_70px_rgba(34,197,94,.12)]">
            <p className="badge w-fit">Premium Lifetime</p>
            <h3 className="mt-5 text-4xl font-black">$100</h3>
            <p className="mt-3 text-slate-300">Premium signals, beginner-to-advanced learning, demo practice, journal system, and lifetime support.</p>
            <div className="mt-5 grid gap-2 text-sm text-green-50">
              <p>✓ Premium signal access after approval</p>
              <p>✓ Technical and fundamental analysis learning</p>
              <p>✓ Risk management and psychology</p>
              <p>✓ Lifetime community support</p>
            </div>
            <Link href="/register" className="btn-green mt-7 inline-block">Join Premium</Link>
          </div>
        </div>
      </section>

      <section className="page-shell">
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map(([q, a]) => (
            <div className="card" key={q}>
              <h3 className="text-lg font-black">{q}</h3>
              <p className="mt-3 leading-7 text-slate-400">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
