"use client";
import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth, googleProvider, firebaseConfigured } from "@/lib/firebase";
import { createOrValidateDeviceSession } from "@/lib/deviceSecurity";

export default function LoginForm(){const r=useRouter(); const [email,setEmail]=useState(""); const [password,setPassword]=useState(""); const [msg,setMsg]=useState("");
 async function login(e:React.FormEvent){e.preventDefault(); try{if(!firebaseConfigured||!auth) throw new Error("Firebase environment variables are missing. Add NEXT_PUBLIC_FIREBASE_* keys in Vercel."); const c = await signInWithEmailAndPassword(auth,email,password); const security = await createOrValidateDeviceSession(c.user, auth); if(!security.ok) return setMsg(security.message || "Device security blocked this login."); r.push("/dashboard")}catch(err:any){setMsg(err.message)}}
 async function google(){if(!firebaseConfigured||!auth) return setMsg("Firebase environment variables are missing. Add NEXT_PUBLIC_FIREBASE_* keys in Vercel."); const c = await signInWithPopup(auth,googleProvider); const security = await createOrValidateDeviceSession(c.user, auth); if(!security.ok) return setMsg(security.message || "Device security blocked this login."); r.push("/dashboard")}
 async function reset(){if(!email) return setMsg("Enter email first"); if(!firebaseConfigured||!auth) return setMsg("Firebase environment variables are missing. Add NEXT_PUBLIC_FIREBASE_* keys in Vercel."); await sendPasswordResetEmail(auth,email); setMsg("Password reset email sent")}
 return <form onSubmit={login} className="card mt-8 space-y-4"><input className="input" placeholder="Email" type="email" onChange={e=>setEmail(e.target.value)}/><input className="input" placeholder="Password" type="password" onChange={e=>setPassword(e.target.value)}/><button className="btn-green w-full">Login</button><button type="button" className="btn-dark w-full" onClick={google}>Continue with Google</button><button type="button" className="text-sm text-green-300" onClick={reset}>Forgot password?</button>{msg&&<p className="text-sm text-slate-300">{msg}</p>}</form>}
