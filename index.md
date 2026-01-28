---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "SparkBridge2"
  text: "✨使用Onebot协议的BDS机器人适配器✨"
  image:
    src: /spark.png
    alt: VitePress
  tagline: "all new Bridge"
  actions:
    - theme: brand
      text: 安装指南
      link: /user/install
    - theme: alt
      text: 开发文档
      link: /dev/setup
    - theme: alt
      text: GitHub
      link: https://github.com/sparkbridge

features:
  - title: 轻量级、模块化和多功能
    details: 支持插件接入，导出的API可供插件开发者自由定制，满足不同需求
  - title: 基于 onebot 协议开发
    details: 使用支持最广的Onebot协议，今日仍然可用的MCBot
  - title: 提供内核分离方案
    details: 可以进行二次开发脱离 BDS 进行运行
---

## 我们的赞助者
<div class="sponsors-container">
    <div class="sponsor">
        <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="https://s21.ax1x.com/2025/01/19/pEkaKYV.jpg" alt="赞助者头像" class="sponsor-avatar">
        </a>
        <div>
            <div class="sponsor-name">123456788</div>
            <div class="sponsor-message"></div>
        </div>
    </div>
    <div class="sponsor">
        <a href="https://blog.ikgy.top/
        " target="_blank" rel="noopener noreferrer">
            <img src="https://s21.ax1x.com/2025/01/19/pEka3y4.jpg" alt="赞助者头像" class="sponsor-avatar">
        </a>
        <div>
            <div class="sponsor-name">serika</div>
            <div class="sponsor-message">Niko Niko 喵 喵，Niko Niko 喵 喵~</div>
        </div>
    </div>
    <div class="sponsor">
        <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="https://s21.ax1x.com/2025/01/19/pEkaUFx.jpg" alt="赞助者头像" class="sponsor-avatar">
        </a>
        <div>
            <div class="sponsor-name">42</div>
            <div class="sponsor-message">汀 汀 莱万汀!汀汀莱万汀~</div>
        </div>
    </div>
    <div class="sponsor">
        <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="https://s21.ax1x.com/2025/01/19/pEkadfK.jpg" alt="赞助者头像" class="sponsor-avatar">
        </a>
        <div>
            <div class="sponsor-name">故渊</div>
            <div class="sponsor-message">低价游戏云出,官网:https://ai2019.com/aff/DMVBWDCX</div>
        </div>
    </div>
    <div class="sponsor">
        <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="https://sparkbridge.cn/support1.gif" alt="赞助者头像" class="sponsor-avatar">
        </a>
        <div>
            <div class="sponsor-name">NeosRain</div>
            <div class="sponsor-message">想杀了微软TMD WindowsApps</div>
        </div>
    </div>
   <div class="sponsor">
        <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="https://yukiebot.top/img/Yukie.ico" alt="赞助者头像" class="sponsor-avatar">
        </a>
        <div>
            <div class="sponsor-name">雪绘BOT团队</div>
            <div class="sponsor-message">为音游Orzmic设计的查分机器人</div>
        </div>
    </div>
    <!-- 更多赞助者内容 -->
</div>

### 成为我们的赞助者，只需10CNY ！

在我们的官网上留下您的个人信息，成为我们尊贵的赞助者。您的支持将助力我们继续前行，为您带来更多精彩内容。立即行动，加入我们吧！

<style>
/* 容器样式 */
.2sponsors-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px; /* 赞助者之间的间距 */
    justify-content: center; /* 水平居中对齐 */
    padding: 20px; /* 容器内边距 */
    background-color: #f7f7f7; /* 背景颜色，可根据网站风格修改 */
}

/* 外层容器样式 */
.sponsors-wrapper {
    background-color: transparent; /* 外框内容颜色为透明 */
    /* 其他样式 */
}
/* 容器样式  */
.sponsors-container {
    display: flex;
    flex-wrap: wrap;
    gap: 15px; /* 赞助者之间的间距 */
    justify-content: center; /* 水平居中对齐 */
    padding: 15px; /* 容器内边距 */
}


/* 单个赞助者样式 */
.sponsor {
    display: flex;
    align-items: center; /* 垂直居中对齐 */
    gap: 15px; /* 头像与文字之间的间距 */
    border: 1px solid #ddd; /* 边框颜色，可根据网站风格修改 */
    border-radius: 8px; /* 圆角边框 */
    padding: 15px; /* 内边距 */
    width: calc(50% - 15px); /* 每行两个，减去间距 */
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); /* 阴影效果，增加立体感 */
    background-color: white; /* 内框背景颜色为白色 */
    transition: transform 0.3s ease; /* 鼠标悬停时的动画效果 */
}

.sponsor:hover {
    transform: translateY(-5px); /* 鼠标悬停时稍微上移 */
}

/* 头像样式 */
.sponsor-avatar {
    width: 80px; /* 头像宽度 */
    aspect-ratio: 1 / 1; /* 固定宽高比为1:1，确保头像保持圆形 */
    border-radius: 50%; /* 圆形头像 */
    object-fit: cover; /* 保持图片比例，裁剪多余部分 */
    transition: transform 0.3s ease; /* 鼠标悬停时的动画效果 */
}

.sponsor-avatar:hover {
    transform: scale(1.1); /* 鼠标悬停时稍微放大 */
}

/* 名字样式 */
.sponsor-name {
    font-size: 18px; /* 字体大小 */
    font-weight: bold; /* 加粗字体 */
    color: #333; /* 字体颜色 */
    margin-bottom: 10px; /* 与留言的间距 */
}

/* 留言样式 */
.sponsor-message {
    font-size: 16px; /* 字体大小 */
    color: #666; /* 字体颜色 */
    line-height: 1.6; /* 行高 */
}

</style>
