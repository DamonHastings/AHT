// V3 Page Components - therapist-homepage-v3.html design
// These components map to the v3 design system React components

export const heroV3Component = {
  name: 'heroV3Component',
  title: 'V3 Hero',
  type: 'object',
  fields: [
    { name: 'kickerText', title: 'Kicker', type: 'string', initialValue: 'Expressive Arts Therapy · Davis, CA' },
    { name: 'heading', title: 'Heading', type: 'string', validation: Rule => Rule.required(), initialValue: "You don't have to find the words." },
    { name: 'headingEmphasis', title: 'Heading Emphasis (italic)', type: 'string', initialValue: 'words.' },
    { name: 'body', title: 'Body Text', type: 'text', rows: 4 },
    { name: 'primaryCtaText', title: 'Primary CTA Text', type: 'string', initialValue: 'Start with a free consultation' },
    { name: 'primaryCtaHref', title: 'Primary CTA Link', type: 'string', initialValue: '#' },
    { name: 'secondaryCtaText', title: 'Secondary CTA Text', type: 'string', initialValue: 'How it works →' },
    { name: 'secondaryCtaHref', title: 'Secondary CTA Link', type: 'string', initialValue: '#' },
  ],
  preview: {
    select: { heading: 'heading' },
    prepare: ({ heading }) => ({ title: 'V3 Hero', subtitle: heading }),
  },
};

export const pullQuoteV3Component = {
  name: 'pullQuoteV3Component',
  title: 'V3 Pull Quote',
  type: 'object',
  fields: [
    { name: 'eyebrow', title: 'Eyebrow', type: 'string', initialValue: 'a different kind of therapy' },
    { name: 'quote', title: 'Quote', type: 'text', rows: 3 },
    { name: 'body', title: 'Body', type: 'text', rows: 4 },
  ],
  preview: {
    select: { quote: 'quote' },
    prepare: ({ quote }) => ({ title: 'V3 Pull Quote', subtitle: quote?.substring(0, 50) }),
  },
};

export const whoIHelpV3Component = {
  name: 'whoIHelpV3Component',
  title: 'V3 Who I Help',
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
                  { title: 'Women', value: 'women' },
                  { title: 'SEED Scholars', value: 'seed' },
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
  preview: { prepare: () => ({ title: 'V3 Who I Help' }) },
};

export const theSpaceV3Component = {
  name: 'theSpaceV3Component',
  title: 'V3 The Space',
  type: 'object',
  fields: [
    { name: 'eyebrow', title: 'Eyebrow', type: 'string', initialValue: 'the studio' },
    { name: 'heading', title: 'Heading', type: 'string', initialValue: 'A room that feels like permission to breathe.' },
    { name: 'headingEmphasis', title: 'Heading Emphasis', type: 'string', initialValue: 'permission to breathe.' },
    { name: 'paragraphs', title: 'Paragraphs', type: 'array', of: [{ type: 'text', rows: 3 }] },
    { name: 'image', title: 'Room Image', type: 'image', options: { hotspot: true } },
    { name: 'photoTag', title: 'Photo Tag', type: 'string', initialValue: '✦ Davis, CA' },
  ],
  preview: { prepare: () => ({ title: 'V3 The Space' }) },
};

export const expressiveV3Component = {
  name: 'expressiveV3Component',
  title: 'V3 Expressive Arts',
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
  preview: { prepare: () => ({ title: 'V3 Expressive Arts' }) },
};

export const meetV3Component = {
  name: 'meetV3Component',
  title: 'V3 Meet / Profile',
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
  preview: { prepare: () => ({ title: 'V3 Meet / Profile' }) },
};

export const feelingsCheckInV3Component = {
  name: 'feelingsCheckInV3Component',
  title: 'V3 Feelings Check-In',
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
  preview: { prepare: () => ({ title: 'V3 Feelings Check-In' }) },
};

export const ctaV3Component = {
  name: 'ctaV3Component',
  title: 'V3 CTA',
  type: 'object',
  fields: [
    { name: 'heading', title: 'Heading', type: 'string', initialValue: 'Ready to find a different way in?' },
    { name: 'headingEmphasis', title: 'Heading Emphasis', type: 'string', initialValue: 'The first conversation is free.' },
    { name: 'subheading', title: 'Subheading', type: 'string', initialValue: '15-minute consultations · No commitment · Telehealth & in-person available' },
    { name: 'buttonText', title: 'Button Text', type: 'string', initialValue: 'Schedule a free consultation' },
    { name: 'buttonHref', title: 'Button Link', type: 'string', initialValue: '#' },
  ],
  preview: { prepare: () => ({ title: 'V3 CTA' }) },
};
