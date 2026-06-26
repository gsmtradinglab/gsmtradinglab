import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

const groups = [
  {
    title: "Platform",
    links: [["Courses", "/courses"], ["Pricing", "/pricing"], ["Signals", "/signals"], ["Performance", "/signal-performance"]],
  },
  {
    title: "Tools",
    links: [["Market Dashboard", "/market-dashboard"], ["Command Center", "/command-center"], ["Calculators", "/tools"], ["Demo Trading", "/demo-trading"], ["Journal", "/journal"]],
  },
  {
    title: "Support",
    links: [["Help Center", "/help-center"], ["FAQ", "/faq"], ["Contact", "/contact"], ["Community Rules", "/community"], ["Risk Disclaimer", "/risk-disclaimer"]],
  },
  {
    title: "Legal",
    links: [["Terms", "/terms"], ["Privacy", "/privacy"], ["Refund Policy", "/refund-policy"], ["Compliance", "/compliance"], ["Status", "/status"]],
  },
];

const socials = ["Instagram", "Facebook", "TikTok", "YouTube", "X", "LinkedIn", "TradingView", "Telegram"];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_2fr]">
          <div className="rounded-3xl border border-emerald-400/15 bg-white/[0.03] p-6 shadow-2xl shadow-black/20">
            <BrandLogo variant="footer" href="/" />
            <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
              Master risk, build discipline, and understand markets before risking real capital. GSM Trading Lab provides education, analysis, demo practice, and responsible trading support.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a className="btn-green px-4 py-2" href="https://whatsapp.com/channel/0029Vb7BRlOKQuJHPFUykb0g" target="_blank" rel="noreferrer">Join WhatsApp</a>
              <Link className="btn-dark px-4 py-2" href="/signup">Create Account</Link>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {groups.map((group) => (
              <div key={group.title}>
                <h3 className="font-black text-slate-100">{group.title}</h3>
                <div className="mt-3 grid gap-2 text-sm text-slate-400">
                  {group.links.map(([label, href]) => <Link key={href} href={href} className="transition hover:text-green-400">{label}</Link>)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-green-300">Official Social Handles</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {socials.map((s) => <span key={s} className="rounded-full border border-white/10 bg-slate-900/80 px-4 py-2 text-sm text-slate-300">{s}: <b className="text-white">@gsmtradinglab</b></span>)}
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-red-400/20 bg-red-400/10 p-5 text-sm leading-6 text-red-50">
          <b>Risk warning:</b> Trading involves high risk. GSM Trading Lab provides education, market analysis, demo tools, and support only. No profit is guaranteed. Always use strict risk management.
        </div>

        <div className="mt-8 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row">
          <p>© 2026 GSM Trading Lab. All rights reserved.</p>
          <p>Official username: <span className="text-green-300">@gsmtradinglab</span></p>
        </div>
      </div>
    </footer>
  );
}
