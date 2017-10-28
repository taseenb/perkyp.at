const config = require('./config')
const express = require('express')
// const bodyParser = require('body-parser')
// const compression = require('compression')
// const debug = require('debug')('app:main')// Site router
const siteRouter = require('./site')

const app = express()

app.set('view engine', 'ejs')
// app.use(bodyParser.json())

if (config.env === 'production') {
  // app.use(compression())
  // app.enable('view cache')
}

// Static files
app.use('/assets', express.static('public/assets'))

// React app (routing is managed by React router, including 404)
app.use('/', siteRouter)

module.exports = app
