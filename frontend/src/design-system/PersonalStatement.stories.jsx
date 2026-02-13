import PersonalStatement from './PersonalStatement';

export default {
  title: 'Design System/PersonalStatement',
  component: PersonalStatement,
  parameters: {
    docs: {
      description: {
        component: 'Personal statement component for displaying therapist bio with optional full biography link.',
      },
    },
  },
  argTypes: {
    statement: {
      control: 'text',
    },
    showFullBioLink: {
      control: 'boolean',
    },
    onFullBioClick: { action: 'full bio clicked' },
  },
};

export const Default = {
  args: {
    statement: 'I am a licensed therapist with over 10 years of experience helping individuals navigate life\'s challenges. My approach is compassionate, evidence-based, and tailored to each client\'s unique needs. I specialize in anxiety, depression, and trauma recovery.',
    showFullBioLink: true,
  },
};

export const WithoutLink = {
  args: {
    statement: 'I believe in the power of authentic connection and collaborative healing. Together, we can work towards your goals and create meaningful change in your life.',
    showFullBioLink: false,
  },
};

export const LongStatement = {
  args: {
    statement: 'As a licensed clinical psychologist, I have dedicated my career to helping individuals overcome mental health challenges and live more fulfilling lives. My therapeutic approach integrates cognitive-behavioral therapy, mindfulness practices, and person-centered care. I have specialized training in trauma-informed therapy and have worked extensively with clients dealing with anxiety disorders, depression, PTSD, and relationship issues. My goal is to create a safe, non-judgmental space where you can explore your thoughts and feelings, develop new coping strategies, and work towards lasting positive change.',
    showFullBioLink: true,
  },
};

export const ShortStatement = {
  args: {
    statement: 'Experienced therapist specializing in anxiety and depression.',
    showFullBioLink: true,
  },
};

export const WithClickHandler = {
  args: {
    statement: 'I am passionate about helping clients discover their inner strength and resilience. Through evidence-based practices and a warm, collaborative approach, we can work together to achieve your therapeutic goals.',
    showFullBioLink: true,
    onFullBioClick: () => alert('Navigate to full biography page'),
  },
};
