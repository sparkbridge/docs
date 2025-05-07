---
outline: deep
---


# 导出API

使用导出 API，你可以在其他 LSE 插件甚至原生插件中调用 SparkAPI

::: warning 注意
API 仅支持 sparkbridge 2.3.4 以上，事件仅支持 sparkbridge 2.3.5 以上
:::

要使用 sparkbridge 提供的导出 API，你需要使用 [LSE 的导入函数接口](https://lse.liteldev.com/zh/apis/ScriptAPI/Ll/#_6)，并将 sparkbridge2 设为插件依赖项或将导入函数部分放至服务器启动完毕后

如无特殊说明，sparkbridge 提供的导出 API 的命名空间均为 'SparkAPI'

## API

### GetGroupId()

函数的导出名称:`GetGroupId`

获取配置文件中的群号

- **参数:无**

- **返回值:配置文件中的群号，即sparkbridge插件中的spark.mc.config.group**

### QQ 发送 API

#### sendGroupMsg(gid, msg) 

函数的导出名称:`sendGroupMsg`

发送一个群信息

- **参数：**
  - `gid`：群ID。
  - `msg`：信息内容。

#### sendPrivateMsg(fid, msg)

函数的导出名称:`sendPrivateMsg`

发送一个私信信息

- **参数：**
  - `fid`：好友ID。
  - `msg`：信息内容。

#### sendGroupForwardMsg(gid, msg)

函数的导出名称:`sendGroupForwardMsg`

发送群合并聊天信息

- **参数：**
  - `gid`：群ID。
  - `msg`：自定义转发消息, 具体看 [CQcode](https://docs.go-cqhttp.org/cqcode/#%E5%90%88%E5%B9%B6%E8%BD%AC%E5%8F%91%E6%B6%88%E6%81%AF%E8%8A%82%E7%82%B9)。


#### deleteMsg(id)

函数的导出名称:`deleteMsg`

撤回某个信息

- **参数：**
  - `id`：信息id

### sendWSPack(msg)

函数的导出名称:`sendWSPack`

发送一条websocket消息

- **参数：**
  - `msg`：要发送的websocket消息

### Msgbuilder API

#### img(file)

函数的导出名称:`msgbuilder.img`

返回表示图片消息的对象。

- **参数：**
  - `file`（字符串 | Buffer）：图片文件的路径或图片缓冲区。

- **返回值：** 
  包含图片数据的对象。

#### at(qid)

函数的导出名称:`msgbuilder.at`

返回表示 @提及 消息的对象。

- **参数：**
  - `qid`（字符串）：QQ ID。

- **返回值：** 
  包含 @提及 数据的对象。

#### face(id)

函数的导出名称:`msgbuilder.face`

返回表示表情消息的对象。

- **参数：**
  - `id`（字符串）：表情 ID。

- **返回值：** 
  包含表情数据的对象。

#### text(raw)

函数的导出名称:`msgbuilder.text`

返回表示文本消息的对象。

- **参数：**
  - `raw`（字符串）：原始文本。

- **返回值：** 
  包含文本数据的对象。

#### poke(id)

函数的导出名称:`msgbuilder.poke`

返回表示戳一戳消息的对象。

- **参数：**
  - `id`（字符串）：QQ ID。

- **返回值：** 
  包含戳一戳数据的对象。

  #### video(file)

函数的导出名称:`msgbuilder.video`

返回表示视频消息的对象。

- **参数：**
  - `file`（字符串 | Buffer）： 视频文件的路径或视频缓冲区。。

- **返回值：** 
  包含视频数据的对象。
  
#### record(file)

函数的导出名称:`msgbuilder.record`

返回表示视频消息的对象。

- **参数：**
  - `file`（字符串 | Buffer）： 语音文件的路径或语音缓冲区。。

- **返回值：** 
  包含语音数据的对象。

#### reply(id)

函数的导出名称:`msgbuilder.reply`

返回表示回复消息的对象。

- **参数：**
  - `id`（字符串）：回复 ID。

- **返回值：** 
  包含回复数据的对象。


#### format(msg)

函数的导出名称:`msgbuilder.format`

格式化消息以确保其结构正确。

- **参数：**
  - `msg`（字符串 | 对象 | 数组）：要格式化的消息（们）。

- **返回值：** 
  格式化后的消息。

#### ForwardMsgBuilder()

函数的导出名称:`msgbuilder.ForwardMsgBuilder`

返回 ForwardMsgBuilder 的新实例。

- **返回值：** 
  ForwardMsgBuilder 的新实例。

