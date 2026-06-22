const queue = ["Market analysis draft", "Blog post draft", "Risk note", "Signal explanation", "Student announcement", "Weekly performance recap"];
export default function AdminContentQueuePage() {
  return (
    <main className="page-shell">
      <span className="badge">Content Ops</span>
      <h1 className="mt-5 text-4xl font-black md:text-6xl">Content Queue</h1>
      <p className="mt-5 max-w-3xl leading-8 text-slate-400">Organize educational content before publishing across website, WhatsApp, and social platforms.</p>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {queue.map((item) => <div className="metric-card" key={item}>✓ {item}</div>)}
      </div>
    </main>
  );
}
