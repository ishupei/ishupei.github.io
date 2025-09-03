import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/env/": "structure",
  "/video/": "structure",
  "/flow/": "structure",
  "/": [
    {
      text: "Java",
      icon: "fa-java",
      collapsible: true,
      prefix: "java/",
      children: [
        {
          text: "基础",
          prefix: "basis/",
          icon: "basic",
          children: [
            "java-basic-questions-01",
            "java-basic-questions-02",
            "java-basic-questions-03",
            {
              text: "重要知识点",
              icon: "star",
              collapsible: true,
              children: [
                "why-there-only-value-passing-in-java",
                "serialization",
                "generics-and-wildcards",
                "reflection",
                "proxy",
                "bigdecimal",
                "unsafe",
                "spi",
                "syntactic-sugar",
              ],
            },
          ],
        },
      ],
    },
  ],
});

