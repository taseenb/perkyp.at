import React from 'react'
// import { cx } from 'emotion'

import DivImg from '../../../../shared/DivImg'

export default function Image ({ displayName, head }) {
  const { src, shadow, glass, border, className } = head

  return (
    <div className='head'>
      {glass && <div className='glass overlay abs-percent-fullscreen'></div>}
      {border && <div className='border overlay abs-percent-fullscreen'></div>}
      {shadow && <div className='shadow overlay abs-percent-fullscreen'></div>}
      <DivImg src={src} className={className} />
    </div>
  )
}
