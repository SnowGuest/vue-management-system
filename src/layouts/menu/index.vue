<template>
    <h1 class="projectName flex items-center justify-center">
        项目名
    </h1>
    <el-menu v-loading="loading" element-loading-background="rgba(122, 122, 122, 0.8)" :default-active="activeIndex"
        background-color="#001529" text-color="rgb(191, 203, 217)" class="menu" router>
        <MenuItem v-for="item in menu" :menu="item">
        </MenuItem>
    </el-menu>
</template>

<script lang="ts" setup>
import MenuItem from "./menuItem.vue"
import * as icons from "@element-plus/icons-vue"
import { ref, watch } from 'vue';
import { useRoute } from "vue-router";
const route = useRoute();
const activeIndex = ref("/dashborder");
const stop = watch(() => route.path, (newPath) => {
    activeIndex.value = newPath
}, { immediate: true })
const loading = ref(true)
export interface Menu {
    label: string;
    path: string;
    icon?: keyof typeof icons;
    children?: Menu[];
    type?: "menu" | "folder"
}
const menu = ref<Menu[]>([]);
setTimeout(() => {
    menu.value = [{
        label: "仪表盘",
        path: "/dashborder",
        icon: "Bell"
    }, {
        label: "菜单管理",
        path: "/menu",
        icon: "Bell"
    }, {
        label: "用户管理",
        path: "/user",
        icon: "Watch"
    }, {
        label: "角色管理",
        path: "/role",
        icon: "Watch"
    }, {
        label: "page2测试",
        path: "/page2",
        icon: "Watch"
    }];
    loading.value = false
}, 3000)

</script>
<style lang="scss" scoped>
.menu {
    flex: 1;
}

.projectName {
    border-right: 1px solid var(--el-menu-border-color);
    height: 60px;
    font-size: 20px;
    color: #fff;
    background-color: #001529;
}

.skeleton {
    width: 200px;
    padding: 0 20px;
    flex: 1;
    border-right: 1px solid var(--el-menu-border-color);
    // background-color: #001529;

    &-item {
        height: 20px;
        margin: 20px 0;
    }
}
</style>