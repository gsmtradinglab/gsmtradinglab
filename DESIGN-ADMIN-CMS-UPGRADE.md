# GSM Trading Lab Design + Admin CMS Upgrade

Included fixes:
- Homepage copy changed from “Learn with Mr GSM” style to motivational crypto-platform positioning.
- Public homepage now reads Firestore document `websiteSettings/main` when available.
- Admin can edit homepage text, CTAs, WhatsApp channel, footer text and all social URLs from `/admin` → Site tab or `/admin/site-settings`.
- Footer includes A-Z social handles using @gsmtradinglab.
- Modern crypto OS theme polish added in `globals.css`.
- Missing direct legal/status/technical pages added to stop 404 errors.

Important:
- Publish Firestore rules that allow public read and admin write for `websiteSettings`.
- After upload, redeploy Vercel with cache OFF.
