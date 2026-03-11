---
sidebar: true
---

<script setup>
    import PluginMeta from '../../.vitepress/components/PluginMeta.vue'
    import ChatBubble from '../../.vitepress/components/ChatBubble.vue';
</script>

<PluginMeta />


## 详细功能描述


在群聊中，回复一张表情包“给我图”，机器人就会发送可保存的表情包原图。


<ClientOnly>
  <ChatBubble :messages="[
    { userClass: 'user-1', img: 'https://www.minebbs.com/data/resource_icons/15/15634.jpg?1773160391' },
    { userClass: 'user-2',  img: 'https://www.minebbs.com/data/resource_icons/15/15634.jpg?1773160391',text: `给我图` },
    { userClass: 'user-1', img: 'https://www.minebbs.com/data/resource_icons/15/15634.jpg?1773160391' },
  ]" />
</ClientOnly> 
