export const metadata = { title: "Compliance Vault | GSM Trading Lab Admin", description: "Admin compliance and documentation hub." };

const docs = [
  ["Risk Disclaimer", "Confirm public and dashboard disclaimers are visible and updated."],
  ["Refund Policy", "Review special refund cases manually and keep written notes."],
  ["Account Management Inquiries", "Never promise guaranteed profit, fixed return, recovery, or fee recovery."],
  ["Payment Proofs", "Verify screenshots manually before granting premium access."],
  ["Signal Records", "Do not edit closed signal entries without clear audit notes."],
  ["Student Support", "Keep replies educational, risk-aware, and compliance-safe."],
];

export default function ComplianceVaultPage() {
  return (
    <main className="page-shell">
      <span className="badge">Admin Compliance</span>
      <h1 className="mt-5 section-title">Compliance Vault</h1>
      <p className="mt-4 max-w-3xl text-slate-300">A control center for keeping GSM Trading Lab legally safe, education-first, and transparent.</p>
      <section className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {docs.map(([title, text]) => <div className="card" key={title}><h2 className="text-xl font-black">{title}</h2><p className="mt-3 leading-7 text-slate-300">{text}</p></div>)}
      </section>
    </main>
  );
}
