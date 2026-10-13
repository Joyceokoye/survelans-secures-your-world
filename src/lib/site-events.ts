export function trackSiteEvent(name: string) {
  window.dispatchEvent(new CustomEvent("survelans:analytics", { detail: { event: name } }));
}