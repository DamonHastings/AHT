import { urlFor } from "../utils/sanityClient";
import { PortableText } from "@portabletext/react";
import { CONTAINER } from "../design-system/layout";
import {
  HeroSection,
  IdentityQuote,
  PhilosophySection,
  HeadshotProfile,
  Button,
  PreviewScroll,
  ProfileSection,
  ConsultationForm,
  ConsultationFormWide,
} from "../design-system";
import {
  HeroV3,
  PullQuoteV3,
  WhoIHelpV3,
  TheSpaceV3,
  ExpressiveV3,
  MeetV3,
  FeelingsCheckInV3,
  CTAV3,
} from "../design-system/v3";

/**
 * Lightweight wrapper to give each Sanity component a consistent outer section
 * while keeping the original component object (and its visual-editing metadata)
 * attached at the DOM boundary.
 */
function EditableSection({ component, children, className }) {
  // We intentionally keep this wrapper minimal so it doesn't affect layout,
  // but still provides a generous click target for Presentation mode.
  return (
    <section
      data-component-type={component?._type}
      className={className}
    >
      {children}
    </section>
  );
}

/**
 * Component mapper for rendering Sanity page components
 * Maps Sanity component data to React components
 */
export const renderPageComponent = (component, index) => {
  if (!component || !component._type) {
    console.warn("Invalid component:", component);
    return null;
  }

  const key = `${component._type}-${index}`;

  switch (component._type) {
    case "heroComponent":
      return (
        <EditableSection key={key} component={component}>
          <HeroSection
            backgroundImage={
              component.backgroundImage
                ? urlFor(component.backgroundImage).width(1920).url()
                : undefined
            }
            overlay={component.overlay === "none" ? null : component.overlay}
            overlayOpacity={component.overlayOpacity}
            heading={component.heading}
            subheading={component.subheading}
            ctaText={component.ctaButton?.text}
            onCtaClick={() => {
              if (component.ctaButton?.link) {
                if (component.ctaButton.link.startsWith("#")) {
                  document
                    .querySelector(component.ctaButton.link)
                    ?.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.location.href = component.ctaButton.link;
                }
              }
            }}
            ctaVariant={component.ctaButton?.variant}
            alignment={component.alignment}
            height={component.height}
            variant={component.variant}
          />
        </EditableSection>
      );

    case "identityQuoteComponent":
      return (
        <EditableSection key={key} component={component} className={`${CONTAINER} py-8`}>
          <IdentityQuote quote={component.quote} author={component.author} />
        </EditableSection>
      );

    case "philosophySectionComponent":
      return (
        <EditableSection key={key} component={component} className={`${CONTAINER} py-8`}>
          <PhilosophySection
            title={component.title}
            content={<PortableText value={component.content} />}
            image={component.image ? urlFor(component.image).width(800).url() : undefined}
          />
        </EditableSection>
      );

    case "focusAreasComponent":
      return (
        <EditableSection key={key} component={component}>
          <PreviewScroll title={component.sectionTitle} items={component.areas || []} />
        </EditableSection>
      );

    case "headshotProfileComponent":
      return (
        <EditableSection
          key={key}
          component={component}
          className={`${CONTAINER} py-8 flex justify-center`}
        >
          <HeadshotProfile
            image={component.image ? urlFor(component.image).width(600).url() : undefined}
            name={component.name}
            shape={component.shape}
            size={component.size}
          />
        </EditableSection>
      );

    case "personalStatementComponent":
      return (
        <EditableSection key={key} component={component} className={`${CONTAINER} py-12`}>
          <ProfileSection
            image={component.image ? urlFor(component.image).width(600).url() : undefined}
            imageAlt={component.imageAlt}
            content={component.statement}
            buttonText={
              component.showFullBioLink ? component.linkText || "Read Full Biography" : undefined
            }
            buttonLink={component.fullBioLink || "#"}
            imageOnLeft={component.imageOnLeft ?? true}
          />
        </EditableSection>
      );

    case "textContentComponent":
      const alignmentClasses = {
        left: "text-left",
        center: "text-center mx-auto",
        right: "text-right ml-auto",
      };

      return (
        <EditableSection
          key={key}
          component={component}
          className={`${CONTAINER} max-w-4xl py-8`}
        >
          {component.title && (
            <h2
              className={`text-3xl font-bold mb-6 ${
                alignmentClasses[component.alignment] || "text-left"
              }`}
            >
              {component.title}
            </h2>
          )}
          <div
            className={`prose prose-lg max-w-none ${
              alignmentClasses[component.alignment] || "text-left"
            }`}
          >
            {component.content && <PortableText value={component.content} />}
          </div>
        </EditableSection>
      );

    case "ctaButtonComponent":
      const buttonAlignmentClasses = {
        left: "justify-start",
        center: "justify-center",
        right: "justify-end",
      };

      return (
        <EditableSection
          key={key}
          component={component}
          className={`${CONTAINER} max-w-4xl py-8 flex ${
            buttonAlignmentClasses[component.alignment] || "justify-center"
          }`}
        >
          <Button
            variant={component.variant}
            size={component.size}
            onClick={() => {
              if (component.link) {
                if (component.link.startsWith("#")) {
                  document.querySelector(component.link)?.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.location.href = component.link;
                }
              }
            }}
          >
            {component.text}
          </Button>
        </EditableSection>
      );

    case "imageGalleryComponent":
      const gridClasses = {
        "grid-2": "md:grid-cols-2",
        "grid-3": "md:grid-cols-3",
        "grid-4": "md:grid-cols-4",
        masonry: "md:columns-3",
      };

      return (
        <EditableSection key={key} component={component} className={`${CONTAINER} py-12`}>
          {component.title && (
            <h2 className="text-3xl font-bold mb-8 text-center">{component.title}</h2>
          )}
          <div className={`grid gap-4 ${gridClasses[component.layout] || "md:grid-cols-3"}`}>
            {component.images?.map((img, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-lg">
                <img
                  src={urlFor(img).width(600).url()}
                  alt={img.alt || ""}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {img.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 text-sm">
                    {img.caption}
                  </div>
                )}
              </div>
            ))}
          </div>
        </EditableSection>
      );

    case "spacerComponent":
      const spacingClasses = {
        sm: "h-8",
        md: "h-16",
        lg: "h-24",
        xl: "h-32",
      };

      return (
        <EditableSection key={key} component={component}>
          <div className={spacingClasses[component.size] || "h-16"} aria-hidden="true" />
        </EditableSection>
      );

    case "previewScrollComponent":
      return (
        <EditableSection key={key} component={component}>
          <PreviewScroll title={component.title} items={component.items || []} />
        </EditableSection>
      );

    case "profileSectionComponent":
      return (
        <EditableSection key={key} component={component} className={`${CONTAINER} py-12`}>
          <ProfileSection
            image={component.image ? urlFor(component.image).width(600).url() : undefined}
            imageAlt={component.imageAlt}
            subtitle={component.subtitle}
            heading={component.heading}
            subheading={component.subheading}
            tags={component.tags}
            content={component.content ? <PortableText value={component.content} /> : undefined}
            buttonText={component.buttonText}
            buttonLink={component.buttonLink}
            credentials={component.credentials}
            imageOnLeft={component.imageOnLeft}
          />
        </EditableSection>
      );

    case "consultationFormComponent":
      return (
        <EditableSection key={key} component={component}>
          <ConsultationForm
            title={component.title}
            consentText={component.consentText}
            privacyPolicyUrl={component.privacyPolicyUrl}
            buttonText={component.buttonText}
          />
        </EditableSection>
      );

    case "consultationFormWideComponent":
      return (
        <EditableSection key={key} component={component}>
          <ConsultationFormWide
            contactTitle={component.contactTitle}
            formTitle={component.title}
            consentText={component.consentText}
            privacyPolicyUrl={component.privacyPolicyUrl}
            buttonText={component.buttonText}
          />
        </EditableSection>
      );

    // V3 Design System Components
    case "heroV3Component":
      return (
        <EditableSection key={key} component={component} className="v3-section-hero">
          <HeroV3
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

    case "pullQuoteV3Component":
      return (
        <EditableSection key={key} component={component} className="v3-section-pullquote">
          <PullQuoteV3
            eyebrow={component.eyebrow}
            quote={component.quote}
            body={component.body}
          />
        </EditableSection>
      );

    case "whoIHelpV3Component":
      return (
        <EditableSection key={key} component={component} className="v3-section-who-i-help">
          <WhoIHelpV3
            eyebrow={component.eyebrow}
            heading={component.heading}
            headingEmphasis={component.headingEmphasis}
            cards={component.cards}
          />
        </EditableSection>
      );

    case "theSpaceV3Component":
      return (
        <EditableSection key={key} component={component} className="v3-section-space">
          <TheSpaceV3
            eyebrow={component.eyebrow}
            heading={component.heading}
            headingEmphasis={component.headingEmphasis}
            paragraphs={component.paragraphs}
            imageSrc={component.image ? urlFor(component.image).width(800).url() : undefined}
            photoTag={component.photoTag}
          />
        </EditableSection>
      );

    case "expressiveV3Component":
      return (
        <EditableSection key={key} component={component} className="v3-section-expressive">
          <ExpressiveV3
            eyebrow={component.eyebrow}
            heading={component.heading}
            paragraphs={component.paragraphs}
            modalities={component.modalities}
            quotes={component.quotes}
          />
        </EditableSection>
      );

    case "meetV3Component":
      return (
        <EditableSection key={key} component={component} className="v3-section-meet">
          <MeetV3
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

    case "feelingsCheckInV3Component":
      return (
        <EditableSection key={key} component={component} className="v3-section-feelings">
          <FeelingsCheckInV3
            eyebrow={component.eyebrow}
            heading={component.heading}
            subheading={component.subheading}
            swatches={component.swatches}
          />
        </EditableSection>
      );

    case "ctaV3Component":
      return (
        <EditableSection key={key} component={component} className="v3-section-cta">
          <CTAV3
            heading={component.heading}
            headingEmphasis={component.headingEmphasis}
            subheading={component.subheading}
            buttonText={component.buttonText}
            buttonHref={component.buttonHref}
          />
        </EditableSection>
      );

    default:
      console.warn("Unknown component type:", component._type);
      return null;
  }
};

/**
 * Main page renderer component
 * Renders a complete page from Sanity data
 */
export default function PageRenderer({ pageData, showHeader = true, showFooter = true }) {
  if (!pageData) {
    return <div>Page not found</div>;
  }

  return (
    <div className="min-h-screen bg-therapy-sand-50">
      {/* Render components */}
      {pageData.components?.map((component, index) => renderPageComponent(component, index))}
    </div>
  );
}
