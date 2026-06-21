"use client";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, firebaseConfigured } from "@/lib/firebase";

export default function CourseEditor({ onSaved }: { onSaved?: () => void }) {
  const [msg, setMsg] = useState("");
  const [form, setForm] = useState({ title: "", price: "", description: "", accessLevel: "public", status: "published" });
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!firebaseConfigured || !db) { setMsg("Firebase not configured."); return; }
    const now = new Date().toISOString();
    await addDoc(collection(db, "courses"), { ...form, createdAt: now, updatedAt: now });
    setMsg("Course saved.");
    setForm({ title: "", price: "", description: "", accessLevel: "public", status: "published" });
    onSaved?.();
  }
  return <form onSubmit={submit} className="card grid gap-4"><h2 className="text-2xl font-bold">Add Course</h2><input className="input" placeholder="Course title" value={form.title} onChange={(e)=>setForm({...form,title:e.target.value})} required /><input className="input" placeholder="Price e.g. $100" value={form.price} onChange={(e)=>setForm({...form,price:e.target.value})} /><textarea className="input min-h-28" placeholder="Course description" value={form.description} onChange={(e)=>setForm({...form,description:e.target.value})} /><select className="input" value={form.accessLevel} onChange={(e)=>setForm({...form,accessLevel:e.target.value})}><option value="public">Public</option><option value="premium">Premium</option></select><select className="input" value={form.status} onChange={(e)=>setForm({...form,status:e.target.value})}><option value="published">Published</option><option value="draft">Draft</option></select><button className="btn-green">Save Course</button>{msg && <p className="text-slate-300">{msg}</p>}</form>
}
