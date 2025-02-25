# 网页配置面板

SparkBridge在2.4.0版本引入了telemetry，作为网页可视化配置编辑器

## 接入方法


### 推送配置

注：以下示例注册了一个名为`example`的插件
``` js
const  WebConfigBuilder   = spark.telemetry.WebConfigBuilder;

let wbc = new WebConfigBuilder("example");
wbc.addEditArray('admins',config.admins,'管理员列表');
wbc.addNumber("group",config.group,'监听的群聊');

// 把配置文件推送到telemetry
spark.emit("event.telemetry.pushconfig", wbc);

```

### 监听更改
``` js
spark.on("event.telemetry.updateconfig_example",(plname,K,newV)=>{
    // 监听的是event.telemetry.updateconfig_注册名称
    // plname 插件名称 
    // K 修改的配置项
    // newV 配置项更新的值
})
```

## API

``` js
const  WebConfigBuilder   = spark.telemetry.WebConfigBuilder;

let wbc = new WebConfigBuilder("example"); 
//插件名称

wbc.addEditArray("配置项名称",["配置1","配置2"],"配置描述"); 
// 添加一个可编辑数组

wbc.addChoosing("配置项名称",["选项1","选项2","选项3"],0,"配置描述");
// 添加一个可选择数组，第三个参数为当前所选

wbc.addSwitch("配置项名称",true,"配置描述"); 
//添加一个开关，此项返回true/false

wbc.addText("配置项名称","配置值","配置描述"); 
//添加一个可编辑文本

wbc.addNumber("配置项名称",114514,"配置描述"); 
// 添加一个可编辑数值

wbc.addButtom("按钮跳转", () => {
    console.log("按钮被点击");
    return {
        status: 303, // 跳转状态码为303
        url: "http://sparkbridge.cn"
    }
}, "配置项描述");

wbc.addButtom("按钮弹窗", () => {
    return { 
        status: 200, //按钮状态码为200
        message: `<i>斜体</i><br><u>下划线</u><br><a href="https://sparkbridge.cn/">链接</a>  ` }
}, "前往官方网站 sparkbridge.cn");
```