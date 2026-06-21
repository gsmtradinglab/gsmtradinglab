export default function AdminOperatingManualPage() {
  const sections = [
    ["Daily", "Check new users, pending payments, course registrations, support tickets, and active signals."],
    ["Signals", "Post signals only with entry, stop loss, risk note, and educational context. Never edit closed signal results without audit notes."],
    ["Payments", "Verify payment proof manually, update payment status, and grant access only after confirmation."],
    ["Content", "Publish blogs, resources, and analysis with compliance-safe wording. Avoid unrealistic claims."],
    ["Security", "Keep admin accounts limited. Remove access from inactive admins. Review Firestore rules after major changes."],
  ];
  return (
    <main className="mx-auto max-w-5xl px-4 py-14">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">Admin SOP</p>
      <h1 className="mt-3 text-4xl font-black">Operating Manual</h1>
      <div className="mt-8 space-y-4">
        {sections.map(([title, text]) => <div key={title} className="card p-6"><h2 className="text-xl font-bold">{title}</h2><p className="mt-2 text-slate-300">{text}</p></div>)}
      </div>
    </main>
  );
}
