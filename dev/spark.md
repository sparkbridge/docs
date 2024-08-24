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

##  setOwnProperty

``` js 
spark.getFileHelper("plugin_name",{})
```

setOwnProperty可以在spark上挂载插件自定义的属性，使得插件互相联动成为可能。

``` js
spark.setOwnProperty("example",{});

function sayhello(){
    console.log("hello");
}

spark.example.sayhello = sayhello;
```

这样别的插件就可以直接调用`spark.example.sayhello`了

以下是各官方插件在spark上挂载的自定义属性

|属性|备注|
|:-:|:-:|
|spark.VERSION | sparkbridge的版本|
|spark.onBDS| sparkbridge是否作为BDS的插件运行|
|spark.mc.config|插件`mc`的配置文件|