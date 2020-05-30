import React from 'react'
// import C from '../../const'
// const { targetBlank } = C

export default {
  className: 'dark',
  head: {
    type: 'iframe',
    src: '/static/work/the-hunt/iframe/index.html',
    fallbackImg: '/static/work/the-hunt/main.jpg',
    allowFullscreen: true
  },
  credits: (
    <>
      3D real-time generative animation
      <br /> WebGL, Three.js, GLSL
    </>
  ),
  title: null, // use displayName from the work item
  description: (
    <>
      An octahedron is hunted by generative lines in an endless random movement.
      Abstract 3D animation (real-time).
    </>
  ),
  links: [
    {
      url: 'https://the-hunt.surge.sh',
      label: 'Watch'
    }
  ],
  visuals: [
    {
      src: '/static/work/the-hunt/hunt-1.jpg',
      noZoom: false
    },
    {
      src: '/static/work/the-hunt/hunt-2.jpg',
      noZoom: false
    },
    {
      src: '/static/work/the-hunt/hunt-3.jpg',
      noZoom: false
    },
    {
      src: '/static/work/the-hunt/hunt-4.jpg',
      noZoom: false
    }
  ]
}
