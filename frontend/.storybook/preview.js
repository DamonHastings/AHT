import '../src/index.css';
import '../src/styles/v3-theme.css';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    },

    backgrounds: {
      default: 'neutral-50',
      values: [
        {
          name: 'neutral-50',
          value: '#F8F7F2',
        },
        {
          name: 'white',
          value: '#FFFFFF',
        },
        {
          name: 'wood-50',
          value: '#8B4513',
        },
      ],
    },
  },
};

export default preview;