import Link from "next/link";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";

export const dynamic = "force-dynamic";

type BlogPost = { id: string; title: string; slug: string; category: string; content: string; metaDescription?: string; status: string; updatedAt?: any };

export default async function BlogPage() {
  let posts: BlogPost[] = [];
  if (db) {
    try {
      const snap = await getDocs(query(collection(db, "blogs"), where("status", "==", "published"), orderBy("updatedAt", "desc")));
      posts = snap.docs.map(d => ({ id: d.id, ...(d.data() as Omit<BlogPost, "id">) }));
    } catch { posts = []; }
  }
  const samples = [
    { title: "What is Crypto Trading?", slug: "what-is-crypto-trading", category: "Beginner Guides", content: "Learn crypto trading basics, risk, exchanges, spot markets, futures, and why education matters before risking real capital." },
    { title: "Why Risk Management is Important", slug: "why-risk-management-is-important", category: "Risk Management", content: "Risk management helps traders survive losing streaks, control emotions, and protect capital from one bad decision." },
    { title: "Beginner Guide to Bitcoin Trading", slug: "beginner-guide-to-bitcoin-trading", category: "Crypto Trading Basics", content: "Bitcoin trading requires trend awareness, position sizing, stop loss planning, and patience." }
  ];
  const list = posts.length ? posts : samples;
  return <main className="mx-auto max-w-7xl px-4 py-10"><h1 className="text-3xl font-black">GSM Trading Lab Blog</h1><p className="mt-3 text-slate-300">Educational posts about crypto trading, risk management, psychology, and market awareness.</p><div className="mt-8 grid gap-5 md:grid-cols-3">{list.map(p => <Link href={`/blog/${p.slug}`} className="card block" key={p.slug}><p className="text-sm text-green-400">{p.category}</p><h2 className="mt-2 text-xl font-bold">{p.title}</h2><p className="mt-3 line-clamp-3 text-sm text-slate-300">{p.content}</p></Link>)}</div></main>;
}
