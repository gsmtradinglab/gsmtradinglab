export const metadata = { title: "Admin Launch Content" };

const tasks = [
  "Add payment numbers and wallet details from Admin Payments Settings.",
  "Create 3 free signals with real educational analysis.",
  "Create 1 premium sample signal visible only to premium users.",
  "Add at least 5 learning resources before launch.",
  "Publish first market analysis post.",
  "Add real FAQ answers and remove placeholders.",
  "Verify all legal pages before running ads.",
  "Test signup, login, payment proof, dashboard, and admin access.",
];

export default function AdminLaunchContentPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <section className="card p-8">
        <p className="text-sm font-semibold text-green-400">Admin</p>
        <h1 className="mt-3 text-4xl font-black">Launch Content Setup</h1>
        <p className="mt-4 text-slate-300">Use this checklist before announcing GSM Trading Lab publicly.</p>
      </section>
      <section className="mt-8 grid gap-4">
        {tasks.map((task, i) => (
          <div key={task} className="card flex gap-4 p-5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 font-black text-slate-950">{i + 1}</span>
            <p className="text-slate-200">{task}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
