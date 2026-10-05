import { useState } from "react";
import logo from "@/assets/survelans-logo.png";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#products", label: "Products" },
  { href: "#app", label: "The App" },
  { href: "#how", label: "How It Works" },
  { href: "#about", label: "About" },
  { href: "mailto:support@survelans.com?subject=Survelans%20Support", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-28 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="Survélans" width={800} height={177} loading="eager" fetchPriority="high" className="h-auto w-[133px]" />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
          <a href="/#app" className="px-5 py-2 rounded-full bg-gold text-primary-foreground text-sm font-medium hover:opacity-90 transition">
            Get the App
          </a>
        </nav>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground">
                {l.label}
              </a>
            ))}
            <a href="/#app" onClick={() => setOpen(false)} className="px-5 py-2.5 rounded-full bg-gold text-primary-foreground text-sm font-medium text-center">
              Get the App
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
