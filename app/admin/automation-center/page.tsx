const automations = [
  ["New Registration", "Notify admin and create CRM lead."],
  ["Payment Uploaded", "Mark payment as pending review."],
  ["Payment Approved", "Grant premium access automatically."],
  ["New Signal", "Notify premium members."],
  ["Support Ticket", "Route to support workflow."],
];

export default function AdminAutomationCenterPage() {
  return (
    <main className="page-shell">
      <span className="badge">Admin Ops</span>
      <h1 className="mt-5 section-title">Automation Center</h1>
      <p className="mt-4 max-w-3xl text-slate-300">A blueprint for future Firebase Functions, email alerts, WhatsApp routing, and member notifications.</p>
      <section className="mt-10 grid gap-5 md:grid-cols-2">
        {automations.map(([title, text]) => (
          <div className="card" key={title}>
            <h2 className="text-2xl font-black">{title}</h2>
            <p className="mt-3 text-slate-300">{text}</p>
            <span className="mt-5 inline-flex rounded-full border border-yellow-300/20 bg-yellow-300/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-yellow-200">Ready for backend hook</span>
          </div>
        ))}
      </section>
    </main>
  );
}
