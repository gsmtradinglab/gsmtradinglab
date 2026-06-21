import Link from "next/link";

const downloads = [
  ["Trading Plan Template", "Use before taking any trade."],
  ["Risk Management Checklist", "Confirm SL, risk %, entry reason, and invalidation."],
  ["Beginner Crypto Notes", "Core concepts for new learners."],
  ["Journal Review Sheet", "Track mistakes, emotions, and lessons."],
];

export default function DownloadsPage() {
  return <main className="mx-auto max-w-6xl px-4 py-12">
    <h1 className="text-4xl font-black">Student Downloads</h1>
    <p className="mt-3 text-slate-400">Templates and checklists for responsible trading practice. Admin can later replace these cards with real PDF files in the Resources CMS.</p>
    <section className="mt-8 grid gap-4 md:grid-cols-2">
      {downloads.map(([title, desc]) => <div key={title} className="card">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="mt-2 text-slate-400">{desc}</p>
        <Link className="btn-dark mt-4 inline-block px-4 py-2" href="/resources">Open Resources</Link>
      </div>)}
    </section>
  </main>
}
