---
title: 插件列表
---

<script setup>
// 1. 局部导入你的卡片组件
// ⚠️ 注意：这里的路径请根据 store.md 和 PluginCard.vue 的实际相对位置进行修改！
// 比如如果 store.md 在 docs/pages 目录下，而组件在 docs/components 目录下，那就是 '../components/PluginCard.vue'
import PluginCard from '../.vitepress/components/PluginCard.vue'

// 2. 准备插件列表数据
const pluginList = [
  {
    id: 1,
    icon: '', // 可以填写真实图标的 URL
    title: 'sb3_bridgebase',
    author: '官方团队',
    desc: '提供兼容SparkBridge2的事件分发、信息分发转换服务',
    link: '#',
    tags: ['官方','已内置'] // 自动触发蓝色和橙色标签
  },
  {
    id: 2,
    icon: '', // 为空会自动显示首字母 "P"
    title: 'sb3_regex',
    author: '官方团队',
    desc: '提供正则引擎功能',
    link: '#',
    tags: ['官方','已内置'] // '推荐' 自动触发粉红色标签
  },
  {
    id: 3,
    icon: '',
    title: 'sb3_wl',
    author: '官方团队',
    desc: '提供白名单管理功能',
    link: '#',
    tags: ['官方','已内置'] // 默认灰色标签
  },
  {
    id: 4,
    icon: '',
    title: 'sb3_mc',
    author: '官方团队',
    desc: '提供与游戏内的交互功能',
    link: '#',
    tags: ['官方','已内置'] // 默认灰色标签
  },
  {
    id: 5,
    icon: 'https://www.minebbs.com/data/resource_icons/12/12508.jpg?1772874918',
    title: 'spark.bili-parser',
    author: 'Sbaoor',
    desc: '解析B站链接与小程序',
    link: 'https://www.minebbs.com/resources/spark-bili-parser.12508/',
    tags: ['热门'] // 默认灰色标签
  },
  {
    id: 6,
    icon: 'https://www.minebbs.com/data/resource_icons/5/5505.jpg?1772874981',
    title: 'spark.motd',
    author: 'Sbaoor',
    desc: '查询MC基岩版/Java版服务器信息',
    link: 'https://www.minebbs.com/resources/spark-motd-java.5505/',
    tags: [] // 默认灰色标签
  },
  {
    id: 7,
    icon: 'https://www.minebbs.com/data/resource_icons/10/10421.jpg?1772875265',
    title: 'spark.ccb',
    author: 'Lition',
    desc: '鉴别群聊中的CCB大手子',
    link: 'https://www.minebbs.com/resources/spark-motd-java.5505/',
    tags: [] // 默认灰色标签
  }
];
</script>

# 🧩 插件市场

欢迎来到 **SparkBridge3 插件中心**。在这里，你可以发现由官方和活跃社区开发者提供的各种强大扩展，为你的自动化控制台注入无限可能。

<div class="plugin-market-grid">
  <PluginCard 
    v-for="plugin in pluginList" 
    :key="plugin.id"
    :icon="plugin.icon"
    :title="plugin.title"
    :author="plugin.author"
    :desc="plugin.desc"
    :link="plugin.link"
    :tags="plugin.tags"
  />
</div>

<style scoped>
/* 4. 局部页面的样式，定义网格布局 */
.plugin-market-grid {
  display: grid;
  /* 响应式网格：卡片最小 280px，空间足够则自动增加列数 */
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 24px;
}
</style>