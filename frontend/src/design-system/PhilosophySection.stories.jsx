import PhilosophySection from './PhilosophySection';

export default {
  title: 'Design System/PhilosophySection',
  component: PhilosophySection,
  parameters: {
    docs: {
      description: {
        component: 'Philosophy section component for displaying therapeutic approach, beliefs, or practice philosophy with optional imagery.',
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
    },
    content: {
      control: 'object',
    },
    image: {
      control: 'text',
    },
  },
};

export const Default = {
  args: {
    title: 'My Philosophy',
    content: [
      'I believe in creating a safe, non-judgmental space where healing can truly begin. My approach is centered on empathy, authenticity, and collaboration.',
      'Together, we will explore your unique experiences and develop strategies that resonate with your personal values and goals.',
    ],
    image: '/photos/IMG_0346.JPG',
  },
};

export const WithoutImage = {
  args: {
    title: 'Treatment Philosophy',
    content: 'Every individual has the capacity for growth and healing. My role is to provide the support and tools necessary to help you discover your inner strength and resilience.',
  },
};

export const SingleParagraph = {
  args: {
    title: 'Philosophy',
    content: 'I take a holistic, client-centered approach that honors the mind-body connection and recognizes the unique journey of each individual.',
    image: '/photos/IMG_0346.JPG',
  },
};

export const MultipleParagraphs = {
  args: {
    title: 'My Approach',
    content: [
      'I integrate evidence-based practices with compassionate, person-centered care. My goal is to help you build resilience and develop meaningful coping strategies.',
      'Whether you\'re dealing with anxiety, depression, trauma, or life transitions, I\'m here to support you every step of the way.',
      'Together, we\'ll work towards sustainable change that aligns with your values and supports your overall well-being.',
    ],
    image: '/photos/IMG_0346.JPG',
  },
};

export const CustomTitle = {
  args: {
    title: 'Therapeutic Approach',
    content: 'My practice is grounded in empathy, respect, and a deep commitment to your healing journey. I believe that therapy is a collaborative process.',
    image: '/photos/IMG_0346.JPG',
  },
};
