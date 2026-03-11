<template>
    <div class="plugin-grid">
        <div v-for="plugin in plugins" :key="plugin.name" class="plugin-card" @click="openLink(plugin)">
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

                <a :href="plugin.repo || plugin.downloadUrl || '#'" target="_blank" class="action-link" @click.stop>
                    <span>获取源码</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" class="mini-icon link-icon">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const plugins = ref([]);

// 在组件挂载时去获取 JSON 数据
onMounted(async () => {
    try {
        const response = await fetch('/store/index.json');
        const data = await response.json();
        // 兼容处理：如果 json 本身就是数组则直接赋值，如果是对象包含数组则取对应字段
        plugins.value = Array.isArray(data) ? data : (data.plugins || data.data || []);
    } catch (error) {
        console.error('获取插件列表失败:', error);
    }
});

const openLink = (plugin) => {
    const targetUrl = plugin.repo || plugin.downloadUrl;
    if (targetUrl) {
        window.open(targetUrl, '_blank');
    }
};

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
   0. 网格布局容器
   ========================================== */
.plugin-grid {
    display: grid;
    /* 自动适应宽度，每列最小 320px */
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

/* ==========================================
   1. 核心卡片组件：完美契合 VitePress 的响应式变量
   ========================================== */
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
    text-decoration: none !important;
    height: 100%;
    box-sizing: border-box;
}

.plugin-card:hover {
    border-color: var(--card-hover-border);
    transform: translateY(-4px);
    box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.1);
}

/* ==========================================
   2. 头部：图标与标题
   ========================================== */
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

/* 优化图标占位符在暗色模式下的样式，使其不突兀 */
:global(.dark) .fallback-icon {
    color: rgba(59, 130, 246, 0.8);
    /* 降低亮度的蓝色文字 */
}

.title-area {
    flex: 1;
    min-width: 0;
}

/* 标题和版本号在同一行 */
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

/* --------------------------------------------------
   优化核心目标：版本号标签样式
   -------------------------------------------------- */
.plugin-version {
    font-size: 11px;
    font-family: 'Fira Code', monospace;
    background: rgba(59, 130, 246, 0.1);
    color: var(--card-hover-border, #3b82f6);

    /* 【核心修改】大幅减小上下和左右的内边距 */
    padding: 0px 4px;
    border-radius: 4px;
    /* 框变小了，圆角也适当改小显得更锐利精致 */
    font-weight: 600;
    line-height: 1.4;
    /* 锁死行高，防止被撑大 */
    margin-top: 2px;
    /* 视觉微调，让它和标题文字的重心对齐 */
}

/* 修复制止暗色模式下的突兀高亮，使其融入暗色卡片 */
:global(.dark) .plugin-version {
    background-color: rgba(0, 0, 0, 0.25);
    /* 让背景在暗色下再淡一点点 */
    color: rgba(255, 255, 255, 0.6);
    /* 稍微调暗文字亮度，去高光 */
}

/* ==========================================
   3. 标签系统
   ========================================== */
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

/* ==========================================
   4. 中部描述与底部信息
   ========================================== */
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

.action-link {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 13px;
    font-weight: 600;
    color: var(--card-hover-border);
    text-decoration: none;
    transition: opacity 0.2s;
}

.action-link:hover {
    opacity: 0.8;
}

.link-icon {
    width: 12px;
    height: 12px;
}
</style>