"use client";

import { useEffect, useMemo, useState } from "react";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db, firebaseConfigured } from "@/lib/firebase";
import { useAuth } from "@/lib/auth";

function num(v: string) { return Number(v || 0); }

export default function DemoTradingPage() {
  const { user, loading } = useAuth();
  const [trades, setTrades] = useState<any[]>([]);
  const [msg, setMsg] = useState("");
  const [form, setForm] = useState({ pair: "BTCUSDT", marketType: "Crypto Futures", direction: "Long", entryPrice: "", exitPrice: "", positionSize: "", leverage: "1", stopLoss: "", takeProfit: "", tradeReason: "", strategyUsed: "", result: "Win", notes: "" });

  async function load() {
    if (!firebaseConfigured || !db || !user) return;
    const snap = await getDocs(query(collection(db, "demoTrades"), where("userId", "==", user.uid)("createdAt", "desc")));
    setTrades(snap.docs.map((d) => ({ id: d.id, ...d.data() })).sort((a:any,b:any)=>String(b.createdAt||"").localeCompare(String(a.createdAt||""))));
  }

  useEffect(() => { load(); }, [user]);

  const stats = useMemo(() => {
    const totalPnL = trades.reduce((a, t) => a + Number(t.pnl || 0), 0);
    const wins = trades.filter((t) => t.result === "Win").length;
    const losses = trades.filter((t) => t.result === "Loss").length;
    const be = trades.filter((t) => t.result === "Break Even").length;
    const balance = 10000 + totalPnL;
    const winRate = trades.length ? (wins / trades.length) * 100 : 0;
    return { totalPnL, wins, losses, be, balance, winRate };
  }, [trades]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!firebaseConfigured || !db || !user) { setMsg("Please login first or add Firebase keys."); return; }
    const entry = num(form.entryPrice), exit = num(form.exitPrice), size = num(form.positionSize), lev = Math.max(1, num(form.leverage));
    let pnl = 0;
    if (entry && exit && size) {
      const move = form.direction === "Long" ? exit - entry : entry - exit;
      pnl = move * size * lev;
    }
    if (form.result === "Loss" && pnl > 0) pnl = -pnl;
    if (form.result === "Break Even") pnl = 0;
    const now = new Date().toISOString();
    await addDoc(collection(db, "demoTrades"), { ...form, userId: user.uid, pnl, createdAt: now, updatedAt: now, openedAt: now, closedAt: now });
    setMsg("Demo trade saved.");
    setForm({ ...form, entryPrice: "", exitPrice: "", positionSize: "", tradeReason: "", strategyUsed: "", notes: "" });
    await load();
  }

  if (loading) return <main className="p-8">Loading...</main>;
  if (!user) return <main className="mx-auto max-w-3xl px-4 py-14"><h1 className="text-3xl font-bold">Please login to use demo trading.</h1></main>;

  return <main className="mx-auto max-w-7xl px-4 py-14">
    <h1 className="text-4xl font-black">Demo Trading Simulator</h1>
    <p className="mt-3 text-slate-300">Virtual practice only. This does not place real trades.</p>

    <div className="mt-8 grid gap-4 md:grid-cols-5">
      <div className="card"><b>Demo Balance</b><p className="mt-2 text-2xl font-black text-green-300">${stats.balance.toFixed(2)}</p></div>
      <div className="card"><b>Total PnL</b><p className="mt-2 text-2xl font-black text-green-300">${stats.totalPnL.toFixed(2)}</p></div>
      <div className="card"><b>Total Trades</b><p className="mt-2 text-2xl font-black">{trades.length}</p></div>
      <div className="card"><b>Win Rate</b><p className="mt-2 text-2xl font-black text-green-300">{stats.winRate.toFixed(1)}%</p></div>
      <div className="card"><b>W/L/BE</b><p className="mt-2 text-2xl font-black">{stats.wins}/{stats.losses}/{stats.be}</p></div>
    </div>

    <form onSubmit={submit} className="card mt-8 grid gap-4 md:grid-cols-3">
      <input className="input" value={form.pair} onChange={(e)=>setForm({...form,pair:e.target.value})} placeholder="Pair" />
      <select className="input" value={form.marketType} onChange={(e)=>setForm({...form,marketType:e.target.value})}><option>Crypto Spot</option><option>Crypto Futures</option><option>Forex</option><option>Gold</option><option>Indices</option></select>
      <select className="input" value={form.direction} onChange={(e)=>setForm({...form,direction:e.target.value})}><option>Long</option><option>Short</option></select>
      <input className="input" value={form.entryPrice} onChange={(e)=>setForm({...form,entryPrice:e.target.value})} placeholder="Entry Price" />
      <input className="input" value={form.exitPrice} onChange={(e)=>setForm({...form,exitPrice:e.target.value})} placeholder="Exit Price" />
      <input className="input" value={form.positionSize} onChange={(e)=>setForm({...form,positionSize:e.target.value})} placeholder="Position Size" />
      <input className="input" value={form.leverage} onChange={(e)=>setForm({...form,leverage:e.target.value})} placeholder="Leverage" />
      <input className="input" value={form.stopLoss} onChange={(e)=>setForm({...form,stopLoss:e.target.value})} placeholder="Stop Loss" />
      <input className="input" value={form.takeProfit} onChange={(e)=>setForm({...form,takeProfit:e.target.value})} placeholder="Take Profit" />
      <select className="input" value={form.result} onChange={(e)=>setForm({...form,result:e.target.value})}><option>Win</option><option>Loss</option><option>Break Even</option></select>
      <input className="input" value={form.strategyUsed} onChange={(e)=>setForm({...form,strategyUsed:e.target.value})} placeholder="Strategy Used" />
      <input className="input" value={form.tradeReason} onChange={(e)=>setForm({...form,tradeReason:e.target.value})} placeholder="Trade Reason" />
      <textarea className="input min-h-24 md:col-span-3" value={form.notes} onChange={(e)=>setForm({...form,notes:e.target.value})} placeholder="Notes" />
      <button className="btn-green md:col-span-3">Save Demo Trade</button>
      {msg && <p className="text-slate-300 md:col-span-3">{msg}</p>}
    </form>

    <section className="card mt-8 overflow-x-auto">
      <h2 className="text-2xl font-bold">Trade History</h2>
      <table className="mt-4 w-full text-left text-sm"><thead><tr className="text-slate-400"><th>Pair</th><th>Direction</th><th>Entry</th><th>Exit</th><th>Result</th><th>PnL</th></tr></thead><tbody>{trades.map(t=><tr key={t.id} className="border-t border-slate-800"><td className="py-3">{t.pair}</td><td>{t.direction}</td><td>{t.entryPrice}</td><td>{t.exitPrice}</td><td>{t.result}</td><td className={Number(t.pnl)>=0?"text-green-300":"text-red-300"}>${Number(t.pnl||0).toFixed(2)}</td></tr>)}</tbody></table>
    </section>
  </main>;
}
