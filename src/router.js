import React from 'react'
import { BrowserRouter, browserHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import App from './components/App.js'

const Router = props => {
  return (
    <BrowserRouter history={browserHistory}>
      <App initialData={window.initialData} isMobile={props.isMobile} isBrowser={props.isBrowser} />
    </BrowserRouter>
  )
}

Router.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  isBrowser: PropTypes.bool.isRequired
}

module.exports = Router
