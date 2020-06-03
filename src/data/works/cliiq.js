import React from 'react'
import C from '../../const'
const { targetBlank } = C

export default {
  uid: 5155,
  seo: 'cliiq',
  active: 1,
  displayName: 'Cliiq',
  year: 2019,
  intro: 'Social network for creators',
  preview: '/static/work/cliiq/preview.jpg',
  image: '/static/work/cliiq/main.jpg',
  vimeoId: null,
  external: 'https://cliiq.com/',
  // template: 'default', // can be 'default' or null (default is null)
  head: {
    type: 'simple-scroll',
    image: {
      src: '/static/work/cliiq/scroll.jpg',
      dimensions: {
        width: 1250,
        height: 2340
      }
    }
  },
  credits: 'SSR front-end architecture design and developement, UX/UI.',
  title: null, // use displayName from the work item
  description: (
    <>
      <a href='https://cliiq.com/' {...targetBlank}>
        Cliiq
      </a>{' '}
      is a new social network for independent creators and their fans (still in
      Beta). Users can create, publish, follow, share, like and much more. All
      the familiar elements of a social network in a super fast web application
      with blogging and subscription features, designed and developed from the
      ground up. Follow{' '}
      <a href='https://cliiq.com/@este' {...targetBlank}>
        @este
      </a>
    </>
  ),
  links: [{ url: 'https://cliiq.com/about/', label: 'More info' }],
  visuals: [
    {
      src: '/static/work/cliiq/main.jpg',
      caption: 'Home feed: three different views.',
      noZoom: false
    },
    {
      src: '/static/work/cliiq/profile-1.jpg',
      caption: 'Profile view.',
      noZoom: false
    },
    {
      src: '/static/work/cliiq/profile-2.jpg',
      caption: 'Profile view, scrolled.',
      noZoom: false
    },
    {
      src: '/static/work/cliiq/edit-1.jpg',
      caption: 'Editing an image.',
      noZoom: false
    },
    {
      src: '/static/work/cliiq/edit-2.jpg',
      caption: 'Editing tools.',
      noZoom: false
    }
  ]
}
