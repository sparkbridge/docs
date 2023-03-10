# 配置文件详解

启动一次SparkBridge后，会在`plugin/sparkbridge/`文件夹生成配置文件

``` 
├─data  <-- 登录数据存储
│  └─image
├─logs  <-- 日志存储
└─config.json  <-- 配置文件

```
## 登录项配置文件
打开`config.json`

### 使用oicq方案

``` json
{
    "qq":{
        "qid":114514,  //要登录的QQ号
        "pwd":"1919810",  // 密码
        "log_level":"warn",  // 日志输出等级，不需要更改
        "platform":1  // 协议 1：手机 2：平板 3：手表
    },
    "adapter":{
        "type":"oicq",  // 适配方式，默认oicq不需要更改
        "target":"ws://somewhere:port"  // 不需要动此项，是go-cqhttp方案需要的
    }
}
```

如果您想使用扫码登陆，请把`pwd`项设为`null`，像下面这样

``` json
"pwd":null
```

#### 网络异常，无法扫码登录
如果您的服务器与您的手机不在同一网络环境下，腾讯设置了此种情况禁止扫码登录

您可以在本地的电脑通过验证之后再上传到云服务器

#### 禁止登录：设备版本过低
再配置文件中把协议版本设置为手机，像下面这样
``` json
"platform":1
```
然后尝试扫码登录，注意扫码之后手机客户端会被顶下线。

### 使用go-cqhttp方案

> [!WARNING] 请连不上的同学自备科学上网软件

1. 下载[最新版本](https://github.com/Mrs4s/go-cqhttp/releases/latest)并解压
2. 双击运行，首次运行时会释放启动文件
3. 再次运行，当出现提示选择通信方式时，选择正向 Websocket 通信
4. 在配置文件中填入账号和密码，更改`post-format`为`array`，修改`access-token`为你喜欢的密码
5. 再次运行go-cqhttp以登录帐号


``` json
{
    "qq":{
        "qid":114514,  //QQ号
        "pwd":"1919810",  // go-cqhttp中的 `access-token` 项，请确保一致
        "log_level":"warn",  // 日志输出等级，不需要更改
        "platform":1  // 用不到
    },
    "adapter":{
        "type":"gocq",  // 适配方式，改为gocq
        "target":"ws://127.0.0.1:8333"  // go-cqhttp中的websocket连接地址，根据实际情况更改
    }
}
```

## 基本使用配置文件

### spark.mc

插件`spark.mc`可用提供基本的群服互通交互

配置文件位于`/plugins/sparkbridge/spark.mc/config.json`

``` json
{
    "cmd": {
        "bind": ".绑定",
        "unbind": ".解绑",
        "add_wl": ".加白名",
        "del_wl": ".解白名",
        "cmd":".执行"
    },
    "group": 114514,  // 使用机器人发群号
    "admin": [],   // 管理员，是一个数组，可用添加多个
    "auto_wl": true,  // 是否在玩家绑定白名单之后直接执行allowlist add命令
    "debug":true,  // 是否显示调试信息
    "msg":{
        "join":true,  // 是否显示玩家进入服务器
        "left":true,  // 是否显示玩家离开服务器
        "chat":true  // 是否显示玩家聊天
    }
}
```

### spark.regex

插件`spark.regex`可提供自定义正则表达式功能

配置文件位于`/plugins/sparkbridge/spark.regex/config.json`

``` json
{
    "我是(.+)":{
        "cmd":"reply|你是$1",
        "adm":false
    }
}
```

这里自带一个正则表达式示例，`cmd`项是要执行的命令，`adm`是是否需要管理员来触发

具体的命令可用查看[正则表达式命令](/subpages/cmd.md)