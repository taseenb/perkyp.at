const config = require('./config')
// const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
// const debug = require('debug')('app:main')

const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.json())

if (config.env === 'production') {
  app.use(compression())
  // app.enable('view cache');
}

// Static files
app.use('/assets', express.static('public/assets'))

module.exports = app
