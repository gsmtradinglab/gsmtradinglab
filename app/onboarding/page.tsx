import Link from "next/link";

const steps = [
  ["Create your account", "Signup with email/password or Google and complete your basic profile."],
  ["Register for a course", "Select Online or Physical course, then choose one-to-one or batch learning."],
  ["Submit payment proof", "Upload screenshot/reference and wait for manual verification by admin."],
  ["Start safely", "Use the demo simulator, journal, calculators, and resources before risking real money."],
  ["Use signals responsibly", "Every signal is educational. Always use stop loss and risk management."],
];

export default function OnboardingPage() {
  return <main className="mx-auto max-w-6xl px-4 py-14">
    <p className="text-sm font-bold uppercase tracking-widest text-green-400">Student Onboarding</p>
    <h1 className="mt-3 text-4xl font-black">How to Start with GSM Trading Lab</h1>
    <p className="mt-4 max-w-3xl text-slate-300">Follow this simple flow to join the platform, submit your course request, unlock access, and start learning with risk-management discipline.</p>
    <div className="mt-10 grid gap-5 md:grid-cols-2">
      {steps.map(([title, text], i) => <div className="card" key={title}>
        <div className="text-sm font-bold text-green-400">STEP {i + 1}</div>
        <h2 className="mt-2 text-xl font-bold">{title}</h2>
        <p className="mt-2 text-slate-300">{text}</p>
      </div>)}
    </div>
    <div className="mt-10 flex flex-wrap gap-3">
      <Link href="/signup" className="btn-green">Create Account</Link>
      <Link href="/register" className="btn-dark">Register Course</Link>
      <Link href="/payments" className="btn-dark">Upload Payment Proof</Link>
    </div>
  </main>;
}
