import Modernizr from 'modernizr'

const initTouchevents = () => {
  // console.log('test touchevents')
  // No touch support by default
  document.documentElement.classList.add('no-touchevents')

  // Apply touch support if the user *touches* the screen
  window.addEventListener('touchstart', function onFirstTouch() {
    document.documentElement.classList.add('touchevents')
    document.documentElement.classList.remove('no-touchevents')
    window.removeEventListener('touchstart', onFirstTouch)

    // publish('touchevents', { touchevents: true })
  })
}


const checkSupport = (resolve, reject) => {
  // Browser or Server?
  const isBrowser = typeof window !== 'undefined'

  if (isBrowser) {

    initTouchevents()

    // Check if it's mobile
    // console.log('checking autoplay')
    Modernizr.on('videoautoplay', result => {
      let isMobile = !result
      if (window.innerWidth < 1024 && Modernizr.touchevents) {
        isMobile = true
      }
      if (isMobile) {
        document.documentElement.className += ' mobile'
      }

      // console.log('autoplay checked', result)
      resolve({ isMobile, isBrowser })
    })
  } else {
    // Node
    resolve({ isMobile: false, isBrowser: false })
  }
}

export default new Promise(checkSupport)
