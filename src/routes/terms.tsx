import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/terms")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Survélans" },
      { name: "description", content: "The terms for using the Survelans website and joining the waitlist." },
      { property: "og:title", content: "Terms & Conditions — Survélans" },
      { property: "og:description", content: "The terms for using the Survelans website and waitlist." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <LegalPage eyebrow="Legal" title="Terms & Conditions" intro="These terms cover how you use this website and our waitlist. Last updated 16 October 2026.">
      <section><h2>1. Who we are</h2><p>Survelans is a Nigerian personal safety technology brand. You can reach us at <a href="mailto:support@survelans.com">support@survelans.com</a>.</p></section>
      <section><h2>2. Products in development</h2><p>The Survelans wearable and companion app are still being built. Features, designs, prices and launch dates shown on this site can change. Images marked as prototype or concept are not final products.</p></section>
      <section><h2>3. Not an emergency service</h2><p>Survelans is a personal safety aid. It does not contact the police or emergency services and cannot promise a rescue or response. It depends on your phone, battery, permissions, Bluetooth, GPS and internet connection. In an emergency, also contact local emergency services if you can.</p></section>
      <section><h2>4. Joining the waitlist</h2><p>Joining the waitlist is free and does not mean you've ordered or reserved anything. We may email you about the launch if you agree. You can leave the list any time.</p></section>
      <section><h2>5. Other safety products</h2><p>Items like pepper spray, tasers and alarms must be used lawfully and responsibly. Check the laws where you live. Results can vary and are not guaranteed.</p></section>
      <section><h2>6. Using this website</h2><ul><li>Don't misuse the site, send spam, or try to break its security.</li><li>Our logo, text and images belong to Survelans and can't be copied without permission.</li></ul></section>
      <section><h2>7. Liability</h2><p>We work hard to keep the site accurate, but it's provided "as is". To the extent the law allows, we aren't responsible for losses from using the site.</p></section>
      <section><h2>8. Governing law</h2><p>These terms are governed by the laws of the Federal Republic of Nigeria.</p></section>
      <section><h2>9. Changes</h2><p>We may update these terms. The date at the top shows the latest version.</p></section>
    </LegalPage>
  ),
});
