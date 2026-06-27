import Image from "next/image";
import Link from "next/link";

const groups = [
  { title: "Platform", links: [["Courses", "/courses"], ["Pricing", "/pricing"], ["Signals", "/signals"], ["Market Dashboard", "/market-dashboard"]] },
  { title: "Practice", links: [["Demo Trading", "/demo-trading"], ["Journal", "/journal"], ["Risk Tools", "/tools"], ["Portfolio", "/portfolio-tracker"]] },
  { title: "Company", links: [["About", "/about"], ["Contact", "/contact"], ["Community", "/community"], ["FAQ", "/faq"]] },
  { title: "Legal", links: [["Risk Disclaimer", "/risk-disclaimer"], ["Terms", "/terms"], ["Privacy", "/privacy"], ["Refund Policy", "/refund-policy"]] },
];

const socials = ["Instagram", "TikTok", "YouTube", "Facebook", "X", "TradingView", "LinkedIn", "Telegram"];

export default function Footer() {
  return (
    <footer className="enterprise-footer">
      <div className="footer-inner">
        <div className="footer-brand-panel">
          <Image src="/gsm-logo-dark.png" alt="GSM Trading Lab" width={96} height={96} className="footer-logo" />
          <div>
            <h2>GSM Trading Lab</h2>
            <p>Trading education, market analysis, premium signals, demo practice and risk-management focused learning.</p>
          </div>
          <div className="footer-socials">
            {socials.map((x) => <span key={x}>{x}: <b>@gsmtradinglab</b></span>)}
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <a className="btn-green px-4 py-2" href="https://whatsapp.com/channel/0029Vb7BRlOKQuJHPFUykb0g" target="_blank" rel="noreferrer">Join WhatsApp</a>
            <Link className="btn-dark px-4 py-2" href="/signup">Create Account</Link>
          </div>
        </div>

        <div className="footer-links-grid">
          {groups.map((group) => (
            <div key={group.title}>
              <h3>{group.title}</h3>
              <div>
                {group.links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-risk">
        <b>Risk Disclaimer:</b> Trading crypto, futures, forex, commodities, indices and derivatives involves high risk. GSM Trading Lab provides education, analysis, support and signals only. Profit is not guaranteed.
      </div>

      <div className="footer-copy">© {new Date().getFullYear()} GSM Trading Lab. Knowledge first • Discipline always.</div>
    </footer>
  );
}
