<template>
    用户管理
    <el-button @click="submit"> </el-button>
</template>

<script lang="ts" setup>
import request from "@/utils/request"
async function submit() {
    try {
        const data =  request.Get("/user");
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
</script>
<style lang="scss" scoped></style>