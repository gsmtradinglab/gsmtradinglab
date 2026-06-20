"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db, firebaseConfigured } from "@/lib/firebase";
import { UserProfile } from "@/types";

const AuthContext = createContext<{user: User | null; profile: UserProfile | null; loading: boolean}>({ user: null, profile: null, loading: true });

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!firebaseConfigured || !auth || !db) {
      setLoading(false);
      return;
    }

    const firebaseAuth = auth;
    const firestore = db;

    return onAuthStateChanged(firebaseAuth, async (u) => {
      setUser(u);
      if (!u) { setProfile(null); setLoading(false); return; }
      const ref = doc(firestore, "users", u.uid);
      const snap = await getDoc(ref);
      if (snap.exists()) setProfile(snap.data() as UserProfile);
      else {
        const now = new Date().toISOString();
        const created: UserProfile = { uid: u.uid, fullName: u.displayName || "GSM User", email: u.email || "", role: "user", status: "active", courseAccess: "none", paymentStatus: "none", createdAt: now, updatedAt: now };
        await setDoc(ref, created);
        setProfile(created);
      }
      setLoading(false);
    });
  }, []);

  return <AuthContext.Provider value={{ user, profile, loading }}>{children}</AuthContext.Provider>;
}
export const useAuth = () => useContext(AuthContext);
