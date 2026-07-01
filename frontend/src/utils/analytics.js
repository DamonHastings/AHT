/**
 * Privacy-friendly, cookieless analytics (Plausible). No-ops unless
 * VITE_PLAUSIBLE_DOMAIN is set, so nothing loads in dev/preview or before the
 * site is configured. Set VITE_PLAUSIBLE_DOMAIN to your registered Plausible
 * domain (e.g. "ariellehastings.com") to enable.
 */
const DOMAIN = import.meta.env.VITE_PLAUSIBLE_DOMAIN;

let initialized = false;

export function initAnalytics() {
  if (initialized || !DOMAIN || typeof document === "undefined") return;
  initialized = true;

  // Queue stub so trackEvent() works even before the script finishes loading.
  window.plausible =
    window.plausible ||
    function () {
      (window.plausible.q = window.plausible.q || []).push(arguments);
    };

  const script = document.createElement("script");
  script.defer = true;
  script.dataset.domain = DOMAIN;
  // tagged-events build supports custom goal events via window.plausible(name).
  script.src = "https://plausible.io/js/script.tagged-events.js";
  document.head.appendChild(script);
}

export function trackEvent(name, props) {
  if (typeof window === "undefined" || typeof window.plausible !== "function") return;
  window.plausible(name, props ? { props } : undefined);
}
