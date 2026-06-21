"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db, firebaseConfigured } from "@/lib/firebase";
import { useAuth } from "@/lib/auth";

export default function NotificationsPage() {
  const { user, profile, loading } = useAuth();
  const [items, setItems] = useState<any[]>([]);
  useEffect(() => {
    async function load() {
      if (!firebaseConfigured || !db || !user) return;
      const snap = await getDocs(query(collection(db, "notifications"), orderBy("createdAt", "desc")));
      setItems(snap.docs.map((d) => ({ id: d.id, ...d.data() })).filter((n: any) => n.audience === "all" || n.audience === profile?.role || n.userId === user.uid));
    }
    load();
  }, [user, profile?.role]);
  if (loading) return <main className="p-8">Loading...</main>;
  if (!user) return <main className="mx-auto max-w-3xl px-4 py-14"><h1 className="text-3xl font-bold">Please login to view notifications.</h1></main>;
  return <main className="mx-auto max-w-5xl px-4 py-14"><h1 className="text-4xl font-black">Notifications</h1><div className="mt-8 grid gap-4">{items.length ? items.map((n) => <article className="card" key={n.id}><h2 className="text-xl font-bold">{n.title}</h2><p className="mt-2 text-slate-300">{n.message}</p><p className="mt-3 text-sm text-slate-500">{n.createdAt}</p></article>) : <p className="text-slate-400">No notifications yet.</p>}</div></main>;
}
