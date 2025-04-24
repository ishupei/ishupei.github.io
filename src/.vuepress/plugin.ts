import { docsearchPlugin } from "@vuepress/plugin-docsearch";
export default {
  plugin: [
    docsearchPlugin({
        appId: 'VUFB00GVH7',
        apiKey: 'f0dd84ca559c9b71fcff49dbd696b603',
        indexName: 'ishupei.github.io',
        locales: {
          '/': {
            placeholder: 'Search Documentation',
            translations: {
              button: {
                buttonText: 'Search Documentation',
              },
            },
          },
          '/zh/': {
            placeholder: '搜索文档',
            translations: {
              button: {
                buttonText: '搜索文档',
              },
            },
          },
        },
      }),
    ],
};
