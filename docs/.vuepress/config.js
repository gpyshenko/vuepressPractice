module.exports = {
    title: 'Документация',
    description: "A demo documentation using VuePress",
    themeConfig: {
        nav: [
            { text: 'COUNTER', link: '/counter/' },
            { text: 'GUIDE', link: '/guide/' },
            { text: 'GULP', link: '/gulp/' },
        ],
        sidebar: [
            {
                title: 'Counter',
                collapsable: false,
                children: [
                    '/counter/counter-app'
                ]
            },
            {
                title: 'API Guide',
                collapsable: false, 
                children: [
                    '/guide/guide',
                    '/guide/api'
                ]
            }
        ]
    }
}