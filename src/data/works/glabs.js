import React from 'react'
import C from '../../const'
const { targetBlank } = C

export default {
  uid: 4001,
  seo: 'glabs',
  active: 1,
  displayName: 'The Guardian Labs',
  year: 2016,
  intro: 'Interactive pages for editorial content',
  preview: '/static/work/glabs/preview.jpg',
  image: '/static/work/glabs/main.jpg',
  vimeoId: null,
  // className: 'dark',
  head: {
    type: 'image',
    src: '/static/work/glabs/main.jpg'
  },
  credits: (
    <>
      <br /> Design:{' '}
      <a href='http://guardianlabs.theguardian.com/' {...targetBlank}>
        The Guardian Labs
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
      , these responsive web pages contain subtle animations and interactive
      elements.
    </>
  ),
  links: [
    {
      url: '/static/work/glabs/pages/spotify/',
      label: 'Spotify'
    },
    {
      url: '/static/work/glabs/pages/history-of-coffee/',
      label: 'History of coffee'
    },
    {
      url: '/static/work/glabs/pages/airport-of-the-future/',
      label: 'The airport of the future'
    },
    {
      url: '/static/work/glabs/pages/downsizing/',
      label: 'Downsizing'
    }
  ],
  visuals: [
    {
      src: '/static/work/glabs/spot.jpg',
      caption: (
        <>
          2017 in music (Spotify,{' '}
          <a href='/static/work/glabs/pages/spotify/' {...targetBlank}>
            link
          </a>
          ).
        </>
      )
    },
    {
      src: '/static/work/glabs/coffee.jpg',
      caption: (
        <>
          The history of coffee (Nespresso,{' '}
          <a
            href='/static/work/glabs/pages/history-of-coffee/'
            {...targetBlank}
          >
            link
          </a>
          ).
        </>
      )
    },
    {
      src: '/static/work/glabs/airport.jpg',
      caption: (
        <>
          The airport of the future (Heathrow,{' '}
          <a
            href='/static/work/glabs/pages/airport-of-the-future/'
            {...targetBlank}
          >
            link
          </a>
          ).
        </>
      )
    },
    {
      src: '/static/work/glabs/down.jpg',
      caption: (
        <>
          If you were 13cm tall (Downsizing,{' '}
          <a href='/static/work/glabs/pages/downsizing/' {...targetBlank}>
            link
          </a>
          ).
        </>
      )
    }
  ]
}
