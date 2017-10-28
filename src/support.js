import Modernizr from 'modernizr'

const checkSupport = (resolve, reject) => {
  // Browser / Server
  const isBrowser = typeof window !== 'undefined'

  if (isBrowser) {
    // Check if it's mobile
    Modernizr.on('videoautoplay', result => {
      let isMobile = !result
      if ($(window).width < 1024 && Modernizr.touchevents) {
        isMobile = true
      }
      if (isMobile) {
        $('html').addClass('mobile')
      }

      resolve({ isMobile, isBrowser })
    })
  } else {
    // Node
    resolve({ isMobile: false, isBrowser: false })
  }
}

module.exports = new Promise(checkSupport)
