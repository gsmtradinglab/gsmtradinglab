"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db, firebaseConfigured } from "@/lib/firebase";
import { useAuth } from "@/lib/auth";

const staticCourses = [
  { slug: "online-crypto-trading-course", title: "Online Crypto Trading Course", price: "$100", accessLevel: "public", description: "Lifetime online access, beginner to advanced lessons, technical analysis, fundamental analysis, futures basics, risk management, psychology, demo practice, and premium community support." },
  { slug: "physical-crypto-trading-course", title: "Physical Crypto Trading Course", price: "$150", accessLevel: "public", description: "In-person practical chart training, one-to-one guidance options, batch learning, risk management, futures education, premium signals access, and lifetime support." },
];

export default function CoursesPage() {
  const { profile } = useAuth();
  const [courses, setCourses] = useState<any[]>(staticCourses);

  useEffect(() => {
    async function load() {
      if (!firebaseConfigured || !db) return;
      try {
        const snap = await getDocs(query(collection(db, "courses"), orderBy("createdAt", "desc")));
        const live = snap.docs.map((d) => ({ id: d.id, ...d.data() })).filter((x: any) => x.status !== "draft");
        if (live.length) setCourses(live);
      } catch {}
    }
    load();
  }, []);

  function locked(c: any) {
    if (!c.accessLevel || c.accessLevel === "public") return false;
    if (c.accessLevel === "premium") return profile?.courseAccess !== "premium";
    return false;
  }

  return <main className="mx-auto max-w-7xl px-4 py-14">
    <h1 className="text-4xl font-black">GSM Trading Lab Courses</h1>
    <p className="mt-3 max-w-3xl text-slate-300">Practical crypto trading education focused on risk management, technical analysis, market awareness, and responsible trading.</p>
    <div className="mt-8 grid gap-5 md:grid-cols-2">
      {courses.map((c: any) => <div className="card" key={c.id || c.slug || c.title}>
        <div className="flex items-start justify-between gap-4"><h2 className="text-2xl font-bold">{c.title}</h2><span className="rounded-full bg-green-500/10 px-3 py-1 text-green-300">{c.price || c.fee || ""}</span></div>
        <p className="mt-3 text-slate-300">{c.description}</p>
        <p className="mt-3 text-sm text-slate-400">Access: {c.accessLevel || "public"}</p>
        {locked(c) ? <Link href="/payments" className="btn-dark mt-5 inline-block">Unlock Premium</Link> : <Link href="/register" className="btn-green mt-5 inline-block">Register Now</Link>}
      </div>)}
    </div>
  </main>;
}
