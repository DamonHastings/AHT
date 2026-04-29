// Page builder blocks — map to site design system components

export const heroBlock = {
  name: 'heroBlock',
  title: 'Hero',
  type: 'object',
  fields: [
    {
      name: 'presentation',
      title: 'Layout style',
      type: 'string',
      description:
        'Expressive arts: split layout with kicker and two text links. Photo hero: design-system hero with optional backdrop, split image, or organic masked image.',
      options: {
        list: [
          { title: 'Expressive arts (kicker, two CTAs)', value: 'expressive' },
          { title: 'Photo hero', value: 'photo' },
        ],
        layout: 'radio',
      },
      initialValue: 'expressive',
    },
    {
      name: 'kickerText',
      title: 'Kicker',
      type: 'string',
      description: 'Shown above the headline for expressive layout; also supported on photo / organic hero.',
      initialValue: 'Expressive Arts Therapy · Davis, CA',
    },
    { name: 'heading', title: 'Heading', type: 'string', validation: Rule => Rule.required(), initialValue: "You don't have to find the words." },
    {
      name: 'headingEmphasis',
      title: 'Heading Emphasis (italic)',
      type: 'string',
      description: 'Substring rendered in terracotta italic (same as expressive hero).',
      initialValue: 'words.',
    },
    {
      name: 'body',
      title: 'Body Text',
      description: 'Expressive arts: main paragraph. Photo hero: subheading below the headline.',
      type: 'text',
      rows: 4,
    },
    { name: 'primaryCtaText', title: 'Primary CTA Text', type: 'string', initialValue: 'Start with a free consultation' },
    { name: 'primaryCtaHref', title: 'Primary CTA Link', type: 'string', initialValue: '#' },
    {
      name: 'secondaryCtaText',
      title: 'Secondary CTA Text',
      type: 'string',
      initialValue: 'How it works →',
    },
    {
      name: 'secondaryCtaHref',
      title: 'Secondary CTA Link',
      type: 'string',
      initialValue: '#',
    },
    {
      name: 'photoBackgroundImage',
      title: 'Photo hero — background image',
      type: 'image',
      options: { hotspot: true },
      hidden: ({ parent }) => (parent?.presentation ?? 'expressive') !== 'photo',
    },
    {
      name: 'photoVariant',
      title: 'Photo hero — layout variant',
      type: 'string',
      description: 'Organic: image in an animated soft mask; pick image column below.',
      options: {
        list: [
          { title: 'Backdrop (full-bleed + overlay)', value: 'overlay' },
          { title: 'Split (image + text grid)', value: 'split' },
          { title: 'Organic masked image', value: 'organic' },
        ],
        layout: 'radio',
      },
      initialValue: 'overlay',
      hidden: ({ parent }) => (parent?.presentation ?? 'expressive') !== 'photo',
    },
    {
      name: 'photoBlobSide',
      title: 'Photo hero — image column (organic only)',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
        ],
        layout: 'radio',
      },
      initialValue: 'right',
      hidden: ({ parent }) =>
        (parent?.presentation ?? 'expressive') !== 'photo' || parent?.photoVariant !== 'organic',
    },
    {
      name: 'photoOverlay',
      title: 'Photo hero — backdrop tint',
      type: 'string',
      description: 'Applies to backdrop and split layouts (organic hero uses a linen background, no tint).',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Dark', value: 'dark' },
          { title: 'Light', value: 'light' },
          { title: 'Burgundy', value: 'burgundy' },
          { title: 'Teal', value: 'teal' },
        ],
        layout: 'radio',
      },
      initialValue: 'dark',
      hidden: ({ parent }) => (parent?.presentation ?? 'expressive') !== 'photo',
    },
    {
      name: 'photoOverlayOpacity',
      title: 'Photo hero — tint strength',
      type: 'number',
      validation: Rule => Rule.min(0).max(1),
      initialValue: 0.4,
      hidden: ({ parent }) => (parent?.presentation ?? 'expressive') !== 'photo',
    },
    {
      name: 'photoTextAlignment',
      title: 'Photo hero — text alignment',
      description: 'Overlay and split layouts only. Organic / expressive-style hero is always left-aligned like the main expressive hero.',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Center', value: 'center' },
          { title: 'Right', value: 'right' },
        ],
        layout: 'radio',
      },
      initialValue: 'left',
      hidden: ({ parent }) =>
        (parent?.presentation ?? 'expressive') !== 'photo' || parent?.photoVariant === 'organic',
    },
    {
      name: 'photoHeight',
      title: 'Photo hero — height',
      type: 'string',
      options: {
        list: [
          { title: 'Small', value: 'small' },
          { title: 'Medium', value: 'medium' },
          { title: 'Large', value: 'large' },
          { title: 'Full screen', value: 'screen' },
        ],
        layout: 'radio',
      },
      initialValue: 'screen',
      hidden: ({ parent }) => (parent?.presentation ?? 'expressive') !== 'photo',
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      presentation: 'presentation',
      photoVariant: 'photoVariant',
    },
    prepare: ({ heading, presentation, photoVariant }) => {
      const isPhoto = (presentation ?? 'expressive') === 'photo';
      return {
        title: isPhoto ? 'Hero (photo)' : 'Hero (expressive)',
        subtitle: isPhoto && photoVariant ? `${heading} · ${photoVariant}` : heading,
      };
    },
  },
};

export const pullQuoteBlock = {
  name: 'pullQuoteBlock',
  title: 'Pull Quote',
  type: 'object',
  fields: [
    { name: 'eyebrow', title: 'Eyebrow', type: 'string', initialValue: 'a different kind of therapy' },
    { name: 'quote', title: 'Quote', type: 'text', rows: 3 },
    { name: 'body', title: 'Body', type: 'text', rows: 4 },
  ],
  preview: {
    select: { quote: 'quote' },
    prepare: ({ quote }) => ({ title: 'Pull Quote', subtitle: quote?.substring(0, 50) }),
  },
};

export const whoIHelpBlock = {
  name: 'whoIHelpBlock',
  title: 'Who I Help',
  type: 'object',
  fields: [
    { name: 'eyebrow', title: 'Eyebrow', type: 'string', initialValue: 'who I work with' },
    { name: 'heading', title: 'Heading', type: 'string', initialValue: 'Everyone deserves a way in.' },
    { name: 'headingEmphasis', title: 'Heading Emphasis', type: 'string', initialValue: 'way in.' },
    {
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'variant',
              title: 'Variant',
              type: 'string',
              options: {
                list: [
                  { title: 'Children', value: 'children' },
                  { title: 'Teens', value: 'teens' },
                  { title: 'Women / legacy', value: 'women' },
                  { title: 'Young adults', value: 'youngAdults' },
                  { title: 'Parents & co-parents', value: 'parents' },
                  { title: 'Grief & transitions', value: 'grief' },
                  { title: 'ADHD & neurodivergence', value: 'adhd' },
                  { title: 'Anxiety & stress', value: 'anxiety' },
                  { title: 'SEED Scholars', value: 'seed' },
                  { title: 'Groups (forming)', value: 'groups' },
                ],
              },
            },
            { name: 'tag', title: 'Tag', type: 'string' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'body', title: 'Body', type: 'text', rows: 4 },
            { name: 'linkText', title: 'Link Text', type: 'string' },
            { name: 'linkHref', title: 'Link URL', type: 'string' },
          ],
          preview: {
            select: { title: 'title' },
            prepare: ({ title }) => ({ title }),
          },
        },
      ],
    },
  ],
  preview: { prepare: () => ({ title: 'Who I Help' }) },
};

export const theSpaceBlock = {
  name: 'theSpaceBlock',
  title: 'The Space',
  type: 'object',
  fields: [
    { name: 'eyebrow', title: 'Eyebrow', type: 'string', initialValue: 'the studio' },
    { name: 'heading', title: 'Heading', type: 'string', initialValue: 'A room that feels like permission to breathe.' },
    { name: 'headingEmphasis', title: 'Heading Emphasis', type: 'string', initialValue: 'permission to breathe.' },
    { name: 'paragraphs', title: 'Paragraphs', type: 'array', of: [{ type: 'text', rows: 3 }] },
    { name: 'image', title: 'Room Image', type: 'image', options: { hotspot: true } },
    { name: 'photoTag', title: 'Photo Tag', type: 'string', initialValue: '✦ Davis, CA' },
  ],
  preview: { prepare: () => ({ title: 'The Space' }) },
};

export const expressiveArtsBlock = {
  name: 'expressiveArtsBlock',
  title: 'Expressive Arts',
  type: 'object',
  fields: [
    { name: 'eyebrow', title: 'Eyebrow', type: 'string', initialValue: 'the approach' },
    { name: 'heading', title: 'Heading', type: 'string', initialValue: 'Therapy that makes something with the mess.' },
    { name: 'paragraphs', title: 'Paragraphs', type: 'array', of: [{ type: 'text', rows: 4 }] },
    {
      name: 'modalities',
      title: 'Modalities',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'detail', title: 'Detail', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'quotes',
      title: 'Testimonial Quotes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'text', title: 'Quote Text', type: 'text', rows: 3 },
            { name: 'attrib', title: 'Attribution', type: 'string' },
          ],
        },
      ],
    },
  ],
  preview: { prepare: () => ({ title: 'Expressive Arts' }) },
};

export const meetBlock = {
  name: 'meetBlock',
  title: 'Meet / Profile',
  type: 'object',
  fields: [
    { name: 'eyebrow', title: 'Eyebrow', type: 'string', initialValue: 'a little about me' },
    { name: 'heading', title: 'Heading', type: 'string' },
    { name: 'headingEmphasis', title: 'Heading Emphasis (name)', type: 'string' },
    { name: 'paragraphs', title: 'Paragraphs', type: 'array', of: [{ type: 'text', rows: 4 }] },
    { name: 'credentials', title: 'Credentials', type: 'array', of: [{ type: 'string' }] },
    { name: 'badgeText', title: 'Badge Text (e.g. LMFT Davis, CA)', type: 'string' },
    { name: 'image', title: 'Photo', type: 'image', options: { hotspot: true } },
  ],
  preview: { prepare: () => ({ title: 'Meet / Profile' }) },
};

export const feelingsCheckInBlock = {
  name: 'feelingsCheckInBlock',
  title: 'Feelings Check-In',
  type: 'object',
  fields: [
    { name: 'eyebrow', title: 'Eyebrow', type: 'string', initialValue: 'a moment for you' },
    { name: 'heading', title: 'Heading', type: 'string', initialValue: 'How are you feeling right now?' },
    { name: 'subheading', title: 'Subheading', type: 'string', initialValue: 'Choose a color. No explanation needed.' },
    {
      name: 'swatches',
      title: 'Swatches',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'color', title: 'Color (CSS var)', type: 'string', description: 'e.g. var(--terracotta)' },
            { name: 'feel', title: 'Feeling Label', type: 'string' },
            { name: 'reply', title: 'Reply Message', type: 'text', rows: 2 },
          ],
        },
      ],
    },
  ],
  preview: { prepare: () => ({ title: 'Feelings Check-In' }) },
};

export const ctaBlock = {
  name: 'ctaBlock',
  title: 'CTA',
  type: 'object',
  fields: [
    { name: 'heading', title: 'Heading', type: 'string', initialValue: 'Ready to find a different way in?' },
    { name: 'headingEmphasis', title: 'Heading Emphasis', type: 'string', initialValue: 'The first conversation is free.' },
    { name: 'subheading', title: 'Subheading', type: 'string', initialValue: '15-minute consultations · No commitment · Telehealth & in-person available' },
    { name: 'buttonText', title: 'Button Text', type: 'string', initialValue: 'Schedule a free consultation' },
    { name: 'buttonHref', title: 'Button Link', type: 'string', initialValue: '#' },
  ],
  preview: { prepare: () => ({ title: 'CTA' }) },
};

export const proseSectionBlock = {
  name: 'proseSectionBlock',
  title: 'Prose section',
  type: 'object',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
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
      initialValue: 'left',
    },
  ],
  preview: {
    select: { title: 'title' },
    prepare: ({ title }) => ({ title: title || 'Prose section' }),
  },
};

export const spacerBlock = {
  name: 'spacerBlock',
  title: 'Spacer',
  type: 'object',
  fields: [
    {
      name: 'size',
      title: 'Size',
      type: 'string',
      options: {
        list: [
          { title: 'Small', value: 'sm' },
          { title: 'Medium', value: 'md' },
          { title: 'Large', value: 'lg' },
          { title: 'Extra large', value: 'xl' },
        ],
      },
      initialValue: 'md',
    },
  ],
  preview: { prepare: () => ({ title: 'Spacer' }) },
};
