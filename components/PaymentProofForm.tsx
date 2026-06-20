"use client";
import { useState } from "react";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, firebaseConfigured, storage } from "@/lib/firebase";
import { useAuth } from "@/lib/auth";

export default function PaymentProofForm() {
  const { user, profile } = useAuth();
  const [file, setFile] = useState<File | null>(null);
  const [form, setForm] = useState({ courseType: "Online Course", amount: "100", currency: "USD", paymentMethod: "Easypaisa", transactionId: "" });
  const [msg, setMsg] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!firebaseConfigured || !db || !storage) return setMsg("Firebase is not configured.");
    if (!user || !profile) return setMsg("Please login first.");
    setMsg("Uploading payment proof...");
    try {
      let paymentProofUrl = "";
      if (file) {
        if (!file.type.startsWith("image/") && file.type !== "application/pdf") throw new Error("Only image or PDF files are allowed.");
        if (file.size > 10 * 1024 * 1024) throw new Error("Maximum file size is 10MB.");
        const fileRef = ref(storage, `payment-proofs/${user.uid}/${Date.now()}-${file.name}`);
        await uploadBytes(fileRef, file);
        paymentProofUrl = await getDownloadURL(fileRef);
      }
      const now = new Date().toISOString();
      await addDoc(collection(db, "payments"), {
        userId: user.uid,
        courseType: form.courseType,
        amount: Number(form.amount),
        currency: form.currency,
        paymentMethod: form.paymentMethod,
        transactionId: form.transactionId,
        paymentProofUrl,
        status: "pending",
        createdAt: now,
      });
      await updateDoc(doc(db, "users", user.uid), { paymentStatus: "pending", selectedCourse: form.courseType, updatedAt: now });
      setMsg("Payment proof submitted. Admin will verify it manually.");
    } catch (err: any) {
      setMsg(err.message || "Payment submission failed.");
    }
  }

  return <form onSubmit={submit} className="card mt-8 grid gap-4">
    <select className="input" value={form.courseType} onChange={e=>setForm({...form, courseType:e.target.value, amount: e.target.value.includes("Physical") ? "150" : "100"})}>
      <option>Online Course</option><option>Physical Course</option>
    </select>
    <input className="input" value={form.amount} onChange={e=>setForm({...form, amount:e.target.value})} placeholder="Amount" />
    <select className="input" value={form.currency} onChange={e=>setForm({...form, currency:e.target.value})}><option>USD</option><option>PKR</option><option>USDT</option></select>
    <select className="input" value={form.paymentMethod} onChange={e=>setForm({...form, paymentMethod:e.target.value})}><option>Cash</option><option>Easypaisa</option><option>JazzCash</option><option>Bank Transfer</option><option>Crypto / USDT</option></select>
    <input className="input" value={form.transactionId} onChange={e=>setForm({...form, transactionId:e.target.value})} placeholder="Transaction ID / Reference" />
    <input className="input" type="file" accept="image/*,application/pdf" onChange={e=>setFile(e.target.files?.[0] || null)} />
    <button className="btn-green">Upload Payment Proof</button>
    {msg && <p className="text-slate-300">{msg}</p>}
  </form>
}
