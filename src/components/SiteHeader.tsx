import { useState } from "react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/survelans-logo-orange.png.asset.json";
import { Menu, X } from "lucide-react";
import { track } from "@/lib/track";

const links = [
  { href: "/#top", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#products", label: "Our Product" },
  { href: "/#how", label: "How It Works" },
  { href: "/#app", label: "Companion App" },
  { href: "/#faq", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-28 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo.url} alt="Survélans home" className="h-[95px] w-auto" />
        </Link>
        <nav aria-label="Main" className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-gold transition-colors">{l.label}</a>
          ))}
          <a href="/#waitlist" onClick={() => track("cta_click", "header_waitlist")} className="px-5 py-2 rounded-full bg-gold text-primary-foreground text-sm font-medium hover:opacity-90 transition">
            Join the Waitlist
          </a>
        </nav>
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background/95">
          <nav aria-label="Mobile" className="px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground">{l.label}</a>
            ))}
            <a href="/#waitlist" onClick={() => { setOpen(false); track("cta_click", "mobile_waitlist"); }} className="px-5 py-2.5 rounded-full bg-gold text-primary-foreground text-sm font-medium text-center">
              Join the Waitlist
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
