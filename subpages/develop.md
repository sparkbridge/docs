# 开发指南

因为没有多少时间来写文档，我就把现阶段所存在的问题都写在这里，如果愿贡献代码可以试着从以下几个封面入手。

1. 无法再多个插件中获取玩家对应XBOXID
2. 无法注册正则表达式的命令
3. 插件无法热加载与热卸载
4. 无法多服联动，但是这个已经在计划内，详见[SparkCenter](https://github.com/sparkbridge/sparkcenter)
5. 统一的API过少，需要特殊操作，例如禁言、踢人需要开发者自行实现。

> [!WARNING] 本页面所阐述的为SparkBridge插件开发方法，SparkCenter插件由于还未开发完成不在阐述范围内。

## 脱离SparkBridge进行开发

SpakrBridge的插件可以脱离BDS开发，在您的新建项目中执行`npm i sparkbridge-core`来安装依赖。

``` js
const {Adapter} = require('sparkbridge-core');

const adpater = new Adapter(xxx,xxx,xxx,xxx,xxx);

adapter.createClient(); //很重要的一步，需要先创建客户端

adapter.login('pwd');

```

然后使用`onStart`来开启你的主函数

``` js
function onStart(adapter){
    adapter.on('bot.message.group',(e)=>{
        // do something
    })
}

onStart(adapter);
```

总的来说就是

``` js
const {Adapter} = require('sparkbridge-core');

const adpater = new Adapter(xxx,xxx,xxx,xxx,xxx);

adapter.createClient(); //很重要的一步，需要先创建客户端

adapter.login('pwd');


function onStart(adapter){
    adapter.on('bot.message.group',(e)=>{
        // do something
    })
}

onStart(adapter);
```

接下来运行这个文件，这样您的插件就独立于SparkBridge运行了。

## 接入SparkBridge运行

去掉您主函数中进行登录的部分，并对外暴露`onStart`和`info`两个函数

``` js
function onStart(adapter){
    adapter.on('bot.message.group',(e)=>{
        // do something
    });
}

function info(){
    return {
        name : '示例插件',  // 插件名字
        desc : '为展示而制作的插件', // 插件描述
        author : 'sbaoor', // 作者
        version : [0,0,1] // 版本
    };
}

module.exports = {onStart,info};
```

把您的文件打包进文件夹，然后放入`plugins/nodejs/sparkbridge/plugins`文件夹

SparkBridge会在登录后自动加载。

有以下几个需要注意的点：

1. 如果您的插件依赖了其他的库，请一并打包node_modules到文件夹。
2. 如果您设置了一个`config.json`作为配置文件，请把它放到您插件文件夹的根目录，SparkBridge会在加载插件的时候在`plugins/sparkbridge/`创建插件同名文件夹，并把`config.json`转移到文件夹中，无需您手动转移。另外，SparkBridge还会自动创建`data`文件夹在`config,json`同级。
3. 不要在主函数`onStart`之外的地方进行机器人相关操作，这时候还未登录。
4. 如果遇到还未实现的操作，请您不要急躁，在我们进行合并API之前，您可以先自行实现。

![事件](https://flowus.cn/sparkbridge/share/1722e4b9-f1d8-4259-b139-12ae0a6e1836)
![API](https://flowus.cn/sparkbridge/share/0a87e4e8-7f63-4c36-a3f8-6e3655dafaf6)
