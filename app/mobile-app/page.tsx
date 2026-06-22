export default function MobileAppPage() {
  return (
    <main className="page-shell">
      <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div>
          <span className="badge">PWA Ready</span>
          <h1 className="section-title mt-4">Install GSM Trading Lab Like an App</h1>
          <p className="mt-4 text-slate-300">Use the platform from your phone with a mobile-app style experience. Add it to your home screen for quick access to signals, journal, dashboard, and resources.</p>
          <div className="mt-8 grid gap-3">
            {['Open site in Chrome or Safari','Tap browser menu / share button','Choose Add to Home Screen','Launch GSM Trading Lab from your phone'].map((x, i) => <div key={x} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 font-bold"><span className="text-green-300">0{i+1}</span> — {x}</div>)}
          </div>
        </div>
        <div className="card animate-float">
          <div className="mx-auto max-w-xs rounded-[2.4rem] border border-white/10 bg-slate-950 p-5 shadow-2xl shadow-green-950/20">
            <div className="mb-5 h-6 rounded-full bg-white/10" />
            <div className="rounded-3xl bg-gradient-to-br from-green-400/20 to-slate-900 p-5">
              <p className="text-sm text-green-300">GSM Mobile</p>
              <h2 className="mt-2 text-3xl font-black">Risk First</h2>
              <p className="mt-3 text-sm text-slate-300">Signals • Journal • Demo • Tools</p>
            </div>
            <div className="mt-5 grid gap-3">
              <div className="h-16 rounded-2xl bg-white/[0.06]" />
              <div className="h-16 rounded-2xl bg-white/[0.06]" />
              <div className="h-16 rounded-2xl bg-green-400/20" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
