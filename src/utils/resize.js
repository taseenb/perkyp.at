import debounce from 'lodash/debounce'
import isFunction from 'lodash/isFunction'
import { v4 as uuid } from 'uuid'

import C from '../const'

const listeners = {}

/**
 * Fires the given callback on window resize.
 * Returns a function that removes the event listener.
 * @param {function} cb Callback
 */
export default function onWindowResize (cb) {
  if (!C.isBrowser) return () => {}

  if (!isFunction(cb)) {
    throw Error('Argument must be a callback function')
  }

  console.log(listeners)

  // Create unique id
  const id = uuid()

  // Window resize
  const fn = debounce(
    () => {
      console.log('debounced set window size')
      cb({
        width: window.innerWidth,
        height: window.innerHeight
      })
    },
    250,
    { trailing: true }
  )

  // Add to the listeners object
  listeners[id] = fn

  window.addEventListener('resize', listeners[id])

  return () => {
    window.removeEventListener('resize', listeners[id])
    delete listeners[id]
  }
}
