# 开发助手

提供代码片段补全等功能，感谢@luoQ的编写：

## 使用方法

1.建议使用Visual Studio Code编写插件

2.将[此文件夹](https://danieltoyama.lanzouu.com/iHmhn2kkj20j)复制到sparkbridge根目录下，目录结构示意如下

```
├─Sparkbridge2
  └─SparkBridgeDevelopTool
          index.d.ts

```

3.在你的插件第一行加上下面这两行

```
/// <reference path="../../SparkBridgeDevelopTool/index.d.ts"/>
```

这样你就可以显示函数补全啦！