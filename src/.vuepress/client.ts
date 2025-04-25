// .vuepress/client.ts
import { defineClientConfig } from 'vuepress/client'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export default defineClientConfig({
    enhance({ app }) {
        app.use(ElementPlus)

        // 注册所有图标（可选，也可以按需注册）
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component)
        }
    },

    // 如果需要，可以添加根组件
    rootComponents: [],
})