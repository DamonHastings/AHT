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
    },
    {
      name: 'contactPhone',
      title: 'Contact Phone',
      type: 'string',
    },
    {
      name: 'bookingUrl',
      title: 'Google Booking URL',
      type: 'url',
      description:
        'Google Calendar Appointment Schedule link (e.g. https://calendar.app.google/...). When set, the "Free consultation" button opens this booking page; intake questions should be configured as custom questions in the Google booking page itself.',
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
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'LinkedIn', value: 'linkedin' },
                  { title: 'Twitter', value: 'twitter' },
                  { title: 'YouTube', value: 'youtube' },
                ],
              },
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
            },
          ],
          preview: {
            select: {
              platform: 'platform',
              url: 'url',
            },
            prepare({ platform, url }) {
              return {
                title: platform,
                subtitle: url,
              };
            },
          },
        },
      ],
    },
    {
      name: 'businessName',
      title: 'Business Name (Footer)',
      type: 'string',
      description: 'Business name displayed in footer',
      initialValue: 'Arielle Hastings Psychotherapy',
    },
    {
      name: 'copyrightText',
      title: 'Copyright Text (Footer)',
      type: 'string',
      description: 'Copyright notice displayed in footer',
      initialValue: '© 2026 Arielle Hastings, LMFT. All Rights Reserved.',
    },
    {
      name: 'credentials',
      title: 'Credentials',
      type: 'string',
      description: 'Professional credentials, e.g. "Licensed Marriage & Family Therapist"',
      initialValue: 'Licensed Marriage & Family Therapist',
    },
    {
      name: 'licenseNumber',
      title: 'License Number',
      type: 'string',
      description: 'LMFT license number (shown in footer and SEO structured data)',
    },
    {
      name: 'supervisorInfo',
      title: 'Supervisor Info (if applicable)',
      type: 'string',
      description: 'For associates/trainees, e.g. "Supervised by Jane Doe, LMFT #00000". Leave blank if not applicable.',
    },
    {
      name: 'geo',
      title: 'Geo Coordinates (SEO)',
      type: 'object',
      description: 'Latitude/longitude for local-business structured data (optional)',
      fields: [
        { name: 'lat', title: 'Latitude', type: 'number' },
        { name: 'lng', title: 'Longitude', type: 'number' },
      ],
    },
    {
      name: 'fees',
      title: 'Fees & Payment',
      type: 'object',
      description: 'Shown in the "Investment & fit" section on the home page. Leave a field blank to hide that line.',
      fields: [
        {
          name: 'sessionFee',
          title: 'Session Fee',
          type: 'string',
          description: 'e.g. "$180 per 50-minute session". Leave blank to show "shared during your free consultation".',
        },
        {
          name: 'consultNote',
          title: 'Consultation Note',
          type: 'string',
          initialValue: 'Free 15-minute phone consultation',
        },
        {
          name: 'paymentNote',
          title: 'Payment / Insurance Note',
          type: 'text',
          rows: 3,
          initialValue:
            "I'm an out-of-network provider. I can provide a monthly superbill (a detailed receipt) you can submit to your insurance for possible partial reimbursement — check your plan for out-of-network mental health benefits.",
        },
        {
          name: 'slidingScaleNote',
          title: 'Sliding Scale Note',
          type: 'text',
          rows: 2,
          initialValue:
            'A limited number of reduced-fee / sliding-scale spots are available. If cost is a barrier, please mention it when you reach out — we can talk it through.',
        },
      ],
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
