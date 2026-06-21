export default function StudentProgressPage() {
  const areas = ["Course lessons", "Demo trades", "Journal entries", "Risk checklist", "Admin feedback"];
  return <main className="mx-auto max-w-6xl px-4 py-12">
    <h1 className="text-4xl font-black">Student Progress</h1>
    <p className="mt-3 max-w-3xl text-slate-400">A simple progress hub for students. Use this page to guide learners toward demo practice and consistent journaling before they risk real capital.</p>
    <section className="mt-8 grid gap-4 md:grid-cols-5">
      {areas.map((area) => <div key={area} className="card"><h2 className="font-bold">{area}</h2><p className="mt-2 text-sm text-slate-400">Track manually in this launch version.</p></div>)}
    </section>
    <div className="card mt-8"><h2 className="text-2xl font-bold">Recommended Completion Standard</h2><p className="mt-3 text-slate-400">Minimum 20 demo trades, completed journal notes, and a clear risk plan before moving to live trading decisions.</p></div>
  </main>
}
