import { createContext } from 'react'

const defaultValue = {
  baseUrl: ''
}

/**
 * Provides request information from the server and router
 */
const ReqContext = createContext(defaultValue)
ReqContext.displayName = 'ReqContext'

export default ReqContext
