import { urlFor } from '../utils/sanityClient';
import { PortableText } from '@portabletext/react';
import {
  HeroSection,
  IdentityQuote,
  PhilosophySection,
  FocusAreaCard,
  HeadshotProfile,
  PersonalStatement,
  Button,
} from '../design-system';

/**
 * Component mapper for rendering Sanity page components
 * Maps Sanity component data to React components
 */
export const renderPageComponent = (component, index) => {
  if (!component || !component._type) {
    console.warn('Invalid component:', component);
    return null;
  }

  const key = `${component._type}-${index}`;

  switch (component._type) {
    case 'heroComponent':
      return (
        <HeroSection
          key={key}
          backgroundImage={
            component.backgroundImage
              ? urlFor(component.backgroundImage).width(1920).url()
              : undefined
          }
          overlay={component.overlay === 'none' ? null : component.overlay}
          overlayOpacity={component.overlayOpacity}
          heading={component.heading}
          subheading={component.subheading}
          ctaText={component.ctaButton?.text}
          onCtaClick={() => {
            if (component.ctaButton?.link) {
              if (component.ctaButton.link.startsWith('#')) {
                document.querySelector(component.ctaButton.link)?.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = component.ctaButton.link;
              }
            }
          }}
          ctaVariant={component.ctaButton?.variant}
          alignment={component.alignment}
          height={component.height}
        />
      );

    case 'identityQuoteComponent':
      return (
        <section key={key} className="max-w-7xl mx-auto px-6 py-8">
          <IdentityQuote
            quote={component.quote}
            author={component.author}
          />
        </section>
      );

    case 'philosophySectionComponent':
      return (
        <section key={key} className="max-w-7xl mx-auto px-6 py-8">
          <PhilosophySection
            title={component.title}
            content={<PortableText value={component.content} />}
            image={
              component.image
                ? urlFor(component.image).width(800).url()
                : undefined
            }
          />
        </section>
      );

    case 'focusAreasComponent':
      return (
        <section key={key} className="max-w-7xl mx-auto px-6 py-12">
          {component.sectionTitle && (
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              {component.sectionTitle}
            </h2>
          )}
          <div
            className={`grid gap-6 ${
              component.layout === '2col'
                ? 'md:grid-cols-2'
                : 'md:grid-cols-3'
            }`}
          >
            {component.areas?.map((area, idx) => (
              <FocusAreaCard
                key={idx}
                title={area.title}
                description={area.description}
                icon={area.icon}
              />
            ))}
          </div>
        </section>
      );

    case 'headshotProfileComponent':
      return (
        <section key={key} className="max-w-7xl mx-auto px-6 py-8 flex justify-center">
          <HeadshotProfile
            image={
              component.image
                ? urlFor(component.image).width(600).url()
                : undefined
            }
            name={component.name}
            shape={component.shape}
            size={component.size}
          />
        </section>
      );

    case 'personalStatementComponent':
      return (
        <section key={key} className="max-w-4xl mx-auto px-6 py-8">
          <PersonalStatement
            statement={component.statement}
            showFullBioLink={component.showFullBioLink}
            onFullBioClick={() => {
              if (component.fullBioLink) {
                if (component.fullBioLink.startsWith('#')) {
                  document.querySelector(component.fullBioLink)?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = component.fullBioLink;
                }
              }
            }}
          />
        </section>
      );

    case 'textContentComponent':
      const alignmentClasses = {
        left: 'text-left',
        center: 'text-center mx-auto',
        right: 'text-right ml-auto',
      };
      
      return (
        <section key={key} className="max-w-4xl mx-auto px-6 py-8">
          {component.title && (
            <h2 className={`text-3xl font-bold mb-6 ${alignmentClasses[component.alignment] || 'text-left'}`}>
              {component.title}
            </h2>
          )}
          <div className={`prose prose-lg max-w-none ${alignmentClasses[component.alignment] || 'text-left'}`}>
            {component.content && (
              <PortableText value={component.content} />
            )}
          </div>
        </section>
      );

    case 'ctaButtonComponent':
      const buttonAlignmentClasses = {
        left: 'justify-start',
        center: 'justify-center',
        right: 'justify-end',
      };

      return (
        <section
          key={key}
          className={`max-w-4xl mx-auto px-6 py-8 flex ${buttonAlignmentClasses[component.alignment] || 'justify-center'}`}
        >
          <Button
            variant={component.variant}
            size={component.size}
            onClick={() => {
              if (component.link) {
                if (component.link.startsWith('#')) {
                  document.querySelector(component.link)?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = component.link;
                }
              }
            }}
          >
            {component.text}
          </Button>
        </section>
      );

    case 'imageGalleryComponent':
      const gridClasses = {
        'grid-2': 'md:grid-cols-2',
        'grid-3': 'md:grid-cols-3',
        'grid-4': 'md:grid-cols-4',
        'masonry': 'md:columns-3',
      };

      return (
        <section key={key} className="max-w-7xl mx-auto px-6 py-12">
          {component.title && (
            <h2 className="text-3xl font-bold mb-8 text-center">
              {component.title}
            </h2>
          )}
          <div className={`grid gap-4 ${gridClasses[component.layout] || 'md:grid-cols-3'}`}>
            {component.images?.map((img, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-lg">
                <img
                  src={urlFor(img).width(600).url()}
                  alt={img.alt || ''}
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
        </section>
      );

    case 'spacerComponent':
      const spacingClasses = {
        sm: 'h-8',
        md: 'h-16',
        lg: 'h-24',
        xl: 'h-32',
      };

      return (
        <div
          key={key}
          className={spacingClasses[component.size] || 'h-16'}
          aria-hidden="true"
        />
      );

    default:
      console.warn('Unknown component type:', component._type);
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
      {pageData.components?.map((component, index) => 
        renderPageComponent(component, index)
      )}
    </div>
  );
}
