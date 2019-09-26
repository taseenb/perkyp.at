import 'core-js/stable'
import 'regenerator-runtime/runtime'
import './styles/style.scss'
import React from 'react'
import ReactDom from 'react-dom'
import Router from './router.js'
import checkSupport from './support'

checkSupport.then(device => {
  ReactDom.hydrate(
    <Router isMobile={device.isMobile} isBrowser={device.isBrowser} />,
    document.querySelector('#main')
  )
})
