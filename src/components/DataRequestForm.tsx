import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  email: z.string().trim().email("Please enter a valid email").max(255),
  request_type: z.enum(["unsubscribe", "delete"]),
  details: z.string().trim().max(1000).optional(),
});

export function DataRequestForm() {
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [msg, setMsg] = useState("");
  const input = "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (fd.get("website")) return;
    const p = schema.safeParse({ email: fd.get("email"), request_type: fd.get("request_type"), details: (fd.get("details") as string) || undefined });
    if (!p.success) { setState("error"); setMsg(p.error.issues[0].message); return; }
    setState("loading");
    const { error } = await supabase.from("data_requests").insert({ ...p.data, email: p.data.email.toLowerCase(), details: p.data.details ?? null });
    if (error) { setState("error"); setMsg("Something went wrong. Please try again or email support@survelans.com."); return; }
    setState("done");
  }

  if (state === "done") return <p role="status" className="rounded-lg border border-gold/40 bg-gold/10 p-5 text-foreground">Got it. We'll process your request and may email you to confirm it's really you.</p>;
  return (
    <form onSubmit={onSubmit} noValidate className="space-y-3 rounded-xl border border-border bg-card p-6 not-prose">
      <label className="block text-sm"><span className="block mb-1 text-foreground">Email address</span><input name="email" type="email" required className={input} /></label>
      <label className="block text-sm"><span className="block mb-1 text-foreground">What do you want to do?</span>
        <select name="request_type" className={input}><option value="unsubscribe">Unsubscribe from emails</option><option value="delete">Delete all my data</option></select>
      </label>
      <label className="block text-sm"><span className="block mb-1 text-foreground">Anything else? (optional)</span><textarea name="details" maxLength={1000} rows={3} className={input} /></label>
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      {state === "error" && <p role="alert" className="text-sm text-destructive">{msg}</p>}
      <button disabled={state === "loading"} className="px-6 py-2.5 rounded-full bg-gold text-primary-foreground font-medium disabled:opacity-60">{state === "loading" ? "Sending…" : "Send request"}</button>
    </form>
  );
}
