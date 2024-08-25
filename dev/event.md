# 事件系统

SparkBridge内部是由事件驱动的，附属插件也可以注册属于自己的事件。

``` js
spark.on("event.example.test",(data)=>{
    console.log(data);
});


spark.emit("event.example.test","你好");
```

在这个示例中，我们监听了`event.example.test`这个事件，在事件触发的时候输出收到的数据。然后，我们触发了这个事件并传入的数据。

注册与监听可以存在于不同的插件之中，使得互相联动成为可能。

事件名称没有强制性要求，但是约定俗成的守则是，注册`event.插件名称.事件名称`。