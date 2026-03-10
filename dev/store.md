# 发布插件到在线安装器

自`SparkBridge 0.0.6`起，SparkBridge支持插件的在线安装。从官方的store接口获取插件列表，并且使用github链接或者您指定的直链进行安装。

## 构建您的插件库

SparkBridge官方团队推荐您使用Github Actions构建您的插件库。

要构建您的插件库，需要从[官方插件库](https://github.com/sparkbridge/plugins_hub)获取两个文件：`.github/workflows/deploy.yml`和`.gitignore`。并将它们放在您的仓库中。

您可以把需要构建的插件放到仓库中，每当您推送了新的`tag`，Actions就会自动构建并上传到Release中。

具体使用方法您可以查看官方仓库的[REAME](https://github.com/sparkbridge/plugins_hub/blob/main/README.md)。

## 添加插件到商店

官方的插件商店接口位于仓库[docs](https://github.com/sparkbridge/docs)中

打开`public/store/index.json`

这里以插件`bilibili`为例

``` json
{
        "name": "bilibili", //插件名，要与spark.json中的name严格一致，否则会导致与本地校验时错误
        "version": "0.0.2", //插件版本，要与spark.json中的version一致，可以写字符串，也可以写数组。spark.json中严格要求为数组
        "author": "lition",  // 插件作者
        "desc": "解析b站链接/小程序/短链", //插件描述
        "tags": [
            "bilibili", //标签
            "tool"      //约定俗成：标签应该为英文单词，多个标签用英文逗号隔开，工具类使用tool，娱乐类使用toy，库类使用lib
        ],
        "repo": "https://github.com/sparkbridge/plugins_hub",  //插件仓库
        "downloadUrl": "https://github.com/sparkbridge/plugins_hub/releases/download/v1.0.3/spark.bilibili-parser.zip" //插件下载链接，要求为直链。
    },
```

注：`downloadUrl`字段不要求强制为Github链接，也可以使用自定义直链。