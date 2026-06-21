const items = [
  ["Foundation", "Signup, login, dashboard, admin access, Firestore security."],
  ["Signals", "Free, member, and premium educational signals with status tracking."],
  ["Practice", "Demo trading simulator, trading journal, and calculators."],
  ["Learning", "Courses, resources, blogs, guides, onboarding, and help center."],
  ["Operations", "Payments, registrations, compliance, content planning, and launch checklists."],
  ["Next", "Advanced analytics, live classes, certificate workflow, and notification automation."]
];
export default function RoadmapPage(){
 return <main className="mx-auto max-w-5xl px-4 py-12 space-y-6">
  <section className="card p-8"><p className="text-sm font-bold uppercase tracking-[0.3em] text-green-400">Product Roadmap</p><h1 className="mt-3 text-4xl font-black">GSM Trading Lab Build Roadmap</h1><p className="mt-4 text-slate-300">A clear view of the platform modules and future growth direction.</p></section>
  <section className="space-y-4">{items.map(([title, text], i)=><div className="card flex gap-4 p-6" key={title}><div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-green-400 font-black text-slate-950">{i+1}</div><div><h2 className="text-xl font-black">{title}</h2><p className="mt-1 text-slate-300">{text}</p></div></div>)}</section>
 </main>
}
