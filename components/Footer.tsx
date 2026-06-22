"use client";

import Link from "next/link";
import { useSiteSettings } from "@/components/useSiteSettings";
import { socialLinks } from "@/lib/site";

const groups = [
  {
    title: "Platform",
    links: [
      ["Start Here", "/start-here"],
      ["Courses", "/courses"],
      ["Pricing", "/pricing"],
      ["Signals", "/signals"],
      ["Performance", "/signal-performance"],
    ],
  },
  {
    title: "Markets",
    links: [
      ["Command Center", "/command-center"],
      ["Market Dashboard", "/market-dashboard"],
      ["AI Terminal", "/ai-terminal"],
      ["News Terminal", "/news-terminal"],
      ["Watchlist", "/watchlist"],
    ],
  },
  {
    title: "Student",
    links: [
      ["Dashboard", "/dashboard"],
      ["Demo Trading", "/demo-trading"],
      ["Trading Journal", "/journal"],
      ["Downloads", "/downloads"],
      ["Certificates", "/certificates"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["Risk Disclaimer", "/risk-disclaimer"],
      ["Terms", "/terms"],
      ["Privacy", "/privacy"],
      ["Refund Policy", "/refund-policy"],
      ["Compliance", "/compliance"],
    ],
  },
];

export default function Footer() {
  const { settings } = useSiteSettings();

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-emerald-400/10 bg-[#02040b]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent" />
      <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_2fr]">
          <div className="rounded-[2rem] border border-emerald-400/15 bg-gradient-to-br from-emerald-400/10 via-white/[0.03] to-cyan-400/5 p-6 shadow-2xl shadow-black/30">
            <div className="text-2xl font-black"><span className="text-emerald-400">GSM</span> Trading Lab</div>
            <p className="mt-2 text-xs font-black uppercase tracking-[0.28em] text-emerald-300">{settings.brandHandle}</p>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">{settings.footerText}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <a className="btn-green px-4 py-2" href={settings.whatsappUrl} target="_blank" rel="noreferrer">Join WhatsApp</a>
              <Link className="btn-dark px-4 py-2" href="/signup">Create Account</Link>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {groups.map((group) => (
              <div key={group.title}>
                <h3 className="font-black text-slate-100">{group.title}</h3>
                <div className="mt-3 grid gap-2 text-sm text-slate-400">
                  {group.links.map(([label, href]) => <Link key={href} href={href} className="transition hover:text-emerald-300">{label}</Link>)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.03] p-5">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-slate-400">A-Z Social Media Handles</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {socialLinks.map(([label, key]) => (
              <a key={key} href={settings[key]} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-sm font-bold text-slate-300 transition hover:border-emerald-400/40 hover:text-emerald-300">
                {label} · @gsmtradinglab
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-[2rem] border border-red-400/20 bg-red-500/10 p-5 text-sm leading-7 text-red-100">
          <b>Risk Warning:</b> Trading crypto, forex, gold, indices and derivatives involves high risk. GSM Trading Lab provides education, analysis, tools and community support only. No profit, recovery, return or signal outcome is guaranteed.
        </div>
      </div>
    </footer>
  );
}
