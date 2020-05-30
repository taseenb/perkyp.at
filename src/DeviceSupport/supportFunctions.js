import canAutoPlay from 'can-autoplay'

export function tryTouchevents () {
  // No touch support by default
  document.documentElement.classList.add('no-touchevents')

  return new Promise((resolve, reject) => {
    // Apply touch support if the user *touches* the screen
    window.addEventListener('touchstart', function onFirstTouch () {
      document.documentElement.classList.add('touchevents')
      document.documentElement.classList.remove('no-touchevents')
      window.removeEventListener('touchstart', onFirstTouch)

      resolve({ touchevents: true })
    })
  })
}

export function tryAutoplay () {
  return new Promise((resolve, reject) => {
    canAutoPlay.video({ timeout: 200, muted: true }).then((result, error) => {
      resolve({ canAutoplay: !!result })
    })
  })
}
