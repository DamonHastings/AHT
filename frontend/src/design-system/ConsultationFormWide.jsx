import PropTypes from "prop-types";
import { CONTAINER } from "./layout";
import { useTherapistData } from "../hooks/useTherapistData";
import { usePracticeData } from "../hooks/usePracticeData";
import ConsultationForm from "./ConsultationForm";

/**
 * Wide 2-column layout: contact info on the left, scheduling & messaging form on the right.
 * Contact info is loaded from therapist + practice (Sanity), or pass contactInfo to override.
 */
export function ConsultationFormWide({
  contactTitle = "Contact Information",
  formTitle = "Send a Message",
  consentText,
  privacyPolicyUrl,
  buttonText = "LET'S CONNECT",
  onSubmit,
  contactInfo,
}) {
  const { therapist: therapistFromHook } = useTherapistData();
  const { practice } = usePracticeData();

  const therapist = contactInfo
    ? {
        phone: contactInfo.phone,
        email: contactInfo.email,
      }
    : therapistFromHook;

  const locationString = contactInfo?.location
    ? contactInfo.location
    : practice?.location &&
      [
        practice.location.address,
        practice.location.city,
        practice.location.state,
        practice.location.zipCode,
      ]
        .filter(Boolean)
        .join(", ");

  return (
    <section
      id="contact"
      className="relative py-16 font-body"
      style={{ backgroundColor: "var(--color-powder-blue-200)" }}
    >
      <div className={CONTAINER}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Contact info */}
          <div className="bg-white rounded-xl p-8 shadow-lg h-fit">
            <h2
              className="font-heading text-2xl font-semibold mb-6"
              style={{ color: "var(--color-text-dark)" }}
            >
              {contactTitle}
            </h2>
            <div className="space-y-6">
              {therapist?.phone && (
                <div>
                  <p
                    className="font-body text-sm font-semibold mb-2"
                    style={{ color: "var(--color-warm-taupe-400)" }}
                  >
                    Phone
                  </p>
                  <a
                    href={`tel:${therapist.phone}`}
                    className="font-body text-lg font-semibold hover:opacity-90 transition-opacity"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {therapist.phone}
                  </a>
                </div>
              )}
              {therapist?.email && (
                <div>
                  <p
                    className="font-body text-sm font-semibold mb-2"
                    style={{ color: "var(--color-warm-taupe-400)" }}
                  >
                    Email
                  </p>
                  <a
                    href={`mailto:${therapist.email}`}
                    className="font-body text-lg font-semibold hover:opacity-90 transition-opacity break-all"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {therapist.email}
                  </a>
                </div>
              )}
              {locationString && (
                <div>
                  <p
                    className="font-body text-sm font-semibold mb-2"
                    style={{ color: "var(--color-warm-taupe-400)" }}
                  >
                    Location
                  </p>
                  <p
                    className="font-body text-base leading-relaxed"
                    style={{ color: "var(--color-slate-blue-400)" }}
                  >
                    {locationString}
                  </p>
                </div>
              )}
              {!therapist?.phone && !therapist?.email && !locationString && (
                <p className="font-body text-sm" style={{ color: "var(--color-warm-taupe-500)" }}>
                  Contact details can be set in Sanity (Therapist & Practice).
                </p>
              )}
            </div>
          </div>

          {/* Right: Scheduling & messaging form */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <ConsultationForm
              title={formTitle}
              consentText={consentText}
              privacyPolicyUrl={privacyPolicyUrl}
              buttonText={buttonText}
              onSubmit={onSubmit}
              nested
            />
          </div>
        </div>
      </div>
    </section>
  );
}

ConsultationFormWide.propTypes = {
  contactTitle: PropTypes.string,
  formTitle: PropTypes.string,
  consentText: PropTypes.string,
  privacyPolicyUrl: PropTypes.string,
  buttonText: PropTypes.string,
  onSubmit: PropTypes.func,
  /** Optional override for contact (e.g. Storybook). { phone?, email?, location? } */
  contactInfo: PropTypes.shape({
    phone: PropTypes.string,
    email: PropTypes.string,
    location: PropTypes.string,
  }),
};

export default ConsultationFormWide;
