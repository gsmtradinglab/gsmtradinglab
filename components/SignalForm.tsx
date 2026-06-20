"use client";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, firebaseConfigured } from "@/lib/firebase";
import { useAuth } from "@/lib/auth";

export default function SignalForm({ onSaved }: { onSaved?: () => void }) {
  const { user } = useAuth();
  const [msg,setMsg]=useState("");
  const [f,setF]=useState({title:"", marketType:"Crypto Futures", pair:"BTCUSDT", direction:"Watchlist", entryPrice:"", entryZone:"", stopLoss:"", takeProfit1:"", takeProfit2:"", takeProfit3:"", leverage:"", riskLevel:"Medium", timeframe:"Intraday", visibility:"public", status:"Educational Setup", analysisText:"", riskNote:"Use proper risk management. Risk only what you can afford to lose."});
  async function submit(e:React.FormEvent){e.preventDefault(); if(!firebaseConfigured||!db||!user) return setMsg("Firebase/login required."); const now=new Date().toISOString(); await addDoc(collection(db,"signals"),{...f, selectedUserIds:[], createdBy:user.uid, createdAt:now, updatedAt:now}); setMsg("Signal posted."); onSaved?.();}
  return <form onSubmit={submit} className="card grid gap-3">
    <h3 className="text-xl font-bold">Add Signal</h3>
    <input className="input" placeholder="Signal Title" value={f.title} onChange={e=>setF({...f,title:e.target.value})}/>
    <div className="grid gap-3 md:grid-cols-3"><select className="input" value={f.marketType} onChange={e=>setF({...f,marketType:e.target.value})}><option>Crypto Spot</option><option>Crypto Futures</option><option>Forex</option><option>Gold</option><option>Stocks</option><option>Indices</option><option>Commodities</option></select><input className="input" value={f.pair} onChange={e=>setF({...f,pair:e.target.value})}/><select className="input" value={f.direction} onChange={e=>setF({...f,direction:e.target.value})}><option>Long / Buy</option><option>Short / Sell</option><option>Watchlist</option></select></div>
    <div className="grid gap-3 md:grid-cols-4"><input className="input" placeholder="Entry" onChange={e=>setF({...f,entryPrice:e.target.value})}/><input className="input" placeholder="Entry Zone" onChange={e=>setF({...f,entryZone:e.target.value})}/><input className="input" placeholder="Stop Loss" onChange={e=>setF({...f,stopLoss:e.target.value})}/><input className="input" placeholder="Leverage optional" onChange={e=>setF({...f,leverage:e.target.value})}/></div>
    <div className="grid gap-3 md:grid-cols-3"><input className="input" placeholder="TP1" onChange={e=>setF({...f,takeProfit1:e.target.value})}/><input className="input" placeholder="TP2" onChange={e=>setF({...f,takeProfit2:e.target.value})}/><input className="input" placeholder="TP3" onChange={e=>setF({...f,takeProfit3:e.target.value})}/></div>
    <div className="grid gap-3 md:grid-cols-4"><select className="input" value={f.riskLevel} onChange={e=>setF({...f,riskLevel:e.target.value})}><option>Low</option><option>Medium</option><option>High</option></select><select className="input" value={f.timeframe} onChange={e=>setF({...f,timeframe:e.target.value})}><option>Scalping</option><option>Intraday</option><option>Swing</option><option>Position</option></select><select className="input" value={f.visibility} onChange={e=>setF({...f,visibility:e.target.value})}><option value="public">Public Free</option><option value="members">Logged-in Members</option><option value="premium">Premium Members</option></select><select className="input" value={f.status} onChange={e=>setF({...f,status:e.target.value})}><option>Active</option><option>Educational Setup</option><option>TP1 Hit</option><option>TP2 Hit</option><option>TP3 Hit</option><option>Stop Loss Hit</option><option>Break Even</option><option>Cancelled</option><option>Closed Manually</option></select></div>
    <textarea className="input min-h-24" placeholder="Analysis Text" onChange={e=>setF({...f,analysisText:e.target.value})}/><textarea className="input min-h-20" value={f.riskNote} onChange={e=>setF({...f,riskNote:e.target.value})}/><button className="btn-green">Publish Signal</button>{msg&&<p>{msg}</p>}
  </form>
}
