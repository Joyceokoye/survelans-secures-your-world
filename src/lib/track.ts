import { supabase } from "@/integrations/supabase/client";

/** Fire-and-forget event log. Stores only an event name and short label — no personal data. */
export function track(event_name: string, label?: string) {
  void supabase.from("analytics_events").insert({ event_name, label: label?.slice(0, 100) ?? null });
}
