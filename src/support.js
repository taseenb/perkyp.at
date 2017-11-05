import Modernizr from 'modernizr'

const checkSupport = (resolve, reject) => {
  // Browser or Server?
  const isBrowser = typeof window !== 'undefined'

  if (isBrowser) {
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

module.exports = new Promise(checkSupport)
