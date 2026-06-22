export type SiteSettings = {
  brandName: string;
  brandHandle: string;
  heroKicker: string;
  heroTitle: string;
  heroSubtitle: string;
  motivationLine: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  whatsappUrl: string;
  supportEmail: string;
  phone: string;
  footerText: string;
  xUrl: string;
  instagramUrl: string;
  facebookUrl: string;
  youtubeUrl: string;
  tiktokUrl: string;
  linkedinUrl: string;
  telegramUrl: string;
  tradingViewUrl: string;
};

export const defaultSiteSettings: SiteSettings = {
  brandName: "GSM Trading Lab",
  brandHandle: "@gsmtradinglab",
  heroKicker: "Crypto Command Center",
  heroTitle: "Master Risk. Build Discipline. Trade With Confidence.",
  heroSubtitle:
    "A premium crypto trading ecosystem for practical education, market structure, demo practice, transparent signals, and long-term risk management.",
  motivationLine:
    "Survive the market first. Consistency comes after discipline, planning, and strict risk control.",
  primaryCtaLabel: "Start Your Trading Journey",
  primaryCtaHref: "/register",
  secondaryCtaLabel: "Explore Free Signals",
  secondaryCtaHref: "/signals",
  whatsappUrl: "https://whatsapp.com/channel/0029Vb7BRlOKQuJHPFUykb0g",
  supportEmail: "support@gsmtradinglab.com",
  phone: "",
  footerText:
    "GSM Trading Lab provides trading education, market analysis, demo practice, and community support. No profit is guaranteed. Always use strict risk management.",
  xUrl: "https://x.com/gsmtradinglab",
  instagramUrl: "https://instagram.com/gsmtradinglab",
  facebookUrl: "https://facebook.com/gsmtradinglab",
  youtubeUrl: "https://youtube.com/@gsmtradinglab",
  tiktokUrl: "https://tiktok.com/@gsmtradinglab",
  linkedinUrl: "https://linkedin.com/company/gsmtradinglab",
  telegramUrl: "https://t.me/gsmtradinglab",
  tradingViewUrl: "https://www.tradingview.com/u/gsmtradinglab/",
};

export const socialLinks = [
  ["X", "xUrl"],
  ["Instagram", "instagramUrl"],
  ["Facebook", "facebookUrl"],
  ["YouTube", "youtubeUrl"],
  ["TikTok", "tiktokUrl"],
  ["LinkedIn", "linkedinUrl"],
  ["Telegram", "telegramUrl"],
  ["TradingView", "tradingViewUrl"],
] as const;
