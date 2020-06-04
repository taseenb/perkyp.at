import React, { useState } from 'react'
import { cx } from 'emotion'

import Img from '../../../shared/Img'

import imageDimensions from '../../../../data/image-dimensions'

export default function Image ({ noZoom, caption, src }) {
  const [zoom, setZoom] = useState(false)
  const dimensions = imageDimensions[src]
  // console.log(dimensions, src)

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
            <Img
              src={src}
              dimensions={dimensions}
              caption={caption}
              onClick={!noZoom ? e => toggleZoom() : null}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
