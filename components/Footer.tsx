import Link from "next/link";

const links = [
  ["Start Here", "/start-here"],
  ["Courses", "/courses"],
  ["Signals", "/signals"],
  ["Risk Management", "/risk-management"],
  ["Market Tools", "/market-tools"],
  ["Blog", "/blog"],
  ["FAQ", "/faq"],
  ["Contact", "/contact"],
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-800 bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <div className="text-xl font-black"><span className="text-green-400">GSM</span> Trading Lab</div>
          <p className="mt-3 text-sm text-slate-400">Crypto trading education, market analysis, demo practice, and risk-management focused learning with Mr. GSM.</p>
        </div>
        <div>
          <h3 className="font-bold text-slate-100">Quick Links</h3>
          <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-400">
            {links.map(([label, href]) => <Link key={href} href={href} className="hover:text-green-400">{label}</Link>)}
          </div>
        </div>
        <div>
          <h3 className="font-bold text-slate-100">Risk Disclaimer</h3>
          <p className="mt-3 text-sm text-slate-400">Trading involves high risk. GSM Trading Lab provides education and analysis only. Profit is not guaranteed and users are responsible for their own financial decisions.</p>
        </div>
      </div>
      <div className="border-t border-slate-800 px-4 py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} GSM Trading Lab. All rights reserved.</div>
    </footer>
  );
}
