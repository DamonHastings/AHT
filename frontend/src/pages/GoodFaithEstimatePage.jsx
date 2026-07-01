import LegalLayout from "./legal/LegalLayout";
import ReviewNote from "./legal/ReviewNote";
import { useSiteSettings } from "../hooks/useSiteSettings";

export default function GoodFaithEstimatePage() {
  const { siteSettings } = useSiteSettings();
  const email = siteSettings?.contactEmail;
  const phone = siteSettings?.contactPhone;

  return (
    <LegalLayout
      title="Good Faith Estimate"
      metaDescription="Under the No Surprises Act, you have the right to a Good Faith Estimate of the cost of your care. Here's what that means and how to request one."
      path="/good-faith-estimate"
    >
      <ReviewNote />

      <p className="site-body-copy mb-6">
        <strong>Your Right to a Good Faith Estimate.</strong> Under the federal No Surprises Act,
        you have the right to receive a &ldquo;Good Faith Estimate&rdquo; explaining how much your
        care will cost.
      </p>

      <ul className="site-body-copy list-disc pl-6 mb-6 space-y-2">
        <li>
          Health care providers are required to give clients who don&rsquo;t have insurance, or who
          aren&rsquo;t using insurance, an estimate of the expected charges for services.
        </li>
        <li>
          You have the right to receive a Good Faith Estimate for the total expected cost of any
          non-emergency services. This includes related costs like the frequency and length of
          sessions.
        </li>
        <li>
          You can ask for a Good Faith Estimate before you schedule a service. If you schedule a
          service at least three business days in advance, you&rsquo;ll receive one in writing.
        </li>
        <li>
          If you receive a bill that is at least $400 more than your Good Faith Estimate, you can
          dispute the bill.
        </li>
        <li>Make sure to save a copy or picture of your Good Faith Estimate.</li>
      </ul>

      <h2 className="site-heading text-xl mt-10 mb-3">How to request one</h2>
      <p className="site-body-copy mb-3">
        To request a Good Faith Estimate before scheduling, or if you have questions about the cost
        of services, reach out{" "}
        {email ? (
          <>
            at <a href={`mailto:${email}`}>{email}</a>
          </>
        ) : (
          "through the contact form on this site"
        )}
        {phone ? (
          <>
            {" "}
            or by phone at{" "}
            <a href={`tel:${phone.replace(/[^0-9+]/g, "")}`}>{phone}</a>
          </>
        ) : null}
        . A written estimate will be provided.
      </p>

      <h2 className="site-heading text-xl mt-10 mb-3">Learn more</h2>
      <p className="site-body-copy">
        For questions or more information about your right to a Good Faith Estimate, visit{" "}
        <a href="https://www.cms.gov/nosurprises" target="_blank" rel="noopener noreferrer">
          www.cms.gov/nosurprises
        </a>{" "}
        or call 1-800-985-3059.
      </p>
    </LegalLayout>
  );
}
