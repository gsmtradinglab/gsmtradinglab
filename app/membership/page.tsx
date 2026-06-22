const plans = [
  { name: "Free Member", price: "$0", items: ["Free signals", "Basic resources", "Community updates", "Risk education"] },
  { name: "Premium Lifetime", price: "$100", items: ["Premium signals", "Basic to advanced learning", "Demo practice", "Trading journal", "Lifetime support"] },
  { name: "Physical Course", price: "$150", items: ["In-person learning", "Chart training", "Batch learning", "One-to-one option", "Premium access"] },
];

export default function MembershipPage() {
  return (
    <main className="page-shell">
      <span className="badge">Membership</span>
      <h1 className="mt-5 section-title">Choose Your GSM Access</h1>
      <p className="mt-4 max-w-3xl text-slate-300">Transparent education-focused access. No fixed return claims, no guaranteed profit, and no fake performance promises.</p>
      <section className="mt-10 grid gap-5 lg:grid-cols-3">
        {plans.map((plan) => (
          <div className="card" key={plan.name}>
            <h2 className="text-2xl font-black">{plan.name}</h2>
            <p className="mt-3 text-4xl font-black text-green-300">{plan.price}</p>
            <ul className="mt-6 space-y-3 text-slate-300">
              {plan.items.map((item) => <li key={item}>✓ {item}</li>)}
            </ul>
            <a className="btn-green mt-8 inline-flex" href="/register">Apply Now</a>
          </div>
        ))}
      </section>
    </main>
  );
}
