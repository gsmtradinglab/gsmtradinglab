"use client";

import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db, firebaseConfigured } from "@/lib/firebase";
import { defaultSiteSettings, SiteSettings } from "@/lib/site";

export function useSiteSettings() {
  const [settings, setSettings] = useState<SiteSettings>(defaultSiteSettings);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    async function load() {
      try {
        if (!firebaseConfigured || !db) return;
        const snap = await getDoc(doc(db, "websiteSettings", "main"));
        if (snap.exists() && active) {
          setSettings({ ...defaultSiteSettings, ...(snap.data() as Partial<SiteSettings>) });
        }
      } finally {
        if (active) setLoading(false);
      }
    }
    load();
    return () => {
      active = false;
    };
  }, []);

  return { settings, loading };
}
