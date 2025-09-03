import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import theme from "./theme.js";
import { plugins } from './plugin.js';

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "hupei's page",
  description: "vuepress-theme-hope 的hupei's page",

  // 正确注入插件
  plugins,

  theme,

  alias: {
    "@theme-hope/components/HomePage": path.resolve(
      __dirname,
      "./components/HomePage.vue"
    ),
  },

  head: [
    // 必须添加的DocSearch资源
    ['link', {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/@docsearch/css@3'
    }],
    ['script', {
      src: 'https://cdn.jsdelivr.net/npm/@docsearch/js@3'
    }],
    // PWA相关（可选）
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }]
  ],
});