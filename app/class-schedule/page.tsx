import Link from "next/link";

const rows = [
  ["Online One-to-One", "Flexible", "Beginner to Advanced", "Manual confirmation"],
  ["Online Batch", "Evening batches", "Beginner friendly", "Admin announcement"],
  ["Physical Class", "By location/batch", "Practical chart training", "Manual confirmation"],
  ["Market Review", "Weekly", "Signal review + risk lessons", "Premium/course students"],
];

export default function ClassSchedulePage() {
  return <main className="mx-auto max-w-6xl px-4 py-14">
    <h1 className="text-4xl font-black md:text-6xl">Class Schedule</h1>
    <p className="mt-4 max-w-3xl text-slate-300">Use this page as a public schedule guide. Final timing is confirmed manually by GSM Trading Lab after registration and payment verification.</p>
    <div className="card mt-10 overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead className="text-slate-300"><tr><th className="p-3">Mode</th><th className="p-3">Timing</th><th className="p-3">Level</th><th className="p-3">Access</th></tr></thead>
        <tbody>{rows.map(r => <tr key={r[0]} className="border-t border-slate-800">{r.map(c => <td key={c} className="p-3 text-slate-300">{c}</td>)}</tr>)}</tbody>
      </table>
    </div>
    <div className="mt-6 flex gap-3"><Link className="btn-green" href="/register">Reserve Seat</Link><Link className="btn-dark" href="/contact">Contact Support</Link></div>
  </main>;
}
