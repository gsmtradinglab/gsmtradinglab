const controls = [
  ["Pending", "New payment proof submitted and waiting for admin review."],
  ["Approved", "Payment verified, premium/course access granted."],
  ["Rejected", "Proof invalid or details mismatch; admin note required."],
  ["Suspended", "Risk rules ignored or account requires manual review."],
];
export default function AdminMembershipControlPage() {
  return (
    <main className="page-shell">
      <span className="badge">Admin Pro</span>
      <h1 className="mt-5 text-4xl font-black md:text-6xl">Membership Control Center</h1>
      <p className="mt-5 max-w-3xl leading-8 text-slate-400">A clear admin guide for payment status, premium access, and member lifecycle management.</p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {controls.map(([title, desc]) => <div className="card" key={title}><h2 className="text-2xl font-black">{title}</h2><p className="mt-3 text-slate-400">{desc}</p></div>)}
      </div>
    </main>
  );
}
