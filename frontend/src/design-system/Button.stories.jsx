import Button from './Button'

export default {
  title: 'Design System/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Button component with multiple variants, sizes, and states. Used for primary actions throughout the application.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'accent'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
  },
}

export const Primary = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
}

export const Secondary = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
}

export const Outline = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
}

export const Ghost = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
  },
}

export const Accent = {
  args: {
    children: 'Accent Button',
    variant: 'accent',
  },
}

export const Sizes = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
}

export const States = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button>Normal</Button>
      <Button disabled>Disabled</Button>
    </div>
  ),
}

export const FullWidth = {
  args: {
    children: 'Full Width Button',
    fullWidth: true,
  },
}

export const AllVariants = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="accent">Accent</Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button variant="primary" disabled>Primary Disabled</Button>
        <Button variant="secondary" disabled>Secondary Disabled</Button>
        <Button variant="outline" disabled>Outline Disabled</Button>
        <Button variant="ghost" disabled>Ghost Disabled</Button>
        <Button variant="accent" disabled>Accent Disabled</Button>
      </div>
    </div>
  ),
}
