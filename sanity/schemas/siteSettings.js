export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
      description: 'The main title of the website',
      validation: Rule => Rule.required(),
    },
    {
      name: 'homePage',
      title: 'Home Page',
      type: 'reference',
      to: [{ type: 'page' }],
      description: 'Select the page to display at the root URL (/)',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'text',
      description: 'Meta description for SEO',
    },
    {
      name: 'logo',
      title: 'Site Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Image for social media sharing',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      validation: Rule => Rule.email(),
    },
    {
      name: 'contactPhone',
      title: 'Contact Phone',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Business Address',
      type: 'object',
      fields: [
        {
          name: 'street',
          title: 'Street Address',
          type: 'string',
        },
        {
          name: 'city',
          title: 'City',
          type: 'string',
        },
        {
          name: 'state',
          title: 'State',
          type: 'string',
        },
        {
          name: 'zipCode',
          title: 'Zip Code',
          type: 'string',
        },
      ],
    },
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'reference',
      to: [{ type: 'socialLinks' }],
    },
    {
      name: 'footer',
      title: 'Footer Content',
      type: 'reference',
      to: [{ type: 'footerContent' }],
    },
    {
      name: 'navigation',
      title: 'Navigation Menu',
      type: 'reference',
      to: [{ type: 'navigation' }],
    },
    {
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        {
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{ type: 'string' }],
        },
        {
          name: 'author',
          title: 'Author',
          type: 'string',
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
      }
    },
  },
}
