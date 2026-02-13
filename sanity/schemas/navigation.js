export default {
  name: 'navigation',
  title: 'Navigation Menu',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Menu Title',
      type: 'string',
      description: 'Internal name for this navigation menu',
      initialValue: 'Main Navigation',
    },
    {
      name: 'items',
      title: 'Menu Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: Rule => Rule.required(),
            },
            {
              name: 'linkType',
              title: 'Link Type',
              type: 'string',
              options: {
                list: [
                  {title: 'Anchor Link (same page)', value: 'anchor'},
                  {title: 'Internal Page', value: 'internal'},
                  {title: 'External URL', value: 'external'},
                ],
                layout: 'radio',
              },
              initialValue: 'anchor',
            },
            {
              name: 'anchor',
              title: 'Anchor ID',
              type: 'string',
              description: 'e.g., #about, #contact (include the #)',
              hidden: ({parent}) => parent?.linkType !== 'anchor',
            },
            {
              name: 'internalPage',
              title: 'Internal Page',
              type: 'string',
              hidden: ({parent}) => parent?.linkType !== 'internal',
            },
            {
              name: 'externalUrl',
              title: 'External URL',
              type: 'url',
              hidden: ({parent}) => parent?.linkType !== 'external',
            },
            {
              name: 'openInNewTab',
              title: 'Open in New Tab',
              type: 'boolean',
              initialValue: false,
              hidden: ({parent}) => parent?.linkType !== 'external',
            },
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'linkType',
            },
            prepare({title, subtitle}) {
              return {
                title,
                subtitle: subtitle ? `Link: ${subtitle}` : '',
              }
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
    prepare({title}) {
      return {
        title: title || 'Navigation Menu',
      }
    },
  },
}
