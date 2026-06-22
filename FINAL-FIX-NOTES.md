# Final Fix Notes

Fixed in this package:

- Moved missing legal/status route folders into `app/` so these URLs no longer 404:
  - `/technical-analysis`
  - `/risk-disclaimer`
  - `/terms`
  - `/privacy`
  - `/refund-policy`
  - `/status`
- Added missing `/learning-modes` page referenced by sitemap.
- Updated Firebase warning copy from Netlify to Vercel.
- Cleaned `package.json` to avoid direct `browserslist` corruption/conflict.
- Added Node 22 hints with `.nvmrc` and `.node-version`.
- Added `.npmrc` for safer Vercel installs.

Vercel required setting:
- Project Settings → Build and Deployment → Node.js Version = `22.x`
- Redeploy with build cache OFF.
