"use client";

import { useState } from "react";
import { collection, doc, setDoc } from "firebase/firestore";
import { db, firebaseConfigured } from "@/lib/firebase";
import { useAuth } from "@/lib/auth";

const sampleData = [
  {
    collectionName: "cmsContent",
    id: "homepage-risk-first",
    data: {
      title: "Risk First. Profit Later.",
      type: "homepage-card",
      status: "published",
      description: "GSM Trading Lab teaches students to protect capital before chasing profit.",
      content: "Every student is trained to use stop loss, fixed risk per trade, position sizing, and emotional discipline.",
      buttonText: "Start Learning",
      buttonUrl: "/start-here",
    },
  },
  {
    collectionName: "cmsContent",
    id: "faq-profit-guarantee",
    data: {
      title: "Is profit guaranteed?",
      type: "faq",
      status: "published",
      description: "No. Trading involves risk.",
      content: "GSM Trading Lab provides education, analysis, support, and signals only. No profit, fixed return, or loss recovery is guaranteed.",
    },
  },
  {
    collectionName: "websiteSettings",
    id: "whatsapp-channel",
    data: {
      title: "WhatsApp Channel",
      settingType: "social",
      status: "published",
      description: "Main WhatsApp community CTA link.",
      primaryValue: "https://whatsapp.com/channel/0029Vb7BRlOKQuJHPFUykb0g",
      secondaryValue: "@gsmtradinglab",
    },
  },
];

export default function DataSeedPage() {
  const { profile } = useAuth();
  const [status, setStatus] = useState("");
  const isAdmin = profile?.role && profile.role !== "user";

  async function seed() {
    if (!firebaseConfigured || !db || !isAdmin) return;
    setStatus("Seeding data...");
    for (const item of sampleData) {
      await setDoc(doc(collection(db, item.collectionName), item.id), {
        ...item.data,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }, { merge: true });
    }
    setStatus("Sample CMS data created successfully.");
  }

  if (!isAdmin) {
    return <main className="mx-auto max-w-4xl px-4 py-10"><div className="card"><h1 className="text-2xl font-black">Admin access required</h1></div></main>;
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <section className="rounded-[2rem] border border-green-400/20 bg-gradient-to-br from-green-400/10 via-white/[0.03] to-red-500/10 p-8">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-green-300">Phase 29</p>
        <h1 className="mt-3 text-4xl font-black">Firebase Data Seed</h1>
        <p className="mt-3 max-w-3xl text-slate-300">Create safe starter content in Firestore for homepage cards, FAQ, and website settings. This does not create fake trading performance.</p>
        <button onClick={seed} className="btn-green mt-6">Create Sample CMS Data</button>
        {status && <p className="mt-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-slate-300">{status}</p>}
      </section>
      <section className="mt-6 grid gap-4 md:grid-cols-3">
        {sampleData.map((item) => <div key={item.id} className="card"><p className="text-xs text-green-300">{item.collectionName}</p><h2 className="mt-2 font-black">{item.data.title}</h2><p className="mt-2 text-sm text-slate-400">{item.id}</p></div>)}
      </section>
    </main>
  );
}
