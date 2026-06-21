export default function BackupGuide(){
 return <main className="mx-auto max-w-5xl px-4 py-12 space-y-6">
  <section className="card p-8"><p className="text-sm font-bold uppercase tracking-[0.3em] text-green-400">Admin Ops</p><h1 className="mt-3 text-4xl font-black">Backup & Recovery Guide</h1><p className="mt-4 text-slate-300">Operational guide for protecting GSM Trading Lab data.</p></section>
  <section className="card p-6"><h2 className="text-2xl font-black">Recommended Routine</h2><ul className="mt-4 list-disc space-y-2 pl-6 text-slate-300"><li>Export users, registrations, payments, and signals weekly.</li><li>Download important payment proofs and resource files monthly.</li><li>Keep GitHub repository updated after every website change.</li><li>Before major updates, download a ZIP backup of the current GitHub repository.</li><li>Only trusted admins should manage Firebase rules and Vercel environment variables.</li></ul></section>
 </main>
}
