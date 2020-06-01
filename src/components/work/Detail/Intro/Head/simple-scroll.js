import React, { useRef, useEffect } from 'react'

// import useScroll from '../../../../shared/hooks/useScroll'

export default function SimpleScroll ({ displayName, detail }) {
  const { title, head } = detail
  const { image } = head

  // const scrollRef = useRef(null)
  // const { y } = useScroll(scrollRef) // scrollTop
  // useEffect(() => {
  //   // end of scroll = myDiv.offsetHeight + myDiv.scrollTop >= myDiv.scrollHeight
  //   if (y === 0) return
  //   const el = scrollRef.current
  //   if (el.offsetHeight + y >= el.scrollHeight) {
  //     console.log(y, 'bottom!')
  //   }
  // }, [y])

  return (
    <div className='head'>
      {/* <div className='glass overlay abs-percent-fullscreen'></div> */}
      <div className='border overlay abs-percent-fullscreen'></div>

      {/* <div className='simple-scroll' ref={scrollRef} style={{ height: '100%' }}> */}
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
