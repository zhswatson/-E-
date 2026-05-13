;(function () {
  const selectedThemeIds = new Set()

  const els = {
    themeBar: document.getElementById('themeBar'),
    frame: document.querySelector('.talisman-frame'),
    canvasWrap: document.getElementById('canvasWrap'),
    canvas: /** @type {HTMLCanvasElement} */ (document.getElementById('talismanCanvas')),
    placeholder: document.getElementById('talismanPlaceholder'),
    btnClear: document.getElementById('btnClear'),
    btnOpen: document.getElementById('btnOpen'),
    mask: document.getElementById('resultMask'),
    cardKicker: document.getElementById('cardKicker'),
    cardQuote: document.getElementById('cardQuote'),
    cardMentor: document.getElementById('cardMentor'),
    btnAgain: document.getElementById('btnAgain'),
  }

  let ctx = null
  let dpr = window.devicePixelRatio || 1
  let cssW = 0
  let cssH = 0
  let lastX = null
  let lastY = null
  let hasDrawn = false
  let showResult = false

  function renderThemeChips() {
    els.themeBar.innerHTML = ''
    THEME_FILTERS.forEach((item) => {
      const btn = document.createElement('button')
      btn.type = 'button'
      btn.className = 'theme-chip'
      btn.textContent = item.label
      btn.dataset.id = item.id
      if (selectedThemeIds.has(item.id)) btn.classList.add('theme-chip--on')
      btn.addEventListener('click', () => {
        if (selectedThemeIds.has(item.id)) selectedThemeIds.delete(item.id)
        else selectedThemeIds.add(item.id)
        btn.classList.toggle('theme-chip--on', selectedThemeIds.has(item.id))
      })
      els.themeBar.appendChild(btn)
    })
  }

  function clearCanvas(resetInk) {
    if (!ctx || !cssW || !cssH) return
    ctx.fillStyle = '#fff8e7'
    ctx.fillRect(0, 0, cssW, cssH)
    lastX = null
    lastY = null
    if (resetInk !== false) {
      hasDrawn = false
      els.btnOpen.disabled = true
    }
  }

  function setupCanvas() {
    const canvas = els.canvas
    if (!canvas || !els.frame) return
    const rect = els.frame.getBoundingClientRect()
    cssW = Math.max(1, Math.floor(rect.width))
    cssH = Math.max(1, Math.floor(rect.height))
    dpr = Math.min(window.devicePixelRatio || 1, 2.5)
    canvas.width = Math.floor(cssW * dpr)
    canvas.height = Math.floor(cssH * dpr)
    canvas.style.width = `${cssW}px`
    canvas.style.height = `${cssH}px`
    ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.scale(dpr, dpr)
    clearCanvas(true)
  }

  function getPointerPos(e) {
    const canvas = els.canvas
    const r = canvas.getBoundingClientRect()
    const x = (e.clientX - r.left) * (cssW / r.width)
    const y = (e.clientY - r.top) * (cssH / r.height)
    return { x, y }
  }

  function onPointerDown(e) {
    if (showResult) return
    e.preventDefault()
    const { x, y } = getPointerPos(e)
    lastX = x
    lastY = y
    try {
      els.canvas.setPointerCapture(e.pointerId)
    } catch (_) {
      /* Safari / 部分环境可能不支持 */
    }
  }

  function onPointerMove(e) {
    if (showResult || !ctx) return
    if (e.buttons !== 1 && e.pointerType !== 'touch') return
    if (e.buttons === 0 && e.pointerType === 'mouse') return
    const { x, y } = getPointerPos(e)
    const lx = lastX
    const ly = lastY
    if (lx == null || ly == null) {
      lastX = x
      lastY = y
      return
    }
    ctx.strokeStyle = 'rgba(183, 28, 28, 0.88)'
    ctx.lineWidth = 4
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.beginPath()
    ctx.moveTo(lx, ly)
    ctx.lineTo(x, y)
    ctx.stroke()
    const seg = Math.hypot(x - lx, y - ly)
    lastX = x
    lastY = y
    if (seg > 0 && !hasDrawn) {
      hasDrawn = true
      els.btnOpen.disabled = false
    }
  }

  function onPointerUp(e) {
    lastX = null
    lastY = null
    try {
      els.canvas.releasePointerCapture(e.pointerId)
    } catch (_) {
      /* ignore */
    }
  }

  function revealQuote() {
    const themeIds = Array.from(selectedThemeIds)
    const result1 = pickRandom(themeIds)

    if (navigator.vibrate) navigator.vibrate(40)

    showResult = true
    els.cardQuote.textContent = result1.text
    els.cardMentor.textContent = result1.mentor
    els.mask.hidden = false
    // Trigger confetti effect when the card is drawn
    if (typeof confetti !== 'undefined') {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
    els.canvasWrap.hidden = true
    els.placeholder.hidden = false
  }

  function openFromDraw() {
    if (!hasDrawn) return
    revealQuote()
  }

  function onDrawAgain() {
    showResult = false
    els.mask.hidden = true
    els.canvasWrap.hidden = false
    els.placeholder.hidden = true
    ctx = null
    requestAnimationFrame(() => {
      setupCanvas()
    })
  }

  els.btnClear.addEventListener('click', () => clearCanvas(true))
  els.btnOpen.addEventListener('click', openFromDraw)
  els.btnAgain.addEventListener('click', onDrawAgain)

  els.canvas.addEventListener('pointerdown', onPointerDown)
  els.canvas.addEventListener('pointermove', onPointerMove)
  els.canvas.addEventListener('pointerup', onPointerUp)
  els.canvas.addEventListener('pointercancel', onPointerUp)

  if (typeof ResizeObserver !== 'undefined') {
    new ResizeObserver(() => {
      if (!showResult) setupCanvas()
    }).observe(els.frame)
  }

  window.addEventListener('orientationchange', () => {
    setTimeout(() => {
      if (!showResult) setupCanvas()
    }, 200)
  })

  renderThemeChips()
  requestAnimationFrame(() => setupCanvas())
})()
