# 正则表达式

看到这里，您是一定好奇SparkBridge自带的种种功能都是如何实现的。

::: warning 注意
在学习本章节之前，请确保您了解[正则表达式](https://www.runoob.com/regexp/regexp-syntax.html)
:::

打开`serverdata/regex/data.json`，您将会看到如下内容

``` json
{
    "^我是(.+)": {
        "cmd": "reply|你是$1",
        "adm": false
    },
    "^bot测试": {
        "cmd": "reply|已上线",
        "adm": true
    },
    "^绑定(.+)": {
        "cmd": "addwl|$1:true",
        "adm": false
    },
    "^解绑": {
        "cmd": "remwl|$1",
        "adm": false
    },
    "^查服": {
        "cmd": "run|list",
        "adm": false
    },
    "^chat (.+)": {
        "cmd": "t|all:[群聊]%USER_XBOXID% >> $1",
        "adm": false
    },
    "^执行(.+)": {
        "cmd": "run|$1",
        "adm": true
    }
}
```

这是SparkBridge自带的正则表达式功能，如果您没有修改过此文件，那您将会看到如上一样的配置。

我们单独拿第一项出来看

``` json
"^我是(.+)": {
        "cmd": "reply|你是$1",
        "adm": false
    }
```

这个表达式匹配了`^我是(.+)`，回复`你是$1`，并且，不需要管理员权限。

我们到群聊里实践一下

<ClientOnly>
  <ChatBubble :messages="[
    { userClass: 'user-2', text: '我是逆蝶' },
    { userClass: 'user-1', text: '你是逆蝶' }
  ]" />
</ClientOnly> 


看到这里您是否也想编写属于您自己的正则表达式，下面是SparkBridge提供的正则表达式API

## API

| 事件名称       |      事件     |  示例     |  备注 |  
| ------------- | :-----------: |  :-----------: | :-----------: | 
| reply     | 回复信息 | reply\|我很好 |
|f      |  发送私聊消息    |f\|12345678:哈哈哈哈 | 
| g|  发送群聊消息   | g\|12345678:哈哈哈哈|
| run|  服务器执行命令   | run\|list |
| t|  发送消息给服务器成员  | t\|Spark:你好|如果目标成员写all则会发给所有人|
| addwl|  添加白名单 | addwl\|Spark:true|冒号后面的true和false控制是否自动添加白名单到服务器|
|remwl|移除白名单|remwl\|Spark|

## 占位符

|变量	|含义|
| ------------- | :-----------: | 
|%USER_NAME%	|发信人 QQ 昵称|
|%USER_CARD%	|发信人群昵称|
|%USER_QID%| 发信人QQ号|
|%USER_XBOXID%	|发信人绑定的游戏 ID|
|%PLAYER_XUID%|玩家XUID|
|%PLAYER_IP%|玩家IP地址|
|%PLAYER_MSG%|玩家说的话|


可直接在正则表达式中调用变量。 如：

``` json
 "^我是谁":{
        "cmd":"reply|你是%USER_NAME%",
        "adm":false
    }
```

<ClientOnly>
  <ChatBubble :messages="[
    { userClass: 'user-2', text: '我是谁' },
    { userClass: 'user-1', text: '你是Spark酱' }
  ]" />
</ClientOnly> 

## 可视化编辑器

SparkBridge有专用网站[reg.spakrbridge.cn](https://reg.sparkbridge.cn)来可视化编辑正则表达式文件

<script setup>
import ChatBubble from '../.vitepress/components/ChatBubble.vue';
</script>
