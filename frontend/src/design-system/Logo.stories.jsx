import Logo from './Logo';

export default {
  title: 'Design System/Logo',
  component: Logo,
  parameters: {
    docs: {
      description: {
        component: 'Logo component with multiple variants and sizes for branding throughout the application.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'light', 'dark'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
  },
};

export const Default = {
  args: {
    variant: 'default',
    size: 'md',
  },
};

export const Light = {
  args: {
    variant: 'light',
    size: 'md',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const Dark = {
  args: {
    variant: 'dark',
    size: 'md',
  },
};

export const Sizes = {
  render: () => (
    <div className="space-y-4">
      <Logo size="sm" />
      <Logo size="md" />
      <Logo size="lg" />
      <Logo size="xl" />
    </div>
  ),
};

export const AllVariants = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-semibold mb-2">Default</h3>
        <Logo variant="default" />
      </div>
      <div className="bg-therapy-burgundy-800 p-4 rounded">
        <h3 className="text-sm font-semibold mb-2 text-white">Light</h3>
        <Logo variant="light" />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">Dark</h3>
        <Logo variant="dark" />
      </div>
    </div>
  ),
};
