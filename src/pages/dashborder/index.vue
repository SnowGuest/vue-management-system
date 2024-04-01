<template>
    <PageContainer :scroll>
    <div style="height:200vh">
        仪表盘首页
        可以切换滚动
        <div>
            scroll
        </div>
        <el-button type="primary" @click="click1">点我改变是否可滚动</el-button>
    </div>
</PageContainer>
</template>

<script lang="ts" setup>
import PageContainer from "@/components/page-utils/pageContainer.vue"
import { ref } from "vue";
import { useRoute } from 'vue-router';
const scroll = ref(false)
const route = useRoute();
function click1() {
    scroll.value = !scroll.value
}
</script>
<style lang="scss" scoped></style>