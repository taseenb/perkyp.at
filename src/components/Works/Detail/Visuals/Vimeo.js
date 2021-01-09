import React, { useState, useRef, useEffect } from 'react'
import VimeoPlayer from '@vimeo/player'
import { css, cx } from '@emotion/css'

import { useInView } from 'react-intersection-observer'

import onResize from '../../../../utils/resize'

import C from '../../../../const'

import LoadingAnimation from '../../../shared/LoadingAnimation'

export default function Vimeo ({
  id,
  caption,
  dimensions = { width: 1280, height: 720 }
}) {
  const vimeoIframe = useRef(null)

  const [player, setPlayer] = useState(null)
  const [videoSize, setVideoSize] = useState(null)
  const [windowSize, setWindowSize] = useState(null)
  const [iframeSize, setIframeSize] = useState({ width: null, height: null })
  const { width, height } = dimensions
  const ratio = height / width
  const vimeoReady = !!iframeSize.height

  const [ref, inView] = useInView({
    triggerOnce: true
  })

  const placeholder = css`
    position: relative;
    width: 100%;
    padding-bottom: ${ratio * 100 + '%'};
    background-color: rgba(0, 0, 0, 0.12);
    z-index: 1;
  `

  const iframeContainer = css`
    position: relative;
  `

  const iframe = css`
    position: absolute;
    top: 0;
    opacity: ${vimeoReady ? 1 : 0};
    z-index: 2;
  `

  useEffect(() => {
    if (!C.isBrowser) return null

    const offResize = onResize(e => setWindowSize(e))
    return () => offResize()
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
    if (inView && vimeoIframe) {
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
  }, [vimeoIframe, videoSize, windowSize, player, inView])

  return (
    <div className='art vimeo row no-gutters pb-2 pb-md-4' ref={ref}>
      <div className='col'>
        <div className='row-zoom row no-gutters px-2 px-md-4'>
          <div className='col-zoom col-12 col-md-8'>
            <div className={iframeContainer}>
              <iframe
                ref={vimeoIframe}
                title={id}
                id={`vimeo-${id}`}
                className={cx('vimeo-iframe', iframe)}
                src={
                  inView
                    ? `//player.vimeo.com/video/${id}?color=ffffff&title=0&byline=0&portrait=0`
                    : null
                }
                width='100%'
                height={iframeSize.height}
                style={{ width: '100%', height: iframeSize.height }}
                frameBorder='0'
                allowFullScreen
              ></iframe>

              <div className={placeholder} />

              <LoadingAnimation show={!vimeoReady} />
            </div>

            {caption && <div className='caption'>{caption}</div>}
          </div>
        </div>
      </div>
    </div>
  )
}
