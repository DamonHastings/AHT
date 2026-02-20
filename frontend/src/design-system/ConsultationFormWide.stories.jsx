import ConsultationFormWide from "./ConsultationFormWide";

export default {
  title: "Components/ConsultationFormWide",
  component: ConsultationFormWide,
  parameters: {
    layout: "fullscreen",
  },
};

const defaultConsent =
  "By submitting this form, you consent to receive communications from the practice. See our Privacy Policy for details.";

function logSubmit(payload) {
  console.log("[ConsultationFormWide] Form submitted:", payload);
  return Promise.resolve();
}

export const Default = {
  args: {
    contactTitle: "Contact Information",
    formTitle: "Send a Message",
    consentText: defaultConsent,
    privacyPolicyUrl: "/privacy",
    buttonText: "LET'S CONNECT",
    onSubmit: logSubmit,
    contactInfo: {
      phone: "(555) 123-4567",
      email: "hello@practice.com",
      location: "123 Main St, City, ST 12345",
    },
  },
};

export const MinimalContact = {
  args: {
    contactTitle: "Get in Touch",
    formTitle: "Book a Consultation",
    onSubmit: logSubmit,
    contactInfo: {
      phone: "(555) 987-6543",
      email: "info@therapy.example",
    },
  },
};
