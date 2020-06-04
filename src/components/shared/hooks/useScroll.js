import { useEffect } from 'react'

import useRafState from './useRafState'

const useScroll = ref => {
  if (process.env.NODE_ENV === 'development') {
    if (typeof ref !== 'object' || typeof ref.current === 'undefined') {
      console.error('`useScroll` expects a single ref argument.')
    }
  }

  const [state, setState] = useRafState({
    x: 0,
    y: 0
  })

  useEffect(() => {
    const el = ref.current
    const handler = () => {
      if (el) {
        setState({
          x: el.scrollLeft,
          y: el.scrollTop
        })
      }
    }

    if (el) {
      el.addEventListener('scroll', handler, {
        capture: false,
        passive: true
      })
    }

    return () => {
      if (el) {
        el.removeEventListener('scroll', handler)
      }
    }
  }, [ref, setState])

  return state
}

export default useScroll
