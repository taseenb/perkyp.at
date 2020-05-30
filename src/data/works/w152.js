import React from 'react'
import C from '../../const'
const { targetBlank } = C

export default {
  head: {
    type: 'iframe',
    src: '/assets/work/w152/iframe/index.html'
    // attrs: {}
  },
  credits: (
    <>
      <br />
      Agency: La Moulade
      <br /> Design:
      <a href='http://www.wastberg.com/' {...targetBlank}>
        Wästberg
      </a>
      <br /> Animation:
      <a href='http://www.mickeyandjohnny.com/johnny/' {...targetBlank}>
        Johnny Kelly
      </a>
    </>
  ),
  title: null, // use displayName from the work item
  description: (
    <>
      To present a lamp designed by
      <a href='http://www.industrialfacility.co.uk/' {...targetBlank}>
        Industrial Facility
      </a>{' '}
      and
      <a href='http://www.wastberg.com/' {...targetBlank}>
        Wästberg
      </a>
      , a single page application was created. This consisted of several
      animations based on scroll interaction, similar to the demo above.
    </>
  ),
  links: [
    {
      url: 'https://www.wastberg.com/collections/w152-busby/about/',
      label: 'More info'
    }
  ],
  visuals: [
    {
      src: '/assets/work/w152/scroll-parts.jpg',
      caption: null,
      noZoom: false
    },
    {
      src: '/assets/work/w152/scroll-techinfo.jpg',
      caption: null,
      noZoom: false
    },
    {
      type: 'vimeo',
      id: '241331200',
      caption: 'Screen capture of the scroll.'
    }
  ]
}
