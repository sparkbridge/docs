# 沙箱模式

沙箱模式是专为开发者提供的内核分离方案，通过只启动SparkBridge的内核，来启用基础的功能，包括插件加载与websocket连接。

::: warning 注意
不要在正在运行的BDS服务器中开启沙箱模式，这可能会导致未知的错误
:::

开启沙箱模式之后，LLAPI类将被接管，插件的配置文件被转移到`testdata`文件夹中，同时控制台会默认开启debug模式，输出调试信息。

``` 
 [sparkbridge2] [warn] ====本地调试器====
 [sparkbridge2] [warn] 您现在处于调试模式！！！
 [sparkbridge2] [warn] MC类将被覆盖
 [sparkbridge2] [warn] 数据存储已转移到testdata文件夹
 [sparkbridge2] [warn] ====本地调试器====
```

## 开启方法

只需要在node_modules已安装的情况下，使用根目录的sandbox.bat即可开启沙箱模式