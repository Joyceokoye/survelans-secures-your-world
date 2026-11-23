import { createFileRoute, Link } from "@tanstack/react-router";
import { Smartphone } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/demo")({
  staticData: { sitemap: false },
  head: () => ({
    meta: [
      { title: "Survelans SOS App Demo — Coming Soon | Survelans" },
      { name: "description", content: "The Survelans SOS app demo is coming soon. Join the waitlist to hear when you can try it." },
      { property: "og:title", content: "Survelans SOS App Demo — Coming Soon | Survelans" },
      { property: "og:description", content: "The Survelans SOS app demo is coming soon. Join the waitlist to hear when you can try it." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: DemoPage,
});

function DemoPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="max-w-3xl mx-auto px-6 pt-44 pb-28 text-center">
        <div className="mx-auto mb-8 w-16 h-16 rounded-full border border-gold/50 bg-gold/10 flex items-center justify-center">
          <Smartphone className="w-7 h-7 text-gold" />
        </div>
        <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Coming Soon</p>
        <h1 className="text-4xl md:text-6xl mb-6">Survelans SOS App Demo</h1>
        <p className="text-muted-foreground text-lg mb-10">
          We are getting the demo ready for you. Join the waitlist and we will let you know when you can try it.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/#waitlist" className="px-7 py-3 rounded-full bg-gold text-primary-foreground font-medium hover:opacity-90 transition">
            Join the Waitlist
          </a>
          <Link to="/" className="px-7 py-3 rounded-full border border-gold/60 text-foreground font-medium hover:border-gold transition">
            Back to Home
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
