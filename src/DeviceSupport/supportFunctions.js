import canAutoPlay from 'can-autoplay'
import isFunction from 'lodash/isFunction'

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
    canAutoPlay
      .video({ timeout: 200, muted: true })
      .then((result, error) => {
        if (error) {
          reject(error)
          return
        }
        resolve({ canAutoplay: !!result })
      })
      .catch(error => reject(error))
  })
}

export function tryIntersectionObserver () {
  return new Promise((resolve, reject) => {
    let hasIntersectionObserver = true

    if (
      'IntersectionObserver' in window &&
      'IntersectionObserverEntry' in window &&
      'intersectionRatio' in window.IntersectionObserverEntry.prototype
    ) {
      if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
        hasIntersectionObserver = false
      }
    } else {
      hasIntersectionObserver = false
    }

    resolve({ hasIntersectionObserver })
  })
}

export function tryNativeLazyLoading () {
  return 'loading' in HTMLImageElement.prototype
}

export function tryImageDecode () {
  const i = new Image()
  return isFunction(i.decode)
}
