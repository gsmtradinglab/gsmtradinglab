import Link from "next/link";

export default function Page() {
  return (
    <main className="page-shell">
      <section className="rounded-[2rem] border border-emerald-400/20 bg-gradient-to-br from-emerald-400/10 via-slate-900/80 to-cyan-400/5 p-8 shadow-2xl shadow-black/30">
        <p className="badge w-fit">GSM Trading Lab</p>
        <h1 className="mt-5 text-4xl font-black md:text-6xl">System Status</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">Current production platform, Firebase authentication, Firestore, dashboard and admin systems status overview.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link className="btn-green" href="/dashboard">Open Dashboard</Link>
          <Link className="btn-dark" href="/contact">Contact Support</Link>
        </div>
      </section>
    </main>
  );
}
