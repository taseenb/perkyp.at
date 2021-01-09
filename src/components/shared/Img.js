import React, { useContext, useState, useEffect, useRef } from 'react'
import isFunction from 'lodash/isFunction'
import { css, cx } from '@emotion/css'
import { useInView } from 'react-intersection-observer'
import SupportContext from '../../context/SupportContext'
import LoadingAnimation from './LoadingAnimation'
import ErrorImg from './ErrorImg'

const cache = {}

const Img = ({
  src,
  lazy = true,
  dimensions = { width: 1920, height: 1080 },
  placeholderBg = 'rgba(0,0,0,0.12)',
  className,
  showLoading = true,
  showError = true,
  onLoad,
  onError,
  ...rest
}) => {
  const containerRef = useRef(null)
  const { caption } = rest
  const [loaded, setLoaded] = useState(cache[src])
  // const hasNativeLazyLoading = false
  const { hasImageDecode } = useContext(SupportContext)
  // const { hasNativeLazyLoading, hasImageDecode } = useContext(SupportContext)
  const [error, setError] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true
  })
  const { width, height } = dimensions
  const ratio = height && width ? height / width : 1
  const [removeLoader, setRemoveLoader] = useState(false)

  const container = css`
    position: relative;
    background-color: ${placeholderBg};
    width: 100%;
  `

  const placeholder = css`
    position: relative;
    padding-bottom: ${ratio * 100 + '%'};
  `

  const img = css`
    position: absolute;
    top: 0;
    left: 0;
    opacity: ${loaded ? 1 : 0};
    pointer-events: ${loaded ? 'auto' : 'none'};
    width: 100%;
    height: 100%;
    transition-duration: 0.6s;
    transition-property: opacity;
  `

  // Decode or load
  useEffect(() => {
    if (loaded) return

    function handleLoad () {
      cache[src] = true
      setLoaded(true)

      if (isFunction(onLoad)) {
        onLoad(src)
      }
    }

    function handleError (err) {
      setError(true)
      if (isFunction(onError)) {
        onError(src)
      }
    }

    if (!lazy || inView) {
      const i = new Image()
      i.src = src

      if (hasImageDecode) {
        i.decode()
          .then(handleLoad)
          .catch(handleError)
      } else {
        i.onload = handleLoad
        i.onerror = handleError
      }
    }
  }, [src, inView, lazy, loaded, hasImageDecode, onLoad, onError])

  useEffect(() => {
    const timer = setTimeout(() => {
      setRemoveLoader(true)
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [loaded])

  return (
    <>
      <div className={cx(container)} ref={containerRef}>
        {/* <div ref={!hasNativeLazyLoading ? ref : undefined}> */}
        <div ref={ref}>
          <div className={placeholder} />
          {/* {inView || hasNativeLazyLoading || !lazy ? ( */}
          {inView || !lazy ? (
            <img
              src={src}
              // loading={lazy && hasNativeLazyLoading ? 'lazy' : null}
              alt=''
              className={cx('img', className, img)}
              width='100%'
              height='100%'
              // width={Math.round(containerWidth)}
              // height={Math.round(containerWidth * ratio)}
              {...rest}
            />
          ) : null}
          {showLoading && !error && !removeLoader ? (
            <LoadingAnimation show={!loaded} />
          ) : null}
          <ErrorImg show={error && showError} />
        </div>
      </div>
      {caption && <div className='caption'>{caption}</div>}
    </>
  )
}

export default Img
