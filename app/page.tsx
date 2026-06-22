import Link from "next/link";

const stats = [
  ["5+", "Years Experience"],
  ["24/7", "Learning Support"],
  ["$100", "Lifetime Online Access"],
  ["1%", "Risk Rule Focus"]
];

const services = [
  { title: "Premium Signals", text: "Educational market setups with entry, stop loss, take profits, risk notes, and transparent status tracking.", icon: "📈" },
  { title: "Crypto Courses", text: "Beginner to advanced technical analysis, fundamentals, futures basics, psychology, and real chart practice.", icon: "🎓" },
  { title: "Demo Trading", text: "Practice before risking capital. Record decisions, review mistakes, and build discipline with a demo workflow.", icon: "🧪" },
  { title: "Mentorship", text: "One-to-one and physical learning options for students who need direct correction and practical guidance.", icon: "🤝" }
];

const reasons = ["Risk management first", "No fake profit guarantees", "Practical chart learning", "Premium community support", "Signals with disclaimers", "Lifetime learning model"];

const faqs = [
  ["Is profit guaranteed?", "No. Trading is risky. GSM Trading Lab provides education, market analysis and learning support only."],
  ["Is this beginner friendly?", "Yes. The course starts from basics and moves toward technical analysis, futures basics, risk management and psychology."],
  ["Is the fee monthly?", "The online course is promoted as lifetime access for a one-time $100 fee, subject to admin approval and access status."],
  ["Do I get premium signals?", "Premium access can include educational premium signals after payment verification and admin approval."]
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section className="relative mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl gap-10 px-4 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-6">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(34,197,94,0.18),transparent_30%),radial-gradient(circle_at_85%_30%,rgba(59,130,246,0.12),transparent_35%)]" />
        <div className="absolute left-1/2 top-8 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl animate-pulse-slow" />

        <div className="animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_16px_#34d399]" /> @gsmtradinglab • Risk First
          </div>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Learn Crypto Trading with <span className="text-gradient">Mr. GSM</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Practical crypto education, technical analysis, fundamental awareness, futures trading basics, premium educational signals, demo practice, and lifetime learning support under GSM Trading Lab.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/register" className="btn-green shadow-glow">Start Learning</Link>
            <Link href="/signals" className="btn-dark">View Free Signals</Link>
            <Link href="/market-tools" className="btn-dark">Market Tools</Link>
          </div>
          <p className="mt-5 max-w-2xl rounded-2xl border border-red-400/20 bg-red-500/10 p-4 text-sm text-red-100">
            Trading involves high risk. No profit, fixed return, or loss recovery is guaranteed. Learn before risking real money.
          </p>
        </div>

        <div className="relative animate-float">
          <div className="premium-card p-5 sm:p-7">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-sm text-slate-400">Market Education Terminal</p>
                <h2 className="text-2xl font-black">Risk First. Profit Later.</h2>
              </div>
              <div className="rounded-2xl bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-300">LIVE</div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {["BTCUSDT", "ETHUSDT", "XAUUSD", "EURUSD"].map((pair, i) => (
                <div key={pair} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-bold">{pair}</span>
                    <span className={i % 2 === 0 ? "text-emerald-300" : "text-red-300"}>{i % 2 === 0 ? "+2.4%" : "-0.8%"}</span>
                  </div>
                  <div className="mt-4 h-16 rounded-xl bg-[linear-gradient(135deg,rgba(16,185,129,0.2),transparent_60%),repeating-linear-gradient(90deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_18px)]" />
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5 text-emerald-100">
              Use stop loss. Risk max 1% per trade. Avoid revenge trading. Protect capital first.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={label} className="premium-card p-6 text-center transition hover:-translate-y-1 hover:border-emerald-400/30">
              <div className="text-4xl font-black text-emerald-300">{value}</div>
              <div className="mt-2 text-sm font-semibold text-slate-400">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <div className="mb-10 max-w-3xl">
          <p className="section-kicker">What You Get</p>
          <h2 className="section-title">A complete learning ecosystem for responsible traders.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((item) => (
            <div key={item.title} className="premium-card group p-6 transition hover:-translate-y-2 hover:border-emerald-400/40">
              <div className="mb-5 text-4xl transition group-hover:scale-110">{item.icon}</div>
              <h3 className="text-xl font-black">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="section-kicker">Why GSM Trading Lab</p>
            <h2 className="section-title">Built around survival, discipline, and practical market learning.</h2>
            <p className="mt-5 text-slate-300 leading-7">Mr. GSM created GSM Trading Lab to help beginners and struggling traders avoid costly mistakes by learning risk management, psychology and real market structure before taking large risk.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/about" className="btn-dark">About GSM</Link>
              <Link href="/founder" className="btn-green">Who is Mr. GSM?</Link>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 font-semibold text-slate-200">
                <span className="mr-2 text-emerald-300">✓</span>{reason}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="premium-card p-8">
            <p className="section-kicker">Free Access</p>
            <h3 className="mt-3 text-3xl font-black">Start Free</h3>
            <p className="mt-3 text-slate-400">Explore free signals, public resources and market tools.</p>
            <ul className="mt-6 space-y-3 text-slate-300">
              <li>✓ Free educational signals</li>
              <li>✓ Basic market tools</li>
              <li>✓ Community access</li>
            </ul>
            <Link href="/signup" className="btn-dark mt-8 inline-flex">Create Free Account</Link>
          </div>
          <div className="premium-card relative overflow-hidden border-emerald-400/30 p-8 shadow-glow">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-emerald-400/20 blur-3xl" />
            <p className="section-kicker">Premium Lifetime</p>
            <h3 className="mt-3 text-3xl font-black">$100 Online Course</h3>
            <p className="mt-3 text-slate-300">Lifetime learning support, premium signals access, demo tools, journal, and practical guidance after admin approval.</p>
            <ul className="mt-6 space-y-3 text-slate-200">
              <li>✓ Beginner to advanced learning</li>
              <li>✓ Premium signals access</li>
              <li>✓ Demo simulator + journal</li>
              <li>✓ Lifetime community support</li>
            </ul>
            <Link href="/register" className="btn-green mt-8 inline-flex">Join Premium</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <div className="mb-10 text-center">
          <p className="section-kicker justify-center">FAQ</p>
          <h2 className="section-title mx-auto">Clear answers before you join.</h2>
        </div>
        <div className="mx-auto grid max-w-4xl gap-4">
          {faqs.map(([q, a]) => (
            <details key={q} className="premium-card p-5 open:border-emerald-400/30">
              <summary className="cursor-pointer text-lg font-bold">{q}</summary>
              <p className="mt-3 text-slate-400">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 pt-10 lg:px-6">
        <div className="premium-card bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-emerald-500/10 p-8 text-center lg:p-12">
          <h2 className="text-3xl font-black md:text-5xl">Ready to learn before you risk?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">Join GSM Trading Lab and build your foundation with discipline, risk management, and practical market education.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/register" className="btn-green">Register Now</Link>
            <a href="https://whatsapp.com/channel/0029Vb7BRlOKQuJHPFUykb0g" target="_blank" className="btn-dark">Join WhatsApp</a>
          </div>
        </div>
      </section>
    </main>
  );
}
