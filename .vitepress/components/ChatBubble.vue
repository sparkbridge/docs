<template>
    <div class="dialogue-container" :class="{ 'dark-theme': isDark }">
        <div v-for="(message, index) in messages" :key="index" class="message-row"
            :class="message.userClass === 'user-2' ? 'is-right' : 'is-left'">
            <div class="bubble">
                <img v-if="message.img" :src="message.img" alt="Message Image" class="bubble-img" />

                <span v-if="message.text" class="bubble-text">{{ message.text }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useData } from 'vitepress';

defineProps({
    messages: {
        type: Array,
        required: true,
        default: () => []
    }
});

const { isDark } = useData();
</script>

<style scoped>
/* 保持你原有的变量和布局逻辑 */
.dialogue-container {
    --bg-color: var(--vp-c-bg-soft, #f8fafc);
    --bubble-border: var(--vp-c-divider, #e2e8f0);
    --bubble-bg-left: var(--vp-c-bg-alt, #ffffff);
    --text-left: var(--vp-c-text-1, #1e293b);
    --bubble-bg-right: var(--vp-c-brand, #3b82f6);
    --text-right: #ffffff;

    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 20px;
    background-color: var(--bg-color);
    border-radius: 12px;
    border: 1px solid var(--bubble-border);
}

.dialogue-container.dark-theme {
    --bg-color: var(--vp-c-bg-soft, #1e293b);
    --bubble-border: var(--vp-c-divider, #334155);
    --bubble-bg-left: var(--vp-c-bg-alt, #334155);
    --text-left: var(--vp-c-text-1, #f8fafc);
    --bubble-bg-right: var(--vp-c-brand, #2563eb);
    --text-right: var(--vp-c-text-1, #ffffff);
}

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
    max-width: 80%;
    border-radius: 12px;
    border: 1px solid var(--bubble-border);
    /* 核心修改：让图片和文字纵向排列，并保持间距 */
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.is-left .bubble {
    background-color: var(--bubble-bg-left);
    color: var(--text-left);
    border-bottom-left-radius: 4px;
}

.is-right .bubble {
    background-color: var(--bubble-bg-right);
    color: var(--text-right);
    border-bottom-right-radius: 4px;
}

.bubble-text {
    /* 保持换行 */
    white-space: pre-wrap;
    word-break: break-word;
}

.bubble-img {
    max-width: 100%;
    border-radius: 6px;
    display: block;
}
</style>