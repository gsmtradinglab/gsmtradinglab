"use client";

import { useEffect, useMemo, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db, firebaseConfigured } from "@/lib/firebase";

export default function SignalPerformancePage() {
  const [signals, setSignals] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      if (!firebaseConfigured || !db) return;
      const snap = await getDocs(query(collection(db, "signals"), where("visibility", "==", "public")));
      setSignals(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    }
    load();
  }, []);

  const stats = useMemo(() => {
    const total = signals.length;
    const active = signals.filter((s) => s.status === "Active").length;
    const wins = signals.filter((s) => String(s.status || "").startsWith("TP")).length;
    const losses = signals.filter((s) => s.status === "Stop Loss Hit").length;
    const breakEven = signals.filter((s) => s.status === "Break Even").length;
    const cancelled = signals.filter((s) => s.status === "Cancelled").length;
    const counted = wins + losses + breakEven;
    const winRate = counted ? Math.round((wins / counted) * 100) : 0;
    return { total, active, wins, losses, breakEven, cancelled, counted, winRate };
  }, [signals]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-4xl font-black">Signal Performance</h1>
      <p className="mt-3 max-w-3xl text-slate-300">Transparent public stats calculated from real public signal records. Past performance does not guarantee future results.</p>
      <section className="mt-8 grid gap-5 md:grid-cols-4">
        <div className="card"><b>Total Public Signals</b><p className="text-3xl text-green-400">{stats.total}</p></div>
        <div className="card"><b>Active</b><p className="text-3xl text-amber-300">{stats.active}</p></div>
        <div className="card"><b>Winning Signals</b><p className="text-3xl text-green-400">{stats.wins}</p></div>
        <div className="card"><b>SL Hit</b><p className="text-3xl text-red-300">{stats.losses}</p></div>
        <div className="card"><b>Break Even</b><p className="text-3xl text-slate-200">{stats.breakEven}</p></div>
        <div className="card"><b>Cancelled</b><p className="text-3xl text-slate-200">{stats.cancelled}</p></div>
        <div className="card md:col-span-2"><b>Win Rate</b><p className="text-3xl text-green-400">{stats.winRate}%</p><p className="mt-2 text-sm text-slate-400">Formula: TP1 or higher ÷ counted closed signals. Cancelled signals are not counted.</p></div>
      </section>
      <section className="mt-8 grid gap-4">
        {signals.slice(0, 20).map((s) => <div className="card" key={s.id}><div className="flex flex-wrap items-center justify-between gap-3"><b>{s.title}</b><span>{s.status}</span></div><p className="mt-2 text-slate-300">{s.marketType} | {s.pair} | {s.direction}</p></div>)}
        {!signals.length && <div className="card">No public signals posted yet.</div>}
      </section>
    </main>
  );
}
