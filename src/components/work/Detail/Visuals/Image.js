import React, { useState } from 'react'
import { cx } from 'emotion'

export default function Image ({ noZoom, caption, src }) {
  const [zoom, setZoom] = useState(false)

  function toggleZoom () {
    setZoom(!zoom)
  }

  return (
    <div
      className={cx(
        `art image row no-gutters pb-2 pb-md-4`,
        zoom && 'zoomed',
        noZoom && 'no-zoom'
      )}
    >
      <div className='col'>
        <div
          className={cx('row-zoom', zoom ? '' : 'row no-gutters px-2 px-md-4')}
        >
          <div className={cx('col-zoom', zoom ? '' : 'col-12 col-md-8')}>
            <img
              className='img'
              src={src}
              onClick={!noZoom ? e => toggleZoom() : null}
              alt=''
            />
            {caption && <div className='caption'>{caption}</div>}
          </div>
        </div>
      </div>
    </div>
  )
}
