import Link from "next/link";

const steps = [
  ["Choose course", "Online course or physical course depending on your preferred learning style."],
  ["Submit registration", "Provide contact details, experience level, learning mode, and preferred time slot."],
  ["Submit payment proof", "Use the manual payment page and upload screenshot/reference after payment."],
  ["Admin verification", "Admin reviews payment and grants course/premium access manually."],
  ["Start learning", "Use dashboard, resources, demo simulator, journal, and signals responsibly."],
];

export default function AdmissionsPage() {
  return <main className="mx-auto max-w-6xl px-4 py-14">
    <h1 className="text-4xl font-black md:text-6xl">Admissions Process</h1>
    <p className="mt-4 max-w-3xl text-slate-300">A simple admission flow for GSM Trading Lab students. This page helps new users understand exactly what to do after signup.</p>
    <div className="mt-10 grid gap-4 md:grid-cols-5">
      {steps.map(([title, text], i) => <div key={title} className="card"><div className="text-3xl font-black text-green-300">{i+1}</div><h2 className="mt-3 font-bold">{title}</h2><p className="mt-2 text-sm text-slate-400">{text}</p></div>)}
    </div>
    <section className="mt-8 grid gap-5 md:grid-cols-3">
      <Link className="card" href="/courses"><h3 className="font-bold">Compare Courses</h3><p className="mt-2 text-sm text-slate-400">Online and physical course options.</p></Link>
      <Link className="card" href="/register"><h3 className="font-bold">Submit Registration</h3><p className="mt-2 text-sm text-slate-400">Send your enrollment request.</p></Link>
      <Link className="card" href="/payments"><h3 className="font-bold">Upload Payment Proof</h3><p className="mt-2 text-sm text-slate-400">Submit payment screenshot/reference.</p></Link>
    </section>
  </main>;
}
