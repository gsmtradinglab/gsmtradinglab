"use client";
import { useEffect, useState } from "react";
import { addDoc, collection, deleteDoc, doc, getDocs, orderBy, query, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/lib/auth";

type BlogPost = { id?: string; title: string; slug: string; category: string; content: string; seoTitle?: string; metaDescription?: string; status: "published" | "draft"; createdAt?: any; updatedAt?: any; };
const empty: BlogPost = { title: "", slug: "", category: "Crypto Trading Basics", content: "", seoTitle: "", metaDescription: "", status: "draft" };

function toSlug(v: string) { return v.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""); }

export default function BlogEditor() {
  const { profile } = useAuth();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [form, setForm] = useState<BlogPost>(empty);
  const [msg, setMsg] = useState("");
  const isAdmin = profile?.role === "admin" || profile?.role === "superAdmin";

  async function load() {
    if (!db || !isAdmin) return;
    const snap = await getDocs(query(collection(db, "blogs"), orderBy("updatedAt", "desc")));
    setPosts(snap.docs.map(d => ({ id: d.id, ...(d.data() as BlogPost) })));
  }
  useEffect(() => { load(); }, [isAdmin]);

  async function save() {
    if (!db || !isAdmin) return setMsg("Admin access required.");
    if (!form.title || !form.content) return setMsg("Title and content required.");
    const data = { ...form, slug: form.slug || toSlug(form.title), updatedAt: serverTimestamp() };
    if (form.id) await updateDoc(doc(db, "blogs", form.id), data as any);
    else await addDoc(collection(db, "blogs"), { ...data, createdAt: serverTimestamp() });
    setForm(empty); setMsg("Saved."); load();
  }
  async function remove(id?: string) { if (!db || !id) return; await deleteDoc(doc(db, "blogs", id)); load(); }

  return <div className="grid gap-6 lg:grid-cols-2">
    <div className="card space-y-3">
      <h2 className="text-2xl font-bold">Blog CMS</h2>
      {msg && <p className="text-sm text-green-300">{msg}</p>}
      <input className="input" placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value, slug: toSlug(e.target.value) })} />
      <input className="input" placeholder="Slug" value={form.slug} onChange={e => setForm({ ...form, slug: toSlug(e.target.value) })} />
      <select className="input" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}>
        {['Crypto Trading Basics','Technical Analysis','Fundamental Analysis','Futures Trading','Risk Management','Trading Psychology','Market Updates','Beginner Guides'].map(c => <option key={c}>{c}</option>)}
      </select>
      <textarea className="input min-h-48" placeholder="Post content" value={form.content} onChange={e => setForm({ ...form, content: e.target.value })} />
      <input className="input" placeholder="SEO title" value={form.seoTitle} onChange={e => setForm({ ...form, seoTitle: e.target.value })} />
      <textarea className="input" placeholder="Meta description" value={form.metaDescription} onChange={e => setForm({ ...form, metaDescription: e.target.value })} />
      <select className="input" value={form.status} onChange={e => setForm({ ...form, status: e.target.value as any })}><option value="draft">Draft</option><option value="published">Published</option></select>
      <button className="btn-green" onClick={save}>{form.id ? "Update Post" : "Create Post"}</button>
    </div>
    <div className="space-y-3">
      {posts.map(p => <div className="card" key={p.id}>
        <div className="flex items-start justify-between gap-3"><div><h3 className="font-bold">{p.title}</h3><p className="text-xs text-slate-400">/{p.slug} · {p.category} · {p.status}</p></div><div className="flex gap-2"><button className="btn-dark px-3 py-1" onClick={() => setForm(p)}>Edit</button><button className="btn-dark px-3 py-1" onClick={() => remove(p.id)}>Delete</button></div></div>
        <p className="mt-3 line-clamp-2 text-sm text-slate-300">{p.content}</p>
      </div>)}
    </div>
  </div>;
}
