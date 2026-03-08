# 注册正则表达式函数


## 注册无参数函数
示例

``` js
spark.on('core.ready', () => {
    const registerRegexAction = spark.env.get('regex.register_action');

    if (registerRegexAction) {
        registerRegexAction('getXboxID', async (params, pack, context) => {
            // params 是调用的参数的数组
            // pack 是聊天原始包
            // context 是上下文对象

            // 直接返回一个键值对对象！
            if(get_xbox_by_qid(pack.sender.user_id) != undefined){
                return { xbox: get_xbox_by_qid(pack.sender.user_id).xbox };
            }else{
                return { xbox: "无" };
            }
        });
    }
});

```

这个示例是官方插件`sb3_wl`注册的一个命令`getXboxID`，在执行类型选择`调用插件命令`的时候，填入参数`getXboxID`，即可调用此函数。

函数返回一个对象，对象中的键值对会作为返回值，在正则表达式中可以直接通过`$xbox`获取返回值`

![](https://s41.ax1x.com/2026/03/09/peiKgUA.png)

上图中，如果这个执行链被触发，那么就会寻找触发者的XboxID，并返回给正则表达式。然后把获取到的ID发送到QQ群中。

## 注册有参数函数

示例

``` js
spark.on('core.ready', () => {
    const registerRegexAction = spark.env.get('regex.register_action');

    if (registerRegexAction) {
        registerRegexAction('getXboxID', async (params, pack, context) => {
            // params 是调用的参数的数组
            // pack 是聊天原始包
            // context 是上下文对象
            let qid = params[0];

            // 直接返回一个键值对对象！
            if(get_xbox_by_qid(qid) != undefined){
                return { xbox: get_xbox_by_qid(qid).xbox };
            }else{
                return { xbox: "无" };
            }
        });
    }
});

```

这个示例注册了一个命令`getXboxID`，在执行类型选择`调用插件命令`的时候，填入参数`getXboxID,$at`，即可调用此函数。

函数返回一个对象，对象中的键值对会作为返回值，在正则表达式中可以直接通过`$xbox`获取返回值`。

![](https://s41.ax1x.com/2026/03/09/peiKWCt.png)

上图中，如果这个执行链被触发，那么就会寻找触发者信息中被at的人的XboxID，并返回给正则表达式。然后把获取到的ID发送到QQ群中。