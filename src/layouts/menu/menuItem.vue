<template>
    <el-sub-menu index="1" v-if="menu.type === 'folder'" :title="menu.label">
        <menuItem v-for="item in menu.children" :menu="item">
        </menuItem>
    </el-sub-menu>
    <div v-else>
        <el-menu-item :index="menu.path">
            <el-icon v-if="menu.icon">
                <component :is="menu.icon"></component>
            </el-icon>
            {{ menu.label }}
        </el-menu-item>
    </div>
</template>

<script lang="ts" setup>
import type { Menu } from './index.vue';
import { name2IconComp } from "@/utils/index"
interface Props {
    menu: Menu;
}
const props = defineProps<Props>()

</script>
<style lang="less" scoped></style>