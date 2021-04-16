export default {
    name: 'footer',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string'
        },
        {
            name: 'description',
            type: 'string'
        },
        {
            name: 'socials',
            type: 'array',
            of: [
                {
                    name: 'twitter',
                    type: 'object', 
                    fields: [
                        {
                            name: 'link',
                            type: 'url'
                        }
                    ]
                },
                {
                    name: 'github',
                    type: 'object', 
                    fields: [
                        {
                            name: 'link',
                            type: 'url'
                        }
                    ]
                },
                {
                    name: 'instagram',
                    type: 'object', 
                    fields: [
                        {
                            name: 'link',
                            type: 'url'
                        }
                    ]
                },
            ]
        },
        {
            name: 'getInTouch',
            type: 'array',
            of: [
                {
                    name: 'phone',
                    type: 'object', 
                    fields: [
                        {
                            name: 'phone',
                            type: 'string'
                        }
                    ]
                },
                {
                    name: 'mail',
                    type: 'object', 
                    fields: [
                        {
                            name: 'mail',
                            type: 'string'
                        }
                    ]
                },
                {
                    name: 'address',
                    type: 'object', 
                    fields: [
                        {
                            name: 'address',
                            type: 'string'
                        }
                    ]
                },
            ]
        },
        {
            name: 'popularTags',
            type: 'array',
            of: [
                {
                    name: 'tag',
                    type: 'string'
                }
            ]
        },
        {
            name: 'footerFooter',
            type: 'string'
        },
        {
            name: 'copyright',
            description: '"© <year>" will be automatically added',
            type: 'string'
        }
    ]
}