---
layout: home

hero:
  name: ""
  text: "在代码中成长"
  tagline: "Java 后端开发者，正在探索 AI 工程的边界。相信写代码是最好的学习方式——每一行都是在构建更好的自己。"
  actions:
    - theme: brand
      text: 开始探索
      link: /#explorations
    - theme: alt
      text: GitHub
      link: https://github.com/ibqy
---

<div class="hero-badge">个人成长记录</div>

<div class="hero-typing">
  <span>I build </span><span class="typed-text" id="typed"></span><span class="typing-cursor"></span>
</div>

<div class="stats-bar">
<div class="stats-inner fade-up">
<div class="stat-item"><div class="stat-num"><span class="accent" id="repoCount">—</span>+</div><div class="stat-label">公开项目</div></div>
<div class="stat-item"><div class="stat-num"><span class="accent">7</span></div><div class="stat-label">探索方向</div></div>
<div class="stat-item"><div class="stat-num"><span class="accent">3</span></div><div class="stat-label">成长阶段</div></div>
</div>
</div>

<section id="philosophy" class="custom-section">
<div class="wrap">
<div class="section-label fade-up">PHILOSOPHY</div>
<h2 class="section-title fade-up">我相信的事</h2>
<p class="section-sub fade-up">写代码这些年，慢慢沉淀下来的几个信念。</p>
<div class="philosophy-grid fade-up">
<div class="phil-card">
<span class="phil-num">01</span>
<h3>学以致用</h3>
<p>最好的学习不是读完一本书，而是把学到的东西做出来。写代码就是思考的过程，项目就是成长的证据。</p>
</div>
<div class="phil-card">
<span class="phil-num">02</span>
<h3>深度优先</h3>
<p>不追求 demo 的数量，关注每个项目背后的工程细节。可运行、可复现、贴近真实——这些才是真正有价值的积累。</p>
</div>
<div class="phil-card">
<span class="phil-num">03</span>
<h3>持续进化</h3>
<p>技术在变，思维方式也要跟着变。从 Spring AI 到 Agent 编排，保持好奇，保持动手，保持进化。</p>
</div>
</div>
</div>
</section>

<section id="journey" class="custom-section section-dark">
<div class="wrap">
<div class="section-label fade-up">JOURNEY</div>
<h2 class="section-title fade-up">成长轨迹</h2>
<p class="section-sub fade-up">从一个 Java 新手到 AI 工程探索者。</p>
<div class="journey-list fade-up">
<div class="journey-card">
<div class="journey-dot"></div>
<div class="journey-body">
<div class="journey-year">起步</div>
<h3>Java 基础夯实</h3>
<p>从零开始学 Java，扎实掌握语言基础和 Spring 全家桶。这个阶段最重要的不是技术深度，而是建立了"写出来才能学会"的习惯。</p>
</div>
</div>
<div class="journey-card">
<div class="journey-dot"></div>
<div class="journey-body">
<div class="journey-year">进阶</div>
<h3>微服务与架构设计</h3>
<p>深入 Spring Cloud 生态，学习 DDD 领域驱动设计。开始理解：好的代码不只是能跑，更要能维护、能演进。</p>
</div>
</div>
<div class="journey-card">
<div class="journey-dot"></div>
<div class="journey-body">
<div class="journey-year">突破</div>
<h3>拥抱 AI 工程</h3>
<p>全面转向 AI 工程化方向。从 RAG 检索增强到 Agent 智能体编排，在实践中理解大模型落地的每一个细节。</p>
</div>
</div>
<div class="journey-card">
<div class="journey-dot"></div>
<div class="journey-body">
<div class="journey-year">现在</div>
<h3>持续探索中</h3>
<p>正在深入研究 AI 原生应用架构，探索如何让 Agent 系统真正可靠地工作。同时保持开源，把学到的东西分享出去。</p>
</div>
</div>
</div>
</div>
</section>

<section id="explorations" class="custom-section">
<div class="wrap">
<div class="section-label fade-up">EXPLORATIONS</div>
<h2 class="section-title fade-up">探索方向</h2>
<p class="section-sub fade-up">每个方向都是一条学习路径，记录从入门到实践的全过程。</p>

<div class="quick-nav fade-up" style="margin-bottom:32px">
<a href="#topic-01"><span class="qn-num">01</span>RAG 检索</a>
<a href="#topic-02"><span class="qn-num">02</span>Agent 编排</a>
<a href="#topic-03"><span class="qn-num">03</span>Spring AI</a>
<a href="#topic-04"><span class="qn-num">04</span>微服务</a>
</div>

<div class="topic-list fade-up">

<article class="topic-card" id="topic-01">
<div class="topic-header">
<span class="topic-num">01</span>
<h3><a href="https://github.com/ibqy/rag-hybrid-search-demo" target="_blank" rel="noopener">RAG 混合检索优化</a></h3>
</div>
<p class="topic-desc">从文档预处理到 Rerank 重排序，完整实践 RAG 全链路优化。这个项目让我真正理解了"检索质量决定生成质量"。</p>
<p class="topic-detail">笔记按数据流顺序展开：文档切分策略 → 向量嵌入选型 → 混合检索（BM25 + 向量）→ Rerank 重排序 → 幻觉抑制。每一步都对照真实场景的调参经验。</p>
<div class="topic-tags"><span>RAG</span><span>混合检索</span><span>Rerank</span><span>向量数据库</span></div>
<a href="https://github.com/ibqy/rag-hybrid-search-demo" class="topic-cta" target="_blank" rel="noopener">进入项目 →</a>
</article>

<article class="topic-card" id="topic-02">
<div class="topic-header">
<span class="topic-num">02</span>
<h3><a href="https://github.com/ibqy/agent-orchestration-demo" target="_blank" rel="noopener">多 Agent 编排系统</a></h3>
</div>
<p class="topic-desc">探索复杂 Agent 系统的构建方法：推理模式、状态持久化、分层记忆、工具调用与熔断防护。</p>
<p class="topic-detail">从单 Agent ReAct 模式出发，逐步扩展到多 Agent 协作架构。关注状态机持久化、记忆分层（工作记忆 / 长期记忆 / 情景记忆）、以及工具调用的容错设计。</p>
<div class="topic-tags"><span>Agent</span><span>多智能体</span><span>编排</span><span>状态机</span></div>
<a href="https://github.com/ibqy/agent-orchestration-demo" class="topic-cta" target="_blank" rel="noopener">进入项目 →</a>
</article>

<article class="topic-card" id="topic-03">
<div class="topic-header">
<span class="topic-num">03</span>
<h3><a href="https://github.com/ibqy/spring-ai-lab" target="_blank" rel="noopener">Spring AI 实验室</a></h3>
</div>
<p class="topic-desc">在 Spring 生态中实践 LLM 应用：对话、流式、结构化输出、工具调用、RAG 全场景覆盖。</p>
<div class="topic-tags"><span>Spring AI</span><span>LLM</span><span>Tool Calling</span></div>
<a href="https://github.com/ibqy/spring-ai-lab" class="topic-cta" target="_blank" rel="noopener">进入项目 →</a>
</article>

<article class="topic-card" id="topic-04">
<div class="topic-header">
<span class="topic-num">04</span>
<h3><a href="https://github.com/ibqy/spring-cloud-micro-demo" target="_blank" rel="noopener">微服务架构实践</a></h3>
</div>
<p class="topic-desc">Spring Cloud 全栈实践：Gateway 网关、OpenFeign 服务调用、用户/订单服务拆分、链路追踪。</p>
<div class="topic-tags"><span>Spring Cloud</span><span>Gateway</span><span>微服务</span></div>
<a href="https://github.com/ibqy/spring-cloud-micro-demo" class="topic-cta" target="_blank" rel="noopener">进入项目 →</a>
</article>

<article class="topic-card" id="topic-05">
<div class="topic-header">
<span class="topic-num">05</span>
<h3><a href="https://github.com/ibqy/ddd-arch-demo" target="_blank" rel="noopener">DDD 领域驱动设计</a></h3>
</div>
<p class="topic-desc">用电商订单场景落地四层架构，真正理解领域驱动设计中的聚合、值对象、领域事件。</p>
<div class="topic-tags"><span>DDD</span><span>架构设计</span><span>领域模型</span></div>
<a href="https://github.com/ibqy/ddd-arch-demo" class="topic-cta" target="_blank" rel="noopener">进入项目 →</a>
</article>

<article class="topic-card" id="topic-06">
<div class="topic-header">
<span class="topic-num">06</span>
<h3><a href="https://github.com/ibqy/semantic-kernel-java-teaching-demo" target="_blank" rel="noopener">Semantic Kernel 实践</a></h3>
</div>
<p class="topic-desc">微软 SK 框架的 Java 实现：Kernel 架构、插件系统、ChatHistory、Agentic 模式。</p>
<div class="topic-tags"><span>Semantic Kernel</span><span>Agentic</span><span>插件</span></div>
<a href="https://github.com/ibqy/semantic-kernel-java-teaching-demo" class="topic-cta" target="_blank" rel="noopener">进入项目 →</a>
</article>

<article class="topic-card" id="topic-07">
<div class="topic-header">
<span class="topic-num">07</span>
<h3><a href="https://github.com/ibqy/agentscope-java-teaching-demo" target="_blank" rel="noopener">AgentScope 多智能体</a></h3>
</div>
<p class="topic-desc">探索 Java 生态的多智能体框架：HarnessAgent、记忆系统、流式输出、多智能体协作。</p>
<div class="topic-tags"><span>AgentScope</span><span>多智能体</span><span>记忆</span></div>
<a href="https://github.com/ibqy/agentscope-java-teaching-demo" class="topic-cta" target="_blank" rel="noopener">进入项目 →</a>
</article>

</div>
</div>
</section>

<section id="reflections" class="custom-section section-dark">
<div class="wrap">
<div class="section-label fade-up">REFLECTIONS</div>
<h2 class="section-title fade-up">思考</h2>
<p class="section-sub fade-up">一些关于技术和成长的想法。</p>
<div id="blogContainer" class="fade-up">
<div class="skel-list">
<div class="skel-item"><div class="skel-bar"></div><div class="skel-bar"></div></div>
<div class="skel-item"><div class="skel-bar"></div><div class="skel-bar"></div></div>
</div>
</div>
<div class="refl-more fade-up">
<a href="https://github.com/ibqy/ibqy/issues?q=label%3Ablog" class="btn-ghost" target="_blank" rel="noopener">查看全部思考 →</a>
</div>
</div>
</section>

<footer class="site-footer">
<div class="wrap">
<div class="footer-nav">
<a href="https://github.com/ibqy" target="_blank" rel="noopener">GitHub</a>
<a href="mailto:1274464354@qq.com">Email</a>
<a href="https://gitee.com/baiqy" target="_blank" rel="noopener">Gitee</a>
</div>
<p class="footer-copy">&copy; 2026 <a href="https://github.com/ibqy">ibqy</a> &middot; 在代码中成长</p>
<p class="footer-meta">Powered by <a href="https://vitepress.dev" target="_blank" rel="noopener">VitePress</a></p>
</div>
</footer>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  function typeWrite(el, phrases, speed, pause) {
    let pi = 0, ci = 0, deleting = false
    function tick() {
      const phrase = phrases[pi]
      if (!deleting) {
        el.textContent = phrase.slice(0, ++ci)
        if (ci === phrase.length) { deleting = true; setTimeout(tick, pause); return }
      } else {
        el.textContent = phrase.slice(0, --ci)
        if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length }
      }
      setTimeout(tick, deleting ? speed / 2 : speed)
    }
    tick()
  }

  const typedEl = document.getElementById('typed')
  if (typedEl) {
    typeWrite(typedEl, [
      'backend systems',
      'AI agents',
      'RAG pipelines',
      'microservices',
      'open-source tools',
      'things that learn from'
    ], 80, 2000)
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('is-visible') })
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })
  document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el))

  const journeyCards = document.querySelectorAll('.journey-card')
  journeyCards.forEach((card, i) => {
    card.style.opacity = '0'
    card.style.transform = 'translateY(20px)'
    card.style.transition = 'opacity 0.5s ease ' + (i * 0.12) + 's, transform 0.5s ease ' + (i * 0.12) + 's'
  })
  const jObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1'
        e.target.style.transform = 'translateY(0)'
      }
    })
  }, { threshold: 0.15 })
  journeyCards.forEach((c) => jObserver.observe(c))

  async function loadStats() {
    try {
      const [uRes, iRes] = await Promise.all([
        fetch('https://api.github.com/users/ibqy'),
        fetch('https://api.github.com/repos/ibqy/ibqy.github.io/issues?labels=blog&state=open&per_page=5&sort=created&direction=desc')
      ])
      if (uRes.ok) {
        const u = await uRes.json()
        const el = document.getElementById('repoCount')
        if (el) el.textContent = u.public_repos
      }
      if (iRes.ok) {
        const issues = await iRes.json()
        renderBlog(issues)
      } else {
        renderBlog([])
      }
    } catch (_) {
      renderBlogError()
    }
  }

  function escHtml(s) {
    const d = document.createElement('div')
    d.appendChild(document.createTextNode(s))
    return d.innerHTML
  }

  function preview(body) {
    return (body || '')
      .split('\n')
      .filter((l) => !l.trim().startsWith('#'))
      .map((l) => l.replace(/^\s*[-*]\s+/, ''))
      .join(' ')
      .replace(/\*\*?|__?|`/g, '')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 120)
  }

  function renderBlog(issues) {
    const c = document.getElementById('blogContainer')
    if (!c) return
    if (!issues.length) {
      c.innerHTML = '<div class="refl-empty"><p>还没有内容。想法正在酝酿中。</p></div>'
      return
    }
    c.innerHTML = '<div class="refl-list">' + issues.map((i) =>
      '<a href="' + i.html_url + '" class="refl-card" target="_blank" rel="noopener">' +
      '<div class="refl-icon">&gt;_</div>' +
      '<div class="refl-body">' +
      '<h4>' + escHtml(i.title) + '</h4>' +
      '<p>' + escHtml(preview(i.body)) + '</p>' +
      '<div class="refl-date">' + new Date(i.created_at).toLocaleDateString('zh-CN') + '</div>' +
      '</div></a>'
    ).join('') + '</div>'
  }

  function renderBlogError() {
    const c = document.getElementById('blogContainer')
    if (!c) return
    c.innerHTML = '<div class="refl-empty"><p>加载失败。前往 <a href="https://github.com/ibqy/ibqy/issues" style="color:var(--accent)">GitHub Issues</a> 查看。</p></div>'
  }

  loadStats()
})
</script>
