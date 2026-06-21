export default function AdminAuditLogGuide(){
 return <main className="mx-auto max-w-5xl px-4 py-12 space-y-6">
  <section className="card p-8"><p className="text-sm font-bold uppercase tracking-[0.3em] text-green-400">Admin</p><h1 className="mt-3 text-4xl font-black">Audit Log Guide</h1><p className="mt-4 text-slate-300">Use this page as the admin SOP for tracking sensitive actions.</p></section>
  <section className="grid gap-4 md:grid-cols-2">
    {[
      ["Track role changes", "Whenever a user is promoted to admin or downgraded, note who changed it and why."],
      ["Track payment decisions", "Approved/rejected payments should include admin note, proof check, and date."],
      ["Track signal edits", "Closed signal entry, TP, SL, or status edits should be documented."],
      ["Track content publishing", "Blogs, analysis, announcements, and legal page updates should be reviewed before publishing."]
    ].map(([a,b])=><div className="card p-6" key={a}><h2 className="font-black">{a}</h2><p className="mt-2 text-slate-300">{b}</p></div>)}
  </section>
 </main>
}
