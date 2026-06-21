"use client";

import { useEffect, useMemo, useState } from "react";
import { addDoc, collection, getDocs, query, where, deleteDoc, doc } from "firebase/firestore";
import { db, firebaseConfigured } from "@/lib/firebase";
import { useAuth } from "@/lib/auth";

export default function JournalPage() {
  const { user, loading } = useAuth();
  const [items, setItems] = useState<any[]>([]);
  const [msg, setMsg] = useState("");
  const [form, setForm] = useState({ pair: "BTCUSDT", marketType: "Crypto Futures", direction: "Long", entry: "", exit: "", stopLoss: "", takeProfit: "", positionSize: "", riskAmount: "", result: "Win", emotionalState: "Calm", mistakeMade: "", lessonLearned: "", notes: "" });

  async function load() {
    if (!firebaseConfigured || !db || !user) return;
    const snap = await getDocs(query(collection(db, "tradingJournals"), where("userId", "==", user.uid), orderBy("createdAt", "desc")));
    setItems(snap.docs.map((d) => ({ id: d.id, ...d.data() })).sort((a:any,b:any)=>String(b.createdAt||"").localeCompare(String(a.createdAt||""))));
  }
  useEffect(() => { load(); }, [user]);

  const stats = useMemo(() => {
    const wins = items.filter(i => i.result === "Win").length;
    const losses = items.filter(i => i.result === "Loss").length;
    const be = items.filter(i => i.result === "Break Even").length;
    return { wins, losses, be, winRate: items.length ? wins / items.length * 100 : 0 };
  }, [items]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!firebaseConfigured || !db || !user) { setMsg("Please login first or add Firebase keys."); return; }
    const now = new Date().toISOString();
    await addDoc(collection(db, "tradingJournals"), { ...form, userId: user.uid, createdAt: now, updatedAt: now });
    setMsg("Journal entry saved.");
    setForm({ ...form, entry: "", exit: "", stopLoss: "", takeProfit: "", positionSize: "", riskAmount: "", mistakeMade: "", lessonLearned: "", notes: "" });
    await load();
  }

  async function remove(id: string) {
    if (!db) return;
    await deleteDoc(doc(db, "tradingJournals", id));
    await load();
  }

  if (loading) return <main className="p-8">Loading...</main>;
  if (!user) return <main className="mx-auto max-w-3xl px-4 py-14"><h1 className="text-3xl font-bold">Please login to use journal.</h1></main>;

  return <main className="mx-auto max-w-7xl px-4 py-14">
    <h1 className="text-4xl font-black">Trading Journal</h1>
    <p className="mt-3 text-slate-300">Record trades, mistakes, emotions, and lessons learned.</p>

    <div className="mt-8 grid gap-4 md:grid-cols-4">
      <div className="card"><b>Total Entries</b><p className="mt-2 text-2xl font-black">{items.length}</p></div>
      <div className="card"><b>Wins</b><p className="mt-2 text-2xl font-black text-green-300">{stats.wins}</p></div>
      <div className="card"><b>Losses</b><p className="mt-2 text-2xl font-black text-red-300">{stats.losses}</p></div>
      <div className="card"><b>Win Rate</b><p className="mt-2 text-2xl font-black text-green-300">{stats.winRate.toFixed(1)}%</p></div>
    </div>

    <form onSubmit={submit} className="card mt-8 grid gap-4 md:grid-cols-3">
      <input className="input" value={form.pair} onChange={(e)=>setForm({...form,pair:e.target.value})} placeholder="Pair" />
      <select className="input" value={form.marketType} onChange={(e)=>setForm({...form,marketType:e.target.value})}><option>Crypto Spot</option><option>Crypto Futures</option><option>Forex</option><option>Gold</option><option>Commodities</option></select>
      <select className="input" value={form.direction} onChange={(e)=>setForm({...form,direction:e.target.value})}><option>Long</option><option>Short</option><option>Watchlist</option></select>
      <input className="input" value={form.entry} onChange={(e)=>setForm({...form,entry:e.target.value})} placeholder="Entry" />
      <input className="input" value={form.exit} onChange={(e)=>setForm({...form,exit:e.target.value})} placeholder="Exit" />
      <input className="input" value={form.stopLoss} onChange={(e)=>setForm({...form,stopLoss:e.target.value})} placeholder="Stop Loss" />
      <input className="input" value={form.takeProfit} onChange={(e)=>setForm({...form,takeProfit:e.target.value})} placeholder="Take Profit" />
      <input className="input" value={form.positionSize} onChange={(e)=>setForm({...form,positionSize:e.target.value})} placeholder="Position Size" />
      <input className="input" value={form.riskAmount} onChange={(e)=>setForm({...form,riskAmount:e.target.value})} placeholder="Risk Amount" />
      <select className="input" value={form.result} onChange={(e)=>setForm({...form,result:e.target.value})}><option>Win</option><option>Loss</option><option>Break Even</option></select>
      <input className="input" value={form.emotionalState} onChange={(e)=>setForm({...form,emotionalState:e.target.value})} placeholder="Emotional State" />
      <input className="input" value={form.mistakeMade} onChange={(e)=>setForm({...form,mistakeMade:e.target.value})} placeholder="Mistake Made" />
      <textarea className="input min-h-24 md:col-span-3" value={form.lessonLearned} onChange={(e)=>setForm({...form,lessonLearned:e.target.value})} placeholder="Lesson Learned" />
      <textarea className="input min-h-24 md:col-span-3" value={form.notes} onChange={(e)=>setForm({...form,notes:e.target.value})} placeholder="Notes" />
      <button className="btn-green md:col-span-3">Save Journal Entry</button>
      {msg && <p className="text-slate-300 md:col-span-3">{msg}</p>}
    </form>

    <div className="mt-8 grid gap-4">
      {items.map(i => <div className="card" key={i.id}>
        <div className="flex flex-wrap items-center justify-between gap-3"><h3 className="text-xl font-bold">{i.pair} · {i.direction}</h3><button onClick={()=>remove(i.id)} className="btn-dark px-3 py-2 text-xs">Delete</button></div>
        <p className="mt-2 text-slate-300">Result: <b className={i.result === "Win" ? "text-green-300" : i.result === "Loss" ? "text-red-300" : "text-yellow-300"}>{i.result}</b> · Emotion: {i.emotionalState}</p>
        <p className="mt-2 text-slate-300">Mistake: {i.mistakeMade || "None added"}</p>
        <p className="mt-2 text-slate-300">Lesson: {i.lessonLearned || "None added"}</p>
      </div>)}
    </div>
  </main>;
}
