import Modernizr from 'modernizr'

const checkSupport = (resolve, reject) => {
  // Browser or Server?
  const isBrowser = typeof window !== 'undefined'

  if (isBrowser) {
    // Check if it's mobile
    Modernizr.on('videoautoplay', result => {
      let isMobile = !result
      if (window.innerWidth < 1024 && Modernizr.touchevents) {
        isMobile = true
      }
      if (isMobile) {
        document.documentElement.className += ' mobile'
      }

      resolve({ isMobile, isBrowser })
    })
  } else {
    // Node
    resolve({ isMobile: false, isBrowser: false })
  }

  // Update vh on resize (fix for Safari ios)
  // window.addEventListener('resize', function () {
  //   const w = window.innerWidth
  //   const h = window.innerHeight
  //   $('.vh100').height(h)
  //   $('.vw100').height(w)
  //   $('.abs-fullscreen, .rel-fullscreen')
  //     .height(h)
  //     .width(w)
  // })
}

module.exports = new Promise(checkSupport)
