const plugins = require("./config/plugin");
const nav = require("./config/nav");

module.exports = {
  title: "hupei's note",
  head: [["link", { rel: "icon", href: "/favicon.ico" }],
  ['link', { rel: "stylesheet", href: "/css/style.css" }]],
  themeConfig: {
    // logo: "/assets/img/logo.png",
    lastUpdated: "更新时间", // string | boolean
    sidevar: "auto",
    nav: nav,
  },
  plugins: plugins,
};
