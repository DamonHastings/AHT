import SiteHeader from './SiteHeader';
import Logo from './Logo';

export default {
  title: 'Design System/SiteHeader',
  component: SiteHeader,
  parameters: {
    docs: {
      description: {
        component: 'Site header component with logo and consultation booking button.',
      },
    },
    layout: 'fullscreen',
  },
  argTypes: {
    consultationText: {
      control: 'text',
    },
    showConsultation: {
      control: 'boolean',
    },
    onConsultationClick: { action: 'consultation clicked' },
  },
};

export const Default = {
  args: {
    showConsultation: true,
    consultationText: 'Book Consultation',
  },
};

export const CustomText = {
  args: {
    showConsultation: true,
    consultationText: 'Schedule Appointment',
  },
};

export const WithoutButton = {
  args: {
    showConsultation: false,
  },
};

export const CustomLogo = {
  args: {
    logo: <Logo variant="default" size="lg" />,
    showConsultation: true,
    consultationText: 'Get Started',
  },
};

export const WithClickHandler = {
  args: {
    showConsultation: true,
    consultationText: 'Book Free Consultation',
    onConsultationClick: () => alert('Navigate to booking page'),
  },
};
