import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import logo from "@/assets/survelans-logo.png";
import hero from "@/assets/hero.jpg";
import bracelet from "@/assets/safety-bracelet.jpg";
import camera from "@/assets/camera.jpg";
import alarm from "@/assets/alarm.jpg";
import taser from "@/assets/taser.jpg";
import pepperspray from "@/assets/pepperspray.jpg";
import { Bluetooth, Hand, MapPin, Mic, Users, ArrowRight, Check, Mail, Smartphone } from "lucide-react";

const WAITLIST = "https://1drv.ms/x/c/a221da1742a29869/IQC_2elZree8R6x8gXBhvrFSAVtojHONlco5QkH-JJqBooE";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Survélans — Safety Is Always Within Reach" },
      { name: "description", content: "Survélans is developing a discreet safety bracelet and companion app that help you alert the people you trust. Join the waitlist." },
      { property: "og:title", content: "Survélans — Safety Is Always Within Reach" },
      { property: "og:description", content: "A discreet safety bracelet and companion app, in development. Join the Survélans waitlist." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function WaitlistButton({ className = "" }: { className?: string }) {
  return (
    <a href={WAITLIST} target="_blank" rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gold text-primary-foreground font-medium hover:opacity-90 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${className}`}>
      Join the Waitlist <ArrowRight className="w-4 h-4" />
    </a>
  );
}

function FlowVisual() {
  const nodes = [
    { i: Hand, l: "Bracelet" },
    { i: Smartphone, l: "Your phone" },
    { i: MapPin, l: "Location + alert" },
    { i: Users, l: "Trusted contacts" },
  ];
  return (
    <div className="rounded-2xl border border-gold/30 bg-card/70 backdrop-blur p-6" aria-label="Illustration: bracelet trigger to phone to location alert to trusted contacts">
      <div className="flex flex-col gap-3">
        {nodes.map((n, i) => (
          <div key={n.l}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-gold/50 bg-gold/10 flex items-center justify-center flow-pulse" style={{ animationDelay: `${i * 0.6}s` }}>
                <n.i className="w-5 h-5 text-gold" />
              </div>
              <span className="text-sm">{n.l}</span>
            </div>
            {i < nodes.length - 1 && <div className="ml-6 h-5 w-px bg-gold/40" />}
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">Illustrative concept — product in development.</p>
    </div>
  );
}

function Home() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-28 overflow-hidden">
        <img src={hero} alt="" className="absolute inset-0 w-full h-full object-cover opacity-50" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center w-full">
          <div>
            <h1 className="text-5xl md:text-7xl leading-[1.05] mb-6">
              Safety is always <br /> <span className="gold-text italic">within reach.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-8">
              Survélans is developing discreet wearable technology that helps you alert the people you trust when you need help.
            </p>
            <div className="flex flex-wrap gap-4">
              <WaitlistButton />
              <a href="#how" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gold/60 hover:bg-gold/10 transition">See How It Works</a>
            </div>
          </div>
          <div className="max-w-xs md:ml-auto w-full"><FlowVisual /></div>
        </div>
      </section>

      {/* PURPOSE */}
      <section className="py-28 border-t border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Why We Exist</p>
          <h2 className="text-4xl md:text-5xl mb-6">Making everyday safety easier to reach for.</h2>
          <p className="text-lg text-muted-foreground">
            We are building practical safety technology for everyday life, so reaching out for help can feel simpler when using your phone openly is difficult or unsafe.
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Our Main Product</p>
              <h2 className="text-4xl md:text-5xl mb-6">The Survélans Safety Bracelet</h2>
              <p className="text-muted-foreground text-lg mb-8">
                A discreet bracelet with a hidden trigger. It pairs with the Survélans app by Bluetooth so you can start an alert without taking out your phone. Currently in development.
              </p>
              <WaitlistButton />
            </div>
            <img src={bracelet} alt="Survélans Safety Bracelet" width={1024} height={1024} className="w-full aspect-square object-cover rounded-2xl border border-border" />
          </div>

          <h3 className="text-2xl md:text-3xl mb-8">Explore Other Safety Products</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { img: pepperspray, t: "Pepper Spray", price: "₦18,500" },
              { img: taser, t: "Pocket Taser", price: "₦25,000" },
              { img: alarm, t: "Pocket Alarm", price: "₦9,000" },
              { img: camera, t: "Home Camera", price: "₦20,000 – ₦167,000" },
            ].map((p) => (
              <article key={p.t} className="bg-card border border-border rounded-lg overflow-hidden">
                <img src={p.img} alt={p.t} loading="lazy" width={512} height={512} className="w-full aspect-square object-cover" />
                <div className="p-4">
                  <h4 className="text-base font-sans font-medium">{p.t}</h4>
                  <p className="text-gold text-sm">{p.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-28 border-t border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">How It Works</p>
            <h2 className="text-4xl md:text-5xl">From one press to the people you trust.</h2>
          </div>
          <ol className="grid md:grid-cols-5 gap-8">
            {[
              { i: Bluetooth, t: "Pair your wearable", d: "Connect the bracelet to the Survélans app on your phone using Bluetooth." },
              { i: Hand, t: "Long-press when you need help", d: "A long press on the bracelet sends the trigger to your paired phone." },
              { i: MapPin, t: "The app starts the alert", d: "Your phone tries to share your location with up to three saved emergency contacts." },
              { i: Mic, t: "A short recording begins", d: "The app starts a 30-second audio recording on your phone and uploads it to your Survélans dashboard." },
              { i: Users, t: "Your contacts get the alert", d: "They receive the alert and location. You can view the incident and recording in the app." },
            ].map((s, i) => (
              <li key={s.t}>
                <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center mb-5">
                  <s.i className="w-6 h-6 text-gold" />
                </div>
                <div className="text-gold/70 text-sm mb-2">Step {i + 1}</div>
                <h3 className="text-xl mb-2">{s.t}</h3>
                <p className="text-sm text-muted-foreground">{s.d}</p>
              </li>
            ))}
          </ol>
          <p className="mt-12 border-l-2 border-gold pl-5 max-w-3xl text-base text-muted-foreground">
            Features depend on phone permissions, Bluetooth connection, battery, and network availability. Survélans cannot guarantee emergency-service response or rescue.
          </p>
        </div>
      </section>

      {/* APP */}
      <section id="app" className="py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/5] rounded-2xl border-2 border-dashed border-gold/40 bg-card flex flex-col items-center justify-center text-center p-8">
            <Smartphone className="w-12 h-12 text-gold mb-4" />
            <p className="text-sm text-muted-foreground">App screenshot coming soon</p>
          </div>
          <div>
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">The App · In Development</p>
            <h2 className="text-4xl md:text-5xl mb-6">A companion app that keeps your trusted people closer.</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              The Survélans companion app is being designed to bring your wearable, emergency contacts, and family safety tools together in one place.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                "Personalise the app's look, where supported",
                "See and manage profiles of connected loved ones",
                "Family space for up to four members",
                "Message and send distress signals to family",
                "Watch Mode: live GPS on walks, with step tracking",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold mt-0.5 shrink-0" /><span>{f}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground">Planned features — final details may change before launch.</p>
          </div>
        </div>
      </section>

      {/* WAITLIST */}
      <section id="waitlist" className="py-28 border-t border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl bg-gradient-to-br from-gold/15 via-card to-card border border-gold/30 p-12 md:p-20 text-center">
            <h2 className="text-4xl md:text-6xl mb-6 max-w-2xl mx-auto">Ready to feel safer every day?</h2>
            <p className="text-muted-foreground mb-10 max-w-xl mx-auto text-lg">
              Join the Survélans waitlist for updates as we develop a more discreet way to reach the people you trust when you need help.
            </p>
            <WaitlistButton />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <img src={logo} alt="Survélans" className="h-auto w-[186px] mb-4" />
            <div className="flex gap-4 mt-6">
              <a href="https://x.com/Survelans" target="_blank" rel="noopener noreferrer" aria-label="Survélans on X" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-gold text-sm font-bold">𝕏</a>
              <a href="mailto:support@survelans.com" aria-label="Email Survélans support" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-gold"><Mail className="w-4 h-4" /></a>
            </div>
          </div>
          <div>
            <h4 className="text-sm tracking-widest uppercase text-gold mb-4 font-sans">Explore</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#products" className="hover:text-foreground">Safety Bracelet</a></li>
              <li><a href="#how" className="hover:text-foreground">How It Works</a></li>
              <li><a href="#app" className="hover:text-foreground">The App</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm tracking-widest uppercase text-gold mb-4 font-sans">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="mailto:support@survelans.com?subject=Survelans%20Support" className="hover:text-foreground">Contact</a></li>
              <li><Link to="/privacy" className="hover:text-foreground">Privacy</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-border text-xs text-muted-foreground flex justify-between flex-wrap gap-4">
          <p>Safety is always within reach.</p>
          <p>© {new Date().getFullYear()} Survélans</p>
        </div>
      </footer>
    </div>
  );
}
