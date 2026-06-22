"use client";

import Link from "next/link";
import { useSiteSettings } from "@/components/useSiteSettings";

const stats = [
  ["5+", "Years Practical Market Experience"],
  ["24/7", "Community & Learning Support"],
  ["1%", "Risk Discipline Framework"],
  ["$10K", "Virtual Demo Practice Wallet"],
];

const services = [
  ["Premium Signal Center", "Educational setups with entries, SL, targets, visibility levels and transparent status tracking.", "/premium-signals"],
  ["Structured Courses", "Beginner to advanced roadmap covering TA, FA, futures, psychology and capital protection.", "/courses"],
  ["Command Center", "Market dashboard, watchlists, heatmaps, analysis terminal and decision-support panels.", "/command-center"],
  ["Demo + Journal", "Practice with virtual balance, track mistakes, measure psychology and build consistency before real risk.", "/demo-trading"],
];

const terminalRows = [
  ["BTCUSDT", "Risk Mode", "Wait for clean structure"],
  ["ETHUSDT", "Journal First", "Plan before execution"],
  ["XAUUSD", "News Risk", "Protect capital on volatility"],
  ["DXY", "Macro Bias", "Confirm before entry"],
];

const reasons = [
  "No fake profit screenshots",
  "No guaranteed income claims",
  "Risk-first trading culture",
  "Practical market execution mindset",
  "Demo practice before real capital",
  "Admin-controlled premium access",
  "Transparent signal tracking",
  "Community support and learning discipline",
];

const tools = [
  ["Risk Engine", "Control loss before entry", "/risk-engine"],
  ["Market Dashboard", "Command your watchlist", "/market-dashboard"],
  ["Trading Journal", "Measure decisions and emotions", "/journal"],
  ["AI Trade Review", "Review logic and risk", "/trade-review"],
  ["Portfolio Tracker", "Track exposure and allocation", "/portfolio-tracker"],
  ["News Terminal", "Follow high-impact events", "/news-terminal"],
];

export default function Home() {
  const { settings } = useSiteSettings();

  return (
    <main className="relative overflow-hidden">
      <div className="crypto-orbit" />
      <div className="hero-bg" />
      <div className="matrix-glow" />

      <section className="page-shell grid min-h-[88vh] gap-10 pt-14 md:grid-cols-[1.02fr_.98fr] md:items-center lg:pt-20">
        <div className="animate-slide-up">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="badge">{settings.brandHandle}</span>
            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
              {settings.heroKicker}
            </span>
          </div>

          <h1 className="max-w-5xl text-5xl font-black leading-[0.9] tracking-tight md:text-7xl xl:text-8xl">
            {settings.heroTitle.split(".").filter(Boolean).map((part, index) => (
              <span key={part} className={index === 1 ? "text-gradient" : ""}>
                {part.trim()}{index < settings.heroTitle.split(".").filter(Boolean).length - 1 ? ". " : ""}
              </span>
            ))}
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            {settings.heroSubtitle}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link href={settings.primaryCtaHref} className="btn-green">{settings.primaryCtaLabel}</Link>
            <Link href={settings.secondaryCtaHref} className="btn-dark">{settings.secondaryCtaLabel}</Link>
            <Link href="/command-center" className="btn-dark">Open Command Center</Link>
          </div>

          <div className="mt-9 rounded-[2rem] border border-emerald-400/25 bg-gradient-to-r from-emerald-400/12 via-cyan-400/5 to-white/[0.03] p-5 text-sm leading-7 text-emerald-50 shadow-[0_0_60px_rgba(16,185,129,.12)]">
            <b>Motivation:</b> {settings.motivationLine}
          </div>
        </div>

        <div className="animate-float">
          <div className="terminal-card">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-300">Live Crypto Operating System</p>
                <h2 className="mt-2 text-3xl font-black">Market Discipline Terminal</h2>
              </div>
              <span className="rounded-2xl bg-emerald-400 px-4 py-2 text-xs font-black text-slate-950">ONLINE</span>
            </div>

            <div className="mt-8 space-y-3">
              {terminalRows.map(([pair, status, note]) => (
                <div className="terminal-row" key={pair}>
                  <div>
                    <b>{pair}</b>
                    <p className="text-sm text-slate-400">{note}</p>
                  </div>
                  <span className="text-sm font-black text-emerald-300">{status}</span>
                </div>
              ))}
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3">
              {stats.map(([value, label]) => (
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4" key={label}>
                  <p className="text-3xl font-black text-emerald-300">{value}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell pt-0">
        <div className="section-head">
          <span className="badge">Trading Ecosystem</span>
          <h2 className="section-title mt-4">A modern crypto platform built around control, not hype</h2>
          <p className="mt-4 max-w-2xl text-slate-400">Public pages, premium access, signals, payments, courses, content, tools and social links are designed to be controlled from admin and Firebase CMS.</p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map(([title, desc, href]) => (
            <Link href={href} className="crypto-card group" key={title}>
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-emerald-400/10 ring-1 ring-emerald-400/20 transition group-hover:scale-110 group-hover:bg-emerald-400/20">▰</div>
              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="page-shell">
        <div className="rounded-[2.2rem] border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-950/95 to-emerald-950/20 p-6 shadow-2xl shadow-black/30 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div>
              <span className="badge">Why This Platform</span>
              <h2 className="section-title mt-4">The goal is survival first, performance second</h2>
              <p className="mt-5 leading-8 text-slate-400">Crypto rewards patience and punishes emotional decisions. GSM Trading Lab is structured to build rules, process, journal habits and risk discipline.</p>
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
        <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <span className="badge">Tools</span>
            <h2 className="section-title mt-4">Your market command stack</h2>
            <p className="mt-5 leading-8 text-slate-400">Use dashboards, journals, calculators, market terminals, AI review pages and watchlists to reduce random execution.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/market-dashboard" className="btn-green">Open Market Dashboard</Link>
              <Link href="/tools" className="btn-dark">Open Calculators</Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {tools.map(([title, desc, href]) => (
              <Link href={href} className="metric-card" key={title}>
                <p className="text-lg font-black text-white">{title}</p>
                <p className="mt-2 text-sm text-slate-400">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell">
        <div className="rounded-[2.2rem] border border-emerald-400/20 bg-emerald-400/10 p-8 text-center shadow-[0_0_80px_rgba(16,185,129,.10)] md:p-12">
          <p className="badge mx-auto w-fit">Join The Discipline Network</p>
          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-black md:text-6xl">Stop chasing signals. Start building a complete trading process.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-slate-300">Follow {settings.brandHandle} on every platform and join the WhatsApp channel for updates, learning and community support.</p>
          <div className="mt-8 flex justify-center gap-3">
            <a className="btn-green" href={settings.whatsappUrl} target="_blank" rel="noreferrer">Join WhatsApp</a>
            <Link className="btn-dark" href="/pricing">View Membership</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
