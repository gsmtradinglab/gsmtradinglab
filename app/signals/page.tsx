"use client";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db, firebaseConfigured } from "@/lib/firebase";
import { useAuth } from "@/lib/auth";

export default function Signals(){
 const { user, profile } = useAuth();
 const [signals,setSignals]=useState<any[]>([]);
 const [loading,setLoading]=useState(true);

 useEffect(()=>{
  async function load(){
   if(!firebaseConfigured||!db){ setLoading(false); return; }
   const base = collection(db,"signals");
   const queries = [query(base, where("visibility", "==", "public"))];
   if(user) queries.push(query(base, where("visibility", "==", "members")));
   const premium = profile?.courseAccess === "premium" || profile?.courseAccess === "online" || profile?.courseAccess === "physical" || profile?.role !== "user";
   if(user && premium) queries.push(query(base, where("visibility", "==", "premium")));
   const snaps = await Promise.all(queries.map(q=>getDocs(q)));
   const rows = snaps.flatMap(s=>s.docs.map(d=>({id:d.id,...d.data()})));
   const unique = Array.from(new Map(rows.map(s=>[s.id,s])).values()).sort((a:any,b:any)=>String(b.createdAt||"").localeCompare(String(a.createdAt||"")));
   setSignals(unique); setLoading(false);
  }
  load();
 },[user, profile?.courseAccess, profile?.role]);

 return <main className="mx-auto max-w-6xl px-4 py-14"><h1 className="text-4xl font-black">Signals</h1><p className="mt-3 text-slate-300">Educational market analysis only. No profit is guaranteed.</p><div className="mt-8 grid gap-5">{loading&&<div className="card">Loading signals...</div>}{!loading&&signals.length===0&&<div className="card">No signals posted yet.</div>}{signals.map(s=><div className="card" key={s.id}><div className="flex flex-wrap items-center justify-between gap-3"><h2 className="text-2xl font-bold">{s.title}</h2><span className="rounded-full bg-green-500/10 px-3 py-1 text-green-300">{s.visibility}</span></div><p className="mt-2 text-slate-300">{s.marketType} | {s.pair} | {s.direction} | {s.timeframe}</p><div className="mt-4 grid gap-3 md:grid-cols-4"><p>Entry: <b>{s.entryPrice || s.entryZone || "-"}</b></p><p>SL: <b>{s.stopLoss || "-"}</b></p><p>TP1: <b>{s.takeProfit1 || "-"}</b></p><p>Status: <b>{s.status}</b></p></div><p className="mt-4 text-slate-300">{s.analysisText}</p><p className="mt-4 rounded-xl bg-red-500/10 p-4 text-red-200">All signals are educational and analysis-based. Trading involves risk. Use proper risk management. No profit is guaranteed.</p></div>)}</div></main>}
