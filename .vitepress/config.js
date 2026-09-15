import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'ibqy',
  description: '在代码中成长 — Java 后端 × AI 工程化探索者',
  lang: 'zh-CN',

  head: [
    ['link', { rel: 'icon', href: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌱</text></svg>" }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap' }],
  ],

  themeConfig: {
    nav: [
      { text: '关于', link: '/#philosophy' },
      { text: '探索', link: '/#explorations' },
      { text: '思考', link: '/#reflections' },
      { text: 'GitHub', link: 'https://github.com/ibqy' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ibqy' },
    ],
    search: { provider: 'local' },
  },
})
