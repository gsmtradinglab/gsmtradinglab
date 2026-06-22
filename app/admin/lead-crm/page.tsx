const columns = ["New Leads", "Contacted", "Payment Pending", "Approved"];

export default function AdminLeadCRMPage() {
  return (
    <main className="page-shell">
      <span className="badge">Admin</span>
      <h1 className="mt-5 section-title">Lead CRM Board</h1>
      <p className="mt-4 text-slate-300">Operational board for managing registrations, follow-ups, payment status, and access approval.</p>
      <section className="mt-10 grid gap-5 lg:grid-cols-4">
        {columns.map((col) => (
          <div className="card min-h-72" key={col}>
            <h2 className="text-xl font-black">{col}</h2>
            <div className="mt-5 rounded-2xl border border-dashed border-white/15 p-5 text-sm text-slate-400">Connect this column to Firestore leads/registrations in the next automation phase.</div>
          </div>
        ))}
      </section>
    </main>
  );
}
