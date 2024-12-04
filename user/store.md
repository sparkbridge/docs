---
outline: deep
---
# 插件市场

::: tip 如何入选我们的精选插件列表？
加入我们的官方群，提供插件的基本信息即可
:::

以下是我们精选的插件列表：

<script setup>
const products = [
  {
    url: '/product1',
    image: '/spark.jpg',
    title: '官方示例插件',
    description: '基于开发文档编写的规范插件，可以作为插件模板',
    tags: { official: '官方' }
  },
  {
    url: 'https://www.minebbs.com/resources/spark2-rank-q-sb.7886/',
    image: 'https://s21.ax1x.com/2024/08/23/pAFQnSJ.jpg',
    title: 'Spark2.rank',
    description: 'Q群获取游戏内可视化统计数据，离线生成分享图',
    tags: {}
  },
  {
    url: 'https://www.minebbs.com/resources/spark-motd-java.5505/',
    image: 'https://s21.ax1x.com/2024/08/23/pAFQUld.png',
    title: 'Spark.motd',
    description: '基岩/Java版服务器查询，不依赖任何api，稳定可靠的查询方式',
    tags: {}
  },
  {
    url: 'https://www.minebbs.com/resources/spark-testvanish-1-2-0.9185/',
    image: 'https://s21.ax1x.com/2024/08/24/pAF04FH.png',
    title: 'spark.testVanish',
    description: '让bot不再在您使用完全隐身时背刺您',
    tags: { }
  },
  {
    url: 'https://www.minebbs.com/resources/spark-ban-q.8331/',
    image: 'https://s21.ax1x.com/2024/08/24/pAF0aeU.jpg',
    title: 'spark.ban',
    description: '一个简单的Q群违禁词插件',
    tags: {}
  },
  {
    url: 'https://www.minebbs.com/resources/spark-regexessentials.5838/',
    image: 'https://s21.ax1x.com/2024/08/28/pAApfje.png',
    title: 'spark.RegexEssentials',
    description: '为群聊提供更多的正则基础功能',
    tags: {}
  }
];
</script>

<div class="product-grid">

  <div class="product" v-for="product in products" :key="product.url">
    <a :href="product.url" class="product-image-link">
      <img :src="product.image" class="product-image">
    </a>
    <div class="product-info">
      <!-- 检查是否存在标签并渲染它们 -->
      <!-- <span v-for="(value, key) in product.tags" :key="key" :class="key">{{ value }}</span> -->
      <div v-for="(value, key) in product.tags" :key="key">
    <span :class="'tag ' + key + '-tag'">{{ value }}</span>
  </div>
      <h3 class="product-title">{{ product.title }}</h3>
      <p class="product-description">{{ product.description }}</p>
    </div>
  </div>
</div>

<style>

.product-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
}

.product {
  flex: 0 0 calc(50% - 40px);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.product:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.product-image-link {
  display: block;
  /* 使链接填充其容器 */
  text-align: center;
  /* 确保图片水平居中 */
}

.product-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  /* 设置图片宽高比为16:9 */
  object-fit: cover;
  /* 确保图片按比例填充容器 */
  transition: transform 0.3s ease;
  /* 平滑缩放动画 */
}

.product-image-link:hover .product-image {
  transform: scale(1.05);
  /* 鼠标悬浮时图片放大 */
}

.product-info {
  text-align: center;
  padding: 15px;
}

.product-title {
  margin: 0;
  padding: 10px 0;
  font-size: 1.2em;
}

.product-description {
  margin-top: 0.5em;
  color: #666;
  font-size: 1em;
}

.tag {
  display: inline-block;
  padding: 5px 10px;
  margin-bottom: 10px;
  border-radius: 20px;
  font-size: 0.8em;
  color: #fff;
}

.official-tag {
  background-color: #4CAF50;
}

.new-tag {
  background-color: #2196F3;
}

.tool-tag {
  background-color: #2196F3; 
}


.sale-tag {
  background-color: #f44336; 
}

</style>
