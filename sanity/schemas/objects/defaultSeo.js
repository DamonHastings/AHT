// Site-wide SEO defaults + title template. Lives on the siteSettings singleton.
// Every page's SEO resolves against these (frontend: resolveSeo). The `%s`
// placeholder in titleTemplate is replaced by each page's own title.

export default {
  name: 'defaultSeo',
  title: 'Default SEO & Social',
  type: 'object',
  options: { collapsible: true, collapsed: false },
  fields: [
    {
      name: 'titleTemplate',
      title: 'Title Template',
      type: 'string',
      description:
        'How page titles are framed. Use %s for the page’s own title, e.g. "%s | Arielle Rae Hastings, LMFT". The home/default title below is used as-is (no template).',
      initialValue: '%s | Arielle Rae Hastings, LMFT',
    },
    {
      name: 'defaultTitle',
      title: 'Default / Home Title',
      type: 'string',
      description:
        'Used for the home page and whenever a page has no Meta Title of its own. Written out in full (the template is not applied to it).',
      validation: (Rule) =>
        Rule.max(70).warning('Keep the default title concise — long titles get truncated.'),
    },
    {
      name: 'defaultDescription',
      title: 'Default Meta Description',
      type: 'text',
      rows: 3,
      description: 'Used whenever a page has no Meta Description of its own.',
      validation: (Rule) =>
        Rule.max(160).warning('Descriptions over 160 characters get truncated in search results.'),
    },
    {
      name: 'defaultOgImage',
      title: 'Default Social Share Image',
      type: 'image',
      options: { hotspot: true },
      description:
        'Used when a page has no share image of its own. Ideally 1200×630.',
    },
    {
      name: 'twitterHandle',
      title: 'Twitter/X Handle',
      type: 'string',
      description: 'Optional, including the @ (e.g. @ariellerae). Used for the twitter:site tag.',
    },
    {
      name: 'author',
      title: 'Author / Person Name',
      type: 'string',
      description: 'Used in structured data (schema.org Person). e.g. "Arielle Rae Hastings".',
    },
    {
      name: 'keywords',
      title: 'Site-wide Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      description: 'Optional. Minor ranking value; kept for reference.',
    },
  ],
}
