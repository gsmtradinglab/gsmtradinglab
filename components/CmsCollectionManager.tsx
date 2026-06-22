"use client";

import { useEffect, useMemo, useState } from "react";
import { addDoc, collection, deleteDoc, doc, getDocs, orderBy, query, setDoc } from "firebase/firestore";
import { db, firebaseConfigured } from "@/lib/firebase";
import { useAuth } from "@/lib/auth";

type Field = {
  name: string;
  label: string;
  type?: "text" | "textarea" | "select";
  options?: string[];
  placeholder?: string;
};

type Row = Record<string, any> & { id: string };

export default function CmsCollectionManager({
  title,
  description,
  collectionName,
  fields,
  defaultValues = {},
}: {
  title: string;
  description: string;
  collectionName: string;
  fields: Field[];
  defaultValues?: Record<string, any>;
}) {
  const { profile } = useAuth();
  const [rows, setRows] = useState<Row[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const blank = useMemo(() => Object.fromEntries(fields.map((f) => [f.name, defaultValues[f.name] || ""])), [fields, defaultValues]);
  const [form, setForm] = useState<Record<string, any>>(blank);

  const isAdmin = profile?.role && profile.role !== "user";

  async function load() {
    if (!firebaseConfigured || !db || !isAdmin) return;
    try {
      const snap = await getDocs(query(collection(db, collectionName), orderBy("updatedAt", "desc")));
      setRows(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    } catch {
      const snap = await getDocs(collection(db, collectionName));
      setRows(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    }
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectionName, isAdmin]);

  function edit(row: Row) {
    setEditingId(row.id);
    setForm(Object.fromEntries(fields.map((f) => [f.name, row[f.name] || ""])));
    setMessage("");
  }

  async function save() {
    if (!firebaseConfigured || !db || !isAdmin) return;
    setSaving(true);
    setMessage("");
    const now = new Date().toISOString();
    const payload = {
      ...form,
      status: form.status || "published",
      updatedAt: now,
      createdAt: editingId ? rows.find((r) => r.id === editingId)?.createdAt || now : now,
    };
    try {
      if (editingId) await setDoc(doc(db, collectionName, editingId), payload, { merge: true });
      else await addDoc(collection(db, collectionName), payload);
      setForm(blank);
      setEditingId(null);
      setMessage("Saved successfully.");
      await load();
    } catch (error: any) {
      setMessage(error?.message || "Unable to save data.");
    } finally {
      setSaving(false);
    }
  }

  async function remove(id: string) {
    if (!firebaseConfigured || !db || !isAdmin) return;
    if (!confirm("Delete this item?")) return;
    await deleteDoc(doc(db, collectionName, id));
    await load();
  }

  if (!isAdmin) {
    return <div className="card"><h1 className="text-2xl font-black">Admin access required</h1><p className="text-slate-400">Only admin users can manage this collection.</p></div>;
  }

  return (
    <div className="space-y-6">
      <div className="rounded-[2rem] border border-green-400/20 bg-gradient-to-br from-green-400/10 via-white/[0.03] to-red-500/10 p-6 md:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-green-300">Firebase CMS</p>
        <h1 className="mt-3 text-3xl font-black md:text-5xl">{title}</h1>
        <p className="mt-3 max-w-3xl text-slate-300">{description}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="card space-y-4">
          <h2 className="text-xl font-black">{editingId ? "Edit Item" : "Add New Item"}</h2>
          {fields.map((field) => (
            <label key={field.name} className="block space-y-2">
              <span className="text-sm font-bold text-slate-300">{field.label}</span>
              {field.type === "textarea" ? (
                <textarea className="input min-h-28" value={form[field.name] || ""} placeholder={field.placeholder} onChange={(e) => setForm({ ...form, [field.name]: e.target.value })} />
              ) : field.type === "select" ? (
                <select className="input" value={form[field.name] || ""} onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}>
                  <option value="">Select</option>
                  {field.options?.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              ) : (
                <input className="input" value={form[field.name] || ""} placeholder={field.placeholder} onChange={(e) => setForm({ ...form, [field.name]: e.target.value })} />
              )}
            </label>
          ))}
          {message && <p className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-sm text-slate-300">{message}</p>}
          <div className="flex flex-wrap gap-3">
            <button className="btn-green" disabled={saving} onClick={save}>{saving ? "Saving..." : editingId ? "Update" : "Create"}</button>
            {editingId && <button className="btn-dark" onClick={() => { setEditingId(null); setForm(blank); }}>Cancel</button>}
          </div>
        </div>

        <div className="card overflow-hidden">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="text-xl font-black">Saved Items</h2>
            <button className="btn-dark px-4 py-2" onClick={load}>Refresh</button>
          </div>
          <div className="space-y-3">
            {rows.length === 0 && <p className="text-slate-400">No items yet.</p>}
            {rows.map((row) => (
              <div key={row.id} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-black text-white">{row.title || row.name || row.slug || row.id}</p>
                    <p className="mt-1 line-clamp-2 text-sm text-slate-400">{row.description || row.content || row.message || row.excerpt || "No description"}</p>
                    <p className="mt-2 text-xs text-slate-500">Status: {row.status || "published"}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="btn-dark px-3 py-2 text-xs" onClick={() => edit(row)}>Edit</button>
                    <button className="rounded-xl border border-red-400/30 bg-red-500/10 px-3 py-2 text-xs font-bold text-red-200" onClick={() => remove(row.id)}>Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
