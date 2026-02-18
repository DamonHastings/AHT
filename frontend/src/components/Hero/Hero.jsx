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
        const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
        const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const parallaxX = mousePosition.x * 15;
  const parallaxY = mousePosition.y * 15;

  const backgroundImageUrl = practice?.heroBackgroundImage
    ? urlFor(practice.heroBackgroundImage).width(1920).height(1080).url()
    : "/photos/IMG_0346.JPG";

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen overflow-hidden"
      style={{ backgroundColor: '#E4EDF2' }}
    >
      {/* Fullscreen Background with Parallax Effect */}
      <div
        className="absolute inset-0 w-full h-full transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${parallaxX}px, ${parallaxY}px) scale(1.05)`,
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.4,
        }}
      />
      
      {/* Subtle Gradient Overlay */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(228, 237, 242, 0.9) 0%, rgba(194, 217, 160, 0.2) 100%)',
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content Column */}
            <div className="space-y-8">
              <div>
                {therapist.verified && (
                  <span 
                    className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border-2"
                    style={{ 
                      borderColor: '#81916B'
                    }}
                  >
                    ✓ Verified Therapist
                  </span>
                )}
                
                <h1 
                  className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
                  style={{ color: '#3F1006' }}
                >
                  {therapist.name}
                </h1>

                <p 
                  className="font-body text-2xl md:text-3xl font-semibold mb-6"
                  style={{ color: '#65858C' }}
                >
                  {therapist.credentials}
                </p>

                {therapist.welcomeMessage && (
                  <p 
                    className="font-body text-lg md:text-xl leading-relaxed"
                  >
                    {therapist.welcomeMessage}
                    </p>
                  )}
              </div>

              {practice?.consultationOffer && (
                <div className="space-y-4 pt-4">
                  <a
                    href="#contact"
                    className="inline-block px-8 py-4 rounded-lg font-body font-semibold text-lg transition-all transform hover:scale-105 hover:shadow-xl"
                    style={{
                      backgroundColor: '#65858C',
                      color: '#FFFFFF',
                    }}
                  >
                    Free {practice.consultationDuration || 15}-Minute Consultation
                  </a>
                  <p className="font-body text-base" style={{ color: '#43595D' }}>
                    Call or Email:{" "}
                    <a
                      href={`tel:${therapist.phone}`}
                      className="font-semibold hover:underline transition-all"
                      style={{ color: '#65858C' }}
                    >
                      {therapist.phone}
                    </a>
                  </p>
                </div>
              )}
            </div>

            {/* Profile Image Column */}
            <div className="flex justify-center lg:justify-end">
              {therapist.profileImage && (
                <div className="relative">
                  <div 
                    className="absolute -inset-4 rounded-full opacity-30 blur-2xl"
                    style={{ backgroundColor: '#C2D9A0' }}
                  />
                  <img
                    src={urlFor(therapist.profileImage).width(600).height(600).url()}
                    alt={therapist.name}
                    className="relative rounded-full shadow-2xl w-80 h-80 lg:w-96 lg:h-96 object-cover border-8"
                    style={{ borderColor: '#FFFFFF' }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div 
          className="w-6 h-10 border-2 rounded-full flex items-start justify-center p-2"
          style={{ borderColor: '#65858C' }}
        >
          <div 
            className="w-1 h-3 rounded-full animate-pulse"
            style={{ backgroundColor: '#65858C' }}
          />
        </div>
      </div>
    </section>
  );
}
