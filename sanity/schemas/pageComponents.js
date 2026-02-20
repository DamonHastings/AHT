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
    {
      name: 'variant',
      title: 'Layout Variant',
      type: 'string',
      description: 'Overlay: content over image. Split: image 7 cols, text 3 cols with gaps on a 12-column grid.',
      options: {
        list: [
          { title: 'Overlay (content over image)', value: 'overlay' },
          { title: 'Split (image 7 cols, text 3 cols)', value: 'split' },
        ],
      },
      initialValue: 'overlay',
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
              title: 'Icon',
              type: 'string',
              description: 'Icon name (e.g., brain, heart, wave, sun, shield, unlock, sparkles, plant, meditation, compass, target) or emoji (🧠)',
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
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Optional portrait image displayed alongside the statement',
    },
    {
      name: 'imageAlt',
      title: 'Image Alt Text',
      type: 'string',
      description: 'Describe the image for accessibility',
      hidden: ({ parent }) => !parent?.image,
    },
    {
      name: 'imageOnLeft',
      title: 'Image Position',
      type: 'boolean',
      description: 'Check to place image on the left, uncheck for right',
      initialValue: true,
      hidden: ({ parent }) => !parent?.image,
    },
    {
      name: 'statement',
      title: 'Statement',
      type: 'text',
      rows: 6,
      validation: Rule => Rule.required(),
    },
    {
      name: 'showFullBioLink',
      title: 'Show Link',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'linkText',
      title: 'Link Text',
      type: 'string',
      description: 'Customize the link/button text (e.g. "Read Full Biography", "Learn more")',
      initialValue: 'Read Full Biography',
      hidden: ({ parent }) => !parent?.showFullBioLink,
    },
    {
      name: 'fullBioLink',
      title: 'Link URL',
      type: 'string',
      description: 'URL or anchor (e.g., #about)',
      hidden: ({ parent }) => !parent?.showFullBioLink,
    },
  ],
  preview: {
    select: {
      statement: 'statement',
      media: 'image',
    },
    prepare({ statement, media }) {
      return {
        title: 'Personal Statement',
        subtitle: statement?.substring(0, 60) + '...',
        media,
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

export const consultationFormComponent = {
  name: 'consultationFormComponent',
  title: 'Consultation / Send a Message',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Form Title',
      type: 'string',
      initialValue: 'Send a Message',
    },
    {
      name: 'consentText',
      title: 'Consent / Disclaimer Text',
      type: 'text',
      rows: 4,
      description: 'Shown below the form (e.g. consent to receive communications).',
      initialValue:
        'By submitting this form, you consent to receive communications from the practice. If you provide an email address, you may receive an automated confirmation. See our Privacy Policy for details on how we protect your information.',
    },
    {
      name: 'privacyPolicyUrl',
      title: 'Privacy Policy URL',
      type: 'string',
      description: 'Link for "Privacy Policy" in the consent text',
    },
    {
      name: 'buttonText',
      title: 'Submit Button Text',
      type: 'string',
      initialValue: "LET'S CONNECT",
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: `Consultation Form: ${title || 'Send a Message'}`,
      };
    },
  },
};

export const consultationFormWideComponent = {
  name: 'consultationFormWideComponent',
  title: 'Consultation (Wide) – Contact + Form',
  type: 'object',
  description: '2 columns: contact info on the left, scheduling & messaging form on the right. Contact data comes from Therapist & Practice in Sanity.',
  fields: [
    {
      name: 'contactTitle',
      title: 'Contact Column Title',
      type: 'string',
      initialValue: 'Contact Information',
    },
    {
      name: 'title',
      title: 'Form Title',
      type: 'string',
      initialValue: 'Send a Message',
    },
    {
      name: 'consentText',
      title: 'Consent / Disclaimer Text',
      type: 'text',
      rows: 4,
      description: 'Shown below the form.',
      initialValue:
        'By submitting this form, you consent to receive communications from the practice. If you provide an email address, you may receive an automated confirmation. See our Privacy Policy for details on how we protect your information.',
    },
    {
      name: 'privacyPolicyUrl',
      title: 'Privacy Policy URL',
      type: 'string',
    },
    {
      name: 'buttonText',
      title: 'Submit Button Text',
      type: 'string',
      initialValue: "LET'S CONNECT",
    },
  ],
  preview: {
    select: {
      contactTitle: 'contactTitle',
      title: 'title',
    },
    prepare({ contactTitle, title }) {
      return {
        title: 'Consultation (Wide)',
        subtitle: `${contactTitle || 'Contact'} | ${title || 'Send a Message'}`,
      };
    },
  },
};

export const previewScrollComponent = {
  name: 'previewScrollComponent',
  title: 'Preview Scroll',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'Optional title for the scroll section',
    },
    {
      name: 'items',
      title: 'Scroll Items',
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
              title: 'Icon',
              type: 'string',
              description: 'Icon name (e.g., brain, heart, wave, sun, shield, unlock, sparkles, plant, meditation, compass, target) or emoji (🧠)',
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
      validation: Rule => Rule.min(3).max(12),
      description: 'Add items to display in the scrollable carousel',
    },
  ],
  preview: {
    select: {
      title: 'title',
      items: 'items',
    },
    prepare({ title, items }) {
      return {
        title: `Preview Scroll: ${title || 'Untitled'}`,
        subtitle: `${items?.length || 0} items`,
      };
    },
  },
};

const credentialIconOptions = [
  { title: 'Graduation cap', value: 'graduation' },
  { title: 'License/Badge', value: 'license' },
  { title: 'Book', value: 'book' },
];

export const profileSectionComponent = {
  name: 'profileSectionComponent',
  title: 'Profile Section',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Portrait-oriented image (3:4 aspect ratio works best)',
    },
    {
      name: 'imageAlt',
      title: 'Image Alt Text',
      type: 'string',
      description: 'Describe the image for accessibility',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Small uppercase label (e.g. "ABOUT MARY DIORIO, LCSW")',
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Primary heading (e.g. "Deeply experienced.")',
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      description: 'Secondary line under the heading',
    },
    {
      name: 'tags',
      title: 'Highlight Tags',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Rounded badges (e.g. "20+ Years Clinical Experience")',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
      validation: Rule => Rule.required(),
      description: 'Main text content for this section',
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'Learn more about me',
    },
    {
      name: 'buttonLink',
      title: 'Button Link',
      type: 'string',
      description: 'URL or anchor (e.g., #about)',
      initialValue: '#',
    },
    {
      name: 'credentials',
      title: 'Credentials & Training',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Credentials & Training',
        },
        {
          name: 'items',
          title: 'Credential Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'icon',
                  title: 'Icon',
                  type: 'string',
                  options: { list: credentialIconOptions },
                },
                {
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  validation: Rule => Rule.required(),
                },
                {
                  name: 'description',
                  title: 'Description',
                  type: 'string',
                },
              ],
              preview: {
                select: { title: 'title' },
                prepare: ({ title }) => ({ title }),
              },
            },
          ],
        },
      ],
    },
    {
      name: 'imageOnLeft',
      title: 'Image Position',
      type: 'boolean',
      description: 'Check to place image on the left, uncheck for right',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      media: 'image',
      imageOnLeft: 'imageOnLeft',
    },
    prepare({ media, imageOnLeft }) {
      return {
        title: 'Profile Section',
        subtitle: imageOnLeft ? 'Image on left' : 'Image on right',
        media,
      };
    },
  },
};
