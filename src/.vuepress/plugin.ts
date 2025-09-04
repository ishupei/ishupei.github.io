import type { PluginsOptions } from 'vuepress-theme-hope'

// Site-level plugins (VuePress plugins)
export const plugins = [
];

// Theme-level plugin options for vuepress-theme-hope
export const themePlugins: PluginsOptions = {
  // 保留主题内置插件
  components: {
    components: ["Badge", "VPCard"] as const,
  },

  // 使用主题提供的 docsearch 配置
  docsearch: {
    appId: "J709I1NIQN",
    apiKey: "c53763fe82e08920806da3e32f4e6ba3",
    indexName: "ishupeiio",
    placeholder: "搜索文档",
    translations: {
      button: {
        buttonText: "搜索",
        buttonAriaLabel: "搜索文档",
      },
    },
    searchParameters: {
      facetFilters: ["lang:zh-CN"],
    },
  },

  icon: {
    prefix: "fa6-solid:",
  },
};