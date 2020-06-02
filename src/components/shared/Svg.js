import React from 'react'

export default ({
  children = [],
  className = '',
  id = '',
  style = {},
  viewBox = '0 0 64 64',
  width = null,
  height = null
}) => {
  return (
    <svg
      id={id}
      className={className}
      style={style}
      viewBox={viewBox}
      width={width}
      height={height}
    >
      {children}
    </svg>
  )
}
