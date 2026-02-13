export default {
  name: 'contentBlock',
  title: 'Content Block',
  type: 'document',
  description: 'Reusable content blocks that can be used across multiple pages',
  fields: [
    {
      name: 'title',
      title: 'Block Title',
      type: 'string',
      description: 'Internal name for this content block',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'blockType',
      title: 'Block Type',
      type: 'string',
      options: {
        list: [
          {title: 'Text Block', value: 'text'},
          {title: 'CTA (Call to Action)', value: 'cta'},
          {title: 'Testimonial', value: 'testimonial'},
          {title: 'Feature List', value: 'featureList'},
          {title: 'Image with Text', value: 'imageText'},
          {title: 'FAQ Section', value: 'faq'},
        ],
      },
      initialValue: 'text',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Main content (for text blocks)',
    },
    {
      name: 'text',
      title: 'Text Content',
      type: 'text',
      description: 'Simple text content (for CTAs, testimonials)',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Image for image-text blocks',
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
        },
        {
          name: 'link',
          title: 'Button Link',
          type: 'string',
          description: 'Anchor link (e.g., #contact) or URL',
        },
        {
          name: 'style',
          title: 'Button Style',
          type: 'string',
          options: {
            list: [
              {title: 'Primary', value: 'primary'},
              {title: 'Secondary', value: 'secondary'},
              {title: 'Outline', value: 'outline'},
            ],
          },
          initialValue: 'primary',
        },
      ],
      hidden: ({parent}) => parent?.blockType !== 'cta',
    },
    {
      name: 'testimonial',
      title: 'Testimonial Details',
      type: 'object',
      fields: [
        {
          name: 'author',
          title: 'Author Name',
          type: 'string',
        },
        {
          name: 'authorTitle',
          title: 'Author Title/Role',
          type: 'string',
        },
        {
          name: 'rating',
          title: 'Rating',
          type: 'number',
          description: 'Rating out of 5',
          validation: Rule => Rule.min(1).max(5),
        },
      ],
      hidden: ({parent}) => parent?.blockType !== 'testimonial',
    },
    {
      name: 'features',
      title: 'Features List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Feature Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Feature Description',
              type: 'text',
            },
            {
              name: 'icon',
              title: 'Icon Name',
              type: 'string',
              description: 'Icon identifier (for future icon system)',
            },
          ],
        },
      ],
      hidden: ({parent}) => parent?.blockType !== 'featureList',
    },
    {
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'question',
              title: 'Question',
              type: 'string',
            },
            {
              name: 'answer',
              title: 'Answer',
              type: 'array',
              of: [{type: 'block'}],
            },
          ],
        },
      ],
      hidden: ({parent}) => parent?.blockType !== 'faq',
    },
    {
      name: 'displaySettings',
      title: 'Display Settings',
      type: 'object',
      fields: [
        {
          name: 'backgroundColor',
          title: 'Background Color',
          type: 'string',
          options: {
            list: [
              {title: 'White', value: 'white'},
              {title: 'Gray', value: 'gray'},
              {title: 'Blue', value: 'blue'},
            ],
          },
          initialValue: 'white',
        },
        {
          name: 'textAlignment',
          title: 'Text Alignment',
          type: 'string',
          options: {
            list: [
              {title: 'Left', value: 'left'},
              {title: 'Center', value: 'center'},
              {title: 'Right', value: 'right'},
            ],
          },
          initialValue: 'left',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      blockType: 'blockType',
    },
    prepare({title, blockType}) {
      return {
        title: title || 'Untitled Block',
        subtitle: blockType ? `Type: ${blockType}` : '',
      }
    },
  },
}
