import React from 'react'
import C from '../../const'
const { targetBlank } = C

export default {
  // className: 'dark',
  head: {
    type: 'image',
    src: '/assets/work/seda/main.jpg'
  },
  credits: (
    <>
      Design:{' '}
      <a href='http://infographics.com/' {...targetBlank}>
        Tommy McCall
      </a>
    </>
  ),
  title: null, // use displayName from the work item
  description: (
    <>
      Designed by{' '}
      <a href='http://infographics.com/' {...targetBlank}>
        Tommy McCall
      </a>
      , this application is an effort to represent global economic development.
      The user can explore a large dataset (10 years, 152 countries) using an
      interactive map, several filters and a compare function.
    </>
  ),
  links: [
    {
      url: 'https://seda-dataviz.surge.sh/',
      label: 'Link'
    }
  ],
  visuals: [
    {
      src: '/assets/work/seda/screenshot-1.jpg',
      caption: 'Interactive table.',
      noZoom: false
    },
    {
      src: '/assets/work/seda/screenshot-2.jpg',
      caption: 'Interactive map and table.',
      noZoom: false
    },
    {
      src: '/assets/work/seda/screenshot-3.jpg',
      caption: 'Compare functionality.',
      noZoom: false
    }
  ]
}
