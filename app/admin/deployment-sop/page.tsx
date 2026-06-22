export default function DeploymentSOPPage() {
  return <main className="mx-auto max-w-5xl px-4 py-14">
    <h1 className="text-4xl font-black">Deployment SOP</h1>
    <p className="mt-4 text-slate-300">Use this checklist whenever uploading new GSM Trading Lab code to GitHub and Vercel.</p>
    <div className="mt-8 grid gap-4 md:grid-cols-2">
      {[
        ["1. Upload clean ZIP", "Extract ZIP and replace repository files. Do not upload ZIP file itself as the website source."],
        ["2. Commit to main", "Commit changes on GitHub main branch and confirm latest commit is visible."],
        ["3. Redeploy Vercel", "Use redeploy without existing build cache if old code appears."],
        ["4. Check env variables", "Confirm Firebase NEXT_PUBLIC keys exist in Production, Preview, and Development."],
        ["5. Publish Firebase rules", "Paste latest Firestore/Storage rules after each major phase."],
        ["6. Test live pages", "Signup, login, dashboard, admin, signals, payments, and forms must be tested."],
      ].map(([t,d]) => <div className="card" key={t}><h2 className="font-bold text-green-300">{t}</h2><p className="mt-2 text-sm text-slate-400">{d}</p></div>)}
    </div>
  </main>;
}
