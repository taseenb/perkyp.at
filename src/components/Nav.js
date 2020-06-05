import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

import Contact from './Nav/Contact'
import IconBack from './Nav/IconBack'
import IconToggle from './Nav/IconToggle'

function Nav () {
  const [open, setOpen] = useState(false)
  const btnClasses = 'py-1 px-1 py-md-2 px-md-1 svg-wrapper'

  function toggleNav () {
    setOpen(!open)
  }

  return (
    <nav id='nav' className={open ? 'open' : null}>
      <div className='ui d-flex justify-content-end py-1 px-1 py-md-2 px-md-2'>
        <IconBack className={btnClasses} />
        <IconToggle className={btnClasses} onClick={toggleNav} />
      </div>

      <div className='popup' onClick={toggleNav}>
        <div className='row no-gutters py-md-4 px-md-4 px-2 py-2'>
          <div className='col-12 col-md-8 nav-links'>
            <Link to='/'>Work</Link>
            <Link to='/bio'>Bio</Link>
            <Contact />
          </div>
        </div>
      </div>

      <div className='cover' onClick={toggleNav} />
    </nav>
  )
}

export default Nav
