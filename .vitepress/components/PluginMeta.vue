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
                        <span class="v-tag" v-if="pluginData.version">v{{ pluginData.version }}</span>
                        <span class="author-tag">@{{ pluginData.author || 'lition' }}</span>
                    </div>
                    <div class="tags-row" v-if="pluginData.tags && pluginData.tags.length">
                        <span v-for="tag in pluginData.tags" :key="tag" class="meta-tag">
                            #{{ tag }}
                        </span>
                    </div>
                    <p class="plugin-desc">{{ pluginData.desc || '暂无详细描述...' }}</p>
                </div>
            </div>
        </div>

        <div class="meta-section action-bar">
            <div class="action-item" v-if="pluginData.repo">
                <span class="a-label">SOURCE</span>
                <a :href="pluginData.repo" target="_blank" class="a-link">GitHub 仓库</a>
            </div>
            <div class="action-divider" v-if="pluginData.repo && pluginData.downloadUrl"></div>
            <div class="action-item" v-if="pluginData.downloadUrl">
                <span class="a-label">RELEASE</span>
                <a :href="pluginData.downloadUrl" target="_blank" class="a-link">下载插件</a>
            </div>
        </div>
    </div>

    <div v-else-if="loading" class="meta-loading">正在匹配插件数据...</div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useData } from 'vitepress';

const { page } = useData();
const pluginData = ref(null);
const loading = ref(true);

const fetchPluginInfo = async () => {
    try {
        loading.value = true;
        const pathParts = page.value.relativePath.split('/');
        const fileName = pathParts[pathParts.length - 1].replace('.md', '');

        const response = await fetch('/store/index.json');
        const allPlugins = await response.json();

        // 尝试匹配 name
        const match = allPlugins.find(p => p.name === fileName);
        if (match) {
            pluginData.value = match;
        }
    } catch (e) {
        console.error('PluginMeta Fetch Error:', e);
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
}

.main-info {
    padding: 20px;
    background-color: var(--vp-c-bg-soft);
}

.header-flex {
    display: flex;
    gap: 16px;
    align-items: flex-start;
}

.plugin-icon-box {
    width: 56px;
    height: 56px;
    flex-shrink: 0;
    border-radius: 12px;
    background: var(--vp-c-bg-alt);
    border: 1px solid var(--vp-c-divider);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.plugin-icon-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.icon-fallback {
    font-size: 24px;
    font-weight: bold;
    color: var(--vp-c-brand);
    font-family: var(--vp-font-family-mono);
}

.name-row {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
}

.plugin-name {
    margin: 0 !important;
    border: none !important;
    padding: 0 !important;
    font-size: 20px !important;
    color: var(--vp-c-text-1);
}

.v-tag {
    font-size: 11px;
    font-family: var(--vp-font-family-mono);
    background: rgba(59, 130, 246, 0.1);
    color: var(--vp-c-brand);
    padding: 0px 4px;
    border-radius: 4px;
    font-weight: 600;
}

:global(.dark) .v-tag {
    background-color: rgba(0, 0, 0, 0.25);
    color: rgba(255, 255, 255, 0.6);
}

.author-tag {
    font-size: 13px;
    color: var(--vp-c-text-3);
}

/* 标签样式 */
.tags-row {
    display: flex;
    gap: 8px;
    margin-top: 4px;
}

.meta-tag {
    font-size: 12px;
    color: var(--vp-c-brand);
    opacity: 0.8;
    font-weight: 500;
}

.plugin-desc {
    margin: 8px 0 0 0 !important;
    font-size: 14px;
    color: var(--vp-c-text-2);
    line-height: 1.5;
}

/* 底部操作条 */
.action-bar {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    background-color: var(--vp-c-bg-alt);
    border-top: 1px solid var(--vp-c-divider);
    gap: 16px;
}

.action-item {
    display: flex;
    align-items: center;
    gap: 8px;
}

.a-label {
    font-size: 10px;
    font-weight: 800;
    color: var(--vp-c-text-3);
    letter-spacing: 0.5px;
}

.a-link {
    font-size: 13px;
    color: var(--vp-c-brand);
    text-decoration: none;
    font-weight: 500;
}

.a-link:hover {
    text-decoration: underline;
}

.action-divider {
    width: 1px;
    height: 12px;
    background-color: var(--vp-c-divider);
}

.meta-loading {
    padding: 20px;
    text-align: center;
    color: var(--vp-c-text-3);
    font-size: 14px;
}

@media (max-width: 480px) {
    .header-flex {
        flex-direction: column;
        gap: 12px;
    }

    .plugin-icon-box {
        width: 48px;
        height: 48px;
    }
}
</style>