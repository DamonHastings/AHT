import IdentityQuote from './IdentityQuote';

export default {
  title: 'Design System/IdentityQuote',
  component: IdentityQuote,
  parameters: {
    docs: {
      description: {
        component: 'Identity quote component for displaying inspirational or defining quotes with attribution.',
      },
    },
  },
  argTypes: {
    quote: {
      control: 'text',
    },
    author: {
      control: 'text',
    },
  },
};

export const Default = {
  args: {
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    author: 'Nelson Mandela',
  },
};

export const WithoutAuthor = {
  args: {
    quote: 'Your mental health is a priority. Take care of yourself.',
  },
};

export const LongQuote = {
  args: {
    quote: 'In the midst of winter, I found there was, within me, an invincible summer. And that makes me happy. For it says that no matter how hard the world pushes against me, within me, there\'s something stronger – something better, pushing right back.',
    author: 'Albert Camus',
  },
};

export const ShortQuote = {
  args: {
    quote: 'Be kind to yourself.',
    author: 'Unknown',
  },
};
