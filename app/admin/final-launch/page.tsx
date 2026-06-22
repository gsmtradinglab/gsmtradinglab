export default function AdminFinalLaunchPage() {
  const items = [
    "Verify admin access and role fields",
    "Check all public pages after deployment",
    "Publish latest Firestore rules",
    "Publish latest Storage rules",
    "Create first test registration",
    "Create first test payment proof",
    "Create first free signal",
    "Create first premium signal",
    "Check mobile menu and dashboard links",
    "Backup GitHub repo and Firebase data"
  ];
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 text-white">
      <h1 className="text-4xl font-black">Admin Final Launch Checklist</h1>
      <p className="mt-3 text-slate-300">Use this page before final public promotion.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {items.map((item, index) => (
          <div key={item} className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
            <div className="text-sm text-emerald-400">Step {index + 1}</div>
            <div className="mt-2 font-semibold">{item}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
