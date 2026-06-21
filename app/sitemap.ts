import type { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://gsmtradinglab.com'
  return ['', '/about', '/founder', '/courses', '/signals', '/signal-performance', '/tools', '/market-tools', '/resources', '/blog', '/faq', '/contact', '/legal/terms', '/legal/privacy', '/legal/risk-disclaimer', '/legal/refund-policy'].map(path => ({ url: `${base}${path}`, lastModified: new Date() }))
}
