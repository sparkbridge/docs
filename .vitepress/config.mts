import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SparkBridge2",
  description: "all new Bridge",
  
  head: [['link', { rel: 'icon', href: 'https://sparkbridge.cn/static/spark.jpg' }]],
  themeConfig: {
    logo: '/static/spark.jpg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/user/install' },
      { text: '开发参考', link: '/dev/setup' },
      { text: '关于我们', link: '/about/us' }
    ],

    sidebar: {
      '/user/': [
        {
          text: '指南',
          collapsed: false,
          items: [
            { text: '什么是SparkBridge？', link: '/user/info' },
            { text: '快速开始', link: '/user/install' },
            { text: '配置项参考', link: '/user/conf' },
            { text: '主要功能', link: '/user/func' },
            {text :"正则表达式",link:"/user/regex"},
            { text: '常见问题', link: '/user/prob' },
            { text: '插件市场', link: '/user/store' },

          ]
        }
      ],

      // 当用户位于 `config` 目录时，会显示此侧边栏
      '/dev/': [
        {
          text: '开发参考',
          items: [
            { text: '环境部署', link: '/dev/setup' },
            { text: '沙箱模式', link: '/dev/sandbox' },
            {text :"文件结构",link:"/dev/structure"},
            {text :"插件入口",link:"/dev/maingate"},
            {text :"监听器",link:"/dev/listener"},
            {text :"文件系统",link:"/dev/file"},
            {text :"Log记录器",link:"/dev/logger"},
            {text :"CQ客户端API",link:"/dev/qc_api"},
            {text :"占位符",link:"/dev/placeholder"},
            {text :"事件系统",link:"/dev/event"},
            {text :"spark类",link:"/dev/spark"},
            {text :"导出api",link:"/dev/ex_api"},
          ]
        }
      ],

       // 当用户位于 `config` 目录时，会显示此侧边栏
       '/about/': [
        {
          text: '关于',
          items: [
            { text: '本项目', link: '/about/us' },
            { text: '开发者们', link: '/about/devs' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sparkbridge' }
    ],

    footer: {
      message: '此软件与 Mojang Studio、网易、Microsoft 没有从属关系。',
      copyright: 'Copyright © 2022-2024 SparkBridge All Rights Reserved.'
    },
    search: {
      provider: 'local'
    }
  }
})
