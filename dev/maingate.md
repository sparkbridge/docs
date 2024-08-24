# 插件入口

上一章，我们了解了插件的自述文件。这一章，我会带您了解插件的程序入口

nodejs会默认加载文件夹中的`index.js`文件，如果您想修改程序的主入口，可以在`package.json`中修改，参照[包的入口](https://nodejs.cn/api/packages/package_entry_points.html)。

下面让我们来写一个回复类的插件，这个插件可以在加载的时候向主群聊发送“我来啦”，并且在收到特定消息的时候回复特定的语句。


``` js
const msgbuilder = require('../../handles/msgbuilder');//导入信息构建函数
spark.on('bot.online', () => { //当bot登录时
    spark.QClient.sendGroupMsg(spark.mc.config.group, '我来啦'); //向指定群发送字符
});

spark.on('message.group.normal', (e, reply) => {
    const { raw_message, group_id } = e;
    if (group_id == spark.mc.config.group){  //此处对正在发送消息的群聊判断，查看是否和配置文件一致
        if(raw_message=='你好吗'){
            reply('我很好，谢谢。');//使用reply();发送信息。
        }
        if (raw_message == '可爱捏')
            reply(msgbuilder.img('https://s11.ax1x.com/2022/04/18/Lare4s.jpg'))//这里可以发一张在线图片
    } 
})
```

好的，现在我们启动BDS主程序或者沙箱。如果一切正常，就会收到BOT在上线时发送的“我来啦”。

<div class="dialogue">
  
  <!-- 用户1 发言 -->
  <div class="bubble user-1">我来啦</div>
  <div class="clear"></div>
</div>

现在，在群聊中发送程序里设定的语句，观察BOT的反应。

<div class="dialogue">
  
  <!-- 用户2 发言 -->
  <div class="bubble user-2">你好吗</div>
  <div class="clear"></div>

  <!-- 用户1 发言 -->
  <div class="bubble user-1">我很好，谢谢</div>
  <div class="clear"></div>
</div>


<div class="dialogue">
  
  <!-- 用户2 发言 -->
  <div class="bubble user-2">可爱捏</div>
  <div class="clear"></div>

  <!-- 用户1 发言 -->
  <div class="bubble user-1"><img src="https://s11.ax1x.com/2022/04/18/Lare4s.jpg"></div>
  <div class="clear"></div>
</div>



<style>
    .dialogue {
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
      background-color: #f9f9f9;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .bubble {
      position: relative;
      margin-bottom: 10px;
      padding: 12px;
      border-radius: 18px;
      font-size: 1em;
      background-color: transparent; /* 背景设为透明 */
      border: 1px solid #ddd; /* 添加边框以增加可见性 */
      word-wrap: break-word; /* 确保文本可以换行 */
    }

    .bubble.user-1 {
      float: left;
      color: #555; /* 可以为不同用户设置不同的文本颜色 */
    }

    .bubble.user-2 {
      float: right;
      color: #333; /* 可以为不同用户设置不同的文本颜色 */
    }

    .bubble::before {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
      border-color: transparent;
    }

    .clear {
      clear: both;
    }
  </style>