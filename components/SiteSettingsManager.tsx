"use client";

import { useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db, firebaseConfigured } from "@/lib/firebase";
import { defaultSiteSettings, SiteSettings, socialLinks } from "@/lib/site";

const textFields: Array<[keyof SiteSettings, string, string]> = [
  ["brandName", "Brand Name", "GSM Trading Lab"],
  ["brandHandle", "Brand Handle", "@gsmtradinglab"],
  ["heroKicker", "Hero Badge / Kicker", "Crypto Command Center"],
  ["heroTitle", "Hero Main Headline", "Master Risk. Build Discipline. Trade With Confidence."],
  ["heroSubtitle", "Hero Subtitle", "Short public homepage description"],
  ["motivationLine", "Motivational Line", "Survive the market first..."],
  ["primaryCtaLabel", "Primary Button Label", "Start Your Trading Journey"],
  ["primaryCtaHref", "Primary Button Link", "/register"],
  ["secondaryCtaLabel", "Secondary Button Label", "Explore Free Signals"],
  ["secondaryCtaHref", "Secondary Button Link", "/signals"],
  ["whatsappUrl", "WhatsApp Channel URL", "https://whatsapp.com/channel/..."],
  ["supportEmail", "Support Email", "support@gsmtradinglab.com"],
  ["phone", "Phone / WhatsApp Number", "+92..."],
];

export default function SiteSettingsManager() {
  const [form, setForm] = useState<SiteSettings>(defaultSiteSettings);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    async function load() {
      if (!firebaseConfigured || !db) return;
      const snap = await getDoc(doc(db, "websiteSettings", "main"));
      if (snap.exists()) setForm({ ...defaultSiteSettings, ...(snap.data() as Partial<SiteSettings>) });
    }
    load();
  }, []);

  function setValue(key: keyof SiteSettings, value: string) {
    setForm((old) => ({ ...old, [key]: value }));
  }

  async function save() {
    if (!db) {
      setMsg("Firebase is not configured.");
      return;
    }
    await setDoc(doc(db, "websiteSettings", "main"), {
      ...form,
      status: "published",
      updatedAt: new Date().toISOString(),
    }, { merge: true });
    setMsg("Website settings saved. Public homepage, footer and social links will use these values.");
  }

  return (
    <section className="grid gap-6">
      <div className="rounded-[2rem] border border-emerald-400/20 bg-gradient-to-br from-emerald-400/10 via-cyan-400/5 to-white/[0.03] p-6">
        <p className="badge w-fit">Full Website Control</p>
        <h2 className="mt-4 text-3xl font-black">Edit Public Site From Admin</h2>
        <p className="mt-3 max-w-3xl text-slate-400">
          Update homepage copy, motivation headline, CTAs, WhatsApp channel and all social handles. Username default is @gsmtradinglab across platforms.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {textFields.map(([key, label, placeholder]) => (
          <label className="grid gap-2" key={key}>
            <span className="text-sm font-bold text-slate-300">{label}</span>
            {key === "heroSubtitle" || key === "motivationLine" ? (
              <textarea className="input min-h-28" value={form[key]} placeholder={placeholder} onChange={(e) => setValue(key, e.target.value)} />
            ) : (
              <input className="input" value={form[key]} placeholder={placeholder} onChange={(e) => setValue(key, e.target.value)} />
            )}
          </label>
        ))}
      </div>

      <label className="grid gap-2">
        <span className="text-sm font-bold text-slate-300">Footer Risk/Brand Text</span>
        <textarea className="input min-h-28" value={form.footerText} onChange={(e) => setValue("footerText", e.target.value)} />
      </label>

      <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
        <h3 className="text-2xl font-black">Social Media Handles</h3>
        <p className="mt-2 text-sm text-slate-400">All usernames are set to @gsmtradinglab. Edit URLs only if platform links change.</p>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {socialLinks.map(([label, key]) => (
            <label className="grid gap-2" key={key}>
              <span className="text-sm font-bold text-slate-300">{label}</span>
              <input className="input" value={form[key]} onChange={(e) => setValue(key, e.target.value)} />
            </label>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button type="button" onClick={save} className="btn-green">Save Full Website Settings</button>
        <a className="btn-dark" href="/" target="_blank">Preview Public Site</a>
        {msg && <p className="text-sm font-bold text-emerald-300">{msg}</p>}
      </div>
    </section>
  );
}
