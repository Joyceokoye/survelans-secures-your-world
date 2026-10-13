import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { Button } from "@/components/ui/button";
import { ProductFlow } from "@/components/ProductFlow";
import { trackSiteEvent } from "@/lib/site-events";
import logo from "@/assets/survelans-logo.png";
import hero from "@/assets/hero.jpg";
import bracelet from "@/assets/bracelet-owner.jpg.asset.json";
import camera from "@/assets/camera.jpg";
import alarm from "@/assets/alarm.jpg";
import taser from "@/assets/taser.jpg";
import pepperspray from "@/assets/pepperspray.jpg";
import { ArrowRight, Bluetooth, Fingerprint, MapPin, Mic, Users, Smartphone, Palette, MessageCircle, Footprints, Mail, Facebook, Instagram, Youtube } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Survelans — Safety Is Always Within Reach" },
    { name: "description", content: "Survelans is developing a discreet safety bracelet and companion app to help you alert trusted contacts through your paired phone." },
    { property: "og:title", content: "Survelans — Safety Is Always Within Reach" },
    { property: "og:description", content: "Discover the Survelans Safety Bracelet, planned companion app, and phone-connected emergency workflow." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }), component: Home,
});

const steps = [
  { icon: Bluetooth, title: "Pair your wearable", text: "Connect your Safety Bracelet to the Survelans companion app on your phone using Bluetooth." },
  { icon: Fingerprint, title: "Press and hold", text: "A long press on the bracelet sends a trigger to your paired phone when you need help." },
  { icon: MapPin, title: "The phone starts the alert", text: "The app attempts to share your current location with up to three pre-saved emergency contacts, with your permissions and a working connection." },
  { icon: Mic, title: "Capture a short recording", text: "The planned app attempts a 30-second recording through your phone’s microphone. Successfully captured audio is intended to upload to your private incident record, where permissions, connectivity and law allow." },
  { icon: Users, title: "Reach your trusted people", text: "Your contacts receive the available alert and location details. Incident information and captured recordings can be reviewed in the planned companion app under its access and privacy controls." },
];
const features = [
  { icon: Palette, title: "Make it yours", text: "Personalise the app icon or appearance, where supported." },
  { icon: Users, title: "A family space", text: "View and manage connected loved-one profiles in a family space for up to four members." },
  { icon: MessageCircle, title: "Stay in touch", text: "Planned communication and distress signals for family members and trusted loved ones." },
  { icon: Footprints, title: "Watch Mode", text: "Planned live GPS sharing and step tracking while you take a walk." },
];
function WaitlistLink({ className = "", primary = false }: { className?: string; primary?: boolean }) {
  return <Button asChild size="lg" className={`rounded-full h-12 ${className}`}><a href="#waitlist" onClick={() => { trackSiteEvent("waitlist_cta_click"); if (primary) trackSiteEvent("product_primary_cta_click"); }}>Join the Waitlist <ArrowRight /></a></Button>;
}
function Home() {
  const mainRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const root = mainRef.current;
    if (!root || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const name = entry.target.getAttribute("data-event");
        if (entry.isIntersecting && name) { trackSiteEvent(name); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.25 });
    root.querySelectorAll("[data-event]").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main ref={mainRef}>
        <section className="relative overflow-hidden pt-28 border-b border-border">
          <img src={hero} alt="" width={1920} height={1080} fetchPriority="high" className="absolute inset-0 size-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
          <div className="relative mx-auto max-w-7xl px-6 py-12 lg:py-16 grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <p className="text-gold text-xs uppercase tracking-widest mb-5">Survelans · Personal safety technology</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mb-6">Safety is always <span className="gold-text italic">within reach.</span></h1>
              <p className="max-w-lg text-lg text-muted-foreground leading-relaxed mb-8">Survelans is developing discreet wearable technology that helps you alert the people you trust when you need help.</p>
              <div className="flex flex-wrap gap-4 items-center"><WaitlistLink /><Button asChild variant="link" className="text-foreground"><a href="#how">See How It Works <ArrowRight /></a></Button></div>
            </div>
            <div>
              <div className="flex justify-between gap-4 text-xs mb-3"><span className="text-gold">Safety Bracelet</span><span className="text-muted-foreground">Under development</span></div>
              <img src={bracelet.url} alt="Owner-supplied concept image of the black Survelans Safety Bracelet" width={775} height={338} className="w-full aspect-[775/338] object-cover" />
              <p className="text-xs text-muted-foreground mt-2">Product concept supplied by Survelans.</p>
              <ProductFlow />
            </div>
          </div>
        </section>
        <section id="about" className="py-16 md:py-20 border-b border-border">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 md:gap-16">
            <div><p className="text-gold text-xs uppercase tracking-widest mb-4">Our purpose</p><h2 className="text-4xl md:text-5xl">Making everyday safety easier to reach for.</h2></div>
            <div className="text-muted-foreground text-lg leading-relaxed space-y-5"><p>We are building practical safety technology for everyday life, so reaching out for help can feel simpler when using your phone openly is difficult or unsafe.</p><p>For students, families and anyone who wants a more discreet way to reach their trusted people. A safety aid, not a promise of protection.</p></div>
          </div>
        </section>
        <section id="products" className="py-16 md:py-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">
              <div><img src={bracelet.url} alt="Black beaded Safety Bracelet with a Survelans trigger module, product concept" width={775} height={338} loading="lazy" className="w-full aspect-[775/338] object-cover" /></div>
              <div><p className="text-gold text-xs uppercase tracking-widest mb-4">The primary wearable · In development</p><h2 className="text-4xl md:text-5xl mb-5">Safety Bracelet</h2><p className="text-muted-foreground leading-relaxed mb-6">A discreet wearable trigger designed to work with your phone. Pair it using Bluetooth, add your trusted contacts and use a long press to start the planned emergency workflow.</p><p className="text-sm text-muted-foreground mb-6">The bracelet relies on the paired phone for location, audio and internet access.</p><WaitlistLink primary /></div>
            </div>
            <div className="border-t border-border pt-10"><h3 className="text-3xl mb-8">Explore Other Safety Products</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
                {[
                  { img: pepperspray, title: "Pepper Spray", price: "₦18,500", text: "A compact self-defence option. Suitability and lawful use depend on your circumstances." },
                  { img: taser, title: "Pocket Taser", price: "₦25,000", text: "A compact stun device. Follow safety instructions and applicable local laws." },
                  { img: alarm, title: "Pocket Alarm", price: "₦9,000", text: "A personal alarm designed to draw attention with sound." },
                  { img: camera, title: "Home Camera", price: "₦20,000–₦167,000", text: "Home-monitoring options. Model specifications and availability are not yet confirmed." },
                ].map(product => <article key={product.title}><div className="aspect-square bg-secondary overflow-hidden mb-4"><img src={product.img} alt={`Illustrative ${product.title.toLowerCase()}, not confirmed product photography`} width={1024} height={1024} loading="lazy" className="size-full object-cover" /></div><p className="text-xs text-muted-foreground mb-2">Illustrative image</p><h4 className="text-lg font-medium mb-1">{product.title}</h4><p className="text-gold text-sm mb-3">{product.price}</p><p className="text-muted-foreground text-sm leading-relaxed">{product.text}</p></article>)}
              </div>
            </div>
          </div>
        </section>
        <section id="how" data-event="how_it_works_section_view" className="py-16 md:py-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-6"><p className="text-gold text-xs uppercase tracking-widest mb-4">How It Works · Planned workflow</p><h2 className="text-4xl md:text-5xl mb-12">From your bracelet to your trusted people.</h2>
            <ol className="grid md:grid-cols-5 gap-8">{steps.map((step, index) => <li key={step.title} className="border-t border-border pt-5"><div className="flex items-center justify-between text-gold mb-5"><span className="font-display text-3xl">0{index + 1}</span><step.icon className="size-5" /></div><h3 className="text-2xl leading-tight mb-3">{step.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p></li>)}</ol>
            <p className="mt-10 border-l-2 border-gold pl-5 text-sm leading-relaxed text-muted-foreground max-w-4xl">Features depend on phone permissions, Bluetooth connection, battery, and network availability. Location and recording also depend on applicable law. Survelans cannot guarantee emergency-service response or rescue. Automatic alerts to emergency services are not confirmed.</p>
          </div>
        </section>
        <section id="app" data-event="app_features_section_view" className="py-16 md:py-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="flex flex-col items-center justify-center border border-dashed border-border bg-card aspect-[4/5] max-h-[560px] py-10 px-6"><Smartphone className="size-16 text-gold mb-6" strokeWidth={1} /><p className="font-display text-3xl text-center">Survelans companion app</p><p className="text-sm text-muted-foreground text-center mt-4">App interface image pending</p><span className="text-xs text-muted-foreground mt-2">Placeholder — not a live app screen</span></div>
            <div><p className="text-gold text-xs uppercase tracking-widest mb-4">The companion app · Planned features</p><h2 className="text-4xl md:text-5xl mb-6">A companion app that keeps your trusted people closer.</h2><p className="text-muted-foreground leading-relaxed mb-8">The Survelans companion app is being designed to bring your wearable, emergency contacts, and family safety tools together in one place.</p><ul className="space-y-6">{features.map(feature => <li key={feature.title} className="flex gap-4"><feature.icon className="size-5 shrink-0 text-gold mt-1" /><div><h3 className="text-xl mb-1">{feature.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{feature.text}</p></div></li>)}</ul><p className="text-xs text-muted-foreground mt-8">These features are in development; the app is not offered for download here.</p></div>
          </div>
        </section>
        <section id="waitlist" className="py-16 md:py-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center"><div><p className="text-gold text-xs uppercase tracking-widest mb-4">Stay in the loop</p><h2 className="text-4xl md:text-5xl mb-6">Ready to feel safer every day?</h2><p className="text-muted-foreground text-lg leading-relaxed max-w-lg">Join the Survelans waitlist for updates as we develop a more discreet way to reach the people you trust when you need help.</p></div><div className="md:border-l border-border md:pl-12"><p className="text-lg mb-3">Waitlist signup is not open yet.</p><p className="text-sm text-muted-foreground leading-relaxed mb-6">We’re preparing a public signup form. No email address or name is collected on this website yet.</p><Button disabled size="lg" className="rounded-full h-12">Join the Waitlist <ArrowRight /></Button><p className="text-sm mt-5"><a href="mailto:support@survelans.com?subject=Survelans%20Waitlist%20Question" className="text-gold underline underline-offset-4">Questions? Email support@survelans.com</a></p></div></div>
        </section>
      </main>
      <footer className="py-12"><div className="max-w-7xl mx-auto px-6"><div className="grid md:grid-cols-2 gap-10"><div><a href="#top" aria-label="Survelans home"><img src={logo} alt="Survelans" width={800} height={177} loading="lazy" className="w-[186px] h-auto mb-5" /></a><p className="text-lg font-display">Safety is always within reach.</p></div><div className="md:text-right"><div className="flex flex-wrap md:justify-end gap-6 text-sm mb-6"><a href="#products">Products</a><a href="#how">How It Works</a><a href="mailto:support@survelans.com">Contact</a><Link to="/privacy">Privacy</Link></div><div className="flex gap-3 md:justify-end items-center">{[{ Icon: Facebook, label: "Facebook" }, { Icon: Instagram, label: "Instagram" }, { Icon: Youtube, label: "YouTube" }].map(({ Icon, label }) => <Button key={label} variant="ghost" size="icon" disabled aria-label={`${label}: official link not supplied`} title={`${label}: official link not supplied`}><Icon /></Button>)}<Button asChild variant="ghost" size="icon"><a href="https://x.com/Survelans" target="_blank" rel="noopener noreferrer" aria-label="Survelans on X" title="Survelans on X" onClick={() => trackSiteEvent("social_link_click")}><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.4l8.2-9.4L.8 2h6.4l4.5 6.8L18.9 2ZM17.8 20h1.7L6.2 4H4.4l13.4 16Z" /></svg></a></Button><Button asChild variant="ghost" size="icon"><a href="mailto:support@survelans.com" aria-label="Email Survelans support" title="Email Survelans support"><Mail /></a></Button></div></div></div><div className="mt-10 pt-6 border-t border-border text-xs text-muted-foreground flex flex-wrap justify-between gap-4"><p>© {new Date().getFullYear()} Survelans. All rights reserved.</p><p>Designed in Nigeria. Under development.</p></div></div></footer>
    </div>
  );
}
