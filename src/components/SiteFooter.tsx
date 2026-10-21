import { Link } from "@tanstack/react-router";
import logo from "@/assets/survelans-logo-orange.png";
import { Instagram, Twitter, Mail } from "lucide-react";
import { track } from "@/lib/track";

const socials = [
  { href: "https://www.instagram.com/survelans", label: "Instagram", Icon: Instagram },
  { href: "https://x.com/Survelans", label: "X (Twitter)", Icon: Twitter },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <img src={logo} alt="Survélans" className="w-[101px] h-auto mb-4" width={864} height={187} />
          <p className="text-lg font-display italic text-gold mb-2">Safety is always within reach.</p>
          <p className="text-sm text-muted-foreground max-w-xs mb-5">Discreet personal safety technology, made in Nigeria.</p>
          <div className="flex gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} onClick={() => track("social_click", label)}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold transition">
                <Icon className="w-4 h-4" />
              </a>
            ))}
            <a href="mailto:support@survelans.com" aria-label="Email support" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold transition">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-sm tracking-widest uppercase text-gold mb-4 font-sans">Explore</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="/#about" className="hover:text-foreground">About</a></li>
            <li><a href="/#products" className="hover:text-foreground">Our Product</a></li>
            <li><a href="/#how" className="hover:text-foreground">How It Works</a></li>
            <li><a href="/#app" className="hover:text-foreground">Companion App</a></li>
            <li><a href="/#founder" className="hover:text-foreground">Founder</a></li>
            <li><a href="/#faq" className="hover:text-foreground">FAQs</a></li>
            <li><a href="/#waitlist" className="hover:text-foreground">Join the Waitlist</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm tracking-widest uppercase text-gold mb-4 font-sans">Help & Legal</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/contact" className="hover:text-foreground">Contact & Support</Link></li>
            <li><Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-foreground">Terms & Conditions</Link></li>
            <li><Link to="/cookies" className="hover:text-foreground">Cookie Policy</Link></li>
            <li><Link to="/data-retention" className="hover:text-foreground">Data Retention & Deletion</Link></li>
            <li><a href="mailto:support@survelans.com" className="hover:text-foreground">support@survelans.com</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-border text-xs text-muted-foreground flex justify-between flex-wrap gap-4">
        <p>© {new Date().getFullYear()} Survélans. All rights reserved.</p>
        <p>Survelans products are in development. Features may change before launch.</p>
      </div>
    </footer>
  );
}
