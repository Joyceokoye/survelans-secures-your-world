import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/survelans-logo-orange.png";
import { Menu, X, ChevronDown } from "lucide-react";
import { track } from "@/lib/track";

const links = [
  { href: "/#top", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#products", label: "Our Product" },
  { href: "/#how", label: "How It Works" },
  { href: "/#app", label: "Companion App" },
  { href: "/#founder", label: "Founder" },
  { href: "/#faq", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

const teamLinks = [{ href: "/meet-the-team", label: "Meet the Team" }];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  // The panel opens only when the button is clicked, and closes on an outside
  // click, an Escape press, or a selection.
  const [teamOpen, setTeamOpen] = useState(false);
  const teamRef = useRef<HTMLDivElement>(null);
  const [mobileTeamOpen, setMobileTeamOpen] = useState(false);

  useEffect(() => {
    if (!teamOpen) return;
    const onPointerDown = (e: MouseEvent) => {
      if (teamRef.current && !teamRef.current.contains(e.target as Node)) setTeamOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => { if (e.key === "Escape") setTeamOpen(false); };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [teamOpen]);

  const closeTeam = () => setTeamOpen(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-28 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Survélans home" className="w-[101px] h-auto" width={864} height={187} />
        </Link>
        <nav aria-label="Main" className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-gold transition-colors">{l.label}</a>
          ))}
          <div
            className="relative"
            onMouseEnter={() => setHoverOpen(true)}
            onMouseLeave={() => { setHoverOpen(false); setClickOpen(false); }}
            onFocus={() => setHoverOpen(true)}
            onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node)) closeTeam(); }}
          >
            <button
              type="button"
              aria-expanded={teamOpen}
              aria-haspopup="true"
              onClick={() => setClickOpen((v) => !v)}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-gold transition-colors"
            >
              Meet the Team
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${teamOpen ? "rotate-180" : ""}`} />
            </button>
            {teamOpen && (
              <div className="absolute right-0 top-full pt-3">
                <div className="min-w-[190px] rounded-xl border border-border bg-background/95 backdrop-blur-md p-2 shadow-lg">
                  {teamLinks.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => { closeTeam(); track("nav_click", "meet_the_team"); }}
                      className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-gold hover:bg-card"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
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
            <div>
              <button
                type="button"
                aria-expanded={mobileTeamOpen}
                aria-haspopup="true"
                onClick={() => setMobileTeamOpen((v) => !v)}
                className="flex items-center gap-1 text-sm text-muted-foreground"
              >
                Meet the Team
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileTeamOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileTeamOpen && (
                <div className="mt-2 pl-3 border-l border-border flex flex-col gap-2">
                  {teamLinks.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => { setOpen(false); setMobileTeamOpen(false); track("nav_click", "meet_the_team"); }}
                      className="text-sm text-muted-foreground"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a href="/#waitlist" onClick={() => { setOpen(false); track("cta_click", "mobile_waitlist"); }} className="px-5 py-2.5 rounded-full bg-gold text-primary-foreground text-sm font-medium text-center">
              Join the Waitlist
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
