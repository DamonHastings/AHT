import { useState, useEffect, useRef } from "react";
import { urlFor } from "../../utils/sanityClient";

export default function Hero({ therapist, practice }) {
  if (!therapist) return null;

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        // Calculate mouse position relative to the center of the hero section
        // Values range from -1 to 1
        const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
        const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Calculate parallax transform based on mouse position
  const parallaxX = mousePosition.x * 20; // Adjust multiplier for intensity
  const parallaxY = mousePosition.y * 20;

  const backgroundImageUrl = practice?.heroBackgroundImage
    ? urlFor(practice.heroBackgroundImage).width(1920).height(1080).url()
    : "/photos/IMG_0346.JPG";

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden"
      style={{ background: '#ffffff' }}
    >
      {/* Fullscreen Background with Parallax Effect and Filter */}
      <div
        className="absolute inset-0 w-full h-full transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${parallaxX}px, ${parallaxY}px) scale(1.1)`,
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(110%) contrast(116%) grayscale(0%) hue-rotate(342deg) invert(0%) opacity(100%) saturate(84%) sepia(0%)",
          WebkitFilter: "brightness(110%) contrast(116%) grayscale(0%) hue-rotate(342deg) invert(0%) opacity(100%) saturate(84%) sepia(0%)",
        }}
      />
      
      {/* Cyan overlay with lighten blend mode */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background: '#6be9ff',
          opacity: 0.23,
          mixBlendMode: 'lighten',
        }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image Column */}
            <div className="flex justify-center md:justify-end">
              {therapist.profileImage && (
                <div className="relative">
                  <img
                    src={urlFor(therapist.profileImage).width(500).height(500).url()}
                    alt={therapist.name}
                    className="rounded-tl-full rounded-tr-full rounded-bl-full rounded-br-sm shadow-2xl w-80 h-80 object-cover border-4 border-therapy-cream-100 backdrop-blur-sm"
                  />
                </div>
              )}
            </div>

            {/* Text Content Column with Neutral Background */}
            <div className="bg-therapy-sand-100/95 backdrop-blur-md rounded-2xl p-8 md:p-10 shadow-2xl border border-therapy-sand-300/50">
              <div className="space-y-6">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-therapy-burgundy-600 drop-shadow-sm">
                    {therapist.name}
                  </h1>
                  {therapist.verified && (
                    <span className="bg-therapy-teal-400 text-white backdrop-blur-sm text-sm font-semibold px-3 py-1 rounded-full border border-therapy-teal-500 shadow-md">
                      Verified
                    </span>
                  )}
                </div>

                <p className="text-xl md:text-2xl text-therapy-teal-600 drop-shadow-sm font-medium">
                  {therapist.credentials}
                </p>

                {therapist.welcomeMessage && (
                  <p className="text-base md:text-lg text-therapy-burgundy-500 leading-relaxed">
                    {therapist.welcomeMessage}
                  </p>
                )}

                {practice?.consultationOffer && (
                  <div className="space-y-4 pt-4">
                    <a
                      href="#contact"
                      className="inline-block bg-therapy-teal-500 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-therapy-teal-600 transition-all transform hover:scale-105 shadow-xl"
                    >
                      Free {practice.consultationDuration || 15}-Minute Consultation
                    </a>
                    <p className="text-therapy-burgundy-400 text-base">
                      Call or Email:{" "}
                      <a
                        href={`tel:${therapist.phone}`}
                        className="text-therapy-teal-600 hover:text-therapy-teal-700 underline font-semibold"
                      >
                        {therapist.phone}
                      </a>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
