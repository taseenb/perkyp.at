import React from 'react'

import C from '../../../../../const'

export default function FullscreenIcon ({ setFullscreen, fullscreen }) {
  if (!C.isBrowser) return null

  function toggle () {
    setFullscreen(!fullscreen)
    window.scrollTo(0, 0)
  }

  return (
    <div className='fullscreen-icon' onClick={toggle}>
      {fullscreen ? (
        <img
          src='/assets/img/fullscreen-off.svg'
          className='fullscreen-off'
          alt=''
        />
      ) : (
        <img
          src='/assets/img/fullscreen-on.svg'
          className='fullscreen-on'
          alt=''
        />
      )}
    </div>
  )
}
