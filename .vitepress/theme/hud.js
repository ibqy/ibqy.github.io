export function initHud() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const isDesktop = window.matchMedia('(pointer: fine)').matches

  initCrosshair(isDesktop)
  initReadout()
  initSectionIndicator()
  initDecodeTitles()
  initButtonGlitch()
  initCardMeta()
}

function initCrosshair(desktop) {
  if (!desktop) return

  const hLine = document.getElementById('hudCrossH')
  const vLine = document.getElementById('hudCrossV')
  const dot = document.getElementById('hudCrossDot')
  if (!hLine || !vLine || !dot) return

  let rafId = null
  let mx = 0, my = 0

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX
    my = e.clientY
    if (rafId) return
    rafId = requestAnimationFrame(() => {
      hLine.style.transform = 'translateY(' + my + 'px)'
      vLine.style.transform = 'translateX(' + mx + 'px)'
      dot.style.transform = 'translate(' + (mx - 4) + 'px,' + (my - 4) + 'px)'
      rafId = null
    })
  })

  document.addEventListener('mouseleave', () => {
    hLine.style.opacity = '0'
    vLine.style.opacity = '0'
    dot.style.opacity = '0'
  })
  document.addEventListener('mouseenter', () => {
    hLine.style.opacity = ''
    vLine.style.opacity = ''
    dot.style.opacity = ''
  })
}

function initReadout() {
  const elX = document.getElementById('hudX')
  const elY = document.getElementById('hudY')
  const elPct = document.getElementById('hudPct')
  const elSec = document.getElementById('hudSec')
  if (!elX || !elY || !elPct || !elSec) return

  const sections = Array.from(document.querySelectorAll('.custom-section[id]'))
  const sectionNames = {
    philosophy: 'PHI',
    journey: 'JRN',
    explorations: 'EXP',
    reflections: 'REF'
  }

  let rafId = null
  function update() {
    const sx = window.scrollX || window.pageXOffset
    const sy = window.scrollY || window.pageYOffset
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight
    const pct = maxScroll > 0 ? Math.round((sy / maxScroll) * 100) : 0

    elX.textContent = String(Math.round(sx)).padStart(4, '0')
    elY.textContent = String(Math.round(sy)).padStart(4, '0')
    elPct.textContent = String(pct).padStart(3, ' ') + '%'

    let current = '---'
    for (const sec of sections) {
      const rect = sec.getBoundingClientRect()
      if (rect.top <= window.innerHeight * 0.4) {
        current = sectionNames[sec.id] || sec.id.slice(0, 3).toUpperCase()
      }
    }
    elSec.textContent = current
    rafId = null
  }

  window.addEventListener('scroll', () => {
    if (!rafId) rafId = requestAnimationFrame(update)
  }, { passive: true })
  update()
}

function initSectionIndicator() {
  const indicator = document.getElementById('hudSectionNav')
  if (!indicator) return

  const blocks = indicator.querySelectorAll('.hud-sn-block')
  const sections = Array.from(document.querySelectorAll('.custom-section[id]'))
  if (!blocks.length || !sections.length) return

  let activeIdx = -1

  function setActive(idx) {
    if (idx === activeIdx) return
    activeIdx = idx
    blocks.forEach((b, i) => {
      b.classList.toggle('is-active', i === idx)
    })
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

function initDecodeTitles() {
  const titles = document.querySelectorAll('.section-title[data-decode]')
  if (!titles.length) return

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&@'
  const observed = new Set()

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting && !observed.has(e.target)) {
        observed.add(e.target)
        decodeText(e.target, chars)
      }
    })
  }, { threshold: 0.5 })

  titles.forEach((t) => observer.observe(t))
}

function decodeText(el, chars) {
  const final = el.getAttribute('data-decode') || el.textContent
  const len = final.length
  let iteration = 0
  const interval = setInterval(() => {
    el.textContent = final.split('').map((ch, i) => {
      if (i < iteration) return final[i]
      return chars[Math.floor(Math.random() * chars.length)]
    }).join('')
    iteration += 1 / 2
    if (iteration >= len) {
      el.textContent = final
      clearInterval(interval)
    }
  }, 30)
}

function initButtonGlitch() {
  const btns = document.querySelectorAll('.btn-ghost, .actions .action a')
  btns.forEach((btn) => {
    btn.addEventListener('mouseenter', () => {
      btn.classList.add('hud-glitch')
      setTimeout(() => btn.classList.remove('hud-glitch'), 400)
    })
  })
}

function initCardMeta() {
  const cards = document.querySelectorAll('.explore-card')
  cards.forEach((card, i) => {
    const sys = card.getAttribute('data-sys')
    if (!sys) return
    let label = card.querySelector('.hud-card-sys')
    if (!label) {
      label = document.createElement('span')
      label.className = 'hud-card-sys'
      card.appendChild(label)
    }
    label.textContent = sys
  })
}
