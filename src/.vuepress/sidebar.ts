import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/env/": "structure",
  "/video/": "structure",
  "/flow/": "structure",
  "/": [
    {
      text: "JAVA",
      icon: "mug-hot",
      prefix: "java/",
      children: [
        {
          text: "JAVA基础",
          prefix: "basic/",
          icon: "cubes-stacked",
          collapsible: true,
          children: [
            "basic",
            "exception-generics",
            "reflection-annotation",
            "io-nio",
            {
              text: "集合",
              prefix: "collection/",
              collapsible: true,
              children: [
                "index",
                "hashmap"
              ],
            },
          ],
        },
        {
          text: "并发编程",
          prefix: "juc/",
          icon: "water",
          collapsible: true,
          children: [
            
          ],
        },
        {
          text: "JVM详解",
          prefix: "jvm/",
          icon: "smoking",
          collapsible: true,
          children: [
            "constant-pool"
          ],
        },
      ],
    },
    {
      text: "计算机基础",
      icon: "computer",
      prefix: "cs/",
      collapsible: true,
      children: [
        {
          text: "数据结构",
          prefix: "data-structure/",
          icon: "smoking",
          collapsible: true,
          children: [
            "introduction",
            "linear-list",
            "stack-queue",
            "string",
            "tree",
            "map",
            "search-sort",
          ],
        },
        {
          text: "计算机网络",
          prefix: "network/",
          icon: "smoking",
          collapsible: true,
          children: [
          ],
        },
        {
          text: "操作系统",
          prefix: "operating-system/",
          icon: "smoking",
          collapsible: true,
          children: [
          ],
        },
      ],
    },
  ],
});

