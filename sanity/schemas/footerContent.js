export default {
  name: 'footerContent',
  title: 'Footer Content',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Footer Title',
      type: 'string',
      description: 'Internal name for this footer',
      initialValue: 'Main Footer',
    },
    {
      name: 'copyrightText',
      title: 'Copyright Text',
      type: 'string',
      description: 'Copyright notice (year will be auto-added)',
      initialValue: 'Therapist Profile Website. All rights reserved.',
    },
    {
      name: 'licenseText',
      title: 'License Text',
      type: 'string',
      description: 'License information displayed below copyright',
    },
    {
      name: 'columns',
      title: 'Footer Columns',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Column Title',
              type: 'string',
            },
            {
              name: 'content',
              title: 'Content',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'text',
                      title: 'Text',
                      type: 'string',
                    },
                    {
                      name: 'link',
                      title: 'Link (optional)',
                      type: 'url',
                    },
                  ],
                  preview: {
                    select: {
                      title: 'text',
                    },
                  },
                },
              ],
            },
          ],
          preview: {
            select: {
              title: 'title',
            },
          },
        },
      ],
    },
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'reference',
      to: [{type: 'socialLinks'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title || 'Footer Content',
      }
    },
  },
}
