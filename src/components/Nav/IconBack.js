import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { css, cx } from 'emotion'

export default function IconBack ({ className, onClose }) {
  const { pathname } = useLocation()
  const show = pathname !== '/'

  const backBtn = css`
    opacity: ${show ? 1 : 0};
    pointer-events: ${show ? 'auto' : 'none'};
    transform: translate3d(${show ? '0' : '0.5rem'}, 0, 0);
    transition-duration: 0.2s;
    transition-property: opacity transform;
    border-color: transparent;
    cursor: pointer;

    &:hover {
      border-color: transparent !important;
    }
  `

  return (
    <Link className={cx('round-btn back-btn', backBtn, className)} to='/' onClick={onClose}>
      <svg
        className='svg-icon'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 50 50'
      >
        <circle className='svg-icon-bg' r='40' cx='25' cy='25' />
        <polygon
          className='svg-icon-path'
          points='37,5.8 31.3,0 7,25 31.3,50 37,44.2 18.4,25'
        />
      </svg>
    </Link>
  )
}
