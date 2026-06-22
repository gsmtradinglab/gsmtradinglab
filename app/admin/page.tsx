"use client";

import { useEffect, useMemo, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { db, firebaseConfigured } from "@/lib/firebase";
import { useAuth } from "@/lib/auth";
import SignalForm from "@/components/SignalForm";
import SiteSettingsManager from "@/components/SiteSettingsManager";

type AdminTab = "overview" | "site" | "users" | "registrations" | "payments" | "signals" | "settings";

function csvDownload(name: string, rows: Record<string, unknown>[]) {
  if (!rows.length) return;
  const headers = Array.from(new Set(rows.flatMap((r) => Object.keys(r))));
  const body = [
    headers.join(","),
    ...rows.map((r) => headers.map((h) => JSON.stringify(r[h] ?? "")).join(",")),
  ].join("\n");
  const blob = new Blob([body], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  URL.revokeObjectURL(url);
}

const userStatus = ["active", "inactive"];
const roles = ["user", "admin", "superAdmin"];
const access = ["none", "online", "physical", "premium"];
const paymentStatuses = ["none", "pending", "verified", "rejected"];
const regStatuses = ["New", "Contacted", "Payment Pending", "Payment Verified", "Access Granted", "Rejected"];
const signalStatuses = ["Active", "Educational Setup", "TP1 Hit", "TP2 Hit", "TP3 Hit", "Stop Loss Hit", "Break Even", "Cancelled", "Closed Manually"];

export default function Admin() {
  const { profile, loading } = useAuth();
  const [users, setUsers] = useState<any[]>([]);
  const [regs, setRegs] = useState<any[]>([]);
  const [payments, setPayments] = useState<any[]>([]);
  const [signals, setSignals] = useState<any[]>([]);
  const [tab, setTab] = useState<AdminTab>("overview");
  const [search, setSearch] = useState("");
  const [msg, setMsg] = useState("");
  const [settings, setSettings] = useState({
    easypaisaNumber: "",
    jazzcashNumber: "",
    bankAccountTitle: "",
    bankAccountNumber: "",
    bankName: "",
    iban: "",
    cryptoNetwork: "USDT TRC20",
    cryptoWalletAddress: "",
    whatsappNumber: "",
  });

  async function load() {
    if (!firebaseConfigured || !db) return;
    const u = await getDocs(collection(db, "users"));
    setUsers(u.docs.map((d) => ({ id: d.id, ...d.data() })));
    const r = await getDocs(query(collection(db, "registrations"), orderBy("createdAt", "desc")));
    setRegs(r.docs.map((d) => ({ id: d.id, ...d.data() })));
    const p = await getDocs(query(collection(db, "payments"), orderBy("createdAt", "desc")));
    setPayments(p.docs.map((d) => ({ id: d.id, ...d.data() })));
    const s = await getDocs(query(collection(db, "signals"), orderBy("createdAt", "desc")));
    setSignals(s.docs.map((d) => ({ id: d.id, ...d.data() })));
  }

  useEffect(() => {
    if (profile?.role === "admin" || profile?.role === "superAdmin") load();
  }, [profile]);

  const stats = useMemo(
    () => ({
      pending: payments.filter((x) => x.status === "pending").length,
      verified: payments.filter((x) => x.status === "verified").length,
      premium: users.filter((x) => x.courseAccess && x.courseAccess !== "none").length,
      activeSignals: signals.filter((x) => x.status === "Active").length,
      wins: signals.filter((x) => String(x.status || "").startsWith("TP")).length,
      losses: signals.filter((x) => x.status === "Stop Loss Hit").length,
    }),
    [payments, users, signals]
  );

  const filteredUsers = users.filter((u) =>
    `${u.fullName || ""} ${u.email || ""}`.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <main className="p-8">Loading...</main>;
  if (profile?.role !== "admin" && profile?.role !== "superAdmin") {
    return (
      <main className="mx-auto max-w-xl px-4 py-14">
        <h1 className="text-3xl font-bold text-red-300">Admin access required</h1>
        <p className="mt-3 text-slate-300">Open Firestore → users → your user document → change role to admin.</p>
      </main>
    );
  }

  async function updateUser(uid: string, data: Record<string, unknown>) {
    if (!db) return;
    await updateDoc(doc(db, "users", uid), { ...data, updatedAt: new Date().toISOString() });
    await load();
  }

  async function removeUserDoc(uid: string) {
    if (!db || !confirm("Delete this user profile document from Firestore? Firebase Auth user will not be deleted.")) return;
    await deleteDoc(doc(db, "users", uid));
    await load();
  }

  async function setPayment(id: string, status: string, userId?: string) {
    if (!db) return;
    const now = new Date().toISOString();
    await updateDoc(doc(db, "payments", id), { status, verifiedAt: status === "verified" ? now : null, updatedAt: now });
    if (userId && status === "verified") {
      await updateUser(userId, { courseAccess: "premium", paymentStatus: "verified", status: "active" });
    } else if (userId && status === "rejected") {
      await updateUser(userId, { paymentStatus: "rejected" });
    } else {
      await load();
    }
  }

  async function setReg(id: string, status: string) {
    if (!db) return;
    await updateDoc(doc(db, "registrations", id), { status, updatedAt: new Date().toISOString() });
    await load();
  }

  async function updateSignal(id: string, data: Record<string, unknown>) {
    if (!db) return;
    await updateDoc(doc(db, "signals", id), { ...data, updatedAt: new Date().toISOString() });
    await load();
  }

  async function removeSignal(id: string) {
    if (!db || !confirm("Delete this signal?")) return;
    await deleteDoc(doc(db, "signals", id));
    await load();
  }

  async function saveSettings(e: React.FormEvent) {
    e.preventDefault();
    if (!db) return;
    const now = new Date().toISOString();
    await addDoc(collection(db, "paymentSettings"), { ...settings, createdAt: now, updatedAt: now });
    setMsg("Payment settings saved. Latest record can be used as current payment details.");
  }

  const tabs: AdminTab[] = ["overview", "site", "users", "registrations", "payments", "signals", "settings"];

  return (
    <main className="page-shell">
      <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-950/90 to-green-950/20 p-7 shadow-2xl shadow-black/30">
        <div className="absolute right-8 top-8 h-32 w-32 rounded-full bg-green-400/10 blur-3xl" />
        <p className="badge mb-4 inline-flex">Crypto Control Room</p>
        <h1 className="text-4xl font-black md:text-5xl">GSM Admin OS</h1>
        <p className="mt-3 max-w-3xl text-slate-400">Control the public website, homepage copy, social handles, users, premium access, payments, signals, registrations and operational settings from one admin command center.</p>
      </section>

      <div className="mt-8 flex flex-wrap gap-2 rounded-[2rem] border border-white/10 bg-white/[0.03] p-2 backdrop-blur-xl">
        {tabs.map((x) => (
          <button key={x} onClick={() => setTab(x)} className={tab === x ? "admin-tab-active" : "admin-tab"}>
            {x[0].toUpperCase() + x.slice(1)}
          </button>
        ))}
      </div>

      {tab === "site" && (
        <section className="mt-8">
          <SiteSettingsManager />
        </section>
      )}

      {tab === "overview" && (
        <section className="mt-8 grid gap-5 md:grid-cols-6">
          <div className="metric-card"><b className="text-slate-300">Total Users</b><p className="mt-2 text-4xl font-black text-green-300">{users.length}</p></div>
          <div className="metric-card"><b className="text-slate-300">Premium</b><p className="mt-2 text-4xl font-black text-green-300">{stats.premium}</p></div>
          <div className="metric-card"><b className="text-slate-300">Registrations</b><p className="mt-2 text-4xl font-black text-green-300">{regs.length}</p></div>
          <div className="metric-card"><b className="text-slate-300">Pending Payments</b><p className="mt-2 text-4xl font-black text-amber-300">{stats.pending}</p></div>
          <div className="metric-card"><b className="text-slate-300">Verified Payments</b><p className="mt-2 text-4xl font-black text-green-300">{stats.verified}</p></div>
          <div className="metric-card"><b className="text-slate-300">Signals</b><p className="mt-2 text-4xl font-black text-green-300">{signals.length}</p></div>
          <div className="card md:col-span-2"><b>Signal Wins</b><p className="text-3xl text-green-400">{stats.wins}</p></div>
          <div className="card md:col-span-2"><b>Signal Losses</b><p className="text-3xl text-red-300">{stats.losses}</p></div>
          <div className="card md:col-span-2"><b>Active Signals</b><p className="text-3xl text-amber-300">{stats.activeSignals}</p></div>
        </section>
      )}

      {tab === "users" && (
        <section className="mt-8">
          <div className="mb-4 flex flex-wrap gap-3">
            <input className="input max-w-sm" placeholder="Search name or email" value={search} onChange={(e) => setSearch(e.target.value)} />
            <button className="btn-dark" onClick={() => csvDownload("users.csv", users)}>Export Users CSV</button>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-800">
            <table className="w-full text-sm">
              <thead className="bg-white/[0.04] text-slate-300"><tr><th className="p-3 text-left">Name</th><th>Email</th><th>Role</th><th>Status</th><th>Access</th><th>Payment</th><th>Actions</th></tr></thead>
              <tbody>
                {filteredUsers.map((u) => (
                  <tr className="border-t border-slate-800" key={u.id}>
                    <td className="p-3">{u.fullName}</td><td>{u.email}</td>
                    <td><select className="input min-w-28" value={u.role || "user"} onChange={(e) => updateUser(u.id, { role: e.target.value })}>{roles.map((x) => <option key={x}>{x}</option>)}</select></td>
                    <td><select className="input min-w-28" value={u.status || "active"} onChange={(e) => updateUser(u.id, { status: e.target.value })}>{userStatus.map((x) => <option key={x}>{x}</option>)}</select></td>
                    <td><select className="input min-w-28" value={u.courseAccess || "none"} onChange={(e) => updateUser(u.id, { courseAccess: e.target.value })}>{access.map((x) => <option key={x}>{x}</option>)}</select></td>
                    <td><select className="input min-w-28" value={u.paymentStatus || "none"} onChange={(e) => updateUser(u.id, { paymentStatus: e.target.value })}>{paymentStatuses.map((x) => <option key={x}>{x}</option>)}</select></td>
                    <td className="space-x-2 whitespace-nowrap"><button className="btn-green px-3 py-2" onClick={() => updateUser(u.id, { courseAccess: "premium", paymentStatus: "verified", status: "active" })}>Grant</button><button className="btn-dark px-3 py-2" onClick={() => removeUserDoc(u.id)}>Delete Doc</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {tab === "registrations" && (
        <section className="mt-8">
          <button className="btn-dark mb-4" onClick={() => csvDownload("registrations.csv", regs)}>Export Registrations CSV</button>
          <div className="grid gap-4">{regs.map((r) => <div className="card" key={r.id}><div className="flex flex-wrap items-center justify-between gap-3"><b>{r.fullName}</b><select className="input max-w-xs" value={r.status} onChange={(e) => setReg(r.id, e.target.value)}>{regStatuses.map((x) => <option key={x}>{x}</option>)}</select></div><p className="mt-2 text-slate-300">{r.email} | {r.phone}</p><p>{r.preferredCourse} | {r.learningMode} | {r.learningStyle} | {r.paymentMethod}</p><p className="text-slate-400">{r.message}</p></div>)}</div>
        </section>
      )}

      {tab === "payments" && (
        <section className="mt-8">
          <button className="btn-dark mb-4" onClick={() => csvDownload("payments.csv", payments)}>Export Payments CSV</button>
          <div className="grid gap-4">{payments.map((p) => <div className="card" key={p.id}><div className="flex flex-wrap items-center justify-between gap-3"><b>{p.courseType} — {p.amount} {p.currency}</b><span className={p.status === "verified" ? "text-green-300" : p.status === "rejected" ? "text-red-300" : "text-amber-300"}>{p.status}</span></div><p className="mt-2">User: {p.userId}</p><p>Method: {p.paymentMethod} | Txn: {p.transactionId || "-"}</p>{p.paymentProofUrl && <a className="text-green-300 underline" href={p.paymentProofUrl} target="_blank">View Proof</a>}<div className="mt-4 flex flex-wrap gap-2"><button className="btn-green" onClick={() => setPayment(p.id, "verified", p.userId)}>Verify & Grant</button><button className="btn-dark" onClick={() => setPayment(p.id, "pending", p.userId)}>Pending</button><button className="btn-dark" onClick={() => setPayment(p.id, "rejected", p.userId)}>Reject</button></div></div>)}</div>
        </section>
      )}

      {tab === "signals" && (
        <section className="mt-8 grid gap-6">
          <SignalForm onSaved={load} />
          <button className="btn-dark max-w-xs" onClick={() => csvDownload("signals.csv", signals)}>Export Signals CSV</button>
          <div className="grid gap-4">{signals.map((s) => <div className="card" key={s.id}><div className="flex flex-wrap items-center justify-between gap-3"><b>{s.title}</b><span>{s.visibility} | {s.status}</span></div><p className="mt-2 text-slate-300">{s.marketType} | {s.pair} | {s.direction}</p><p className="text-slate-400">{s.analysisText}</p><div className="mt-4 grid gap-3 md:grid-cols-3"><select className="input" value={s.status} onChange={(e) => updateSignal(s.id, { status: e.target.value })}>{signalStatuses.map((x) => <option key={x}>{x}</option>)}</select><select className="input" value={s.visibility} onChange={(e) => updateSignal(s.id, { visibility: e.target.value })}><option value="public">Public Free</option><option value="members">Logged-in Members</option><option value="premium">Premium Members</option><option value="selected">Selected Users</option></select><button className="btn-dark" onClick={() => removeSignal(s.id)}>Delete</button></div></div>)}</div>
        </section>
      )}

      {tab === "settings" && (
        <section className="mt-8 max-w-3xl">
          <form onSubmit={saveSettings} className="card grid gap-4">
            <h2 className="text-2xl font-bold">Payment Settings</h2>
            <input className="input" placeholder="Easypaisa Number" onChange={(e) => setSettings({ ...settings, easypaisaNumber: e.target.value })} />
            <input className="input" placeholder="JazzCash Number" onChange={(e) => setSettings({ ...settings, jazzcashNumber: e.target.value })} />
            <input className="input" placeholder="Bank Account Title" onChange={(e) => setSettings({ ...settings, bankAccountTitle: e.target.value })} />
            <input className="input" placeholder="Bank Account Number" onChange={(e) => setSettings({ ...settings, bankAccountNumber: e.target.value })} />
            <input className="input" placeholder="Bank Name" onChange={(e) => setSettings({ ...settings, bankName: e.target.value })} />
            <input className="input" placeholder="IBAN" onChange={(e) => setSettings({ ...settings, iban: e.target.value })} />
            <input className="input" placeholder="Crypto Network e.g. USDT TRC20" value={settings.cryptoNetwork} onChange={(e) => setSettings({ ...settings, cryptoNetwork: e.target.value })} />
            <input className="input" placeholder="Crypto Wallet Address" onChange={(e) => setSettings({ ...settings, cryptoWalletAddress: e.target.value })} />
            <input className="input" placeholder="WhatsApp Number" onChange={(e) => setSettings({ ...settings, whatsappNumber: e.target.value })} />
            <button className="btn-green">Save Payment Settings</button>{msg && <p className="text-slate-300">{msg}</p>}
          </form>
        </section>
      )}
    </main>
  );
}
