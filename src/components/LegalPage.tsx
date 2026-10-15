import type { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export function LegalPage({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="max-w-3xl mx-auto px-6 pt-40 pb-24">
        <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">{eyebrow}</p>
        <h1 className="text-4xl md:text-6xl mb-6">{title}</h1>
        <p className="text-lg text-muted-foreground mb-6">{intro}</p>
        <p className="text-xs text-muted-foreground border-l-2 border-gold pl-4 mb-12">
          Draft for review. This page is written in plain language and still needs a review by a qualified Nigerian lawyer before Survelans launches.
        </p>
        <div className="space-y-10 [&_h2]:text-2xl [&_h2]:mb-3 [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_li]:text-muted-foreground [&_a]:text-gold [&_a]:underline">
          {children}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
