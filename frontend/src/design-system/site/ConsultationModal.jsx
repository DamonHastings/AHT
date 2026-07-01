import { useEffect, useId, useRef, useState } from "react";
import PropTypes from "prop-types";
import { apiUrl } from "../../utils/api";
import { trackEvent } from "../../utils/analytics";

const INITIAL_FORM_DATA = {
  fullName: "",
  email: "",
  phone: "",
  preferredDate: "",
  preferredTime: "",
  preferredFormat: "",
  message: "",
  // Honeypot — must stay empty. Bots that fill every field will populate it.
  company: "",
};

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

// Minimum time (ms) a genuine human takes to fill the form. Faster = likely bot.
const MIN_FILL_MS = 2500;

/**
 * Google Calendar Appointment Schedule pages only allow iframe embedding via the
 * `?gv=true` variant; the plain share link refuses to frame (X-Frame-Options).
 * Normalize so either form works.
 */
function toEmbedUrl(url) {
  if (!url) return url;
  try {
    const u = new URL(url);
    if (
      u.hostname.endsWith("calendar.google.com") &&
      u.pathname.includes("/appointments/schedules/") &&
      !u.searchParams.has("gv")
    ) {
      u.searchParams.set("gv", "true");
    }
    return u.toString();
  } catch {
    return url;
  }
}

const TIME_OPTIONS = ["Morning", "Midday", "Afternoon", "Early evening", "I'm flexible"];

export default function ConsultationModal({ isOpen, onClose, bookingUrl }) {
  const titleId = useId();
  const descriptionId = useId();
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const dialogRef = useRef(null);
  const openedAtRef = useRef(0);
  const previouslyFocusedRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    openedAtRef.current = Date.now();

    // Remember what was focused so we can restore it on close, then move focus
    // into the dialog for keyboard/screen-reader users.
    previouslyFocusedRef.current = document.activeElement;
    const focusables = dialogRef.current?.querySelectorAll(FOCUSABLE);
    focusables?.[0]?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      // Trap Tab focus within the dialog.
      if (event.key === "Tab" && dialogRef.current) {
        const items = dialogRef.current.querySelectorAll(FOCUSABLE);
        if (!items.length) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      // Restore focus to the element that opened the modal.
      const toRestore = previouslyFocusedRef.current;
      if (toRestore && typeof toRestore.focus === "function") {
        toRestore.focus();
      }
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setError("");
    }
  }, [isOpen]);

  // When the booking embed is shown, count the open as the conversion signal
  // (we can't observe completion inside the cross-origin Google iframe).
  useEffect(() => {
    if (isOpen && bookingUrl) {
      trackEvent("Booking Opened");
    }
  }, [isOpen, bookingUrl]);

  if (!isOpen) {
    return null;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Spam guards: honeypot filled, or form submitted implausibly fast.
    // Show the success state without sending so bots don't learn they failed.
    const tooFast = Date.now() - openedAtRef.current < MIN_FILL_MS;
    if (formData.company || tooFast) {
      setSubmitted(true);
      setFormData(INITIAL_FORM_DATA);
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const response = await fetch(apiUrl("/api/appointments"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          preferredDate: formData.preferredDate || undefined,
          preferredTime: formData.preferredTime || undefined,
          preferredFormat: formData.preferredFormat || undefined,
          message: formData.message,
          company: formData.company, // honeypot — server also rejects if filled
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.message || "We couldn't send your request. Please try again.");
      }

      trackEvent("Consultation Requested");
      setSubmitted(true);
      setFormData(INITIAL_FORM_DATA);
    } catch (err) {
      setError(err.message || "We couldn't send your request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-2xl border bg-white/80 px-4 py-3 text-[0.98rem] outline-none transition focus:border-[var(--teal)] focus:ring-4 focus:ring-[rgba(91,158,160,0.16)]";
  const labelClass = "site-ui-label mb-2 block text-[0.72rem]";

  // Booking embed gets its own full-screen slide-in pane — the Google booking
  // page needs far more room than the centered form modal allows.
  if (bookingUrl) {
    return (
      <div className="fixed inset-0 z-[500] flex justify-end" role="presentation">
        <div
          className="absolute inset-0"
          style={{ background: "rgba(28,39,48,0.45)", backdropFilter: "blur(4px)" }}
          onMouseDown={onClose}
          aria-hidden
        />
        <section
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={descriptionId}
          className="relative flex h-[100dvh] w-full flex-col"
          style={{
            background:
              "linear-gradient(160deg, rgba(253,251,247,0.99) 0%, rgba(244,240,232,0.99) 100%)",
            color: "var(--ink)",
            animation: "slideInPanel 0.32s cubic-bezier(0.22, 1, 0.36, 1)",
            willChange: "transform",
            boxShadow: "0 0 90px rgba(28,39,48,0.28)",
          }}
        >
          <header
            className="flex-shrink-0 border-b px-5 py-4 md:px-10 md:py-6"
            style={{ borderColor: "rgba(28,39,48,0.1)" }}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border transition hover:-translate-y-0.5 md:right-6 md:top-6"
              style={{
                borderColor: "rgba(28,39,48,0.14)",
                color: "var(--ink)",
                background: "rgba(255,255,255,0.68)",
                fontSize: "1.75rem",
              }}
              aria-label="Close booking panel"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <p className="site-eyebrow mb-1" style={{ color: "var(--teal-deep)" }}>
              Free consultation
            </p>
            <h2 id={titleId} className="site-heading text-2xl md:text-4xl pr-12">
              Pick a time that works.
            </h2>
            <p id={descriptionId} className="site-body-copy mt-2 text-[1.25rem]">
              Choose a free 15-minute slot below — you&rsquo;ll get an email confirmation. Please
              don&rsquo;t share urgent or sensitive details here; if you&rsquo;re in crisis, call
              911 or your local crisis line.
            </p>
          </header>

          <div className="min-h-0 flex-1 p-3 md:p-6">
            <iframe
              src={toEmbedUrl(bookingUrl)}
              title="Book a free consultation"
              className="mx-auto block h-full w-full rounded-[1.25rem] border"
              style={{ borderColor: "rgba(28,39,48,0.12)", background: "white" }}
            />
          </div>

          <div
            className="flex flex-shrink-0 flex-col items-start gap-3 border-t px-5 py-4 sm:flex-row sm:items-center sm:justify-between md:px-10"
            style={{ borderColor: "rgba(28,39,48,0.1)" }}
          >
            <p className="site-body-copy text-[0.85rem]" style={{ opacity: 0.7 }}>
              All booked? Google will email your confirmation — you can close this window.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="site-button-text flex-shrink-0 rounded-full px-7 py-2.5 text-[0.78rem] uppercase transition hover:-translate-y-0.5"
              style={{ background: "var(--terracotta)", color: "white" }}
            >
              Done
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-[500] flex items-center justify-center px-4 py-6 md:px-6"
      role="presentation"
    >
      <div
        className="absolute inset-0"
        style={{ background: "rgba(28,39,48,0.54)", backdropFilter: "blur(10px)" }}
        onMouseDown={onClose}
        aria-hidden
      />

      <section
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="relative max-h-[min(90vh,760px)] w-full max-w-3xl overflow-y-auto rounded-[2rem] p-5 shadow-2xl md:p-8"
        style={{
          background:
            "linear-gradient(145deg, rgba(253,251,247,0.98) 0%, rgba(244,240,232,0.98) 100%)",
          color: "var(--ink)",
          border: "1px solid rgba(91,158,160,0.2)",
          boxShadow: "0 28px 90px rgba(28,39,48,0.28)",
        }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border transition hover:-translate-y-0.5 md:right-6 md:top-6"
          style={{
            borderColor: "rgba(28,39,48,0.14)",
            color: "var(--ink)",
            background: "rgba(255,255,255,0.68)",
          }}
          aria-label="Close consultation form"
        >
          <span aria-hidden="true">&times;</span>
        </button>

        <div className="mb-7 max-w-2xl pr-10">
          <p className="site-eyebrow mb-3" style={{ color: "var(--teal-deep)" }}>
            Free consultation
          </p>
          <h2 id={titleId} className="site-heading text-3xl md:text-[2.6rem]">
            Schedule a first conversation.
          </h2>
          <p id={descriptionId} className="site-body-copy mt-4 max-w-xl text-[1rem]">
            Share a little about what you are looking for and a few times that may work. I will
            follow up to confirm a short, no-pressure consultation.
          </p>
        </div>

        {submitted ? (
          <div
            className="rounded-[1.5rem] border p-6 md:p-8"
            style={{
              background: "rgba(214,236,236,0.48)",
              borderColor: "rgba(91,158,160,0.28)",
            }}
          >
            <h3 className="site-heading mb-3 text-2xl">Thank you for reaching out.</h3>
            <p className="site-body-copy">
              Your request has been sent. I will follow up soon with next steps for scheduling.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="site-button-text mt-6 rounded-full px-7 py-3 text-[0.84rem] uppercase transition hover:-translate-y-0.5"
              style={{ background: "var(--terracotta)", color: "white" }}
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-4">
            {/* Honeypot: hidden from humans, off-screen and skipped by tab order. */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "-9999px",
                width: 1,
                height: 1,
                overflow: "hidden",
              }}
            >
              <label htmlFor="consultation-modal-company">Company (leave blank)</label>
              <input
                id="consultation-modal-company"
                name="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="consultation-modal-name" className={labelClass}>
                  Full name *
                </label>
                <input
                  id="consultation-modal-name"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                  className={inputClass}
                  style={{ borderColor: "rgba(28,39,48,0.14)" }}
                />
              </div>
              <div>
                <label htmlFor="consultation-modal-email" className={labelClass}>
                  Email *
                </label>
                <input
                  id="consultation-modal-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                  className={inputClass}
                  style={{ borderColor: "rgba(28,39,48,0.14)" }}
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <label htmlFor="consultation-modal-phone" className={labelClass}>
                  Phone
                </label>
                <input
                  id="consultation-modal-phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  className={inputClass}
                  style={{ borderColor: "rgba(28,39,48,0.14)" }}
                />
              </div>
              <div>
                <label htmlFor="consultation-modal-date" className={labelClass}>
                  Preferred date
                </label>
                <input
                  id="consultation-modal-date"
                  name="preferredDate"
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className={inputClass}
                  style={{ borderColor: "rgba(28,39,48,0.14)" }}
                />
              </div>
              <div>
                <label htmlFor="consultation-modal-time" className={labelClass}>
                  Best time
                </label>
                <select
                  id="consultation-modal-time"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className={inputClass}
                  style={{ borderColor: "rgba(28,39,48,0.14)" }}
                >
                  <option value="">Select a window</option>
                  {TIME_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <fieldset
              className="rounded-[1.25rem] border p-4"
              style={{ borderColor: "rgba(28,39,48,0.12)" }}
            >
              <legend className={`${labelClass} px-1`}>Preference</legend>
              <div className="flex flex-wrap gap-3">
                {["Phone", "Telehealth", "In person"].map((option) => (
                  <label
                    key={option}
                    className="site-body-copy flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm"
                    style={{
                      borderColor:
                        formData.preferredFormat === option ? "var(--teal)" : "rgba(28,39,48,0.14)",
                      background:
                        formData.preferredFormat === option
                          ? "rgba(214,236,236,0.55)"
                          : "rgba(255,255,255,0.56)",
                    }}
                  >
                    <input
                      type="radio"
                      name="preferredFormat"
                      value={option}
                      checked={formData.preferredFormat === option}
                      onChange={handleChange}
                      className="accent-[var(--teal)]"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>

            <div>
              <label htmlFor="consultation-modal-message" className={labelClass}>
                What would you like support with? *
              </label>
              <textarea
                id="consultation-modal-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className={`${inputClass} min-h-[120px] resize-y`}
                style={{ borderColor: "rgba(28,39,48,0.14)" }}
                placeholder="A few sentences is plenty."
              />
            </div>

            <p className="site-body-copy text-sm">
              Please do not include urgent or emergency information here. If you are in immediate
              danger or crisis, call 911 or your local crisis line.
            </p>

            {error && (
              <p
                className="rounded-2xl border px-4 py-3 text-sm"
                style={{
                  background: "rgba(176,90,74,0.1)",
                  borderColor: "rgba(176,90,74,0.3)",
                  color: "var(--terracotta)",
                }}
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="site-button-text mt-2 rounded-full px-8 py-4 text-[0.9rem] uppercase transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
              style={{
                background: "var(--terracotta)",
                color: "white",
                boxShadow: "0 10px 32px rgba(176,90,74,0.26)",
              }}
            >
              {submitting ? "Sending..." : "Request consultation"}
            </button>
          </form>
        )}
      </section>
    </div>
  );
}

ConsultationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  bookingUrl: PropTypes.string,
};
