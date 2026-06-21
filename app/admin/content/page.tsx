"use client";
import { useAuth } from "@/lib/auth";
import BlogEditor from "@/components/BlogEditor";
import AnnouncementForm from "@/components/AnnouncementForm";
export default function AdminContentPage(){ const { profile, loading } = useAuth(); if(loading) return <main className="p-8">Loading...</main>; if(profile?.role !== "admin" && profile?.role !== "superAdmin") return <main className="mx-auto max-w-3xl px-4 py-10"><div className="card">Admin access required.</div></main>; return <main className="mx-auto max-w-7xl px-4 py-10"><h1 className="text-3xl font-black">Content Management</h1><p className="mt-2 text-slate-300">Manage blogs and announcements from Firestore.</p><div className="mt-8 space-y-8"><BlogEditor/><AnnouncementForm/></div></main> }
