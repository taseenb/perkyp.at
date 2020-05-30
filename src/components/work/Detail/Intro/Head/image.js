import React from 'react'
import { cx } from 'emotion'

export default function Image ({ displayName, detail }) {
  const { head } = detail
  const { src, shadow, glass, border, className } = head

  return (
    <div className='head'>
      {glass && <div className='glass overlay abs-percent-fullscreen'></div>}
      {border && <div className='border overlay abs-percent-fullscreen'></div>}
      {shadow && <div className='shadow overlay abs-percent-fullscreen'></div>}

      <div
        className={cx('bg', className)}
        style={{
          backgroundImage: `url(${src})`
        }}
      />
    </div>
  )
}
