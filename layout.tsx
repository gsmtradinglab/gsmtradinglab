import type { Metadata, Viewport } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import { AuthProvider } from "@/lib/auth";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gsmtradinglab.com"),
  title: {
    default: "GSM Trading Lab | Master Risk. Build Discipline. Trade With Confidence.",
    template: "%s | GSM Trading Lab",
  },
  description:
    "Premium crypto trading education, market structure, risk management, demo practice, transparent signals, and community support built around discipline.",
  keywords: [
    "GSM Trading Lab",
    "Mr GSM",
    "crypto trading course",
    "learn crypto trading",
    "crypto trading Pakistan",
    "technical analysis course",
    "risk management trading course",
    "crypto signals",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://www.gsmtradinglab.com",
    siteName: "GSM Trading Lab",
    title: "GSM Trading Lab | Master Risk. Build Discipline. Trade With Confidence.",
    description:
      "Risk-first crypto education, market analysis, demo practice, premium signals and disciplined trading systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GSM Trading Lab",
    description: "Master risk, build discipline, and trade with a structured process.",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#050816",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Nav />
          {children}
          <Footer />
          <WhatsAppFloat />
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  );
}
