const plugins = require("./config/plugin");

module.exports = {
  title: "hupei's blog",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    // logo: "/assets/img/logo.png",
    lastUpdated: "更新时间", // string | boolean
    sidevar: "auto",
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about/" },
      { text: "环境安装", link: "/env/" },
    ],
  },
  plugins: plugins,
};
