<template>

    <PageContainer>
        菜单管理
        <div class="flex justify-center">
            <div>
                未使用菜单
                <VueDraggable group="menu" v-model="list" :animation="150" handle=".handle"
                    class="flex flex-col gap-2 p-4 w-300px bg-gray-500/5 rounded">
                    <div v-for="item in list" :key="item.path" class="flex items-center menu">
                        <el-icon class="handle select-none">
                            <Operation />
                        </el-icon>
                        <div class="flex items-center menuContent">
                            <el-icon class="menuicon">
                                <component :is="item.icon"></component>
                            </el-icon>
                            {{ item.label }}
                        </div>
                    </div>
                </VueDraggable>
            </div>
            <div>
                已配置菜单
                <VueDraggable group="menu" v-model="list2" :animation="150" handle=".handle"
                    class="flex flex-col gap-2 p-4 w-300px bg-gray-500/5 rounded">
                    <div v-for="item in list2" :key="item.path" class="flex items-center menu">
                        <el-icon class="handle select-none">
                            <Operation />
                        </el-icon>
                        <div class="flex items-center menuContent">
                            <el-icon class="menuicon">
                                <component :is="item.icon"></component>
                            </el-icon>
                            {{ item.label }}
                        </div>
                    </div>
                </VueDraggable>
            </div>
        </div>
    </PageContainer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import PageContainer from "@/components/page-utils/pageContainer.vue"
import { VueDraggable } from 'vue-draggable-plus'
import type { Menu } from '@/layouts/menu/index.vue';
const loading = ref(false)
const list = ref<Menu[]>([]);
const list2 = ref<Menu[]>([]);
setTimeout(() => {
    list.value = [{
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
}, 3000);

</script>
<style scoped lang="scss">
.menu {
    padding: 10px 0;

    .handle {
        margin-right: 20px;
    }

    .menuicon {
        margin-right: 10px;
    }
}
</style>