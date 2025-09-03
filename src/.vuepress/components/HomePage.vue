<!-- .vuepress/components/HomePage.vue -->
<template>
    <div class="home-page">
        <h1>欢迎来到我的网站！</h1>
        <button @click="showAlert">点击测试 Vue 交互</button>
        <p>当前计数：{{ count }}</p>
        <el-button type="primary">测试按钮</el-button>
        <el-button type="success" @click="$message.success('Hello')">点击测试2</el-button>
        <Edit />
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        showAlert() {

            this.count++;
        }
    }
}
</script>

<style scoped>
.home-page {
    text-align: center;
    padding: 10rem;

}

button {
    background: #42b983;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
}
</style>