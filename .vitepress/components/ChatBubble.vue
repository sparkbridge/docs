<template>
  <div class="dialogue">
    <div
      v-for="(message, index) in messages"
      :key="index"
    >
      <div class="bubble" :class="message.userClass">
        {{ message.text }}
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>


<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  messages: {
    type: Array,
    required: true,
    default: () => []
  }
});
</script>

<style scoped>
    .dialogue {
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
      background-color: #f9f9f9;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .bubble {
      position: relative;
      margin-bottom: 10px;
      padding: 12px;
      border-radius: 18px;
      font-size: 1em;
      background-color: transparent; /* 背景设为透明 */
      border: 1px solid #ddd; /* 添加边框以增加可见性 */
      word-wrap: break-word; /* 确保文本可以换行 */
    }

    .bubble.user-1 {
      float: left;
      color: #555; /* 可以为不同用户设置不同的文本颜色 */
    }

    .bubble.user-2 {
      float: right;
      color: #333; /* 可以为不同用户设置不同的文本颜色 */
    }

    .bubble::before {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
      border-color: transparent;
    }

    /* .bubble.user-1::before {
      top: 0;
      left: -15px;
      border-width: 0 15px 15px 0;
      border-color: transparent #ddd transparent transparent; 
    }

    .bubble.user-2::before {
      top: 0;
      right: -15px;
      border-width: 15px 15px 0 0;
      border-color: transparent transparent transparent #ddd; 
    } */

    .clear {
      clear: both;
    }
  </style>