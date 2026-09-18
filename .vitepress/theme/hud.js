export function initHud() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  initParticles()
  initHeroDecode()
  initSectionNav()
  initSectionReveal()
  initButtonGlitch()

  const isDesktop = window.matchMedia('(pointer: fine)').matches
  if (isDesktop) initCardTilt()
}

/* ═══ PARTICLE NETWORK ═══ */
function initParticles() {
  const canvas = document.getElementById('particleCanvas')
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  const hero = document.querySelector('.VPHero')
  if (!hero) return

  let w, h, particles = []
  const isMobile = window.innerWidth <= 768
  const COUNT = isMobile ? 25 : 55
  const CONN_DIST = isMobile ? 100 : 150

  let mouse = { x: -9999, y: -9999 }
  hero.addEventListener('mousemove', (e) => {
    const r = canvas.getBoundingClientRect()
    mouse.x = e.clientX - r.left
    mouse.y = e.clientY - r.top
  })
  hero.addEventListener('mouseleave', () => {
    mouse.x = -9999
    mouse.y = -9999
  })

  function resize() {
    const r = hero.getBoundingClientRect()
    w = canvas.width = r.width
    h = canvas.height = r.height
  }

  function createParticle() {
    return {
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5
    }
  }

  function init() {
    resize()
    particles = Array.from({ length: COUNT }, createParticle)
  }

  function frame() {
    ctx.clearRect(0, 0, w, h)

    for (const p of particles) {
      const dx = mouse.x - p.x
      const dy = mouse.y - p.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 200 && dist > 0) {
        p.vx += (dx / dist) * 0.015
        p.vy += (dy / dist) * 0.015
      }

      p.x += p.vx
      p.y += p.vy
      p.vx *= 0.99
      p.vy *= 0.99

      if (p.x < 0) p.x = w
      if (p.x > w) p.x = 0
      if (p.y < 0) p.y = h
      if (p.y > h) p.y = 0
    }

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < CONN_DIST) {
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.strokeStyle = 'rgba(230, 0, 18, ' + (0.15 * (1 - dist / CONN_DIST)) + ')'
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      }
    }

    for (const p of particles) {
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(230, 0, 18, 0.5)'
      ctx.fill()
    }

    requestAnimationFrame(frame)
  }

  init()
  frame()

  let resizeTimer
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(init, 200)
  })
}

/* ═══ HERO TITLE DECODE ═══ */
function initHeroDecode() {
  const el = document.querySelector('.VPHero .text')
  if (!el) return

  const finalText = el.textContent.trim()
  if (!finalText) return

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#%&'
  const len = finalText.length

  el.style.opacity = '1'
  el.style.webkitTextFillColor = 'var(--ink)'
  el.textContent = ''

  const spans = Array.from({ length: len }, () => {
    const s = document.createElement('span')
    s.textContent = chars[Math.floor(Math.random() * chars.length)]
    s.style.color = 'var(--red)'
    s.style.display = 'inline-block'
    s.style.transition = 'color 0.3s'
    el.appendChild(s)
    return s
  })

  const afterDot = document.createElement('span')
  afterDot.style.cssText = 'display:inline-block;width:0.13em;height:0.13em;background:var(--red);margin-left:0.08em;vertical-align:middle;'
  el.appendChild(afterDot)

  let locked = 0
  const interval = setInterval(() => {
    spans.forEach((s, i) => {
      if (i < locked) {
        s.textContent = finalText[i]
        s.style.color = 'var(--ink)'
      } else {
        s.textContent = chars[Math.floor(Math.random() * chars.length)]
      }
    })
    locked += 0.15
    if (locked >= len) {
      clearInterval(interval)
      spans.forEach((s, i) => {
        s.textContent = finalText[i]
        s.style.color = 'var(--ink)'
      })
      addScanLine(el)
    }
  }, 40)
}

function addScanLine(el) {
  const line = document.createElement('div')
  line.className = 'hero-scan-line'
  el.style.position = 'relative'
  el.appendChild(line)
  line.addEventListener('animationend', () => line.remove())
}

/* ═══ SECTION NAV ═══ */
function initSectionNav() {
  const indicator = document.getElementById('hudSectionNav')
  if (!indicator) return

  const blocks = indicator.querySelectorAll('.hud-sn-block')
  const sections = Array.from(document.querySelectorAll('.custom-section[id]'))
  if (!blocks.length || !sections.length) return

  let activeIdx = -1

  function setActive(idx) {
    if (idx === activeIdx) return
    activeIdx = idx
    blocks.forEach((b, i) => b.classList.toggle('is-active', i === idx))
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const idx = sections.indexOf(e.target)
        if (idx >= 0) setActive(idx)
      }
    })
  }, { threshold: 0.3 })
  sections.forEach((s) => observer.observe(s))

  blocks.forEach((b, i) => {
    b.addEventListener('click', () => {
      sections[i]?.scrollIntoView({ behavior: 'smooth' })
    })
  })

  document.addEventListener('keydown', (e) => {
    const key = e.key
    if (key >= '1' && key <= '4') {
      const idx = parseInt(key) - 1
      if (idx < sections.length) {
        e.preventDefault()
        sections[idx].scrollIntoView({ behavior: 'smooth' })
      }
    }
    if (key === 'j' || key === 'J') {
      e.preventDefault()
      const next = Math.min(activeIdx + 1, sections.length - 1)
      if (next >= 0) sections[next].scrollIntoView({ behavior: 'smooth' })
    }
    if (key === 'k' || key === 'K') {
      e.preventDefault()
      const prev = Math.max(activeIdx - 1, 0)
      if (prev >= 0) sections[prev].scrollIntoView({ behavior: 'smooth' })
    }
  })
}

/* ═══ SECTION REVEAL ═══ */
function initSectionReveal() {
  const sections = document.querySelectorAll('.custom-section')
  if (!sections.length) return

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('section-visible')
      }
    })
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' })

  sections.forEach((s) => {
    s.classList.add('section-hidden')
    observer.observe(s)
  })
}

/* ═══ BUTTON GLITCH ═══ */
function initButtonGlitch() {
  const btns = document.querySelectorAll('.btn-ghost, .actions .action a')
  btns.forEach((btn) => {
    btn.addEventListener('mouseenter', () => {
      btn.classList.add('hud-glitch')
      setTimeout(() => btn.classList.remove('hud-glitch'), 400)
    })
  })
}

/* ═══ CARD 3D TILT + LIGHT CHASE ═══ */
function initCardTilt() {
  const cards = document.querySelectorAll('.explore-card[data-tilt]')
  if (!cards.length) return

  cards.forEach((card) => {
    let rafId = null

    card.addEventListener('mousemove', (e) => {
      if (rafId) return
      const rect = card.getBoundingClientRect()
      const mx = e.clientX - rect.left
      const my = e.clientY - rect.top
      const cx = rect.width / 2
      const cy = rect.height / 2
      const rx = ((my - cy) / cy) * -6
      const ry = ((mx - cx) / cx) * 6

      rafId = requestAnimationFrame(() => {
        card.style.transform =
          'perspective(800px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) scale3d(1.02,1.02,1.02)'
        card.style.setProperty('--light-x', mx + 'px')
        card.style.setProperty('--light-y', my + 'px')
        rafId = null
      })
    })

    card.addEventListener('mouseleave', () => {
      if (rafId) { cancelAnimationFrame(rafId); rafId = null }
      card.style.transform = ''
      card.style.setProperty('--light-x', '-100%')
      card.style.setProperty('--light-y', '-100%')
    })
  })
}
