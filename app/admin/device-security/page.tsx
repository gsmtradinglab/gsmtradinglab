"use client";

import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs, orderBy, query, updateDoc } from "firebase/firestore";
import { db, firebaseConfigured } from "@/lib/firebase";
import { useAuth } from "@/lib/auth";

export default function AdminDeviceSecurityPage() {
  const { profile, loading } = useAuth();
  const [sessions, setSessions] = useState<any[]>([]);
  const [logs, setLogs] = useState<any[]>([]);
  const [blocked, setBlocked] = useState<any[]>([]);

  async function load() {
    if (!db) return;
    const s = await getDocs(collection(db, "activeSessions"));
    setSessions(s.docs.map((d) => ({ id: d.id, ...d.data() })));
    const l = await getDocs(query(collection(db, "securityLogs"), orderBy("createdAt", "desc")));
    setLogs(l.docs.slice(0, 50).map((d) => ({ id: d.id, ...d.data() })));
    const b = await getDocs(query(collection(db, "blockedLoginAttempts"), orderBy("createdAt", "desc")));
    setBlocked(b.docs.slice(0, 50).map((d) => ({ id: d.id, ...d.data() })));
  }

  useEffect(() => {
    if (firebaseConfigured && (profile?.role === "admin" || profile?.role === "superAdmin")) load();
  }, [profile]);

  async function resetDevice(uid: string) {
    if (!db || !confirm("Reset this user's device lock? They can login on a new device after this.")) return;
    await updateDoc(doc(db, "activeSessions", uid), { status: "revoked", revokedAt: new Date().toISOString(), updatedAt: new Date().toISOString() });
    await updateDoc(doc(db, "users", uid), { lockedDeviceId: "", deviceLockEnabled: false, updatedAt: new Date().toISOString() });
    await load();
  }

  async function deleteSession(uid: string) {
    if (!db || !confirm("Delete session record?")) return;
    await deleteDoc(doc(db, "activeSessions", uid));
    await load();
  }

  if (loading) return <main className="page-shell">Loading...</main>;
  if (profile?.role !== "admin" && profile?.role !== "superAdmin") return <main className="page-shell"><h1 className="text-3xl font-black text-red-300">Admin access required</h1></main>;

  return (
    <main className="page-shell">
      <section className="card">
        <p className="badge mb-3 inline-flex">Anti Share Protection</p>
        <h1 className="text-4xl font-black">Device Security Center</h1>
        <p className="mt-3 max-w-3xl text-slate-300">One account can stay locked to one browser/device. If a user changes phone or browser, admin can reset their device lock here.</p>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="metric-card"><b>Active Device Locks</b><p className="text-4xl font-black text-green-300">{sessions.filter((x)=>x.status!=="revoked").length}</p></div>
        <div className="metric-card"><b>Blocked Attempts</b><p className="text-4xl font-black text-red-300">{blocked.length}</p></div>
        <div className="metric-card"><b>Security Logs</b><p className="text-4xl font-black text-amber-300">{logs.length}</p></div>
      </section>

      <section className="mt-8 card overflow-x-auto">
        <h2 className="mb-4 text-2xl font-black">Device Locks</h2>
        <table className="w-full text-sm">
          <thead className="text-slate-300"><tr><th className="p-3 text-left">Email</th><th>Device</th><th>IP</th><th>Country</th><th>Last Seen</th><th>Status</th><th>Action</th></tr></thead>
          <tbody>{sessions.map((s)=>(
            <tr key={s.id} className="border-t border-white/10">
              <td className="p-3">{s.email || s.userId}</td>
              <td className="max-w-xs truncate">{s.deviceId}</td>
              <td>{s.securityInfo?.ip || "-"}</td>
              <td>{s.securityInfo?.country || "-"}</td>
              <td>{s.lastSeenAt || "-"}</td>
              <td>{s.status || "active"}</td>
              <td className="space-x-2 whitespace-nowrap"><button className="btn-green px-3 py-2" onClick={()=>resetDevice(s.id)}>Reset</button><button className="btn-dark px-3 py-2" onClick={()=>deleteSession(s.id)}>Delete</button></td>
            </tr>
          ))}</tbody>
        </table>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="card"><h2 className="mb-4 text-2xl font-black">Blocked Login Attempts</h2><div className="grid gap-3">{blocked.map((b)=><div key={b.id} className="rounded-2xl border border-red-500/20 bg-red-500/5 p-4"><b>{b.email}</b><p className="text-sm text-slate-300">IP: {b.securityInfo?.ip || "-"} | {b.securityInfo?.country || "-"}</p><p className="text-xs text-slate-400">{b.createdAt}</p></div>)}</div></div>
        <div className="card"><h2 className="mb-4 text-2xl font-black">Recent Security Logs</h2><div className="grid gap-3">{logs.map((l)=><div key={l.id} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"><b>{l.event}</b><p className="text-sm text-slate-300">{l.email} | IP: {l.securityInfo?.ip || "-"}</p><p className="text-xs text-slate-400">{l.createdAt}</p></div>)}</div></div>
      </section>
    </main>
  );
}
