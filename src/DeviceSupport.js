import React, { useState, useEffect } from 'react'
import SupportContext from './context/SupportContext'
import { tryTouchevents, tryAutoplay } from './DeviceSupport/supportFunctions'

import App from './components/App.js'

function DeviceSupport () {
  const [canAutoplay, setCanAutoplay] = useState(false)
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    // Touch support
    tryTouchevents().then(result => {
      console.log(result)
      if (result.touchevents) {
        setIsTouch(true)
      }
    })

    // Video autoplay support
    tryAutoplay().then(result => {
      console.log(result)
      if (result.canAutoplay) {
        setCanAutoplay(true)
      }
    })
  }, [])

  return (
    <SupportContext.Provider value={{ canAutoplay, isTouch }}>
      <App isBrowser={true} />
    </SupportContext.Provider>
  )
}

export default DeviceSupport
