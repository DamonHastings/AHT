// Component schemas for the page builder
// These represent the individual components that can be added to pages

export const heroComponent = {
  name: 'heroComponent',
  title: 'Hero Section',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
      rows: 3,
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'overlay',
      title: 'Overlay Color',
      type: 'string',
      options: {
        list: [
          { title: 'Dark (Black)', value: 'dark' },
          { title: 'Light (White)', value: 'light' },
          { title: 'Burgundy', value: 'burgundy' },
          { title: 'Teal', value: 'teal' },
          { title: 'None', value: 'none' },
        ],
      },
      initialValue: 'dark',
    },
    {
      name: 'overlayOpacity',
      title: 'Overlay Opacity',
      type: 'number',
      description: 'Value between 0 and 1 (e.g., 0.4)',
      validation: Rule => Rule.min(0).max(1),
      initialValue: 0.4,
    },
    {
      name: 'ctaButton',
      title: 'CTA Button',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Button Text',
          type: 'string',
          initialValue: 'Book Consultation',
        },
        {
          name: 'link',
          title: 'Button Link',
          type: 'string',
          description: 'URL or anchor (e.g., #contact)',
        },
        {
          name: 'variant',
          title: 'Button Style',
          type: 'string',
          options: {
            list: [
              { title: 'Accent (Teal)', value: 'accent' },
              { title: 'Primary (Burgundy)', value: 'primary' },
              { title: 'Secondary', value: 'secondary' },
              { title: 'Outline', value: 'outline' },
            ],
          },
          initialValue: 'accent',
        },
      ],
    },
    {
      name: 'alignment',
      title: 'Content Alignment',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Center', value: 'center' },
          { title: 'Right', value: 'right' },
        ],
      },
      initialValue: 'center',
    },
    {
      name: 'height',
      title: 'Section Height',
      type: 'string',
      options: {
        list: [
          { title: 'Small', value: 'small' },
          { title: 'Medium', value: 'medium' },
          { title: 'Large', value: 'large' },
          { title: 'Full Screen', value: 'screen' },
        ],
      },
      initialValue: 'screen',
    },
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'subheading',
      media: 'backgroundImage',
    },
    prepare({ title, subtitle }) {
      return {
        title: `Hero: ${title || 'Untitled'}`,
        subtitle: subtitle,
      };
    },
  },
};

export const identityQuoteComponent = {
  name: 'identityQuoteComponent',
  title: 'Identity Quote',
  type: 'object',
  fields: [
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
    },
  ],
  preview: {
    select: {
      quote: 'quote',
      author: 'author',
    },
    prepare({ quote, author }) {
      return {
        title: 'Identity Quote',
        subtitle: `"${quote?.substring(0, 60)}${quote?.length > 60 ? '...' : ''}"`,
      };
    },
  },
};

export const philosophySectionComponent = {
  name: 'philosophySectionComponent',
  title: 'Philosophy Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'My Philosophy',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
      validation: Rule => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare({ title }) {
      return {
        title: `Philosophy: ${title || 'Untitled'}`,
      };
    },
  },
};

export const focusAreasComponent = {
  name: 'focusAreasComponent',
  title: 'Focus Areas',
  type: 'object',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Focus Areas',
    },
    {
      name: 'areas',
      title: 'Focus Area Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: Rule => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
              validation: Rule => Rule.required(),
            },
            {
              name: 'icon',
              title: 'Icon (Emoji)',
              type: 'string',
              description: 'Single emoji character (e.g., 🧠)',
            },
          ],
          preview: {
            select: {
              title: 'title',
              icon: 'icon',
            },
            prepare({ title, icon }) {
              return {
                title: `${icon || '•'} ${title}`,
              };
            },
          },
        },
      ],
      validation: Rule => Rule.min(1).max(6),
    },
    {
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          { title: '2 Columns', value: '2col' },
          { title: '3 Columns', value: '3col' },
        ],
      },
      initialValue: '3col',
    },
  ],
  preview: {
    select: {
      sectionTitle: 'sectionTitle',
      areas: 'areas',
    },
    prepare({ sectionTitle, areas }) {
      return {
        title: `Focus Areas: ${sectionTitle || 'Untitled'}`,
        subtitle: `${areas?.length || 0} areas`,
      };
    },
  },
};

export const headshotProfileComponent = {
  name: 'headshotProfileComponent',
  title: 'Headshot & Profile',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'shape',
      title: 'Image Shape',
      type: 'string',
      options: {
        list: [
          { title: 'Rounded', value: 'rounded' },
          { title: 'Circle', value: 'circle' },
          { title: 'Square', value: 'square' },
        ],
      },
      initialValue: 'rounded',
    },
    {
      name: 'size',
      title: 'Size',
      type: 'string',
      options: {
        list: [
          { title: 'Small', value: 'sm' },
          { title: 'Medium', value: 'md' },
          { title: 'Large', value: 'lg' },
          { title: 'Extra Large', value: 'xl' },
        ],
      },
      initialValue: 'lg',
    },
  ],
  preview: {
    select: {
      name: 'name',
      media: 'image',
    },
    prepare({ name, media }) {
      return {
        title: 'Headshot Profile',
        subtitle: name,
        media,
      };
    },
  },
};

export const personalStatementComponent = {
  name: 'personalStatementComponent',
  title: 'Personal Statement',
  type: 'object',
  fields: [
    {
      name: 'statement',
      title: 'Statement',
      type: 'text',
      rows: 6,
      validation: Rule => Rule.required(),
    },
    {
      name: 'showFullBioLink',
      title: 'Show "Read Full Bio" Link',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'fullBioLink',
      title: 'Full Bio Link',
      type: 'string',
      description: 'URL or anchor (e.g., #about)',
      hidden: ({ parent }) => !parent?.showFullBioLink,
    },
  ],
  preview: {
    select: {
      statement: 'statement',
    },
    prepare({ statement }) {
      return {
        title: 'Personal Statement',
        subtitle: statement?.substring(0, 60) + '...',
      };
    },
  },
};

export const textContentComponent = {
  name: 'textContentComponent',
  title: 'Text Content',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
      validation: Rule => Rule.required(),
    },
    {
      name: 'alignment',
      title: 'Text Alignment',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Center', value: 'center' },
          { title: 'Right', value: 'right' },
        ],
      },
      initialValue: 'left',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: `Text: ${title || 'Untitled'}`,
      };
    },
  },
};

export const ctaButtonComponent = {
  name: 'ctaButtonComponent',
  title: 'CTA Button',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Button Text',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'link',
      title: 'Button Link',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'variant',
      title: 'Button Style',
      type: 'string',
      options: {
        list: [
          { title: 'Primary', value: 'primary' },
          { title: 'Secondary', value: 'secondary' },
          { title: 'Accent', value: 'accent' },
          { title: 'Outline', value: 'outline' },
        ],
      },
      initialValue: 'primary',
    },
    {
      name: 'size',
      title: 'Size',
      type: 'string',
      options: {
        list: [
          { title: 'Small', value: 'sm' },
          { title: 'Medium', value: 'md' },
          { title: 'Large', value: 'lg' },
        ],
      },
      initialValue: 'md',
    },
    {
      name: 'alignment',
      title: 'Alignment',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Center', value: 'center' },
          { title: 'Right', value: 'right' },
        ],
      },
      initialValue: 'center',
    },
  ],
  preview: {
    select: {
      text: 'text',
      variant: 'variant',
    },
    prepare({ text, variant }) {
      return {
        title: `CTA Button: ${text}`,
        subtitle: `Style: ${variant}`,
      };
    },
  },
};

export const imageGalleryComponent = {
  name: 'imageGalleryComponent',
  title: 'Image Gallery',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Gallery Title',
      type: 'string',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            },
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              validation: Rule => Rule.required(),
            },
          ],
        },
      ],
      validation: Rule => Rule.min(1),
    },
    {
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          { title: 'Grid (2 columns)', value: 'grid-2' },
          { title: 'Grid (3 columns)', value: 'grid-3' },
          { title: 'Grid (4 columns)', value: 'grid-4' },
          { title: 'Masonry', value: 'masonry' },
        ],
      },
      initialValue: 'grid-3',
    },
  ],
  preview: {
    select: {
      title: 'title',
      images: 'images',
    },
    prepare({ title, images }) {
      return {
        title: `Gallery: ${title || 'Untitled'}`,
        subtitle: `${images?.length || 0} images`,
      };
    },
  },
};

export const spacerComponent = {
  name: 'spacerComponent',
  title: 'Spacer',
  type: 'object',
  fields: [
    {
      name: 'size',
      title: 'Spacing Size',
      type: 'string',
      options: {
        list: [
          { title: 'Small (2rem)', value: 'sm' },
          { title: 'Medium (4rem)', value: 'md' },
          { title: 'Large (6rem)', value: 'lg' },
          { title: 'Extra Large (8rem)', value: 'xl' },
        ],
      },
      initialValue: 'md',
    },
  ],
  preview: {
    select: {
      size: 'size',
    },
    prepare({ size }) {
      return {
        title: `Spacer (${size || 'md'})`,
      };
    },
  },
};
