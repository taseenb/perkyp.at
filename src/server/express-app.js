const config = require('./config')
const express = require('express')
const compression = require('compression')
const path = require('path')
// const debug = require('debug')('app:main')// Site router
const siteRouter = require('./site')

const app = express()

app.set('port', process.env.PORT || 8088)

app.enable('trust proxy') // needed to correctly detext http or https in requests

app.set('view engine', 'ejs')

var viewPath = path.resolve(__dirname + '/src/server/views')
app.set('views', viewPath)

if (config.env === 'production') {
  app.use(compression())
  // app.enable('view cache')
}

// Static files
app.use('/assets', express.static('public/assets'))

// React app (routing is managed by React router, including 404)
app.use('/', siteRouter)

module.exports = app
