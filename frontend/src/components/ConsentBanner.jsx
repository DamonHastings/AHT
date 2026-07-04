import { useEffect, useState } from "react";
import {
  initAnalytics,
  isAnalyticsConfigured,
} from "../utils/analytics";
import {
  CONSENT_DENIED,
  CONSENT_GRANTED,
  getConsent,
  setConsent,
} from "../utils/consent";

/**
 * Lightweight, GDPR-style analytics consent banner. Analytics (GA4) stays fully
 * unloaded — no script, no cookies — until the visitor clicks Accept. The banner
 * only appears when a GA4 Measurement ID is configured AND no choice has been
 * made yet, so it never shows in dev/preview or after a decision is stored.
 */
export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isAnalyticsConfigured() && getConsent() === null) {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const accept = () => {
    setConsent(CONSENT_GRANTED);
    initAnalytics();
    setVisible(false);
  };

  const decline = () => {
    setConsent(CONSENT_DENIED);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Analytics consent"
      className="fixed inset-x-0 bottom-0 z-[150] px-4 pb-4 pt-3 md:px-6 md:pb-6"
      style={{ fontFamily: "var(--font-body)" }}
    >
      <div
        className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl px-5 py-4 shadow-lg md:flex-row md:items-center md:gap-6 md:px-6"
        style={{
          background: "var(--ink)",
          color: "var(--linen)",
          boxShadow: "0 12px 40px rgba(0,0,0,0.28)",
        }}
      >
        <p className="text-[0.9rem] leading-relaxed" style={{ opacity: 0.9 }}>
          I use Google Analytics to understand how visitors find and use this
          site. It sets cookies only if you agree. See the{" "}
          <a
            href="/privacy"
            className="underline"
            style={{ color: "var(--teal-light)" }}
          >
            Privacy Policy
          </a>
          .
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={decline}
            className="site-button-text rounded-full border px-5 py-2.5 text-[0.8rem] uppercase transition-colors"
            style={{
              borderColor: "rgba(244,240,232,0.35)",
              color: "var(--linen)",
              background: "transparent",
            }}
          >
            Decline
          </button>
          <button
            type="button"
            onClick={accept}
            className="site-button-text rounded-full px-5 py-2.5 text-[0.8rem] uppercase transition-all hover:-translate-y-px"
            style={{
              background: "var(--terracotta)",
              color: "white",
            }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
