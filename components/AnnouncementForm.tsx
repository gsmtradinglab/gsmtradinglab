"use client";
import { useEffect, useState } from "react";
import { addDoc, collection, getDocs, orderBy, query, serverTimestamp, updateDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/lib/auth";

type Announcement = { id?: string; title: string; message: string; audience: "public" | "members" | "premium"; status: "published" | "draft"; createdAt?: any; };
export default function AnnouncementForm() {
  const { profile } = useAuth();
  const [title, setTitle] = useState(""); const [message, setMessage] = useState(""); const [audience, setAudience] = useState<Announcement['audience']>("public");
  const [items, setItems] = useState<Announcement[]>([]); const [msg, setMsg] = useState("");
  const isAdmin = profile?.role === "admin" || profile?.role === "superAdmin";
  async function load(){ if(!db || !isAdmin) return; const s = await getDocs(query(collection(db,"announcements"), orderBy("createdAt","desc"))); setItems(s.docs.map(d=>({id:d.id,...d.data() as Announcement}))); }
  useEffect(()=>{load()},[isAdmin]);
  async function publish(){ if(!db || !isAdmin) return; if(!title || !message) return setMsg("Title and message required."); await addDoc(collection(db,"announcements"),{title,message,audience,status:"published",createdAt:serverTimestamp()}); setTitle(""); setMessage(""); setMsg("Announcement published."); load(); }
  async function unpublish(id?:string){ if(!db || !id) return; await updateDoc(doc(db,"announcements",id),{status:"draft"}); load(); }
  return <div className="grid gap-6 lg:grid-cols-2"><div className="card space-y-3"><h2 className="text-2xl font-bold">Announcements</h2>{msg&&<p className="text-green-300 text-sm">{msg}</p>}<input className="input" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)}/><textarea className="input min-h-32" placeholder="Message" value={message} onChange={e=>setMessage(e.target.value)}/><select className="input" value={audience} onChange={e=>setAudience(e.target.value as any)}><option value="public">Public</option><option value="members">Members</option><option value="premium">Premium</option></select><button className="btn-green" onClick={publish}>Publish Announcement</button></div><div className="space-y-3">{items.map(a=><div className="card" key={a.id}><div className="flex justify-between gap-3"><div><h3 className="font-bold">{a.title}</h3><p className="text-xs text-slate-400">{a.audience} · {a.status}</p></div><button className="btn-dark px-3 py-1" onClick={()=>unpublish(a.id)}>Draft</button></div><p className="mt-2 text-sm text-slate-300">{a.message}</p></div>)}</div></div>
}
