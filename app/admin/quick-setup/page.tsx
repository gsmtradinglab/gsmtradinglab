import Link from "next/link";

export default function AdminQuickSetupPage() {
  const steps = [
    "Create/login with gsmtradinglab@gmail.com.",
    "Firebase Authentication → Users → copy the user UID.",
    "Firestore → users → open the same UID document.",
    "Set role = admin or superAdmin.",
    "Set status = active, courseAccess = premium, paymentStatus = verified.",
    "Logout from website, login again, then open /admin.",
    "Publish Firestore and Storage rules from the firebase folder.",
    "Add payment settings from Admin → Settings before accepting student payments.",
  ];

  return (
    <main className="mx-auto max-w-5xl px-4 py-14">
      <h1 className="text-4xl font-black">Admin Quick Setup</h1>
      <p className="mt-3 text-slate-300">Follow these steps when setting up GSM Trading Lab on a new Firebase/Vercel deployment.</p>
      <div className="mt-8 space-y-4">
        {steps.map((s, i) => <div className="card" key={s}><b>Step {i + 1}</b><p className="mt-2 text-slate-300">{s}</p></div>)}
      </div>
      <div className="mt-8 flex flex-wrap gap-3"><Link className="btn-green" href="/admin">Open Admin</Link><Link className="btn-dark" href="/system-status">System Status</Link></div>
    </main>
  );
}
