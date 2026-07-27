import { useEffect, useId, useRef, useState } from "react";
import PropTypes from "prop-types";
import { apiUrl } from "../../utils/api";
import { trackEvent } from "../../utils/analytics";

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

// Honeypot `company` must stay empty — bots that fill every field populate it.
const INITIAL = { name: "", email: "", phone: "", message: "", company: "" };

/**
 * Standard contact modal — a simple message form (name, email, optional phone,
 * message) that submits to the backend and emails the practitioner. Distinct
 * from the ConsultationModal, which handles calendar booking.
 */
export default function ContactModal({ isOpen, onClose }) {
  const titleId = useId();
  const descriptionId = useId();
  const [form, setForm] = useState(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const dialogRef = useRef(null);
  const previouslyFocusedRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    previouslyFocusedRef.current = document.activeElement;
    dialogRef.current?.querySelectorAll(FOCUSABLE)?.[0]?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
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
      const toRestore = previouslyFocusedRef.current;
      if (toRestore && typeof toRestore.focus === "function") toRestore.focus();
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setForm(INITIAL);
      setSubmitted(false);
      setError("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const response = await fetch(apiUrl("/api/contact"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
          company: form.company, // honeypot
        }),
      });
      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.message || "We couldn't send that. Please try again.");
      }
      trackEvent("Contact Submitted");
      setSubmitted(true);
    } catch (err) {
      setError(err.message || "We couldn't send that. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-2xl border bg-white/80 px-4 py-3 text-[0.98rem] outline-none transition focus:border-[var(--teal)] focus:ring-4 focus:ring-[rgba(91,158,160,0.16)]";
  const labelClass = "site-ui-label mb-2 block text-[0.72rem]";

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
        className="relative max-h-[min(90vh,720px)] w-full max-w-xl overflow-y-auto rounded-[2rem] p-5 shadow-2xl md:p-8"
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
          className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full transition hover:-translate-y-0.5 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/60 md:right-6 md:top-6"
          style={{
            background: "var(--terracotta)",
            color: "white",
            fontSize: "1.9rem",
            lineHeight: 1,
            boxShadow: "0 4px 14px rgba(0,0,0,0.18)",
          }}
          aria-label="Close contact form"
        >
          <span aria-hidden="true">&times;</span>
        </button>

        <div className="mb-7 max-w-lg pr-10">
          <p className="site-eyebrow mb-3" style={{ color: "var(--teal-deep)" }}>
            get in touch
          </p>
          <h2 id={titleId} className="site-heading text-3xl md:text-[2.4rem]">
            Send me a message.
          </h2>
          <p id={descriptionId} className="site-body-copy mt-4 max-w-md text-[1rem]">
            Questions before booking, or not sure where to start? Share a little and I&rsquo;ll
            reply by email. Please don&rsquo;t include urgent or sensitive details here; if
            you&rsquo;re in crisis, call 911 or your local crisis line.
          </p>
        </div>

        {submitted ? (
          <div
            className="rounded-[1.5rem] border p-6 md:p-8"
            style={{ background: "rgba(214,236,236,0.48)", borderColor: "rgba(91,158,160,0.28)" }}
          >
            <h3 className="site-heading mb-3 text-2xl">Thank you for reaching out.</h3>
            <p className="site-body-copy">
              Your message has been sent — I&rsquo;ll follow up by email soon.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="site-button-text mt-6 rounded-full px-7 py-3 text-[0.84rem] uppercase transition hover:-translate-y-0.5"
              style={{ background: "var(--teal-deep)", color: "white" }}
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-5">
            {/* Honeypot */}
            <div
              aria-hidden="true"
              style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}
            >
              <label htmlFor="contact-company">Company (leave blank)</label>
              <input
                id="contact-company"
                name="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={form.company}
                onChange={handleChange}
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className={labelClass}>
                  Name *
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                  className={inputClass}
                  style={{ borderColor: "rgba(57,67,79,0.16)" }}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className={labelClass}>
                  Email *
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                  className={inputClass}
                  style={{ borderColor: "rgba(57,67,79,0.16)" }}
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-phone" className={labelClass}>
                Phone (optional)
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                autoComplete="tel"
                className={inputClass}
                style={{ borderColor: "rgba(57,67,79,0.16)" }}
              />
            </div>

            <div>
              <label htmlFor="contact-message" className={labelClass}>
                Message *
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className={`${inputClass} min-h-[120px] resize-y`}
                style={{ borderColor: "rgba(57,67,79,0.16)" }}
                placeholder="A few sentences is plenty."
              />
            </div>

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
              className="site-button-text mt-1 rounded-full px-8 py-4 text-[0.9rem] uppercase transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
              style={{
                background: "var(--terracotta)",
                color: "white",
                boxShadow: "0 10px 32px rgba(176,90,74,0.26)",
              }}
            >
              {submitting ? "Sending..." : "Send message"}
            </button>
          </form>
        )}
      </section>
    </div>
  );
}

ContactModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
