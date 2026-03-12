import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SparkBridge3",
  description: "Neo QQ bot system",
  head: [
    // 添加图标
    ['link', { rel: 'icon', href: '/logo_round.jpg' }],
    ['script', { src: 'https://umami.lition.top/script.js', 'data-website-id':"db2f6ffc-a0a6-4a8f-8bfe-8c0bd30cf3a3" }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo_round.jpg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/user/info' },
      { text: '开发参考', link: '/dev/setup' },
      { text: '关于我们', link: '/about/us' },
      { text: '更新日志', link: '/update/log' },
      {
        text: '资源',
        items: [
          { text: '插件商店', link: '/plugin/store' },
          { text: '插件文档', link: '/plugin/index' }
        ]
      }
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
            { text: "正则表达式", link: "/user/regex" },
            { text: '常见问题', link: '/user/prob' },
            // { text: '插件市场', link: '/user/store' },

          ]
        }
      ],
      // 当用户位于 `dev` 目录时，会显示此侧边栏
      '/dev/': [
        {
          text: '开发参考',
          items: [
            { text: '环境部署', link: '/dev/setup' },
            { text: '沙箱模式', link: '/dev/sandbox' },
            { text: "开发工具", link: "/dev/tools" },
            { text: "文件结构", link: "/dev/structure" },
            { text: "插件入口", link: "/dev/maingate" },
            { text: "监听器", link: "/dev/listener" },
            { text: "文件系统", link: "/dev/file" },
            { text: "网页配置面板", link: "/dev/webpanel" },
            { text: "Log记录器", link: "/dev/logger" },
            { text: "CQ客户端API", link: "/dev/qc_api" },
             { text: "Web页面", link: "/dev/webpage" },
            { text: "事件系统", link: "/dev/event" },
            { text: "正则表达式命令", link: "/dev/regex" },
            { text: "spark类", link: "/dev/spark" },
            { text: "导出api", link: "/dev/ex_api" },
            { text: "发布插件到官方市场", link: "/dev/store" },
            { text: "从旧版本升级", link: "/dev/upto3" },
          ]
        }
      ],
      '/plugin/':[
        {
          text: '资源中心',
          items: [
            { text: "ping", link: "/plugin/docs/ping" },
            { text: "ccb", link: "/plugin/docs/ccb" },
            { text: "motd", link: "/plugin/docs/motd" },
            { text: "getimg", link: "/plugin/docs/getimg" },
          ]
        }
      ],
      '/about/': [
        {
          text: '关于',
          items: [
            { text: '本项目', link: '/about/us' },
            { text: '开发者们', link: '/about/devs' }
          ]
        }
      ],
      
  },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sparkbridge' }
    ],

    footer: {
      message: '此软件与 Mojang Studio、网易、Microsoft 没有从属关系。',
      copyright: 'Copyright © 2022-2026 SparkBridge All Rights Reserved.'
    },
    search: {
      provider: 'local'
    }
  }
})
