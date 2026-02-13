export default {
  name: 'therapist',
  title: 'Therapist Profile',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'credentials',
      title: 'Credentials',
      type: 'string',
      description: 'e.g., LMFT',
      validation: Rule => Rule.required(),
    },
    {
      name: 'licenseNumber',
      title: 'License Number',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.email(),
    },
    {
      name: 'verified',
      title: 'Verified',
      type: 'boolean',
      description: 'Verified badge display',
      initialValue: true,
    },
    {
      name: 'welcomeMessage',
      title: 'Welcome Message',
      type: 'text',
      description: 'Brief welcome message displayed in hero section',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Main biography and approach description',
    },
    {
      name: 'philosophy',
      title: 'Therapeutic Philosophy',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Personal philosophy and approach description',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'credentials',
      media: 'profileImage',
    },
  },
}
