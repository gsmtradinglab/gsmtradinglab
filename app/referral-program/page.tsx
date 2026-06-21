import Link from "next/link";

export default function ReferralProgramPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-14">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">Community Growth</p>
      <h1 className="mt-3 text-4xl font-black md:text-5xl">Referral Program</h1>
      <p className="mt-4 max-w-3xl text-slate-300">Invite serious learners to GSM Trading Lab. Referral rewards, if offered, must be approved manually by the admin and must not be promoted as guaranteed income.</p>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <div className="card p-6"><h2 className="font-bold">1. Invite</h2><p className="mt-2 text-sm text-slate-400">Share the course registration link with people who want to learn responsibly.</p></div>
        <div className="card p-6"><h2 className="font-bold">2. Verify</h2><p className="mt-2 text-sm text-slate-400">Admin verifies student registration and payment manually.</p></div>
        <div className="card p-6"><h2 className="font-bold">3. Reward</h2><p className="mt-2 text-sm text-slate-400">Any referral reward is manually reviewed and approved by GSM Trading Lab.</p></div>
      </div>

      <div className="card mt-8 p-6">
        <h2 className="text-xl font-bold">Compliance Rule</h2>
        <p className="mt-2 text-sm text-slate-300">Referral messaging must focus on education, learning, and risk management. Do not promise profit, fixed returns, or account recovery.</p>
        <Link href="/register" className="btn-green mt-5 inline-block px-5 py-3">Open Registration</Link>
      </div>
    </main>
  );
}
