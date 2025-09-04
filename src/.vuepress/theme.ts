import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
import { themePlugins } from "./plugin.js";

export default hopeTheme({
  hostname: "https://ishupei.github.io",

  author: {
    name: "HuPei",
    url: "https://ishupei.github.io",
  },

  logo: "./logo.png",

  docsDir: "src",

  navbar,

  sidebar,

  footer: "Powered By HuPei",
  displayFooter: true,

  encrypt: {
    config: {
      "/demo/encrypt.html": {
        hint: "Password: 1234",
        password: "1234",
      },
    },
  },

  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,
  },

  // move to plugin.ts
  plugins: themePlugins,
}, {
  custom: true,
});