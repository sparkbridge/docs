# 更新日志

了解 SparkBridge 的最新变更与 API 演进。

<script setup>
import ChangelogList from '../.vitepress/components/ChangelogList.vue'

const releaseData = [
  {
    version: "v3.0.7",
    isLatest: true,
    date: "2026-03-09",
    coreVersion: "3.0.7",
    webVersion: "0.0.6",
    summary: "本次更新重构了底层规则引擎，添加几种新的方法，并优化了插件获取 Token 的交互方式。",
    changes: [
      { type: 'feature', text: '新增对 <code>iframe</code> 插件通过 <code>postMessage</code> 获取全局 Token 的支持。' },
    { type: 'feature', text: '正则表达式新增 <code>回复图片</code> 和 <code>调用插件注册命令</code> ' },
      { type: 'breaking', text: '废弃了旧版的基于 URL Params 传递敏感 Token 的行为，详见下方 API 变更。' },
    ],
    apiDiff: [
      { type: 'normal', code: '  // 插件端 Token 获取方式变更' },
      { type: 'remove', code: '  const token = new URLSearchParams(window.location.search).get("token");' },
      { type: 'add', code: '  window.parent.postMessage({ action: "GET_SB3_TOKEN" }, "*");' },
    ]
  }
]
</script>

<ChangelogList :releases="releaseData" />