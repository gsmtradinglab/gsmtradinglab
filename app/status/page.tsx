export default function StatusPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <p className="text-emerald-400 font-bold">System Status</p>
      <h1 className="mt-3 text-4xl font-black">Platform Status</h1>
      <div className="grid gap-4 mt-8 md:grid-cols-3">
        <div className="card"><p className="text-sm text-slate-400">Website</p><h2 className="text-2xl font-black text-emerald-400">Operational</h2></div>
        <div className="card"><p className="text-sm text-slate-400">Login System</p><h2 className="text-2xl font-black text-emerald-400">Operational</h2></div>
        <div className="card"><p className="text-sm text-slate-400">Dashboard</p><h2 className="text-2xl font-black text-emerald-400">Operational</h2></div>
      </div>
    </main>
  );
}
