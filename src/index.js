import 'core-js/stable'
import 'regenerator-runtime/runtime'
import './styles/style.scss'
import React from 'react'
import ReactDom from 'react-dom'

import { BrowserRouter } from 'react-router-dom'
import DeviceSupport from './DeviceSupport.js'
import C from './const'

// Development only: remove placeholders for server side rendering
if (C.isDev) {
  const bodyHtml = document.body.innerHTML
  document.body.innerHTML = bodyHtml.replace('{{%- htmlHead -%}}', '')
  document.body.querySelector('#root').innerHTML = ''
}

ReactDom.hydrate(
  <BrowserRouter>
    <DeviceSupport />
  </BrowserRouter>,
  document.querySelector('#root')
)
