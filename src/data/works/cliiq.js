import React from 'react'
import C from '../../const'
const { targetBlank } = C

export default {
  head: {
    type: 'simple-scroll',
    image: '/assets/work/cliiq/scroll.jpg'
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
      src: '/assets/work/cliiq/main.jpg',
      caption: 'Home feed: three different views.',
      noZoom: false
    },
    {
      src: '/assets/work/cliiq/profile-1.jpg',
      caption: 'Profile view.',
      noZoom: false
    },
    {
      src: '/assets/work/cliiq/profile-2.jpg',
      caption: 'Profile view, scrolled.',
      noZoom: false
    },
    {
      src: '/assets/work/cliiq/edit-1.jpg',
      caption: 'Editing an image.',
      noZoom: false
    },
    {
      src: '/assets/work/cliiq/edit-2.jpg',
      caption: 'Editing tools.',
      noZoom: false
    }
  ]
}
