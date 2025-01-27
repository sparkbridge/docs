# 配置项参考

此部分内容，请查看网页面板

通常，网页面板会在[127.0.0.1:3002](http://127.0.0.1:3002)开启

在特殊情况下，网页面板的端口被占用，面板会自动寻找没有被占用的端口进行使用，当找到可用的端口时，会在控制台进行输出。

如果您开启了锁定面板的选项，面板需要登录才能进入。请私聊您的机器人来获取临时密码。


<ClientOnly>
  <ChatBubble :messages="[
    { userClass: 'user-2', text: '获取密码' },
    { userClass: 'user-1', text: '您的临时密码为：N0ZyfkJ0Q0Kl' }
  ]" />
</ClientOnly> 



<script setup>
import ChatBubble from '../.vitepress/components/ChatBubble.vue';
</script>
