export default function SecurityChecklistPage() {
  const items = [
    "Email/Password and Google login enabled in Firebase Authentication.",
    "Authorized domains include gsmtradinglab.com, www.gsmtradinglab.com, gsmtradinglab.vercel.app, and localhost.",
    "Firestore rules published from firebase/firestore.rules.",
    "Storage rules published from firebase/storage.rules.",
    "Admin role assigned only manually in Firestore or through secure server-side logic.",
    "Sensitive keys are not stored in NEXT_PUBLIC variables.",
    "Cloudflare SSL mode is Full (Strict).",
    "Always Use HTTPS enabled in Cloudflare.",
    "Vercel Production, Preview, and Development env variables are configured.",
    "No fake signal stats, fake testimonials, or guaranteed profit claims are published.",
  ];
  return <main className="mx-auto max-w-5xl px-4 py-14"><h1 className="text-4xl font-black">Security Checklist</h1><p className="mt-3 text-slate-300">Final checks before promoting GSM Trading Lab publicly.</p><div className="mt-8 grid gap-4">{items.map((x,i)=><div className="card" key={x}><b>{i+1}. {x}</b></div>)}</div></main>;
}
