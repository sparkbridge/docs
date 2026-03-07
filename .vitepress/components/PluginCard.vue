<template>
    <div class="plugin-card" @click="openLink">
        <div class="card-header">
            <div class="icon-box">
                <img v-if="icon" :src="icon" :alt="title" />
                <span v-else class="fallback-icon">{{ title.charAt(0).toUpperCase() }}</span>
            </div>

            <div class="title-area">
                <h3 class="plugin-title">{{ title }}</h3>
                <div class="tags-group" v-if="tags && tags.length">
                    <span v-for="(tag, index) in tags" :key="index" class="plugin-tag" :class="getTagStyle(tag)">
                        {{ typeof tag === 'object' ? tag.text : tag }}
                    </span>
                </div>
            </div>
        </div>

        <div class="card-body">
            <p class="plugin-desc" :title="desc">{{ desc }}</p>
        </div>

        <div class="card-footer">
            <div class="author-info">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" class="mini-icon">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span>{{ author }}</span>
            </div>

            <a :href="link" target="_blank" class="action-link" @click.stop>
                <span>获取</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" class="mini-icon link-icon">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
            </a>
        </div>
    </div>
</template>

<script setup>
// 接收外部传入的参数
const props = defineProps({
    icon: { type: String, default: '' },
    title: { type: String, required: true },
    author: { type: String, default: '社区开发者' },
    desc: { type: String, default: '该插件暂无描述信息。' },
    link: { type: String, default: '#' },
    // 标签，支持字符串数组 ['官方', '工具'] 或 对象数组 [{text: '官方', type: 'primary'}]
    tags: { type: Array, default: () => [] }
});

// 点击整个卡片也可跳转
const openLink = () => {
    if (props.link && props.link !== '#') {
        window.open(props.link, '_blank');
    }
};

// 智能推断标签样式（如果传的是简单的字符串，自动分配好看的颜色）
const getTagStyle = (tag) => {
    // 如果传了具体类型，直接使用
    if (typeof tag === 'object' && tag.type) return `tag-${tag.type}`;

    const text = typeof tag === 'object' ? tag.text : tag;
    // 关键词自动着色
    if (text === '官方') return 'tag-official';
    if (text === '推荐' || text === '精华') return 'tag-recommend';
    if (text === '核心') return 'tag-core';

    return 'tag-default'; // 其他任意文本的默认灰色
};
</script>

<style scoped>
/* ==========================================
   1. 完美契合 VitePress 的响应式变量
   ========================================== */
.plugin-card {
    /* 兼容 VitePress 变量，如果是其他项目也会有优雅的回退颜色 */
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
    /* 保证在 Grid 布局中高度对齐 */
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
    color: var(--card-hover-border);
}

.title-area {
    flex: 1;
    min-width: 0;
    /* 防止文本溢出撑破 flex */
}

.plugin-title {
    margin: 0 0 6px 0;
    font-size: 16px;
    font-weight: 700;
    color: var(--text-main);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.2;
}

/* ==========================================
   3. 标签系统 (智能着色)
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

/* 根据关键词自动分配的颜色体系 */
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
    background: var(--vp-c-bg-alt, #e2e8f0);
    color: var(--text-sub);
    border: 1px solid transparent;
}

/* 适配暗黑模式的标签颜色修正 */
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
    background: rgba(100, 116, 139, 0.2);
    color: #94a3b8;
}

/* ==========================================
   4. 中部描述与底部信息
   ========================================== */
.card-body {
    flex: 1;
    /* 撑开中间空间，把 footer 挤到底部 */
    margin-bottom: 20px;
}

.plugin-desc {
    margin: 0;
    font-size: 13px;
    color: var(--text-sub);
    line-height: 1.6;
    /* 多行截断：最多显示 2 行 */
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