"use client";

import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

const stats = [
  ["Risk First", "Capital protection before profit chasing"],
  ["24/7", "Community and learning support"],
  ["1%", "Per-trade risk discipline"],
  ["Lifetime", "Learning access after approval"],
];

const services = [
  ["Premium Signals", "Educational setups with entry zone, stop loss, targets, and transparent status tracking.", "/signals"],
  ["Trading Education", "Beginner-to-advanced learning path: TA, FA, futures basics, psychology, and risk management.", "/courses"],
  ["Demo Practice", "Practice with virtual balance, track PnL, and build discipline before risking real money.", "/demo-trading"],
  ["Market Command", "Charts, watchlists, news terminal, calculators, and trading journal in one ecosystem.", "/market-dashboard"],
];

const tools = ["Risk Calculator", "Position Size", "Trading Journal", "Market Terminal", "Signal Performance", "Strategy Library"];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="hero-bg" />
      <div className="matrix-glow" />

      <section className="page-shell grid min-h-[86vh] gap-10 pt-12 md:grid-cols-[1fr_.9fr] md:items-center lg:pt-16">
        <div className="animate-slide-up">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="badge">@gsmtradinglab</span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold text-slate-300">Crypto • Forex • Stocks • Commodities • Indices</span>
          </div>

          <h1 className="max-w-5xl text-5xl font-black leading-[0.92] tracking-tight md:text-7xl xl:text-8xl">
            Master Risk. <span className="text-gradient">Build Discipline.</span> Read Markets.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            A premium trading education platform for disciplined learners: market analysis, demo practice, transparent signals, and risk-first execution under GSM Trading Lab.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/signup" className="btn-green">Start Your Journey</Link>
            <Link href="/signals" className="btn-dark">View Signals</Link>
            <Link href="/market-dashboard" className="btn-dark">Open Market Dashboard</Link>
          </div>

          <div className="mt-9 rounded-3xl border border-green-400/20 bg-green-400/10 p-4 text-sm leading-6 text-green-50 shadow-[0_0_40px_rgba(34,197,94,.08)]">
            <b>Knowledge first. Discipline always.</b> No fake returns, no guaranteed monthly income, and no blind signals. Learn the process before risking capital.
          </div>
        </div>

        <div className="animate-float">
          <div className="terminal-card text-center">
            <BrandLogo variant="hero" href="/" priority className="mx-auto" />
            <div className="mt-6 grid grid-cols-2 gap-3">
              {stats.map(([value, label]) => (
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 text-left" key={label}>
                  <p className="text-2xl font-black text-green-300">{value}</p>
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
          <h2 className="section-title mt-4">A complete crypto learning ecosystem</h2>
          <p className="mt-4 max-w-2xl text-slate-400">Everything important stays clean: fewer buttons, stronger branding, better navigation, and serious trading tools under one roof.</p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map(([title, desc, href]) => (
            <Link href={href} className="card group" key={title}>
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-green-400/10 ring-1 ring-green-400/20 transition group-hover:scale-110 group-hover:bg-green-400/20">📈</div>
              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="page-shell">
        <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <span className="badge">Trading Tools</span>
            <h2 className="section-title mt-4">Practice like a trader before trading like one</h2>
            <p className="mt-5 leading-8 text-slate-400">Use calculators, terminal pages, demo trading, journal entries, and signal performance dashboards to build process-first habits.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/tools" className="btn-green">Explore Tools</Link>
              <Link href="/journal" className="btn-dark">Open Journal</Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {tools.map((title) => <div className="metric-card" key={title}><p className="text-lg font-black text-white">{title}</p><p className="mt-2 text-sm text-slate-400">Control risk, track decisions, and improve discipline.</p></div>)}
          </div>
        </div>
      </section>
    </main>
  );
}
