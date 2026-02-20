import { PortableText } from "@portabletext/react";
import { urlFor } from "../../utils/sanityClient";
import { CONTAINER } from "../../design-system/layout";
import { HeroSection, PreviewScroll, ProfileSection, ConsultationForm } from "../../design-system";

/**
 * Homepage wireframe: Hero, intro text, services carousel, about section, consultation form.
 * Uses therapist and specialties from Sanity; falls back to defaults when content is missing.
 */
export default function HomeView({ therapist, serviceItems }) {
  const heroHeading = "Find Your Peace";
  const heroSubheading =
    therapist?.welcomeMessage || "Compassionate, evidence-based therapy for lasting change";

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-therapy-sand-50">
      {/* 1. Hero */}
      <HeroSection
        backgroundImage={undefined}
        overlay="dark"
        overlayOpacity={0.4}
        heading={heroHeading}
        subheading={heroSubheading}
        ctaText="Book Consultation"
        onCtaClick={scrollToContact}
        ctaVariant="accent"
        alignment="center"
        height="screen"
      />

      {/* 2. Introductory text (centered philosophy) */}
      <section className={`${CONTAINER} max-w-3xl py-12 md:py-16 text-center`}>
        {therapist?.philosophy && therapist.philosophy.length > 0 ? (
          <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed space-y-6 font-body">
            <PortableText value={therapist.philosophy} />
          </div>
        ) : (
          <>
            <p className="text-slate-600 leading-relaxed mb-6 font-body">
              I believe in creating a safe, non-judgmental space where healing can truly begin. My
              approach is centered on empathy, authenticity, and collaboration.
            </p>
            <p className="text-slate-600 leading-relaxed font-body">
              Together, we will explore your unique experiences and develop strategies that resonate
              with your personal values and goals.
            </p>
          </>
        )}
      </section>

      {/* 3. Services (scrollable carousel) */}
      <PreviewScroll title="Services" items={serviceItems} className="bg-therapy-sand-100/50" />

      {/* 4. About (image left, text right + Learn more about me) */}
      <section className={`${CONTAINER} py-12 md:py-16`}>
        <ProfileSection
          image={
            therapist?.profileImage ? urlFor(therapist.profileImage).width(600).url() : undefined
          }
          imageAlt={therapist?.name ? `${therapist.name}, ${therapist.credentials}` : "Therapist"}
          content={
            therapist?.philosophy && therapist.philosophy.length > 0 ? (
              <PortableText value={therapist.philosophy} />
            ) : (
              <>
                <p className="mb-6">
                  I believe in creating a safe, non-judgmental space where healing can truly begin.
                  My approach is centered on empathy, authenticity, and collaboration.
                </p>
                <p>
                  Together, we will explore your unique experiences and develop strategies that
                  resonate with your personal values and goals.
                </p>
              </>
            )
          }
          buttonText="Learn more about me"
          buttonLink="/about"
          imageOnLeft={true}
        />
      </section>

      {/* 5. Consultation form (id for Book Consultation scroll target) */}
      <div id="contact">
        <ConsultationForm />
      </div>
    </div>
  );
}
