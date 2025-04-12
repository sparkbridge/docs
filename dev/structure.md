# 文件结构

从本章开始，我将带您一起制作一个插件，从实际动手来了解SparkBridge的插件编写流程

SparkBridge的插件结构并不复杂，需要有一个自述文件，和一个主程序入口。

## 文件结构

``` 
┌─index.js <-- 你的插件的主程序
└─spark.json  <-- 你的插件的自述文件
```


::: tip 注意
如果您的插件引用了第三方库，请在打包时将node_modules一并打包到插件压缩包内
:::

## 自述文件

``` json
{
    "name": "example", //这是插件的名字，将会在被bds加载时显示
    "author": "Spark酱", //此处签上你的大名
    "version": [
        0,
        0,
        1
    ],//写上版本号
    "desc": "这是一个示例插件", //插件的自述，不过这并不会显示在bds的控制台中
    "loadmode":"hybrid", // 插件在什么模式下加载，分为hybrid，offline和bds  
    "priority": "init", // 插件优先级分为init, main和post
    "permission": "nor", // 插件权限级分为nor（normal）,key和core
    "load":true //是否启用此插件，保持默认即可
}

```



::: warning 注意
自述文件中不应出现注释，在这里写注释是为了让您了解每个项的含义
:::
