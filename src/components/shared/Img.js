import React, { useContext, useState, useEffect, useRef } from 'react'
import { css, cx } from 'emotion'
import { useInView } from 'react-intersection-observer'
// import { useImage } from 'react-image'
// import { useSpring, animated } from 'react-spring'
import SupportContext from '../../context/SupportContext'

import LoadingAnimation from './LoadingAnimation'
import ErrorImg from './ErrorImg'

// import Img from './Img'

const cache = {}

const Img = ({
  src,
  lazy = true,
  dimensions = { width: 1920, height: 1080 },
  placeholderBg = 'rgba(0,0,0,0.12)',
  className,
  ...rest
}) => {
  const containerRef = useRef(null)
  const { caption } = rest
  const [loaded, setLoaded] = useState(cache[src])
  const { hasNativeLazyLoading } = useContext(SupportContext)
  const [error, setError] = useState(false)
  // const hasNativeLazyLoading = false
  const [ref, inView] = useInView({
    triggerOnce: true
  })
  const { width, height } = dimensions
  const ratio = height && width ? height / width : 1
  const [containerWidth, setContainerWidth] = useState(width)

  // console.log(containerWidth, containerWidth * ratio)

  // const absFill = css`
  //   position: absolute;
  //   width: 100%;
  //   height: 100%;
  // `

  const container = css`
    position: relative;
    background-color: ${placeholderBg};
    padding-bottom: ${loaded ? '0' : ratio * 100 + '%'};
    width: 100%;
  `

  const img = css`
    position: ${loaded ? 'relative' : 'absolute'};
    width: 100%;
    height: ${loaded ? 'auto' : '100%'};
    opacity: ${loaded && (inView || hasNativeLazyLoading) ? 1 : 0};
    pointer-events: ${loaded ? 'auto' : 'none'};
    transition-duration: 0.6s;
    transition-property: opacity;
  `

  function onLoad () {
    cache[src] = true
    setLoaded(true)
  }

  function onError () {
    setError(true)
  }

  useEffect(() => {
    let w = containerWidth
    // console.log(containerRef.current)
    if (containerRef.current) {
      w = containerRef.current.getBoundingClientRect().width
    }
    setContainerWidth(w)
  }, [containerRef, containerWidth])

  return (
    <>
      <div className={cx(container)} ref={containerRef}>
        <div ref={!hasNativeLazyLoading ? ref : undefined}>
          {!lazy || inView || hasNativeLazyLoading ? (
            <>
              {error ? (
                <ErrorImg />
              ) : (
                <img
                  src={src}
                  loading={lazy && hasNativeLazyLoading ? 'lazy' : null}
                  alt=''
                  onLoad={onLoad}
                  onError={onError}
                  className={cx('img', className, img)}
                  width={width}
                  height={height}
                  {...rest}
                />
              )}
              <LoadingAnimation show={!loaded && !error} />
            </>
          ) : null}
        </div>
      </div>
      {caption && <div className='caption'>{caption}</div>}
    </>
  )
}

export default Img
