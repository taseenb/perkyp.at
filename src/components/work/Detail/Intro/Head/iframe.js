import React, { useState } from 'react'
import { cx } from 'emotion'

import FullscreenIcon from './FullscreenIcon'

export default function Iframe ({ seo, displayName, detail }) {
  const { head } = detail
  const { title, attrs, src, allowFullscreen } = head

  const [fullscreen, setFullscreen] = useState(false)

  return (
    <div className={cx('head', fullscreen && 'fullscreen')}>
      <div className='icons'>
        {allowFullscreen && (
          <FullscreenIcon
            setFullscreen={setFullscreen}
            fullscreen={fullscreen}
          />
        )}
      </div>

      <div className='iframe-container'>
        <iframe
          title={title || displayName}
          className='iframe'
          frameBorder='0'
          scrolling='no'
          src={src}
          {...attrs}
        ></iframe>
      </div>
    </div>
  )
}
