import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "hupei's note",
  description: "vuepress-theme-hope 的hupei's note",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
