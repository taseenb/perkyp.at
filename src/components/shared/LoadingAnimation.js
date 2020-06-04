import React, { memo } from 'react'
import { css, cx, keyframes } from 'emotion'
import Svg from './Svg'

const rotate = keyframes`
  from {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }`

function LoadingAnimation ({
  show,
  radius = 32,
  color = '#666',
  bg = 'transparent'
}) {
  const animate = css`
    animation: ${rotate} 0.6s linear infinite;
  `

  const circle = css`
    fill: none;
    stroke: ${color};
    stroke-width: 0.75rem;
    stroke-linecap: round;
  `

  const absFill = css`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  `

  const container = css`
    display: flex;
    transition-duration: 0.6s;
    opacity: ${show ? 1 : 0};
    pointer-events: ${show ? 'auto' : 'none'};
    justify-content: center;
    align-items: center;
    z-index: 5;
    color: blue;
    background-color: ${bg};
  `

  // Draw an arc with circle and
  const angle = 90
  const r = radius
  const circumference = 2 * Math.PI * radius
  const strokeOffset = (1 / 4) * circumference
  const strokeDasharray = (angle / 360) * circumference

  return (
    <div className={cx(container, absFill)}>
      <Svg
        viewBox={`0 0 ${r * 4} ${r * 4}`}
        width={r * 2 + 'px'}
        height={r * 2 + 'px'}
        className={animate}
      >
        <circle
          className={circle}
          cx={r * 2}
          cy={r * 2}
          r={r}
          strokeDasharray={[strokeDasharray, circumference - strokeDasharray]}
          strokeDashoffset={strokeOffset}
        />
      </Svg>
    </div>
  )
}

export default memo(LoadingAnimation)
