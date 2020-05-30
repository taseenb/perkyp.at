import { createContext } from 'react'

const defaultValue = {
  canAutoplayVideos: false,
  isTouch: false
}

const SupportContext = createContext(defaultValue)
SupportContext.displayName = 'SupportContext'

export default SupportContext
