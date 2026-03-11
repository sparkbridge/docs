---
sidebar: true
---

<script setup>
    import PluginMeta from '../../.vitepress/components/PluginMeta.vue'
    import ChatBubble from '../../.vitepress/components/ChatBubble.vue';
</script>

<PluginMeta />


## 详细功能描述


在群聊中，你可以使用查ip xxxx 命令来查询ip地址的详细信息。


<ClientOnly>
  <ChatBubble :messages="[
    { userClass: 'user-2', text: '查ip 1.1.1.1' },
    { userClass: 'user-1', text: `🔍 IP归属地查询结果\n📍 地理信息：美国(us)\n📡 IP信息：1.1.1.1 (long_ip：16843009)\n📶 网络信息：运营商CloudflareDNS/DoH/DoT\n🌍 经纬度：-95.713, 37.090\n⏱️ 查询耗时：0秒 | 接口状态：200` }
  ]" />
</ClientOnly> 
