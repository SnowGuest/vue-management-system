<script setup lang="ts">
import { provide, reactive } from 'vue';
import { preloadAppConf } from './utils';

export interface App {
    showFooter: boolean
}
const { showView } = preloadAppConf("/login")
// 在这里管理全局动态变量
const app = reactive<App>({
    showFooter: true
})
provide<App>("app", app)
</script>

<template>
    <el-config-provider>
        <RouterView v-if="showView" />
    </el-config-provider>
</template>
