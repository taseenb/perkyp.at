require('source-map-support').install()
const config = require('./config')
const siteRouter = require('./routers/site')
const app = require('./express-app')
const debug = require('debug')('app:main')

// Site router
app.use('/', siteRouter)

// 404
app.get('*', (req, res) => {
  res.status(404).render('404', { title: '404 - Not found' })
  res.end()
})

// Start server
app.listen(config.port, config.host, () => {
  debug('Express listening on port', config.port)
})
