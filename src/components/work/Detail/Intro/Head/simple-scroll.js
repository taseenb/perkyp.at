import React from 'react'
import Img from '../../../../shared/Img'

export default function SimpleScroll ({ displayName, detail }) {
  const { title, head } = detail
  const { src, dimensions } = head.image

  return (
    <div className='head'>
      {/* <div className='glass overlay abs-percent-fullscreen'></div> */}
      <div className='border overlay abs-percent-fullscreen'></div>

      <div className='simple-scroll'>
        <Img
          className='simple-scroll-img'
          dimensions={dimensions}
          src={src}
          alt={title || displayName}
          lazy={false}
        />
      </div>
    </div>
  )
}
