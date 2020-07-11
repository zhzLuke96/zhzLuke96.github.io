const sidebar = {
    // "/me/": [
    //     // "profile",
    //     // "project",
    //     // "github"
    // ],
    // "/web/": [
    //     "/web/vue/vue-press"
    // ]
}

const nav = [{
        text: '主页',
        link: '/'
    },
    {
        text: '关于',
        items: [{
            text: "resume",
            link: "/me/readme.md"
        }]
    },
    {
        text: 'Github',
        link: 'https://github.com/zhzLuke96'
    },
    {
        text: '🦎Rango',
        link: 'https://github.com/zhzLuke96/Rango'
    },
    {
        text: '🌿HerbJs',
        link: 'https://github.com/zhzLuke96/HerbJs'
    },
]

module.exports = {
    title: 'LuKr Zhang',
    description: '日々私たちが过ごしている日常は、実は奇迹の连続なのかもしれない。',
    head: [
        ['link', {
            rel: 'icon',
            href: 'https://github.com/fluidicon.png'
        }]
    ],
    // serviceWorker: true,
    themeConfig: {
        nav,
        sidebar,
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
    },
}