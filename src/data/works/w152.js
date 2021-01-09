import React from 'react'
import C from '../../const'
const { targetBlank } = C

const work = {
  uid: 7344,
  seo: 'w152',
  active: 1,
  displayName: 'Industrial Facility w152',
  year: 2016,
  intro: 'Scroll based 2D animations',
  preview: '/static/work/w152/preview.jpg',
  image: '/static/work/w152/main.jpg',
  vimeoId: null,
  head: {
    type: 'iframe',
    src: '/static/work/w152/iframe/index.html'
    // attrs: {}
  },
  credits: (
    <>
      <br />
      Agency: La Moulade
      <br /> Design:{' '}
      <a href='http://www.wastberg.com/' {...targetBlank}>
        Wästberg
      </a>
      <br /> Animation:{' '}
      <a href='http://www.mickeyandjohnny.com/johnny/' {...targetBlank}>
        Johnny Kelly
      </a>
    </>
  ),
  title: null, // use displayName from the work item
  description: (
    <>
      We created a single page application to introduce a lamp designed by{' '}
      <a href='http://www.industrialfacility.co.uk/' {...targetBlank}>
        Industrial Facility
      </a>{' '}
      and{' '}
      <a href='http://www.wastberg.com/' {...targetBlank}>
        Wästberg
      </a>
      . The consisted of several animations based on scroll interaction, similar
      to the demo above.
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
      src: '/static/work/w152/scroll-parts.jpg',
      caption: null,
      noZoom: false
    },
    {
      src: '/static/work/w152/scroll-techinfo.jpg',
      caption: null,
      noZoom: false
    },
    {
      type: 'vimeo',
      id: '241331200',
      caption: 'Screen capture of the scroll.',
      dimensions: {
        width: 1280,
        height: 720
      }
    }
  ]
}

export default work
