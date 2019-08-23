module.exports = {
    title: 'Документация',
    description: "Коллекция знаний по разработке сайтов",
    themeConfig: {
        nav: [
            { text: 'Плагины', link: '/plugins/' },
            { text: 'Знания', link: '/guide/' },
            { text: 'Gulp', link: '/gulp/' },
        ],
        sidebar: [
            // {
            //     title: 'Counter',
            //     collapsable: false,
            //     children: [
            //         '/counter/counter-app'
            //     ]
            // },
            {
                title: 'Знания',
                collapsable: false, 
                children: [
                    '/guide/metatags',
                    '/guide/html',
                    '/guide/css',
                    '/guide/email',
                    '/guide/bugs'
                ]
            },
            {
                title: 'Плагины',
                children: [
                    '/plugins/css/',
                    '/plugins/js/vanilla',
                    '/plugins/js/jquery',
                    '/plugins/nodejs/' 
                ]
            },
            {
                title: 'Инструменты', 
                collapsable: false,
                children: [
                    '/tools/browsers/',
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