import React from 'react'

const types = {
  'simple-scroll': require('./Head/simple-scroll').default,
  iframe: require('./Head/iframe').default,
  'video-cover': require('./Head/video-cover').default,
  image: require('./Head/image').default
}

export default function Head (props) {
  const { type } = props.head

  return React.createElement(types[type], { ...props })
}
