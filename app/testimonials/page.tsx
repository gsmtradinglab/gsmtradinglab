export default function TestimonialsPage() {
  const placeholder = [
    "I learned how to control risk before entering trades.",
    "The demo practice and journal helped me understand my mistakes.",
    "The best part is the focus on survival, discipline, and learning."
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <section className="mb-10 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">Student Feedback</p>
        <h1 className="mt-3 text-4xl font-black md:text-5xl">Testimonials</h1>
        <p className="mt-4 text-slate-300">This page is prepared for approved real student reviews. Do not publish fake reviews or fake income claims.</p>
      </section>

      <div className="grid gap-5 md:grid-cols-3">
        {placeholder.map((text, index) => (
          <article key={text} className="card p-6">
            <div className="text-yellow-300">★★★★★</div>
            <p className="mt-4 text-slate-300">“{text}”</p>
            <p className="mt-5 text-sm text-slate-500">Placeholder Review {index + 1}</p>
            <p className="mt-1 text-xs text-slate-600">Replace from admin only after real approval.</p>
          </article>
        ))}
      </div>

      <section className="card mt-8 p-6">
        <h2 className="text-xl font-bold">Publishing Rule</h2>
        <p className="mt-2 text-sm text-slate-300">Only publish testimonials from real students with permission. Do not use testimonials that claim guaranteed profit, fixed returns, or guaranteed loss recovery.</p>
      </section>
    </main>
  );
}
