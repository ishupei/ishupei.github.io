import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/env/": "structure",
  "/flow/": "structure",
  "/": [
    {
      text: "Java",
      icon: "java",
      prefix: "/java/",  // 现在路径基于 src/ 目录
      collapsible: true,
      children: [
        "basic",    // 对应 src/java/basic.md
      ]
    }
  ]
});