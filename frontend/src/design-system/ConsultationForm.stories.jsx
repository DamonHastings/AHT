import ConsultationForm from "./ConsultationForm";

export default {
  title: "Components/ConsultationForm",
  component: ConsultationForm,
  parameters: {
    layout: "fullscreen",
  },
};

const defaultConsent =
  "By submitting this form, you consent to receive communications from Mary Diorio, LCSW. If you provide an email address, you'll receive an automated confirmation. See our Privacy Policy for details on how we protect your information.";

/** Logs form payload to console instead of posting to API. Check the browser console on submit. */
function logSubmit(payload) {
  console.log("[ConsultationForm] Form submitted:", payload);
  return Promise.resolve();
}

export const Default = {
  args: {
    title: "Send a Message",
    consentText: defaultConsent,
    privacyPolicyUrl: "/privacy",
    buttonText: "LET'S CONNECT",
    onSubmit: logSubmit,
  },
};

export const Minimal = {
  args: {
    title: "Send a Message",
    consentText: "",
    privacyPolicyUrl: undefined,
    buttonText: "Submit",
    onSubmit: logSubmit,
  },
};
