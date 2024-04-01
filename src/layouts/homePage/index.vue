<template>
    <el-container class="pageSection">
        <el-aside width="200px" class="flex flex-col">
            <MenuVue />
        </el-aside>
        <el-container>
            <el-header class="grou">
                <PageHeaderVue></PageHeaderVue>
            </el-header>
            <el-main class="main">
                <RouterView></RouterView>
                <el-footer v-if="app?.showFooter" class="pageFooter text-center">示例版权©2000-2019</el-footer>
            </el-main>
        </el-container>
    </el-container>
</template>

<script lang="ts" setup>
import MenuVue from "@/layouts/menu/index.vue"
import PageHeaderVue from "../header/pageHeader.vue"
import { useRoute } from "vue-router";
import { inject } from "vue";
import type { App } from "@/App.vue";
const route = useRoute();
const app = inject<App>("app");
</script>
<style lang="scss" scoped>
.pageFooter {
    font-size: 12px;
    color: #787878;
    --el-footer-height: auto;
    --el-footer-padding: 10px;
}

.pageSection {
    height: 100%;

}
.main{
    --el-main-padding: 0px;
    overflow: hidden
}
</style>