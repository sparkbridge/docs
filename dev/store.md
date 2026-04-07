# 发布插件到在线安装器

自`SparkBridge 0.0.6`起，SparkBridge支持插件的在线安装。从官方的store接口获取插件列表，并且使用github链接或者您指定的直链进行安装。

## 构建您的插件库

SparkBridge官方团队推荐您使用Github Actions构建您的插件库。

要构建您的插件库，需要从[官方插件库](https://github.com/sparkbridge/plugins_hub)获取两个文件：`.github/workflows/deploy.yml`和`.gitignore`。并将它们放在您的仓库中。

您可以把需要构建的插件放到仓库中，每当您推送了新的`tag`，Actions就会自动构建并上传到Release中。

具体使用方法您可以查看官方仓库的[REAME](https://github.com/sparkbridge/plugins_hub/blob/main/README.md)。

## 添加插件到商店

请您加入我们的官方群聊来获取商店管理后台

点此加入群聊 [官方群聊](https://qm.qq.com/q/aQiUNuMpIQ)