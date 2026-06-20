"use client";
import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useAuth } from "@/lib/auth";

export default function Nav() {
  const { user, profile } = useAuth();
  return <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
      <Link href="/" className="text-xl font-black"><span className="text-green-400">GSM</span> Trading Lab</Link>
      <div className="hidden gap-5 text-sm md:flex">
        <Link href="/courses">Courses</Link><Link href="/signals">Signals</Link><Link href="/market-tools">Market Tools</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link>
      </div>
      <div className="flex gap-2 text-sm">
        {user ? <><Link className="btn-dark px-3 py-2" href="/dashboard">Dashboard</Link>{profile?.role !== "user" && <Link className="btn-dark px-3 py-2" href="/admin">Admin</Link>}<button className="btn-green px-3 py-2" onClick={() => auth && signOut(auth)}>Logout</button></> : <><Link className="btn-dark px-3 py-2" href="/login">Login</Link><Link className="btn-green px-3 py-2" href="/signup">Signup</Link></>}
      </div>
    </div>
  </nav>
}
