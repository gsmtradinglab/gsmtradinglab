export const metadata = { title: "Admin Analytics Pro" };

export default function AdminAnalyticsProPage() {
  const stats = ["User Growth", "Premium Access", "Payment Pipeline", "Signal Performance", "Blog Reach", "Support Load"];
  return (
    <main className="page-shell">
      <span className="badge">Admin Pro</span>
      <h1 className="section-title mt-5">Admin Analytics Hub</h1>
      <div className="mt-8 soft-grid">
        {stats.map((s, i) => <div className="metric-card" key={s}><p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">{s}</p><p className="mt-4 text-4xl font-black text-green-300">{i === 0 ? "Live" : "0"}</p><p className="mt-4 text-sm text-slate-400">Connect this card to Firestore analytics as your data grows.</p></div>)}
      </div>
    </main>
  );
}
