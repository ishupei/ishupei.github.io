import { docsearchPlugin } from '@vuepress/plugin-docsearch';

export const plugins = [
  docsearchPlugin({
    appId: "J709I1NIQN",
    apiKey: "c53763fe82e08920806da3e32f4e6ba3",
    indexName: "ishupeiio",
    // 增强配置
    placeholder: "搜索文档",
    translations: {
      button: {
        buttonText: "搜索",
        buttonAriaLabel: "搜索文档"
      }
    },
    searchParameters: {
      facetFilters: ["lang:zh-CN"]
    }
  })
];