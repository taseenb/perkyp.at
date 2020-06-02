import React, { useState } from 'react'
import { cx } from 'emotion'

import FullscreenIcon from './FullscreenIcon'
import LoadingAnimation from '../../../../shared/LoadingAnimation'

export default function Iframe ({ seo, displayName, detail }) {
  const { head } = detail
  const {
    title,
    attrs,
    src,
    allowFullscreen,
    overlayStyle,
    backgroundColor = 'transparent'
  } = head
  const [fullscreen, setFullscreen] = useState(false)
  const [loading, setLoading] = useState(true)

  function onLoad () {
    console.log('iframe loaded')
    setLoading(false)
  }

  return (
    <div className={cx('head', fullscreen && 'fullscreen')}>
      <LoadingAnimation show={loading} />

      <div className='icons'>
        {allowFullscreen && (
          <FullscreenIcon
            setFullscreen={setFullscreen}
            fullscreen={fullscreen}
          />
        )}
      </div>

      <div className='iframe-container' style={{ backgroundColor }}>
        <div style={{ ...overlayStyle }} />
        <iframe
          onLoad={onLoad}
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
