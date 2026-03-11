---
title: 插件列表
sidebar: false
---

<script setup>
// 1. 局部导入你的卡片组件
// ⚠️ 注意：这里的路径请根据 store.md 和 PluginCard.vue 的实际相对位置进行修改！
// 比如如果 store.md 在 docs/pages 目录下，而组件在 docs/components 目录下，那就是 '../components/PluginCard.vue'
import PluginCard from '../.vitepress/components/PluginCard.vue'
</script>

# 🧩 插件市场

欢迎来到 **SparkBridge3 插件中心**。在这里，你可以发现由官方和活跃社区开发者提供的各种强大扩展，为你的自动化控制台注入无限可能。


<PluginCard />

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
