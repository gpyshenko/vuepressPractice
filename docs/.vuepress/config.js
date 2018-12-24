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
                title: 'Знания',
                collapsable: false, 
                children: [
                    '/guide/metatags',
                    '/guide/html',
                    '/guide/css',
                    '/guide/bugs'
                ]
            },
            {
                title: 'Плагины',
                children: [
                    '/plugins/js/vanilla',
                    '/plugins/js/jquery'
                ]
            },
            {
                title: 'Инструменты', 
                collapsable: false,
                children: [
                    '/tools/console/',
                    '/tools/npm/',
                    '/tools/redactors/',
                    '/tools/git/'
                ]
            },
            {
                title: 'Gulp',
                collapsable: false,
                children: [
                    '/gulp/installation',
                    '/gulp/usage',
                    '/gulp/directory-structure',
                    '/gulp/plugins'
                ]
            },
            { 
                title: 'Packages', 
                collapsable: false,
                children: [
                    '/packages/npm/' 
                ]
            }
        ]
    }
}