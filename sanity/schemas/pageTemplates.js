// Page template schemas with pre-configured content structures

export const homePageTemplate = {
  name: 'homePageTemplate',
  title: 'Home Page Template',
  type: 'object',
  fields: [
    {
      name: 'heroHeading',
      title: 'Hero Heading',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'heroSubheading',
      title: 'Hero Subheading',
      type: 'text',
      rows: 2,
    },
    {
      name: 'heroBackgroundImage',
      title: 'Hero Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'welcomeQuote',
      title: 'Welcome Quote',
      type: 'text',
      rows: 3,
    },
    {
      name: 'quoteAuthor',
      title: 'Quote Author',
      type: 'string',
    },
    {
      name: 'philosophyTitle',
      title: 'Philosophy Section Title',
      type: 'string',
      initialValue: 'My Philosophy',
    },
    {
      name: 'philosophyContent',
      title: 'Philosophy Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'philosophyImage',
      title: 'Philosophy Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'showFocusAreas',
      title: 'Show Focus Areas Section',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'showPersonalStatement',
      title: 'Show Personal Statement Section',
      type: 'boolean',
      initialValue: true,
    },
  ],
};

export const aboutPageTemplate = {
  name: 'aboutPageTemplate',
  title: 'About Page Template',
  type: 'object',
  fields: [
    {
      name: 'pageHeading',
      title: 'Page Heading',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'introText',
      title: 'Introduction Text',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'fullBiography',
      title: 'Full Biography',
      type: 'array',
      of: [{ type: 'block' }],
      validation: Rule => Rule.required(),
    },
    {
      name: 'education',
      title: 'Education & Training',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'degree',
              title: 'Degree/Certification',
              type: 'string',
            },
            {
              name: 'institution',
              title: 'Institution',
              type: 'string',
            },
            {
              name: 'year',
              title: 'Year',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'showQualifications',
      title: 'Show Qualifications Section',
      type: 'boolean',
      initialValue: true,
    },
  ],
};

export const servicesPageTemplate = {
  name: 'servicesPageTemplate',
  title: 'Services Page Template',
  type: 'object',
  fields: [
    {
      name: 'pageHeading',
      title: 'Page Heading',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'introText',
      title: 'Introduction',
      type: 'text',
      rows: 4,
    },
    {
      name: 'services',
      title: 'Services Offered',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'serviceName',
              title: 'Service Name',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'array',
              of: [{ type: 'block' }],
            },
            {
              name: 'duration',
              title: 'Session Duration',
              type: 'string',
              description: 'e.g., "50 minutes"',
            },
            {
              name: 'fee',
              title: 'Fee',
              type: 'string',
              description: 'e.g., "$150" or "Sliding scale available"',
            },
          ],
        },
      ],
    },
    {
      name: 'showTreatmentApproach',
      title: 'Show Treatment Approach Section',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'showSpecialties',
      title: 'Show Specialties Section',
      type: 'boolean',
      initialValue: true,
    },
  ],
};

export const contactPageTemplate = {
  name: 'contactPageTemplate',
  title: 'Contact Page Template',
  type: 'object',
  fields: [
    {
      name: 'pageHeading',
      title: 'Page Heading',
      type: 'string',
      initialValue: 'Get in Touch',
    },
    {
      name: 'introText',
      title: 'Introduction',
      type: 'text',
      rows: 3,
    },
    {
      name: 'showContactForm',
      title: 'Show Contact Form',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'showMap',
      title: 'Show Location Map',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'officeHours',
      title: 'Office Hours',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'days',
              title: 'Days',
              type: 'string',
              description: 'e.g., "Monday - Friday"',
            },
            {
              name: 'hours',
              title: 'Hours',
              type: 'string',
              description: 'e.g., "9:00 AM - 5:00 PM"',
            },
          ],
        },
      ],
    },
    {
      name: 'additionalInfo',
      title: 'Additional Information',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Any additional contact information or instructions',
    },
  ],
};
