import React, { useContext, useState } from 'react'
import { css, cx } from 'emotion'
import { useInView } from 'react-intersection-observer'
// import { useImage } from 'react-image'
// import { useSpring, animated } from 'react-spring'
import SupportContext from '../../context/SupportContext'

// import Img from './Img'

const cache = {}

const Img = ({
  src,
  lazy = true,
  dimensions = { width: 1920, height: 1080 },
  ...rest
}) => {
  const { caption, className } = rest
  const [loaded, setLoaded] = useState(cache[src])
  const { hasNativeLazyLoading } = useContext(SupportContext)
  // const hasNativeLazyLoading = false
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px'
  })
  const { width, height } = dimensions

  // console.log(inView)

  const absFill = css`
    position: absolute;
    width: 100%;
    height: 100%;
  `

  const loading = css`
    display: flex;
    transition-duration: 1s;
    opacity: ${loaded ? 0 : 1};
    pointer-events: ${loaded ? 'none' : 'auto'};
    justify-content: center;
    align-items: center;
    z-index: 5;
    color: blue;
    // background-color: #eeeeee;
  `

  const container = css`
    position: relative;
    // background-color: #eeeeee;
    padding-bottom: ${(height / width) * 100}%;
  `

  const img = css`
    opacity: ${loaded && (inView || hasNativeLazyLoading) ? 1 : 0};
    pointer-events: ${loaded ? 'auto' : 'none'};
    transition-duration: 1s;
    transition-property: opacity;
  `

  function onLoad (e) {
    // console.log('loaded!')
    cache[src] = true
    setLoaded(true)
  }

  return (
    <>
      <div
        className={cx(container, className)}
        ref={!hasNativeLazyLoading ? ref : undefined}
      >
        {!lazy || inView || hasNativeLazyLoading ? (
          <>
            <img
              src={src}
              loading={hasNativeLazyLoading ? 'lazy' : null}
              alt=''
              onLoad={onLoad}
              className={cx('img', absFill, img)}
              width={width}
              height={height}
              {...rest}
            />

            <div className={cx(loading, absFill)}>
              <span>Loading...</span>
            </div>
          </>
        ) : null}
      </div>
      {caption && <div className='caption'>{caption}</div>}{' '}
    </>
  )
}

export default Img
