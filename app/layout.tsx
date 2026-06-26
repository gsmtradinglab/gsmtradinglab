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
    default: "GSM Trading Lab | Master Risk. Build Discipline.",
    template: "%s | GSM Trading Lab",
  },
  description:
    "Practical trading education, market analysis, demo trading practice, premium signals, and risk-first learning support under GSM Trading Lab.",
  keywords: [
    "GSM Trading Lab",
    "GSM Trading Lab",
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
    images: [{ url: "/brand/gsm-banner-dark.jpg", width: 1200, height: 628, alt: "GSM Trading Lab" }],
    title: "GSM Trading Lab | Master Risk. Build Discipline.",
    description:
      "Risk-first trading education, technical analysis, demo practice, signals, and premium market learning ecosystem.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GSM Trading Lab",
    description: "Master risk, build discipline, and learn markets with GSM Trading Lab.",
  },
  icons: { icon: "/brand/gsm-logo-dark-compact.jpg", apple: "/brand/gsm-logo-light-compact.jpg" },
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
