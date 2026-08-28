const KEYBOARD_OPEN_PX = 80

function syncVisualViewport() {
  const root = document.documentElement
  const vv = window.visualViewport
  if (!vv) {
    root.style.setProperty('--app-height', '100dvh')
    root.style.setProperty('--vv-top', '0px')
    root.style.setProperty('--keyboard-inset', '0px')
    root.classList.remove('is-keyboard')
    return
  }

  const inset = Math.max(0, Math.round(window.innerHeight - vv.height - vv.offsetTop))
  root.style.setProperty('--app-height', `${Math.round(vv.height)}px`)
  root.style.setProperty('--vv-top', `${Math.round(vv.offsetTop)}px`)
  root.style.setProperty('--keyboard-inset', `${inset}px`)
  root.classList.toggle('is-keyboard', inset > KEYBOARD_OPEN_PX)
}

export function bindVisualViewport() {
  syncVisualViewport()
  const vv = window.visualViewport
  vv?.addEventListener('resize', syncVisualViewport)
  vv?.addEventListener('scroll', syncVisualViewport)
  window.addEventListener('orientationchange', syncVisualViewport)
  window.addEventListener('resize', syncVisualViewport)
}
