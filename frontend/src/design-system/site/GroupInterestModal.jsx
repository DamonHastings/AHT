import { useEffect, useId, useRef, useState } from "react";
import PropTypes from "prop-types";
import { SITE_CONTACT } from "../../content/siteContact";
import { apiUrl } from "../../utils/api";
import { trackEvent } from "../../utils/analytics";

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

const INTEREST_OPTIONS = [
  "A group for adults grieving a parent",
  "A group for practicing hope / resilience",
  "Just interested in groups generally",
  "Something else (I'll note it below)",
];

const FORMAT_OPTIONS = ["In person", "Telehealth", "Either"];

// Honeypot `company` must stay empty — bots that fill every field populate it.
const INITIAL = { name: "", email: "", interests: [], format: "", notes: "", company: "" };

/**
 * Short "gauge interest" questionnaire for the forming Groups offering. Answers
 * are submitted to the backend, which emails the practitioner directly (same
 * infra as the consultation form).
 */
export default function GroupInterestModal({ isOpen, onClose }) {
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
    const focusables = dialogRef.current?.querySelectorAll(FOCUSABLE);
    focusables?.[0]?.focus();

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
      if (toRestore && typeof toRestore.focus === "function") {
        toRestore.focus();
      }
    };
  }, [isOpen, onClose]);

  // Reset to a fresh form each time the modal opens.
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

  const toggleInterest = (option) => {
    setForm((current) => ({
      ...current,
      interests: current.interests.includes(option)
        ? current.interests.filter((i) => i !== option)
        : [...current.interests, option],
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const response = await fetch(apiUrl("/api/group-interest"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          interests: form.interests,
          format: form.format,
          notes: form.notes,
          company: form.company, // honeypot
        }),
      });
      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.message || "We couldn't send that. Please try again.");
      }
      trackEvent("Group Interest Submitted");
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
        className="relative max-h-[min(90vh,760px)] w-full max-w-2xl overflow-y-auto rounded-[2rem] p-5 shadow-2xl md:p-8"
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
          aria-label="Close interest form"
        >
          <span aria-hidden="true">&times;</span>
        </button>

        <div className="mb-7 max-w-xl pr-10">
          <p className="site-eyebrow mb-3" style={{ color: "var(--teal-deep)" }}>
            Groups · forming
          </p>
          <h2 id={titleId} className="site-heading text-3xl md:text-[2.4rem]">
            Help me gauge interest.
          </h2>
          <p id={descriptionId} className="site-body-copy mt-4 max-w-xl text-[1rem]">
            Groups aren&rsquo;t running yet — I&rsquo;m seeing what people would want. A few quick
            answers is plenty. There&rsquo;s no commitment; I&rsquo;ll only reach out if something
            takes shape that fits.
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
            <h3 className="site-heading mb-3 text-2xl">Thank you — your interest is in.</h3>
            <p className="site-body-copy">
              Thanks for sharing. I&rsquo;ll only reach out if a group takes shape that fits what
              you&rsquo;re looking for. If you&rsquo;d rather reach me directly, you can email{" "}
              <a
                href={`mailto:${SITE_CONTACT.email}`}
                style={{ color: "var(--teal-deep)", textDecoration: "underline" }}
              >
                {SITE_CONTACT.email}
              </a>
              .
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
            {/* Honeypot: hidden from humans, off-screen and skipped by tab order. */}
            <div
              aria-hidden="true"
              style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}
            >
              <label htmlFor="group-interest-company">Company (leave blank)</label>
              <input
                id="group-interest-company"
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
                <label htmlFor="group-interest-name" className={labelClass}>
                  Name *
                </label>
                <input
                  id="group-interest-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                  className={inputClass}
                  style={{ borderColor: "rgba(28,39,48,0.14)" }}
                />
              </div>
              <div>
                <label htmlFor="group-interest-email" className={labelClass}>
                  Email *
                </label>
                <input
                  id="group-interest-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                  className={inputClass}
                  style={{ borderColor: "rgba(28,39,48,0.14)" }}
                />
              </div>
            </div>

            <fieldset
              className="rounded-[1.25rem] border p-4"
              style={{ borderColor: "rgba(28,39,48,0.12)" }}
            >
              <legend className={`${labelClass} px-1`}>
                What kind of group interests you? (choose any)
              </legend>
              <div className="flex flex-col gap-2.5">
                {INTEREST_OPTIONS.map((option) => (
                  <label
                    key={option}
                    className="site-body-copy flex cursor-pointer items-center gap-3 text-[0.95rem]"
                  >
                    <input
                      type="checkbox"
                      checked={form.interests.includes(option)}
                      onChange={() => toggleInterest(option)}
                      className="h-4 w-4 accent-[var(--teal)]"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset
              className="rounded-[1.25rem] border p-4"
              style={{ borderColor: "rgba(28,39,48,0.12)" }}
            >
              <legend className={`${labelClass} px-1`}>Preferred format</legend>
              <div className="flex flex-wrap gap-3">
                {FORMAT_OPTIONS.map((option) => (
                  <label
                    key={option}
                    className="site-body-copy flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm"
                    style={{
                      borderColor:
                        form.format === option ? "var(--teal)" : "rgba(28,39,48,0.14)",
                      background:
                        form.format === option
                          ? "rgba(214,236,236,0.55)"
                          : "rgba(255,255,255,0.56)",
                    }}
                  >
                    <input
                      type="radio"
                      name="format"
                      value={option}
                      checked={form.format === option}
                      onChange={handleChange}
                      className="accent-[var(--teal)]"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>

            <div>
              <label htmlFor="group-interest-notes" className={labelClass}>
                Anything you&rsquo;d hope a group would include? (optional)
              </label>
              <textarea
                id="group-interest-notes"
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows={3}
                className={`${inputClass} min-h-[90px] resize-y`}
                style={{ borderColor: "rgba(28,39,48,0.14)" }}
                placeholder="A sentence or two is plenty."
              />
            </div>

            <p className="site-body-copy text-sm" style={{ opacity: 0.75 }}>
              This just sends me your answers so I can gauge interest — no commitment. Please
              don&rsquo;t include urgent or sensitive details here.
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
              className="site-button-text mt-1 rounded-full px-8 py-4 text-[0.9rem] uppercase transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
              style={{
                background: "var(--teal-deep)",
                color: "white",
                boxShadow: "0 10px 32px rgba(62,125,128,0.26)",
              }}
            >
              {submitting ? "Sending..." : "Send my interest"}
            </button>
          </form>
        )}
      </section>
    </div>
  );
}

GroupInterestModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
