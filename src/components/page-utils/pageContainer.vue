<template>
    <el-scrollbar :wrap-class="padding ? 'view-padding' : ''" :always :class="{ scroll: true, noScroll: !scroll }">
        <slot></slot>
    </el-scrollbar>
</template>

<script lang="ts" setup>
interface Props {
    padding?: boolean;
    scroll?: boolean
    always?: boolean;
}
withDefaults(defineProps<Props>(), {
    scroll: false,
    padding: true,
    always: false
})
</script>
<style lang="scss" scoped>
.scroll {
    :deep(.view-padding) {
        padding: 14px;
    }
}

.noScroll {
    :deep(.el-scrollbar__wrap) {
        overflow: hidden;
    }

    :deep(.el-scrollbar__bar) {
        display: none
    }
}
</style>