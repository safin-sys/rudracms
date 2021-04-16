export default {
    name: 'home',
    type: 'document',
    fields: [
        {
            name: 'heroText',
            type: 'string'
        },
        {
            name: 'skills',
            type: 'object',
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
                    name: 'skillList',
                    type: 'array',
                    of: [
                        {
                            name: 'skill',
                            type: 'object',
                            fields: [
                                {
                                    name: 'title',
                                    type: 'string'
                                },
                                {
                                    name: 'percent',
                                    type: 'number'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'myServices',
            type: 'object',
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
                    name: 'serviceList',
                    description: 'Icons will stay in the order: Windows, Article and Android.',
                    type: 'array',
                    of: [
                        {
                            name: 'service',
                            type: 'object',
                            fields: [
                                {
                                    name: 'serviceName',
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
            ]
        },
        {
            name: 'orderNow',
            type: 'object',
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
                    name: 'packageList',
                    type: 'array',
                    of: [
                        {
                            name: 'package',
                            type: 'object',
                            fields: [
                                {
                                    name: 'packageName',
                                    type: 'string'
                                },
                                {
                                    name: 'stars',
                                    type: 'number'
                                },
                                {
                                    name: 'price',
                                    type: 'string'
                                },
                                {
                                    name: 'words',
                                    type: 'string'
                                },
                                {
                                    name: 'currency',
                                    description: 'e.g., $/৳/€/£',
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
            ]
        },
        {
            name: 'letsTalk',
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