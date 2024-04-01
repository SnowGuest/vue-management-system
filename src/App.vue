<script setup lang="ts">
import { provide, reactive } from 'vue';

export interface App {
    showFooter:boolean
}
// 在这里管理全局动态变量
const app = reactive<App>({
    showFooter: true
})
provide<App>("app", app)
</script>

<template>
    <el-config-provider>
        <RouterView />
    </el-config-provider>
</template>
