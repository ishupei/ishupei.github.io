<!-- .vuepress/components/HomePage.vue -->
<template>
    <div class="home-page">
        <h1 class="title">欢迎来到我的网站！</h1>

        <div class="button-group">
            <el-button type="primary" class="action-btn">测试按钮</el-button>
            <el-button type="success" class="action-btn" @click="$message.success('Hello')">点击测试2</el-button>
        </div>
        
        <!-- 显示API数据 -->
        <div v-if="data" class="api-data">
            <h3>API测试数据:</h3>
            <pre>{{ JSON.stringify(data, null, 2) }}</pre>
        </div>

        <el-col :span="12" class="time-container">
            <div class="right cards">
                <div class="time">
                    <div class="date">
                        <span>{{ currentTime.year }}&nbsp;年&nbsp;</span>
                        <span>{{ currentTime.month }}&nbsp;月&nbsp;</span>
                        <span>{{ currentTime.day }}&nbsp;日&nbsp;</span>
                        <span class="sm-hidden">{{ currentTime.weekday }}</span>
                    </div>
                    <div class="text">
                        <span>{{ currentTime.hour }}:{{ currentTime.minute }}:{{ currentTime.second }}</span>
                    </div>
                </div>
            </div>
        </el-col>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { getCurrentTime } from "../utils/getTime";

const currentTime = ref({});
const timeInterval = ref(null);
const data = ref(null);

// 使用全局注册的$request方法
const testApi = async () => {
    try {
        // 使用全局的$request方法
        const response = await $request.get('/test');
        data.value = response;
        console.log('API调用成功:', response);
    } catch (error) {
        console.error('API调用失败:', error);
        // 可以在这里添加错误提示
        if (typeof $message !== 'undefined') {
            $message.error('API调用失败');
        }
    }
};

const updateTimeData = () => {
    currentTime.value = getCurrentTime();
};

onMounted(() => {
    updateTimeData();
    timeInterval.value = setInterval(updateTimeData, 1000);
    
    // 测试API调用
    testApi();
});

onBeforeUnmount(() => {
    clearInterval(timeInterval.value);
});
</script>

<style lang="scss" scoped>
.home-page {
    text-align: center;

    color: #FFF;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);

    .title {
        font-size: 2.5rem;
        margin-bottom: 2rem;
        background: linear-gradient(90deg, #42d392, #647eff);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        animation: fadeIn 1s ease;
    }

    .button-group {
        margin-bottom: 3rem;
        display: flex;
        gap: 1rem;
    }

    .action-btn {
        transition: all 0.3s ease;
        transform: translateY(0);

        &:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        &:active {
            transform: translateY(0);
        }
    }
}

.time-container {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
}

.right {
    width: 100%;
    max-width: 600px;
    height: 100%;
    padding: 2rem;

    .time {
        font-size: 1.1rem;
        text-align: center;

        .date {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 0.5rem;
            margin-bottom: 1rem;
            color: rgba(255, 255, 255, 0.8);
        }

        .text {
            margin-top: 1rem;
            font-size: 3.5rem;
            letter-spacing: 2px;
            font-family: "UnidreamLED", monospace;
            color: #fff;
            text-shadow: 0 0 10px rgba(100, 200, 255, 0.5);
            animation: pulse 2s infinite;
        }
    }
}

// 卡片样式
.cards {
    border-radius: 12px;
    background-color: rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &:hover {
        transform: translateY(-5px) scale(1.02);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
    }

    &:active {
        transform: translateY(0) scale(0.98);
    }
}

// 动画效果
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes pulse {
    0% {
        text-shadow: 0 0 10px rgba(100, 200, 255, 0.5);
    }

    50% {
        text-shadow: 0 0 20px rgba(100, 200, 255, 0.8);
    }

    100% {
        text-shadow: 0 0 10px rgba(100, 200, 255, 0.5);
    }
}

// 响应式设计
@media (max-width: 992px) {
    .home-page {
        padding: 3rem 1rem;

        .title {
            font-size: 2rem;
        }
    }

    .right .time .text {
        font-size: 2.8rem;
    }
}

@media (max-width: 768px) {
    .home-page {
        padding: 2rem 1rem;

        .title {
            font-size: 1.8rem;
        }
    }

    .right {
        padding: 1.5rem;

        .time .text {
            font-size: 2.2rem;
        }
    }
}

@media (max-width: 480px) {
    .home-page {
        padding: 1.5rem 0.5rem;

        .title {
            font-size: 1.5rem;
        }
    }

    .right {
        padding: 1rem;

        .time {
            font-size: 1rem;

            .text {
                font-size: 1.8rem;
            }
        }
    }
}
</style>