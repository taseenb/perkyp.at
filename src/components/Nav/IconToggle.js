import React from 'react'
import { css, cx } from 'emotion'

export default function IconToggle ({ onClick, className }) {
  return (
    <div className={cx('switch', className)} onClick={onClick}>
      <svg
        className='svg-icon'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 50 50'
      >
        <path d='M50,28.57H28.57V50H21.43V28.57H0V21.43H21.43V0h7.14V21.43H50Z' />
      </svg>
    </div>
  )
}
