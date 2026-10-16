import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Mail, Instagram, Twitter } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Support — Survélans" },
      { name: "description", content: "Questions about Survelans? Send us a message or email support@survelans.com." },
      { property: "og:title", content: "Contact & Support — Survélans" },
      { property: "og:description", content: "Get in touch with the Survelans team." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please add your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  subject: z.string().trim().min(1, "Please add a subject").max(150),
  message: z.string().trim().min(1, "Please write a message").max(2000),
});

function ContactPage() {
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [msg, setMsg] = useState("");
  const input = "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (fd.get("website")) return;
    const p = schema.safeParse(Object.fromEntries(["name", "email", "subject", "message"].map((k) => [k, fd.get(k)])));
    if (!p.success) { setState("error"); setMsg(p.error.issues[0].message); return; }
    setState("loading");
    const { error } = await supabase.from("contact_messages").insert({ ...p.data, email: p.data.email.toLowerCase() });
    if (error) { setState("error"); setMsg("Something went wrong. Please try again or email support@survelans.com."); return; }
    setState("done");
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="max-w-6xl mx-auto px-6 pt-40 pb-24 grid md:grid-cols-5 gap-12">
        <div className="md:col-span-2">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Contact & Support</p>
          <h1 className="text-4xl md:text-6xl mb-6">Let's talk.</h1>
          <p className="text-muted-foreground mb-8">Got a question, an issue, or want to partner with us? Send a message and we'll get back to you.</p>
          <ul className="space-y-4 text-sm">
            <li><a href="mailto:support@survelans.com" className="inline-flex items-center gap-3 hover:text-gold"><Mail className="w-4 h-4 text-gold" /> support@survelans.com</a></li>
            <li><a href="https://www.instagram.com/survelans" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 hover:text-gold"><Instagram className="w-4 h-4 text-gold" /> @survelans</a></li>
            <li><a href="https://x.com/Survelans" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 hover:text-gold"><Twitter className="w-4 h-4 text-gold" /> @Survelans</a></li>
          </ul>
          <p className="text-xs text-muted-foreground mt-8">Want to unsubscribe or delete your data? Use the <Link to="/data-retention" className="underline">data request form</Link>.</p>
        </div>
        <div className="md:col-span-3">
          {state === "done" ? (
            <p role="status" className="rounded-lg border border-gold/40 bg-gold/10 p-6">Thanks! Your message is in. We'll reply to your email soon.</p>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-4 rounded-2xl border border-border bg-card p-8">
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="block text-sm"><span className="block mb-1">Name</span><input name="name" maxLength={100} className={input} autoComplete="name" /></label>
                <label className="block text-sm"><span className="block mb-1">Email</span><input name="email" type="email" maxLength={255} className={input} autoComplete="email" /></label>
              </div>
              <label className="block text-sm"><span className="block mb-1">Subject</span><input name="subject" maxLength={150} className={input} /></label>
              <label className="block text-sm"><span className="block mb-1">Message</span><textarea name="message" rows={6} maxLength={2000} className={input} /></label>
              <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
              {state === "error" && <p role="alert" className="text-sm text-destructive">{msg}</p>}
              <button disabled={state === "loading"} className="px-7 py-3 rounded-full bg-gold text-primary-foreground font-medium disabled:opacity-60">{state === "loading" ? "Sending…" : "Send message"}</button>
            </form>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
