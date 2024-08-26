# 文件系统

如你所见，在沙箱模式和BDS模式中，SparkBridge的文件被储存在了不同的地方。

插件要适配不同的模式，就需要有统一管理的文件操作类。

这一章，我将向您介绍SparkBridge的配置文件管理类。

## 文件管理初始化与读取

``` js
const configFile = spark.getFileHelper('example');

configFile.initFile("config.json",{
    reply:true
})

const local_config =json.parse(configFile.getFile("config.json"));

```

这里我们申请到了`example`文件夹的使用权限，且初始化了`config.json`作为我们的配置文件，并提供了默认的模板。

所有从configFile初始化的文件，都会存储在`example`文件夹中。

SparkBridge会使用这套模板作为初始配置文件进行写入。初始化时如果文件已经存在，不会覆盖。

在这个步骤SparkBridge不会提供解析好的json文件，需要开发者自行解析。因为json与josn5的配置文件互不通用，SparkBridge不知道目标文件使用什么格式储存。
## 读取二进制流

如果我们想读取二进制文件，该怎么办呢。

``` js
var buffer = configFile.getBuffer("b.jpg");
```

这样我们就读取了一张名为`b.jpg`的文件

## 保存

在我们需要更新我们的文件的时候应该如何操作呢

``` js
configFile.updateFile('config.json',local_config);

// 如果您想使用json5反序列化

const json5 = require("json5");

configFile.updateFile('config.json',local_config,json5);
```

这样我们就完成了更新配置文件的操作。

## 网页配置面板

在SparkBride 2.4.0时引入了`telemetry`插件，此插件可以生成网页面板来编辑配置文件，大幅度降低文件修改的难度