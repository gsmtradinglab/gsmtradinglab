import CmsCollectionManager from "@/components/CmsCollectionManager";

export default function AdminCmsDataPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <CmsCollectionManager
        title="CMS Data Manager"
        description="Create and update public website content from Firestore. Use this for quick homepage cards, learning notes, public FAQs, and content blocks without touching code."
        collectionName="cmsContent"
        defaultValues={{ status: "published", type: "content-block" }}
        fields={[
          { name: "title", label: "Title", placeholder: "Risk First. Profit Later." },
          { name: "type", label: "Content Type", type: "select", options: ["content-block", "faq", "homepage-card", "notice", "cta"] },
          { name: "status", label: "Status", type: "select", options: ["draft", "published", "archived"] },
          { name: "description", label: "Short Description", type: "textarea" },
          { name: "content", label: "Full Content", type: "textarea" },
          { name: "buttonText", label: "Button Text", placeholder: "Join Now" },
          { name: "buttonUrl", label: "Button URL", placeholder: "/signup" },
        ]}
      />
    </main>
  );
}
