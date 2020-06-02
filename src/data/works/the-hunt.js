import React from 'react'

const isWin = navigator.platform === 'Win32'

export default {
  className: 'dark',
  head: {
    type: isWin ? 'image' : 'iframe',
    src: isWin
      ? '/static/work/the-hunt/hunt-1.jpg'
      : '/static/work/the-hunt/iframe/index.html',
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
      {isWin && (
        <>
          <br />
          <small>
            Note: This work doesn't render properly on Windows because of a bug
            in its implementation of WebGL.
          </small>
        </>
      )}
    </>
  ),
  links: [
    {
      url: 'https://the-hunt.surge.sh',
      label: 'Watch'
    }
  ],
  visuals: [
    isWin
      ? null
      : {
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
