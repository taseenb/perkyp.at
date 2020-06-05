import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { cx } from 'emotion'

export default function IconBack ({className}) {
  const { pathname } = useLocation()

  if (pathname === '/') return null

  return (
    <Link className={cx(className, 'back')} to='/'>
      <svg
        className='svg-icon'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 50 50'
      >
        <polygon points='40,5.8 34.3,0 10,25 34.3,50 40,44.2 21.4,25' />
      </svg>
    </Link>
  )
}
