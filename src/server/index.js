// require('source-map-support').install()
const config = require('./config')
const siteRouter = require('./routers/site')
const app = require('./express-app')
const debug = require('debug')('app:main')
const http = require('http')

// Site router
app.use('/', siteRouter)

// 404
app.get('*', (req, res) => {
  res.status(404).render('404', { title: '404 - Not found' })
  res.end()
})

/**
 * Get port from environment and store in Express.
 */
const port = config.port
app.set('port', port)

// Start server
// app.listen(config.port, config.host, () => {
//   debug('Express listening on port', config.port)
// })

/**
 * Create HTTP server.
 */

var server = http.createServer(app)

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(app.get('port'))
server.on('error', onError)
server.on('listening', onListening)

/**
 * Event listener for HTTP server "error" event.
 */

function onError (error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
    default:
      throw error
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening () {
  var addr = server.address()
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port
  debug('Listening on ' + bind)
}
