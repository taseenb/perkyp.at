import React from 'react'
import C from '../../const'
const { targetBlank } = C

export default {
  // className: 'dark',
  head: {
    type: 'image',
    src: '/assets/work/glabs/main.jpg'
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
      url: '/assets/work/glabs/pages/spotify/',
      label: 'Spotify'
    },
    {
      url: '/assets/work/glabs/pages/history-of-coffee/',
      label: 'History of coffee'
    },
    {
      url: '/assets/work/glabs/pages/airport-of-the-future/',
      label: 'The airport of the future'
    },
    {
      url: '/assets/work/glabs/pages/downsizing/',
      label: 'Downsizing'
    }
  ],
  visuals: [
    {
      src: '/assets/work/glabs/spot.jpg',
      caption: (
        <>
          2017 in music (Spotify,{' '}
          <a href='/assets/work/glabs/pages/spotify/' {...targetBlank}>
            link
          </a>
          ).
        </>
      )
    },
    {
      src: '/assets/work/glabs/coffee.jpg',
      caption: (
        <>
          The history of coffee (Nespresso,{' '}
          <a
            href='/assets/work/glabs/pages/history-of-coffee/'
            {...targetBlank}
          >
            link
          </a>
          ).
        </>
      )
    },
    {
      src: '/assets/work/glabs/airport.jpg',
      caption: (
        <>
          The airport of the future (Heathrow,{' '}
          <a
            href='/assets/work/glabs/pages/airport-of-the-future/'
            {...targetBlank}
          >
            link
          </a>
          ).
        </>
      )
    },
    {
      src: '/assets/work/glabs/down.jpg',
      caption: (
        <>
          If you were 13cm tall (Downsizing,{' '}
          <a href='/assets/work/glabs/pages/downsizing/' {...targetBlank}>
            link
          </a>
          ).
        </>
      )
    }
  ]
}
