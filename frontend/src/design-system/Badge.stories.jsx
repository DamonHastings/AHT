import Badge from './Badge'

export default {
  title: 'Design System/Badge',
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: 'Badge component for labels, tags, and status indicators.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'neutral', 'success'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
}

export const Primary = {
  args: {
    children: 'Primary Badge',
    variant: 'primary',
  },
}

export const Variants = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="accent">Accent</Badge>
      <Badge variant="neutral">Neutral</Badge>
      <Badge variant="success">Success</Badge>
    </div>
  ),
}

export const Sizes = {
  render: () => (
    <div className="flex items-center gap-4">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
}

export const UseCases = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">Status Indicators</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="success">Available</Badge>
          <Badge variant="primary">New Patient</Badge>
          <Badge variant="neutral">Waitlist</Badge>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Tags</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Anxiety</Badge>
          <Badge variant="secondary">Depression</Badge>
          <Badge variant="secondary">Trauma</Badge>
          <Badge variant="accent">CBT</Badge>
          <Badge variant="accent">Mindfulness</Badge>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Verification</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="success">Verified</Badge>
          <Badge variant="primary">Licensed</Badge>
        </div>
      </div>
    </div>
  ),
}
