/**
 * Conversion and engagement tracking.
 *
 * No analytics provider has been chosen yet, so this is deliberately a seam
 * rather than an integration: call sites are instrumented now, and the provider
 * drops into `deliver` later without touching any component. Until then
 * `track` is a no-op in production and logs in development, which is enough to
 * verify the events fire in the right order with the right payloads.
 *
 * To connect a provider, implement `deliver` for it and nothing else. GA4 and
 * Plausible both expose a global function, so in practice that is a single
 * `window.gtag(...)` or `window.plausible(...)` call.
 */

/** The homepage's conversion and narrative-engagement events. */
export type AnalyticsEvent =
  /* Conversions. */
  | "strategic_clarity_call"
  | "organisational_engagement"
  | "programme_explored"
  | "founder_story_opened"
  /* Narrative engagement: which parts of the argument people actually open. */
  | "gap_selected"
  | "strategic_step_selected"
  | "methodology_principle_selected";

type AnalyticsProps = Record<string, string | number | boolean | undefined>;

/**
 * Where on the page the event came from. Every event carries this, so the same
 * conversion can be compared across the several places it is offered.
 */
type Context = { section: string } & AnalyticsProps;

declare global {
  interface Window {
    gtag?: (command: string, ...args: unknown[]) => void;
    plausible?: (event: string, options?: { props?: AnalyticsProps }) => void;
  }
}

function deliver(event: AnalyticsEvent, props: Context) {
  /* Provider goes here. Both of the likely candidates are already typed above:
       window.gtag?.("event", event, props);
       window.plausible?.(event, { props });
     Guard with `?.` so a blocked or not-yet-loaded script cannot throw. */
  if (import.meta.env.DEV) {
    console.debug("[analytics]", event, props);
  }
}

/**
 * Records an event. Never throws and never blocks: navigation must not depend
 * on a tracking call, so a provider that is slow, blocked by an extension, or
 * misconfigured cannot break a CTA.
 */
export function track(event: AnalyticsEvent, props: Context) {
  if (typeof window === "undefined") return;
  try {
    deliver(event, props);
  } catch {
    /* Analytics is never worth an interaction failing over. */
  }
}
