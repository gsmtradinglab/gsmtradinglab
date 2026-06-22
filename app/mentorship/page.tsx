import Link from "next/link";

const items = [
  ["One-to-One Guidance", "Personal chart review, mistake correction, risk planning, and strategy feedback with a structured learning path."],
  ["Batch Learning", "Group learning with live examples, discussion, Q&A, and beginner-friendly assignments."],
  ["Practical Review", "Students practice demo trading, journal every trade, and review discipline before risking real money."],
  ["Risk First", "Every learning session keeps focus on stop loss, position sizing, emotional control, and survival."],
];

export default function MentorshipPage() {
  return <main className="mx-auto max-w-6xl px-4 py-14">
    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-300">Mentorship</p>
    <h1 className="mt-3 text-4xl font-black md:text-6xl">Learn with structure, not random signals.</h1>
    <p className="mt-5 max-w-3xl text-slate-300">GSM Trading Lab mentorship is designed for beginners and struggling traders who need practical guidance, risk management discipline, and a clear trading education path.</p>
    <div className="mt-10 grid gap-5 md:grid-cols-2">
      {items.map(([title, text]) => <div key={title} className="card"><h2 className="text-xl font-bold text-green-300">{title}</h2><p className="mt-3 text-slate-300">{text}</p></div>)}
    </div>
    <section className="card mt-8">
      <h2 className="text-2xl font-bold">How mentorship works</h2>
      <ol className="mt-4 grid gap-3 text-slate-300 md:grid-cols-4">
        <li><b>1.</b> Register for a course.</li><li><b>2.</b> Upload payment proof.</li><li><b>3.</b> Admin verifies access.</li><li><b>4.</b> Start learning + demo practice.</li>
      </ol>
      <div className="mt-6 flex flex-wrap gap-3"><Link className="btn-green" href="/register">Register Now</Link><Link className="btn-dark" href="/contact">Ask a Question</Link></div>
    </section>
    <p className="mt-8 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-200">No profit is guaranteed. Mentorship is education, support, and practical guidance only.</p>
  </main>;
}
