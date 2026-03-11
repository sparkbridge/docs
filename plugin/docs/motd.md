---
sidebar: true
---

<script setup>
    import PluginMeta from '../../.vitepress/components/PluginMeta.vue'
    import ChatBubble from '../../.vitepress/components/ChatBubble.vue';
</script>


<PluginMeta />


## 详细功能描述


在群聊中，使用motd ip来查询服务器。


<ClientOnly>
  <ChatBubble :messages="[
    { userClass: 'user-2', text: 'motd play.easecation.net' },
    { 
        userClass: 'user-1', 
        img: 'https://motd.minebbs.com/api/status_img?ip=play.easecation.net&stype=auto&theme=simple' 
    }
  ]" />
</ClientOnly> 