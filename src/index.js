import 'core-js/stable'
import 'regenerator-runtime/runtime'
import './styles/style.scss'
import React from 'react'
import ReactDom from 'react-dom'

import { BrowserRouter } from 'react-router-dom'
import DeviceSupport from './DeviceSupport.js'

// ReactDom.hydrate(<Router />, document.querySelector('#root'))
ReactDom.hydrate(
  <BrowserRouter>
    <DeviceSupport />
  </BrowserRouter>,
  document.querySelector('#root')
)
