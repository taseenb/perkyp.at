import React, { useState, useEffect } from 'react'
import SupportContext from './context/SupportContext'
import {
  tryTouchevents,
  tryAutoplay,
  tryIntersectionObserver,
  tryNativeLazyLoading,
  tryImageDecode
} from './DeviceSupport/supportFunctions'

import App from './components/App.js'

function DeviceSupport () {
  const [canAutoplay, setCanAutoplay] = useState(null)
  const [isTouch, setIsTouch] = useState(false)
  const [hasNativeLazyLoading, setHasNativeLazyLoading] = useState(false)
  const [hasImageDecode, setHasImageDecode] = useState(true)

  useEffect(() => {
    // Touch support
    tryTouchevents().then(result => {
      // console.log(result)
      if (result.touchevents) {
        setIsTouch(true)
      }
    })

    // Video autoplay support
    tryAutoplay()
      .then(result => {
        // console.log(result)
        setCanAutoplay(result.canAutoplay)
      })
      .catch(error => {
        setCanAutoplay(false)
      })

    // Image native loading attribute support (for lazy loading)
    setHasNativeLazyLoading(tryNativeLazyLoading())

    // Add polyfill for Intersection Observer if needed
    tryIntersectionObserver().then(result => {
      if (!result) {
        import('intersection-observer') // eslint-disable-line
      }
    })

    // Image decode() method
    setHasImageDecode(tryImageDecode())
  }, [])

  return (
    <SupportContext.Provider
      value={{ canAutoplay, isTouch, hasNativeLazyLoading, hasImageDecode }}
    >
      {/* do not render before autoplay test is done */}
      {canAutoplay !== null ? <App isBrowser={true} /> : null}
    </SupportContext.Provider>
  )
}

export default DeviceSupport
