import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { DataRequestForm } from "@/components/DataRequestForm";

export const Route = createFileRoute("/data-retention")({
  head: () => ({
    meta: [
      { title: "Data Retention & Deletion — Survélans" },
      { name: "description", content: "How long Survelans keeps your information and how to unsubscribe or delete your data." },
      { property: "og:title", content: "Data Retention & Deletion — Survélans" },
      { property: "og:description", content: "How long we keep your data and how to delete it." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <LegalPage eyebrow="Your data" title="Data Retention & Deletion" intro="We only keep your information as long as we need it. Last updated 16 October 2026.">
      <section><h2>How long we keep things</h2><ul>
        <li><strong>Waitlist details</strong> (name, email, optional phone, consent): until launch updates end or you leave the list.</li>
        <li><strong>Contact messages:</strong> up to 24 months, so we can help with follow-ups.</li>
        <li><strong>Event counts:</strong> anonymous, kept to understand what's working on the site.</li>
        <li><strong>App emergency data</strong> (when the app launches): recordings and precise locations won't be kept forever by default. Final periods will be set before release.</li>
      </ul></section>
      <section><h2>Your rights</h2><p>Under the Nigeria Data Protection Act 2023 you can ask to see, correct or delete your data, or stop marketing emails. You can also complain to the Nigeria Data Protection Commission.</p></section>
      <section><h2>Unsubscribe or delete your data</h2><p className="mb-4">Use this form, or email <a href="mailto:support@survelans.com">support@survelans.com</a>.</p><DataRequestForm /></section>
    </LegalPage>
  ),
});
