import React from 'react'
import C from '../../const'
const { targetBlank } = C

export default {
  // className: 'dark',
  head: {
    type: 'image',
    src: '/static/work/pride-prejudice/main.jpg',
    border: true
  },
  credits: (
    <>
      <br /> Agency:{' '}
      <a href='http://signal-noise.co.uk/' {...targetBlank}>
        Signal Noise
      </a>
    </>
  ),
  title: null, // use displayName from the work item
  description: (
    <>
      Designed by{' '}
      <a href='http://signal-noise.co.uk/' {...targetBlank}>
        Signal Noise
      </a>
      , this application shows survey data collected by{' '}
      <a href='http://www.economist.com/' {...targetBlank}>
        The Economist
      </a>
      , for an international event in support of LGBT rights:{' '}
      <a
        href='http://prideandprejudice.economist.com/research/'
        {...targetBlank}
      >
        Pride &amp; Prejudice
      </a>
      .
      <br />
      The main focus of the project was the creation of an interactive{' '}
      <a href='https://en.wikipedia.org/wiki/Streamgraph' {...targetBlank}>
        streamgraph
      </a>{' '}
      that spans across multiple screens.
    </>
  ),
  links: [
    {
      url: 'https://d1xso9gob5fu6y.cloudfront.net/',
      label: 'Link'
    }
  ],
  visuals: [
    {
      src: '/static/work/pride-prejudice/streamgraph-1.jpg',
      caption:
        'A portion of the streamgraph representing a question from the survey (top) and the answers (left).',
      noZoom: false
    },
    {
      src: '/static/work/pride-prejudice/chart.jpg',
      caption: 'Pie chart.',
      noZoom: false
    },
    {
      src: '/static/work/pride-prejudice/map.jpg',
      caption: 'Interactive map.',
      noZoom: false
    }
  ]
}
