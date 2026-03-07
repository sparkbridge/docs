# 网页配置面板

SparkBridge 3.0 引入了原生网页配置面板，作为网页可视化配置编辑器

## 接入方法


### 推送配置

注：以下示例注册了一个名为`example`的插件
``` js
spark.web.createConfig("example")
    .switch("enable", config.enable, "是否启用插件")
    .number("group_id", config.group_id, "群组ID")
    .register();


```

### 监听更改
``` js
spark.on("config.update.example",(K,newV)=>{
    // 默认事件名称为config.update.${pluginName}
    // K 修改的配置项
    // newV 配置项更新的值
})
```

## API

``` js
spark.web.createConfig("example")
    .switch("switch", config.enable, "注册一个开关")
    .text("text", config.text, "注册一个文本框")
    .number("number", config.number, "注册一个数字框")
    .select("select", config.select, ["1", "2", "3"], "注册一个选择框")
    .array("array", config.array, "注册一个数组框")
    .register();

```