import { useState } from "react";
import { z } from "zod";
import { Link } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { track } from "@/lib/track";
import { Loader2, CheckCircle2 } from "lucide-react";

const schema = z.object({
  first_name: z.string().trim().min(1, "Please add your first name").max(80),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(30).regex(/^[+\d\s()-]*$/, "Numbers only, please").optional(),
  marketing_consent: z.boolean(),
});

export function WaitlistForm({ source, compact = false }: { source: string; compact?: boolean }) {
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (fd.get("website")) return; // spam trap
    const parsed = schema.safeParse({
      first_name: fd.get("first_name"),
      email: fd.get("email"),
      phone: (fd.get("phone") as string) || undefined,
      marketing_consent: fd.get("consent") === "on",
    });
    if (!parsed.success) {
      setState("error");
      setMsg(parsed.error.issues[0].message);
      return;
    }
    setState("loading");
    const { error } = await supabase.from("waitlist_subscribers").insert({
      ...parsed.data,
      email: parsed.data.email.toLowerCase(),
      phone: parsed.data.phone || null,
      source,
    });
    if (error) {
      setState(error.code === "23505" ? "done" : "error");
      setMsg(error.code === "23505" ? "You're already on the list — we'll keep you posted!" : "Something went wrong. Please try again.");
      return;
    }
    track("waitlist_signup", source);
    setState("done");
    setMsg("You're on the list! We'll let you know when Survelans is ready.");
  }

  if (state === "done") {
    return (
      <div role="status" className="flex items-start gap-3 rounded-lg border border-gold/40 bg-gold/10 p-5">
        <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
        <p>{msg}</p>
      </div>
    );
  }

  const input = "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";
  return (
    <form onSubmit={onSubmit} noValidate className="space-y-3">
      <div className={compact ? "space-y-3" : "grid sm:grid-cols-2 gap-3"}>
        <label className="block"><span className="sr-only">First name</span>
          <input name="first_name" required maxLength={80} placeholder="First name" className={input} autoComplete="given-name" />
        </label>
        <label className="block"><span className="sr-only">Email address</span>
          <input name="email" type="email" required maxLength={255} placeholder="Email address" className={input} autoComplete="email" />
        </label>
      </div>
      <label className="block"><span className="sr-only">Phone number (optional)</span>
        <input name="phone" type="tel" maxLength={30} placeholder="Phone number (optional)" className={input} autoComplete="tel" />
      </label>
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <label className="flex items-start gap-2 text-xs text-muted-foreground">
        <input name="consent" type="checkbox" className="mt-0.5 accent-[var(--gold)]" />
        <span>Yes, send me Survelans launch news and updates. You can unsubscribe any time. See our <Link to="/privacy" className="underline hover:text-foreground">Privacy Policy</Link>.</span>
      </label>
      {state === "error" && <p role="alert" className="text-sm text-destructive">{msg}</p>}
      <button type="submit" disabled={state === "loading"} className="w-full inline-flex justify-center items-center gap-2 px-6 py-3 rounded-full bg-gold text-primary-foreground font-medium hover:opacity-90 transition disabled:opacity-60">
        {state === "loading" && <Loader2 className="w-4 h-4 animate-spin" />} Join the Waitlist
      </button>
    </form>
  );
}
