"use client";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/lib/auth";
export default function SupportForm(){const {user}=useAuth(); const [msg,setMsg]=useState(""); const [f,setF]=useState({subject:"",category:"Course",message:""}); async function submit(e:React.FormEvent){e.preventDefault(); const now=new Date().toISOString(); await addDoc(collection(db,"supportTickets"),{userId:user?.uid||null,...f,status:"Open",createdAt:now,updatedAt:now}); setMsg("Support ticket submitted.")} return <form onSubmit={submit} className="card mt-8 space-y-4"><input className="input" placeholder="Subject" onChange={e=>setF({...f,subject:e.target.value})}/><select className="input" onChange={e=>setF({...f,category:e.target.value})}><option>Course</option><option>Payment</option><option>Technical Issue</option><option>Trading Question</option><option>General Support</option></select><textarea className="input min-h-28" placeholder="Message" onChange={e=>setF({...f,message:e.target.value})}/><button className="btn-green">Submit</button>{msg&&<p>{msg}</p>}</form>}
