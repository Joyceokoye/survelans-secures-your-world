import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Users } from "lucide-react";

export const Route = createFileRoute("/meet-the-team")({
  // Placeholder page — keep it out of the sitemap until the real team content is here.
  staticData: { sitemap: false },
  head: () => ({
    meta: [
      { title: "Meet the Team — Coming Soon | Survélans" },
      { name: "description", content: "The people building Survelans are coming soon. Join the waitlist to hear about our safety bracelet first." },
      { property: "og:title", content: "Meet the Team — Coming Soon | Survélans" },
      { property: "og:description", content: "The people building Survelans are coming soon. Join the waitlist to hear about our safety bracelet first." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: MeetTheTeamPage,
});

function MeetTheTeamPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="max-w-3xl mx-auto px-6 pt-44 pb-28 text-center">
        <div className="mx-auto mb-8 w-16 h-16 rounded-full border border-gold/50 bg-gold/10 flex items-center justify-center">
          <Users className="w-7 h-7 text-gold" />
        </div>
        <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Coming Soon</p>
        <h1 className="text-4xl md:text-6xl mb-6">Meet the Team</h1>
        <p className="text-muted-foreground text-lg mb-10">
          We are putting the people behind Survelans together. In the meantime, join the waitlist and we will let you know when this page is ready.
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
