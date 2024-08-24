# 主要功能

::: warning
本页面所展示的为正则表达式实现的功能，所有功能均可以在配置文件修改

如果您无法触发下列功能，请检查是否修改过文件
:::

## 查询服务器人数

<div class="dialogue">
  
  <!-- 用户2 发言 -->
  <div class="bubble user-2">查服</div>
  <div class="clear"></div>
  
  <!-- 用户1 发言 -->
  <div class="bubble user-1">There are 1/10 players online: Spark</div>
  <div class="clear"></div>
</div>


## 玩家绑定游戏ID

<div class="dialogue">
  
  <!-- 用户2 发言 -->
  <div class="bubble user-2">绑定 Spark</div>
  <div class="clear"></div>
  
  <!-- 用户1 发言 -->
  <div class="bubble user-1">Spark绑定成功</div>
  <div class="clear"></div>
</div>

当玩家触发此功能时，会自动把玩家的游戏id添加到服务器的白名单之中

## 玩家解绑游戏ID

<div class="dialogue">
  
  <!-- 用户2 发言 -->
  <div class="bubble user-2">解绑</div>
  <div class="clear"></div>
  
  <!-- 用户1 发言 -->
  <div class="bubble user-1">解绑成功</div>
  <div class="clear"></div>
</div>

当玩家触发此功能时，会自动把玩家的游戏id从服务器的白名单之中移除

## 执行游戏命令

::: tip
触发此功能需要用户权限为管理员
:::

<div class="dialogue">
  
  <!-- 用户2 发言 -->
  <div class="bubble user-2">执行 time set day</div>
  <div class="clear"></div>
  
  <!-- 用户1 发言 -->
  <div class="bubble user-1">Set the time to 1201000</div>
  <div class="clear"></div>
</div>

## 向服务器中发送讯息

<div class="dialogue">
  
  <!-- 用户2 发言 -->
  <div class="bubble user-2">chat 你好吗</div>
  <div class="clear"></div>
</div>

这时服务器中的玩家会看到Q群中发来的消息

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

    /* .bubble.user-1::before {
      top: 0;
      left: -15px;
      border-width: 0 15px 15px 0;
      border-color: transparent #ddd transparent transparent; 
    }

    .bubble.user-2::before {
      top: 0;
      right: -15px;
      border-width: 15px 15px 0 0;
      border-color: transparent transparent transparent #ddd; 
    } */

    .clear {
      clear: both;
    }
  </style>