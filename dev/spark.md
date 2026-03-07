# Spark类

Spark类是SparkBridge的一个全局变量，储存着SparkBridge的绝大部分方法与元素。

## QClient

``` js 
spark.QClient
```

QClient存放着QQ客户端实例，是一个websocket兼容层，可以在[CQ客户端API](/dev/qc_api.md)页面找到所有方法

## getLogger

``` js 
spark.getLogger("plugin_name")
```

getLogger方法返回一个Logger实例，详见[Log记录器](/dev/logger.md)


## getFileHelper

``` js 
spark.getFileHelper("dir_name")
```

getFileHelper返回文件帮助类，详见[文件系统](/dev/file.md)

##  env

spark.env是一个变量池，用于储存插件公共数据

``` js 

spark.env.set("xxx","xxx")
spark.env.get("xxx")


```

以下是各官方插件在spark上挂载的自定义属性

|属性|备注|
|:-:|:-:|
|main_group | 用户的主要群聊 |
|onBDS| sparkbridge是否作为BDS的插件运行|
|admin_qq|sparkbridge的QQ管理员数组|