import HeroSection from './HeroSection';
import SiteHeader from './SiteHeader';
import IdentityQuote from './IdentityQuote';
import PhilosophySection from './PhilosophySection';
import FocusAreaCard from './FocusAreaCard';
import HeadshotProfile from './HeadshotProfile';
import PersonalStatement from './PersonalStatement';
import FooterCTA from './FooterCTA';

export default {
  title: 'Design System/Wireframe Composition',
  parameters: {
    docs: {
      description: {
        component: 'Complete wireframe composition showing all components working together as designed in the original sketch.',
      },
    },
    layout: 'fullscreen',
  },
};

export const CompleteWireframe = {
  render: () => (
    <div className="min-h-screen bg-therapy-sand-50">
      {/* Header with Logo and Book Consultation */}
      <SiteHeader 
        consultationText="Book Consultation"
        onConsultationClick={() => alert('Book consultation')}
      />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* Identity Quote Section */}
        <section>
          <IdentityQuote 
            quote="The greatest glory in living lies not in never falling, but in rising every time we fall."
            author="Nelson Mandela"
          />
        </section>

        {/* Philosophy Section with Image */}
        <section>
          <PhilosophySection
            title="My Philosophy"
            content={[
              'I believe in creating a safe, non-judgmental space where healing can truly begin. My approach is centered on empathy, authenticity, and collaboration.',
              'Together, we will explore your unique experiences and develop strategies that resonate with your personal values and goals.',
            ]}
            image="/photos/IMG_0346.JPG"
          />
        </section>

        {/* Focus Areas - Three Cards */}
        <section>
          <h2 className="text-3xl font-bold text-therapy-burgundy-600 mb-8 text-center">
            Focus Areas
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <FocusAreaCard
              title="Anxiety & Stress"
              description="Learn effective strategies to manage anxiety, reduce stress, and develop healthy coping mechanisms for daily challenges."
              icon="🧠"
            />
            <FocusAreaCard
              title="Trauma & PTSD"
              description="Heal from traumatic experiences through compassionate, trauma-informed therapeutic approaches."
              icon="💙"
            />
            <FocusAreaCard
              title="Relationship Issues"
              description="Improve communication, build healthier connections, and navigate relationship challenges."
              icon="🤝"
            />
          </div>
        </section>

        {/* Headshot and Personal Statement Side by Side */}
        <section>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Headshot */}
            <div className="flex justify-center">
              <HeadshotProfile
                image="/photos/IMG_0346.JPG"
                name="Dr. Jane Smith, PhD"
                size="xl"
                shape="rounded"
              />
            </div>

            {/* Personal Statement */}
            <div>
              <PersonalStatement
                statement="I am a licensed therapist with over 10 years of experience helping individuals navigate life's challenges. My approach is compassionate, evidence-based, and tailored to each client's unique needs. I specialize in anxiety, depression, and trauma recovery, and I'm committed to creating a therapeutic environment where you feel heard, understood, and supported."
                showFullBioLink={true}
                onFullBioClick={() => alert('Navigate to full bio')}
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer with Logo, Practice Description, and CTAs */}
      <FooterCTA
        logo="Logo"
        practiceDescription="Providing compassionate, evidence-based therapy to help you achieve mental wellness and personal growth. Every client receives personalized care tailored to their unique needs."
        availability="Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 2:00 PM"
        contactInfo={{
          phone: '(555) 123-4567',
          email: 'contact@therapy.com',
          address: '123 Main Street, Suite 200\nCity, State 12345',
        }}
        consultationCTA={{
          title: 'Ready to Begin?',
          buttonText: 'Book Free Consultation',
          description: '15-minute complimentary session',
        }}
        onConsultationClick={() => alert('Book consultation')}
      />
    </div>
  ),
};

export const MobileView = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  render: () => (
    <div className="min-h-screen bg-therapy-sand-50">
      <SiteHeader 
        consultationText="Book"
        onConsultationClick={() => alert('Book consultation')}
      />

      <main className="px-4 py-8 space-y-12">
        <IdentityQuote 
          quote="The greatest glory in living lies not in never falling, but in rising every time we fall."
          author="Nelson Mandela"
        />

        <PhilosophySection
          title="Philosophy"
          content="I believe in creating a safe, non-judgmental space where healing can truly begin."
          image="/photos/IMG_0346.JPG"
        />

        <section>
          <h2 className="text-2xl font-bold text-therapy-burgundy-600 mb-6">
            Focus Areas
          </h2>
          <div className="space-y-4">
            <FocusAreaCard
              title="Anxiety & Stress"
              description="Learn effective strategies to manage anxiety and reduce stress."
              icon="🧠"
            />
            <FocusAreaCard
              title="Trauma & PTSD"
              description="Heal from traumatic experiences through compassionate care."
              icon="💙"
            />
            <FocusAreaCard
              title="Relationships"
              description="Improve communication and build healthier connections."
              icon="🤝"
            />
          </div>
        </section>

        <div className="space-y-6">
          <div className="flex justify-center">
            <HeadshotProfile
              image="/photos/IMG_0346.JPG"
              name="Dr. Jane Smith"
              size="lg"
              shape="rounded"
            />
          </div>

          <PersonalStatement
            statement="Licensed therapist with over 10 years of experience. Specializing in anxiety, depression, and trauma recovery."
            showFullBioLink={true}
          />
        </div>
      </main>

      <FooterCTA
        logo="Logo"
        practiceDescription="Compassionate, evidence-based therapy."
        contactInfo={{
          phone: '(555) 123-4567',
          email: 'contact@therapy.com',
        }}
        consultationCTA={{
          buttonText: 'Book Consultation',
        }}
      />
    </div>
  ),
};

export const AlternativeLayout = {
  render: () => (
    <div className="min-h-screen bg-white">
      <SiteHeader 
        consultationText="Schedule Appointment"
      />

      <main className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        <section className="text-center">
          <IdentityQuote 
            quote="Healing is not linear. It's a journey of self-discovery and growth."
            author="Dr. Jane Smith"
          />
        </section>

        <section className="grid md:grid-cols-2 gap-12 items-center">
          <HeadshotProfile
            image="/photos/IMG_0346.JPG"
            size="xl"
            shape="circle"
          />
          
          <div>
            <h2 className="text-4xl font-bold text-therapy-burgundy-600 mb-6">
              Welcome
            </h2>
            <PersonalStatement
              statement="With a deep commitment to compassionate care, I provide a safe space for healing and growth. My evidence-based approach is tailored to meet your unique needs and help you navigate life's challenges with resilience and hope."
              showFullBioLink={true}
            />
          </div>
        </section>

        <PhilosophySection
          title="Therapeutic Approach"
          content={[
            'Every individual has the capacity for growth and healing. My role is to provide support and evidence-based tools.',
            'Through a collaborative process, we work together to identify your goals and create a path forward that honors your unique journey.',
          ]}
          image="/photos/IMG_0346.JPG"
        />

        <section>
          <h2 className="text-3xl font-bold text-therapy-burgundy-600 mb-10 text-center">
            Areas of Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FocusAreaCard
              title="Anxiety Disorders"
              description="Evidence-based treatment for generalized anxiety, panic disorder, and social anxiety."
              icon="🌊"
            />
            <FocusAreaCard
              title="Depression"
              description="Compassionate support for major depression and persistent depressive disorder."
              icon="☀️"
            />
            <FocusAreaCard
              title="Life Transitions"
              description="Navigate major changes with support and guidance during challenging times."
              icon="🌱"
            />
          </div>
        </section>
      </main>

      <FooterCTA
        logo="Healing Minds"
        practiceDescription="Professional mental health services in a warm, welcoming environment. Telehealth and in-person sessions available."
        availability="Flexible scheduling including evenings and weekends"
        contactInfo={{
          phone: '(555) 987-6543',
          email: 'hello@healingminds.com',
          address: '456 Wellness Blvd, Suite 300',
        }}
        consultationCTA={{
          title: 'Take the First Step',
          buttonText: 'Book Free Consultation',
          description: 'Complimentary 15-minute consultation',
        }}
      />
    </div>
  ),
};

export const WithHeroSection = {
  render: () => (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/photos/IMG_0346.JPG"
        overlay="dark"
        overlayOpacity={0.5}
        heading="Find Your Path to Wellness"
        subheading="Compassionate, evidence-based therapy tailored to your unique needs"
        ctaText="Book Free Consultation"
        ctaVariant="accent"
        alignment="center"
        height="screen"
        onCtaClick={() => alert('Book consultation')}
      />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16 space-y-16 bg-therapy-sand-50">
        <section>
          <IdentityQuote 
            quote="The greatest glory in living lies not in never falling, but in rising every time we fall."
            author="Nelson Mandela"
          />
        </section>

        <section>
          <PhilosophySection
            title="My Philosophy"
            content={[
              'I believe in creating a safe, non-judgmental space where healing can truly begin. My approach is centered on empathy, authenticity, and collaboration.',
              'Together, we will explore your unique experiences and develop strategies that resonate with your personal values and goals.',
            ]}
            image="/photos/IMG_0346.JPG"
          />
        </section>

        <section>
          <h2 className="text-3xl font-bold text-therapy-burgundy-600 mb-8 text-center">
            Focus Areas
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <FocusAreaCard
              title="Anxiety & Stress"
              description="Learn effective strategies to manage anxiety, reduce stress, and develop healthy coping mechanisms."
              icon="🧠"
            />
            <FocusAreaCard
              title="Trauma & PTSD"
              description="Heal from traumatic experiences through compassionate, trauma-informed care."
              icon="💙"
            />
            <FocusAreaCard
              title="Relationship Issues"
              description="Improve communication and build healthier connections."
              icon="🤝"
            />
          </div>
        </section>

        <section>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="flex justify-center">
              <HeadshotProfile
                image="/photos/IMG_0346.JPG"
                name="Dr. Jane Smith, PhD"
                size="xl"
                shape="rounded"
              />
            </div>
            <div>
              <PersonalStatement
                statement="I am a licensed therapist with over 10 years of experience helping individuals navigate life's challenges. My approach is compassionate, evidence-based, and tailored to each client's unique needs."
                showFullBioLink={true}
                onFullBioClick={() => alert('Navigate to full bio')}
              />
            </div>
          </div>
        </section>
      </main>

      <FooterCTA
        logo="Logo"
        practiceDescription="Providing compassionate, evidence-based therapy to help you achieve mental wellness and personal growth."
        availability="Monday - Friday: 9:00 AM - 6:00 PM"
        contactInfo={{
          phone: '(555) 123-4567',
          email: 'contact@therapy.com',
        }}
        consultationCTA={{
          title: 'Ready to Begin?',
          buttonText: 'Book Free Consultation',
          description: '15-minute complimentary session',
        }}
        onConsultationClick={() => alert('Book consultation')}
      />
    </div>
  ),
};
