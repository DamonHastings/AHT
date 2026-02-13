export default {
  name: 'socialLinks',
  title: 'Social Media Links',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Internal name for this set of social links',
      initialValue: 'Social Media Links',
    },
    {
      name: 'links',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  {title: 'Facebook', value: 'facebook'},
                  {title: 'Twitter', value: 'twitter'},
                  {title: 'Instagram', value: 'instagram'},
                  {title: 'LinkedIn', value: 'linkedin'},
                  {title: 'YouTube', value: 'youtube'},
                  {title: 'Pinterest', value: 'pinterest'},
                  {title: 'TikTok', value: 'tiktok'},
                  {title: 'Psychology Today', value: 'psychologyToday'},
                  {title: 'Other', value: 'other'},
                ],
              },
              validation: Rule => Rule.required(),
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: Rule => Rule.required(),
            },
            {
              name: 'label',
              title: 'Label (for "Other" platform)',
              type: 'string',
              hidden: ({parent}) => parent?.platform !== 'other',
            },
          ],
          preview: {
            select: {
              platform: 'platform',
              url: 'url',
              label: 'label',
            },
            prepare({platform, url, label}) {
              return {
                title: label || platform || 'Social Link',
                subtitle: url,
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
      links: 'links',
    },
    prepare({title, links}) {
      return {
        title: title || 'Social Media Links',
        subtitle: links ? `${links.length} link${links.length !== 1 ? 's' : ''}` : 'No links',
      }
    },
  },
}
