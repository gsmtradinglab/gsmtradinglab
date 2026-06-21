export default function MarketingChecklistPage() {
  const items = ["Update homepage CTA", "Post one educational market lesson", "Share risk disclaimer", "Share WhatsApp channel link", "Check contact form replies", "Publish one blog or resource weekly", "Review testimonials before publishing", "Avoid guaranteed profit language"];
  return (
    <main className="mx-auto max-w-5xl px-4 py-14">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">Admin Marketing</p>
      <h1 className="mt-3 text-4xl font-black">Marketing Checklist</h1>
      <div className="card mt-8 p-6">
        <ul className="space-y-3 text-slate-300">
          {items.map((item) => <li key={item}>✅ {item}</li>)}
        </ul>
      </div>
    </main>
  );
}
