import React, { useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import debounce from 'lodash/debounce'

// const calc = (x, y) => [
//   -(y - window.innerHeight / 2) / 20,
//   (x - window.innerWidth / 2) / 20,
//   1.1
// ]

const calc = (x, y) => {
  return [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.1
  ]
}

const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function Card ({ children }) {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }))

  return (
    <animated.div
      className='card'
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      {children}
    </animated.div>
  )
}

export default Card
