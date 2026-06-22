import CmsCollectionManager from "@/components/CmsCollectionManager";

export default function AdminSiteSettingsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <CmsCollectionManager
        title="Website Settings"
        description="Manage editable site settings in Firestore. Recommended document types: contact, social, payment, seo, banner, and footer."
        collectionName="websiteSettings"
        defaultValues={{ status: "published", settingType: "general" }}
        fields={[
          { name: "title", label: "Setting Title", placeholder: "Homepage Hero" },
          { name: "settingType", label: "Setting Type", type: "select", options: ["general", "contact", "social", "payment", "seo", "banner", "footer"] },
          { name: "status", label: "Status", type: "select", options: ["draft", "published", "archived"] },
          { name: "description", label: "Description", type: "textarea" },
          { name: "primaryValue", label: "Primary Value", placeholder: "https://whatsapp.com/channel/..." },
          { name: "secondaryValue", label: "Secondary Value" },
          { name: "notes", label: "Admin Notes", type: "textarea" },
        ]}
      />
    </main>
  );
}
