# Phase 29 — Firebase CMS & Data Wiring Improvements

This phase adds admin tools for managing editable website data directly in Firestore.

## Added

- `/admin/cms-data` — generic Firestore CMS manager for content blocks, FAQs, CTAs, and notices.
- `/admin/site-settings` — editable settings manager for contact, social, SEO, payment, banner, and footer settings.
- `/admin/data-seed` — safe starter data seeder for CMS content and WhatsApp settings.
- `components/CmsCollectionManager.tsx` — reusable Firestore CRUD component.
- Navbar admin dropdown links updated.
- Sitemap updated.
- Firestore rules updated for `cmsContent`.

## Important

This phase does not create fake trading performance, fake testimonials, or fake profit claims. Seed data is only educational/CMS starter content.

## After Upload

1. Upload ZIP files to GitHub and commit.
2. Let Vercel redeploy.
3. Publish updated `firebase/firestore.rules` in Firebase Console.
4. Login as admin.
5. Open `/admin/data-seed` and click **Create Sample CMS Data**.
6. Open `/admin/cms-data` and `/admin/site-settings` to edit data.
