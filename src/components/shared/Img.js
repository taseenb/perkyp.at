import React, { useContext, useState, useEffect } from 'react'
// import LazyImage from './LazyImage'
import { useImage } from 'react-image'
import { cx } from 'emotion'

import SupportContext from '../../context/SupportContext'

const cache = {}

// returns a Promisized version of Image() api
export function imagePromiseFactory ({ src, decode = true, crossOrigin = '' }) {
  return new Promise((resolve, reject) => {
    const i = new Image()
    if (crossOrigin) i.crossOrigin = crossOrigin
    i.onload = () => {
      decode
        ? i
            .decode()
            .then(resolve)
            .catch(reject)
        : resolve()
    }
    i.onerror = reject
    i.src = src
  })
}

export default function Img ({
  // src: imgSrc,
  src,
  lazy = true,
  onClick,
  className,
  isDiv = false,
  dimensions = { width: 16, height: 9 }
}) {
  const { width, height } = dimensions
  const { hasImageDecode: decode } = useContext(SupportContext)
  const [decoded, setDecoded] = useState(false)

  useEffect(() => {
    imagePromiseFactory({ src, decode }).then(e => {
      console.log(e)
    })
  }, [])

  // console.log(imgSrc)
  // const { src, isLoading } = useImage({
  //   srcList: imgSrc
  // })

  // console.log(isLoading, src)

  // if (lazy) return <LazyImage imgSrc={src} />

  // useEffect(() => {
  //   const i = new Image()

  // }, [])

  return (
    <>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      {isDiv ? (
        <div
          className={cx('bg', className)}
          onClick={onClick}
          style={{
            backgroundImage: `url(${src})`
          }}
        />
      ) : (
        <img
          className={cx('img', className)}
          src={src}
          onClick={onClick}
          alt=''
        />
      )}
      {/* </Suspense> */}
    </>
  )
}
