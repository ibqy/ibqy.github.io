import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'ibqy',
  description: '在代码中成长 — Java 后端 × AI 工程化探索者',
  lang: 'zh-CN',

  head: [
    ['link', { rel: 'icon', href: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌱</text></svg>" }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
  ],

  themeConfig: {
    nav: [
      { text: '学习路径', link: '/curriculum' },
      { text: '项目', link: '/#explorations' },
      { text: '关于', link: '/#philosophy' },
      { text: '成长', link: '/#journey' },
      { text: '思考', link: '/#reflections' },
    ],
    sidebar: false,
    outline: { level: [2, 3], label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    returnToTopLabel: '回到顶部',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ibqy' },
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
          modal: {
            displayDetails: '显示详情',
            resetButtonTitle: '清除查询',
            backButtonTitle: '关闭搜索',
            noResultsText: '没有找到相关结果',
            footer: {
              selectText: '选择',
              selectKeyAriaLabel: '回车',
              navigateText: '切换',
              navigateUpKeyAriaLabel: '上箭头',
              navigateDownKeyAriaLabel: '下箭头',
              closeText: '关闭',
              closeKeyAriaLabel: 'Esc'
            }
          }
        }
      }
    },
  },
})
