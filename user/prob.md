# 常见问题参考

## LL3 能用吗

可以，使用 LSE 兼容层配置为 index.js 作为启动，然后使用 nodejs 模式。

## 为什么出现报错：“TypeError: msg.map is not a function”？

如果你使用的机器人实现使用 string 格式，请不要关闭 base 配置中的 OnebotV11，将其保持打开

## 为什么部分插件无法加载，显示 “SyntaxError: Unexpected token ﻿□ in JSON at position 0”？

因为编码错误导致的。请检查所有插件的 config 文件格式是否为 UTF-8（UTF8 BOM 也不行）

## 为什么部分插件无法加载，显示如下类似报错？

```
Error: ENOENT: no such file or directory, open 'plugins\nodejs\sparkbridge2\plugins\xxxx\spark.json'
```

因为你使用了 sb1 的插件。这与 sb2 不兼容。

## 为什么我的 plugins 文件夹没有 nodejs 文件夹？

LeviLaminav取消了nodejs文件夹，直接将插件放入plughins文件夹即可加载

如果您仍在使用Liteloader，请确保版本需要大于 2.5.0。

## 可以连接多个服务器吗？

多个服务器同时安装 sparkbridge 然后 Onebot 实现中连接多个后端可实现一个 bot 控制多个服务器。

**需要注意的是一个 sparkbridge 插件只能用于一个服务器。**

## 教程看不懂怎么办？

![](/static/pa.png)