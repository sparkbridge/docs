# 从旧版SparkBridge升级

## 从SparkBridge2.x升级

## `spark.getLogger(name)`

使用`spark.getLogger()`代替，会自动填入插件名称


## `spark.setOwnProperty(name,value)`

使用`spark.env.set(name,value)`代替


## `spark.mc.xxx`

配置文件已转移到变量池，使用`spark.env.get("admin_qq")`和`spark.env.get("main_group")`等元素替代

## `spark.emit("event.telemetry.pushconfig", wbc);`

配置文件推送事件已移除，使用wbc.regsister()即可完成推送。