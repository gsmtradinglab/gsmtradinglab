import type { Metadata, Viewport } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import { AuthProvider } from "@/lib/auth";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gsmtradinglab.com"),
  title: {
    default: "GSM Trading Lab | Learn Crypto Trading with Mr. GSM",
    template: "%s | GSM Trading Lab",
  },
  description:
    "Practical crypto trading education, risk management, premium market analysis, demo trading practice, and lifetime learning support with Mr. GSM.",
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
    title: "GSM Trading Lab | Learn Crypto Trading with Mr. GSM",
    description:
      "Responsible crypto trading education, technical analysis, futures basics, risk management, demo practice, and premium market analysis.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GSM Trading Lab",
    description: "Learn crypto trading responsibly with Mr. GSM.",
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
          <WhatsAppFloat />
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  );
}
