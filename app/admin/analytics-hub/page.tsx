const cards = ["Users", "Registrations", "Payments", "Signals", "Journals", "Support"];
export default function AdminAnalyticsHubPage() {
  return (
    <main className="page-shell">
      <span className="badge">Admin Ops</span>
      <h1 className="section-title mt-4">Analytics Hub</h1>
      <p className="mt-4 max-w-3xl text-slate-300">A management overview layout for operating GSM Trading Lab. Connect these cards to Firestore metrics as the platform scales.</p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => <div key={card} className="metric-card"><p className="text-slate-400">Total {card}</p><h2 className="mt-3 text-5xl font-black text-green-300">0</h2><p className="mt-3 text-sm text-slate-500">Live metric placeholder</p></div>)}
      </div>
    </main>
  );
}
