export default function IncidentResponsePage() {
  return <main className="mx-auto max-w-5xl px-4 py-14">
    <h1 className="text-4xl font-black">Incident Response Guide</h1>
    <p className="mt-4 text-slate-300">Admin guide for urgent issues such as broken login, failed deploy, payment disputes, wrong access, or public content mistakes.</p>
    <div className="mt-8 grid gap-4">
      {[
        ["Build failed", "Read Vercel logs, identify file/line, fix TypeScript/import issue, commit, redeploy without cache."],
        ["Login/signup issue", "Check Firebase Auth providers, authorized domains, env variables, and browser console errors."],
        ["Wrong premium access", "Verify user document, payment record, payment proof, and admin note before changing access."],
        ["Signal mistake", "Update status quickly, add admin note, never edit historical result without audit note."],
        ["Security concern", "Disable affected user/admin, update rules if needed, rotate secrets, and document action."],
      ].map(([t,d]) => <section className="card" key={t}><h2 className="text-xl font-bold text-red-300">{t}</h2><p className="mt-2 text-slate-300">{d}</p></section>)}
    </div>
  </main>;
}
