import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Launch Checklist",
  description: "Final production launch checklist for GSM Trading Lab deployment.",
};

const items = [
  "Vercel environment variables added for Production, Preview, and Development.",
  "Firebase Email/Password and Google login enabled.",
  "Firestore rules published.",
  "Storage rules published.",
  "Admin user role set to admin in Firestore.",
  "Custom domain HTTPS working with Cloudflare/Vercel.",
  "Signup, login, dashboard, admin panel, payments, signals, journal, and demo trading tested.",
  "No fake performance stats or guaranteed profit claims displayed.",
];

export default function LaunchChecklistPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-4xl font-black">Launch Checklist</h1>
      <p className="mt-4 text-slate-300">Use this page before final promotion or ad traffic.</p>
      <div className="mt-8 space-y-3">
        {items.map((item) => (
          <div key={item} className="card flex gap-3">
            <span className="text-green-400">✓</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
