<template>
    <div class="dialogue-container" :class="{ 'dark-theme': isDark }">
        <div v-for="(message, index) in messages" :key="index" class="message-row"
            :class="message.userClass === 'user-2' ? 'is-right' : 'is-left'">
            <div class="bubble">
                <img v-if="message.img" :src="message.img" alt="Message Image" class="bubble-img" />
                <span v-else class="bubble-text">{{ message.text }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
// ★ 重点 1：直接从 vitepress 导入内置数据 Hook
import { useData } from 'vitepress';

defineProps({
    messages: {
        type: Array,
        required: true,
        default: () => []
    }
});

// ★ 重点 2：解构出全局的响应式 isDark 变量
const { isDark } = useData();
</script>

<style scoped>
/* ==========================================
   1. 默认亮色模式变量 (自动契合 VitePress 亮色)
   ========================================== */
.dialogue-container {
    /* 我们可以直接利用 VitePress 的内置 CSS 变量，这样颜色更统一 */
    --bg-color: var(--vp-c-bg-soft, #f8fafc);
    --bubble-border: var(--vp-c-divider, #e2e8f0);

    --bubble-bg-left: var(--vp-c-bg, #ffffff);
    --text-left: var(--vp-c-text-1, #334155);

    --bubble-bg-right: var(--vp-c-brand, #3b82f6);
    /* 使用 VitePress 的主题色 */
    --text-right: #ffffff;
    --bubble-border-right: transparent;

    max-width: 600px;
    margin: 20px auto;
    padding: 24px;
    background-color: var(--bg-color);
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

/* ==========================================
   2. 暗黑模式变量 
   ========================================== */
.dialogue-container.dark-theme {
    /* 暗黑模式下，自动覆盖变量 */
    --bg-color: var(--vp-c-bg-soft, #1e293b);
    --bubble-border: var(--vp-c-divider, #334155);

    --bubble-bg-left: var(--vp-c-bg-alt, #334155);
    --text-left: var(--vp-c-text-1, #f8fafc);

    --bubble-bg-right: var(--vp-c-brand, #2563eb);
    --text-right: var(--vp-c-text-1, #ffffff);

    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

/* ==========================================
   3. 布局与气泡样式
   ========================================== */
.message-row {
    display: flex;
    width: 100%;
}

.is-left {
    justify-content: flex-start;
}

.is-right {
    justify-content: flex-end;
}

.bubble {
    position: relative;
    padding: 12px 16px;
    font-size: 14px;
    line-height: 1.5;
    max-width: 75%;
    word-wrap: break-word;
    transition: all 0.3s ease;
}

.is-left .bubble {
    background-color: var(--bubble-bg-left);
    color: var(--text-left);
    border: 1px solid var(--bubble-border);
    border-radius: 18px 18px 18px 4px;
}

.is-right .bubble {
    background-color: var(--bubble-bg-right);
    color: var(--text-right);
    border: 1px solid var(--bubble-border-right);
    border-radius: 18px 18px 4px 18px;
}

.bubble-img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    display: block;
}

.bubble:has(> .bubble-img) {
    padding: 4px;
}
</style>