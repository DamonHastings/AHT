/**
 * Vercel Web Analytics. Cookieless and privacy-first — no consent banner
 * required. Pageviews (including SPA route changes) are tracked automatically by
 * the <Analytics /> component mounted in App.jsx; this module just wraps custom
 * events so existing call sites keep calling trackEvent(name, props).
 *
 * Data only flows on Vercel deployments with Web Analytics enabled in the
 * project dashboard. track() safely no-ops elsewhere (local dev, self-hosting),
 * so these calls are always safe to make.
 */
import { track } from "@vercel/analytics";

/** Send a custom analytics event. `props` become event properties. */
export function trackEvent(name, props) {
  track(name, props || undefined);
}
