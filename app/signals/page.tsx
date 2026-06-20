"use client";
import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db, firebaseConfigured } from "@/lib/firebase";
import { useAuth } from "@/lib/auth";

export default function Signals(){
 const { user, profile } = useAuth(); const [signals,setSignals]=useState<any[]>([]);
 useEffect(()=>{async function load(){if(!firebaseConfigured||!db)return; const q=query(collection(db,"signals"),orderBy("createdAt","desc")); const snap=await getDocs(q); setSignals(snap.docs.map(d=>({id:d.id,...d.data()})));} load();},[]);
 const allowed = signals.filter(s => s.visibility === "public" || (s.visibility === "members" && user) || (s.visibility === "premium" && (profile?.courseAccess === "premium" || profile?.courseAccess === "online" || profile?.courseAccess === "physical" || profile?.role !== "user")));
 return <main className="mx-auto max-w-6xl px-4 py-14"><h1 className="text-4xl font-black">Signals</h1><p className="mt-3 text-slate-300">Educational market analysis only. No profit is guaranteed.</p><div className="mt-8 grid gap-5">{allowed.length===0&&<div className="card">No signals posted yet.</div>}{allowed.map(s=><div className="card" key={s.id}><div className="flex flex-wrap items-center justify-between gap-3"><h2 className="text-2xl font-bold">{s.title}</h2><span className="rounded-full bg-green-500/10 px-3 py-1 text-green-300">{s.visibility}</span></div><p className="mt-2 text-slate-300">{s.marketType} | {s.pair} | {s.direction} | {s.timeframe}</p><div className="mt-4 grid gap-3 md:grid-cols-4"><p>Entry: <b>{s.entryPrice || s.entryZone || "-"}</b></p><p>SL: <b>{s.stopLoss || "-"}</b></p><p>TP1: <b>{s.takeProfit1 || "-"}</b></p><p>Status: <b>{s.status}</b></p></div><p className="mt-4 text-slate-300">{s.analysisText}</p><p className="mt-4 rounded-xl bg-red-500/10 p-4 text-red-200">All signals are educational and analysis-based. Trading involves risk. Use proper risk management. No profit is guaranteed.</p></div>)}</div></main>}
