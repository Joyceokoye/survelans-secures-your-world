import { useState } from "react";
import logo from "@/assets/survelans-logo.png";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackSiteEvent } from "@/lib/site-events";

const links = [
  { href: "/#products", label: "Products" },
  { href: "/#app", label: "The App" },
  { href: "/#how", label: "How It Works" },
  { href: "/#about", label: "About" },
  { href: "mailto:support@survelans.com?subject=Survelans%20Support", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-28 flex items-center justify-between">
        <a href="/#top" aria-label="Survelans home" className="flex items-center gap-2">
          <img src={logo} alt="Survélans" width={800} height={177} loading="eager" fetchPriority="high" className="h-auto w-[133px]" />
        </a>
        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
          <Button asChild className="rounded-full"><a href="/#waitlist" onClick={() => trackSiteEvent("waitlist_cta_click")}>Join the Waitlist</a></Button>
        </nav>
        <Button variant="ghost" size="icon" className="lg:hidden text-foreground" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation">
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="lg:hidden border-t border-border bg-background/95">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground">
                {l.label}
              </a>
            ))}
            <Button asChild className="rounded-full"><a href="/#waitlist" onClick={() => { setOpen(false); trackSiteEvent("waitlist_cta_click"); }}>Join the Waitlist</a></Button>
          </div>
        </nav>
      )}
    </header>
  );
}
