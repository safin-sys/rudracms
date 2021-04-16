export default {
  name: 'soft',
  title: 'Software',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      type: 'string'
    },
    {
      name: 'language',
      type: 'string'
    },
    {
      name: 'platform',
      type: 'string'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'screenshots',
      type: 'array',
      of: [
        {
          name: 'screenshot',
          type: 'object',
          fields: [
            {
              name: 'image',
              type: 'image'
            },
            {
              name: 'alt',
              description: 'This is for better SEO',
              type: 'string'
            }
          ]
        }
      ]
    }     
  ],

  preview: {
    select: {
      title: 'title'
    }
  },
}
