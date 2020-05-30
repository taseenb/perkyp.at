import React, { useState, useRef, useEffect } from 'react'
import VimeoPlayer from '@vimeo/player'
import onResize from '../../../../utils/resize'

import C from '../../../../const'

export default function Vimeo ({ id, caption }) {
  const vimeoIframe = useRef(null)

  const [player, setPlayer] = useState(null)
  const [videoSize, setVideoSize] = useState(null)
  const [windowSize, setWindowSize] = useState(null)
  const [iframeSize, setIframeSize] = useState({ width: null, height: 500 })

  useEffect(() => {
    if (!C.isBrowser) return null

    const offResize = onResize(e => setWindowSize(e))
    return offResize
  }, [])

  useEffect(() => {
    function updatePlayerSize () {
      const { w, h } = videoSize
      if (!w || !h || !player) return

      const width = player.element.getBoundingClientRect().width
      setIframeSize({
        width,
        height: Math.ceil(width / (w / h))
      })
    }

    // Attach Vimeo player API to iframe
    if (vimeoIframe) {
      if (!C.isBrowser) return null

      setPlayer(new VimeoPlayer(vimeoIframe.current))
    }

    // Get original video size
    if (player && !videoSize) {
      player.ready().then(() => {
        player.getVideoWidth().then(w => {
          player.getVideoHeight().then(h => {
            setVideoSize({ w, h })
          })
        })
      })
    }

    // Update player size
    if (player && videoSize) {
      updatePlayerSize()
    }

    // Cleanup
    return () => {
      if (player) {
        player.pause().then(() => {
          player.unload()
        })
      }
    }
  }, [vimeoIframe, videoSize, windowSize, player])

  return (
    <div className='art vimeo row no-gutters pb-2 pb-md-4'>
      <div className='col'>
        <div className='row-zoom row no-gutters px-2 px-md-4'>
          <div className='col-zoom col-12 col-md-8'>
            <iframe
              ref={vimeoIframe}
              title={id}
              id={`vimeo-${id}`}
              className='vimeo-iframe'
              src={`//player.vimeo.com/video/${id}?color=ffffff&title=0&byline=0&portrait=0`}
              width='100%'
              height={iframeSize.height}
              style={{ width: '100%', height: iframeSize.height }}
              frameBorder='0'
              allowFullScreen
            ></iframe>
            {caption && <div className='caption'>{caption}</div>}
          </div>
        </div>
      </div>
    </div>
  )
}
