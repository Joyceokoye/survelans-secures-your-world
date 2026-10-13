import { Bell, MapPin, Smartphone, Users, Watch, ArrowRight } from "lucide-react";

const stages = [
  { icon: Watch, text: "Long press" },
  { icon: Smartphone, text: "Paired phone" },
  { icon: MapPin, text: "Location & alert" },
  { icon: Users, text: "Trusted contacts" },
];

export function ProductFlow() {
  return (
    <figure className="mt-8 border-y border-border py-5" aria-label="Illustrative planned workflow: bracelet trigger to paired phone, location and alerts, then trusted contacts">
      <figcaption className="mb-5 flex items-center gap-2 text-xs text-muted-foreground"><Bell className="size-3.5 text-gold" /> Planned emergency workflow</figcaption>
      <div className="grid grid-cols-4 gap-2">
        {stages.map((stage, index) => (
          <div key={stage.text} className={`flow-stage flow-stage-${index} relative flex flex-col items-center gap-3 text-center`}>
            <stage.icon className="size-6 text-gold" aria-hidden="true" />
            <span className="text-[11px] leading-4 sm:text-xs">{stage.text}</span>
            {index < 3 && <ArrowRight className="absolute -right-2 top-1 size-3 text-muted-foreground" aria-hidden="true" />}
          </div>
        ))}
      </div>
    </figure>
  );
}