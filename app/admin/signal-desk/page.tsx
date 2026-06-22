const tasks = ["Review pending setups", "Verify SL and TP fields", "Check risk disclaimer", "Publish to correct visibility", "Update status after market movement", "Export weekly performance"];
export default function AdminSignalDeskPage() {
  return (
    <main className="page-shell">
      <span className="badge">Admin Pro</span>
      <h1 className="mt-5 text-4xl font-black md:text-6xl">Admin Signal Desk</h1>
      <p className="mt-5 max-w-3xl leading-8 text-slate-400">Operational control checklist for signal managers before publishing or updating educational signals.</p>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {tasks.map((task, i) => <div className="metric-card" key={task}><b>Step {i+1}</b><p className="mt-2 text-slate-300">{task}</p></div>)}
      </div>
    </main>
  );
}
