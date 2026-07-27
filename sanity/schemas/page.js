// Main page document schema with flexible component builder

export default {
  name: 'page',
  title: 'Pages',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: Rule => Rule.required(),
      description: 'Internal title for the page',
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
      description: 'URL path for this page (e.g., "about" for /about)',
    },
    {
      name: 'seo',
      title: 'SEO & Social',
      type: 'seo',
      description:
        'Search + social settings for this page. Anything left blank falls back to the site-wide defaults in Site Settings.',
    },
    {
      name: 'template',
      title: 'Page Template',
      type: 'string',
      options: {
        list: [
          { title: 'Custom (Build with Components)', value: 'custom' },
          { title: 'Home Page', value: 'home' },
          { title: 'About Page', value: 'about' },
          { title: 'Services Page', value: 'services' },
          { title: 'Contact Page', value: 'contact' },
        ],
      },
      initialValue: 'custom',
      description: 'Use a template or build custom with components below',
    },
    {
      name: 'components',
      title: 'Page Components',
      type: 'array',
      of: [
        { type: 'heroBlock' },
        { type: 'pullQuoteBlock' },
        { type: 'whoIHelpBlock' },
        { type: 'theSpaceBlock' },
        { type: 'expressiveArtsBlock' },
        { type: 'meetBlock' },
        { type: 'feelingsCheckInBlock' },
        { type: 'faqBlock' },
        { type: 'feesBlock' },
        { type: 'ctaBlock' },
        { type: 'proseSectionBlock' },
        { type: 'spacerBlock' },
      ],
      description: 'Add and arrange components to build your page',
      hidden: ({ document }) => document?.template !== 'custom',
    },
    {
      name: 'showHeader',
      title: 'Show Site Header',
      type: 'boolean',
      initialValue: true,
      description: 'Display the site header/navigation',
    },
    {
      name: 'showFooter',
      title: 'Show Site Footer',
      type: 'boolean',
      initialValue: true,
      description: 'Display the site footer',
    },
    {
      name: 'published',
      title: 'Published',
      type: 'boolean',
      initialValue: false,
      description: 'Make this page visible on the website',
    },
    {
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      description: 'When this page was published',
    },
  ],
  orderings: [
    {
      title: 'Title, A-Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
    {
      title: 'Published Date, New',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
      published: 'published',
      template: 'template',
    },
    prepare({ title, slug, published, template }) {
      return {
        title: title,
        subtitle: `/${slug || 'no-slug'} • ${template} ${published ? '✓' : '(draft)'}`,
      };
    },
  },
};
