import React from 'react'
import { css, cx } from 'emotion'

export default function IconToggle ({ onClick, className, open }) {
  const toggleBtn = css`
    opacity: 1;
    // pointer-events: auto;
    // transition-duration: 0.2s;
    // transition-property: opacity;
    border-color: transparent;
    cursor: pointer;

    &:hover {
      border-color: transparent !important;
    }
  `

  const svg = css`
    transform: rotate(${open ? 45 : 0}deg);
  `

  return (
    <div className={cx('round-btn toggle-btn', toggleBtn, className)} onClick={onClick}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 50 50'
        className={cx('svg-icon', svg)}
      >
        <circle className='svg-icon-bg' r='40' cx='25' cy='25' />
        <path className='svg-icon-path' d='M50,28.57H28.57V50H21.43V28.57H0V21.43H21.43V0h7.14V21.43H50Z' />
      </svg>
    </div>
  )
}
