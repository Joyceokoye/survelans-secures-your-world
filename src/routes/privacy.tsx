import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Mail } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Survelans" },
      { name: "description", content: "How Survelans handles account, emergency-contact, location, audio, device, and support information." },
      { property: "og:title", content: "Privacy Policy — Survelans" },
      { property: "og:description", content: "Read how Survelans collects, uses, protects, retains, and shares personal information." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacyPolicy,
});

const sections = [
  {
    title: "1. About this policy",
    content: [
      "This policy explains how Survelans handles personal information when you use our website, contact support, buy a product, or use the planned Survelans app and connected Safety Bracelet.",
      "We follow the Nigeria Data Protection Act 2023 and applicable guidance from the Nigeria Data Protection Commission. Product features may change during development, and we will update this notice when our data practices change.",
    ],
  },
  {
    title: "2. Information we may collect",
    content: [
      "Account and contact details, such as your name, phone number, email address, login details, and delivery information.",
      "Emergency-contact details that you choose to add, including names and phone numbers. You should tell those contacts and have permission to provide their details.",
      "Emergency-session information, which may include the time an SOS was triggered, your phone’s live or last known location, permitted audio recordings, alert delivery status, and an incident timeline.",
      "Device and technical information, such as the bracelet identifier, pairing status, battery information where supported, phone type, app version, IP address, crash reports, and security logs.",
      "Messages you send to support, product enquiries, order details, and any information you choose to include.",
    ],
  },
  {
    title: "3. Why we use information",
    content: [
      "We use information to create and secure accounts, pair devices, provide the SOS workflow, notify chosen contacts, show incident records, complete orders, answer support requests, prevent misuse, fix faults, and meet legal duties.",
      "Depending on the activity, our lawful reason may be your consent, our contract with you, a legal duty, our legitimate interest in operating a safe service, or protection of a person’s vital interests during an emergency. We will ask for clear permission before using the phone’s location or microphone where required.",
    ],
  },
  {
    title: "4. Location, audio, and phone permissions",
    content: [
      "The bracelet itself relies on the paired phone for GPS, microphone access, internet connection, and most processing. The app will only use these features when the necessary settings and permissions allow it.",
      "Location and audio can reveal sensitive details. We limit their use to the emergency and safety functions you choose. App permission prompts are not the whole consent process; the app will also explain what a permission does before you enable it.",
    ],
  },
  {
    title: "5. Who may receive information",
    content: [
      "Your chosen emergency contacts may receive an alert, identity details, and a location link when you activate SOS. They do not automatically receive every item stored in your account.",
      "Trusted companies may process hosting, notifications, maps, customer support, analytics, payments, or message delivery for us under confidentiality and data-protection terms. We may also disclose information when lawfully required, to investigate abuse, or to protect someone from serious harm.",
      "We do not sell personal information. We do not use emergency audio or precise location for advertising.",
    ],
  },
  {
    title: "6. Storage, retention, and deletion",
    content: [
      "We keep information only as long as needed for the purpose described, to protect the service, resolve a dispute, or meet a legal duty. Account information is normally kept while the account is active. Support and transaction records may be kept for legal, fraud-prevention, and service purposes.",
      "Emergency recordings and precise location records will not be kept forever by default. The app will provide retention information and deletion controls before these features are publicly released. A record may be kept longer if you preserve it, it relates to an active incident, or the law requires it.",
    ],
  },
  {
    title: "7. How we protect information",
    content: [
      "We plan safeguards including encryption in transit and at rest, controlled access, secure pairing credentials, audit logs, backups, security testing, and short-lived access to evidence instead of public links.",
      "No service can promise complete security. Please use a strong password, protect your phone, keep the app and bracelet updated, and contact us quickly if you notice unusual activity.",
    ],
  },
  {
    title: "8. International data transfers",
    content: [
      "Some service providers may store or process information outside Nigeria. Where this happens, we will use a lawful transfer method and reasonable protections required by Nigerian data-protection law.",
    ],
  },
  {
    title: "9. Children and vulnerable users",
    content: [
      "Survelans may support family safety, but children should not create an account or use location and recording features without a parent or guardian where consent is legally required. We will use age-appropriate notices and extra safeguards before offering child-focused features.",
    ],
  },
  {
    title: "10. Your choices and rights",
    content: [
      "You may ask to access, correct, delete, or restrict your information, object to certain uses, withdraw consent where consent is the basis, or receive a portable copy where the law provides. Withdrawing permission can stop location, recording, or Bluetooth features from working.",
      "You may also complain to the Nigeria Data Protection Commission. We may need to confirm your identity before completing a request, and lawful exceptions may apply.",
    ],
  },
  {
    title: "11. Changes and contact",
    content: [
      "We may update this policy as the product, law, or our providers change. Important changes will be shown clearly in the app or on this page, with a new effective date.",
      "For privacy questions, rights requests, complaints, product support, or concerns about an emergency record, email support@survelans.com.",
    ],
  },
];

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-gold hover:underline mb-10">
            <ArrowLeft className="w-4 h-4" /> Back to Survelans
          </Link>
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Your information</p>
          <h1 className="text-5xl md:text-7xl mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            A clear guide to what Survelans may collect, why we need it, and the choices you have.
          </p>
          <p className="mt-5 text-sm text-muted-foreground">Effective: 30 September 2026</p>

          <div className="mt-16 divide-y divide-border border-y border-border">
            {sections.map((section) => (
              <section key={section.title} className="py-9">
                <h2 className="text-2xl md:text-3xl mb-4">{section.title}</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  {section.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-5 border-l-2 border-gold pl-5">
            <div>
              <h2 className="text-2xl mb-1">Need help with your information?</h2>
              <p className="text-sm text-muted-foreground">Contact the Survelans support team.</p>
            </div>
            <a href="mailto:support@survelans.com?subject=Privacy%20Request" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition">
              <Mail className="w-4 h-4" /> support@survelans.com
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}