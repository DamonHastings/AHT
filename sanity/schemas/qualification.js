export default {
  name: 'qualification',
  title: 'Qualification',
  type: 'document',
  fields: [
    {
      name: 'education',
      title: 'Education',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'degree',
              title: 'Degree',
              type: 'string',
              description: 'e.g., Master of Arts, Counseling Psychology',
            },
            {
              name: 'school',
              title: 'School/Institution',
              type: 'string',
            },
            {
              name: 'specialization',
              title: 'Specialization',
              type: 'string',
              description: 'e.g., Expressive Arts',
            },
          ],
        },
      ],
    },
    {
      name: 'yearsInPractice',
      title: 'Years in Practice',
      type: 'number',
    },
    {
      name: 'livedExperience',
      title: 'Lived Experience',
      type: 'text',
      description: 'Personal background and experience description',
    },
  ],
  preview: {
    select: {
      school: 'education.0.school',
      degree: 'education.0.degree',
    },
    prepare({school, degree}) {
      return {
        title: degree || 'Qualification',
        subtitle: school || '',
      }
    },
  },
}
