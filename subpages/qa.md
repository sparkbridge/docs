# 问答

## 为什么出现报错：“解析群聊信息出现异常 e.foreach is not a function”？

说明你应该回到 [配置亿下](/subpages/conf.md) 把gocq第四步重新做一次。把string改成array！！！！

## 为什么部分插件无法加载，显示“SyntaxError: Unexpected token ﻿□ in JSON at position 0”？

该故障原因因为编码错误导致的。请检查spark.mc的config以及插件本身的config文件格式是否为UTF-8（UTF8 BOM也不行）

## 为什么我的plugins文件夹没有nodejs文件夹？

Liteloader的版本需要大于2.5.0。

## 如何安装llplugin文件？

直接放进BDS的plugins文件夹即可。

## 出现客户端版本过低？

使用扫码登陆，如果无法扫码，换为go-cqhttp登录模式。

## 如何扫码登录？

将配置文件的`pwd`选项写为`null`
``` json
"pwd":null
```

## 可以连接多个服务器吗？

暂时不可以。

## 如何提交滑块验证码？

输入`spark slider <ticket>`

## 出现：获取 Ticket 时出现错？

你所在的地区墙了go-cqhttp的服务器或者服务商禁用了国外IP

解决办法：向服务商申请解禁或者挂梯子。

## sparkbridge.llplugins放进服务器一直无法正常下载配置文件

什么？你用的是简幻欢？他们屏蔽了我们的github资源。请加群下载完整版的sparkbridge

## 教程看不懂怎么办？

![](/qa/pa.png)
