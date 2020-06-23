import React from 'react'

export default function Page ({ id, children }) {
  return (
    <div id={id} className='page'>
      <div className='row no-gutters py-md-4 px-md-4 px-2 py-2'>
        <div className='col-12'>
          <div className='row no-gutters'>
            <div className='col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4'>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
