<template>
    <div v-if="pluginData" class="plugin-meta-compact">
        <div class="meta-section main-info">
            <div class="header-flex">
                <div class="plugin-icon-box">
                    <img v-if="pluginData.icon" :src="pluginData.icon" :alt="pluginData.name" />
                    <span v-else class="icon-fallback">{{ pluginData.name.charAt(0).toUpperCase() }}</span>
                </div>

                <div class="title-content">
                    <div class="name-row">
                        <h2 class="plugin-name">{{ pluginData.name }}</h2>
                        <span class="v-tag" v-if="pluginData.version">
                            <svg viewBox="0 0 24 24" class="svg-icon">
                                <path fill="currentColor"
                                    d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.41l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.38-.38.59-.88.59-1.41s-.21-1.04-.59-1.41zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" />
                            </svg>
                            v{{ pluginData.version }}
                        </span>
                        <span class="author-tag" v-if="pluginData.author">
                            <svg viewBox="0 0 24 24" class="svg-icon">
                                <path fill="currentColor"
                                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                            {{ pluginData.author }}
                        </span>
                    </div>

                    <!-- 新增：数据统计栏 -->
                    <div class="stats-row">
                        <span class="stat-item" title="浏览量">
                            <svg viewBox="0 0 24 24" class="svg-icon">
                                <path fill="currentColor"
                                    d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                            </svg>
                            {{ pluginData.views || 0 }}
                        </span>
                        <span class="stat-item" title="下载量">
                            <svg viewBox="0 0 24 24" class="svg-icon">
                                <path fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                            </svg>
                            {{ pluginData.downloads || 0 }}
                        </span>
                        <span class="stat-item" title="发布时间" v-if="pluginData.createdAt">
                            <svg viewBox="0 0 24 24" class="svg-icon">
                                <path fill="currentColor"
                                    d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z" />
                            </svg>
                            {{ formatDate(pluginData.createdAt) }}
                        </span>
                    </div>

                    <p class="plugin-desc">{{ pluginData.desc || '暂无详细描述...' }}</p>

                    <div class="tags-row" v-if="pluginData.tags && pluginData.tags.length">
                        <span v-for="tag in pluginData.tags" :key="tag" class="meta-tag">
                            #{{ tag }}
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div class="meta-section action-bar">
            <!-- 仓库链接 -->
            <div class="action-item" v-if="pluginData.repo">
                <svg viewBox="0 0 24 24" class="svg-icon a-icon">
                    <path fill="currentColor"
                        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.45-1.15-1.11-1.46-1.11-1.46c-.9-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
                <a :href="pluginData.repo" target="_blank" class="a-link">开源仓库</a>
            </div>

            <div class="action-divider" v-if="pluginData.repo && (pluginData.docUrl || pluginData.downloadUrl)"></div>

            <!-- 文档链接 -->
            <div class="action-item" v-if="pluginData.docUrl">
                <svg viewBox="0 0 24 24" class="svg-icon a-icon">
                    <path fill="currentColor"
                        d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                </svg>
                <a :href="pluginData.docUrl" target="_blank" class="a-link">查看文档</a>
            </div>

            <div class="action-divider" v-if="pluginData.docUrl && pluginData.downloadUrl"></div>

            <!-- 下载链接 -->
            <div class="action-item download-action" v-if="pluginData.downloadUrl">
                <svg viewBox="0 0 24 24" class="svg-icon a-icon">
                    <path fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                </svg>
                <a :href="pluginData.downloadUrl" target="_blank" class="a-link highlight">下载插件</a>
            </div>
        </div>
    </div>

    <!-- 加载中与失败提示优化 -->
    <div v-else-if="loading" class="meta-status">
        <svg class="spinner" viewBox="0 0 50 50">
            <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="4"></circle>
        </svg>
        <span>正在匹配插件数据...</span>
    </div>
    <div v-else class="meta-status error">
        暂无该插件的元数据信息。
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useData } from 'vitepress';

const { page } = useData();
const pluginData = ref(null);
const loading = ref(true);

// 日期格式化工具
const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

const fetchPluginInfo = async () => {
    try {
        loading.value = true;
        const pathParts = page.value.relativePath.split('/');
        const fileName = pathParts[pathParts.length - 1].replace('.md', '');

        const response = await fetch('https://lition.top/api/v1/plugins/' + fileName);
        const result = await response.json();

        if (result.code === 200 && result.data) {
            pluginData.value = result.data;
        } else {
            pluginData.value = null;
        }
    } catch (e) {
        console.error('PluginMeta Fetch Error:', e);
        pluginData.value = null;
    } finally {
        loading.value = false;
    }
};

onMounted(fetchPluginInfo);
watch(() => page.value.relativePath, fetchPluginInfo);
</script>

<style scoped>
.plugin-meta-compact {
    margin: 24px 0;
    border: 1px solid var(--vp-c-divider);
    border-radius: 12px;
    overflow: hidden;
    background-color: var(--vp-c-bg-alt);
    transition: border-color 0.3s;
}

.plugin-meta-compact:hover {
    border-color: var(--vp-c-brand);
}

.main-info {
    padding: 20px;
    background-color: var(--vp-c-bg-soft);
}

.header-flex {
    display: flex;
    gap: 20px;
    align-items: flex-start;
}

.plugin-icon-box {
    width: 64px;
    height: 64px;
    flex-shrink: 0;
    border-radius: 14px;
    background: var(--vp-c-bg-alt);
    border: 1px solid var(--vp-c-divider);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.plugin-icon-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.icon-fallback {
    font-size: 28px;
    font-weight: bold;
    color: var(--vp-c-brand);
    font-family: var(--vp-font-family-mono);
}

.title-content {
    flex: 1;
}

.name-row {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
}

.plugin-name {
    margin: 0 !important;
    border: none !important;
    padding: 0 !important;
    font-size: 22px !important;
    color: var(--vp-c-text-1);
    font-weight: 700;
}

/* 图标基础样式 */
.svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
}

.v-tag,
.author-tag {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 12px;
}

.v-tag {
    font-family: var(--vp-font-family-mono);
    background: rgba(59, 130, 246, 0.1);
    color: var(--vp-c-brand);
    padding: 2px 6px;
    border-radius: 6px;
    font-weight: 600;
}

:global(.dark) .v-tag {
    background-color: rgba(59, 130, 246, 0.2);
}

.author-tag {
    color: var(--vp-c-text-2);
    font-weight: 500;
}

/* 新增统计数据栏样式 */
.stats-row {
    display: flex;
    gap: 16px;
    margin-top: 8px;
    color: var(--vp-c-text-3);
    font-size: 13px;
    font-family: var(--vp-font-family-mono);
}

.stat-item {
    display: inline-flex;
    align-items: center;
    gap: 4px;
}

.plugin-desc {
    margin: 12px 0 0 0 !important;
    font-size: 14px;
    color: var(--vp-c-text-2);
    line-height: 1.6;
}

.tags-row {
    display: flex;
    gap: 8px;
    margin-top: 10px;
    flex-wrap: wrap;
}

.meta-tag {
    font-size: 12px;
    color: var(--vp-c-brand);
    background: var(--vp-c-bg-alt);
    padding: 2px 8px;
    border-radius: 12px;
    border: 1px solid var(--vp-c-divider);
    font-weight: 500;
}

/* 底部操作条 */
.action-bar {
    display: flex;
    align-items: center;
    padding: 12px 20px;
    background-color: var(--vp-c-bg-alt);
    border-top: 1px solid var(--vp-c-divider);
    gap: 16px;
    flex-wrap: wrap;
}

.action-item {
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--vp-c-text-2);
    transition: color 0.2s;
}

.action-item:hover {
    color: var(--vp-c-brand);
}

.a-icon {
    font-size: 16px;
}

.a-link {
    font-size: 14px;
    color: inherit;
    text-decoration: none;
    font-weight: 600;
}

.action-item.download-action {
    color: var(--vp-c-brand);
}

.action-item.download-action .highlight {
    text-decoration: underline;
    text-underline-offset: 4px;
}

.action-divider {
    width: 1px;
    height: 14px;
    background-color: var(--vp-c-divider);
}

/* 状态提示样式（加载中/错误） */
.meta-status {
    margin: 24px 0;
    padding: 30px;
    text-align: center;
    color: var(--vp-c-text-3);
    font-size: 14px;
    border: 1px dashed var(--vp-c-divider);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.meta-status.error {
    color: var(--vp-c-warning-1);
    border-color: var(--vp-c-warning-3);
}

/* 简单的 SVG 加载动画 */
.spinner {
    width: 18px;
    height: 18px;
    animation: rotate 2s linear infinite;
}

.spinner .path {
    stroke: currentColor;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
    100% {
        transform: rotate(360deg);
    }
}

@keyframes dash {
    0% {
        stroke-dasharray: 1, 150;
        stroke-dashoffset: 0;
    }

    50% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -35;
    }

    100% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -124;
    }
}

@media (max-width: 480px) {
    .header-flex {
        flex-direction: column;
        gap: 16px;
    }

    .plugin-icon-box {
        width: 52px;
        height: 52px;
    }
}
</style>