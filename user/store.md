---
outline: deep
---
# 插件市场

以下是我们精选的插件列表：
<script setup>
const products = [
  {
    a: {
      href: '/product1',
      img: "https://s11.ax1x.com/2024/01/20/pFEXXY4.jpg",
      desc: "商品1描述"
    },
    div: {
      title: "商品1名称",
      desc: "商品1简短描述，介绍商品的特点和优势。",
      tag:{
        official:"官方"
      }
    }
  },{
    a:{
      href: "https://www.minebbs.com/resources/spark2-rank-q-sb.7886/",
      img:"/static/rank2.jpg",
      desc:"商品2描述"
    },
    div:{
      title:"Spark2.rank",
      desc:"Q群获取游戏内可视化统计数据，离线生成分享图",
      tag:{
        new:"新发布"
      }
    }
  },{
    a:{
      href:"/product3",
      img:"https://www.minebbs.com/data/resource_icons/8/8331.jpg?1716636530",
      desc:"商品3描述"
    },
    div:{
      title:"商品3名称",
      desc:"商品2简短描述，介绍商品的特点和优势。",
      tag:{
        new:"新发布",
        official:"官方"
      }
    }
  }
]
</script>
<div class="product-grid">
    <!-- 示例商品1 -->
    <div class="product" v-for="({ a, div }, index) in products">
      <a :href="a.href" class="product-image-link">
        <img :src="a.img" :alt="a.desc" class="product-image">
      </a>
      <div class="product-info">
        <span v-for="(value,key) in div.tag" :class="'tag '+key+'-tag'">{{value}}</span>
        <h3 class="product-title">{{ div.title }}</h3>
        <p class="product-description">{{ div.desc }}</p>
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
</style>