import Link from "next/link";

const checks = [
  "Homepage, signup, login, dashboard, admin, and contact pages open correctly.",
  "Firebase Auth Email/Password and Google login are enabled.",
  "Firestore rules are published after every ZIP update.",
  "Admin user role is set to admin and status is active.",
  "Payment proof upload accepts only image/PDF and max 10MB.",
  "Public, member, and premium signal visibility is tested with different accounts.",
  "All public claims avoid guaranteed profit, fixed return, and recovery promises.",
  "Domain opens with HTTPS and Cloudflare/Vercel SSL are valid.",
];

export default function QualityCheckPage() {
  return <main className="mx-auto max-w-6xl px-4 py-14">
    <p className="text-sm font-bold uppercase tracking-widest text-green-400">Admin QA</p>
    <h1 className="mt-3 text-4xl font-black">Pre-Launch Quality Check</h1>
    <p className="mt-4 text-slate-300">Use this checklist before announcing GSM Trading Lab publicly.</p>
    <div className="mt-10 grid gap-4 md:grid-cols-2">
      {checks.map((c, i) => <div className="card" key={c}><p className="text-sm text-green-400">CHECK {i + 1}</p><p className="mt-2 text-slate-200">{c}</p></div>)}
    </div>
    <div className="mt-8 flex flex-wrap gap-3"><Link href="/admin" className="btn-green">Admin Panel</Link><Link href="/launch-checklist" className="btn-dark">Launch Checklist</Link><Link href="/security-checklist" className="btn-dark">Security Checklist</Link></div>
  </main>;
}
