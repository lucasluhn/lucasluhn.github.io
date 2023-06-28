import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  port: 9527,
  title: "Lucas",
  description: "一名前端工程师",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "Lucas",
    authorAvatar: "/head.png",
    docsRepo: "https://github.com/lucasluhn/lucasluhn.github.io.git",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "最后更新时间",
    editLink: false,
    // series 为原 sidebar
    series: {},
    navbar: [
      { text: '待办清单', link: "/todo/", icon: "List" },
      { text: "分类", link: "/categories/zhishiku/1/", icon: "Category" },
      { text: "标签", link: "/tags/siweidaotu/1/", icon: "Tag" },
      { text: '知识库', link: "/blogs/knowledge/", icon: "Book" },
    ],
    autoSetSeries: false,
    bulletin: {
      title: "欢迎", // 标题
      body: [
        {
          type: 'text',
          content: '欢迎来到我的博客，这里是我的个人知识库，记录了我在前端开发中的一些经验和心得，希望能帮助到你。'
        }
      ]
    },
    primaryColor: "#002FA7"
  }),
  // debug: true,
});