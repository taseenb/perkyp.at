import React, { memo } from 'react'
import Svg from './Svg'

function LoadingAnimation ({ show, radius = 32, bg = 'transparent' }) {
  // Draw an arc with circle and
  const angle = 90
  const r = radius
  const circumference = 2 * Math.PI * radius
  const strokeOffset = (1 / 4) * circumference
  const strokeDasharray = (angle / 360) * circumference

  const style = {
    opacity: show ? 1 : 0,
    pointerEvents: show ? 'auto' : 'none',
    backgroundColor: bg
  }

  return (
    <div className='loading-animation' style={style}>
      <Svg
        viewBox={`0 0 ${r * 4} ${r * 4}`}
        width={r * 2 + 'px'}
        height={r * 2 + 'px'}
        className='svg'
      >
        <circle className='bg-circle' cx={r * 2} cy={r * 2} r={r} />
        <circle
          className='main-circle'
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
