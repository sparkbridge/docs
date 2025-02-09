---
outline: deep
---

# spark.QClient

> 我们在其中接入了大部分Onebot支持的API，具体是否可用参照你所使用的Onebot实现。

## 功能列表

- [spark.QClient.sendGroupMsg](#spark-qclient-sendgroupmsg): 发送群组消息。
- [spark.QClient.sendPrivateMsg](#spark-qclient-sendprivatemsg): 发送私聊消息。
- [spark.QClient.sendGroupForwardMsg](#spark-qclient-sendgroupforwardmsg): 发送群组转发消息。
- [spark.QClient.sendGroupBan](#spark-qclient-sendgroupban): 设置群组成员禁言。
- [spark.QClient.deleteMsg](#spark-qclient-deletemsg): 删除消息。
- [spark.QClient.getGroupMemberList](#spark-qclient-getgroupmemberlist): 获取群组成员列表。
- [spark.QClient.getGroupMemberInfo](#spark-qclient-getgroupmemberinfo): 获取群组成员信息。
- [spark.QClient.setGroupAddRequest](#spark-qclient-setgroupaddrequest): 处理群组添加请求。
- [spark.QClient.setFriendAddRequest](#spark-qclient-setfriendaddrequest): 处理好友添加请求。
- [spark.QClient.sendLike](#spark-qclient-sendlike): 发送点赞消息。
- [spark.QClient.getMsg](#spark-qclient-getmsg): 获取消息。
- [spark.QClient.sendGroupWholeBan](#spark-qclient-sendgroupwholeban): 设置群组全体禁言。
- [spark.QClient.setGroupKick](#spark-qclient-setgroupkick): 将成员移出群组。
- [spark.QClient.setGroupLeave](#spark-qclient-setgroupleave): 退出或解散群组。
- [spark.QClient.setGroupName](#spark-qclient-setgroupname): 设置群组名称。
- [spark.QClient.getStrangerInfo](#spark-qclient-getstrangerinfo): 获取陌生人信息。
- [spark.QClient.getFriendInfo](#spark-qclient-getfriendinfo): 获取好友信息。
- [spark.QClient.getGroupInfo](#spark-qclient-getgroupinfo): 获取群组信息。
- [spark.QClient.getFriendList](#spark-qclient-getfriendlist): 获取好友列表。
- [spark.QClient.getGroupList](#spark-qclient-getgrouplist): 获取群组列表。
- [spark.QClient.getGroupHonorInfo](#spark-qclient-getgrouphonorinfo): 获取群组荣誉信息。
- [spark.QClient.getStatus](#spark-qclient-getstatus): 获取客户端状态。

### `spark.QClient.sendGroupMsg`
**描述:**
发送群组消息。

**参数:**
- `gid` (数字): 群组ID。
- `msg` (消息对象): 要发送的消息。

**返回值:**
- Promise 对象，解析为服务器响应数据。

**用法:**
```javascript
spark.QClient.sendGroupMsg(12345678, "Hey Guys!")
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

### `spark.QClient.sendPrivateMsg`
**描述:**
发送私聊消息。

**参数:**
- `fid` (数字): 用户ID。
- `msg` (消息对象): 要发送的消息。

**返回值:**
- Promise 对象，解析为服务器响应数据。

**用法:**
```javascript
spark.QClient.sendPrivateMsg(87654321, "Hey Guys!")
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

### `spark.QClient.sendGroupForwardMsg`
**描述:**
发送群组转发消息。

**参数:**
- `gid` (数字): 群组ID。
- `msg` (消息对象): 要发送的转发消息。

**返回值:**
- Promise 对象，解析为服务器响应数据。

**用法:**
```javascript
spark.QClient.sendGroupForwardMsg(12345678, { ... })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

###  `spark.QClient.sendGroupBan`
**描述:**
设置群组成员禁言。

**参数:**
- `gid` (数字): 群组ID。
- `mid` (数字): 成员ID。
- `d` (数字): 禁言时长（秒）。

**用法:**
```javascript
spark.QClient.sendGroupBan(12345678, 87654321, 3600);
```

###  `spark.QClient.deleteMsg`
**描述:**
撤回消息。

**参数:**
- `id` (数字): 消息ID。

**用法:**
```javascript
spark.QClient.deleteMsg(12345678);
```

###  `spark.QClient.getGroupMemberList`
**描述:**
获取群组成员列表。

**参数:**
- `gid` (数字): 群组ID。

**返回值:**
- Promise 对象，解析为成员列表数据。

**用法:**
```javascript
spark.QClient.getGroupMemberList(12345678)
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

###  `spark.QClient.getGroupMemberInfo`
**描述:**
获取群组成员信息。

**参数:**
- `gid` (数字): 群组ID。
- `mid` (数字): 成员ID。

**返回值:**
- Promise 对象，解析为成员信息数据。

**用法:**
```javascript
spark.QClient.getGroupMemberInfo(12345678, 87654321)
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

###  `spark.QClient.setGroupAddRequest`
**描述:**
处理群组添加请求。

**参数:**
- `flag` (字符串): 请求标识（如果收到了添加请求会获得一个针对当前请求的字符串）。
- `sub_type` (字符串): 请求类型。
- `approve` (布尔值): 是否批准。

**用法:**
```javascript
spark.QClient.setGroupAddRequest('flag_example', 'add', true);
```

###  `spark.QClient.setFriendAddRequest`
**描述:**
处理好友添加请求。

**参数:**
- `flag` (字符串): 请求标识。
- `approve` (布尔值): 是否批准。

**用法:**
```javascript
spark.QClient.setFriendAddRequest('flag_example', true);
```

###  `spark.QClient.sendLike`
**描述:**
发送点赞消息。

**参数:**
- `fid` (数字): 用户ID。
- `times` (数字): 点赞次数。

**用法:**
```javascript
spark.QClient.sendLike(87654321, 10);
```

###  `spark.QClient.getMsg`
**描述:**
获取消息。

**参数:**
- `id` (数字): 消息ID。

**返回值:**
- Promise 对象，解析为消息数据。

**用法:**
```javascript
spark.QClient.getMsg(12345678)
    .then(data => console.log(data))
    .catch(error => console.error(error));
```


###  `spark.QClient.sendGroupWholeBan`
**描述:**
设置群组全体禁言。

**参数:**
- `gid` (数字): 群组ID。
- `enable` (布尔值): 是否启用禁言。

**用法:**
```javascript
spark.QClient.sendGroupWholeBan(12345678, true);
```

###  `spark.QClient.setGroupKick`
**描述:**
将成员移出群组。

**参数:**
- `gid` (数字): 群组ID。
- `mid` (数字): 成员ID。
- `rej` (布尔值): 是否拒绝再次申请加入。

**用法:**
```javascript
spark.QClient.setGroupKick(12345678, 87654321, true);
```

###  `spark.QClient.setGroupLeave`
**描述:**
退出或解散群组。

**参数:**
- `gid` (数字): 群组ID。
- `dismiss` (布尔值): 是否解散群组。

**用法:**
```javascript
spark.QClient.setGroupLeave(12345678, true);
```

###  `spark.QClient.setGroupName`
**描述:**
设置群组名称。

**参数:**
- `gid` (数字): 群组ID。
- `name` (字符串): 新的群组名称。

**用法:**
```javascript
spark.QClient.setGroupName(12345678, '新群名称');
```

###  `spark.QClient.getStrangerInfo`
**描述:**
获取陌生人信息。

**参数:**
- `sid` (数字): 陌生人ID。
- `no_cache` (布尔值): 是否不使用缓存。

**返回值:**
- Promise 对象，解析为陌生人信息数据。

**用法:**
```javascript
spark.QClient.getStrangerInfo(87654321, true)
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

###  `spark.QClient.getFriendInfo`
**描述:**
获取好友信息。

**参数:**
- `fid` (数字): 好友ID。
- `no_cache` (布尔值): 是否不使用缓存。

**返回值:**
- Promise 对象，解析为好友信息数据。

**用法:**
```javascript
spark.QClient.getFriendInfo(87654321, true)
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

###  `spark.QClient.getGroupInfo`
**描述:**
获取群组信息。

**参数:**
- `gid` (数字): 群组ID。
- `no_cache` (布尔值): 是否不使用缓存。

**返回值:**
- Promise 对象，解析为群组信息数据。

**用法:**
```javascript
spark.QClient.getGroupInfo(12345678, true)
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

###  `spark.QClient.getFriendList`
**描述:**
获取好友列表。

**返回值:**
- Promise 对象，解析为好友列表数据。

**用法:**
```javascript
spark.QClient.getFriendList()
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

###  `spark.QClient.getGroupList`
**描述:**
获取群组列表。

**返回值:**
- Promise 对象，解析为群组列表数据。

**用法:**
```javascript
spark.QClient.getGroupList()
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

###  `spark.QClient.getGroupHonorInfo`
**描述:**
获取群组荣誉信息。

**参数:**
- `gid` (数字): 群组ID。
- `type` (字符串): 要获取的群荣誉类型，可传入 `talkative` `performer` `legend` `strong_newbie` `emotion` 以分别获取单个类型的群荣誉数据，或传入 `all` 获取所有数据 。

**返回值:**
- Promise 对象，解析为荣誉信息数据。

**用法:**
```javascript


spark.QClient.getGroupHonorInfo(12345678, 'talkative')
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

###  `spark.QClient.getStatus`
**描述:**
获取客户端状态。

**返回值:**
- Promise 对象，解析为状态数据。

**用法:**
```javascript
spark.QClient.getStatus()
    .then(data => console.log(data))
    .catch(error => console.error(error));
```
## 如何自行实现api

使用
```js
spark.QClient.sendWSPack(SOMEFUNCTION(sth));
//自行通过sendWSPack调用自己的方法

//也可以导入packbuilder库引入已有的api
const packbuilder = require('../../handles/packbuilder');
spark.QClient.sendWSPack(packbuilder.GroupMessagePack(gid, msg, tmp_id));
```