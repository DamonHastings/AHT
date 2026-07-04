/**
 * Analytics consent state, persisted in localStorage. Analytics (GA4) is only
 * loaded after the visitor explicitly grants consent — see analytics.js and
 * ConsentBanner.jsx. Until a choice is made, getConsent() returns null and the
 * banner is shown.
 */
const KEY = "arh-analytics-consent";

export const CONSENT_GRANTED = "granted";
export const CONSENT_DENIED = "denied";

/** @returns {"granted"|"denied"|null} */
export function getConsent() {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

export function setConsent(value) {
  try {
    localStorage.setItem(KEY, value);
  } catch {
    // localStorage unavailable (private mode / blocked) — treat as no persisted
    // choice; analytics simply stays off for the session.
  }
}

export function hasAnalyticsConsent() {
  return getConsent() === CONSENT_GRANTED;
}
