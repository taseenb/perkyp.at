import config from './config'
import state from './state'
import express from 'express'
import compression from 'compression'
import path from 'path'
import d from 'debug'
import siteRouter from './routes/site'

// Data
import initialData from '../data/initialData'

const debug = d('app:main') // Site router

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

// Time used by max-age cache
const s = 1000
const m = s * 60
const h = m * 60
const d = h * 24
const w = d * 7
const m = d * 30

// Static files w cache
app.use('/favicon.ico', express.static('public/favicon.ico'), {
  maxAge: m
})
app.use('/robots.txt', express.static('public/robots.txt'), {
  maxAge: m
})
app.use('/assets', express.static('public/assets'), {
  maxAge: d
})

// React app (routing is managed by React router, including 404)
app.use('/', siteRouter)

export default app
