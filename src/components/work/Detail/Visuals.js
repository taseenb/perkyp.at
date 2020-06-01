import React from 'react'
import Vimeo from './Visuals/Vimeo'
import Image from './Visuals/Image'

export default function Visuals ({ seo, detail }) {
  const { visuals } = detail

  return (
    <div className='visuals'>
      {visuals.map((visual, i) => {
        const type = visual.type || 'image'

        switch (type) {
          case 'vimeo':
            return <Vimeo key={visual.id} {...visual} />
          default:
            // img
            return <Image key={visual.src} {...visual} src={visual.src} />
        }
      })}
    </div>
  )
}
