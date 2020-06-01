import React from 'react'
import { cx } from 'emotion'

export default function DivImg ({ src, ...rest }) {
  const { className } = rest

  return (
    <div
      className={cx('bg', className)}
      style={{
        backgroundImage: `url(${src})`
      }}
    />
  )
}
