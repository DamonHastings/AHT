import LegalLayout from "./legal/LegalLayout";
import ReviewNote from "./legal/ReviewNote";
import { useSiteSettings } from "../hooks/useSiteSettings";

export default function PrivacyPolicyPage() {
  const { siteSettings } = useSiteSettings();
  const practice =
    siteSettings?.businessName || siteSettings?.title || "Arielle Hastings, LMFT";
  const email = siteSettings?.contactEmail;

  return (
    <LegalLayout
      title="Privacy Policy"
      metaDescription="How this website collects, uses, and protects the information you share when you request a consultation."
      path="/privacy"
      lastUpdated="[Month Year]"
    >
      <ReviewNote />

      <p className="site-body-copy mb-6">
        This Privacy Policy describes how {practice} (&ldquo;we,&rdquo; &ldquo;I,&rdquo; or
        &ldquo;the practice&rdquo;) handles information collected through this website. It applies
        to this website only. Information shared during therapy itself is protected separately by
        applicable confidentiality laws (including HIPAA) and professional ethics, and is described
        in the practice&rsquo;s clinical informed-consent and Notice of Privacy Practices.
      </p>

      <h2 className="site-heading text-xl mt-10 mb-3">Information we collect</h2>
      <p className="site-body-copy mb-3">
        When you submit the consultation request form, we collect the information you choose to
        provide, which may include your name, email address, phone number, preferred date and time,
        preferred meeting format, and a short message describing what you&rsquo;d like support with.
      </p>
      <p className="site-body-copy mb-3">
        The consultation form is for scheduling an initial conversation. Please do not include
        sensitive clinical details, emergencies, or crisis information in it.
      </p>

      <h2 className="site-heading text-xl mt-10 mb-3">How we use your information</h2>
      <ul className="site-body-copy list-disc pl-6 mb-3 space-y-1">
        <li>To respond to your inquiry and schedule a consultation;</li>
        <li>To communicate with you about your request; and</li>
        <li>To keep basic records of inquiries received.</li>
      </ul>

      <h2 className="site-heading text-xl mt-10 mb-3">How we share information</h2>
      <p className="site-body-copy mb-3">
        We do not sell your information. We may share it with service providers who help operate
        this website and deliver messages (for example, website hosting and email delivery), and
        when required by law or to protect safety. These providers are permitted to use your
        information only as needed to provide their services.
      </p>

      <h2 className="site-heading text-xl mt-10 mb-3">Data storage and security</h2>
      <p className="site-body-copy mb-3">
        Inquiry submissions are stored securely, and we use reasonable safeguards to protect them.
        No method of transmission or storage is completely secure, so we cannot guarantee absolute
        security.
      </p>

      <h2 className="site-heading text-xl mt-10 mb-3">Your choices</h2>
      <p className="site-body-copy mb-3">
        You may request to access or delete the information you submitted through this website by
        contacting us{email ? <> at <a href={`mailto:${email}`}>{email}</a></> : null}.
      </p>

      <h2 className="site-heading text-xl mt-10 mb-3">Children&rsquo;s privacy</h2>
      <p className="site-body-copy mb-3">
        This website is intended for use by adults. We do not knowingly collect information through
        this website directly from children; a parent or guardian should submit consultation
        requests on a minor&rsquo;s behalf.
      </p>

      <h2 className="site-heading text-xl mt-10 mb-3">Changes to this policy</h2>
      <p className="site-body-copy mb-3">
        We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date
        above reflects the most recent revision.
      </p>

      <h2 className="site-heading text-xl mt-10 mb-3">Contact</h2>
      <p className="site-body-copy">
        Questions about this policy? Reach out{" "}
        {email ? (
          <>
            at <a href={`mailto:${email}`}>{email}</a>.
          </>
        ) : (
          "through the contact form on this site."
        )}
      </p>
    </LegalLayout>
  );
}
