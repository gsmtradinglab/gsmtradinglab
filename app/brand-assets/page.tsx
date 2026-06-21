export const metadata = { title: "Brand Assets" };

const links = [
  ["Facebook", "https://facebook.com/gsmtradinglab"],
  ["Instagram", "https://instagram.com/gsmtradinglab"],
  ["TikTok", "https://tiktok.com/@gsmtradinglab"],
  ["YouTube", "https://youtube.com/@gsmtradinglab"],
  ["X / Twitter", "https://x.com/gsmtradinglab"],
  ["LinkedIn", "https://linkedin.com/company/gsmtradinglab"],
];

export default function BrandAssetsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <section className="card p-8">
        <p className="text-sm font-semibold text-green-400">GSM Trading Lab</p>
        <h1 className="mt-3 text-4xl font-black">Brand Assets</h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          Official brand identity, social handles, disclaimers, and copy blocks for consistent public communication.
        </p>
      </section>

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="card p-6">
          <h2 className="text-2xl font-bold">Core Identity</h2>
          <div className="mt-4 space-y-3 text-slate-300">
            <p><b className="text-white">Brand:</b> GSM Trading Lab</p>
            <p><b className="text-white">Founder:</b> Mr. GSM</p>
            <p><b className="text-white">Username:</b> @gsmtradinglab</p>
            <p><b className="text-white">Mission:</b> Learn before you trade. Protect capital first.</p>
          </div>
        </div>
        <div className="card p-6">
          <h2 className="text-2xl font-bold">Official Social Links</h2>
          <div className="mt-4 grid gap-3 text-sm">
            {links.map(([name, url]) => <a key={name} className="rounded-xl border border-slate-800 p-3 text-slate-300 hover:border-green-500" href={url}>{name}: @gsmtradinglab</a>)}
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="card p-6">
          <h3 className="text-xl font-bold">Short Disclaimer</h3>
          <p className="mt-3 text-slate-300">Trading involves risk. GSM Trading Lab provides education and analysis only. No profit is guaranteed.</p>
        </div>
        <div className="card p-6">
          <h3 className="text-xl font-bold">Risk Rule</h3>
          <p className="mt-3 text-slate-300">Use stop loss, avoid over-leverage, and never risk more than you can afford to lose.</p>
        </div>
        <div className="card p-6">
          <h3 className="text-xl font-bold">Brand Tone</h3>
          <p className="mt-3 text-slate-300">Professional, honest, beginner-friendly, risk-management focused, and practical.</p>
        </div>
      </section>
    </main>
  );
}
