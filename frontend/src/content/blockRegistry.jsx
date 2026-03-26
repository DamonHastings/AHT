import { urlFor } from "../utils/sanityClient";
import {
  Hero,
  PullQuote,
  WhoIHelp,
  TheSpace,
  ExpressiveArts,
  Meet,
  FeelingsCheckIn,
  CTA,
  ProseSection,
} from "../design-system/site";
import EditableSection from "./EditableSection";

const SPACER_HEIGHT = {
  sm: "h-8",
  md: "h-16",
  lg: "h-24",
  xl: "h-32",
};

/**
 * Renders a single Sanity page component by `_type`.
 * @param {object} component - Sanity block object
 * @param {number} index - index in page.components
 */
export function renderBlockComponent(component, index) {
  if (!component || !component._type) {
    console.warn("Invalid component:", component);
    return null;
  }

  const key = `${component._type}-${index}`;

  switch (component._type) {
    case "heroBlock":
      return (
        <EditableSection key={key} component={component} className="site-section-hero">
          <Hero
            kickerText={component.kickerText}
            heading={component.heading}
            headingEmphasis={component.headingEmphasis}
            body={component.body}
            primaryCtaText={component.primaryCtaText}
            primaryCtaHref={component.primaryCtaHref}
            secondaryCtaText={component.secondaryCtaText}
            secondaryCtaHref={component.secondaryCtaHref}
          />
        </EditableSection>
      );

    case "pullQuoteBlock":
      return (
        <EditableSection key={key} component={component} className="site-section-pullquote">
          <PullQuote eyebrow={component.eyebrow} quote={component.quote} body={component.body} />
        </EditableSection>
      );

    case "whoIHelpBlock":
      return (
        <EditableSection key={key} component={component} className="site-section-who-i-help">
          <WhoIHelp
            eyebrow={component.eyebrow}
            heading={component.heading}
            headingEmphasis={component.headingEmphasis}
            cards={component.cards}
          />
        </EditableSection>
      );

    case "theSpaceBlock":
      return (
        <EditableSection key={key} component={component} className="site-section-space">
          <TheSpace
            eyebrow={component.eyebrow}
            heading={component.heading}
            headingEmphasis={component.headingEmphasis}
            paragraphs={component.paragraphs}
            imageSrc={component.image ? urlFor(component.image).width(800).url() : undefined}
            photoTag={component.photoTag}
          />
        </EditableSection>
      );

    case "expressiveArtsBlock":
      return (
        <EditableSection key={key} component={component} className="site-section-expressive">
          <ExpressiveArts
            eyebrow={component.eyebrow}
            heading={component.heading}
            paragraphs={component.paragraphs}
            modalities={component.modalities}
            quotes={component.quotes}
          />
        </EditableSection>
      );

    case "meetBlock":
      return (
        <EditableSection key={key} component={component} className="site-section-meet">
          <Meet
            eyebrow={component.eyebrow}
            heading={component.heading}
            headingEmphasis={component.headingEmphasis}
            paragraphs={component.paragraphs}
            credentials={component.credentials}
            badgeText={component.badgeText}
            imageSrc={component.image ? urlFor(component.image).width(600).url() : undefined}
          />
        </EditableSection>
      );

    case "feelingsCheckInBlock":
      return (
        <EditableSection key={key} component={component} className="site-section-feelings">
          <FeelingsCheckIn
            eyebrow={component.eyebrow}
            heading={component.heading}
            subheading={component.subheading}
            swatches={component.swatches}
          />
        </EditableSection>
      );

    case "ctaBlock":
      return (
        <EditableSection key={key} component={component} className="site-section-cta">
          <CTA
            heading={component.heading}
            headingEmphasis={component.headingEmphasis}
            subheading={component.subheading}
            buttonText={component.buttonText}
            buttonHref={component.buttonHref}
          />
        </EditableSection>
      );

    case "proseSectionBlock":
      return (
        <EditableSection key={key} component={component} className="site-section-prose">
          <ProseSection
            title={component.title}
            content={component.content}
            alignment={component.alignment}
          />
        </EditableSection>
      );

    case "spacerBlock":
      return (
        <EditableSection key={key} component={component}>
          <div
            className={SPACER_HEIGHT[component.size] || "h-16"}
            aria-hidden="true"
          />
        </EditableSection>
      );

    default:
      console.warn("Unknown component type:", component._type);
      return null;
  }
}
