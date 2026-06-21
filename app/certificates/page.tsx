export default function CertificatesPage() {
  const steps = [
    "Complete beginner learning path",
    "Submit demo trading journal review",
    "Pass risk management checklist",
    "Request manual certificate approval from admin",
  ];
  return <main className="mx-auto max-w-6xl px-4 py-12">
    <h1 className="text-4xl font-black">Certificates</h1>
    <p className="mt-3 max-w-3xl text-slate-400">GSM Trading Lab certificates are learning-completion acknowledgements only. They do not guarantee profitability, employment, financial advisory status, or trading results.</p>
    <section className="mt-8 grid gap-4 md:grid-cols-2">
      {steps.map((item, i) => <div key={item} className="card"><div className="text-sm text-green-400">Step {i + 1}</div><h3 className="mt-2 font-bold">{item}</h3></div>)}
    </section>
    <div className="card mt-8">
      <h2 className="text-2xl font-bold">Certificate Policy</h2>
      <p className="mt-3 text-slate-400">Certificates should be issued manually after admin review. Keep a record of student name, course name, completion date, reviewer name, and certificate ID.</p>
    </div>
  </main>
}
