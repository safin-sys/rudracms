export default {
    name: 'about',
    type: 'document',
    fields: [
        {
            name: 'heroTitle',
            type: 'string'
        },
        {
            name: 'paragraphList',
            type: 'array',
            of: [
                {
                    name: 'about',
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            type: 'string'
                        },
                        {
                            name: 'description',
                            type: 'string'
                        }
                    ]
                }
            ]
        }
    ],
    preview: {
        select: {
            title: 'heroTitle'
        }
    }
}