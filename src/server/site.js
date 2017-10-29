const config = require('./config')
const express = require('express')
const debug = require('debug')('app:site')

// Data
const initialData = require('../data/initialData')

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

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    })
    res.end()
  } else {
    // Add the requested id if present
    initialData.requestedId = req.params.id

    // Add url and path information

    // Base url
    const protocol = req.protocol // protocol = http or https
    const hostname = req.headers.host // hostname = 'localhost:8080'
    const path = req.path // pathname = '/MyApp'
    const url = protocol + '://' + hostname + '/'

    debug(url, context)

    initialData.protocol = protocol
    initialData.hostname = hostname
    initialData.path = path
    initialData.url = url

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
