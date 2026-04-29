import { useEffect, useId, useState } from "react";
import PropTypes from "prop-types";

const INITIAL_FORM_DATA = {
  fullName: "",
  email: "",
  phone: "",
  preferredDate: "",
  preferredTime: "",
  preferredFormat: "",
  message: "",
};

const TIME_OPTIONS = [
  "Morning",
  "Midday",
  "Afternoon",
  "Early evening",
  "I'm flexible",
];

export default function ConsultationModal({ isOpen, onClose }) {
  const titleId = useId();
  const descriptionId = useId();
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isOpen) return undefined;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setError("");
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/appointments", {
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
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.message || "We couldn't send your request. Please try again.");
      }

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
                        formData.preferredFormat === option
                          ? "var(--teal)"
                          : "rgba(28,39,48,0.14)",
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
};
