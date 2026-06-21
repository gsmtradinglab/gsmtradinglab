import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.gsmtradinglab.com";
  const pages = [
    "",
    "/start-here",
    "/about",
    "/founder",
    "/courses",
    "/learning-modes",
    "/signals",
    "/signal-performance",
    "/market-tools",
    "/tools",
    "/resources",
    "/blog",
    "/faq",
    "/contact",
    "/register",
    "/legal/terms",
    "/legal/privacy",
    "/legal/risk-disclaimer",
    "/legal/refund-policy",
  ];
  return pages.map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: "weekly", priority: path === "" ? 1 : 0.7 }));
}
