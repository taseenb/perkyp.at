import React from 'react'
import C from '../../const'
const { targetBlank } = C

export default {
  // className: 'dark',
  head: {
    type: 'iframe',
    src:
      'https://taseenb.github.io/NOC3D-chapter6/NOC_6_06_PathFollowing_MeshLine/public/index.html?no-ui=1&demo-mode=1&show-grid=1&camera-distance=60',

    fallbackImg: '/static/work/the-code-of-nature-3d/flow-field.jpg',
    allowFullscreen: true
  },
  credits: (
    <>
      Book:{' '}
      <a href='http://natureofcode.com/' {...targetBlank}>
        Nature of Code
      </a>{' '}
      by Daniel Shiffman
      <br /> WebGL / Three.js
    </>
  ),
  title: null, // use displayName from the work item
  description: (
    <>
      Study of autonomous agents by recreating Daniel Shiffman's{' '}
      <a href='http://natureofcode.com/' {...targetBlank}>
        Nature of Code
      </a>{' '}
      examples in 3D (the originals are in 2D).
    </>
  ),
  links: [
    {
      url: 'https://taseenb.github.io/NOC3D-chapter6/',
      label: 'Demos'
    },
    {
      url: 'https://github.com/taseenb/NOC3D-chapter6',
      label: 'Source code'
    }
  ],
  visuals: [
    {
      src: '/static/work/the-code-of-nature-3d/follow-path.jpg',
      caption: 'Follow path',
      noZoom: false
    },
    {
      src: '/static/work/the-code-of-nature-3d/flocking.jpg',
      caption: 'Flocking',
      noZoom: false
    },
    {
      src: '/static/work/the-code-of-nature-3d/a-s.jpg',
      caption: 'Alignment and separation',
      noZoom: false
    },
    {
      src: '/static/work/the-code-of-nature-3d/flow-field.jpg',
      caption: 'Flow field',
      noZoom: false
    }
  ]
}
