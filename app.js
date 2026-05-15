;(function () {
  const selectedThemeIds = new Set()

  const els = {
    themeBar: document.getElementById('themeBar'),
    btnOpen: document.getElementById('btnOpen'),
    mask: document.getElementById('resultMask'),
    cardQuote: document.getElementById('cardQuote'),
    cardMentor: document.getElementById('cardMentor'),
    btnAgain: document.getElementById('btnAgain'),
  }

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

  function revealQuote() {
    const themeIds = Array.from(selectedThemeIds)
    const result1 = pickRandom(themeIds)

    if (navigator.vibrate) navigator.vibrate(40)

    showResult = true
    els.cardQuote.textContent = result1.text
    els.cardMentor.textContent = result1.mentor
    els.mask.hidden = false
    if (typeof confetti !== 'undefined') {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      })
    }
  }

  function openQuote() {
    if (showResult) return
    revealQuote()
  }

  function onAgain() {
    showResult = false
    els.mask.hidden = true
  }

  els.btnOpen.addEventListener('click', openQuote)
  els.btnAgain.addEventListener('click', onAgain)

  renderThemeChips()
})()
