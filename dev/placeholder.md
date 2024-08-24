# 占位符

SparkBridge有独立的正则表达式系统和占位符系统，占位符可以在正则表达式执行的时候实现特定变量的替换。

具体详见：[正则表达式](/user/regex)

这一章节，我将向你讲述如何自定义一个占位符。

``` js
const regPlaceHolder = spark.Cmd.regPlaceHolder;

spark.Cmd.regPlaceHolder('EXAMPLE_NAME', e => {
    return "测试插件";
});

spark.Cmd.regPlaceHolder('EXAMPLE_NAME2', (player, msg) => {
    return "测试插件2";
});

```

正则表达式有两个触发环境，一种是服务器玩家发言，一种是群聊玩家发言。

在群聊中触发的时候，传入的是群聊消息类，而在服务器中触发的时候，传入的是玩家对象与发言内容。