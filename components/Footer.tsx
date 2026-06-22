import Link from "next/link";

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
    title: "Tools",
    links: [
      ["Market Dashboard", "/market-dashboard"],
      ["Command Center", "/command-center"],
      ["Calculators", "/tools"],
      ["Demo Trading", "/demo-trading"],
      ["Journal", "/journal"],
    ],
  },
  {
    title: "Support",
    links: [
      ["Help Center", "/help-center"],
      ["FAQ", "/faq"],
      ["Contact", "/contact"],
      ["Community Rules", "/community"],
      ["Risk Disclaimer", "/risk-disclaimer"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["Terms", "/terms"],
      ["Privacy", "/privacy"],
      ["Refund Policy", "/refund-policy"],
      ["Compliance", "/compliance"],
      ["System Status", "/status"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_2fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <div className="text-2xl font-black"><span className="text-green-400">GSM</span> Trading Lab</div>
            <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">Crypto trading education, market analysis, demo practice, premium signals, and risk-management focused learning with Mr. GSM.</p>
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
        <div className="mt-10 rounded-3xl border border-red-400/20 bg-red-500/5 p-5 text-sm leading-6 text-slate-400">
          <b className="text-red-200">Risk Disclaimer:</b> Trading crypto, futures, forex, commodities, and financial markets involves high risk. GSM Trading Lab provides education, analysis, support, and signals only. Profit is not guaranteed. You are fully responsible for your own financial decisions.
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} GSM Trading Lab. All rights reserved.</div>
    </footer>
  );
}
