# 主要功能

::: warning
本页面所展示的为正则表达式实现的功能，所有功能均可以在配置文件修改

如果您无法触发下列功能，请检查是否修改过文件
:::

## 查询服务器人数

<ClientOnly>
  <ChatBubble :messages="[
    { userClass: 'user-2', text: '查服' },
    { userClass: 'user-1', text: 'There are 1/10 players online: Spark' }
  ]" />
</ClientOnly> 

## 玩家绑定游戏ID
<ClientOnly>
  <ChatBubble :messages="[
    { userClass: 'user-2', text: '绑定 Spark' },
    { userClass: 'user-1', text: 'Spark绑定成功' }
  ]" />
</ClientOnly> 


当玩家触发此功能时，会自动把玩家的游戏id添加到服务器的白名单之中

## 玩家解绑游戏ID
<ClientOnly>
  <ChatBubble :messages="[
    { userClass: 'user-2', text: '解绑' },
    { userClass: 'user-1', text: '解绑成功' }
  ]" />
</ClientOnly> 

当玩家触发此功能时，会自动把玩家的游戏id从服务器的白名单之中移除

## 执行游戏命令

::: tip
触发此功能需要用户权限为管理员
:::


<ClientOnly>
  <ChatBubble :messages="[
    { userClass: 'user-2', text: '执行 time set day' },
    { userClass: 'user-1', text: 'Set the time to 1201000' }
  ]" />
</ClientOnly> 

## 向服务器中发送讯息

<ClientOnly>
  <ChatBubble :messages="[
    { userClass: 'user-2', text: 'chat 你好吗' }
  ]" />
</ClientOnly> 


这时服务器中的玩家会看到Q群中发来的消息

<script setup>
import ChatBubble from '../.vitepress/components/ChatBubble.vue';
</script>
