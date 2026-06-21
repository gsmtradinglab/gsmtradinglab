export default function AdminSignalSopPage() {
  return <main className="mx-auto max-w-5xl px-4 py-12">
    <h1 className="text-4xl font-black">Signal Publishing SOP</h1>
    <ul className="card mt-8 list-disc space-y-3 pl-8 text-slate-300">
      <li>Every signal must include entry logic, stop loss, targets, and risk note.</li>
      <li>Do not publish guaranteed-profit wording.</li>
      <li>Closed signal status must match real result: TP, SL, break-even, cancelled, or manual close.</li>
      <li>Do not edit entry, SL, or TP after closing unless correcting a typo with audit note.</li>
      <li>Public performance must be calculated from real signal records only.</li>
    </ul>
  </main>
}
