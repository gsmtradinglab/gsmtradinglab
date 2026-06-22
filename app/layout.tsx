import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import { AuthProvider } from "@/lib/auth";

export const metadata: Metadata = { title: "GSM Trading Lab", description: "Learn crypto trading responsibly with Mr. GSM." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><AuthProvider><Nav />{children}</AuthProvider></body></html>;
}
