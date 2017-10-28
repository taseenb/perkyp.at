const config = require('./config')
const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
// const debug = require('debug')('app:main')// Site router
const siteRouter = require('./routers/site')

const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.json())

if (config.env === 'production') {
  app.use(compression())
  app.enable('view cache')
}

// Static files
app.use('/assets', express.static('public/assets'))

app.use('/', siteRouter)

// 404
app.get('*', (req, res) => {
  res.status(404).render('404', { title: '404 - Not found' })
  res.end()
})

module.exports = app
