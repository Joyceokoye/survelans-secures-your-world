import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { track } from "@/lib/track";
import hero from "@/assets/hero.jpg";
import bracelet from "@/assets/survelans-safety-bracelet.jpg";
import appScreenshot from "@/assets/app-screenshot-cutout.png";
import camera from "@/assets/camera.jpg";
import alarm from "@/assets/alarm.jpg";
import taser from "@/assets/taser.jpg";
import pepperspray from "@/assets/pepperspray.jpg";
import { Watch, Smartphone, MapPin, Users, Bluetooth, Hand, Share2, Mic, ShieldCheck, ArrowRight } from "lucide-react";

const cameraOptions = [
  { name: "Mini Indoor Camera", price: "₦20,000" },
  { name: "Smart Wi-Fi Camera", price: "₦75,000" },
  { name: "Advanced Security Camera", price: "₦167,000" },
];

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Survelans | Personal safety device in Nigeria" },
      { name: "description", content: "Survelans is a Nigerian personal safety tech brand founded by Joyce Okoye. We build discreet SOS safety apps and Bluetooth wearables for emergency alerts in Nigeria." },
      { property: "og:title", content: "Survelans | Personal safety device in Nigeria" },
      { property: "og:description", content: "Survelans is a Nigerian personal safety tech brand founded by Joyce Okoye. We build discreet SOS safety apps and Bluetooth wearables for emergency alerts in Nigeria." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Eyebrow({ children }: { children: string }) {
  return <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">{children}</p>;
}

function FlowAnimation() {
  const steps = [
    { Icon: Watch, label: "Wearable" },
    { Icon: Smartphone, label: "Your phone" },
    { Icon: MapPin, label: "GPS + alert" },
    { Icon: Users, label: "Trusted contacts" },
  ];
  return (
    <div aria-label="How an alert travels: wearable, to phone, to GPS and alert, to trusted contacts" role="img"
      className="rounded-2xl border border-border bg-card/70 backdrop-blur p-6">
      <div className="flex items-center justify-between">
        {steps.map(({ Icon, label }, i) => (
          <div key={label} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center gap-2">
              <div className="flow-node w-14 h-14 rounded-full border border-gold/50 bg-gold/10 flex items-center justify-center" style={{ animationDelay: `${i * 0.6}s` }}>
                <Icon className="w-6 h-6 text-gold" />
              </div>
              <span className="text-[11px] text-muted-foreground text-center w-16">{label}</span>
            </div>
            {i < steps.length - 1 && (
              <div className="flex-1 h-px bg-border mx-1 mb-6 relative overflow-hidden">
                <span className="flow-pulse absolute inset-y-0 w-1/3 bg-gold" style={{ animationDelay: `${i * 0.6}s` }} />
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="mt-4 text-[11px] text-muted-foreground text-center">Concept illustration of the planned flow</p>
    </div>
  );
}

const others = [
  { img: pepperspray, t: "Pepper Spray", p: "Compact spray that can cause short-term irritation, giving you a chance to move away. Results vary with distance and wind.", price: "₦18,500" },
  { img: taser, t: "Pocket Taser", p: "A small rechargeable stun device meant to help create time and distance.", price: "₦25,000" },
  { img: alarm, t: "Pocket Alarm", p: "A keychain alarm that makes a loud sound to grab attention.", price: "₦9,000" },
  { img: camera, t: "Home Camera", p: "Cameras for indoor monitoring and phone alerts. Features vary by model.", price: null },
];

const steps = [
  { Icon: Bluetooth, t: "Connect", d: "Pair the wearable with the companion app using Bluetooth." },
  { Icon: Hand, t: "Activate", d: "Trigger an emergency with the final approved activation method (currently a long press)." },
  { Icon: Share2, t: "Share", d: "Your phone tries to grab your location and alert up to three emergency contacts you picked." },
  { Icon: Mic, t: "Record", d: "The app tries to record a short emergency audio clip — 30 seconds is the planned length." },
  { Icon: ShieldCheck, t: "Respond", d: "Your contacts get the info that's available. Only authorised people can see incident details in the app." },
];

const appFeatures = [
  "SOS emergency activation and alerts",
  "Emergency contacts and location sharing",
  "Secure emergency audio recordings",
  "Wearable connection and device management",
  "Family Space for up to four members",
  "Loved ones' profiles and shared locations",
  "Family chat and distress signals",
  "Watch Mode with live GPS and step tracking (where supported)",
  "Personalise how your app looks",
];

const faqs = [
  { q: "Is Survelans available to buy yet?", a: "Not yet. The Survelans wearable and app are still in development. Join the waitlist and we'll tell you first when they're ready." },
  { q: "How is it meant to work?", a: "You pair the wearable with the app on your phone. When you trigger it, the app tries to alert your chosen contacts, share your location and record a short audio clip." },
  { q: "Do I need a smartphone?", a: "Yes. The first version uses your phone's Bluetooth, GPS, microphone and internet. If your phone is off, out of range, offline or missing permissions, alerts may not send." },
  { q: "How many emergency contacts can I add?", a: "The plan is up to three trusted contacts. You choose who they are, and you can change them any time." },
  { q: "What happens with the audio recording?", a: "The app is designed to try recording about 30 seconds of audio during an emergency, only with your permission. Recordings are meant to be private and only seen by authorised people." },
  { q: "Who can see my location?", a: "Only the contacts you choose, and only during an emergency or when you turn on sharing. We don't sell your location or use it for ads." },
  { q: "What is Family Space?", a: "A planned feature that lets up to four family members connect, see shared locations and send each other distress signals." },
  { q: "What is Watch Mode?", a: "A planned feature where trusted people can follow your live GPS for a while — like when you're walking home late — plus step tracking where your phone supports it." },
  { q: "Does Survelans call the police?", a: "No. Survelans does not contact emergency services directly or promise a rescue. It's a tool to help you reach the people you trust." },
  { q: "How will I hear about the launch?", a: "Join the waitlist below and tick the updates box. You can also follow us on Instagram and X." },
];

function Home() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-28 overflow-hidden">
        <img src={hero} alt="" className="absolute inset-0 w-full h-full object-cover opacity-50" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center w-full">
          <div>
            <h1 className="text-5xl md:text-7xl leading-[1.05] mb-6">
              Safety is always <br /> <span className="gold-text italic">within reach.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-8">
              Discreet personal safety technology designed to help you reach the people you trust when it matters most.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#waitlist" onClick={() => track("cta_click", "hero_waitlist")} className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gold text-primary-foreground font-medium hover:opacity-90 transition">
                Join the Waitlist <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </a>
              <a href="https://survelans-safety-app--cyberwithjoyce.replit.app/" target="_blank" rel="noopener noreferrer" onClick={() => track("cta_click", "hero_demo")} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gold/60 text-foreground hover:bg-gold/10 transition">
                Try the demo
              </a>
            </div>
          </div>
          <FlowAnimation />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 border-t border-border scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <Eyebrow>About Survelans</Eyebrow>
            <h2 className="text-4xl md:text-5xl mb-6">Built so you can move through life with confidence.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Survelans is a Nigerian safety tech brand. We're building a small, stylish wearable and an app that work together, so reaching the people you trust takes one quiet action instead of a frantic phone search.
            </p>
          </div>
          <div className="grid gap-6">
            {[
              { h: "Why we started", p: "Walking home late, a ride that feels wrong, a crowded place — lots of us have felt uneasy and wished help was closer. Pulling out your phone isn't always safe or possible." },
              { h: "Our mission", p: "Make it easy and discreet to reach your trusted people when something feels off." },
              { h: "Our vision", p: "A world where everyone — students, workers, parents, anyone — feels free and independent, knowing their people are a tap away." },
              { h: "Why discreet matters", p: "Help shouldn't draw attention. Quiet gear means you can stay calm and still send a signal." },
            ].map((c) => (
              <div key={c.h} className="border-l-2 border-gold pl-5">
                <h3 className="text-xl mb-1">{c.h}</h3>
                <p className="text-muted-foreground">{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT */}
      <section id="products" className="py-28 border-t border-border scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6">
          <Eyebrow>Our Product</Eyebrow>
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3 relative rounded-2xl overflow-hidden border border-border bg-secondary">
              <img src={bracelet} alt="Survelans Safety Bracelet" className="w-full aspect-[4/3] object-cover" width={1920} height={1072} />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/80 border border-gold/50 text-xs text-gold">Prototype — concept image</span>
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-4xl md:text-5xl mb-4">The Survelans Safety Bracelet</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A sleek bracelet with a hidden trigger. It's designed to pair with your phone over Bluetooth and start an SOS alert to your chosen contacts — without unlocking your phone. Price and launch date to be confirmed.
              </p>
            </div>
          </div>

          <div className="mt-24">
            <h3 className="text-3xl mb-8">Explore Other Safety Products</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {others.map((p) => (
                <article key={p.t} className="bg-card border border-border rounded-lg overflow-hidden" onMouseEnter={() => track("product_interest", p.t)}>
                  <div className="aspect-square overflow-hidden bg-secondary">
                    <img src={p.img} alt={p.t} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-baseline mb-2 gap-2">
                      <h3 className="text-lg font-display font-semibold">{p.t}</h3>
                      {p.price && <span className="text-gold text-sm font-medium">{p.price}</span>}
                    </div>
                    <p className="text-sm text-muted-foreground">{p.p}</p>
                    {p.t === "Home Camera" && (
                      <label className="block mt-4">
                        <span className="sr-only">Choose a home camera</span>
                        <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                          {cameraOptions.map((o) => <option key={o.name}>{o.name} — {o.price}</option>)}
                        </select>
                      </label>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-28 border-t border-border bg-card/30 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <Eyebrow>How It Works</Eyebrow>
            <h2 className="text-4xl md:text-5xl">Five steps from "something's off" to "my people know."</h2>
          </div>
          <ol className="grid md:grid-cols-5 gap-8 relative">
            <div aria-hidden className="hidden md:block absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-gold/0 via-gold/60 to-gold/0" />
            {steps.map((s, i) => (
              <li key={s.t} className="relative">
                <div className="w-14 h-14 rounded-full bg-background border border-gold/50 flex items-center justify-center mb-5 relative">
                  <s.Icon className="w-6 h-6 text-gold" />
                </div>
                <div className="text-gold/70 text-sm mb-1">Step {i + 1}</div>
                <h3 className="text-xl mb-2">{s.t}</h3>
                <p className="text-sm text-muted-foreground">{s.d}</p>
              </li>
            ))}
          </ol>
          <div className="mt-14 border-l-2 border-gold pl-5 max-w-3xl">
            <h3 className="text-xl mb-2">Good to know</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Everything here depends on your phone's permissions, battery, Bluetooth, GPS and internet, and on final technical testing. Survelans is a personal safety aid. It does not contact the police or emergency services and can't promise a rescue.
            </p>
          </div>
        </div>
      </section>

      {/* APP */}
      <section id="app" className="py-28 border-t border-border scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col items-center gap-6">
            <img src={appScreenshot} alt="Survelans safety app home screen displayed on a phone" className="w-full max-w-sm object-contain" loading="lazy" />
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href="https://survelans-safety-app--cyberwithjoyce.replit.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-gold/60 px-5 py-3.5 text-sm font-semibold text-gold hover:bg-gold/10 transition">
                <span className="h-2 w-2 rounded-full bg-gold" aria-hidden="true" /> LIVE
              </a>
              <a href="https://survelans-safety-app--cyberwithjoyce.replit.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-primary-foreground font-medium hover:opacity-90 transition">
                Try the free demo <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div>
            <Eyebrow>Survelans SOS app</Eyebrow>
            <h2 className="text-4xl md:text-5xl mb-6">Your personal safety companion, wherever you go.</h2>
            <ul className="space-y-3">
              {appFeatures.map((feature) => (
                <li key={feature} className="border-b border-border pb-3">
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section id="founder" className="py-28 border-t border-border scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow>Introducing the Founder</Eyebrow>
            <h2 className="text-4xl md:text-5xl mb-6">The person behind Survelans.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">Meet Joyce Okoye, founder of Survelans, and hear the story behind the brand.</p>
          </div>
          <div className="aspect-[9/16] max-h-[680px] w-full overflow-hidden rounded-lg border border-border bg-card">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/tswCe74CkTI"
              title="Introducing Joyce Okoye, founder of Survelans"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-28 border-t border-border scroll-mt-28">
        <div className="max-w-3xl mx-auto px-6">
          <Eyebrow>FAQs</Eyebrow>
          <h2 className="text-4xl md:text-5xl mb-10">Questions? We've got answers.</h2>
          <Accordion type="single" collapsible>
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`f${i}`}>
                <AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* WAITLIST */}
      <section id="waitlist" className="py-28 border-t border-border scroll-mt-28">
        <div className="max-w-3xl mx-auto px-6">
          <div className="rounded-3xl bg-gradient-to-br from-gold/15 via-card to-card border border-gold/30 p-8 md:p-14">
            <h2 className="text-4xl md:text-6xl mb-4 text-center">Ready to feel safer every day?</h2>
            <p className="text-muted-foreground mb-8 text-center text-lg">Join the waitlist and be first to hear when Survelans launches.</p>
            <WaitlistForm source="waitlist_section" />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
