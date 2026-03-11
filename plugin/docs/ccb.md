---
sidebar: true
---

<script setup>
    import PluginMeta from '../../.vitepress/components/PluginMeta.vue'
    import ChatBubble from '../../.vitepress/components/ChatBubble.vue';
</script>

<PluginMeta />


## 详细功能描述


在群聊中，机器人会鉴别出哪些人是CCB领域大神。


<ClientOnly>
  <ChatBubble :messages="[
    { userClass: 'user-2', text: '老爷爷，我来给你踩踩背' },
    { userClass: 'user-1', text: `CCB领域大神` }
  ]" />
</ClientOnly> 
