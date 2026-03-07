# 构建Web界面

## 注册一个路由

``` js
spark.web.registerApi(METHOD,Path,CallBack)；
```

示例

``` js
spark.web.registerApi("GET","/list",(req,res)=>{
    consooel.log(req.query)
    res.json({"code":200,"data":[1,2,3,4,5]})
})；

spark.web.registerApi("POST","/list",(req,res)=>{
    consooel.log(req.body)  // 取得post数据
    res.json({"code":200,"data":req.body})
})；
```

这个示例会注册`api/plugin/{插件名称}/list`，GET方法返回一个json数据，POST方法返回传入的对象

## 注册一个页面文件

``` js
spark.web.registerPage(TITLE,FILE)
```

示例
``` js
spark.web.registerPage("测试页面","index.html")
```

这个示例会注册一个页面，TITLE部分展示在网页控制台的侧边栏，页面作为frame嵌入展示在网页中

如果您想构筑自己的页面，请查看[规则](https://github.com/sparkbridge/sparkbridge3/blob/main/docs/iframe.md)

或者将规则发送给AI帮助您构建页面