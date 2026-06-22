"use client";
import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { auth, db, googleProvider, firebaseConfigured } from "@/lib/firebase";

export default function SignupForm(){
 const r=useRouter(); const [form,setForm]=useState({fullName:"",email:"",phone:"",country:"",city:"",password:""}); const [msg,setMsg]=useState("");
 async function saveUser(uid:string,email:string,name:string){if(!db) throw new Error("Firebase is not configured"); const now=new Date().toISOString(); await setDoc(doc(db,"users",uid),{uid,fullName:name,email,phone:form.phone,country:form.country,city:form.city,role:"user",status:"active",courseAccess:"none",paymentStatus:"none",createdAt:now,updatedAt:now},{merge:true});}
 async function submit(e:React.FormEvent){e.preventDefault(); setMsg("Creating account..."); try{if(!firebaseConfigured||!auth||!db) throw new Error("Firebase environment variables are missing. Add NEXT_PUBLIC_FIREBASE_* keys in Netlify."); const c=await createUserWithEmailAndPassword(auth,form.email,form.password); await updateProfile(c.user,{displayName:form.fullName}); await saveUser(c.user.uid,form.email,form.fullName); r.push("/dashboard");}catch(err:any){setMsg(err.message)}}
 async function google(){if(!firebaseConfigured||!auth||!db) return setMsg("Firebase environment variables are missing. Add NEXT_PUBLIC_FIREBASE_* keys in Netlify."); const c=await signInWithPopup(auth,googleProvider); await saveUser(c.user.uid,c.user.email||"",c.user.displayName||"GSM User"); r.push("/dashboard")}
 return <form onSubmit={submit} className="card mt-8 space-y-4"><input className="input" placeholder="Full Name" onChange={e=>setForm({...form,fullName:e.target.value})}/><input className="input" placeholder="Email" type="email" onChange={e=>setForm({...form,email:e.target.value})}/><input className="input" placeholder="Phone / WhatsApp" onChange={e=>setForm({...form,phone:e.target.value})}/><input className="input" placeholder="Country" onChange={e=>setForm({...form,country:e.target.value})}/><input className="input" placeholder="City" onChange={e=>setForm({...form,city:e.target.value})}/><input className="input" placeholder="Password" type="password" onChange={e=>setForm({...form,password:e.target.value})}/><button className="btn-green w-full">Create Account</button><button type="button" className="btn-dark w-full" onClick={google}>Continue with Google</button>{msg&&<p className="text-sm text-slate-300">{msg}</p>}</form>
}
