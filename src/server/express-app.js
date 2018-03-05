const config = require('./config')
const state = require('./state')
const express = require('express')
const compression = require('compression')
const path = require('path')
const debug = require('debug')('app:main') // Site router
const siteRouter = require('./routes/site')

// Data
const initialData = require('../data/initialData')

const app = express()

app.set('port', process.env.PORT || 8088)

app.enable('trust proxy') // needed to correctly detext http or https in requests

app.set('view engine', 'ejs')
var viewPath = path.resolve(__dirname, 'src/server/views')
app.set('views', viewPath)

if (config.env === 'production') {
  app.use(compression())
  // app.enable('view cache')
}

/**
 * Setup the state for the current request.
 * Check for query string '?invalidate=1' to change the state
 * in order to invalidate the cache on static files.
 */
app.use((req, res, next) => {
  // Update state with the initial state
  Object.keys(initialData).forEach(k => {
    state[k] = initialData[k]
  })

  // Invalidate cache
  if (req.query.invalidate === '1') {
    state.invalidateCache = true
    debug('cache invalidation enabled')
    setTimeout(() => {
      state.invalidateCache = false
      debug('cache invalidation disabled')
    }, 10000)
  }

  next()
})

// Static files w cache
app.use('/favicon.ico', express.static('public/favicon.ico'))
app.use('/assets', express.static('public/assets'))

// React app (routing is managed by React router, including 404)
app.use('/', siteRouter)

module.exports = app
