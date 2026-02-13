export default {
  name: 'treatmentApproach',
  title: 'Treatment Approach',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Therapy Type Name',
      type: 'string',
      validation: Rule => Rule.required(),
      description: 'e.g., Cognitive Behavioral (CBT), Art Therapy, etc.',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
    },
  },
}
