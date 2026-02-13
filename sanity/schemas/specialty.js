export default {
  name: 'specialty',
  title: 'Specialty',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Specialty Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Top Specialty', value: 'top'},
          {title: 'Expertise Area', value: 'expertise'},
        ],
        layout: 'radio',
      },
      initialValue: 'expertise',
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
      subtitle: 'category',
    },
    prepare({title, subtitle}) {
      return {
        title,
        subtitle: subtitle === 'top' ? 'Top Specialty' : 'Expertise Area',
      }
    },
  },
}
