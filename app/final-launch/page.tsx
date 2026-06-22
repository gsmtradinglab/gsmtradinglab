export default function FinalLaunchPage() {
  const checklist = [
    "Custom domain connected with HTTPS",
    "Firebase Authentication enabled",
    "Firestore security rules published",
    "Admin role configured",
    "Signup/Login tested",
    "Dashboard tested",
    "Payments and registration tested",
    "Signals and performance pages tested",
    "Risk disclaimers visible",
    "Mobile layout checked"
  ];
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 text-white">
      <section className="rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-slate-950 via-slate-900 to-black p-8 shadow-2xl">
        <p className="text-sm uppercase tracking-[0.35em] text-emerald-400">Phase 30</p>
        <h1 className="mt-4 text-4xl font-black md:text-6xl">GSM Trading Lab Final Launch</h1>
        <p className="mt-5 max-w-3xl text-slate-300">
          Final launch checklist for deploying GSM Trading Lab as a professional, risk-focused crypto trading education platform.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {checklist.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <span className="mr-2 text-emerald-400">✓</span>{item}
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-red-500/20 bg-red-500/10 p-5 text-sm text-red-100">
          Trading involves risk. GSM Trading Lab provides education, analysis, signals and learning support only. No profit is guaranteed.
        </div>
      </section>
    </main>
  );
}
