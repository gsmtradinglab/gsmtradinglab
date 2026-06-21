import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";

export const dynamic = "force-dynamic";

type Params = { params: Promise<{ slug: string }> };
const sample: Record<string, { title: string; category: string; content: string }> = {
  "what-is-crypto-trading": { title: "What is Crypto Trading?", category: "Beginner Guides", content: "Crypto trading means buying and selling digital assets like Bitcoin and Ethereum. Beginners should first understand market structure, risk management, position sizing, exchange safety, and emotional control. GSM Trading Lab focuses on education before real-money execution." },
  "why-risk-management-is-important": { title: "Why Risk Management is Important", category: "Risk Management", content: "Risk management is the base of long-term survival. A trader can be right many times and still lose money if position size is too large. Use stop loss, avoid overleverage, and never risk capital you cannot afford to lose." },
  "beginner-guide-to-bitcoin-trading": { title: "Beginner Guide to Bitcoin Trading", category: "Crypto Trading Basics", content: "Bitcoin trading starts with understanding trend, support and resistance, liquidity, market news, and volatility. Always practice on demo before real execution and treat every signal as educational analysis, not guaranteed profit." }
};
export default async function BlogDetail({ params }: Params) {
  const { slug } = await params;
  let post = sample[slug];
  if (db) {
    try {
      const snap = await getDocs(query(collection(db, "blogs"), where("slug", "==", slug), where("status", "==", "published")));
      if (!snap.empty) post = snap.docs[0].data() as any;
    } catch {}
  }
  if (!post) return <main className="mx-auto max-w-3xl px-4 py-10"><h1 className="text-3xl font-bold">Post not found</h1></main>;
  return <main className="mx-auto max-w-3xl px-4 py-10"><p className="text-green-400">{post.category}</p><h1 className="mt-2 text-4xl font-black">{post.title}</h1><article className="card mt-8 whitespace-pre-wrap leading-8 text-slate-200">{post.content}</article><p className="mt-8 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-100">Trading involves high risk. This content is educational only and does not guarantee profit.</p></main>;
}
