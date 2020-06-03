import React from 'react'
import C from '../../const'
const { targetBlank } = C

export default {
  uid: 2803,
  seo: 'the-code-of-nature-3d',
  active: 1,
  displayName: 'The code of nature in 3D',
  year: 2017,
  intro: 'A study of autonomous agents',
  preview: '/static/work/the-code-of-nature-3d/preview.jpg',
  image: '/static/work/the-code-of-nature-3d/main.jpg',
  vimeoId: null,
  iframe:
    'https://taseenb.github.io/NOC3D-chapter6/NOC_6_06_PathFollowing_MeshLine/public/index.html',
  external:
    'https://taseenb.github.io/NOC3D-chapter6/NOC_6_06_PathFollowing_MeshLine/public/index.html',
  head: {
    type: 'iframe',
    src:
      'https://taseenb.github.io/NOC3D-chapter6/NOC_6_06_PathFollowing_MeshLine/public/index.html?no-ui=1&demo-mode=1&show-grid=1&camera-distance=60',

    fallbackImg: '/static/work/the-code-of-nature-3d/flow-field.jpg',
    allowFullscreen: true,
    // backgroundColor: 'rgba(0,0,0, 0.12)',
    overlayStyle: {
      border: '1px solid #DDD',
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: 10,
      pointerEvents: 'none'
    }
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
