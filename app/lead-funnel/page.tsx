const steps = [
  "Visitor reads landing page",
  "Visitor joins WhatsApp / registers",
  "Admin reviews lead and course interest",
  "Payment proof is uploaded",
  "Admin approves access",
  "Student starts learning and journaling",
];

export default function LeadFunnelPage() {
  return (
    <main className="page-shell">
      <span className="badge">Growth System</span>
      <h1 className="mt-5 section-title">Student Lead Funnel</h1>
      <p className="mt-4 max-w-3xl text-slate-300">A clean operational funnel for converting traffic into registered students and premium members.</p>
      <section className="mt-10 grid gap-4">
        {steps.map((step, i) => (
          <div className="terminal-row" key={step}>
            <span className="rounded-2xl bg-green-400 px-4 py-2 font-black text-slate-950">{i + 1}</span>
            <span className="font-semibold text-slate-200">{step}</span>
          </div>
        ))}
      </section>
    </main>
  );
}
