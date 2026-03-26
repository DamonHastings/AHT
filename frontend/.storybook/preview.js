import '../src/index.css';
import '../src/styles/site-theme.css';

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
      default: 'powder-blue-200',
      values: [
        { name: 'powder-blue-200', value: '#EDF3F6' },
        { name: 'powder-blue-300', value: '#E4EDF2' },
        { name: 'white', value: '#FFFFFF' },
        { name: 'linen', value: '#F4F0E8' },
        { name: 'slate-blue-400', value: '#43595D' },
        { name: 'ink', value: '#1C2730' },
      ],
    },
  },
};

export default preview;