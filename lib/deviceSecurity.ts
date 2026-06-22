import { Auth, signOut, User } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { db, firebaseConfigured } from "@/lib/firebase";

const DEVICE_KEY = "gsm_device_id_v1";

type ClientInfo = {
  ip?: string;
  country?: string;
  region?: string;
  city?: string;
  userAgent?: string;
  platform?: string;
  language?: string;
  languages?: string[];
  timezone?: string;
  screen?: string;
  viewport?: string;
  deviceMemory?: number | string;
  hardwareConcurrency?: number;
  cookieEnabled?: boolean;
  touchPoints?: number;
  referrer?: string;
};

function makeId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `gsm_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

export function getDeviceId() {
  if (typeof window === "undefined") return "server";
  let id = localStorage.getItem(DEVICE_KEY);
  if (!id) {
    id = makeId();
    localStorage.setItem(DEVICE_KEY, id);
  }
  return id;
}

async function getServerClientInfo(): Promise<Partial<ClientInfo>> {
  try {
    const res = await fetch("/api/security/client-info", { cache: "no-store" });
    if (!res.ok) return {};
    return await res.json();
  } catch {
    return {};
  }
}

export async function collectSecurityDetails(): Promise<ClientInfo> {
  if (typeof window === "undefined") return {};
  const serverInfo = await getServerClientInfo();
  const nav: any = navigator;
  return {
    ...serverInfo,
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    languages: Array.from(navigator.languages || []),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    screen: `${window.screen.width}x${window.screen.height}x${window.screen.colorDepth}`,
    viewport: `${window.innerWidth}x${window.innerHeight}`,
    deviceMemory: nav.deviceMemory || "unknown",
    hardwareConcurrency: navigator.hardwareConcurrency,
    cookieEnabled: navigator.cookieEnabled,
    touchPoints: navigator.maxTouchPoints,
    referrer: document.referrer || "direct",
  };
}

export async function createOrValidateDeviceSession(user: User, authInstance?: Auth | null) {
  if (!firebaseConfigured || !db) return { ok: true };
  const deviceId = getDeviceId();
  const now = new Date().toISOString();
  const info = await collectSecurityDetails();
  const userRef = doc(db, "users", user.uid);
  const sessionRef = doc(db, "activeSessions", user.uid);
  const snap = await getDoc(sessionRef);

  const sessionPayload = {
    userId: user.uid,
    email: user.email || "",
    deviceId,
    locked: true,
    status: "active",
    lastSeenAt: now,
    lastSeenServerAt: serverTimestamp(),
    securityInfo: info,
  };

  if (snap.exists()) {
    const data: any = snap.data();
    if (data.deviceId && data.deviceId !== deviceId && data.status !== "revoked") {
      await setDoc(doc(db, "blockedLoginAttempts", `${user.uid}_${Date.now()}`), {
        userId: user.uid,
        email: user.email || "",
        attemptedDeviceId: deviceId,
        allowedDeviceId: data.deviceId,
        createdAt: now,
        createdServerAt: serverTimestamp(),
        securityInfo: info,
        reason: "ONE_DEVICE_POLICY_BLOCK",
      });
      if (authInstance) await signOut(authInstance);
      return { ok: false, message: "Security lock active: this account is already locked to another device. Contact admin to reset device access." };
    }
  }

  await setDoc(sessionRef, { ...sessionPayload, createdAt: snap.exists() ? (snap.data() as any).createdAt || now : now }, { merge: true });
  await setDoc(userRef, {
    deviceLockEnabled: true,
    lockedDeviceId: deviceId,
    lastLoginAt: now,
    lastLoginSecurityInfo: info,
    updatedAt: now,
  }, { merge: true });
  await setDoc(doc(db, "securityLogs", `${user.uid}_${Date.now()}`), {
    userId: user.uid,
    email: user.email || "",
    event: "LOGIN_SESSION_VALIDATED",
    deviceId,
    createdAt: now,
    createdServerAt: serverTimestamp(),
    securityInfo: info,
  });

  return { ok: true };
}

export async function revokeUserDevice(uid: string) {
  if (!db) return;
  await updateDoc(doc(db, "activeSessions", uid), {
    status: "revoked",
    revokedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
}
