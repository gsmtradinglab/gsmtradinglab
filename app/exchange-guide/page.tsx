export const metadata = { title: "Exchange Guide | GSM Trading Lab", description: "Beginner safe exchange setup guide for crypto trading students." };

const steps = [
  ["Choose a reputable exchange", "Use an exchange with strong security, liquidity, customer support, and clear deposit/withdrawal options."],
  ["Complete KYC safely", "Use your own identity, secure email, and never share verification codes with anyone."],
  ["Enable security", "Turn on 2FA, withdrawal whitelist, anti-phishing code, and strong password protection."],
  ["Start with demo or spot", "Do not jump into futures until you understand leverage, liquidation, and stop loss discipline."],
  ["Keep records", "Track deposits, withdrawals, screenshots, trade notes, and journal entries for learning and risk control."],
];

export default function ExchangeGuidePage() {
  return (
    <main className="page-shell">
      <span className="badge">Exchange Safety</span>
      <h1 className="mt-5 section-title">Crypto Exchange Setup Guide</h1>
      <p className="mt-4 max-w-3xl text-slate-300">A beginner-friendly checklist to help GSM Trading Lab students set up exchange accounts responsibly before trading real money.</p>
      <section className="mt-10 grid gap-5 md:grid-cols-2">
        {steps.map(([title, text], i) => (
          <div className="card" key={title}>
            <span className="badge">Step {i + 1}</span>
            <h2 className="mt-4 text-2xl font-black">{title}</h2>
            <p className="mt-3 leading-7 text-slate-300">{text}</p>
          </div>
        ))}
      </section>
      <section className="mt-10 rounded-[2rem] border border-red-400/20 bg-red-500/10 p-6 text-red-100">
        <h2 className="text-2xl font-black">Important warning</h2>
        <p className="mt-3 leading-7">GSM Trading Lab does not guarantee exchange safety, profit, loss recovery, or account recovery. Always protect your account and take your own financial decisions responsibly.</p>
      </section>
    </main>
  );
}
