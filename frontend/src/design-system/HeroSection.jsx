import PropTypes from 'prop-types';
import Button from './Button';

export default function HeroSection({
  backgroundImage,
  overlay = 'dark',
  overlayOpacity = 0.4,
  heading,
  subheading,
  ctaText = 'Book Consultation',
  onCtaClick,
  ctaVariant = 'accent',
  alignment = 'center',
  height = 'screen',
  className = '',
}) {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  const heightClasses = {
    small: 'h-96',
    medium: 'h-[32rem]',
    large: 'h-[40rem]',
    screen: 'h-screen',
  };

  const overlayColors = {
    dark: 'bg-black',
    light: 'bg-white',
    burgundy: 'bg-therapy-burgundy-900',
    teal: 'bg-therapy-teal-900',
  };

  return (
    <section
      className={`relative w-full ${heightClasses[height]} overflow-hidden ${className}`}
    >
      {/* Background Image */}
      {backgroundImage && (
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      )}

      {/* Overlay */}
      {overlay && (
        <div
          className={`absolute inset-0 ${overlayColors[overlay]}`}
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className={`max-w-5xl w-full flex flex-col gap-8 ${alignmentClasses[alignment]}`}>
          {/* Heading */}
          {heading && (
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-therapy-burgundy-700 leading-tight">
              {heading}
            </h1>
          )}

          {/* Subheading */}
          {subheading && (
            <p className="text-lg md:text-xl lg:text-2xl text-therapy-burgundy-600 max-w-3xl leading-relaxed">
              {subheading}
            </p>
          )}

          {/* CTA Button */}
          {ctaText && (
            <div className="mt-4">
              <Button
                variant={ctaVariant}
                size="lg"
                onClick={onCtaClick}
                className="shadow-2xl text-lg px-10 py-4"
              >
                {ctaText}
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator (only for screen height) */}
      {height === 'screen' && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="w-6 h-10 border-2 border-therapy-burgundy-400 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-therapy-burgundy-500 rounded-full animate-pulse" />
          </div>
        </div>
      )}
    </section>
  );
}

HeroSection.propTypes = {
  backgroundImage: PropTypes.string,
  overlay: PropTypes.oneOf(['dark', 'light', 'burgundy', 'teal', null]),
  overlayOpacity: PropTypes.number,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  ctaText: PropTypes.string,
  onCtaClick: PropTypes.func,
  ctaVariant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost', 'accent']),
  alignment: PropTypes.oneOf(['left', 'center', 'right']),
  height: PropTypes.oneOf(['small', 'medium', 'large', 'screen']),
  className: PropTypes.string,
};
