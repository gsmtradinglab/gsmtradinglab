import Link from "next/link";

export default function Page() {
  return (
    <main className="page-shell">
      <section className="rounded-[2rem] border border-green-400/20 bg-gradient-to-br from-green-400/10 via-slate-950 to-slate-900 p-8 md:p-12">
        <span className="badge">Phase 26 Admin</span>
        <h1 className="mt-5 max-w-4xl text-4xl font-black md:text-6xl">Admin Event Manager</h1>
        <p className="mt-5 max-w-3xl leading-8 text-slate-300">Manage webinars, class schedules, live events, and community sessions.</p>
        <div className="mt-8 flex flex-wrap gap-3"><a href="/dashboard" className="btn-green">Open Dashboard</a><a href="/contact" className="btn-dark">Get Support</a></div>
      </section>
      <section className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div className="card"><h2 className="text-2xl font-black">Create events</h2><p className="mt-3 text-slate-400">Add title, date, access level, link, and description.</p><p className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-green-300">Event setup</p></div>
        <div className="card"><h2 className="text-2xl font-black">Manage attendance</h2><p className="mt-3 text-slate-400">Track registered students and follow-up status.</p><p className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-green-300">Student ops</p></div>
        <div className="card"><h2 className="text-2xl font-black">Publish calendar</h2><p className="mt-3 text-slate-400">Show public or premium-only events on the calendar page.</p><p className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-green-300">CMS ready</p></div>
      </section>
    </main>
  );
}
