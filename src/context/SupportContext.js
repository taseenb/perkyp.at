import { createContext } from 'react'

const defaultValue = {}

const SupportContext = createContext(defaultValue)
SupportContext.displayName = 'SupportContext'

export default SupportContext
