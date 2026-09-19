import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import logo from "@/assets/survelans-logo-orange.png.asset.json";
import hero from "@/assets/hero.jpg";
import ring from "@/assets/ring.jpg";
import camera from "@/assets/camera.jpg";
import app from "@/assets/app.jpg";
import alarm from "@/assets/alarm.jpg";
import taser from "@/assets/taser.jpg";
import pepperspray from "@/assets/pepperspray.jpg";
import { Shield, MapPin, Bell, Lock, ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Survélans — Safety Before You Need It" },
      { name: "description", content: "Smart safety wearables, a panic-button app, and home security from Survélans. Stay safe with one tap." },
      { property: "og:title", content: "Survélans — Safety Before You Need It" },
      { property: "og:description", content: "Smart safety wearables, a panic-button app, and home security from Survélans." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <img src={hero} alt="" className="absolute inset-0 w-full h-full object-cover opacity-50" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 text-gold text-xs tracking-[0.3em] uppercase mb-6">
              <span className="w-8 h-px bg-gold" /> Personal Safety, Reimagined
            </div>
            <h1 className="text-5xl md:text-7xl leading-[1.05] mb-6">
              Safety before <br /> you <span className="gold-text italic">need it.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-8">
              Smart wearables, a one-tap panic app, and home security — all working together so help is always close.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#app" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gold text-primary-foreground font-medium hover:opacity-90 transition">
                Download the App <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </a>
              <a href="#products" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gold/60 text-foreground hover:bg-gold/10 transition">
                Shop Products
              </a>
            </div>
            <p className="mt-8 text-xs tracking-widest text-muted-foreground uppercase">
              Trusted by 10,000+ people in 14 countries
            </p>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Why Survélans</p>
            <h2 className="text-4xl md:text-5xl">When something feels off, seconds matter.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {[
              { n: "01", h: "You can't always call.", p: "Sometimes you can't reach for your phone. One tap on a Survélans device sends the alert for you." },
              { n: "02", h: "Danger doesn't wait.", p: "Bad things happen fast. Your location, audio, and an alert go out the second you press the button." },
              { n: "03", h: "Stay calm. Stay safe.", p: "You shouldn't have to choose between looking normal and getting help. Our gear is quiet and discreet." },
            ].map((c) => (
              <div key={c.n} className="bg-background p-10">
                <div className="text-gold font-display text-5xl mb-6">{c.n}</div>
                <h3 className="text-2xl mb-3">{c.h}</h3>
                <p className="text-muted-foreground">{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div className="max-w-2xl">
              <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">The Range</p>
              <h2 className="text-4xl md:text-5xl">Built to look good. Made to keep you safe.</h2>
            </div>
            <a href="#contact" className="text-gold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all">
              See everything <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: ring, t: "Safety Ring", p: "A bold gold signet ring with a hidden chip and panic button. Press to send an alert.", price: "₦185,000" },
              { img: pepperspray, t: "Pepper Spray", p: "Compact pepper spray that fits in your bag. Stops a threat in its tracks.", price: "₦18,500" },
              { img: taser, t: "Pocket Taser", p: "Rechargeable stun gun with built-in flashlight. Strong shock, easy grip.", price: "₦95,000" },
              { img: alarm, t: "Pocket Alarm", p: "Tiny keychain alarm. Pull the pin to scare off threats with a loud siren.", price: "₦25,000" },
              { img: camera, t: "Home Camera", p: "Smart indoor camera with night vision and motion alerts on your phone.", price: "₦210,000" },
              { img: app, t: "Survélans App", p: "The brain. Live location, SOS, and emergency contacts all in one place.", price: "Free" },
            ].map((p) => (
              <article key={p.t} className="group bg-card border border-border rounded-lg overflow-hidden hover:border-gold/60 transition-all">
                <div className="aspect-square overflow-hidden bg-secondary">
                  <img src={p.img} alt={p.t} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl">{p.t}</h3>
                    <span className="text-gold text-sm font-medium">{p.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{p.p}</p>
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
            <h2 className="text-4xl md:text-5xl">One press. Help is on the way.</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { i: Shield, t: "Wear it", d: "Put on your ring or clip the alarm to your bag. It's always ready." },
              { i: Bell, t: "Press it", d: "Hold the hidden button for two seconds to fire off the alert." },
              { i: MapPin, t: "We send help", d: "Your live location and a recording go to your trusted contacts." },
              { i: Lock, t: "Stay protected", d: "The app keeps tracking until you say you're safe." },
            ].map((s, i) => (
              <div key={s.t} className="relative">
                <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center mb-5">
                  <s.i className="w-6 h-6 text-gold" />
                </div>
                <div className="text-gold/60 text-sm mb-2">Step {i + 1}</div>
                <h3 className="text-xl mb-2">{s.t}</h3>
                <p className="text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APP */}
      <section id="app" className="py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-10 bg-gold/10 blur-3xl rounded-full" />
            <img src={app} alt="Survélans app" loading="lazy" className="relative rounded-2xl border border-border w-full" />
          </div>
          <div>
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">The App</p>
            <h2 className="text-4xl md:text-5xl mb-6">Your safety, in your pocket.</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              The free Survélans app turns your phone into a safety hub. Set up trusted contacts, share your live location, and call for help in a single tap.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                "One-tap SOS with live location sharing",
                "Quiet audio recording when you feel unsafe",
                "Walk-with-me mode for late nights",
                "Works with every Survélans device",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="px-7 py-3.5 rounded-full bg-gold text-primary-foreground font-medium hover:opacity-90 transition">App Store</a>
              <a href="#" className="px-7 py-3.5 rounded-full border border-gold/60 hover:bg-gold/10 transition">Google Play</a>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Real Stories</p>
            <h2 className="text-4xl md:text-5xl">People feel safer with Survélans.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { q: "I walk home from class at night and don't feel scared anymore. The ring is part of my outfit now.", a: "Amaka, 22 — Student" },
              { q: "I got the camera for my mum's place. She loves seeing who's at the door from her phone.", a: "David, 34 — Lagos" },
              { q: "Pressed the alarm once on a bad date. My friend got my location in seconds and came to get me.", a: "Zara, 27 — Abuja" },
            ].map((t) => (
              <figure key={t.a} className="bg-card border border-border rounded-lg p-8">
                <div className="text-gold font-display text-5xl leading-none mb-4">"</div>
                <blockquote className="mb-6 text-lg leading-relaxed">{t.q}</blockquote>
                <figcaption className="text-sm text-muted-foreground">{t.a}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">About Survélans</p>
          <h2 className="text-4xl md:text-6xl mb-8">We started Survélans because everyone deserves to feel safe.</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Survélans is a personal safety brand for women, students, families, and anyone who has ever felt uneasy walking home alone. We make safety gear that actually looks good — so you'll wear it every day. Because real safety isn't loud or scary. It's quiet, ready, and always with you.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-28 border-t border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl bg-gradient-to-br from-gold/15 via-card to-card border border-gold/30 p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-gold to-transparent" />
            <h2 className="text-4xl md:text-6xl mb-6 max-w-2xl mx-auto">Ready to feel safer every day?</h2>
            <p className="text-muted-foreground mb-10 max-w-xl mx-auto text-lg">
              Join thousands who carry Survélans with them. Get the app free, or grab a device that fits your life.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#app" className="px-8 py-4 rounded-full bg-gold text-primary-foreground font-medium hover:opacity-90 transition">
                Download the App
              </a>
              <a href="#products" className="px-8 py-4 rounded-full border border-gold/60 hover:bg-gold/10 transition">
                Shop Devices
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <img src={logo.url} alt="Survélans" className="h-[52px] w-auto mb-4" />
            <p className="text-sm text-muted-foreground max-w-xs">
              Personal safety technology, designed to be worn every day.
            </p>
          </div>
          <div>
            <h4 className="text-sm tracking-widest uppercase text-gold mb-4 font-sans">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#products" className="hover:text-foreground">Safety Ring</a></li>
              <li><a href="#products" className="hover:text-foreground">Pocket Alarm</a></li>
              <li><a href="#products" className="hover:text-foreground">Home Camera</a></li>
              <li><a href="#app" className="hover:text-foreground">The App</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm tracking-widest uppercase text-gold mb-4 font-sans">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground">About</a></li>
              <li><a href="#contact" className="hover:text-foreground">Contact</a></li>
              <li><a href="#" className="hover:text-foreground">Privacy</a></li>
              <li><a href="#" className="hover:text-foreground">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-border text-xs text-muted-foreground flex justify-between flex-wrap gap-4">
          <p>© {new Date().getFullYear()} Survélans. All rights reserved.</p>
          <p>Built for safety. Worn with confidence.</p>
        </div>
      </footer>
    </div>
  );
}
