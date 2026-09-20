import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-info-before': () => h('p', { class: 'hero-eyebrow' }, [
        h('span', { class: 'hero-mark', 'aria-hidden': 'true' }, '</>'),
        '你好，我是 ibqy · Java / AI 开发者'
      ]),
      'home-hero-image': () => h('aside', {
        class: 'hero-focus',
        'aria-labelledby': 'hero-focus-title'
      }, [
        h('div', { class: 'focus-kicker' }, [
          h('span', 'BUILD · LEARN · SHARE'),
          h('span', { class: 'focus-status' }, '持续探索')
        ]),
        h('div', { class: 'focus-heading' }, [
          h('h2', { id: 'hero-focus-title' }, '把好奇心，写进代码'),
          h('span', { 'aria-hidden': 'true' }, '↗')
        ]),
        h('p', { class: 'focus-caption' }, '从后端架构到智能体，让想法在项目中落地。'),
        h('p', { class: 'focus-label' }, '技术栈 / TECH STACK'),
        h('div', { class: 'focus-tags' },
          ['Java', 'Spring Boot', 'Spring AI', 'RAG', 'Agent', '微服务']
            .map(tag => h('span', { key: tag }, tag))
        ),
        h('p', { class: 'focus-label' }, '精选入口 / SELECTED'),
        ...[
          { title: 'RAG 混合检索优化', detail: '检索 · 重排序 · 生成', path: 'rag-hybrid-search-demo' },
          { title: '多 Agent 编排系统', detail: '推理 · 记忆 · 协作', path: 'agent-orchestration-demo' }
        ].map(project => h('a', {
          class: 'focus-project',
          key: project.path,
          href: `https://ibqy.github.io/${project.path}/`,
          target: '_blank',
          rel: 'noopener'
        }, [
          h('span', [h('strong', project.title), h('small', project.detail)]),
          h('span', { class: 'focus-arrow', 'aria-hidden': 'true' }, '↗')
        ]))
      ])
    })
  }
}
