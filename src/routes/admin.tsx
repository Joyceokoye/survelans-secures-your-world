import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";
import logo from "@/assets/survelans-logo-orange.png";

export const Route = createFileRoute("/admin")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Admin — Survélans" },
      { name: "description", content: "Survelans team dashboard." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Admin — Survélans" },
      { property: "og:description", content: "Survelans team dashboard." },
    ],
  }),
  component: AdminPage,
});

const input = "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring";

function AdminPage() {
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => { setSession(data.session); setReady(true); });
    const { data } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => data.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session) { setIsAdmin(null); return; }
    supabase.rpc("has_role", { _user_id: session.user.id, _role: "admin" }).then(({ data }) => setIsAdmin(!!data));
  }, [session]);

  if (!ready) return null;
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border px-6 h-20 flex items-center justify-between">
        <Link to="/"><img src={logo} alt="Survélans" className="w-[49px] h-auto" /></Link>
        {session && <button onClick={() => supabase.auth.signOut()} className="text-sm text-muted-foreground hover:text-gold">Sign out</button>}
      </header>
      <main className="max-w-7xl mx-auto px-6 py-10">
        {!session ? <SignIn /> : isAdmin === null ? <p>Checking access…</p> : !isAdmin ? (
          <p className="text-muted-foreground">This account doesn't have admin access. Ask the site owner to grant it.</p>
        ) : <Dashboard />}
      </main>
    </div>
  );
}

function SignIn() {
  const [mode, setMode] = useState<"in" | "up">("in");
  const [msg, setMsg] = useState("");
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email")), password = String(fd.get("password"));
    setMsg("");
    const { error } = mode === "in"
      ? await supabase.auth.signInWithPassword({ email, password })
      : await supabase.auth.signUp({ email, password, options: { emailRedirectTo: `${window.location.origin}/admin` } });
    if (error) setMsg(error.message);
    else if (mode === "up") setMsg("Check your email to confirm your account, then sign in.");
  }
  return (
    <form onSubmit={onSubmit} className="max-w-sm mx-auto space-y-4 mt-10">
      <h1 className="text-3xl">{mode === "in" ? "Team sign in" : "Create team account"}</h1>
      <input name="email" type="email" required placeholder="Email" className={input} />
      <input name="password" type="password" required minLength={8} placeholder="Password" className={input} />
      {msg && <p className="text-sm text-muted-foreground">{msg}</p>}
      <button className="w-full px-6 py-2.5 rounded-full bg-gold text-primary-foreground font-medium">{mode === "in" ? "Sign in" : "Create account"}</button>
      <button type="button" onClick={() => setMode(mode === "in" ? "up" : "in")} className="text-xs text-muted-foreground underline">
        {mode === "in" ? "Need an account?" : "Already have an account?"}
      </button>
    </form>
  );
}

function toCsv(rows: Record<string, unknown>[]) {
  if (!rows.length) return "";
  const keys = Object.keys(rows[0]);
  const esc = (v: unknown) => `"${String(v ?? "").replace(/"/g, '""')}"`;
  return [keys.join(","), ...rows.map((r) => keys.map((k) => esc(r[k])).join(","))].join("\n");
}
function download(name: string, text: string) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([text], { type: "text/csv" }));
  a.download = name; a.click();
}

function Dashboard() {
  const [tab, setTab] = useState<"list" | "msgs" | "reqs">("list");
  const [subs, setSubs] = useState<Tables<"waitlist_subscribers">[]>([]);
  const [msgs, setMsgs] = useState<Tables<"contact_messages">[]>([]);
  const [reqs, setReqs] = useState<Tables<"data_requests">[]>([]);
  const [events, setEvents] = useState<Tables<"analytics_events">[]>([]);
  const [q, setQ] = useState("");
  const [consent, setConsent] = useState("all");

  async function load() {
    const [a, b, c, d] = await Promise.all([
      supabase.from("waitlist_subscribers").select("*").order("created_at", { ascending: false }),
      supabase.from("contact_messages").select("*").order("created_at", { ascending: false }),
      supabase.from("data_requests").select("*").order("created_at", { ascending: false }),
      supabase.from("analytics_events").select("*").order("created_at", { ascending: false }).limit(1000),
    ]);
    setSubs(a.data ?? []); setMsgs(b.data ?? []); setReqs(c.data ?? []); setEvents(d.data ?? []);
  }
  useEffect(() => { void load(); }, []);

  const filtered = useMemo(() => subs.filter((s) =>
    (consent === "all" || String(s.marketing_consent) === consent) &&
    (!q || `${s.first_name} ${s.email} ${s.phone ?? ""} ${s.source}`.toLowerCase().includes(q.toLowerCase()))), [subs, q, consent]);

  const counts = useMemo(() => {
    const m: Record<string, number> = {};
    events.forEach((e) => { m[e.event_name] = (m[e.event_name] ?? 0) + 1; });
    return m;
  }, [events]);

  async function removeSub(id: string) {
    if (!confirm("Delete this subscriber permanently?")) return;
    await supabase.from("waitlist_subscribers").delete().eq("id", id); void load();
  }

  const tabBtn = (t: typeof tab, label: string) => (
    <button onClick={() => setTab(t)} className={`px-4 py-2 rounded-full text-sm ${tab === t ? "bg-gold text-primary-foreground" : "border border-border text-muted-foreground"}`}>{label}</button>
  );

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
        {[["Subscribers", subs.length], ["Messages", msgs.length], ["Data requests", reqs.length], ["CTA clicks", counts.cta_click ?? 0], ["Social clicks", counts.social_click ?? 0]].map(([l, n]) => (
          <div key={l} className="rounded-lg border border-border bg-card p-5"><p className="text-xs text-muted-foreground">{l}</p><p className="text-3xl font-display">{n}</p></div>
        ))}
      </div>
      <div className="flex gap-2 mb-6 flex-wrap">{tabBtn("list", "Mailing List")}{tabBtn("msgs", "Enquiries")}{tabBtn("reqs", "Data Requests")}</div>

      {tab === "list" && (
        <>
          <div className="flex flex-wrap gap-3 mb-4">
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search name, email, source…" className={`${input} max-w-xs`} />
            <select value={consent} onChange={(e) => setConsent(e.target.value)} className={`${input} max-w-[200px]`}>
              <option value="all">All consent</option><option value="true">Opted in</option><option value="false">Not opted in</option>
            </select>
            <button onClick={() => download("survelans-waitlist.csv", toCsv(filtered))} className="px-5 py-2 rounded-full border border-gold/60 text-sm hover:bg-gold/10">Export CSV (opens in Excel)</button>
          </div>
          <Table head={["Date", "Name", "Email", "Phone", "Consent", "Source", ""]}
            rows={filtered.map((s) => [new Date(s.created_at).toLocaleDateString(), s.first_name, s.email, s.phone ?? "—", s.marketing_consent ? "Yes" : "No", s.source,
              <button key="d" onClick={() => removeSub(s.id)} className="text-destructive text-xs">Delete</button>])} />
        </>
      )}
      {tab === "msgs" && (
        <>
          <button onClick={() => download("survelans-enquiries.csv", toCsv(msgs))} className="mb-4 px-5 py-2 rounded-full border border-gold/60 text-sm">Export CSV</button>
          <Table head={["Date", "Name", "Email", "Subject", "Message"]} rows={msgs.map((m) => [new Date(m.created_at).toLocaleDateString(), m.name, m.email, m.subject, m.message])} />
        </>
      )}
      {tab === "reqs" && <Table head={["Date", "Email", "Type", "Details"]} rows={reqs.map((r) => [new Date(r.created_at).toLocaleDateString(), r.email, r.request_type, r.details ?? "—"])} />}
    </div>
  );
}

function Table({ head, rows }: { head: string[]; rows: React.ReactNode[][] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm">
        <thead className="bg-card text-left text-muted-foreground"><tr>{head.map((h, i) => <th key={i} className="p-3 font-medium">{h}</th>)}</tr></thead>
        <tbody>
          {rows.length === 0 ? <tr><td colSpan={head.length} className="p-6 text-center text-muted-foreground">Nothing here yet.</td></tr> :
            rows.map((r, i) => <tr key={i} className="border-t border-border align-top">{r.map((c, j) => <td key={j} className="p-3 max-w-md break-words">{c}</td>)}</tr>)}
        </tbody>
      </table>
    </div>
  );
}
