const config = require('./config')
const express = require('express')
const debug = require('debug')('app:site')

// Data
const initialData = require('../../data/initialData')

// React
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const StaticRouter = require('react-router').StaticRouter
const App = require('../components/App.js')

// Router
const router = express.Router()
router.get('*', (req, res) => {
  const context = {}

  const initialMarkup = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App initialData={initialData} />
    </StaticRouter>
  )

  // Base url
  const baseUrl = config.serverUrl

  debug(baseUrl)
  debug(req.path, context)

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    })
    res.end()
  } else {
    // Add the requested id if present
    initialData.requestedId = req.params.id

    // Add url and path information
    initialData.baseUrl = baseUrl
    initialData.path = req.path
    initialData.url = baseUrl + req.path

    res.render('index', {
      initialMarkup,
      initialData,
      bundle: config.env === 'production' ? 'bundle.min.js' : 'bundle.js',
      styles: config.env === 'production' ? 'style.min.css' : 'style.css'
    })
    res.end()
  }
})

module.exports = router
