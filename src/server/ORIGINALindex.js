// require('source-map-support').install()
// const config = require('./config')
const app = require('./express-app')
// const debug = require('debug')('app:www')
// const http = require('http')

// const port = normalizePort(config.port)
// const port = config.port
// app.set('port', port)

// const server = http.createServer(app)

app.listen(app.get('port'), () => {
  // const addr = server.address()
  // const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port
  console.log('Listening on ' + app.get('port'))
})

// server.on('error', onError)
// server.on('listening', onListening)

// function onError (error) {
//   if (error.syscall !== 'listen') {
//     throw error
//   }

//   const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port

//   console.log(error.code)

//   // handle specific listen errors with friendly messages
//   switch (error.code) {
//     case 'EACCES':
//       console.error(bind + ' requires elevated privileges')
//       process.exit(1)
//     case 'EADDRINUSE':
//       console.error(bind + ' is already in use')
//       process.exit(1)
//     default:
//       throw error
//   }
// }

// function normalizePort (val) {
//   const port = parseInt(val, 10)

//   if (isNaN(port)) {
//     // named pipe
//     return val
//   }

//   if (port >= 0) {
//     // port number
//     return port
//   }

//   return false
// }

// function onListening () {
//   const addr = server.address()
//   const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port
//   debug('Listening on ' + bind)
// }