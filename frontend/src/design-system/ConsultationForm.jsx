import { useState } from "react";
import PropTypes from "prop-types";
import { CONTAINER } from "./layout";

/**
 * Consultation / "Send a Message" form for scheduling.
 * V1: Submits to API and compiles to email; future: Clarity app integration.
 */
export function ConsultationForm({
  title = "Send a Message",
  consentText = "By submitting this form, you consent to receive communications from the practice. If you provide an email address, you may receive an automated confirmation. See our Privacy Policy for details on how we protect your information.",
  privacyPolicyUrl,
  buttonText = "LET'S CONNECT",
  onSubmit,
  nested = false,
}) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    availabilityDate: "",
    availabilityTime: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const payload = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        preferredDate: formData.availabilityDate || undefined,
        preferredTime: formData.availabilityTime || undefined,
      };

      if (onSubmit) {
        await onSubmit(payload);
      } else {
        const response = await fetch("/api/appointments", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          const data = await response.json().catch(() => ({}));
          throw new Error(data.message || "Failed to submit");
        }
      }

      setSubmitted(true);
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        availabilityDate: "",
        availabilityTime: "",
        message: "",
      });
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const injectPrivacyLink = (text, url) => {
    if (!url || !text.includes("Privacy Policy")) {
      return text;
    }
    const parts = text.split(/(Privacy Policy)/i);
    if (parts.length < 2) return text;
    return parts.map((part, i) =>
      /Privacy Policy/i.test(part) ? (
        <a
          key={i}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:opacity-90 transition-opacity font-body"
          style={{ color: "var(--color-primary)" }}
        >
          {part}
        </a>
      ) : (
        part
      )
    );
  };

  const labelClass = "block font-body text-sm font-semibold mb-2 uppercase tracking-wide";
  const labelStyle = { color: "var(--color-text-dark)" };
  const inputClass =
    "w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 bg-white font-body";
  const inputStyle = {
    borderColor: "var(--color-gray-200)",
    color: "var(--color-text-dark)",
  };

  const successContent = (
    <div
      className="rounded-lg p-6 text-center border-2"
      style={{
        backgroundColor: "var(--color-sage-green-100)",
        borderColor: "var(--color-sage-green-300)",
      }}
    >
      <p className="font-body text-base" style={{ color: "var(--color-sage-green-500)" }}>
        Thank you! Your message has been sent. We&apos;ll get back to you soon.
      </p>
    </div>
  );

  if (submitted) {
    if (nested) return <div className="font-body">{successContent}</div>;
    return (
      <section
        className="relative py-16 font-body"
        style={{ backgroundColor: "var(--color-powder-blue-200)" }}
      >
        <div className={CONTAINER}>
          <div className="max-w-xl mx-auto bg-white rounded-xl p-8 md:p-10 shadow-lg">
            {successContent}
          </div>
        </div>
      </section>
    );
  }

  const formContent = (
    <>
      <h2
        className="font-heading text-3xl md:text-4xl font-semibold mb-8"
        style={{ color: "var(--color-text-dark)" }}
      >
        {title}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="consultation-fullName" className={labelClass} style={labelStyle}>
            Full Name *
          </label>
          <input
            id="consultation-fullName"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="Jane Doe"
            className={inputClass}
            style={inputStyle}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="consultation-phone" className={labelClass} style={labelStyle}>
              Phone *
            </label>
            <input
              id="consultation-phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="(555) 123-4567"
              className={inputClass}
              style={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="consultation-email" className={labelClass} style={labelStyle}>
              Email Address *
            </label>
            <input
              id="consultation-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="jane@example.com"
              className={inputClass}
              style={inputStyle}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="consultation-availabilityDate"
              className={labelClass}
              style={labelStyle}
            >
              When are you available? (Date)
            </label>
            <input
              id="consultation-availabilityDate"
              type="date"
              name="availabilityDate"
              value={formData.availabilityDate}
              onChange={handleChange}
              min={new Date().toISOString().split("T")[0]}
              className={inputClass}
              style={inputStyle}
            />
          </div>
          <div>
            <label
              htmlFor="consultation-availabilityTime"
              className={labelClass}
              style={labelStyle}
            >
              Preferred time
            </label>
            <select
              id="consultation-availabilityTime"
              name="availabilityTime"
              value={formData.availabilityTime}
              onChange={handleChange}
              className={inputClass}
              style={inputStyle}
            >
              <option value="">Select a time</option>
              {[
                "8:00 AM",
                "8:30 AM",
                "9:00 AM",
                "9:30 AM",
                "10:00 AM",
                "10:30 AM",
                "11:00 AM",
                "11:30 AM",
                "12:00 PM",
                "12:30 PM",
                "1:00 PM",
                "1:30 PM",
                "2:00 PM",
                "2:30 PM",
                "3:00 PM",
                "3:30 PM",
                "4:00 PM",
                "4:30 PM",
                "5:00 PM",
                "5:30 PM",
                "6:00 PM",
              ].map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="consultation-message" className={labelClass} style={labelStyle}>
            How Can We Help? *
          </label>
          <textarea
            id="consultation-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            placeholder="Briefly describe what you're looking for..."
            className={`${inputClass} resize-y min-h-[100px]`}
            style={inputStyle}
          />
        </div>

        {consentText && (
          <p
            className="text-sm leading-relaxed font-body"
            style={{ color: "var(--color-warm-taupe-500)" }}
          >
            {injectPrivacyLink(consentText, privacyPolicyUrl)}
          </p>
        )}

        {error && (
          <div
            className="border-2 rounded-lg p-3 font-body"
            style={{
              backgroundColor: "#FADBD8",
              borderColor: "var(--color-error)",
            }}
          >
            <p className="text-sm" style={{ color: "var(--color-error)" }}>
              {error}
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-lg font-body font-semibold uppercase tracking-wide transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2"
          style={{
            backgroundColor: "var(--color-accent)",
            color: "var(--color-text-dark)",
          }}
        >
          <span
            className="w-2.5 h-2.5 rounded-full shrink-0"
            style={{ backgroundColor: "var(--color-sage-green-400)" }}
            aria-hidden
          />
          <span>{submitting ? "Sending..." : buttonText}</span>
          <svg
            className="w-5 h-5 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{ color: "var(--color-text-dark)" }}
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </form>
    </>
  );

  if (nested) {
    return <div className="font-body h-full">{formContent}</div>;
  }

  return (
    <section
      className="relative py-16 font-body"
      style={{ backgroundColor: "var(--color-powder-blue-200)" }}
    >
      <div className={CONTAINER}>
        <div className="max-w-xl mx-auto bg-white rounded-xl p-8 md:p-10 shadow-lg">
          {formContent}
        </div>
      </div>
    </section>
  );
}

ConsultationForm.propTypes = {
  title: PropTypes.string,
  consentText: PropTypes.string,
  privacyPolicyUrl: PropTypes.string,
  buttonText: PropTypes.string,
  /** When set (e.g. in Storybook), called with payload instead of POSTing to API. Return a Promise. */
  onSubmit: PropTypes.func,
  /** When true, render only form content (no section wrapper); for use inside ConsultationFormWide. */
  nested: PropTypes.bool,
};

export default ConsultationForm;
