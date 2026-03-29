---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "SparkBridge3"
  text: "✨使用Onebot协议的BDS机器人适配器✨"
  tagline: neo bridge!
  actions:
    - theme: brand
      text: 安装指南
      link: /user/install
    - theme: alt
      text: 开发文档
      link: /dev/setup
    - theme: alt
      text: GitHub
      link: https://github.com/SparkBridge/SparkBridge3
  image:
    src: /logo_round.jpg
    alt: Spark

features:
  - title: 轻量级、模块化和多功能
    details: 支持插件接入，导出的API可供插件开发者自由定制，满足不同需求
  - title: 基于 onebot 协议开发
    details: 使用支持最广的Onebot协议，今日仍然可用的MCBot
  - title: 提供内核分离方案
    details: 可以进行二次开发脱离 BDS 进行运行
---


<script setup>
import SponsorList from './.vitepress/components/SponsorList.vue'

// 这里定义你的赞助者数据，你也可以把它抽离到一个单独的 ts/json 文件中引入
const mySponsors = [
  {
    name: '123456788',
    avatar: 'https://s21.ax1x.com/2025/01/19/pEkaKYV.jpg',
    message: '',
    link: ''
  },
  {
    name: 'serika',
    avatar: 'https://s21.ax1x.com/2025/01/19/pEka3y4.jpg',
    message: 'Niko Niko 喵 喵，Niko Niko 喵 喵~',
    link: 'https://blog.ikgy.top/'
  },
  {
    name: '42',
    avatar: 'https://s21.ax1x.com/2025/01/19/pEkaUFx.jpg',
    message: '汀 汀 莱万汀!汀汀莱万汀~'
  },
  {
    name: '故渊',
    avatar: 'https://s21.ax1x.com/2025/01/19/pEkadfK.jpg',
    message: '低价游戏云出,官网:https://ai2019.com/aff/DMVBWDCX',
    link: 'https://ai2019.com/aff/DMVBWDCX'
  },
  {
    name: 'NeosRain',
    avatar: 'https://s41.ax1x.com/2026/03/09/peiGBi4.png',
    message: '想杀了微软TMD WindowsApps'
  },
  {
    name:"雪绘BOT团队",
    avatar: 'https://yukiebot.top/img/Yukie.ico',
    message: '为音游Orzmic设计的查分机器人'
  },{
    name: '慕昭悦',
    avatar: 'https://s41.ax1x.com/2026/03/29/pe1Hssg.jpg',
    message: 'XCD'}
]
</script>

## 我们的赞助者

<SponsorList :sponsors="mySponsors" />

### 成为我们的赞助者，只需10CNY ！

在我们的官网上留下您的个人信息，成为我们尊贵的赞助者。您的支持将助力我们继续前行，为您带来更多精彩内容。立即行动，加入我们吧！