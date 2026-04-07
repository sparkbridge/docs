<template>
    <!-- 插件列表网格 -->
    <div class="plugin-grid">
        <div v-for="plugin in plugins" :key="plugin.name" class="plugin-card" @click="openModal(plugin)">
            <div class="card-header">
                <div class="icon-box">
                    <img v-if="plugin.icon" :src="plugin.icon" :alt="plugin.name" />
                    <span v-else class="fallback-icon">
                        {{ plugin.name ? plugin.name.charAt(0).toUpperCase() : 'P' }}
                    </span>
                </div>

                <div class="title-area">
                    <div class="title-row">
                        <h3 class="plugin-title">{{ plugin.name }}</h3>
                        <span class="plugin-version" v-if="plugin.version">v{{ plugin.version }}</span>
                    </div>

                    <div class="tags-group" v-if="plugin.tags && plugin.tags.length">
                        <span v-for="(tag, index) in plugin.tags" :key="index" class="plugin-tag"
                            :class="getTagStyle(tag)">
                            {{ typeof tag === 'object' ? tag.text : tag }}
                        </span>
                    </div>
                </div>
            </div>

            <div class="card-body">
                <p class="plugin-desc" :title="plugin.desc">{{ plugin.desc || '该插件暂无描述信息。' }}</p>
            </div>

            <div class="card-footer">
                <div class="author-info">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" class="mini-icon">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span>{{ plugin.author || '社区开发者' }}</span>
                </div>

                <div class="action-btn">
                    <span>查看详情</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" class="mini-icon link-icon">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </div>
    </div>

    <!-- 详情弹窗 (挂载到 body 防止层级遮挡) -->
    <Teleport to="body">
        <Transition name="fade">
            <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
                <div class="modal-container" @click.stop>
                    <!-- 关闭按钮 -->
                    <button class="close-btn" @click="closeModal">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>

                    <!-- 加载状态 -->
                    <div v-if="isLoadingDetail" class="modal-status">
                        <svg class="spinner" viewBox="0 0 50 50">
                            <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="4"></circle>
                        </svg>
                        <span>正在获取插件详情...</span>
                    </div>

                    <!-- 错误状态 -->
                    <div v-else-if="detailError" class="modal-status error">
                        {{ detailError }}
                    </div>

                    <!-- 详情内容展示 -->
                    <div v-else-if="pluginDetail" class="modal-content">
                        <div class="modal-header">
                            <div class="modal-icon-box">
                                <img v-if="pluginDetail.icon" :src="pluginDetail.icon" :alt="pluginDetail.name" />
                                <span v-else class="icon-fallback">{{ pluginDetail.name.charAt(0).toUpperCase()
                                    }}</span>
                            </div>

                            <div class="modal-title-area">
                                <h2 class="modal-title">{{ pluginDetail.name }}</h2>
                                <div class="modal-meta-row">
                                    <span class="v-tag" v-if="pluginDetail.version">v{{ pluginDetail.version }}</span>
                                    <span class="author-tag" v-if="pluginDetail.author">@{{ pluginDetail.author
                                        }}</span>
                                </div>
                                <div class="stats-row">
                                    <span class="stat-item" title="浏览量">
                                        <svg viewBox="0 0 24 24" class="svg-icon">
                                            <path fill="currentColor"
                                                d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                                        </svg>
                                        {{ pluginDetail.views || 0 }}
                                    </span>
                                    <span class="stat-item" title="下载量">
                                        <svg viewBox="0 0 24 24" class="svg-icon">
                                            <path fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                                        </svg>
                                        {{ pluginDetail.downloads || 0 }}
                                    </span>
                                    <span class="stat-item" title="发布时间" v-if="pluginDetail.createdAt">
                                        <svg viewBox="0 0 24 24" class="svg-icon">
                                            <path fill="currentColor"
                                                d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z" />
                                        </svg>
                                        {{ formatDate(pluginDetail.createdAt) }}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="modal-desc">
                            <p>{{ pluginDetail.longDesc || pluginDetail.desc || '暂无详细描述...' }}</p>
                        </div>

                        <div class="modal-tags" v-if="pluginDetail.tags && pluginDetail.tags.length">
                            <span v-for="tag in pluginDetail.tags" :key="tag" class="meta-tag">#{{ tag }}</span>
                        </div>

                        <div class="modal-actions">
                            <a v-if="pluginDetail.repo" :href="pluginDetail.repo" target="_blank"
                                class="m-btn btn-secondary">
                                <svg viewBox="0 0 24 24" class="svg-icon">
                                    <path fill="currentColor"
                                        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.45-1.15-1.11-1.46-1.11-1.46c-.9-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                                </svg>
                                源码
                            </a>
                            <a v-if="pluginDetail.docUrl" :href="pluginDetail.docUrl" target="_blank"
                                class="m-btn btn-secondary">
                                <svg viewBox="0 0 24 24" class="svg-icon">
                                    <path fill="currentColor"
                                        d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                                </svg>
                                文档
                            </a>
                            <a v-if="pluginDetail.downloadUrl" :href="pluginDetail.downloadUrl" target="_blank"
                                class="m-btn btn-primary">
                                <svg viewBox="0 0 24 24" class="svg-icon">
                                    <path fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                                </svg>
                                立即下载
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const plugins = ref([]);

// 弹窗状态管理
const isModalOpen = ref(false);
const isLoadingDetail = ref(false);
const pluginDetail = ref(null);
const detailError = ref('');

// 1. 获取插件列表
onMounted(async () => {
    try {
        const response = await fetch('https://lition.top/api/v1/plugins/');
        const result = await response.json();
        if (result.code === 200 && Array.isArray(result.data)) {
            plugins.value = result.data;
        }
    } catch (error) {
        console.error('获取插件列表失败:', error);
    }
});

// 2. 打开弹窗并请求详细数据
const openModal = async (plugin) => {
    isModalOpen.value = true;
    isLoadingDetail.value = true;
    pluginDetail.value = null;
    detailError.value = '';

    // 锁定 body 滚动
    document.body.style.overflow = 'hidden';

    try {
        const response = await fetch(`https://lition.top/api/v1/plugins/${plugin.name}`);
        const result = await response.json();

        if (result.code === 200 && result.data) {
            pluginDetail.value = result.data;
        } else {
            detailError.value = '未找到该插件的详细信息';
        }
    } catch (error) {
        console.error('获取详情失败:', error);
        detailError.value = '网络请求失败，请稍后重试';
    } finally {
        isLoadingDetail.value = false;
    }
};

// 3. 关闭弹窗
const closeModal = () => {
    isModalOpen.value = false;
    // 恢复 body 滚动
    document.body.style.overflow = '';
};

// 组件卸载时确保恢复滚动
onUnmounted(() => {
    document.body.style.overflow = '';
});

// 日期格式化
const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

// 标签样式
const getTagStyle = (tag) => {
    if (typeof tag === 'object' && tag.type) return `tag-${tag.type}`;
    const text = typeof tag === 'object' ? tag.text : tag;
    if (text === '官方' || text === 'official') return 'tag-official';
    if (text === '热门' || text === '精华') return 'tag-recommend';
    if (text === '核心' || text === 'core' || text === 'ccb') return 'tag-core';
    return 'tag-default';
};
</script>

<style scoped>
/* ==========================================
   原网格列表样式 (保留不变)
   ========================================== */
.plugin-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.plugin-card {
    --card-bg: var(--vp-c-bg-soft, #f8fafc);
    --card-border: var(--vp-c-divider, #e2e8f0);
    --card-hover-border: var(--vp-c-brand, #3b82f6);
    --text-main: var(--vp-c-text-1, #1e293b);
    --text-sub: var(--vp-c-text-2, #64748b);
    display: flex;
    flex-direction: column;
    background-color: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 16px;
    padding: 20px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    height: 100%;
    box-sizing: border-box;
}

.plugin-card:hover {
    border-color: var(--card-hover-border);
    transform: translateY(-4px);
    box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.1);
}

.card-header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;
}

.icon-box {
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    border-radius: 12px;
    background: var(--vp-c-bg-alt, #ffffff);
    border: 1px solid var(--card-border);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.icon-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.fallback-icon {
    font-size: 24px;
    font-weight: 800;
    color: var(--card-hover-border, #3b82f6);
}

:global(.dark) .fallback-icon {
    color: rgba(59, 130, 246, 0.8);
}

.title-area {
    flex: 1;
    min-width: 0;
}

.title-row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 6px;
}

.plugin-title {
    margin: 0;
    font-size: 16px;
    font-weight: 700;
    color: var(--text-main);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.2;
}

.plugin-version {
    font-size: 11px;
    font-family: 'Fira Code', monospace;
    background: rgba(59, 130, 246, 0.1);
    color: var(--card-hover-border, #3b82f6);
    padding: 0px 4px;
    border-radius: 4px;
    font-weight: 600;
    line-height: 1.4;
    margin-top: 2px;
}

:global(.dark) .plugin-version {
    background-color: rgba(0, 0, 0, 0.25);
    color: rgba(255, 255, 255, 0.6);
}

.tags-group {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
}

.plugin-tag {
    font-size: 11px;
    font-weight: 600;
    padding: 2px 8px;
    border-radius: 20px;
    line-height: 1.4;
}

.tag-official {
    background: #eff6ff;
    color: #2563eb;
    border: 1px solid #bfdbfe;
}

.tag-recommend {
    background: #fdf2f8;
    color: #db2777;
    border: 1px solid #fbcfe8;
}

.tag-core {
    background: #fffbeb;
    color: #d97706;
    border: 1px solid #fde68a;
}

.tag-default {
    background: #ffffff;
    color: var(--text-sub);
    border: 1px solid var(--card-border);
}

:global(.dark) .tag-official {
    background: rgba(37, 99, 235, 0.2);
    border-color: rgba(37, 99, 235, 0.3);
    color: #60a5fa;
}

:global(.dark) .tag-recommend {
    background: rgba(219, 39, 119, 0.2);
    border-color: rgba(219, 39, 119, 0.3);
    color: #f472b6;
}

:global(.dark) .tag-core {
    background: rgba(217, 119, 6, 0.2);
    border-color: rgba(217, 119, 6, 0.3);
    color: #fbbf24;
}

:global(.dark) .tag-default {
    background: transparent;
    border: 1px solid var(--card-border);
    color: var(--text-sub);
}

.card-body {
    flex: 1;
    margin-bottom: 20px;
}

.plugin-desc {
    margin: 0;
    font-size: 13px;
    color: var(--text-sub);
    line-height: 1.6;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 16px;
    border-top: 1px solid var(--card-border);
}

.author-info {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: var(--text-sub);
    font-weight: 500;
}

.mini-icon {
    width: 14px;
    height: 14px;
}

.action-btn {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 13px;
    font-weight: 600;
    color: var(--card-hover-border);
}

/* ==========================================
   弹窗样式 (Modal)
   ========================================== */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    padding: 20px;
}

.modal-container {
    background: var(--vp-c-bg);
    border: 1px solid var(--vp-c-divider);
    border-radius: 16px;
    width: 100%;
    max-width: 600px;
    max-height: 85vh;
    overflow-y: auto;
    position: relative;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.close-btn {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: var(--vp-c-bg-alt);
    border: 1px solid var(--vp-c-divider);
    color: var(--vp-c-text-2);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;
    z-index: 10;
}

.close-btn:hover {
    background: var(--vp-c-bg-soft);
    color: var(--vp-c-text-1);
}

/* 弹窗内的内容排版 */
.modal-content {
    padding: 32px;
}

.modal-header {
    display: flex;
    gap: 20px;
    margin-bottom: 24px;
    align-items: flex-start;
}

.modal-icon-box {
    width: 72px;
    height: 72px;
    border-radius: 16px;
    border: 1px solid var(--vp-c-divider);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--vp-c-bg-alt);
    flex-shrink: 0;
}

.modal-icon-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.icon-fallback {
    font-size: 32px;
    font-weight: bold;
    color: var(--vp-c-brand);
    font-family: var(--vp-font-family-mono);
}

.modal-title-area {
    flex: 1;
    padding-right: 20px;
}

.modal-title {
    margin: 0 0 8px 0 !important;
    font-size: 24px !important;
    border: none;
    padding: 0;
    font-weight: 700;
    color: var(--vp-c-text-1);
}

.modal-meta-row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
}

.v-tag {
    font-size: 12px;
    font-family: var(--vp-font-family-mono);
    background: rgba(59, 130, 246, 0.1);
    color: var(--vp-c-brand);
    padding: 2px 6px;
    border-radius: 6px;
    font-weight: 600;
}

.author-tag {
    font-size: 13px;
    color: var(--vp-c-text-2);
    font-weight: 500;
}

.stats-row {
    display: flex;
    gap: 16px;
    color: var(--vp-c-text-3);
    font-size: 13px;
    font-family: var(--vp-font-family-mono);
}

.stat-item {
    display: inline-flex;
    align-items: center;
    gap: 4px;
}

.svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
}

.modal-desc {
    background: var(--vp-c-bg-soft);
    padding: 16px;
    border-radius: 12px;
    margin-bottom: 20px;
}

/* 新增针对 p 标签的换行支持 */
.modal-desc p {
    margin: 0;
    font-size: 15px;
    color: var(--vp-c-text-2);
    line-height: 1.6;

    /* 核心属性：保留数据中的换行符(\n)，同时允许文本自动换行 */
    white-space: pre-wrap;

    /* 防止超长英文单词或链接撑破容器 */
    word-break: break-word;
}

.modal-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 24px;
}

.meta-tag {
    font-size: 12px;
    color: var(--vp-c-brand);
    background: var(--vp-c-bg-alt);
    padding: 4px 10px;
    border-radius: 12px;
    border: 1px solid var(--vp-c-divider);
    font-weight: 500;
}

.modal-actions {
    display: flex;
    gap: 12px;
    border-top: 1px solid var(--vp-c-divider);
    padding-top: 24px;
}

.m-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 8px 16px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none !important;
    transition: opacity 0.2s;
    flex: 1;
    text-align: center;
}

.m-btn:hover {
    opacity: 0.8;
}

.btn-primary {
    background: var(--vp-c-brand);
    color: white !important;
}

.btn-secondary {
    background: var(--vp-c-bg-alt);
    color: var(--vp-c-text-1) !important;
    border: 1px solid var(--vp-c-divider);
}

/* 状态提示样式 */
.modal-status {
    padding: 60px 20px;
    text-align: center;
    color: var(--vp-c-text-3);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
}

.modal-status.error {
    color: var(--vp-c-warning-1);
}

.spinner {
    width: 24px;
    height: 24px;
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

/* 弹窗动画 */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active .modal-container {
    animation: scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes scaleIn {
    0% {
        transform: scale(0.95) translateY(10px);
        opacity: 0;
    }

    100% {
        transform: scale(1) translateY(0);
        opacity: 1;
    }
}
</style>