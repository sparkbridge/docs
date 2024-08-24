<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: '/public/spark.jpg',
    name: 'Spark酱',
    title: '团队吉祥物',
    links: [
      { icon: 'github', link: 'https://github.com/SparkBridge' }
    ]
  },
  {
    avatar: 'https://imgse.com/content/images/users/gMmSe/av_1650212479.jpg',
    name: 'Lition',
    title: '项目创死人',
    links: [
      { icon: 'github', link: 'https://github.com/Lition802' }
    ]
  },
  {
    avatar: 'https://s11.ax1x.com/2022/12/21/zO7I7d.png',
    name: 'Sbaoor',
    title: '行走的五十万',
    links: [
      { icon: 'github', link: 'https://github.com/Sbaoor-fly' }
    ]
  },
  {
    avatar: 'https://danieltoyama.fun/img/logo.svg',
    name: '户山兔兔',
    title: '一般路过普通兔子',
    links: [
      { icon: 'github', link: 'https://github.com/DanielToyama' }
    ]
  },
  {
    avatar: 'https://s21.ax1x.com/2024/08/23/pAFZtr8.jpg',
    name: 'luoQ',
    title: '一个中二开发者',
    links: [
      { icon: 'github', link: 'https://github.com/luoqing510' }
    ]
  },
  {
    avatar: 'https://s21.ax1x.com/2024/08/23/pAFeGFJ.png',
    name: 'QHMY',
    title: '我也是你们coding里的一环吗',
    links: [
      { icon: 'github', link: 'https://github.com/QHMY114514' }
    ]
  },
  {
    avatar: 'https://s21.ax1x.com/2024/08/23/pAFeNS1.jpg',
    name: '铭记',
    title: '小铭同学',
    links: [
      { icon: 'github', link: 'https://github.com/mingjigege' }
    ]
  },
  {
    avatar: 'https://s21.ax1x.com/2024/08/23/pAFedOK.jpg',
    name: '苹果',
    title: '不可以吃',
    links: [
      { icon: 'github', link: 'https://github.com/pingguo114514' }
    ]
  },
  {
    avatar: 'https://s21.ax1x.com/2024/08/23/pAFeDTe.png',
    name: 'Nekohachan5073',
    title: '是猫猫吖',
    links: [
      { icon: 'github', link: 'https://github.com/Nekohachan' }
    ]
  },
]
</script>

# 开发者们

<!-- ![](/static/boot.gif)  -->

<VPTeamMembers size="small" :members="members" />