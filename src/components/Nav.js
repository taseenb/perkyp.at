import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Contact from './Nav/Contact'
import IconBack from './Nav/IconBack'
import IconToggle from './Nav/IconToggle'

function Nav () {
  const [open, setOpen] = useState(false)
  const btnClasses = 'py-1 px-1 py-md-2 px-md-1'

  function toggleNav () {
    setOpen(!open)
  }

  function closeNav () {
    setOpen(false)
  }

  return (
    <nav id='nav' className={open ? 'open' : null}>
      <div className='ui d-flex justify-content-end py-1 px-1 py-md-2 px-md-2'>
        <IconBack className={btnClasses} onClose={closeNav} />
        <IconToggle className={btnClasses} onClick={toggleNav} open={open} />
      </div>

      <div className='popup'>
        <div className='row no-gutters py-md-4 px-md-4 px-2 py-2'>
          <div className='col-12 col-md-8 nav-links'>
            <Link to='/' onClick={closeNav}>
              Work
            </Link>
            <Link to='/bio' onClick={closeNav}>
              Bio
            </Link>
            {/* <Link to='/contact' onClick={closeNav}>
              Contact
            </Link> */}
            <Contact onClose={closeNav} />
          </div>
        </div>
      </div>

      <div className='cover' />
    </nav>
  )
}

export default Nav
