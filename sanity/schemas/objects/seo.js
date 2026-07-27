// Reusable SEO object — embedded on every page-like document and used (as
// `defaultSeo`) for site-wide fallbacks in siteSettings. Keeping one shape means
// the frontend resolver (frontend/src/utils/seo.js → resolveSeo) can treat page
// and site SEO identically.

export default {
  name: 'seo',
  title: 'SEO & Social',
  type: 'object',
  options: { collapsible: true, collapsed: true },
  fields: [
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description:
        'Title shown in search results and browser tabs. Aim for 50–60 characters. Leave blank to use the page title with the site title template.',
      validation: (Rule) =>
        Rule.max(60).warning('Titles over 60 characters get truncated in search results.'),
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description:
        'Summary shown under the title in search results. Aim for 120–160 characters. Falls back to the site default description.',
      validation: (Rule) =>
        Rule.max(160).warning('Descriptions over 160 characters get truncated in search results.'),
    },
    {
      name: 'ogImage',
      title: 'Social Share Image',
      type: 'image',
      options: { hotspot: true },
      description:
        'Shown when this page is shared on social media (Facebook, LinkedIn, iMessage, etc.). Ideally 1200×630. Falls back to the site default share image.',
    },
    {
      name: 'canonicalUrl',
      title: 'Canonical URL (override)',
      type: 'url',
      description:
        'Optional. Only set this to point search engines at a different canonical page (e.g. duplicate content). Leave blank to use this page’s own URL.',
    },
    {
      name: 'noIndex',
      title: 'Hide from search engines',
      type: 'boolean',
      initialValue: false,
      description:
        'When on, adds a noindex tag and excludes this page from the sitemap. Use for thank-you pages, drafts, or private pages.',
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      description:
        'Optional. Minor ranking value today, but kept for reference / internal use.',
    },
  ],
}
