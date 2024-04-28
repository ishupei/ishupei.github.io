module.exports = {
  "@vuepress/active-header-links": {},
  "@vuepress/back-to-top": {},
  "vuepress-plugin-auto-sidebar": {},
  "vuepress-plugin-comment":{
    choosen: 'valine', 
    // options选项中的所有参数，会传给Valine的配置
    options: {
      el: '#valine-vuepress-comment',
      appId: '9waUs7K5h7gcZnzryBAo90KM-gzGzoHsz',
      appKey: 'u4quYy39ho5MiyddsFPO4tgM'
    }
  }
};
