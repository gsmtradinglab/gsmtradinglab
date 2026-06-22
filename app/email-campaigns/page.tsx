const campaigns = [
  ["Welcome Sequence", "Introduces GSM rules, risk disclaimer, and learning roadmap"],
  ["Course Enrollment", "Guides new students from registration to payment verification"],
  ["Premium Signals Education", "Explains how to read signals with SL and 1% risk"],
  ["Weekly Market Digest", "Summarizes market watchlist, news, and student reminders"],
];

export default function EmailCampaignsPage() {
  return (
    <main className="page-shell">
      <span className="badge">Retention Engine</span>
      <h1 className="mt-5 text-4xl font-black md:text-6xl">Email Campaign System</h1>
      <p className="mt-5 max-w-3xl leading-8 text-slate-400">Campaign blueprint for onboarding, education, payment follow-ups, and weekly community engagement.</p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">{campaigns.map(([title, desc])=><div className="card" key={title}><h2 className="text-2xl font-black">{title}</h2><p className="mt-4 text-slate-400">{desc}</p></div>)}</div>
    </main>
  );
}
