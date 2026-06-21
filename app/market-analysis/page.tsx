"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db, firebaseConfigured } from "@/lib/firebase";

export default function MarketAnalysisPage() {
  const [posts, setPosts] = useState<any[]>([]);
  useEffect(() => { async function load(){ if(!firebaseConfigured || !db) return; const snap = await getDocs(query(collection(db,"marketAnalysis"), orderBy("createdAt","desc"))); setPosts(snap.docs.map(d=>({id:d.id,...d.data()})).filter((p:any)=>p.status!=="draft")); } load(); }, []);
  return <main className="mx-auto max-w-6xl px-4 py-14"><h1 className="text-4xl font-black">Market Analysis</h1><p className="mt-3 text-slate-300">Crypto, forex, gold, indices, and market education updates. Educational content only.</p><div className="mt-8 grid gap-5">{posts.length ? posts.map((p)=><article className="card" key={p.id}><div className="flex flex-wrap justify-between gap-3"><h2 className="text-2xl font-bold">{p.title}</h2><span className="text-green-300">{p.marketType}</span></div><p className="mt-2 text-slate-400">{p.bias || "Educational"} | {p.timeframe || ""}</p><p className="mt-4 whitespace-pre-wrap text-slate-300">{p.content}</p><p className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-200">Trading involves risk. This is analysis and education only, not financial advice.</p></article>) : <p className="text-slate-400">No analysis posted yet.</p>}</div></main>;
}
