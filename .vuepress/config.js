// .vuepress/config.js
module.exports = {
    title: 'awesome-bookmarks',
    themeConfig: {
        base: '/awesome/',     // 仓库名字是press
        sidebar: 'auto',
        nav: [
            { text: '首页', link: '/' },                      // 根路径
            { text: '设计资源', link: '/page/design/index.md' }, // 设计资源
            { text: '前端资源', link: '/page/front-end/index.md' }, // 设计资源
            { text: '软件资源', link: '/page/software/index.md' }, // 设计资源
            { text: 'Google', link: 'https://google.com' }, // 外部链接
            // // 下拉列表显示分组
            // {
            //     text: '设计资源',
            //     items: [
            //         {
            //             text: '算法',
            //             items: [
            //                 { text: '冒泡', link: '/page-a/a' },
            //                 { text: '快速', link: '/language/japanese' }
            //             ]
            //         },
            //         {
            //             text: '设计模式',
            //             items: [
            //                 { text: '工厂', link: '/language/chinese' },
            //                 { text: '单例', link: '/language/chinese'},
            //             ]
            //         },
            //     ]
            // }
        ]
    }
}
