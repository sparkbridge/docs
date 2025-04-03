# 配置项参考

通常，网页面板会在[127.0.0.1:3002](http://127.0.0.1:3002)开启

在特殊情况下，网页面板的端口被占用，面板会自动寻找没有被占用的端口进行使用，当找到可用的端口时，会在控制台进行输出。

如果您开启了锁定面板的选项，面板需要登录才能进入。请私聊您的机器人来获取临时密码。

初次安装时，面板密码为空，直接点击登录即可进入。在没有填入管理员信息的时候，禁止锁定面板！这会导致您无法获取密码。


<ClientOnly>
  <ChatBubble :messages="[
    { userClass: 'user-2', text: '获取密码' },
    { userClass: 'user-1', text: '您的临时密码为：N0ZyfkJ0Q0Kl' }
  ]" />
</ClientOnly> 


## 连接websocket

首先，打开正向websocket的开关

[![pEVATUA.png](https://s21.ax1x.com/2025/01/27/pEVATUA.png)](https://imgse.com/i/pEVATUA)

然后，在网页面板中填入您的LLOnebot连接密码（Access Token）

[![pEVAbCt.png](https://s21.ax1x.com/2025/01/27/pEVAbCt.png)](https://imgse.com/i/pEVAbCt)
[![pEVALgf.png](https://s21.ax1x.com/2025/01/27/pEVALgf.png)](https://imgse.com/i/pEVALgf)


> [!CAUTION] 注意
> 无论什么时候，SparkBridge都不会要求您输入您的QQ密码


<script setup>
import ChatBubble from '../.vitepress/components/ChatBubble.vue';
</script>
