export const metadata = { title: "Student Success | GSM Trading Lab Admin", description: "Student success operations for GSM Trading Lab." };

const pipeline = [
  ["New Lead", "Student asks about course, signals, or mentorship."],
  ["Registration", "Student submits registration and preferred learning mode."],
  ["Payment Review", "Admin verifies proof and marks status."],
  ["Access Granted", "Premium/course access is unlocked manually by admin."],
  ["Onboarding", "Student receives roadmap, risk disclaimer, and learning checklist."],
  ["Progress Review", "Admin checks journal, demo practice, and questions."],
];

export default function StudentSuccessPage() {
  return (
    <main className="page-shell">
      <span className="badge">Admin Ops</span>
      <h1 className="mt-5 section-title">Student Success Pipeline</h1>
      <p className="mt-4 max-w-3xl text-slate-300">Use this page to manage the journey from lead to active premium student without losing compliance or support quality.</p>
      <section className="mt-10 grid gap-5 md:grid-cols-2">
        {pipeline.map(([title, text], i) => <div className="metric-card" key={title}><p className="text-sm font-black text-green-300">Stage {i + 1}</p><h2 className="mt-2 text-2xl font-black">{title}</h2><p className="mt-3 leading-7 text-slate-300">{text}</p></div>)}
      </section>
    </main>
  );
}
