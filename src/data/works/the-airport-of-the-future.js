import React from 'react'
import C from '../../const'
const { targetBlank } = C

export default {
  // className: 'dark',
  head: {
    type: 'image',
    src: '/static/work/the-airport-of-the-future/bg.jpg',
    className: 'bg-align-left bg-align-bottom',
    shadow: true
  },
  credits: (
    <>
      Design:{' '}
      <a href='https://guardianlabs.theguardian.com/' {...targetBlank}>
        The Guardian Labs
      </a>
      <br />
      Illustrations:{' '}
      <a href='http://www.samchivers.com/' {...targetBlank}>
        Sam Chivers
      </a>
    </>
  ),
  title: null, // use displayName from the work item
  description: (
    <>
      Designed by{' '}
      <a href='https://guardianlabs.theguardian.com/' {...targetBlank}>
        The Guardian Labs
      </a>
      , this web application shows animated visions of a possible airport of the
      future. Working with 70s sci-fi styled illustrations I created a series of
      interactive 2D animations.
    </>
  ),
  links: [
    {
      url: '/static/work/glabs/pages/airport-of-the-future/',
      label: 'Link'
    }
  ],
  visuals: [
    {
      src: '/static/work/the-airport-of-the-future/page.jpg',
      caption:
        'The page on The Guardian website (now removed) with the main animation.',
      noZoom: false
    },
    {
      src: '/static/work/the-airport-of-the-future/scene-3-a.jpg',
      caption: 'The landing scene (frame).',
      noZoom: false
    },
    {
      src: '/static/work/the-airport-of-the-future/scene-3-b.jpg',
      caption: 'The landing scene (frame).',
      noZoom: false
    },
    {
      src: '/static/work/the-airport-of-the-future/sprite-demo.jpg',
      caption: 'One of the spritesheets used to build the landing scene.',
      noZoom: false
    },
    {
      src: '/static/work/the-airport-of-the-future/scene-6.jpg',
      caption: 'The taxi scene (frame).',
      noZoom: false
    },
    {
      type: 'vimeo',
      id: '241347842',
      caption: 'Nature scene.',
      dimensions: {
        width: 1300,
        height: 476
      }
    }
  ]
}
