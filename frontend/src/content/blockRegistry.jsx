import { sanityImage } from "../utils/sanityImage";
import { responsiveImage } from "../utils/responsiveImage";
import { HeroSection } from "../design-system";
import {
  Hero,
  PullQuote,
  FocusAreas,
  WhoIHelp,
  TheSpace,
  TheApproach,
  Meet,
  FeelingsCheckIn,
  Faq,
  Fees,
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
    case "heroBlock": {
      const presentation = component.presentation ?? "expressive";
      if (presentation === "photo") {
        // Single, smaller headshot (organic mask) — prefers a CMS image, else the
        // built-in optimized headshot. The old collage/gallery is retired here.
        const headshot = component.photoBackgroundImage
          ? sanityImage(component.photoBackgroundImage, { widths: [480, 768, 1200] })
          : responsiveImage("meet");

        // In-page navigation links replace the hero CTA buttons.
        const heroLinks = [
          {
            label: component.primaryCtaText || "More about me",
            href: component.primaryCtaHref || "#meet",
          },
          {
            label: component.secondaryCtaText || "More about my approach",
            href: component.secondaryCtaHref || "#the-approach",
          },
        ];

        return (
          <EditableSection key={key} component={component} className="site-section-hero">
            <HeroSection
              variant="organic"
              compact
              blobImage={headshot?.src}
              blobImageSrcSet={headshot?.jpegSrcSet}
              blobImageWebpSrcSet={headshot?.webpSrcSet}
              blobImageSizes="(min-width: 1024px) 22rem, 60vw"
              overlay={null}
              priority
              kickerText={component.kickerText}
              heading={component.heading}
              headingEmphasis={component.headingEmphasis}
              subheading={component.body}
              ctaText="Schedule a free consultation"
              primaryCtaHref="#book"
              heroLinks={heroLinks}
              alignment="left"
            />
          </EditableSection>
        );
      }

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
    }

    case "pullQuoteBlock":
      return (
        <EditableSection key={key} component={component} className="site-section-pullquote">
          <PullQuote eyebrow={component.eyebrow} quote={component.quote} body={component.body} />
        </EditableSection>
      );

    case "focusAreasBlock":
      return (
        <EditableSection key={key} component={component} className="site-section-focus-areas">
          <FocusAreas
            eyebrow={component.eyebrow}
            leadIn={component.leadIn}
            areas={component.areas}
            audienceLine={component.audienceLine}
          />
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
            imageSrc={component.image ? sanityImage(component.image)?.src : undefined}
            imageSrcSet={component.image ? sanityImage(component.image)?.jpegSrcSet : undefined}
            imageWebpSrcSet={component.image ? sanityImage(component.image)?.webpSrcSet : undefined}
            imageSizes="(min-width: 1024px) 50vw, 100vw"
            photoTag={component.photoTag}
          />
        </EditableSection>
      );

    case "expressiveArtsBlock":
      return (
        <EditableSection key={key} component={component} className="site-section-expressive">
          <TheApproach
            eyebrow={component.eyebrow}
            heading={component.heading}
            paragraphs={component.paragraphs}
            modalities={component.modalities}
            images={[
              responsiveImage("exa1"),
              responsiveImage("exa2"),
              responsiveImage("exa3"),
            ]}
          />
        </EditableSection>
      );

    case "meetBlock": {
      // Background section image: a CMS image if set, else the local
      // "environment" photo (the headshot now lives in the hero).
      const meetImg = component.image
        ? sanityImage(component.image, { widths: [480, 768, 1200] })
        : responsiveImage("background");
      return (
        <EditableSection key={key} component={component} className="site-section-meet">
          <Meet
            eyebrow={component.eyebrow}
            heading={component.heading}
            headingEmphasis={component.headingEmphasis}
            paragraphs={component.paragraphs}
            credentials={component.credentials}
            badgeText={component.badgeText}
            imageSrc={meetImg?.src}
            imageSrcSet={meetImg?.jpegSrcSet}
            imageWebpSrcSet={meetImg?.webpSrcSet}
            imageSizes="(min-width: 1024px) 50vw, 100vw"
            imageAlt="Arielle Rae Hastings, LMFT"
          />
        </EditableSection>
      );
    }

    case "feelingsCheckInBlock":
      return (
        <EditableSection key={key} component={component} className="site-section-feelings">
          <FeelingsCheckIn
            eyebrow={component.eyebrow}
            heading={component.heading}
            subheading={component.subheading}
            colors={component.colors}
            words={component.words}
            swatches={component.swatches}
            resonatePrompt={component.resonatePrompt}
            allPrompt={component.allPrompt}
            noneLabel={component.noneLabel}
            closingBlurb={component.closingBlurb}
          />
        </EditableSection>
      );

    case "faqBlock": {
      const faqItems = component.items?.length
        ? component.items.map((it) => ({ id: it.anchorId, q: it.question, a: it.answer }))
        : undefined;
      return (
        <EditableSection key={key} component={component} className="site-section-faq">
          <Faq eyebrow={component.eyebrow} heading={component.heading} items={faqItems} />
        </EditableSection>
      );
    }

    case "feesBlock":
      return (
        <EditableSection key={key} component={component} className="site-section-fees">
          <Fees
            eyebrow={component.eyebrow}
            heading={component.heading}
            headingEmphasis={component.headingEmphasis}
            intro={component.intro}
            cards={component.cards}
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
