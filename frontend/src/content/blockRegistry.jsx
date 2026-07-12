import { sanityImage } from "../utils/sanityImage";
import { responsiveImage } from "../utils/responsiveImage";
import { HeroSection } from "../design-system";
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

function heroPrimaryCtaHandler(href) {
  return () => {
    const target = typeof href === "string" ? href.trim() : "";
    if (!target || target === "#") {
      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    if (target.startsWith("#")) {
      document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    window.location.assign(target);
  };
}

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
        const photoVariant = component.photoVariant ?? "overlay";
        const overlayRaw = component.photoOverlay ?? "dark";
        const overlay =
          overlayRaw === "none" || overlayRaw === null ? null : overlayRaw;
        const heroImg = component.photoBackgroundImage
          ? sanityImage(component.photoBackgroundImage, {
              widths: [768, 1200, 1800, 2400],
            })
          : null;
        const backgroundImage = heroImg?.src ?? "/photos/IMG_2506.jpeg";
        const blobSide =
          photoVariant === "organic" ? component.photoBlobSide ?? null : null;

        // Collage tiles for the hero gallery. Prefer CMS-managed photos from the
        // block's `gallery` field; fall back to the built-in optimized local
        // photos (office, room, headshot) when the editor hasn't set any.
        const galleryImages = (Array.isArray(component.gallery) ? component.gallery : [])
          .filter((image) => image?.asset)
          .map((image) => sanityImage(image, { widths: [480, 768, 1200, 1800] }))
          .filter(Boolean)
          .slice(0, 4);
        const collageImages = galleryImages.length
          ? galleryImages
          : [
              responsiveImage("hero"),
              responsiveImage("room"),
              responsiveImage("meet"),
            ];

        return (
          <EditableSection key={key} component={component} className="site-section-hero">
            <HeroSection
              backgroundImage={backgroundImage}
              blobImageSrcSet={heroImg?.jpegSrcSet}
              blobImageWebpSrcSet={heroImg?.webpSrcSet}
              blobImageSizes="(min-width: 1024px) 52vw, 100vw"
              collageImages={collageImages}
              priority
              variant="collage"
              blobSide={blobSide}
              overlay={overlay}
              overlayOpacity={component.photoOverlayOpacity ?? 0.4}
              kickerText={component.kickerText}
              heading={component.heading}
              headingEmphasis={component.headingEmphasis}
              subheading={component.body}
              ctaText={component.primaryCtaText}
              primaryCtaHref={component.primaryCtaHref}
              onCtaClick={heroPrimaryCtaHandler(component.primaryCtaHref)}
              secondaryCtaText={component.secondaryCtaText}
              secondaryCtaHref={component.secondaryCtaHref}
              ctaVariant="accent"
              alignment={component.photoTextAlignment ?? "left"}
              height={component.photoHeight ?? "screen"}
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
          <ExpressiveArts
            eyebrow={component.eyebrow}
            heading={component.heading}
            paragraphs={component.paragraphs}
            modalities={component.modalities}
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
            imageSrc={
              component.image
                ? sanityImage(component.image, { widths: [480, 768, 1200] })?.src
                : "/photos/IMG_2481.jpeg"
            }
            imageSrcSet={
              component.image
                ? sanityImage(component.image, { widths: [480, 768, 1200] })?.jpegSrcSet
                : undefined
            }
            imageWebpSrcSet={
              component.image
                ? sanityImage(component.image, { widths: [480, 768, 1200] })?.webpSrcSet
                : undefined
            }
            imageSizes="(min-width: 1024px) 50vw, 100vw"
            imageAlt="Arielle Hastings, LMFT"
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
