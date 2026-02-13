import HeadshotProfile from './HeadshotProfile';

export default {
  title: 'Design System/HeadshotProfile',
  component: HeadshotProfile,
  parameters: {
    docs: {
      description: {
        component: 'Professional headshot/profile image component with various sizes and shapes.',
      },
    },
  },
  argTypes: {
    image: {
      control: 'text',
    },
    name: {
      control: 'text',
    },
    alt: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    shape: {
      control: 'select',
      options: ['rounded', 'circle', 'square'],
    },
  },
};

export const Default = {
  args: {
    image: '/photos/IMG_0346.JPG',
    name: 'Dr. Jane Smith',
    size: 'md',
    shape: 'rounded',
  },
};

export const Circle = {
  args: {
    image: '/photos/IMG_0346.JPG',
    name: 'Dr. Jane Smith',
    size: 'md',
    shape: 'circle',
  },
};

export const WithoutName = {
  args: {
    image: '/photos/IMG_0346.JPG',
    size: 'lg',
    shape: 'rounded',
  },
};

export const AllSizes = {
  render: () => (
    <div className="flex items-end gap-8 flex-wrap">
      <HeadshotProfile
        image="/photos/IMG_0346.JPG"
        name="Small"
        size="sm"
        shape="rounded"
      />
      <HeadshotProfile
        image="/photos/IMG_0346.JPG"
        name="Medium"
        size="md"
        shape="rounded"
      />
      <HeadshotProfile
        image="/photos/IMG_0346.JPG"
        name="Large"
        size="lg"
        shape="rounded"
      />
      <HeadshotProfile
        image="/photos/IMG_0346.JPG"
        name="Extra Large"
        size="xl"
        shape="rounded"
      />
    </div>
  ),
};

export const AllShapes = {
  render: () => (
    <div className="flex items-center gap-8 flex-wrap">
      <HeadshotProfile
        image="/photos/IMG_0346.JPG"
        name="Rounded"
        size="lg"
        shape="rounded"
      />
      <HeadshotProfile
        image="/photos/IMG_0346.JPG"
        name="Circle"
        size="lg"
        shape="circle"
      />
      <HeadshotProfile
        image="/photos/IMG_0346.JPG"
        name="Square"
        size="lg"
        shape="square"
      />
    </div>
  ),
};
