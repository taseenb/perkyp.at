import React from 'react'

export default function SimpleScroll ({ displayName, detail }) {
  const { title, head } = detail
  const { image } = head

  return (
    <div className='head'>
      <div className='glass overlay abs-percent-fullscreen'></div>
      <div className='border overlay abs-percent-fullscreen'></div>

      <div className='simple-scroll'>
        <img
          className='simple-scroll-img'
          src={image}
          alt={title || displayName}
        />
      </div>
    </div>
  )
}
