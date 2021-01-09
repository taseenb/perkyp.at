import React from 'react'
import C from '../../const'
const { targetBlank } = C

const work = {
  uid: 3277,
  seo: 'fan-beat',
  active: 1,
  displayName: 'Fan Beat',
  year: 2016,
  intro: 'Interactive installation for concerts',
  preview: '/static/work/fan-beat/preview.jpg',
  image: '/static/work/fan-beat/dashboard.jpg',
  vimeoId: null,
  className: 'dark',
  head: {
    type: 'video-cover',
    src: '/static/work/fan-beat/wall-HD.mp4',
    fallbackImg: '/static/work/fan-beat/bg.jpg',
    loaderColor: 'white',
    allowFullscreen: true,
    originalVideoSize: {
      width: 1920,
      height: 1072
    }
  },
  credits: (
    <>
      Agency:{' '}
      <a href='http://www.studio-output.com/' {...targetBlank}>
        Studio Output
      </a>{' '}
      +{' '}
      <a href='http://www.field.io/' {...targetBlank}>
        Field.io
      </a>
      <br /> Metaballs:{' '}
      <a href='http://jocabola.com' {...targetBlank}>
        Jocabola
      </a>
      <br />
      WebGL, Three.js, javascript, data visualisation (D3.js).
    </>
  ),
  title: null, // use displayName from the work item
  description: (
    <>
      Designed by{' '}
      <a href='http://www.studio-output.com/' {...targetBlank}>
        Studio Output
      </a>{' '}
      (London) and{' '}
      <a href='http://www.field.io/' {...targetBlank}>
        Field.io
      </a>{' '}
      (London), Fan Beat is an installation for concerts based on a wall
      projection and a large touch screen. The installation visualizes the
      social interactions as generative creatures{' '}
      <a href='https://en.wikipedia.org/wiki/Metaballs' {...targetBlank}>
        metaballs
      </a>{' '}
      during the concert.
    </>
  ),
  links: [
    {
      url: 'http://www.studio-output.com/case_study/sap-live-nation-fanbeat/',
      label: 'More info'
    }
  ],
  visuals: [
    {
      src: '/static/work/fan-beat/dashboard.jpg',
      caption:
        'The touchscreen: a companion app for the wall where people can find details and visualize data about the creatures and the social interactions they represent.',
      noZoom: false
    },
    {
      src: '/static/work/fan-beat/dashboard-overview.jpg',
      caption:
        'Data viz showing statistics, geographical origin, hashtags, etc.',
      noZoom: false
    },
    {
      src: '/static/work/fan-beat/dashboard-transition.jpg',
      caption: 'The dashboard blur effect used for transitions.',
      noZoom: false
    },
    {
      src: '/static/work/fan-beat/dashboard-zoom.jpg',
      caption: 'Creatures zoomed in.',
      noZoom: false
    }
  ]
}

export default work