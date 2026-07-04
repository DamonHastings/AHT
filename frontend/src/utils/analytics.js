/**
 * Google Analytics 4 (gtag.js). No-ops unless VITE_GA_MEASUREMENT_ID is set, so
 * nothing loads in dev/preview or before the site is configured. Set
 * VITE_GA_MEASUREMENT_ID to your GA4 Measurement ID (e.g. "G-XXXXXXXXXX") to
 * enable.
 *
 * This is a single-page app, so automatic page_view is disabled at config time
 * (`send_page_view: false`) and pageviews are sent manually on each route change
 * via trackPageview() — otherwise client-side navigations wouldn't be counted.
 */
import { hasAnalyticsConsent } from "./consent";

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

let initialized = false;

/** True when a GA4 Measurement ID is configured (so a consent prompt is warranted). */
export function isAnalyticsConfigured() {
  return Boolean(MEASUREMENT_ID);
}

// GA4 event names must be snake_case (letters, numbers, underscores; no spaces).
// Callers pass human-readable names like "Consultation Started" — normalize them
// so the same call sites work unchanged and reports stay consistent.
function toEventName(name) {
  return String(name)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .slice(0, 40);
}

export function initAnalytics() {
  // Gated on explicit consent (GDPR): nothing loads and no cookies are set until
  // the visitor accepts. Called on load (if already consented) and from the
  // consent banner on Accept; the `initialized` guard makes it idempotent.
  if (
    initialized ||
    !MEASUREMENT_ID ||
    typeof document === "undefined" ||
    !hasAnalyticsConsent()
  )
    return;
  initialized = true;

  // dataLayer + gtag stub so trackEvent()/trackPageview() work even before the
  // remote script finishes loading (calls are queued and replayed).
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function () {
      window.dataLayer.push(arguments);
    };

  window.gtag("js", new Date());
  // Manual pageviews for the SPA (see trackPageview); avoids a double count on load.
  window.gtag("config", MEASUREMENT_ID, { send_page_view: false });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(
    MEASUREMENT_ID
  )}`;
  document.head.appendChild(script);

  // Count the initial load (config no longer sends it for us).
  trackPageview();
}

let lastPageviewPath = null;

/**
 * Send a GA4 page_view for the current (or given) path. Consecutive calls for
 * the same path are ignored, so the initial load (sent from initAnalytics) and
 * the router's first render — plus StrictMode's double-invoked effects in dev —
 * don't produce duplicate pageviews.
 */
export function trackPageview(path) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  const p = path || `${window.location.pathname}${window.location.search}`;
  if (p === lastPageviewPath) return;
  lastPageviewPath = p;
  window.gtag("event", "page_view", {
    page_location: `${window.location.origin}${p}`,
    page_title: document.title,
  });
}

/** Send a GA4 custom event. `props` become event parameters. */
export function trackEvent(name, props) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", toEventName(name), props || undefined);
}
