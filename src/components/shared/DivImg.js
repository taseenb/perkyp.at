import React, { useState, useEffect } from 'react'
import { css, cx } from '@emotion/css'

import LoadingAnimation from './LoadingAnimation'
import ErrorImg from './ErrorImg'

const absFill = css`
  position: absolute;
  width: 100%;
  height: 100%;
`

const cache = {}

export default function DivImg ({
  src,
  placeholderBg = 'rgba(0,0,0,0.12)',
  ...rest
}) {
  const { className } = rest
  const [loaded, setLoaded] = useState(cache[src])
  const [error, setError] = useState(false)

  const bg = css`
    opacity: ${loaded ? 1 : 0};
    transition-duration: 0.6s;
  `

  useEffect(() => {
    if (loaded || !src) return

    const i = new Image()
    i.onload = () => {
      cache[src] = src
      setLoaded(true)
    }
    i.onerror = () => {
      setError(true)
    }
    i.src = src
  }, [src, loaded])

  return (
    <div className={cx(absFill)}>
      {error ? (
        <ErrorImg />
      ) : (
        <div
          className={cx('bg', bg, className)}
          style={{
            backgroundImage: `url(${src})`
          }}
        />
      )}
      <LoadingAnimation show={!loaded && !error} bg={placeholderBg} />
    </div>
  )
}
