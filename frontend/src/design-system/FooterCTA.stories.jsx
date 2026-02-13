import FooterCTA from './FooterCTA';

export default {
  title: 'Design System/FooterCTA',
  component: FooterCTA,
  parameters: {
    docs: {
      description: {
        component: 'Footer component with practice information, contact details, and consultation call-to-action.',
      },
    },
    layout: 'fullscreen',
  },
  argTypes: {
    logo: {
      control: 'text',
    },
    practiceDescription: {
      control: 'text',
    },
    availability: {
      control: 'text',
    },
    onConsultationClick: { action: 'consultation clicked' },
  },
};

export const Default = {
  args: {
    logo: 'Logo',
    practiceDescription: 'Providing compassionate, evidence-based therapy to help you achieve mental wellness and personal growth.',
    availability: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 2:00 PM',
    contactInfo: {
      phone: '(555) 123-4567',
      email: 'contact@therapy.com',
      address: '123 Main Street, Suite 200\nCity, State 12345',
    },
    consultationCTA: {
      title: 'Ready to Begin?',
      buttonText: 'Book Free Consultation',
      description: '15-minute complimentary session',
    },
  },
};

export const Minimal = {
  args: {
    logo: 'Logo',
    contactInfo: {
      phone: '(555) 123-4567',
      email: 'contact@therapy.com',
    },
    consultationCTA: {
      buttonText: 'Contact Me',
    },
  },
};

export const WithoutCTA = {
  args: {
    logo: 'Logo',
    practiceDescription: 'Compassionate therapy for anxiety, depression, and life transitions.',
    availability: 'Monday - Friday: 9:00 AM - 5:00 PM',
    contactInfo: {
      phone: '(555) 123-4567',
      email: 'therapy@example.com',
    },
  },
};

export const FullContent = {
  args: {
    logo: 'Healing Minds Therapy',
    practiceDescription: 'Our practice offers a warm, welcoming environment where you can feel safe to explore your thoughts and feelings. We specialize in anxiety, depression, trauma recovery, and relationship counseling. Every client receives personalized care tailored to their unique needs and goals.',
    availability: 'Monday - Thursday: 8:00 AM - 7:00 PM\nFriday: 8:00 AM - 5:00 PM\nSaturday: 9:00 AM - 3:00 PM\nSunday: Closed',
    contactInfo: {
      phone: '(555) 987-6543',
      email: 'hello@healingminds.com',
      address: '456 Wellness Boulevard\nSuite 300\nSerenity City, SC 98765',
    },
    consultationCTA: {
      title: 'Take the First Step',
      buttonText: 'Schedule Your Free Consultation',
      description: 'Complimentary 15-minute phone consultation to discuss your needs',
    },
  },
};

export const CompactContact = {
  args: {
    logo: 'Logo',
    practiceDescription: 'Evidence-based therapy with a compassionate approach.',
    contactInfo: {
      phone: '(555) 123-4567',
    },
    consultationCTA: {
      buttonText: 'Get Started',
    },
  },
};
