import React, { useRef } from 'react'
import { css, cx } from 'emotion'
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  interpolate
} from 'react-spring'

const strokeWidth = 1

const absFill = css`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
  pointer-events: none;
  box-shadow: inset 0 0 5rem 0 rgba(0, 0, 0, 0.25);
`

const mask = css`
  position: absolute;
  overflow: hidden;
`

const top = css`
  width: 100%;
  height: ${strokeWidth}px;
  top: 0;
`

const bottom = css`
  width: 100%;
  height: ${strokeWidth}px;
  top: auto;
  bottom: 0;
`

const left = css`
  height: 100%;
  width: ${strokeWidth}px;
  left: 0;
`

const right = css`
  height: 100%;
  width: ${strokeWidth}px;
  left: auto;
  right: 0;
`

function Line ({
  side,
  values,
  color = 'rgba(255, 255, 255, 0.75)',
  strokeWidth = 1
}) {
  const block = css`
    background-color: ${color};
  `

  return (
    <div className={cx(mask, side)}>
      <animated.div
        className={cx(block, side)}
        style={{
          transform: values.interpolate((x, y) => `translate3d(${x}%,${y}%,0)`)
        }}
      />
    </div>
  )
}

export default function LoadingBoxAnimation ({ show, color }) {
  const springRef = useRef()
  const { t, r, b, l } = useSpring({
    ref: springRef,
    to: async (next, cancel) => {
      await next({ t: [0, 0] })
      await next({ l: [0, 0] })
      await next({ b: [0, 0] })
      await next({ r: [0, 0] })
    },
    from: { t: [100, 0], l: [0, -100], b: [-100, 0], r: [0, 100] },
    config: { duration: 400 }
  })

  const sideStyle = [top, right, bottom, left]
  const lines = [t, r, b, l]

  return (
    <div className={cx(absFill)}>
      {lines.map((line, i) => (
        <Line key={i} side={sideStyle[i]} values={line} color={color} />
      ))}
    </div>
  )
}
