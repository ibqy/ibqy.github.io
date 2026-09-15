import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'ibqy',
  description: '代码即教程 — Java 后端 × AI 工程化开发者',
  lang: 'zh-CN',

  head: [
    ['link', { rel: 'icon', href: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💻</text></svg>" }],
  ],

  themeConfig: {
    nav: [
      { text: '关于', link: '/#about' },
      { text: '项目', link: '/#projects' },
      { text: '博客', link: '/#blog' },
      { text: 'GitHub', link: 'https://github.com/ibqy' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ibqy' },
    ],
    search: { provider: 'local' },
  },
})
