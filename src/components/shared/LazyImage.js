import React, { useContext, useEffect, useState, useRef } from 'react'
import { css, cx } from 'emotion'
import { useInView } from 'react-intersection-observer'
// import { useImage } from 'react-image'
import { useSpring, animated } from 'react-spring'
import SupportContext from '../../context/SupportContext'

const absFill = css`
  position: absolute;
  width: 100%;
  height: 100%;
`
const loading = css`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  background-color: #eeeeee;
`

const LazyImage = ({ src, dimensions = { width: 16, height: 9 }, ...rest }) => {
  const { caption, className } = rest
  const [loaded, setLoaded] = useState(false)
  const [containerHeight, setContainerHeight] = useState(0)
  const { hasNativeLazyLoading } = useContext(SupportContext)
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px'
  })
  const { width, height } = dimensions

  console.log(width, height)
  // const style = useSpring({ opacity: inView ? 1 : 0, y: inView ? 30 : 0 })
  // const [props, set, stop]
  const [style, set, stop] = useSpring(() => ({ opacity: 0, y: 50 }))
  set({ opacity: inView ? 1 : 0, y: inView ? 0 : 50 })

  // console.log(style.opacity)

  // const { src } = useImage({
  //   srcList: imgSrc
  // })

  const showLoading = css`
    display: ${loaded ? 'none' : 'block'};
  `

  const container = css`
    position: relative;
    background-color: #eeeeee;
    padding-bottom: ${(height / width) * 100}%;
  `

  // Stop animations on unmount
  useEffect(() => {
    return () => stop()
  }, [stop])

  function onLoad () {
    setLoaded(true)
  }

  // const trans = y => `translate3d(0,${y}px,0)`

  return (
    <>
      <animated.div
        ref={ref}
        className={cx(container, className)}
        // ref={!hasNativeLazyLoading ? ref : undefined}
        style={{ opacity: style.opacity }}
      >
        {inView ? (
          <>
            <img
              {...rest}
              src={src}
              loading={hasNativeLazyLoading ? 'lazy' : null}
              alt=''
              onLoad={onLoad}
              className={cx('img', absFill)}
              width={width}
              height={height}
              style={
                {
                  // transform: `translate3d(0,${style.y.value}px,0)`
                }
              }
            />
            <div className={cx(absFill, loading, showLoading)}>Loading...</div>
          </>
        ) : null}
      </animated.div>
      {caption && <div className='caption'>{caption}</div>}{' '}
    </>
  )
}

export default LazyImage
