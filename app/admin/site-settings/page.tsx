import SiteSettingsManager from "@/components/SiteSettingsManager";
import CmsCollectionManager from "@/components/CmsCollectionManager";

export default function AdminSiteSettingsPage() {
  return (
    <main className="page-shell">
      <SiteSettingsManager />
      <div className="mt-10">
        <CmsCollectionManager
          title="Advanced Website Settings Collection"
          description="Optional structured settings for contact, payment, SEO, banners, homepage blocks and footer modules. Main public site editor is above."
          collectionName="websiteSettings"
          defaultValues={{ status: "published", settingType: "general" }}
          fields={[
            { name: "title", label: "Setting Title", placeholder: "Homepage Hero" },
            { name: "settingType", label: "Setting Type", type: "select", options: ["general", "contact", "social", "payment", "seo", "banner", "footer", "homepage", "navigation"] },
            { name: "status", label: "Status", type: "select", options: ["draft", "published", "archived"] },
            { name: "description", label: "Description", type: "textarea" },
            { name: "primaryValue", label: "Primary Value", placeholder: "https://whatsapp.com/channel/..." },
            { name: "secondaryValue", label: "Secondary Value" },
            { name: "notes", label: "Admin Notes", type: "textarea" },
          ]}
        />
      </div>
    </main>
  );
}
