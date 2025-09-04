// .vuepress/client.ts
import { defineClientConfig } from 'vuepress/client'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { request } from './utils/request.js'

export default defineClientConfig({
    enhance({ app }) {
        app.use(ElementPlus)

        // 注册所有图标（可选，也可以按需注册）
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component)
        }

        // 注册request方法到全局
        app.config.globalProperties.$request = request
        
        // 同时注册到window对象，方便在非Vue组件中使用
        if (typeof window !== 'undefined') {
            window.$request = request
        }
    },

    // 如果需要，可以添加根组件
    rootComponents: [],
})