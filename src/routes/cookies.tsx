import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/cookies")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Cookie Policy — Survélans" },
      { name: "description", content: "How the Survelans website uses cookies and similar storage." },
      { property: "og:title", content: "Cookie Policy — Survélans" },
      { property: "og:description", content: "How the Survelans website uses cookies." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <LegalPage eyebrow="Legal" title="Cookie Policy" intro="Cookies are small files a website saves in your browser. Here's how we use them. Last updated 16 October 2026.">
      <section><h2>What we use</h2><ul><li><strong>Essential storage:</strong> keeps the site working and keeps team members signed in to the admin area.</li><li><strong>Simple event counts:</strong> we count things like button clicks and waitlist signups. These counts don't include your name, email or location.</li></ul></section>
      <section><h2>What we don't use</h2><p>We don't use advertising cookies or sell browsing data.</p></section>
      <section><h2>Your choices</h2><p>You can block or delete cookies in your browser settings. Some parts of the site may not work properly if you do.</p></section>
      <section><h2>Questions</h2><p>Email <a href="mailto:support@survelans.com">support@survelans.com</a>.</p></section>
    </LegalPage>
  ),
});
